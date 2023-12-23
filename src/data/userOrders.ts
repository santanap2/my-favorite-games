const orders = [
  {
    orderNumber: 5154,
    price: 0,
    date: new Date(),
    payment: 'PIX',
    status: 'concluded',
    items: [
      {
        name: 'Red Dead Redemption 2',
        genre: 'actionAdventure',
        genrePt: 'Ação e aventura de mundo aberto',
        price: 249.9,
        id: 0,
        image:
          'https://www.outerspace.com.br/wp-content/uploads/2018/05/red_dead_redemption_2_cover_art.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Cyberpunk 2077 Complete Edition',
        genre: 'rpgOpenWorld',
        genrePt: 'RPG de mundo aberto',
        price: 299.99,
        id: 1,
        image:
          'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 5754,
    price: 0,
    date: new Date(),
    payment: 'PIX',
    status: 'concluded',
    items: [
      {
        name: 'God of War Ragnarok',
        genre: 'actionAdventure',
        genrePt: 'Ação e aventura',
        price: 349.9,
        id: 12,
        image:
          'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Forza Horizon 5',
        genre: 'racing',
        genrePt: 'Corrida',
        price: 249.9,
        id: 14,
        image:
          'https://www.gtplanet.net/wp-content/uploads/2021/08/ForzaHorizon5_KeyArt_Horiz_RGB_Final.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Horizon Forbidden West',
        genre: 'rpgOpenWorld',
        genrePt: 'RPG de mundo aberto',
        price: 299.9,
        id: 15,
        image:
          'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki0STHGAkIF06Q4AU8Ow4OkV.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 6562,
    price: 0,
    date: new Date(),
    payment: 'Boleto bancário',
    status: 'canceled',
    items: [
      {
        name: `Baldur's Gate 3`,
        genre: 'rpgTurnBased',
        genrePt: 'RPG de turnos',
        price: 199.9,
        id: 2,
        image:
          'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Dead Space Remake',
        genre: 'actionTerror',
        genrePt: 'Ação e terror',
        price: 249.9,
        id: 3,
        image: 'https://pbs.twimg.com/media/FeK7GBvVUAA_OSE.jpg:large',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 7862,
    price: 0,
    date: new Date(),
    payment: 'Cartão de crédito',
    status: 'processing',
    items: [
      {
        name: 'Battlefield 2042',
        genre: 'fps',
        genrePt: 'Tiro em primeira pessoa',
        price: 199.9,
        id: 4,
        image: 'https://pbs.twimg.com/media/E3cByv9VoAs1IYB.jpg:large',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Starfield',
        genre: 'rpgOpenWorld',
        genrePt: 'RPG de mundo aberto',
        price: 279.9,
        id: 5,
        image:
          'https://images.ctfassets.net/rporu91m20dc/2dRA4bGtWJbKPZ7EWsrtZn/20a61f07686036326200142b657b6a4f/Starfield-IntoTheStarfield_Wallpaper_5654x2763-01.jpg?q=70&fm=webp',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    orderNumber: 1324,
    price: 0,
    date: new Date(),
    payment: 'PIX',
    status: 'awaitingPayment',
    items: [
      {
        name: 'Grand Theft Auto VI',
        genre: 'actionAdventure',
        genrePt: 'Ação e aventura de mundo aberto',
        price: 349.9,
        id: 6,
        image:
          'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/12/05/GTA-6-Easter-eggs-header.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Call Of Duty: MODERN WARFARE III',
        genre: 'fps',
        genrePt: 'Tiro em primeira pessoa',
        price: 349.9,
        id: 7,
        image:
          'https://gameranx.com/wp-content/uploads/2023/10/mw3-featured2.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
]

orders.forEach((order) => {
  const pricesSum = order.items.reduce((acc, item) => acc + item.price, 0)
  order.price = pricesSum
})

export default orders
