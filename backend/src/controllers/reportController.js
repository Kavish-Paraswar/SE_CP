import { Appointment, Doctor, MedicalRecord, Specialization } from '../models/index.js';
import { Op } from 'sequelize';

export const summary = async (req, res) => {
  const { from, to } = req.query;
  const range = from && to ? { appointmentDate: { [Op.between]: [from, to] } } : {};
  const [booked, completed, cancelled] = await Promise.all([
    Appointment.count({ where: { ...range, status: 'booked' } }),
    Appointment.count({ where: { ...range, status: 'completed' } }),
    Appointment.count({ where: { ...range, status: 'cancelled' } })
  ]);
  const totalRecords = await MedicalRecord.count();
  const bySpecialization = await Specialization.findAll({
    attributes: ['name'],
    include: [{ model: Doctor, include: [{ model: Appointment, attributes: [] }] }]
  });
  res.json({
    appointments: { booked, completed, cancelled },
    totalRecords,
    bySpecialization: bySpecialization.map((s) => ({ name: s.name, doctors: s.Doctors?.length || 0 }))
  });
};
