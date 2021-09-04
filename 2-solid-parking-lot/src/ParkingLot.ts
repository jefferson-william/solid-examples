import { ParkingLocation } from './ParkingLocation'
import { ParkingLocationWithFreePeriod } from './ParkingLocationWithFreePeriod'

export class ParkingLot {
  parkingLocations: ParkingLocation[]

  constructor() {
    this.parkingLocations = []
  }

  addParkingLocation(parkingLocation: ParkingLocation): void {
    this.parkingLocations.push(parkingLocation)
  }

  getSubtotalPeriod(): number {
    return this.parkingLocations.reduce((accumulator, parkingLocation) => {
      return accumulator + parkingLocation.hours
    }, 0)
  }

  getFreePeriod(date: Date): number {
    return this.parkingLocations.reduce((accumulator, parkingLocation) => {
      if (parkingLocation instanceof ParkingLocationWithFreePeriod) {
        return accumulator + parkingLocation.calculateFreePeriod(date)
      }
      return accumulator
    }, 0)
  }

  getTotalPeriod(date: Date): number {
    return this.getSubtotalPeriod() - this.getFreePeriod(date)
  }
}
