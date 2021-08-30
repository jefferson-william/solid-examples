export class ParkingLot {
  tickets: { plate: string; checkInDate: Date }[]
  location: string

  constructor(location: string) {
    this.tickets = []
    this.location = location
  }

  checkIn(plate: string, checkInDate: Date) {
    this.tickets.push({ plate, checkInDate })
  }

  checkOut(plate: string, checkoutDate: Date) {
    const ticket = this.tickets.find((ticket) => ticket.plate === plate)
    if (!ticket) throw new Error('Ticket not found')
    const period = (checkoutDate.getTime() - ticket.checkInDate.getTime()) / (1000 * 60 * 60)
    let amount = 0
    if (this.location === 'beach') {
      amount = period * 5
    }
    if (this.location === 'shopping') {
      if (ticket.checkInDate.getHours() >= 12 && ticket.checkInDate.getHours() <= 14) {
        amount = 0
      } else {
        amount = period * 3
      }
    }
    if (this.location === 'airport') {
      amount = 10
      const remainingHours = period - 3
      if (remainingHours > 0) {
        amount += remainingHours * 3
      }
    }
    return {
      amount,
    }
  }
}
