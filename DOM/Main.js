 
 const ecommerceProducts = [
  {
    id: 1,
    name: 'GentleMania',
    price: 899,
    ogprice: 1999,
    category: '55',
    description: 'Men\'s Classic Fit Formal Suit with Two Button Jacket and Pleated Pants.',
    imageUrl: 'https://m.media-amazon.com/images/I/81+FKUigHSL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81+FKUigHSL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/91Pz2T-Zg4L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/91+AK6JuWWL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/A1WnvV2w6nL._SY879_.jpg',
  },
  {
    id: 2,
    name: 'ElegantDress',
    price: 649,
    ogprice: 1500,
    category: '57',
    description: 'ElegantDress Men\'s Slim Fit Casual Shirt with Button Down Collar.',
    imageUrl: 'https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/719HyGYtSyL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/7192a5s6DxL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71z7Pi+IQCL._SY879_.jpg',
  },
  {
    id: 3,
    name: 'UrbanStyle',
    price: 799,
    ogprice: 1800,
    category: '56',
    description: 'UrbanStyle Men\'s Modern Fit Blazer with Notch Lapel and Single Vent.',
    imageUrl: 'https://m.media-amazon.com/images/I/61G1ZLzdBeS._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61hkjd7TiRL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/618z6gGmmGL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61ondGCeUgL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51oatbTLsQL._SY879_.jpg',
  },
  {
    id: 4,
    name: 'CasualTrend',
    price: 549,
    ogprice: 1200,
    category: '54',
    description: 'CasualTrend Men\'s Slim Fit Chinos Trousers with Flat Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/81Bq7yzdQsL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81Bq7yzdQsL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81aLw4Cz3LL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/914hWPM+gsL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/91mEuqTZUEL._SY879_.jpg',
  },
  {
    id: 5,
    name: 'SportyEdge',
    price: 699,
    ogprice: 1600,
    category: '56',
    description: 'SportyEdge Men\'s Athletic Jogger Pants with Elastic Waistband.',
    imageUrl: 'https://m.media-amazon.com/images/I/81jCqJRk0ZL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81AUUD1WkML._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61xC+RobmQL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81hOYnwkk6L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/91Y-mE3OQQL._SX679_.jpg',
  },
  {
    id: 6,
    name: 'FormalElite',
    price: 899,
    ogprice: 1999,
    category: '55',
    description: 'FormalElite Men\'s Classic Fit Dress Shirt with French Cuffs.',
    imageUrl: 'https://m.media-amazon.com/images/I/51byp5tQ86L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51byp5tQ86L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51N8Cfl0JdL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71B58DjEArL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81gIgTQ60KL._SX679_.jpg',
  },
  {
    id: 7,
    name: 'SmartLook',
    price: 649,
    ogprice: 1500,
    category: '57',
    description: 'SmartLook Men\'s Slim Fit Dress Pants with Flat Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/71QRvi8kOIL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71QRvi8kOIL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81VPduolQVL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81NOwWziHmL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81fSMCJCOUL._SY879_.jpg',
  },
  {
    id: 8,
    name: 'CasualVibe',
    price: 799,
    ogprice: 1800,
    category: '56',
    description: 'CasualVibe Men\'s Casual Denim Jacket with Button Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/71b5QeT4qqL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71b5QeT4qqL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/4126+gKFRaL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51+3rki4VpL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/618E3fd2eMS._SX679_.jpg',
  },
  {
    id: 9,
    name: 'ActiveStyle',
    price: 549,
    ogprice: 1200,
    category: '54',
    description: 'ActiveStyle Men\'s Athletic Sneakers with Cushioned Sole.',
    imageUrl: 'https://m.media-amazon.com/images/I/61TQiA49VoL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/618UhI1qtbL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61u2lNeZjcL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61aIhJPZiBL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71PIcvHutxL._SX679_.jpg',
  },
  {
    id: 10,
    name: 'WeekendComfort',
    price: 699,
    ogprice: 1600,
    category: '56',
    description: 'WeekendComfort Men\'s Casual Hooded Sweatshirt with Front Pocket.',
    imageUrl: 'https://m.media-amazon.com/images/I/51z4AN5NMeL.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61DhhrseFWL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61IP6fIJtYL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61OXMOHjh6L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61O0Zh0BJaL._SX679_.jpg',
  },
  {
    id: 11,
    name: 'GentleMania',
    price: 899,
    ogprice: 1999,
    category: '55',
    description: 'Men\'s Classic Fit Formal Suit with Two Button Jacket and Pleated Pants.',
    imageUrl: 'https://m.media-amazon.com/images/I/71BqV3R0R2L._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71BqV3R0R2L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/719W5FjhrGL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61ii09CqrRL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71sDs8N4bSL._SY879_.jpg',
  },
  {
    id: 12,
    name: 'ElegantDress',
    price: 649,
    ogprice: 1500,
    category: '57',
    description: 'ElegantDress Men\'s Slim Fit Casual Shirt with Button Down Collar.',
    imageUrl: 'https://m.media-amazon.com/images/I/71wxDjVCSmL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71wxDjVCSmL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71RedE3x1QL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71nrwEmhITL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/816s-V676pL._SY879_.jpg',
  },
  {
    id: 13,
    name: 'UrbanStyle',
    price: 799,
    ogprice: 1800,
    category: '56',
    description: 'UrbanStyle Men\'s Modern Fit Blazer with Notch Lapel and Single Vent.',
    imageUrl: 'https://m.media-amazon.com/images/I/31A1uImqgqL.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71WpmsXXuoL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71IIR93vJGL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61HOI8B6+9L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71yYbm-BWGL._SY879_.jpg',
  },
  {
    id: 14,
    name: 'CasualTrend',
    price: 549,
    ogprice: 1200,
    category: '54',
    description: 'CasualTrend Men\'s Slim Fit Chinos Trousers with Flat Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/6198lRRjAAL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6198lRRjAAL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61gEJ8zrgkL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/613rEdVRH4L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71DYqLTU0uL._SY879_.jpg',
  },
  {
    id: 15,
    name: 'SportyEdge',
    price: 699,
    ogprice: 1600,
    category: '56',
    description: 'SportyEdge Men\'s Athletic Jogger Pants with Elastic Waistband.',
    imageUrl: 'https://m.media-amazon.com/images/I/81uTb5UwUgL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81uTb5UwUgL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81seM0U3LAL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71AlDjaZdPL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81a6P15nbfL._SY879_.jpg',
  },
  {
    id: 16,
    name: 'FormalElite',
    price: 899,
    ogprice: 1999,
    category: '55',
    description: 'FormalElite Men\'s Classic Fit Dress Shirt with French Cuffs.',
    imageUrl: 'https://m.media-amazon.com/images/I/81dRV+F3rVL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81dRV+F3rVL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71ndD+FDC5L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61ZZF7JAASL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71vMxnrzrsL._SX679_.jpg',
  },
  {
    id: 17,
    name: 'SmartLook',
    price: 649,
    ogprice: 1500,
    category: '57',
    description: 'SmartLook Men\'s Slim Fit Dress Pants with Flat Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/71NCBXev2YL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71NCBXev2YL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/813s-Y93KhL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81aLtz3LFGL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/915C7GSuOOL._SY879_.jpg',
  },
  {
    id: 18,
    name: 'CasualVibe',
    price: 799,
    ogprice: 1800,
    category: '56',
    description: 'CasualVibe Men\'s Casual Denim Jacket with Button Front.',
    imageUrl: 'https://m.media-amazon.com/images/I/61l6efeqqhL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61l6efeqqhL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61+FQnClTeL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61cNRNiM7WL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71j+IuEAKzL._SY879_.jpg',
  },
  {
    id: 19,
    name: 'ActiveStyle',
    price: 549,
    ogprice: 1200,
    category: '54',
    description: 'ActiveStyle Men\'s Athletic Sneakers with Cushioned Sole.',
    imageUrl: 'https://m.media-amazon.com/images/I/61JK1-EELnL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61JK1-EELnL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61fiEO9DhZL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51M+L0BEx2L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61MqSeCwV7L._SY879_.jpg',
  },
  {
    id: 20,
    name: 'WeekendComfort',
    price: 699,
    ogprice: 1600,
    category: '56',
    description: 'WeekendComfort Men\'s Casual Hooded Sweatshirt with Front Pocket.',
    imageUrl: 'https://m.media-amazon.com/images/I/71AgKaGRXzL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71AgKaGRXzL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71BBKyqa49L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71tiHYklj4L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71HMy++61LL._SY879_.jpg',
  },
  // Womens-Wear
  {
    id: 21,
    name: 'Preneum',
    price: 587,
    ogprice: 1499,
    category: '61',
    description: 'Womens Georgette a-line Knee-Long Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/61F0XxzesmL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61F0XxzesmL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51w7AZvSXWL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/615m1Tz+hGL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/5192yW5SR4L._SX679_.jpg',
  },
  {
    id: 22,
    name: 'OOMPH!',
    price: 379,
    ogprice: 2000,
    category: '81',
    description: 'OOMPH! Women Long Dress High-low A-line dress with ruffled hem in wrap-up style.',
    imageUrl: 'https://m.media-amazon.com/images/I/61-VhPoNz+L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51hYxxtM78L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61qGR8LOFvL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61fy1NYlN2L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61VFpbi0ANL._SY879_.jpg',
  },
  {
    id: 23,
    name: 'Wazix Clothing',
    price: 699,
    ogprice: 2000,
    category: '61',
    description: 'Wazix Womans Boat-Neck Cap Sleeves Fit & Flare Maxi Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/61YdNaSRX6L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51mu-HL9KyL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61qvHVscEhL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61v8cZXNBuL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61iQmecT77L._SX679_.jpg',
  },
  {
    id: 24,
    name: 'Lymio',
    price: 799,
    ogprice: 2000,
    category: '60',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://m.media-amazon.com/images/I/61crTyNiyQL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61IpuK-UdlL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/713oXDorDgL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61BWTZaIX8L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71TL47FZWTL._SY879_.jpg',
  },
  {
    id: 25,
    name: 'HERIJA',
    price: 599,
    ogprice: 2000,
    category: '50',
    description: 'Womens Skater Mini Dress, consectetur adipiscing elit.',
    imageUrl: 'https://m.media-amazon.com/images/I/71kyay3ojSL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71AxbcWH0kL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71eiFy424zL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71zdHruK6XL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71-xPjUZJvL._SX679_.jpg',
  },
  {
    id: 26,
    name: 'Preneum',
    price: 587,
    ogprice: 1499,
    category: '61',
    description: 'Womens Georgette a-line Knee-Long Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/71OegJMc0xL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71OegJMc0xL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61GHVcLp1dL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61rRe3YNe9L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71nrxTmrUkL._SY879_.jpg',
  },
  {
    id: 27,
    name: 'OOMPH!',
    price: 379,
    ogprice: 2000,
    category: '81',
    description: 'OOMPH! Women Long Dress High-low A-line dress with ruffled hem in wrap-up style.',
    imageUrl: 'https://m.media-amazon.com/images/I/51dZ19miAbL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61Qnxj4dadL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61yTb8brZUL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61ZROfEN4ZL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51yYRttRUFL._SY879_.jpg',
  },
  {
    id: 28,
    name: 'Satrani',
    price: 699,
    ogprice: 2000,
    category: '61',
    description: 'Womens Georgette Saree With  Piece & Flare Maxi Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/81xOlaqarlL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81xOlaqarlL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81qbOtKSUYL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81YG0g3YJkL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/8124OB4cmdL._SY879_.jpg',
  },
  {
    id: 29,
    name: 'Lymio',
    price: 799,
    ogprice: 2000,
    category: '60',
    description: 'Womens Saree Velvet Fabric Saree With Embrodery.',
    imageUrl: 'https://m.media-amazon.com/images/I/71i7NUBz4YL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71i7NUBz4YL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71zeY1hGS-L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71U39RyO6oL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71mKdeTGG1L._SY879_.jpg',
  },
  {
    id: 30,
    name: 'HERIJA',
    price: 599,
    ogprice: 2200,
    category: '50',
    description: 'Womens Georgette Solid Hot Fixing Saree with Unstitched.',
    imageUrl: 'https://m.media-amazon.com/images/I/51LfzsMZAWL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61JQiBVv-9L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61u6923ZA1L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61r9NTocTpL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61QK6YtiJuL._SY879_.jpg',
  },
  {
    id: 31,
    name: 'Preneum',
    price: 587,
    ogprice: 1499,
    category: '61',
    description: 'Womens Georgette a-line Knee-Long Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/41qZBlGQCfL.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61QNwz8XSML.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/617ipRCBH3L.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51NjhYVntXL.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51zr100DdOL.jpg',
  },
  {
    id: 32,
    name: 'OOMPH!',
    price: 379,
    ogprice: 2000,
    category: '81',
    description: 'OOMPH! Women Long Dress High-low A-line dress with ruffled hem in wrap-up style.',
    imageUrl: 'https://m.media-amazon.com/images/I/61se3QbO3WL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/614u+5qQOiL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/615GMX6-MYL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71270qvYP9L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/611C3mlPJEL._SY879_.jpg',
  },
  {
    id: 33,
    name: 'Wazix Clothing',
    price: 699,
    ogprice: 2000,
    category: '61',
    description: 'Wazix Womans Boat-Neck Cap Sleeves Fit & Flare Maxi Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/81tc9XqavKL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81tc9XqavKL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81TK6+tIHDL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/8140GSZv8CL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/919U1RekowL._SY879_.jpg',
  },
  {
    id: 34,
    name: 'Lymio',
    price: 799,
    ogprice: 2000,
    category: '60',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://m.media-amazon.com/images/I/81q1kX57RrL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/91dAz6OeH7L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/91EbegU3m5L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/816LhBxXMqL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/91xV7h4DGeL._SY879_.jpg',
  },
  {
    id: 35,
    name: 'HERIJA',
    price: 599,
    ogprice: 2000,
    category: '50',
    description: 'Womens Skater Mini Dress, consectetur adipiscing elit.',
    imageUrl: 'https://m.media-amazon.com/images/I/61Jui75lvuL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61Jui75lvuL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61g7nL87AqL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61Buawc90uL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61onEKZjljL._SY879_.jpg',
  },
  {
    id: 36,
    name: 'Satrani',
    price: 699,
    ogprice: 2000,
    category: '61',
    description: 'Womens Georgette Saree With  Piece & Flare Maxi Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/71MW3pdqylL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71MW3pdqylL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71f8KNPU+YL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71vblRLSqNL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71MW3pdqylL._SY879_.jpg',
  },
  {
    id: 37,
    name: 'Lymio',
    price: 799,
    ogprice: 2000,
    category: '60',
    description: 'Womens Saree Velvet Fabric Saree With Embrodery.',
    imageUrl: 'https://m.media-amazon.com/images/I/81NxFQlOo+L._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81NxFQlOo+L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/716mT1nB1YL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81oTyFCGRzL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81QTU8QHl6L._SY879_.jpg',
  },
  {
    id: 38,
    name: 'HERIJA',
    price: 599,
    ogprice: 2200,
    category: '50',
    description: 'Womens Georgette Solid Hot Fixing Saree with Unstitched.',
    imageUrl: 'https://m.media-amazon.com/images/I/81OY1+ZIOGL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/91m0vNvRx8L._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/913lTkK1Y2L._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/918SP3ZD76L._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/910L9hR9ZQL._SY879_.jpg',
  },
  {
    id: 39,
    name: 'Preneum',
    price: 587,
    ogprice: 1499,
    category: '61',
    description: 'Womens Georgette a-line Knee-Long Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/61NM3g3WvAL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61NM3g3WvAL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61g1W-5qAuL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61ik+zI3VpL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81lfz1jPmaL._SY879_.jpg',
  },
  {
    id: 40,
    name: 'OOMPH!',
    price: 379,
    ogprice: 2000,
    category: '81',
    description: 'OOMPH! Women Long Dress High-low A-line dress with ruffled hem in wrap-up style.',
    imageUrl: 'https://m.media-amazon.com/images/I/911hgpV9PFL._SY879_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/911hgpV9PFL._SY879_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/911hgpV9PFL._SY879_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/911hgpV9PFL._SY879_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/911hgpV9PFL._SY879_.jpg',

  },
      // Childs-wear
      {
        id: 41,
        name: 'Cute Kiddo',
        price: 349,
        ogprice: 999,
        category: '65',
        description: 'Adorable Girls Floral Print Cotton Dress.',
        imageUrl: 'https://m.media-amazon.com/images/I/51r8ijy9-uL.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/51r8ijy9-uL.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/41ARVnkDhHL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/41NHxYAOrlL.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/31SwanLW18L.jpg',
  
      },
      {
        id: 42,
        name: 'Tiny Trendsetter',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 43,
        name: 'Playful Patterns',
        price: 199,
        ogprice: 499,
        category: '60',
        description: 'Comfortable Unisex Cartoon Print T-Shirt.',
        imageUrl: 'https://m.media-amazon.com/images/I/514ftDnqfvL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 44,
        name: 'Lil Explorer',
        price: 399,
        ogprice: 899,
        category: '55',
        description: 'Adventure-Ready Kids Cargo Pants.',
        imageUrl: 'https://m.media-amazon.com/images/I/71qbgqbkkGL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 45,
        name: 'Pretty in Pink',
        price: 259,
        ogprice: 599,
        category: '57',
        description: 'Girls Pink Polka Dot Summer Dress.',
        imageUrl: 'https://m.media-amazon.com/images/I/51DUW4vPZWL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 46,
        name: 'Cool Camo',
        price: 349,
        ogprice: 799,
        category: '56',
        description: 'Boys Camouflage Print Hoodie.',
        imageUrl: 'https://m.media-amazon.com/images/I/61Oy6mL9YWS._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 47,
        name: 'Sweet Dreams',
        price: 179,
        ogprice: 399,
        category: '55',
        description: 'Cotton Pajama Set for Boys and Girls.',
        imageUrl: 'https://m.media-amazon.com/images/I/51AVqT6AJnL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 48,
        name: 'Rainbow Bliss',
        price: 299,
        ogprice: 699,
        category: '57',
        description: 'Colorful Rainbow Stripe Sweater for Kids.',
        imageUrl: 'https://m.media-amazon.com/images/I/71iSewCgUgL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 49,
        name: 'Sporty Star',
        price: 239,
        ogprice: 549,
        category: '56',
        description: 'Athletic Star Print Track Pants for Kids.',
        imageUrl: 'https://m.media-amazon.com/images/I/51FVATIH1BL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 50,
        name: 'Fancy Frills',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 51,
        name: 'Cute Kiddo',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 52,
        name: 'Tiny Trendsetter',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/31VNSPokO8L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 53,
        name: 'Playful Patterns',
        price: 199,
        ogprice: 499,
        category: '60',
        description: 'Comfortable Unisex Cartoon Print T-Shirt.',
        imageUrl: 'https://m.media-amazon.com/images/I/61ypwVhHzDL._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 54,
        name: 'Lil Explorer',
        price: 399,
        ogprice: 899,
        category: '55',
        description: 'Adventure-Ready Kids Cargo Pants.',
        imageUrl: 'https://m.media-amazon.com/images/I/71SDtiV+jWL._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 55,
        name: 'Pretty in Pink',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 56,
        name: 'Cool Camo',
        price: 349,
        ogprice: 799,
        category: '56',
        description: 'Boys Camouflage Print Hoodie.',
        imageUrl: 'https://m.media-amazon.com/images/I/41i94xoGmbL._AC_UL480_FMwebp_QL65_.jpg'
    
      },
      {
        id: 57,
        name: 'Sweet Dreams',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 58,
        name: 'Rainbow Bliss',
        price: 299,
        ogprice: 699,
        category: '57',
        description: 'Colorful Rainbow Stripe Sweater for Kids.',
        imageUrl: 'https://m.media-amazon.com/images/I/514ftDnqfvL._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 59,
        name: 'Sporty Star',
       price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      {
        id: 60,
        name: 'Fancy Frills',
        price: 289,
        ogprice: 799,
        category: '64',
        description: 'Stylish Boys Denim Jacket with Embroidery.',
        imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  
      },
      // Accessories
    {
      id: 61,
      name: 'Elegance Vision',
      price: 99,
      ogprice: 199,
      category: '50',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/618x14ZuAuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/618x14ZuAuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/618x14ZuAuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/618x14ZuAuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/618x14ZuAuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 62,
      name: 'Aroma Bliss',
      price: 29,
      ogprice: 50,
      category: '42',
     description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 63,
      name: 'Classique Chic',
      price: 49,
      ogprice: 80,
      category: '39',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 64,
      name: 'Timeless Essence',
      price: 199,
      ogprice: 350,
      category: '43',
      description: 'Elegant Women\'s Wristwatch with Stainless Steel Strap.',
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61UTf1uvl9L._AC_UL400_SR400,400_.jpg',
      image1Url: 'https://images-eu.ssl-images-amazon.com/images/I/61UTf1uvl9L._AC_UL400_SR400,400_.jpg',
      image2Url: 'https://images-eu.ssl-images-amazon.com/images/I/61UTf1uvl9L._AC_UL400_SR400,400_.jpg',
      image3Url: 'https://images-eu.ssl-images-amazon.com/images/I/61UTf1uvl9L._AC_UL400_SR400,400_.jpg',
      image4Url: 'https://images-eu.ssl-images-amazon.com/images/I/61UTf1uvl9L._AC_UL400_SR400,400_.jpg',


    },
    {
      id: 65,
      name: 'Glamour Gaze',
      price: 79,
      ogprice: 120,
      category: '34',
      description: 'Chic Oversized Sunglasses with Gradient Lenses.',
      imageUrl: 'https://m.media-amazon.com/images/I/51j+VC2ENGL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51j+VC2ENGL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51j+VC2ENGL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51j+VC2ENGL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51j+VC2ENGL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 66,
      name: 'Scented Charm',
      price: 39,
      ogprice: 70,
      category: '44',
      description: 'Delicate Floral Scent Perfume - 30ml.',
      imageUrl: 'https://m.media-amazon.com/images/I/510OjE3DZhL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/510OjE3DZhL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/510OjE3DZhL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/510OjE3DZhL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/510OjE3DZhL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 67,
      name: 'Modern Edge',
      price: 59,
      ogprice: 100,
      category: '41',
      description: 'Slim Leather Belt with Geometric Buckle Design.',
      imageUrl: 'https://m.media-amazon.com/images/I/61KOrK1kdpL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61KOrK1kdpL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61KOrK1kdpL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61KOrK1kdpL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61KOrK1kdpL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 68,
      name: 'Radiant Aura',
      price: 249,
      ogprice: 400,
      category: '38',
      description: 'Radiant Women\'s Watch with Rhinestone Accents.',
      imageUrl: 'https://m.media-amazon.com/images/I/71y+f6r75tL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71y+f6r75tL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71y+f6r75tL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71y+f6r75tL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71y+f6r75tL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 69,
      name: 'Trendsetter',
      price: 89,
      ogprice: 150,
      category: '41',
      description: 'Fashionable Wide Belt with Double Buckle Detail.',
      imageUrl: 'https://m.media-amazon.com/images/I/71bgrLaPA3L._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71bgrLaPA3L._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71bgrLaPA3L._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71bgrLaPA3L._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71bgrLaPA3L._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 70,
      name: 'Sparkling Elegance',
      price: 199,
      ogprice: 300,
      category: '34',
      description: 'Sparkling Rhinestone-studded Wristwatch.',
      imageUrl: 'https://m.media-amazon.com/images/I/5159txtY55L._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/5159txtY55L._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/5159txtY55L._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/5159txtY55L._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/5159txtY55L._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 71,
      name: 'Elegance Vision',
      price: 99,
      ogprice: 199,
      category: '50',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 72,
      name: 'Aroma Bliss',
      price: 29,
      ogprice: 50,
      category: '42',
      description: 'Floral Paradise Perfume for Women - 50ml.',
      imageUrl: 'https://m.media-amazon.com/images/I/71YovGbD3OL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71YovGbD3OL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71YovGbD3OL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71YovGbD3OL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71YovGbD3OL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 73,
      name: 'Classique Chic',
      price: 49,
      ogprice: 80,
      category: '39',
      description: 'Classic Leather Belt with Buckle Closure.',
      imageUrl: 'https://m.media-amazon.com/images/I/61OWzDz4U6L._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61OWzDz4U6L._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61OWzDz4U6L._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61OWzDz4U6L._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61OWzDz4U6L._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 74,
      name: 'Timeless Essence',
      price: 199,
      ogprice: 350,
      category: '43',
      description: 'Elegant Women\'s Wristwatch with Stainless Steel Strap.',
      imageUrl: 'https://m.media-amazon.com/images/I/51+rROwoHWL._AC_SR405%2C405_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51+rROwoHWL._AC_SR405%2C405_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51+rROwoHWL._AC_SR405%2C405_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51+rROwoHWL._AC_SR405%2C405_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51+rROwoHWL._AC_SR405%2C405_.jpg',


    },
    {
      id: 75,
      name: 'Glamour Gaze',
      price: 79,
      ogprice: 120,
      category: '34',
      description: 'Chic Oversized Sunglasses with Gradient Lenses.',
      imageUrl: 'https://m.media-amazon.com/images/I/71C5wVnNbNS._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71C5wVnNbNS._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71C5wVnNbNS._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71C5wVnNbNS._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71C5wVnNbNS._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 76,
      name: 'Scented Charm',
      price: 39,
      ogprice: 70,
      category: '44',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 77,
      name: 'Modern Edge',
      price: 59,
      ogprice: 100,
      category: '41',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',


    },
    {
      id: 78,
      name: 'Radiant Aura',
      price: 249,
      ogprice: 400,
      category: '38',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',

    },
    {
      id: 79,
      name: 'Trendsetter',
      price: 89,
      ogprice: 150,
      category: '41',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',

    },
    {
      id: 80,
      name: 'Sparkling Elegance',
      price: 199,
      ogprice: 300,
      category: '34',
      description: 'Stylish UV Protection Sunglasses for Women.',
      imageUrl: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51AIkgKahuL._AC_UL480_FMwebp_QL65_.jpg',

    },
    // shoes
  {
    id: 181,
    name: 'RunningShoes',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'High-performance Running Shoes for Comfort and Speed.',
    imageUrl: 'https://m.media-amazon.com/images/I/51Yf9pBf2WL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51Yf9pBf2WL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61i0mgyrmkL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61bxxkoen1L._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71i37WOJiiL._SL1500_.jpg'
  },
  {
    id: 182,
    name: 'CasualSneakers',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Stylish Casual Sneakers for Everyday Comfort and Fashion.',
    imageUrl: 'https://m.media-amazon.com/images/I/71Pz9zbWPsL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71Pz9zbWPsL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81WYbVQRS5L._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71EMdW9CahL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/7156wjJGfwL._SL1500_.jpg'
  },
  {
    id: 183,
    name: 'FormalDressShoes',
    price: 1299.99,
    ogprice: 1499.99,
    category: '13',
    description: 'Elegant Formal Dress Shoes for Special Occasions.',
    imageUrl: 'https://m.media-amazon.com/images/I/61cW2dRkkTL._SL1110_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61cW2dRkkTL._SL1110_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/5188B7cwUJL._SL1110_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61C5mL532BL._SL1110_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/514LzARVhKL._SL1110_.jpg'
  },
  {
    id: 184,
    name: 'OutdoorHikingBoots',
    price: 1399.99,
    ogprice: 1599.99,
    category: '13',
    description: 'Durable Outdoor Hiking Boots for Adventure Seekers.',
    imageUrl: 'https://m.media-amazon.com/images/I/619SMYFdbYL._SL1280_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/619SMYFdbYL._SL1280_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51phcndmtNL._SL1092_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61l4L-zTZRL._SL1253_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51DJScVY5OL._SL1120_.jpg'
  },
  {
    id: 185,
    name: 'ClassicLoafers',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'Timeless Classic Loafers for a Smart Casual Look.',
    imageUrl: 'https://m.media-amazon.com/images/I/41RicB4a10L.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41RicB4a10L.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51hJcWUhSkL.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41NNT57SzVL.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/411GttQuiaL.jpg'
  },
  {
    id: 186,
    name: 'AthleticTrainingShoes',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Athletic Training Shoes for Intense Workout Sessions.',
    imageUrl: 'https://m.media-amazon.com/images/I/71YsNBOLebL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71YsNBOLebL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/613B+zNu04L._SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/613qHXuxjFL._SL1200_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71Bex3zTN6L._SL1500_.jpg'
  },
  {
    id: 187,
    name: 'LeatherAnkleBoots',
    price: 1299.99,
    ogprice: 1499.99,
    category: '13',
    description: 'Stylish Leather Ankle Boots for a Trendy Winter Look.',
    imageUrl: 'https://m.media-amazon.com/images/I/41RicB4a10L.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41RicB4a10L.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51hJcWUhSkL.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41NNT57SzVL.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/411GttQuiaL.jpg'
  },
  {
    id: 188,
    name: 'BasketballHighTops',
    price: 1399.99,
    ogprice: 1599.99,
    category: '13',
    description: 'Basketball High Tops for Hoops Enthusiasts.',
    imageUrl: 'https://m.media-amazon.com/images/I/61km43b-q5L._SL1100_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61km43b-q5L._SL1100_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61sNdGyUqtL._SL1100_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51qMJiNZ2lL._SL1100_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/614SlhGGJ7L._SL1100_.jpg'
  },
  {
    id: 189,
    name: 'Crocs Sandals',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'Fashionable Sandals for a Chic Summer Style.',
    imageUrl: 'https://m.media-amazon.com/images/I/51I8wNtYWGL._SL1337_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51I8wNtYWGL._SL1337_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71kx7MJqYQL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71ksN8g6IiL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71aKxjfMbRL._SL1500_.jpg'
  },
  {
    id: 190,
    name: 'GymCrossTrainers',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Gym Cross Trainers for Versatile Workout Activities.',
    imageUrl: 'https://m.media-amazon.com/images/I/71xl1G2HOsL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71xl1G2HOsL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81O4ss6m96L._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81BTGLOE25L._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71zTjh+odpL._SL1500_.jpg'
  },
  {
    id: 191,
    name: 'CanvasSlipOns',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'Comfortable Canvas Slip-Ons for Easy Style.',
    imageUrl: 'https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51P5FKI7i2L._SL1110_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51mSbA+GCyL._SL1110_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51h9zZvx58L._SL1110_.jpg'
  },
  {
    id: 192,
    name: 'DenimCasualShoes',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Casual Denim Shoes for a Relaxed Look.',
    imageUrl: 'https://m.media-amazon.com/images/I/71edtiq+UrL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71edtiq+UrL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71-61I6mu7L._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81IE7nM9cFL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/916voXXsVRL._SL1500_.jpg'
  },
  {
    id: 193,
    name: 'SuedeLoafers',
    price: 1299.99,
    ogprice: 1499.99,
    category: '13',
    description: 'Stylish Suede Loafers for a Sophisticated Casual Look.',
    imageUrl: 'https://m.media-amazon.com/images/I/71VbdInbiFL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71VbdInbiFL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71xE47KrkLL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71XehlfrwPL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg'
  },
  {
    id: 194,
    name: 'VintageSneakers',
    price: 1399.99,
    ogprice: 1599.99,
    category: '13',
    description: 'Vintage Sneakers for a Retro Casual Vibe.',
    imageUrl: 'https://m.media-amazon.com/images/I/61HnFKrY07L._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61HnFKrY07L._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61GVen36ykL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71yCJEwNsnL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71i2GrfK2ZL._SL1500_.jpg'
  },
  {
    id: 195,
    name: 'Lace-UpEspadrilles',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'Lace-Up Espadrilles for a Casual Summer Feel.',
    imageUrl: 'https://m.media-amazon.com/images/I/51Fd-mTBfQL._SL1440_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51Fd-mTBfQL._SL1440_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/516UwHt8KJL._SL1440_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/512PT-Rz89L._SL1440_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61cc9RxghcL._SL1440_.jpg'
  },
  {
    id: 196,
    name: 'LeatherMoccasins',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Classic Leather Moccasins for Effortless Style.',
    imageUrl: 'https://m.media-amazon.com/images/I/711de2W7dkL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/711de2W7dkL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71lnaN7V8FL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71Y0qj7zGQL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71KzpEyH9aL._SL1500_.jpg'
  },
  {
    id: 197,
    name: 'UrbanStreetShoes',
    price: 1299.99,
    ogprice: 1499.99,
    category: '13',
    description: 'Urban Street Shoes for a Modern Casual Look.',
    imageUrl: 'https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61-3bssyeQL._SL1200_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61BK1m6QIkL._SL1200_.jpg'
  },
  {
    id: 198,
    name: 'KnitCasualSneakers',
    price: 1399.99,
    ogprice: 1599.99,
    category: '13',
    description: 'Knit Casual Sneakers for Lightweight Comfort.',
    imageUrl: 'https://m.media-amazon.com/images/I/61HxNhD0u7L._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61HxNhD0u7L._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51qT5MzZQIL._SL1110_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51cPIer4-NL._SL1110_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51FqaG2DViL._SL1110_.jpg'
  },
  {
    id: 199,
    name: 'FashionHighTops',
    price: 1099.99,
    ogprice: 1299.99,
    category: '15',
    description: 'Fashion High Tops for Trendy Casual Outfits.',
    imageUrl: 'https://m.media-amazon.com/images/I/61AjKQSFMhL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61AjKQSFMhL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71zEx-k2FUL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71H+bR7KH4L._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/613eE6rOzIL._SL1500_.jpg'
  },
  {
    id: 200,
    name: 'DistressedCasualBoots',
    price: 1199.99,
    ogprice: 1399.99,
    category: '14',
    description: 'Distressed Casual Boots for a Casual-Chic Appeal.',
    imageUrl: 'https://m.media-amazon.com/images/I/81TwzO9BFqL._SL1500_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81TwzO9BFqL._SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81bDFxj+orL._SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81ggpCxsBFL._SL1500_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71pQ1FFLq6L._SL1500_.jpg'
  },
      // furniture
      {
        id: 141,
        name: 'LuxuriousKingBed',
        price: 20999.99,
        ogprice: 24999.99,
        category: '16',
        description: 'Luxurious King Bed for Ultimate Comfort and Style.',
        imageUrl: 'https://m.media-amazon.com/images/I/71tXGfrTG9L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/71tXGfrTG9L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/71HGbIOxqGL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/71kTg8i7WGL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/71FVwTAuAbL._SX679_.jpg',
  
      },
      {
        id: 142,
        name: 'ContemporaryLoungeChair',
        price: 22999.99,
        ogprice: 26999.99,
        category: '14',
        description: 'Contemporary Lounge Chair for Modern Living Spaces.',
        imageUrl: 'https://m.media-amazon.com/images/I/51KQP-ZCVtL._AC_UL480_FMwebp_QL65_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/51KQP-ZCVtL._AC_UL480_FMwebp_QL65_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/51x0iRIZypL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/51GGY7MdLTL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/51WYqIZXLiL._SX679_.jpg',
  
      },
      {
        id: 143,
        name: 'DesignerDiningSet',
        price: 24999.99,
        ogprice: 28999.99,
        category: '14',
        description: 'Designer Dining Set for Stylish Dining Experiences.',
        imageUrl: 'https://m.media-amazon.com/images/I/91MfJ2r1UYL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/91MfJ2r1UYL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61Y6j-dQvXL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/81t8jQxAvAL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/714-BScbFwL._SX679_.jpg'
  
      },
      {
        id: 144,
        name: 'ExecutiveOfficeDesk',
        price: 20999.99,
        ogprice: 23999.99,
        category: '13',
        description: 'Executive Office Desk for a Professional Workspace.',
        imageUrl: 'https://m.media-amazon.com/images/I/71RxZgVXA8L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/71RxZgVXA8L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/51LgQdp1aSL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/81Zd1d2rQQL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/81qYU7qVadL._SX679_.jpg'
  
      },
      {
        id: 145,
        name: 'PlushSectionalSofa',
        price: 26999.99,
        ogprice: 30999.99,
        category: '13',
        description: 'Plush Sectional Sofa for Cozy Family Gatherings.',
        imageUrl: 'https://m.media-amazon.com/images/I/61FW-8swR5L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61FW-8swR5L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/6121jOYy-iL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/61ZmFpNCxHL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/61ZmFpNCxHL._SX679_.jpg'
  
      },
      {
        id: 146,
        name: 'AntiqueWardrobe',
        price: 20999.99,
        ogprice: 24999.99,
        category: '16',
        description: 'Antique Wardrobe for a Timeless Bedroom Look.',
        imageUrl: 'https://m.media-amazon.com/images/I/71HESzfJ+-L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/71HESzfJ+-L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61Hre6HnXZL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/71comYxd5-L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/71UqK6kKi2L._SX679_.jpg'
  
      },
      {
        id: 147,
        name: 'ElegantCoffeeTable',
        price: 20999.99,
        ogprice: 23999.99,
        category: '13',
        description: 'Elegant Coffee Table for Sophisticated Living Rooms.',
        imageUrl: 'https://m.media-amazon.com/images/I/61njaqxTL7L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61njaqxTL7L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61G7XpSFaBL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/71YMCVAsL+L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/61TYhkY2xSL._SX679_.jpg'
  
      },
      {
        id: 148,
        name: 'ModernBookcase',
        price: 21999.99,
        ogprice: 24999.99,
        category: '14',
        description: 'Modern Bookcase for Organizing Your Reading Collection.',
        imageUrl: 'https://m.media-amazon.com/images/I/81x51AX8RCL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/81x51AX8RCL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/81NY3zyS5KL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/718Cjr1jbnL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/81x2LQOyuuL._SX679_.jpg'
  
      },
      {
        id: 149,
        name: 'SleekVanityTable',
        price: 20999.99,
        ogprice: 24999.99,
        category: '16',
        description: 'Sleek Vanity Table for Your Daily Beauty Routine.',
        imageUrl: 'https://m.media-amazon.com/images/I/51wxTu2OAJL._SX300_SY300_QL70_FMwebp_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/51wxTu2OAJL._SX300_SY300_QL70_FMwebp_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/51RpI4-+VxL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/31D2mqba69L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/618lTPczH6L._SX679_.jpg'
  
      },
      {
        id: 150,
        name: 'RetroSideboard',
        price: 21999.99,
        ogprice: 24999.99,
        category: '12',
        description: 'Retro Sideboard for a Vintage Touch in Your Home.',
        imageUrl: 'https://m.media-amazon.com/images/I/61v2e0Hq0xL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61v2e0Hq0xL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61rOy3SKtKL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/516i9IK45KL.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/31RX3O6Z4UL.jpg'
  
      },
      {
        id: 151,
        name: 'VintageDiningTable',
        price: 21999.99,
        ogprice: 24999.99,
        category: '12',
        description: 'Vintage Dining Table for a Classic Dining Experience.',
        imageUrl: 'https://m.media-amazon.com/images/I/81FDrxwH2xL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/81FDrxwH2xL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/81-dGMKttuL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/81zTewyu69L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/81Upo1bz00L._SX679_.jpg'
  
      },
      {
        id: 152,
        name: 'CozyBeanBagChair',
        price: 20999.99,
        ogprice: 22999.99,
        category: '9',
        description: 'Cozy Bean Bag Chair for Relaxed Seating.',
        imageUrl: 'https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/61ZSYQ3-YxL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/715V4pGx3iL._SX679_.jpg'
  
      },
      {
        id: 153,
        name: 'IndustrialStyleDesk',
        price: 22999.99,
        ogprice: 25999.99,
        category: '11',
        description: 'Industrial Style Desk for a Trendy Workspace.',
        imageUrl: 'https://m.media-amazon.com/images/I/812lCY3qNGL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/812lCY3qNGL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/917YQ6dKUpL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/81GlRcVzYCL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/81GlRcVzYCL._SX679_.jpg'
  
      },
      {
        id: 154,
        name: 'ContemporarySleeperSofa',
        price: 24999.99,
        ogprice: 27999.99,
        category: '10',
        description: 'Contemporary Sleeper Sofa for Stylish Guest Accommodation.',
        imageUrl: 'https://m.media-amazon.com/images/I/31XWz629MKL._SX300_SY300_QL70_FMwebp_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/31XWz629MKL._SX300_SY300_QL70_FMwebp_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/6125Hc6q+7L._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/6125Hc6q+7L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/41AZbS42QpL._SX679_.jpg'
  
      },
      {
        id: 155,
        name: 'AntiqueWritingDesk',
        price: 20999.99,
        ogprice: 23999.99,
        category: '13',
        description: 'Antique Writing Desk for a Charming Home Office.',
        imageUrl: 'https://m.media-amazon.com/images/I/61TgOqqe44L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61TgOqqe44L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61jAUpHZxHL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/61SxEg0ZHwL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/51U-ZgKvfLL._SX679_.jpg'
  
      },
      {
        id: 156,
        name: 'TraditionalRockingChair',
        price: 21999.99,
        ogprice: 24999.99,
        category: '12',
        description: 'Traditional Rocking Chair for Classic Comfort.',
        imageUrl: 'https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/6143Bn0ImNL._SX679_.jpg'
  
      },
      {
        id: 157,
        name: 'RusticEndTable',
        price: 20999.99,
        ogprice: 22999.99,
        category: '9',
        description: 'Rustic End Table for a Touch of Nature in Your Home.',
        imageUrl: 'https://m.media-amazon.com/images/I/61GYy4Kt9DL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61GYy4Kt9DL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/51IxvdA5C6L.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/81cU7AQzJ8L._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/618IcDHwHCL._SX679_.jpg'
  
      },
      {
        id: 158,
        name: 'ErgonomicOfficeChair',
        price: 23999.99,
        ogprice: 25999.99,
        category: '11',
        description: 'Ergonomic Office Chair for Comfortable Work Hours.',
        imageUrl: 'https://m.media-amazon.com/images/I/71RtACyG7JL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/71RtACyG7JL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/71gx6rNj-bL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/41V+GqbIYtL.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/61VF-1JqzpL._SX679_.jpg'
  
      },
      {
        id: 159,
        name: 'MinimalistConsoleTable',
        price: 20999.99,
        ogprice: 23999.99,
        category: '13',
        description: 'Minimalist Console Table for Simple Elegance.',
        imageUrl: 'https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/51Sv4zQoniL.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/51Sv4zQoniL.jpg'
  
      },
      {
        id: 160,
        name: 'Ultrafresh Mega TV Stand ',
        price: 14999.99,
        ogprice: 18999.99,
        category: '21',
        description: 'High Performance Brake Pads for Enhanced Stopping Power.',
        imageUrl: 'https://m.media-amazon.com/images/I/61J63J8jsdL._SX679_.jpg',
        image1Url: 'https://m.media-amazon.com/images/I/61J63J8jsdL._SX679_.jpg',
        image2Url: 'https://m.media-amazon.com/images/I/71oMJ-fzNJL._SX679_.jpg',
        image3Url: 'https://m.media-amazon.com/images/I/71eozm8fgrL._SX679_.jpg',
        image4Url: 'https://m.media-amazon.com/images/I/712HIeGuiFL._SX679_.jpg'
  
      },
       // Mobile
    {
      id: 101,
      name: 'iPhone 13 Pro',
      price: 61999,
      ogprice: 69900,
      category: '11',
      description: 'Latest Apple smartphone with Pro camera system.',
      imageUrl: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61NTwRtdzfL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71OxEU5mSCL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71G44HUh7yL._SX679_.jpg',

    },
    {
      id: 102,
      name: 'Samsung Galaxy S24 Ultra 5G',
      price: 51990,
      ogprice: 128999,
      category: '59',
      description: 'Powerful Samsung flagship with advanced camera features.',
      imageUrl: 'https://m.media-amazon.com/images/I/81njZjDqc6L._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81njZjDqc6L._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/713yolio92L._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71ZdFihN4YL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71E-ptCgHcL._SX679_.jpg',

    },
    {
      id: 103,
      name: 'Redmi Note 10 Pro',
      price: 11599,
      ogprice: 19999,
      category: '42',
      description: 'Affordable Redmi phone with high-end features.',
      imageUrl: 'https://m.media-amazon.com/images/I/61f-Do0Z-aL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81aQWPoGdOL._SY879_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61f-Do0Z-aL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/713jJj8mTIL._SY879_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61JRCcDOs5L._SX679_.jpg',

    },
    {
      id: 104,
      name: 'OPPO A18',
      price: 12999,
      ogprice: 18699,
      category: '17',
      description: 'Glowing Blue, 4GB RAM, 64GB Storage | 6.56" HD 90Hz Waterdrop Display | 5000 mAh Battery with No Cost EMI/Additional Exchange Offers.',
      imageUrl: 'https://m.media-amazon.com/images/I/717Qo4MH97L._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/717Qo4MH97L._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51ui6USIv7L._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61AplC-qoML._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61CEiTA5WWL._SX679_.jpg',

    },
    {
      id: 105,
      name: 'Apple iPhone 15 Pro',
      price: 129999,
      ogprice: 149999,
      category: '22',
      description: 'Compact Apple phone with A15 Bionic chip.',
      imageUrl: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51nZVUtGqOL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/715zWp1q7rL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61csXBvcW8L._SX679_.jpg',

    },
    {
      id: 106,
      name: 'Redmi 13C 5G',
      price: 15999,
      ogprice: 24999,
      category: '35',
      description: 'Startrail Silver, 8GB RAM, 256GB Storage ',
      imageUrl: 'https://m.media-amazon.com/images/I/813ZN8Pj-HL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/813ZN8Pj-HL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71Lo6IAE5bL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81mw0VeB4AL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51aFZI2UUTL._SX679_.jpg',

    },
    {
      id: 107,
      name: 'Redmi 10',
      price: 9899,
      ogprice: 18999,
      category: '48',
      description: 'Budget-friendly Redmi phone with large display.',
      imageUrl: 'https://m.media-amazon.com/images/I/81r7k-IoclL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81r7k-IoclL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61LxaW2TieL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81Lyw+JXkxL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71f86-oeqeL._SX679_.jpg',

    },
    {
      id: 108,
      name: 'realme narzo 60 5G',
      price: 21999,
      ogprice: 31099,
      category: '13',
      description: 'Mars Orange,8GB+256GB) | 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design .',
      imageUrl: 'https://m.media-amazon.com/images/I/41snmTn9mrL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41snmTn9mrL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/91i6C64GLSL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71C2LY9aNaL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51tqBZdk0LL._SX679_.jpg',

    },
    {
      id: 109,
      name: 'Redmi Note 13 5G',
      price: 21999,
      ogprice: 24999,
      category: '17',
      description: 'Arctic White, 12GB RAM, 256GB Storage | MTK Dimensity 6080 5G | 7.6mm, Slimmest Note Ever.',
      imageUrl: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/81iXlIBh4TL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/7168Kii9UwL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71gOZ0lcZsL._SX679_.jpg',

    },
    {
      id: 110,
      name: 'realme 11 5G',
      price: 49990,
      ogprice: 95990,
      category: '48',
      description: 'Glory Black, 8GB RAM, 256GB Storage.',
      imageUrl: 'https://m.media-amazon.com/images/I/71RPZAqZDcL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71RPZAqZDcL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71EYOqtNXnL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61nStZ-WFCL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71+q8VYZpAL._SX679_.jpg',

    },
    {
      id: 111,
      name: 'realme narzo N53',
      price: 11999,
      ogprice: 13999,
      category: '52',
      description: 'Feather Black, 8GB+128GB 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display.',
      imageUrl: 'https://m.media-amazon.com/images/I/71DSxfKzkJL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71DSxfKzkJL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71IfqYJ8reL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61sIL7YeV0L._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51TDto5vmpL._SX679_.jpg',

    },
    {
      id: 112,
      name: 'OPPO A59 5G',
      price: 24999,
      ogprice: 47950,
      category: '48',
      description: 'Silk Gold, 4GB RAM, 128GB Storage | 5000 mAh Battery with 33W SUPERVOOC Charger | 6.56" HD+ 90Hz Display | with No Cost EMI/Additional Exchange Offers.',
      imageUrl: 'https://m.media-amazon.com/images/I/81ZQ45FUSkL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81ZQ45FUSkL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/817Pjf-m+BL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81D82C2Q13L._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/81Md+cM01IL._SX679_.jpg',

    },
    {
      id: 113,
      name: 'vivo V29e 5G',
      price: 29999,
      ogprice: 43950,
      category: '39',
      description: 'Artistic Red, 8GB RAM, 256GB Storage.',
      imageUrl: 'https://m.media-amazon.com/images/I/51bUQnSnoaL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/51bUQnSnoaL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51ZUJPkoAFL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51Jge9Uq1HL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51XIfH0iW0L._SX679_.jpg',

    },
    {
      id: 114,
      name: 'TECNO Pova 5 Pro 5G ',
      price: 26900,
      ogprice: 39999,
      category: '33',
      description: 'Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | India 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78FHD+ Dot-in Display.',
      imageUrl: 'https://m.media-amazon.com/images/I/41nUkcbeCcL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41nUkcbeCcL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61MYownI5uL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71Q8-49mArL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71+AKrBz3sL._SX679_.jpg',

    },
    {
      id: 115,
      name: 'Motorola Edge 20',
      price: 17590,
      ogprice: 34999,
      category: '50',
      description: 'Motorola phone with a sleek design and 108MP camera.',
      imageUrl: 'https://m.media-amazon.com/images/I/61SmnheBBRL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61SmnheBBRL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/81tUOEJ5qGL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81tUOEJ5qGL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/41lU0HdCnTL._SX679_.jpg',

    },
    {
      id: 116,
      name: 'Vivo T2 5G',
      price: 41399,
      ogprice: 69590,
      category: '40',
      description: 'Vivo flagship with gimbal stabilization for superior photography.',
      imageUrl: 'https://m.media-amazon.com/images/I/71xLO7iFulL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61TKlubNM9L._SY879_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61FH7eXRI6L._SY879_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/411JVex603L._SY879_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61oz4NhlauL._SY879_.jpg',

    },
    {
      id: 117,
      name: 'OnePlus Nord CE 3 Lite 5G',
      price: 29990,
      ogprice: 34299,
      category: '12',
      description: 'Oppo flagship with powerful camera capabilities and 120Hz display.',
      imageUrl: 'https://m.media-amazon.com/images/I/41NOKPCVM7L._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41NOKPCVM7L._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51g5AuSsiYL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61CTkx2jIsL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71EA48-X7zL._SX679_.jpg',

    },
    {
      id: 118,
      name: 'Redmi Note 13 5G',
      price: 17899,
      ogprice: 20999,
      category: '14',
      description: 'premium phone with a stylish design and high-resolution display.',
      imageUrl: 'https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51RIty9eeVL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/51Qo65EdmML._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71klFSrkIOL._SX679_.jpg',

    },
    {
      id: 119,
      name: 'OnePlus Nord CE 2 Lite 5G ',
      price: 25449,
      ogprice: 27995,
      category: '9',
      description: 'Blue Tide, 6GB RAM, 128GB Storage.',
      imageUrl: 'https://m.media-amazon.com/images/I/61fDxgcyBDL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61fDxgcyBDL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61aHW4cPOPL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/610iGcIKOzL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51wO-NGA2WL._SX679_.jpg',

    },

    {
      id: 120,
      name: 'Apple iPhone 12 ',
      price: 45999,
      ogprice: 99999,
      category: '55',
      description: 'Gaming-centric Asus ROG Phone with a high-refresh-rate display.',
      imageUrl: 'https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71+tlCn1oXL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81Vr1E73vLL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71dKRQE+dAL._SX679_.jpg',

    },
    // HomeApplience
    {
    id: 201,
    name: 'SmartRefrigerator',
    price: 35999.99,
    ogprice: 39999.99,
    category: '10',
    description: 'Smart Refrigerator with Wi-Fi Connectivity and Touchscreen.',
    imageUrl: 'https://m.media-amazon.com/images/I/61Z+PDXEJkL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61Z+PDXEJkL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81aTKyu-haL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71sK2zqXWsL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71iVj0fTWVL._SX679_.jpg'

  },
  {
    id: 202,
    name: 'UltraHD4KSmartTV',
    price: 37999.99,
    ogprice: 41999.99,
    category: '10',
    description: 'Ultra HD 4K Smart TV with Dolby Vision and Surround Sound.',
    imageUrl: 'https://m.media-amazon.com/images/I/915+sXcUY+L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/915+sXcUY+L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/919-g9CeBRL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81n7G9G2qML._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81W2EgEC47L._SX679_.jpg'
  },
  {
    id: 203,
    name: 'FrontLoadWashingMachine',
    price: 35999.99,
    ogprice: 39999.99,
    category: '10',
    description: 'Front Load Washing Machine with Multiple Wash Programs.',
    imageUrl: 'https://m.media-amazon.com/images/I/41ulXs+K9ML._SY445_SX342_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41ulXs+K9ML._SY445_SX342_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71e8kNxyM8L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71BgAzZwmNL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81GZQ+NZOrL._SX679_.jpg'
  },
  {
    id: 204,
    name: 'InverterTechnologyAC',
    price: 37999.99,
    ogprice: 41999.99,
    category: '10',
    description: 'Inverter Technology Air Conditioner with Energy Efficiency.',
    imageUrl: 'https://m.media-amazon.com/images/I/61ZzcguzB1L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61ZzcguzB1L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/819CB-3RcCL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81sbcZ4CQ3L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/719rmeWMw4L._SX679_.jpg'
  },
  {
    id: 205,
    name: 'SmartHomeSecuritySystem',
    price: 35999.99,
    ogprice: 39999.99,
    category: '10',
    description: 'Smart Home Security System with Cameras and Sensors.',
    imageUrl: 'https://m.media-amazon.com/images/I/314ZRVlEPrL._SX300_SY300_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/314ZRVlEPrL._SX300_SY300_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61YmkdvN9NL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71g6inH-j+L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71vtn6KoBqL._SX679_.jpg'
  },
  {
    id: 206,
    name: 'RoboticVacuumCleaner',
    price: 37999.99,
    ogprice: 41999.99,
    category: '10',
    description: 'Robotic Vacuum Cleaner with Mapping Technology and Voice Control.',
    imageUrl: 'https://m.media-amazon.com/images/I/71SK22CSKLL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71SK22CSKLL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61-l3-oQPWL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81MMi+7OPJL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81quPZJl-8L._SX679_.jpg'
  },
  {
    id: 207,
    name: 'DigitalOvenToasterGrill',
    price: 35999.99,
    ogprice: 39999.99,
    category: '10',
    description: 'Digital Oven Toaster Grill for Baking and Grilling.',
    imageUrl: 'https://m.media-amazon.com/images/I/41FYDNXohbL._SX300_SY300_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41FYDNXohbL._SX300_SY300_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81BFqipMYtL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81hc2MvtsEL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81k-AbHoJvL._SX679_.jpg'
  },
  {
    id: 208,
    name: 'SmartHomeTheaterSystem',
    price: 37999.99,
    ogprice: 41999.99,
    category: '10',
    description: 'Smart Home Theater System with Wireless Speakers.',
    imageUrl: 'https://m.media-amazon.com/images/I/31H81UGzW0L._SY300_SX300_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/31H81UGzW0L._SY300_SX300_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61yRL2-HBCL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/616CsDhtRHL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51qpWlxnh+L._SX679_.jpg'
  },
  {
    id: 209,
    name: 'TopLoadWashingMachine',
    price: 35999.99,
    ogprice: 39999.99,
    category: '10',
    description: 'Top Load Washing Machine with TurboWash Technology.',
    imageUrl: 'https://m.media-amazon.com/images/I/411nZVj1MeL._SY445_SX342_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/411nZVj1MeL._SY445_SX342_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71ZcS-om23L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/810d7M1wIbL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71VxcvlI9fL._SX679_.jpg'
  },
  {
    id: 210,
    name: 'PortableAirPurifier',
    price: 37999.99,
    ogprice: 41999.99,
    category: '10',
    description: 'Portable Air Purifier for Clean and Fresh Indoor Air.',
    imageUrl: 'https://m.media-amazon.com/images/I/61ZzcguzB1L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/31S5oCtCqQL._SY445_SX342_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71m7vTdeDdL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81lLGuWxfCL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81zlgBjW5lL._SX679_.jpg'
  },
  {
    id: 211,
    name: 'FrenchDoorRefrigerator',
    price: 45999.99,
    ogprice: 49999.99,
    category: '8',
    description: 'French Door Refrigerator with Dual Ice Maker and Water Dispenser.',
    imageUrl: 'https://m.media-amazon.com/images/I/510IBHOcxCL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/510IBHOcxCL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71XRWCFB2+L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71HRTCMQOdL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71fU8piIqBL._SX679_.jpg'
  },
  {
    id: 212,
    name: 'CurvedSmartUHDTV',
    price: 55999.99,
    ogprice: 59999.99,
    category: '7',
    description: 'Curved Smart UHD TV with Quantum Dot Technology and HDR10+.',
    imageUrl: 'https://m.media-amazon.com/images/I/41NsSQR+FYL._SY300_SX300_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41NsSQR+FYL._SY300_SX300_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71nZFP0WWVL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71wxqRBeJtL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81sPMwkvmzL._SX679_.jpg'
  },
  {
    id: 213,
    name: 'FrontLoadSteamWasherDryerCombo',
    price: 69999.99,
    ogprice: 74999.99,
    category: '7',
    description: 'Front Load Steam Washer Dryer Combo for Convenient Laundry.',
    imageUrl: 'https://m.media-amazon.com/images/I/41PfypQJcBL._SY445_SX342_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41PfypQJcBL._SY445_SX342_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71u+D1HhUIL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71p7san+hML._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81eSiq8m8ZL._SX679_.jpg'
  },
  {
    id: 214,
    name: 'SplitAirConditioner',
    price: 49999.99,
    ogprice: 54999.99,
    category: '9',
    description: 'Split Air Conditioner with Turbo Cooling and Smart Climate Control.',
    imageUrl: 'https://m.media-amazon.com/images/I/61bfA4GFKJL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61bfA4GFKJL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81Y0LAoYtIL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81CVbkU5ARL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71MiDkyvckL._SX679_.jpg'
  },
  {
    id: 215,
    name: 'SmartHomeAutomationHub',
    price: 79999.99,
    ogprice: 84999.99,
    category: '6',
    description: 'Smart Home Automation Hub for Integrated Control of Devices.',
    imageUrl: 'https://m.media-amazon.com/images/I/511mnOXnARL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/511mnOXnARL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/519IEtlnMLL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61b6JOP4DfL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61qxrE6iDFL._SX679_.jpg'
  },
  {
    id: 216,
    name: 'SelfCleaningRoboticVacuum',
    price: 64999.99,
    ogprice: 69999.99,
    category: '7',
    description: 'Self-Cleaning Robotic Vacuum with AI Navigation and Mapping.',
    imageUrl: 'https://m.media-amazon.com/images/I/31eAwtemLsL._SX300_SY300_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/31eAwtemLsL._SX300_SY300_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81Ctsf4cACL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61WCXn7Jo4L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61zq1yNUFHL._SX679_.jpg'
  },
  {
    id: 217,
    name: 'ConvectionDoubleOvenRange',
    price: 55999.99,
    ogprice: 59999.99,
    category: '7',
    description: 'Convection Double Oven Range for Precise Cooking.',
    imageUrl: 'https://m.media-amazon.com/images/I/71DO4WEuhCL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71DO4WEuhCL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61dx9dSCg2L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71BuUK+dQaL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71UQh8yvy9L._SX679_.jpg'
  },
  {
    id: 218,
    name: 'SmartSoundbarSystem',
    price: 44999.99,
    ogprice: 49999.99,
    category: '10',
    description: 'Smart Soundbar System for Immersive Home Audio.',
    imageUrl: 'https://m.media-amazon.com/images/I/71V2mCb6i6L._SX466_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71V2mCb6i6L._SX466_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71qDEIgmf7L._SX466_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71RTgUPqkjL._SX466_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71-qfBFh4IL._SX466_.jpg'
  },
  {
    id: 219,
    name: 'TopLoadSteamWashingMachine',
    price: 45999.99,
    ogprice: 49999.99,
    category: '8',
    description: 'Top Load Steam Washing Machine with Stain Removal Technology.',
    imageUrl: 'https://m.media-amazon.com/images/I/71o4XEEvEVL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71o4XEEvEVL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81qYoMNy5aL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71JxneTfWUL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71rRBUHEiIL._SX679_.jpg',
  },
  {
    id: 220,
    name: 'SmartAirPurificationSystem',
    price: 79999.99,
    ogprice: 84999.99,
    category: '6',
    description: 'Smart Air Purification System with HEPA Filter and Real-time Monitoring.',
    imageUrl: 'https://m.media-amazon.com/images/I/6149cuqlIiL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6149cuqlIiL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61K2-zmdHbL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61iGVlxECfL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71OkbcDEDmL._SX679_.jpg',
  },
    // Electronic
    {
      id: 121,
      name: 'LEDDeskLamp',
      price: 29999,
      ogprice: 49999,
      category: '40',
      description: 'Modern LED Desk Lamp with Adjustable Brightness and Color Temperature.',
      imageUrl: 'https://m.media-amazon.com/images/I/61DmyJsP2cL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61DmyJsP2cL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71riO2YUW1L._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71N4BCOXERL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71P4ONQaxjL._SX679_.jpg',

    },
    {
      id: 122,
      name: 'SmartBulb',
      price: 148.99,
      ogprice: 241.99,
      category: '40',
      description: 'Smart WiFi Bulb compatible with Voice Assistants and Mobile App Control.',
      imageUrl: 'https://m.media-amazon.com/images/I/41sx753+kXL._SX342_SY445_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41sx753+kXL._SX342_SY445_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61BZnzj8daL._SX466_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61vN5ySYjJL._SX466_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61vN5ySYjJL._SX466_.jpg',

    },
    {
      id: 123,
      name: 'QuietFan',
      price: 49.99,
      ogprice: 79.99,
      category: '38',
      description: 'Ultra-Quiet Oscillating Tower Fan with Remote Control and Adjustable Speeds.',
      imageUrl: 'https://m.media-amazon.com/images/I/61KnEzO+tiL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61KnEzO+tiL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61mOMe3nbSL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61Fm5tM+orL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/619KQroKbYL._SX679_.jpg',

    },
    {
      id: 124,
      name: 'SmartThermostat',
      price: 149.99,
      ogprice: 199.99,
      category: '25',
      description: 'Smart Thermostat with Energy-Saving Features and Smartphone Integration.',
      imageUrl: 'https://m.media-amazon.com/images/I/310mUEGMwrL._SY445_SX342_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/310mUEGMwrL._SY445_SX342_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71vlEmr1PFL._SX466_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/717zB+nQlmL._SX466_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/717zB+nQlmL._SX466_.jpg',

    },
    {
      id: 125,
      name: 'WirelessCharger',
      price: 249.99,
      ogprice: 399.99,
      category: '38',
      description: 'Qi Wireless Charger Pad compatible with iPhone and Android Devices.',
      imageUrl: 'https://m.media-amazon.com/images/I/31j5EM1h9fL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/31j5EM1h9fL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61DNFLKFImL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61DNFLKFImL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71QgbEUx7FL._SX679_.jpg',

    },
    {
      id: 126,
      name: 'BluetoothSpeaker',
      price: 399.99,
      ogprice: 599.99,
      category: '33',
      description: 'Portable Bluetooth Speaker with High-Quality Sound and Waterproof Design.',
      imageUrl: 'https://m.media-amazon.com/images/I/61nKWBEhjIS._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61nKWBEhjIS._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71tTv-KTNDS._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71DWjMIj0fS._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51x7GUn2sBS._SX679_.jpg',

    },
    {
      id: 127,
      name: 'SmartPlug',
      price: 129.99,
      ogprice: 199.99,
      category: '35',
      description: 'Smart WiFi Plug for Remote Control and Voice-Activated Smart Home Devices.',
      imageUrl: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81DTVEIq+NL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71EQAHD6wTL._SX679_.jpg',

    },
    {
      id: 128,
      name: 'HDProjector',
      price: 19999.99,
      ogprice: 29999.99,
      category: '33',
      description: 'Full HD Home Theater Projector with HDMI and USB Connectivity.',
      imageUrl: 'https://m.media-amazon.com/images/I/41K6Dr2sSYL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41K6Dr2sSYL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/81eGpHHXf9L._SX466_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/81dnG1PTZAL._SX466_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/81+Rua0TZyL._SX466_.jpg',

    },
    {
      id: 130,
      name: 'SmartDoorbell',
      price: 899.99,
      ogprice: 1299.99,
      category: '31',
      description: 'Smart Video Doorbell with Motion Detection and Two-Way Audio.',
      imageUrl: 'https://m.media-amazon.com/images/I/41DT3rdX4RL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41DT3rdX4RL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51QHh0fQsML._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61iMHs3y-DL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51x7-6SlY+L._SX679_.jpg',

    },
    {
      id: 130,
      name: 'AirPurifier',
      price: 79.99,
      ogprice: 119.99,
      category: '33',
      description: 'HEPA Air Purifier with Ionizer and Night Light for Home and Office.',
      imageUrl: 'https://m.media-amazon.com/images/I/41z7501kjQL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41z7501kjQL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/612a40AdGFL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/613xZ5Z3bUL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/619MYeF6UZL._SX679_.jpg',

    },
    {
      id: 131,
      name: 'WirelessEarbuds',
      price: 149.99,
      ogprice: 179.99,
      category: '38',
      description: 'True Wireless Earbuds with Noise Cancellation and Touch Controls.',
      imageUrl: 'https://m.media-amazon.com/images/I/41bFYKQ7ASL._SY445_SX342_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41bFYKQ7ASL._SY445_SX342_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61zStTbkPjL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61neTmbaZfL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61M7FYZaBXL._SX679_.jpg',

    },
    {
      id: 132,
      name: 'SmartWatch',
      price: 2299.99,
      ogprice: 2999.99,
      category: '35',
      description: 'Fitness Tracker Smart Watch with Heart Rate Monitor and GPS.',
      imageUrl: 'https://m.media-amazon.com/images/I/71MkKOPvq7L._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71MkKOPvq7L._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71AV96pgTSL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71PvnM7e56L._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71V1048BqbL._SX679_.jpg',

    },
    {
      id: 133,
      name: 'RobotVacuum',
      price: 5199.99,
      ogprice: 5299.99,
      category: '33',
      description: 'Smart Robot Vacuum Cleaner with Mapping Technology and Alexa Integration.',
      imageUrl: 'https://m.media-amazon.com/images/I/419M+aLrdjL._SY300_SX300_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/419M+aLrdjL._SY300_SX300_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71KnGwFjIXL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71sQK8b9BsL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71ADp0j54ML._SX679_.jpg',

    },
    {
      id: 134,
      name: 'USBChargingHub',
      price: 199.99,
      ogprice: 299.99,
      category: '33',
      description: 'USB Charging Hub with Multiple Ports for Smartphones and Tablets.',
      imageUrl: 'https://m.media-amazon.com/images/I/41JvNaF4XEL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/41JvNaF4XEL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/610zIwfPhRL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61x3LoAMomL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71QhQjYfZfL._SX679_.jpg',

    },
    {
      id: 135,
      name: 'SmartScale',
      price: 534.99,
      ogprice: 549.99,
      category: '30',
      description: 'Digital Smart Scale for Body Weight and BMI with App Connectivity.',
      imageUrl: 'https://m.media-amazon.com/images/I/61lwgPAlzdL._SX466_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/61lwgPAlzdL._SX466_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/81Jb+fmEuTL._SX466_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71kh9Do3QzL._SX466_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61TrJa+TCEL._SX466_.jpg',

    },
    {
      id: 136,
      name: 'SmartDeskLamp',
      price: 339.99,
      ogprice: 359.99,
      category: '33',
      description: 'Smart LED Desk Lamp with Wireless Charger and USB Ports.',
      imageUrl: 'https://m.media-amazon.com/images/I/21j5TijDdqL._SY445_SX342_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/21j5TijDdqL._SY445_SX342_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/610HA8xgnsL._SX466_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/617wEVVZqOL._SX466_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/51gRi0dD+EL._SX466_.jpg',

    },
    {
      id: 137,
      name: 'BluetoothHeadphones',
      price: 469.99,
      ogprice: 499.99,
      category: '30',
      description: 'Over-Ear Bluetooth Headphones with Active Noise Cancellation.',
      imageUrl: 'https://m.media-amazon.com/images/I/413SSzNtsdL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/413SSzNtsdL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61MM+TqTPXL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61jqPEgr+NL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61KngrS7iVL._SX679_.jpg',

    },
    {
      id: 138,
      name: 'SmartHomeSecurityCamera',
      price: 1959.99,
      ogprice: 2989.99,
      category: '33',
      description: 'Wireless Smart Home Security Camera with Motion Detection and Night Vision.',
      imageUrl: 'https://m.media-amazon.com/images/I/31Nk80-hUUL._SX300_SY300_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/31Nk80-hUUL._SX300_SY300_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51Cy-wU1kML._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61Iajx2gXhL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61COGks9gbL._SX679_.jpg1  ',

    },
    {
      id: 139,
      name: 'PortablePowerBank',
      price: 924.99,
      ogprice: 1339.99,
      category: '38',
      description: 'Compact Portable Power Bank for Charging Devices on the Go.',
      imageUrl: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71XLCSIqDIL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71t1HtfIPAL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/81SBnMJYAZL._SX679_.jpg',

    },
    {
      id: 140,
      name: 'WirelessGamingMouse',
      price: 344.99,
      ogprice: 669.99,
      category: '36',
      description: 'Wireless Gaming Mouse with Programmable Buttons and RGB Lighting.',
      imageUrl: 'https://m.media-amazon.com/images/I/81PgM6Vu14L._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81PgM6Vu14L._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',

    },
    {
      id: 305,
      name: 'Apple iPhone 15 Pro',
      price: 129999,
      ogprice: 149999,
      category: '22',
      description: 'Compact Apple phone with A15 Bionic chip.',
      imageUrl: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/51nZVUtGqOL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/715zWp1q7rL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/61csXBvcW8L._SX679_.jpg',
      sold : true,
    },
    {
      id: 302,
      name: 'Samsung Galaxy S24 Ultra 5G',
      price: 51990,
      ogprice: 128999,
      category: '59',
      description: 'Powerful Samsung flagship with advanced camera features.',
      imageUrl: 'https://m.media-amazon.com/images/I/81njZjDqc6L._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/81njZjDqc6L._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/713yolio92L._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71ZdFihN4YL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/71E-ptCgHcL._SX679_.jpg',
      sold : true,
    },
    {
      id: 439,
      name: 'PortablePowerBank',
      price: 924.99,
      ogprice: 1339.99,
      category: '38',
      description: 'Compact Portable Power Bank for Charging Devices on the Go.',
      imageUrl: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
      image1Url: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
      image2Url: 'https://m.media-amazon.com/images/I/71XLCSIqDIL._SX679_.jpg',
      image3Url: 'https://m.media-amazon.com/images/I/71t1HtfIPAL._SX679_.jpg',
      image4Url: 'https://m.media-amazon.com/images/I/81SBnMJYAZL._SX679_.jpg',

    },
    
  ];


  // Check if "products" key exists in localStorage
if (!localStorage.getItem("products")) {
  // If not, initialize it with default data
  localStorage.setItem("products", JSON.stringify(ecommerceProducts));
}


    // Function to display products on the webpage
    // Fetch products from localStorage

// Function to get the button text based on product id
function getButtonText(productId) {
  var addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];
  return addedProducts.includes(productId) ? "Added" : "Add to Cart";
}

