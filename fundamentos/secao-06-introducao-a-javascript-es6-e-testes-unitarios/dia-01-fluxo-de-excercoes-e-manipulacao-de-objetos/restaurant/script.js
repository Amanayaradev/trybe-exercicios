const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  const nomeDelivery = Object.values(order.order.delivery)
  
  const customerInfo = (order) => {
    console.log(`Olá ${nomeDelivery[0]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber} , ${Object.entries(order.address)}`)
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const chavesPizza = Object.keys(order.order.pizza);
    const chavesBebida = Object.keys(order.order.drinks);
    const valorPizza = Object.values(order.order.pizza);
    const valorBebidas = Object.values(order.order.drinks);
    console.log(`Olá ${nomeDelivery[0] = "Luiz Silva"}, o total do seu pedido de ${chavesPizza[0]} e ${chavesPizza[1]} e ${chavesBebida} é ${valorPizza[0].price + valorPizza[1].price + valorBebidas[0].price - 5}.`)  
  };
  
  orderModifier(order);