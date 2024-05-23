const allGames = [
  {
    id: 1,
    name: 'Red Dead Redemption 2',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 1,
    price: 249,
    image: 'https://howlongtobeat.com/games/27100_Red_Dead_Redemption_2.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 2,
    name: 'Cyberpunk 2077 Complete Edition',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 2,
    price: 299,
    image: 'https://howlongtobeat.com/games/Cyberpunk-2077-2.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 3,
    name: "Baldur's Gate 3",
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 3,
    price: 199,
    image: 'https://howlongtobeat.com/games/68033_Baldurs_Gate_3.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 4,
    name: 'Dead Space Remake',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 4,
    price: 249,
    image: 'https://howlongtobeat.com/games/95927_Dead_Space.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 5,
    name: 'Battlefield 2042',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 5,
    price: 199,
    image: 'https://howlongtobeat.com/games/93426_Battlefield_2042.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 6,
    name: 'Starfield',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 2,
    price: 279,
    image: 'https://howlongtobeat.com/games/57445_Starfield.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 7,
    name: 'Grand Theft Auto VI',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 1,
    price: 349,
    image: 'https://howlongtobeat.com/games/104609_Grand_Theft_Auto_VI.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 8,
    name: 'Call Of Duty: MODERN WARFARE III',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 5,
    price: 349,
    image:
      'https://howlongtobeat.com/games/132689_Call_of_Duty_Modern_Warfare_III.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 9,
    name: 'Alan Wake II',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 6,
    price: 249,
    image: 'https://howlongtobeat.com/games/101237_Alan_Wake_2.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 10,
    name: 'The Witcher 3',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 2,
    price: 249,
    image: 'https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 11,
    name: 'Resident Evil 4 Remake',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 6,
    price: 199,
    image: 'https://howlongtobeat.com/games/108881_Resident_Evil_4.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 12,
    name: 'Forza Motorsport',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 7,
    price: 299,
    image: 'https://howlongtobeat.com/games/109240_Forza_Motorsport.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 13,
    name: 'God of War Ragnarok',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 1,
    price: 349,
    image: 'https://howlongtobeat.com/games/83146_God_of_War_Ragnark.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 14,
    name: 'Hi-Fi Rush',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 8,
    price: 89,
    image: 'https://howlongtobeat.com/games/122891_Hi-Fi_Rush.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 15,
    name: 'Forza Horizon 5',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 7,
    price: 249,
    image: 'https://howlongtobeat.com/games/93948_Forza_Horizon_5.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 16,
    name: 'Horizon Forbidden West',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 2,
    price: 299,
    image: 'https://howlongtobeat.com/games/79775_Horizon_Forbidden_West.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T17:51:31.809Z',
  },
  {
    id: 17,
    name: 'Ori and the Will of the Wisps',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 58,
    price: 99,
    image:
      'https://howlongtobeat.com/games/46428_Ori_and_the_Will_of_the_Wisps.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T18:03:05.114Z',
  },
  {
    id: 18,
    name: "Senua's Saga: Hellblade II",
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 1,
    price: 299.9,
    image: 'https://howlongtobeat.com/games/72854_Senuas_Saga_Hellblade_II.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    created_at: '2024-01-10T18:07:47.977Z',
  },
  {
    id: 19,
    name: 'Elden Ring',
    category: {
      id: 1,
      name: 'actionAdventure',
      namePt: 'Ação e aventura',
    },
    categoryId: 10,
    price: 249.9,
    image: 'https://howlongtobeat.com/games/68151_Elden_Ring.jpg',
    description:
      'Estados Unidos, 1899. O fim da era do velho oeste se aproxima, e os xerifes caçam as últimas gangues fora da lei. Quem não se rende ou sucumbe, acaba morto. Depois de tudo dar errado em um roubo na cidade de Blackwater, no faroeste, Arthur Morgan e a gangue Van der Linde são obrigados a fugir.',
  },
]

export default allGames
