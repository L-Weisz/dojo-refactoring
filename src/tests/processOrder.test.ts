import { Address, Customer, Order, OrderStatus, PaymentMethod, Product, processOrder } from "../processOrder";


describe('processOrder', () => {
  let order: Order;
  let customer: Customer;
  let inventory: Product[];
  let shippingAddress: Address;
  let paymentMethod: PaymentMethod;

  beforeEach(() => {
    // Set up initial values for each test
    order = {
      id: 'order1',
      status: OrderStatus.Pending,
      items: [
        { productId: 'product1', quantity: 2 },
        { productId: 'product2', quantity: 3 },
      ],
    };

    customer = {
      id: 'customer1',
      name: 'John Doe',
      isValid: () => true,
    };

    inventory = [
      { id: 'product1', name: 'Product 1', price: 10, stock: 5 },
      { id: 'product2', name: 'Product 2', price: 15, stock: 10 },
    ];

    shippingAddress = {
      street: '123 Main St',
      city: 'Example City',
      isValid: () => true,
    };

    paymentMethod = {
      type: 'credit',
      isValid: () => true,
      charge: (amount: number) => true,
    };
  });

  it('should process a pending order and update its status to completed', () => {
    const result = processOrder(order, customer, inventory, shippingAddress, paymentMethod);
    expect(result).toBe(OrderStatus.Completed);
    expect(order.status).toBe(OrderStatus.Completed);
  });

  it('should throw an error if the order status is not pending', () => {
    order.status = OrderStatus.Completed;
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Only pending orders can be processed.'
    );
  });

  it('should throw an error if the customer details are invalid', () => {
    customer.isValid = () => false;
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Invalid customer details.'
    );
  });

  it('should throw an error if the shipping address is invalid', () => {
    shippingAddress.isValid = () => false;
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Invalid shipping address.'
    );
  });

  it('should throw an error if the payment method is invalid', () => {
    paymentMethod.isValid = () => false;
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Invalid payment method.'
    );
  });

  it('should throw an error if a product in the order is not found in the inventory', () => {
    order.items.push({ productId: 'product3', quantity: 1 });
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Product with ID product3 not found.'
    );
  });

  it('should throw an error if the quantity of a product in the order exceeds its stock', () => {
    order.items.push({ productId: 'product1', quantity: 10 });
    expect(() => processOrder(order, customer, inventory, shippingAddress, paymentMethod)).toThrowError(
      'Insufficient stock for product Product 1.'
    );
  });

})
