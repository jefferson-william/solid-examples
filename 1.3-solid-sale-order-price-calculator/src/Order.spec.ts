import { Order } from '~/Order'
import { Cigar } from '~/Cigar'
import { Beer } from '~/Beer'
import { Water } from '~/Water'
import { PriceCalculator } from '~/PriceCalculator'
import { Rice } from '~/Rice'
import { ItemDiscount } from '~/ItemDiscount'
import { Item } from '~/Item'
import { Promotion } from '~/Promotion'

describe('Order', () => {
  const januaryDate = new Date('2021-01-01T00:00:00')
  const februaryDate = new Date('2021-02-01T00:00:00')

  const priceCalculator = new PriceCalculator()

  const cigarProduct = new Cigar('Malboro', 10)
  const beerProduct = new Beer('Itaipava', 5)
  const waterProduct = new Water('Crystal', 2)
  const riceProduct = new Rice('São João', 20)

  describe('when test between taxed and not taxed products', () => {
    describe('when is to calculate with 1 each product', () => {
      it('should calculate total', () => {
        const order = new Order(priceCalculator)

        const riceItem = new Item(riceProduct)
        const cigarItem = new Item(cigarProduct)
        const beerItem = new Item(beerProduct)
        const waterItem = new Item(waterProduct)

        order.addItem(cigarItem)
        order.addItem(beerItem)
        order.addItem(waterItem)
        order.addItem(riceItem)

        expect(order.getTotal(januaryDate)).toBe(39.5)
      })

      describe('when rice have discount', () => {
        const riceItemWithDiscount = new ItemDiscount(riceProduct, 1)

        it('should calculate total with 10% of discount', () => {
          const order = new Order(priceCalculator)

          riceItemWithDiscount.addPromotion(new Promotion(0.1))

          const riceItem = new Item(riceProduct)
          const cigarItem = new Item(cigarProduct)
          const beerItem = new Item(beerProduct)
          const waterItem = new Item(waterProduct)

          order.addItem(cigarItem)
          order.addItem(beerItem)
          order.addItem(waterItem)
          order.addItem(riceItemWithDiscount)

          expect(order.getTotal(januaryDate)).toBe(37.5)
        })

        describe('when remove rice with discount', () => {
          it('should calculate without rice discount value', () => {
            const order = new Order(priceCalculator)

            const riceItem = new Item(riceProduct)
            const cigarItem = new Item(cigarProduct)
            const beerItem = new Item(beerProduct)
            const waterItem = new Item(waterProduct)

            order.addItem(cigarItem)
            order.addItem(beerItem)
            order.addItem(waterItem)
            order.addItem(riceItemWithDiscount)

            order.removeItem(riceItemWithDiscount)

            expect(order.getTotal(januaryDate)).toBe(19.5)
          })
        })
      })

      describe('when remove water', () => {
        it('should calculate without water value', () => {
          const order = new Order(priceCalculator)

          const riceItem = new Item(riceProduct)
          const cigarItem = new Item(cigarProduct)
          const beerItem = new Item(beerProduct)
          const waterItem = new Item(waterProduct)

          order.addItem(cigarItem)
          order.addItem(beerItem)
          order.addItem(waterItem)
          order.addItem(riceItem)

          order.removeItem(waterItem)

          expect(order.getTotal(januaryDate)).toBe(37.5)
        })
      })

      describe('when is february that beer is fee-free', () => {
        it('should calculate without beer tax', () => {
          const order = new Order(priceCalculator)

          const riceItem = new Item(riceProduct)
          const cigarItem = new Item(cigarProduct)
          const beerItem = new Item(beerProduct)
          const waterItem = new Item(waterProduct)

          order.addItem(cigarItem)
          order.addItem(beerItem)
          order.addItem(waterItem)
          order.addItem(riceItem)

          expect(order.getTotal(februaryDate)).toBe(39)
        })
      })
    })

    describe('when is to calculate with 2 each product', () => {
      it('should calculate total', () => {
        const order = new Order(priceCalculator)
        const riceItem = new Item(riceProduct)
        const cigarItem = new Item(cigarProduct)
        const beerItem = new Item(beerProduct)
        const waterItem = new Item(waterProduct)

        cigarItem.updateQuantity(2)
        beerItem.updateQuantity(2)
        waterItem.updateQuantity(2)
        riceItem.updateQuantity(2)

        order.addItem(cigarItem)
        order.addItem(beerItem)
        order.addItem(waterItem)
        order.addItem(riceItem)

        expect(order.getTotal(januaryDate)).toBe(79)
      })

      describe('when is february that beer is fee-free', () => {
        it('should calculate without beer tax', () => {
          const order = new Order(priceCalculator)
          const riceItem = new Item(riceProduct)
          const cigarItem = new Item(cigarProduct)
          const beerItem = new Item(beerProduct)
          const waterItem = new Item(waterProduct)

          cigarItem.updateQuantity(2)
          beerItem.updateQuantity(2)
          waterItem.updateQuantity(2)
          riceItem.updateQuantity(2)

          order.addItem(cigarItem)
          order.addItem(beerItem)
          order.addItem(waterItem)
          order.addItem(riceItem)

          expect(order.getTotal(februaryDate)).toBe(78)
        })
      })
    })
  })
})
