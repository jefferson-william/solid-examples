export class ParkingLot {
  tickets: { plate: string; checkInDate: Date }[]

  constructor() {
    this.tickets = []
  }

  checkIn(plate: string, checkInDate: Date) {
    this.tickets.push({ plate, checkInDate })
  }

  checkOut(plate: string, checkoutDate: Date) {
    const ticket = this.tickets.find((ticket) => ticket.plate === plate)
    if (!ticket) throw new Error('Ticket not found')
    const period = (checkoutDate.getTime() - ticket.checkInDate.getTime()) / (1000 * 60 * 60)
    const amount = period * 5
    return {
      amount,
    }
  }
}
