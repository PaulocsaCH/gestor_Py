import { Request, Response } from "express";
import { allAppointmentsService, appointmentbyIdService, registerAppoinmentService } from "../services/appointmentsService";

export const allAppointments = async(req:Request, res:Response) => {
    try {
        const appointments = await allAppointmentsService()
        res.status(200).json(appointments) 
    } catch (error) {
        res.status(404).json(error)
    }
}

export const appointmentById = async (req:Request, res:Response) => {
    const { id } = req.params
    try {
        const byId = await appointmentbyIdService(Number(id))
        res.status(200).json(byId)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const registerAppointment = async (req:Request, res:Response) => {
    const { date, time, service, userId } = req.body
    try {
        const newAppointment = await registerAppoinmentService({ date, time, service, userId })
        res.status(200).json(newAppointment)
    } catch (error) {
        res.status(404).json(error)
    } 
}