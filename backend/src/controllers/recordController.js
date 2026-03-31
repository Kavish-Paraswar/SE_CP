import { Op } from 'sequelize';
import { MedicalRecord, Prescription, Doctor, Patient } from '../models/index.js';

export const listRecords = async (req, res) => {
  const { patientId, doctorId, date, q } = req.query;
  const where = {};
  if (patientId) where.patientId = patientId;
  if (doctorId) where.doctorId = doctorId;
  if (date) where.visitDate = date;
  if (q) where.notes = { [Op.like]: `%${q}%` };
  const data = await MedicalRecord.findAll({
    where,
    include: [{ model: Prescription }, { model: Doctor }, { model: Patient }],
    order: [['visit_date', 'DESC']]
  });
  res.json(data);
};

export const createRecord = async (req, res) => {
  const { patientId, doctorId, diagnosis, treatment, notes, visitDate } = req.body;
  if (!patientId || !doctorId || !diagnosis || !visitDate) return res.status(400).json({ message: 'Missing fields' });
  const rec = await MedicalRecord.create({ patientId, doctorId, diagnosis, treatment, notes, visitDate });
  res.status(201).json(rec);
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const rec = await MedicalRecord.findByPk(id);
  if (!rec) return res.status(404).json({ message: 'Not found' });
  const { diagnosis, treatment, notes, visitDate } = req.body;
  await rec.update({ diagnosis, treatment, notes, visitDate });
  res.json(rec);
};