// Function to handle the "Buy Now" button click
function buyNow(event) {
  var productId = event.currentTarget.dataset.productId;

  var buyCart = JSON.parse(localStorage.getItem("buy")) || [];
  var foundObject = buyCart.find(function (elem) {
    return elem.id == productId;
  });

  if (foundObject !== undefined) {
    console.log("Product is already in the buy cart.");
    return;
  }

  var selectedProduct = products.find(function (product) {
    return product.id == productId;
  });

  if (selectedProduct) {
    buyCart.push(selectedProduct);
    localStorage.setItem("buy", JSON.stringify(buyCart));
    console.log("Product added to the buy cart:", selectedProduct);
  } else {
    console.log("Product not found.");
  }
}

// Function to handle the "Add to Cart" button click
function addToCart(event) {
  var productId = event.currentTarget.dataset.productId;
  var addButton = event.currentTarget;

  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var foundObject = cart.find(function (elem) {
    return elem.id == productId;
  });

  if (foundObject !== undefined) {
    console.log("Product is already in the cart.");
    return;
  }

  var selectedProduct = products.find(function (product) {
    return product.id == productId;
  });

  if (selectedProduct) {
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Product added to the cart:", selectedProduct);

    // Change button text to "Added"
    addButton.textContent = "Added";

    event.currentTarget.addEventListener('dblclick', function () {
      alert("Product added to the cart!");
    });
  } else {
    console.log("Product not found.");
  }
}

