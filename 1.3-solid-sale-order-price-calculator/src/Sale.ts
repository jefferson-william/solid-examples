import { Order } from '~/Order'

export class Sale {
  private orders: Order[] = []

  addOrder(order: Order) {
    this.orders.push(order)
  }

  getSubtotal(): number {
    return this.orders.reduce((accumulator, order) => accumulator + order.getSubtotal(), 0)
  }

  getTaxes(date: Date): number {
    return this.orders.reduce((accumulator, order) => accumulator + order.getTaxes(date), 0)
  }

  getTotal(date: Date): number {
    return this.orders.reduce((accumulator, order) => accumulator + order.getTotal(date), 0)
  }
}
