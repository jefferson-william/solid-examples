import { ParkingLocationWithFreePeriod } from './ParkingLocationWithFreePeriod'

export class Airport extends ParkingLocationWithFreePeriod {
  constructor(name: string, hours: number) {
    super('Airport', name, hours)
  }

  getFreePeriod(): number {
    return 2
  }
}
