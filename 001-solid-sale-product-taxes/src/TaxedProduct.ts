import { Product } from '~/Product'

export abstract class TaxProduct extends Product {
  constructor(public category: string, public name: string, public price: number) {
    super(category, name, price)
  }

  calculateTaxes(date: Date): number {
    return this.price * this.getTax(date)
  }

  abstract getTax(date: Date): number
}
