const orders = [
  {
    orderNumber: 5154,
    price: 455,
    date: new Date(),
    payment: 'PIX',
    status: 'concluded',
    items: [
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 0,
        image:
          'https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/11/curso-de-administracao.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 5,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkUB4IvFVksDDKdgTSdgd3CuPTNGH2lfHyw&usqp=CAU',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },

  {
    orderNumber: 6562,
    price: 321,
    date: new Date(),
    payment: 'Boleto bancário',
    status: 'canceled',
    items: [
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 0,
        image:
          'https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/11/curso-de-administracao.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 5,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkUB4IvFVksDDKdgTSdgd3CuPTNGH2lfHyw&usqp=CAU',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 7862,
    price: 168,
    date: new Date(),
    payment: 'Cartão de crédito',
    status: 'processing',
    items: [
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 0,
        image:
          'https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/11/curso-de-administracao.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 5,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkUB4IvFVksDDKdgTSdgd3CuPTNGH2lfHyw&usqp=CAU',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 1324,
    price: 872,
    date: new Date(),
    payment: 'PIX',
    status: 'awaitingPayment',
    items: [
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 0,
        image:
          'https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/11/curso-de-administracao.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Render 3D - Lumion Avançado COMPLETO',
        area: 'Arquitetura',
        price: Number((Math.random() * (500 - 0) + 0).toFixed(2)),
        id: 5,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkUB4IvFVksDDKdgTSdgd3CuPTNGH2lfHyw&usqp=CAU',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
]

export default orders
