interface IAppointments {
    id: number,
    date: string,
    time: string,
    service: string, // NailWork | NailExtension | Kapping - Semipermanente
    userId: number,
    status: "active" | "cancelled"
}

export default IAppointments