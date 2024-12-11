import { Router } from "express";
import { allAppointments, appointmentById, cancelAppointment, registerAppointment } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router()

appointmentRouter.get("/all-appointments", allAppointments)
appointmentRouter.get("/:id", appointmentById)

appointmentRouter.post("/register-appointment", registerAppointment)
appointmentRouter.put("/:id", cancelAppointment)

export default appointmentRouter