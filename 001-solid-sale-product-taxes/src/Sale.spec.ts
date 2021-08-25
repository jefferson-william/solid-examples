import { Sale } from '~/Sale'
import { Cigar } from '~/Cigar'
import { Beer } from '~/Beer'
import { Water } from '~/Water'

describe('entity/Sale', () => {
  test('should calculate subtotal', () => {
    const sale = new Sale()
    sale.addProduct(new Cigar('Malboro', 10))
    sale.addProduct(new Beer('Itaipava', 5))
    sale.addProduct(new Water('Crystal', 2))
    expect(sale.getSubtotal()).toBe(17)
  })

  test('should calculate taxes', () => {
    const sale = new Sale()
    sale.addProduct(new Cigar('Malboro', 10))
    sale.addProduct(new Beer('Itaipava', 5))
    sale.addProduct(new Water('Crystal', 2))
    expect(sale.getTaxes(new Date('2021-01-01'))).toBe(2.5)
  })

  test('should calculate total', () => {
    const sale = new Sale()
    sale.addProduct(new Cigar('Malboro', 10))
    sale.addProduct(new Beer('Itaipava', 5))
    sale.addProduct(new Water('Crystal', 2))
    expect(sale.getTotal(new Date('2021-01-01'))).toBe(19.5)
  })

  test('should calculate total without Beer tax in february', () => {
    const sale = new Sale()
    sale.addProduct(new Cigar('Malboro', 10))
    sale.addProduct(new Beer('Itaipava', 5))
    sale.addProduct(new Water('Crystal', 2))
    expect(sale.getTotal(new Date('2021-02-01T00:00:00'))).toBe(19)
  })
})
