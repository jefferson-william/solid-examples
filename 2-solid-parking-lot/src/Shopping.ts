import { ParkingLocationWithFreePeriod } from './ParkingLocationWithFreePeriod'

export class Shopping extends ParkingLocationWithFreePeriod {
  constructor(name: string, hours: number) {
    super('Shopping', name, hours)
  }

  getFreePeriod(date: Date): number {
    const dezember = 11
    if (date.getMonth() === dezember) {
      return 0
    }
    return 1
  }
}
