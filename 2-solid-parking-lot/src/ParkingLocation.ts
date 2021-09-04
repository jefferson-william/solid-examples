export class ParkingLocation {
  location: string
  name: string
  hours: number

  constructor(location: string, name: string, hours: number) {
    this.location = location
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(): number {
    if (this.location === 'Shopping') {
      return 1
    }
    if (this.location === 'Airport') {
      return 2
    }

    return 0
  }
}
