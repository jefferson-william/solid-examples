import { Item } from '~/Item'
import { Sale } from '~/Sale'
import { Cigar } from '~/Cigar'
import { Beer } from '~/Beer'
import { Water } from '~/Water'
import { Order } from '~/Order'

describe('Sale', () => {
  const cigarProduct = new Cigar('Malboro', 10)
  const beerProduct = new Beer('Itaipava', 5)
  const waterProduct = new Water('Crystal', 2)

  const cigarItem = new Item(cigarProduct)
  const beerItem = new Item(beerProduct)
  const waterItem = new Item(waterProduct)

  test('should calculate subtotal', () => {
    const sale = new Sale()
    const order = new Order()
    order.addItem(cigarItem)
    order.addItem(beerItem)
    order.addItem(waterItem)
    sale.addOrder(order)
    expect(sale.getSubtotal()).toBe(17)
  })

  test('should calculate taxes', () => {
    const sale = new Sale()
    const order = new Order()
    order.addItem(cigarItem)
    order.addItem(beerItem)
    order.addItem(waterItem)
    sale.addOrder(order)
    expect(sale.getTaxes(new Date('2021-01-01T00:00:00'))).toBe(2.5)
  })

  test('should calculate total', () => {
    const sale = new Sale()
    const order = new Order()
    order.addItem(cigarItem)
    order.addItem(beerItem)
    order.addItem(waterItem)
    sale.addOrder(order)
    expect(sale.getTotal(new Date('2021-01-01T00:00:00'))).toBe(19.5)
  })

  test('should calculate total without Beer tax in february', () => {
    const sale = new Sale()
    const order = new Order()
    order.addItem(cigarItem)
    order.addItem(beerItem)
    order.addItem(waterItem)
    sale.addOrder(order)
    expect(sale.getTotal(new Date('2021-02-01T00:00:00'))).toBe(19)
  })
})
