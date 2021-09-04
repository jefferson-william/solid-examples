import { ParkingLocation } from './ParkingLocation'

export class Shopping extends ParkingLocation {
  constructor(name: string, hours: number) {
    super('Shopping', name, hours)
  }

  getFreePeriod(): number {
    return 1
  }
}
