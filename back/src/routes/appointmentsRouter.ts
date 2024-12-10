import { Router } from "express";
import { allAppointments, appointmentById, registerAppointment } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router()

appointmentRouter.get("/all-appointments", allAppointments)
appointmentRouter.get("/:id", appointmentById)

appointmentRouter.post("/register-appointment", registerAppointment)

export default appointmentRouter