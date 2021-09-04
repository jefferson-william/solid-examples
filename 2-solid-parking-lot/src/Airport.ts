import { ParkingLocation } from './ParkingLocation'

export class Airport extends ParkingLocation {
  constructor(name: string, hours: number) {
    super('Airport', name, hours)
  }

  getFreePeriod(): number {
    return 2
  }
}
