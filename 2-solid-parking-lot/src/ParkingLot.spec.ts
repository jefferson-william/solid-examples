import { ParkingLot } from './ParkingLot'

test('should calculate value of ticket to a car that was parked for 3 hours beach', () => {
  const parkingLot = new ParkingLot('beach')
  parkingLot.checkIn('ABC-1234', new Date('2020-10-10T10:00:00'))
  const ticket = parkingLot.checkOut('ABC-1234', new Date('2020-10-10T13:00:00'))
  expect(ticket.amount).toBe(15)
})

test('should calculate value of ticket to a car that was parked for 2 hours shopping', () => {
  const parkingLot = new ParkingLot('shopping')
  parkingLot.checkIn('ABC-1234', new Date('2020-10-10T12:00:00'))
  const ticket = parkingLot.checkOut('ABC-1234', new Date('2020-10-10T14:00:00'))
  expect(ticket.amount).toBe(0)
})

test('should calculate value of ticket to a car that was parked for 10 hours airport', () => {
  const parkingLot = new ParkingLot('airport')
  parkingLot.checkIn('ABC-1234', new Date('2020-10-10T10:00:00'))
  const ticket = parkingLot.checkOut('ABC-1234', new Date('2020-10-10T20:00:00'))
  expect(ticket.amount).toBe(31)
})
