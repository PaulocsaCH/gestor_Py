import { Request, Response } from "express";
import { allAppointmentsService, appointmentbyIdService, cancelAppointmentService, registerAppoinmentService } from "../services/appointmentsService";
import IAppointments from "../Interfaces/IAppointments";

export const allAppointments = async(req:Request, res:Response) => {
    try {
        const appointments: IAppointments[] = await allAppointmentsService()
        res.status(200).json(appointments) 
    } catch (error) {
        res.status(404).json(error)
    }
}

export const appointmentById = async (req:Request, res:Response) => {
    const { id } = req.params
    try {
        const byId: IAppointments|undefined = await appointmentbyIdService(Number(id))
        res.status(200).json(byId)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const registerAppointment = async (req:Request, res:Response) => {
    const { date, time, service, userId } = req.body
    try {
        const newAppointment: IAppointments = await registerAppoinmentService({ date, time, service, userId })
        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(404).json(error)
    } 
}

export const cancelAppointment = async (req:Request, res:Response) => {
    const { id } = req.params
    try {
        const cancelById: IAppointments = await cancelAppointmentService(Number(id))
        res.status(200).json(cancelById)
    } catch (error) {
        res.status(400).json(error)
    }
}