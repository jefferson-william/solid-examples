import { ParkingLocation } from './ParkingLocation'

export class Beach extends ParkingLocation {
  private freeHours = 0

  constructor(name: string, hours: number) {
    super('Beach', name, hours)
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
