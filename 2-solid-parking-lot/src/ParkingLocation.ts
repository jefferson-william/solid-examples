export abstract class ParkingLocation {
  location: string
  name: string
  hours: number

  constructor(location: string, name: string, hours: number) {
    this.location = location
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(): number {
    return this.getFreePeriod()
  }

  abstract getFreePeriod(): number
}
