
export enum OrderStatus {
Pending = 'pending',
Completed = 'completed',
Cancelled = 'cancelled',
}

export interface Order {
id: string;
status: OrderStatus;
items: { productId: string; quantity: number }[];
}

export interface Customer {
id: string;
name: string;
isValid(): boolean;
}

export interface Product {
id: string;
name: string;
price: number;
stock: number;
}

export interface Address {
street: string;
city: string;
isValid(): boolean;
}

export interface PaymentMethod {
type: string;
isValid(): boolean;
charge(amount: number): boolean;
}

export function processOrder(
    order: Order,
    customer: Customer,
    inventory: Product[],
    shippingAddress: Address,
    paymentMethod: PaymentMethod
  ): OrderStatus {
    if (order.status !== OrderStatus.Pending) {
      throw new Error('Only pending orders can be processed.');
    }
  
    if (!customer.isValid()) {
      throw new Error('Invalid customer details.');
    }
  
    if (!shippingAddress.isValid()) {
      throw new Error('Invalid shipping address.');
    }
  
    if (!paymentMethod.isValid()) {
      throw new Error('Invalid payment method.');
    }
  
    const products = order.items.map((item) => {
      const product = inventory.find((p) => p.id === item.productId);
  
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }
  
      if (item.quantity > product.stock) {
        throw new Error(`Insufficient stock for product ${product.name}.`);
      }
  
      return {
        product,
        quantity: item.quantity,
      };
    });
  
    let totalAmount = 0;
  
    products.forEach((product) => {
      const price = product.product.price * product.quantity;
      totalAmount += price;
  
      product.product.stock -= product.quantity;
    });
  
    if (!paymentMethod.charge(totalAmount)) {
      throw new Error('Payment failed.');
    }
  
    order.status = OrderStatus.Completed;
  
    return order.status;
  }
  