const products = JSON.parse(localStorage.getItem('products'));


// Function to display products on the webpage
// Function to display products in a specified container within a given range
function displayProducts(containerId, start, end) {
  const container = document.getElementById(containerId);

  // Display products within the specified range in the products array
  const productsToShow = products.slice(start, end);

  productsToShow.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <a href="../Views/product-details.html?id=${product.id}">
        <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
        <h3>${product.name}</h3>
        <p class="blue">Offer: ${product.category}</p>
        <p class="price">Price: $${product.price.toFixed(2)}</p>
        <p>Original Price: <span class="th">₹${product.ogprice}</span></p>
      </a>
      <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
      <a href="../views/payment.html">
        <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
      </a>
    `;

    container.appendChild(productDiv);
  });

  // Add event listeners after all products are added to the DOM
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Add event listener for buyNowBtn
const buyNowButtons = document.querySelectorAll('.buyNowBtn');
buyNowButtons.forEach(button => {
  button.addEventListener('click', buyNow);
});
}

// Call the displayProducts function to initialize the webpage for different categories
displayProducts('product-container', 0, 20);
displayProducts('women-container', 20, 40);
displayProducts('child-container', 40, 60);
displayProducts('access-container', 60, 80);
displayProducts('shoes-container', 80, 100);
displayProducts('furniture-container', 100, 120);
displayProducts('mobile-container', 120, 140);
displayProducts('home-container', 140, 160);
displayProducts('electonics-container', 160, 180);

// Display products in the "new-container" after the 180th product
// displayProducts('new-container', 180, products.length);
// console.log(products.slice(180)); // Log products beyond index 180

// Function to filter products based on search input
function searchProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = ecommerceProducts.filter(product => {
    return product.name.toLowerCase().includes(searchInput) ||
           product.category.toLowerCase().includes(searchInput);
  });

  // Display filtered products or show a message in the product-container
  const container = document.getElementById('product-container');
  if (filteredProducts.length > 0) {
    displayFilteredProducts(filteredProducts, container);
  } else {
    container.innerHTML = '<h1 class="center">Products Not found</h1>';
  }
}

// Function to display filtered products in a container
function displayFilteredProducts(filteredProducts, container) {
  container.innerHTML = ''; // Clear existing content in the container

  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <a href="../Views/product-details.html?id=${product.id}">
        <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
        <h3>${product.name}</h3>
        <p class="blue">Offer: ${product.category}</p>
        <p class="price">Price: $${product.price.toFixed(2)}</p>
        <p>Original Price: <span class="th">₹${product.ogprice}</span></p>
      </a>
      <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
      <a href="../views/payment.html">
        <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
      </a>
    `;

    container.appendChild(productDiv);
  });

  // Add event listeners after all products are added to the DOM
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Add event listener for buyNowBtn
const buyNowButtons = document.querySelectorAll('.buyNowBtn');
buyNowButtons.forEach(button => {
  button.addEventListener('click', buyNow);
});
}

