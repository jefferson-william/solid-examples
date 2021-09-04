import { ParkingLocation } from './ParkingLocation'

export class Airport extends ParkingLocation {
  private freeHours = 2

  constructor(name: string, hours: number) {
    super('Airport', name, hours)
  }

  calculateFreePeriod(): number {
    return this.freeHours
  }
}
