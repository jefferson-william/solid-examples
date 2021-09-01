import { ParkingLot } from './ParkingLot'

test('should calculate subtotal period', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation('Beach', 'Ubatuba', 5)
  parkingLot.addParkingLocation('Shopping', 'Vale Sul', 4)
  parkingLot.addParkingLocation('Airport', 'Guarulhos', 10)
  expect(parkingLot.getSubtotalPeriod()).toBe(19)
})

test('should calculate total period discount', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation('Beach', 'Ubatuba', 5)
  parkingLot.addParkingLocation('Shopping', 'Vale Sul', 4)
  parkingLot.addParkingLocation('Airport', 'Guarulhos', 10)
  expect(parkingLot.getFreePeriod()).toBe(3)
})

test('should calculate total period', () => {
  const parkingLot = new ParkingLot()
  parkingLot.addParkingLocation('Beach', 'Ubatuba', 5)
  parkingLot.addParkingLocation('Shopping', 'Vale Sul', 4)
  parkingLot.addParkingLocation('Airport', 'Guarulhos', 10)
  expect(parkingLot.getTotalPeriod()).toBe(16)
})
