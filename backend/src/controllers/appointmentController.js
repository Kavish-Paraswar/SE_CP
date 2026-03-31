import { Appointment, Doctor, Patient, Specialization, User } from '../models/index.js';

export const listAppointments = async (req, res) => {
  const { status, date, doctorId, patientId } = req.query;
  const where = {};
  if (status) where.status = status;
  if (date) where.appointmentDate = date;
  if (doctorId) where.doctorId = doctorId;
  if (patientId) where.patientId = patientId;
  const data = await Appointment.findAll({
    where,
    order: [['appointment_date', 'DESC']],
    include: [
      {
        model: Doctor,
        include: [
          { model: Specialization, attributes: ['name'] },
          { model: User, attributes: ['name', 'email'] }
        ]
      },
      { model: Patient, include: [{ model: User, attributes: ['name', 'email'] }] }
    ]
  });
  res.json(data);
};

export const bookAppointment = async (req, res) => {
  const { patientId, doctorId, appointmentDate, appointmentTime, reason } = req.body;
  if (!patientId || !doctorId || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const appt = await Appointment.create({
    patientId,
    doctorId,
    appointmentDate,
    appointmentTime,
    reason,
    status: 'booked'
  });
  res.status(201).json(appt);
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const appt = await Appointment.findByPk(id);
  if (!appt) return res.status(404).json({ message: 'Not found' });
  const { status, appointmentDate, appointmentTime, reason } = req.body;
  await appt.update({ status: status || appt.status, appointmentDate, appointmentTime, reason });
  res.json(appt);
};
