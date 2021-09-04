import { ParkingLocation } from './ParkingLocation'

export class Shopping extends ParkingLocation {
  private freeHours = 1

  constructor(name: string, hours: number) {
    super('Shopping', name, hours)
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
