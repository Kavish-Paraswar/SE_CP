import { Doctor, Specialization, User } from '../models/index.js';

export const listDoctors = async (req, res) => {
  const { specialization } = req.query;
  const where = specialization ? { specializationId: specialization } : {};
  const doctors = await Doctor.findAll({
    where,
    include: [
      { model: User, attributes: ['name', 'email', 'role'] },
      { model: Specialization, attributes: ['name'] }
    ]
  });
  res.json(doctors);
};
