import { ParkingLocationWithFreePeriod } from './ParkingLocationWithFreePeriod'

export class Shopping extends ParkingLocationWithFreePeriod {
  constructor(name: string, hours: number) {
    super('Shopping', name, hours)
  }

  getFreePeriod(): number {
    return 1
  }
}
