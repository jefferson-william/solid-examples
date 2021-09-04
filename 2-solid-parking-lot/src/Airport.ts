export class Airport {
  location: string
  name: string
  hours: number

  private freeHours = 2

  constructor(name: string, hours: number) {
    this.location = 'Airport'
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
