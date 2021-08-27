import { TaxedProduct } from '~/TaxedProduct'

export class Cigar extends TaxedProduct {
  constructor(public name: string, public price: number) {
    super('Cigar', name, price)
  }

  getTax(): number {
    return 0.2
  }
}
