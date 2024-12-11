import { error } from "console"
import RegisterAppointmentsDto from "../dto/RegisterAppointmentsDto"
import IAppointments from "../Interfaces/IAppointments"

const appointments: IAppointments[] = [
    {
        id: 1,
        date: "13-12-2024",
        time: "12:30",
        service: "NW",
        userId: 1,
        status: "active"
    },
    {
        id: 2,
        date: "21-12-2024",
        time: "12:30",
        service: "NE",
        userId: 3,
        status: "active"
    },
    {
        id: 3,
        date: "04-01-2025",
        time: "14:30",
        service: "KS",
        userId: 2,
        status: "active"
    }
]

let id: number = 4

export const allAppointmentsService = async () => {
    return appointments
}

export const appointmentbyIdService = async (id:number) => {
    const foundById = await appointments.find((appointment)=>{
        return id === appointment.id
    })

    return foundById
}

export const registerAppoinmentService = async (appointmentData:RegisterAppointmentsDto) => {
    const newAppointment: IAppointments = {
        id,
        date: appointmentData.date,
        time: appointmentData.time,
        service: appointmentData.service,
        userId: appointmentData.userId,
        status: "active"
    }
    appointments.push(newAppointment)
    id++

    return newAppointment
}

export const cancelAppointmentService = async (id:number) => {
    const foundAppointment = appointments.find((appointment)=>{
        if(id === appointment.id) return appointment
    })
    if(!foundAppointment) throw error

    foundAppointment.status= "cancelled"

    return foundAppointment
}