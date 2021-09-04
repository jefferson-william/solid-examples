import { ParkingLocation } from './ParkingLocation'

export class Beach extends ParkingLocation {
  constructor(name: string, hours: number) {
    super('Beach', name, hours)
  }

  calculateFreePeriod(): number {
    throw new Error('Not implemented')
  }
}
