import { TaxProduct } from '~/TaxedProduct'

export class Cigar extends TaxProduct {
  constructor(public name: string, public price: number) {
    super('Cigar', name, price)
  }

  getTax(): number {
    return 0.2
  }
}
