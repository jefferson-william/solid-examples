import { ParkingLocation } from './ParkingLocation'

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

  getFreePeriod(): number {
    return this.parkingLocations.reduce((accumulator, parkingLocation) => {
      return accumulator + parkingLocation.calculateFreePeriod()
    }, 0)
  }

  getTotalPeriod(): number {
    return this.getSubtotalPeriod() - this.getFreePeriod()
  }
}
