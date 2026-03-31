# API Blueprint (upcoming backend)

Base path: `/api`

## Auth
- `POST /auth/register` — {name, email, password, role} → JWT
- `POST /auth/login` — {email, password} → JWT + user
- `GET /auth/me` — bearer token → profile

## Users & Roles
- `GET /users` (admin)
- `GET /doctors` (search by specialization)
- `GET /patients/:id`

## Appointments
- `POST /appointments` — book {doctorId, patientId, date, time, reason}
- `PATCH /appointments/:id` — reschedule/cancel/status
- `GET /appointments` — filters: date, status, doctorId, patientId
- `GET /appointments/:id` — detail (future)

## Medical Records & Prescriptions
- `GET /records` — filters: patientId, doctorId, date, keyword
- `POST /records` — create visit note
- `PATCH /records/:id`
- `GET /prescriptions?recordId=`
- `POST /prescriptions`

## Notifications
- `GET /notifications` — list user notifications
- `PATCH /notifications/:id/read`

## Reports
- `GET /reports/summary?from=&to=` — counts by status, specialization

### Security
- JWT auth middleware on all except login/register.
- Role guards: patient/doctor/admin.
- Passwords hashed with bcrypt; tokens signed with `JWT_SECRET`.
