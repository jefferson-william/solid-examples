import { Airport } from './Airport'
import { Beach } from './Beach'
import { ParkingLot } from './ParkingLot'
import { Shopping } from './Shopping'

test('should calculate subtotal period', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation(new Beach('Ubatuba', 5))
  parkingLot.addParkingLocation(new Shopping('Vale Sul', 4))
  parkingLot.addParkingLocation(new Airport('Guarulhos', 10))
  expect(parkingLot.getSubtotalPeriod()).toBe(19)
})

test('should calculate total period discount', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation(new Beach('Ubatuba', 5))
  parkingLot.addParkingLocation(new Shopping('Vale Sul', 4))
  parkingLot.addParkingLocation(new Airport('Guarulhos', 10))
  expect(parkingLot.getFreePeriod(new Date('2021-01-01T00:00:00'))).toBe(3)
})

test('should calculate total period', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation(new Beach('Ubatuba', 5))
  parkingLot.addParkingLocation(new Shopping('Vale Sul', 4))
  parkingLot.addParkingLocation(new Airport('Guarulhos', 10))
  expect(parkingLot.getTotalPeriod(new Date('2021-01-01T00:00:00'))).toBe(16)
})

describe('when dezember', () => {
  test('should calculate total period discount', () => {
    const parkingLot = new ParkingLot()
    parkingLot.addParkingLocation(new Beach('Ubatuba', 5))
    parkingLot.addParkingLocation(new Shopping('Vale Sul', 4))
    parkingLot.addParkingLocation(new Airport('Guarulhos', 10))
    expect(parkingLot.getFreePeriod(new Date('2021-12-01T00:00:00'))).toBe(2)
  })

  test('should calculate total period', () => {
    const parkingLot = new ParkingLot()
    parkingLot.addParkingLocation(new Beach('Ubatuba', 5))
    parkingLot.addParkingLocation(new Shopping('Vale Sul', 4))
    parkingLot.addParkingLocation(new Airport('Guarulhos', 10))
    expect(parkingLot.getTotalPeriod(new Date('2021-12-01T00:00:00'))).toBe(17)
  })
})
