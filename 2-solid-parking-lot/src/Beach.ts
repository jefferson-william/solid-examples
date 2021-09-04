export class Beach {
  location: string
  name: string
  hours: number

  private freeHours = 0

  constructor(name: string, hours: number) {
    this.location = 'Beach'
    this.name = name
    this.hours = hours
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
