import { TaxProduct } from '~/TaxedProduct'

export class Beer extends TaxProduct {
  constructor(public name: string, public price: number) {
    super('Beer', name, price)
  }

  getTax(date: Date): number {
    const february = 1
    if (date.getMonth() === february) {
      return 0
    }
    return 0.1
  }
}