// Other functions and code (assuming they are defined elsewhere in your script)
// Example of how to trigger the search on an event, for example, on the 'input' event:
document.getElementById('searchInput').addEventListener('input', searchProducts);

document.addEventListener('DOMContentLoaded', function () {
  displayNewProducts();
});

function displayNewProducts() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let filteredProducts = products.filter(product => product.id >= 221 && product.sold === true);

  let newContainer = document.getElementById('new-container');
  newContainer.innerHTML = '';

  filteredProducts.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.innerHTML = `
    <a href="../Views/product-details.html?id=${product.id}">
      <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
      <h3>${product.name}</h3>
      <p class="blue">Offer: ${product.category}</p>
      <p class="price">Price: $${product.price}</p>
      <p>Original Price: <span class="th">₹${product.ogprice}</span></p>
      <p>Category: ${product.category}</p>
      </a>
      <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
      <a href="../views/payment.html">
        <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
      </a>
    `;

    newContainer.appendChild(productDiv);

    // Add event listener to the newly created addToCart button
    productDiv.querySelector('.addToCartBtn, .buyNowBtn').addEventListener('click', addToCart);

    document.querySelectorAll('.buyNowBtn').forEach(button => {
      button.addEventListener('click', function (event) {
        // Call the existing buyNow function
        buyNow(event);
      });
    });
  });
}






