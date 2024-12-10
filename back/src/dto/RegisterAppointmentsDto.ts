interface RegisterAppointmentsDto {
    date: string,
    time: string,
    service: string, // unicos datos: "NW" | "NE" | "KS"
    userId: number
}

export default RegisterAppointmentsDto