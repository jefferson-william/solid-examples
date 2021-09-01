import { ParkingLocation } from './ParkingLocation'

export class ParkingLot {
  parkingLocations: ParkingLocation[]

  constructor() {
    this.parkingLocations = []
  }

  addParkingLocation(location: string, name: string, hours: number): void {
    this.parkingLocations.push({ location, name, hours })
  }

  getSubtotalPeriod(): number {
    return this.parkingLocations.reduce((accumulator, parkingLocation) => {
      return accumulator + parkingLocation.hours
    }, 0)
  }

  getFreePeriod(): number {
    return this.parkingLocations.reduce((accumulator, parkingLocation) => {
      if (parkingLocation.location === 'Shopping') {
        accumulator += 1
      }
      if (parkingLocation.location === 'Airport') {
        accumulator += 2
      }
      return accumulator
    }, 0)
  }

  getTotalPeriod(): number {
    return this.getSubtotalPeriod() - this.getFreePeriod()
  }
}
