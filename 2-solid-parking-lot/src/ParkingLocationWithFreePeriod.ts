export abstract class ParkingLocationWithFreePeriod {
  location: string
  name: string
  hours: number

  constructor(location: string, name: string, hours: number) {
    this.location = location
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(date: Date): number {
    return this.getFreePeriod(date)
  }

  abstract getFreePeriod(date: Date): number
}
