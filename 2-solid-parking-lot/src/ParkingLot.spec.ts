import { ParkingLot } from './ParkingLot'

test('should calculate value of ticket to a car that was parked for 3 hours', () => {
  const parkingLot = new ParkingLot()
  parkingLot.checkIn('ABC-1234', new Date('2020-10-10T10:00:00'))
  const ticket = parkingLot.checkOut('ABC-1234', new Date('2020-10-10T13:00:00'))
  expect(ticket.amount).toBe(15)
})
