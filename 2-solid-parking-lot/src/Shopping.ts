export class Shopping {
  location: string
  name: string
  hours: number

  private freeHours = 1

  constructor(name: string, hours: number) {
    this.location = 'Shopping'
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
