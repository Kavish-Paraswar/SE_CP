import { Prescription } from '../models/index.js';

export const listPrescriptions = async (req, res) => {
  const { recordId, patientId } = req.query;
  const where = {};
  if (recordId) where.medicalRecordId = recordId;
  if (patientId) where.patientId = patientId;
  const data = await Prescription.findAll({ where });
  res.json(data);
};

export const createPrescription = async (req, res) => {
  const { medicalRecordId, patientId, doctorId, medicines, dosageInstructions } = req.body;
  if (!medicalRecordId || !patientId || !doctorId || !medicines || !dosageInstructions) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const pres = await Prescription.create({ medicalRecordId, patientId, doctorId, medicines, dosageInstructions });
  res.status(201).json(pres);
};
