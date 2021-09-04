import { ParkingLocation } from './ParkingLocation'

export class Beach extends ParkingLocation {
  constructor(name: string, hours: number) {
    super('Beach', name, hours)
  }

  getFreePeriod(): number {
    return 0
  }
}
