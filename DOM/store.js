const ecommerceProducts = [
  // Mens-Wear
  {
    id: 1,
    name: 'GentleMania',
    price: 899,
    ogprice: 1999,
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    category: '54% Off',
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
    category: '56% Off',
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
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    category: '54% Off',
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
    category: '56% Off',
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
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    category: '54% Off',
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
    category: '56% Off',
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
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    category: '54% Off',
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
    category: '56% Off',
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
    category: '61% Off',
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
    category: '81% Off',
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
    category: '61% Off',
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
    category: '60% Off',
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
    category: '50% Off',
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
    category: '61% Off',
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
    category: '81% Off',
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
    category: '61% Off',
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
    category: '60% Off',
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
    category: '50% Off',
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
    category: '61% Off',
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
    category: '81% Off',
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
    category: '61% Off',
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
    category: '60% Off',
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
    category: '50% Off',
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
    category: '61% Off',
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
    category: '60% Off',
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
    category: '50% Off',
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
    category: '61% Off',
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
    category: '81% Off',
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
    category: '65% Off',
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
    category: '64% Off',
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
    category: '60% Off',
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
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    category: '55% Off',
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
    category: '57% Off',
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
    category: '56% Off',
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
    price: 379,
    ogprice: 849,
    category: '55% Off',
    description: 'Girls Ruffled Sleeve Party Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/61S08+Lad8L._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  },
  {
    id: 51,
    name: 'Cute Kiddo',
    price: 349,
    ogprice: 999,
    category: '65% Off',
    description: 'Adorable Girls Floral Print Cotton Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/51ClI-+lQhL._AC_UL480_FMwebp_QL65_.jpg',
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
    category: '64% Off',
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
    category: '60% Off',
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
    category: '55% Off',
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
    price: 259,
    ogprice: 599,
    category: '57% Off',
    description: 'Girls Pink Polka Dot Summer Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/51HhohS9jBL._AC_UL480_FMwebp_QL65_.jpg',
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
    category: '56% Off',
    description: 'Boys Camouflage Print Hoodie.',
    imageUrl: 'https://m.media-amazon.com/images/I/41i94xoGmbL._AC_UL480_FMwebp_QL65_.jpg'

  },
  {
    id: 57,
    name: 'Sweet Dreams',
    price: 179,
    ogprice: 399,
    category: '55% Off',
    description: 'Cotton Pajama Set for Boys and Girls.',
    imageUrl: 'https://m.media-amazon.com/images/I/61n7vIJPBiL._AC_UL480_FMwebp_QL65_.jpg',
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
    category: '57% Off',
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
    price: 239,
    ogprice: 549,
    category: '56% Off',
    description: 'Athletic Star Print Track Pants for Kids.',
    imageUrl: 'https://m.media-amazon.com/images/I/51YWnDMMY1L._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
  },
  {
    id: 60,
    name: 'Fancy Frills',
    price: 379,
    ogprice: 849,
    category: '55% Off',
    description: 'Girls Ruffled Sleeve Party Dress.',
    imageUrl: 'https://m.media-amazon.com/images/I/61S08+Lad8L._AC_UL480_FMwebp_QL65_.jpg',
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
    category: '50% Off',
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
    category: '42% Off',
    description: 'Floral Paradise Perfume for Women - 50ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/41adp3N9ZOL._SY300_SX300_QL70_FMwebp_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41adp3N9ZOL._SY300_SX300_QL70_FMwebp_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41adp3N9ZOL._SY300_SX300_QL70_FMwebp_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41adp3N9ZOL._SY300_SX300_QL70_FMwebp_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41adp3N9ZOL._SY300_SX300_QL70_FMwebp_.jpg',

  },
  {
    id: 63,
    name: 'Classique Chic',
    price: 49,
    ogprice: 80,
    category: '39% Off',
    description: 'Classic Leather Belt with Buckle Closure.',
    imageUrl: 'https://m.media-amazon.com/images/I/71OSvp93mgL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71OSvp93mgL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71OSvp93mgL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71OSvp93mgL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71OSvp93mgL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 64,
    name: 'Timeless Essence',
    price: 199,
    ogprice: 350,
    category: '43% Off',
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
    category: '34% Off',
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
    category: '44% Off',
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
    category: '41% Off',
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
    category: '38% Off',
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
    category: '41% Off',
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
    category: '34% Off',
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
    category: '50% Off',
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
    category: '42% Off',
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
    category: '39% Off',
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
    category: '43% Off',
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
    category: '34% Off',
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
    category: '44% Off',
    description: 'Delicate Floral Scent Perfume - 30ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/512RJMDGTEL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/512RJMDGTEL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/512RJMDGTEL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/512RJMDGTEL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/512RJMDGTEL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 77,
    name: 'Modern Edge',
    price: 59,
    ogprice: 100,
    category: '41% Off',
    description: 'Slim Leather Belt with Geometric Buckle Design.',
    imageUrl: 'https://m.media-amazon.com/images/I/71aaiYyTPZL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71aaiYyTPZL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71aaiYyTPZL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71aaiYyTPZL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71aaiYyTPZL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 78,
    name: 'Radiant Aura',
    price: 249,
    ogprice: 400,
    category: '38% Off',
    description: 'Radiant Women\'s Watch with Rhinestone Accents.',
    imageUrl: 'https://m.media-amazon.com/images/I/61uY-wl4OdL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61uY-wl4OdL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61uY-wl4OdL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61uY-wl4OdL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61uY-wl4OdL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 79,
    name: 'Trendsetter',
    price: 89,
    ogprice: 150,
    category: '41% Off',
    description: 'Fashionable Wide Belt with Double Buckle Detail.',
    imageUrl: 'https://m.media-amazon.com/images/I/81rTgEA5NYL._AC_UL480_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81rTgEA5NYL._AC_UL480_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81rTgEA5NYL._AC_UL480_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81rTgEA5NYL._AC_UL480_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81rTgEA5NYL._AC_UL480_QL65_.jpg',

  },
  {
    id: 80,
    name: 'Sparkling Elegance',
    price: 199,
    ogprice: 300,
    category: '34% Off',
    description: 'Sparkling Rhinestone-studded Wristwatch.',
    imageUrl: 'https://m.media-amazon.com/images/I/71DWYM66-cL._AC_UL480_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71DWYM66-cL._AC_UL480_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71DWYM66-cL._AC_UL480_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71DWYM66-cL._AC_UL480_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71DWYM66-cL._AC_UL480_QL65_.jpg',

  },
  // Beauty
  {
    id: 81,
    name: 'Radiant Glow Cream',
    price: 59,
    ogprice: 80,
    category: '26% Off',
    description: 'Nourishing Cream for Glowing Skin - 50g.',
    imageUrl: 'https://m.media-amazon.com/images/I/71Z1XAEK1aL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71Z1XAEK1aL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71Z1XAEK1aL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71Z1XAEK1aL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71Z1XAEK1aL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 82,
    name: 'Floral Bliss Face Wash',
    price: 19,
    ogprice: 25,
    category: '24% Off',
    description: 'Refreshing Floral Face Wash - 100ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61cdRC6b1QL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61cdRC6b1QL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61cdRC6b1QL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61cdRC6b1QL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61cdRC6b1QL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 83,
    name: 'Silk Essence Soap',
    price: 29,
    ogprice: 40,
    category: '28% Off',
    description: 'Luxurious Silk-infused Soap Bar - 75g.',
    imageUrl: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 84,
    name: 'Aqua Radiance Shampoo',
    price: 39,
    ogprice: 50,
    category: '22% Off',
    description: 'Hydrating Shampoo for Radiant Hair - 250ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61SNc8l98UL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61SNc8l98UL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61SNc8l98UL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61SNc8l98UL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61SNc8l98UL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 85,
    name: 'Cherry Blossom Perfume',
    price: 45,
    ogprice: 60,
    category: '25% Off',
    description: 'Charming Cherry Blossom Fragrance - 50ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/71hw-ax4b9L._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71hw-ax4b9L._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71hw-ax4b9L._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71hw-ax4b9L._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71hw-ax4b9L._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 86,
    name: 'Diamond Radiance Mask',
    price: 79,
    ogprice: 100,
    category: '21% Off',
    description: 'Revitalizing Diamond-infused Face Mask.',
    imageUrl: 'https://m.media-amazon.com/images/I/51GAnntm3dL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51GAnntm3dL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51GAnntm3dL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51GAnntm3dL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51GAnntm3dL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 87,
    name: 'Sun-Kissed Bronzer',
    price: 34,
    ogprice: 45,
    category: '24% Off',
    description: 'Natural Sun-Kissed Bronzing Powder - 10g.',
    imageUrl: 'https://m.media-amazon.com/images/I/612Eaf-ADJL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/612Eaf-ADJL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/612Eaf-ADJL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/612Eaf-ADJL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/612Eaf-ADJL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 88,
    name: 'Pearl Elegance Nail Polish',
    price: 15,
    ogprice: 20,
    category: '25% Off',
    description: 'Pearlescent Nail Polish for Elegant Nails - 8ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/81V8Hqjtr4L._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81V8Hqjtr4L._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81V8Hqjtr4L._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81V8Hqjtr4L._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81V8Hqjtr4L._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 89,
    name: 'Golden Radiance Serum',
    price: 69,
    ogprice: 90,
    category: '23% Off',
    description: 'Anti-aging Golden Radiance Serum - 30ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/51kn9a4d6-L._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51kn9a4d6-L._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51kn9a4d6-L._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51kn9a4d6-L._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51kn9a4d6-L._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 90,
    name: 'Lavender Dream Body Lotion',
    price: 25,
    ogprice: 35,
    category: '29% Off',
    description: 'Relaxing Lavender-scented Body Lotion - 200ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/51dPbOJ1INL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51dPbOJ1INL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51dPbOJ1INL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51dPbOJ1INL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51dPbOJ1INL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 91,
    name: 'Cool Revive Moisturizer',
    price: 49,
    ogprice: 65,
    category: '25% Off',
    description: 'Cooling Moisturizer for Men - 75g.',
    imageUrl: 'https://m.media-amazon.com/images/I/41yxQCIeMjL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41yxQCIeMjL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41yxQCIeMjL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41yxQCIeMjL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41yxQCIeMjL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 92,
    name: 'Charcoal Detox Face Wash',
    price: 22,
    ogprice: 30,
    category: '27% Off',
    description: 'Deep Cleansing Charcoal Face Wash - 120ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61VKUh0z6HL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61VKUh0z6HL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61VKUh0z6HL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61VKUh0z6HL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61VKUh0z6HL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 93,
    name: 'Energizing Sport Soap',
    price: 25,
    ogprice: 35,
    category: '29% Off',
    description: 'Invigorating Sporty Soap Bar - 100g.',
    imageUrl: 'https://m.media-amazon.com/images/I/6197Ju782TL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6197Ju782TL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/6197Ju782TL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/6197Ju782TL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/6197Ju782TL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 94,
    name: 'Fresh Impact Shampoo',
    price: 32,
    ogprice: 45,
    category: '28% Off',
    description: 'Refreshing Shampoo for Men - 200ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61+VvWKOjmL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61+VvWKOjmL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61+VvWKOjmL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61+VvWKOjmL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61+VvWKOjmL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 95,
    name: 'Intense Woods Cologne',
    price: 55,
    ogprice: 75,
    category: '27% Off',
    description: 'Intensely Woody Cologne for Men - 50ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61toXmW31PL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61toXmW31PL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61toXmW31PL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61toXmW31PL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61toXmW31PL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 96,
    name: 'Beard Grooming Kit',
    price: 39,
    ogprice: 50,
    category: '22% Off',
    description: 'Complete Beard Grooming Kit with Oil, Balm, and Comb.',
    imageUrl: 'https://m.media-amazon.com/images/I/515kevxLjJL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/515kevxLjJL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/515kevxLjJL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/515kevxLjJL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/515kevxLjJL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 97,
    name: 'Ocean Breeze Aftershave',
    price: 18,
    ogprice: 25,
    category: '28% Off',
    description: 'Refreshing Ocean Breeze Aftershave Lotion - 100ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/91+ei-f0qvL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/91+ei-f0qvL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/91+ei-f0qvL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/91+ei-f0qvL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/91+ei-f0qvL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 98,
    name: 'Musk Fusion Deodorant',
    price: 12,
    ogprice: 15,
    category: '20% Off',
    description: 'Long-lasting Musk Fusion Deodorant Spray - 150ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/81fD831W9CL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81fD831W9CL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81fD831W9CL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81fD831W9CL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81fD831W9CL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 99,
    name: 'Precision Razor Set',
    price: 28,
    ogprice: 35,
    category: '20% Off',
    description: 'High-precision Razor Set for a Smooth Shave.',
    imageUrl: 'https://m.media-amazon.com/images/I/81nblx6bAfL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81nblx6bAfL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81nblx6bAfL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81nblx6bAfL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/81nblx6bAfL._AC_UL480_FMwebp_QL65_.jpg',

  },
  {
    id: 100,
    name: 'Cooling Mint Shave Gel',
    price: 15,
    ogprice: 20,
    category: '25% Off',
    description: 'Cooling Mint Shaving Gel for a Refreshing Shave - 150ml.',
    imageUrl: 'https://m.media-amazon.com/images/I/61lVSosKLaL._AC_UL480_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61lVSosKLaL._AC_UL480_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61lVSosKLaL._AC_UL480_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61lVSosKLaL._AC_UL480_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61lVSosKLaL._AC_UL480_FMwebp_QL65_.jpg',

  },
  // Mobile
  {
    id: 101,
    name: 'iPhone 13 Pro',
    price: 61999,
    ogprice: 69900,
    category: '11% Off',
    description: 'Latest Apple smartphone with Pro camera system.',
    imageUrl: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 102,
    name: 'Samsung Galaxy S21 Ultra',
    price: 51990,
    ogprice: 128999,
    category: '59% Off',
    description: 'Powerful Samsung flagship with advanced camera features.',
    imageUrl: 'https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 103,
    name: 'Redmi Note 10 Pro',
    price: 11599,
    ogprice: 19999,
    category: '42% Off',
    description: 'Affordable Redmi phone with high-end features.',
    imageUrl: 'https://m.media-amazon.com/images/I/5114EtDzdkS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/5114EtDzdkS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/5114EtDzdkS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/5114EtDzdkS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/5114EtDzdkS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 104,
    name: 'Sony Xperia 1 III',
    price: 12999,
    ogprice: 18699,
    category: '17% Off',
    description: 'Premium Sony smartphone with 4K HDR OLED display.',
    imageUrl: 'https://m.media-amazon.com/images/I/41dxBio-KtS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41dxBio-KtS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41dxBio-KtS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41dxBio-KtS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41dxBio-KtS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 105,
    name: 'iPhone 13 Mini',
    price: 49999,
    ogprice: 69999,
    category: '22% Off',
    description: 'Compact Apple phone with A15 Bionic chip.',
    imageUrl: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 106,
    name: 'Samsung Galaxy A52',
    price: 15999,
    ogprice: 24999,
    category: '35% Off',
    description: 'Mid-range Samsung phone with versatile camera setup.',
    imageUrl: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 107,
    name: 'Redmi 10',
    price: 9899,
    ogprice: 18999,
    category: '48% Off',
    description: 'Budget-friendly Redmi phone with large display.',
    imageUrl: 'https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71BiCb7N5YL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 108,
    name: 'Sony Xperia 5 III',
    price: 21999,
    ogprice: 31099,
    category: '13% Off',
    description: 'Compact and powerful Sony Xperia phone.',
    imageUrl: 'https://m.media-amazon.com/images/I/41ouToOVElS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/41ouToOVElS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41ouToOVElS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/41ouToOVElS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/41ouToOVElS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 109,
    name: 'iPhone 14 plus',
    price: 65999,
    ogprice: 79900,
    category: '17% Off',
    description: 'Affordable Apple phone with the latest A15 Bionic chip.',
    imageUrl: 'https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 110,
    name: 'Samsung Galaxy Z Fold 3',
    price: 49990,
    ogprice: 95990,
    category: '48% Off',
    description: 'Foldable flagship with large AMOLED displays.',
    imageUrl: 'https://m.media-amazon.com/images/I/71BdTQXrrQL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71BdTQXrrQL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71BdTQXrrQL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71BdTQXrrQL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71BdTQXrrQL._SX679_.jpg',
  },
  {
    id: 111,
    name: 'OnePlus 9 Pro',
    price: 32999,
    ogprice: 69999,
    category: '52% Off',
    description: 'Flagship OnePlus phone with Hasselblad camera system.',
    imageUrl: 'https://m.media-amazon.com/images/I/61H5BvUlNeS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61H5BvUlNeS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61H5BvUlNeS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61H5BvUlNeS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61H5BvUlNeS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 112,
    name: 'Xiaomi Mi 11',
    price: 24999,
    ogprice: 47950,
    category: '48% Off',
    description: 'Xiaomi flagship with Snapdragon 888 and impressive display.',
    imageUrl: 'https://m.media-amazon.com/images/I/71+g+SNcILS._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71+g+SNcILS._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71+g+SNcILS._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71+g+SNcILS._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71+g+SNcILS._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 113,
    name: 'Google Pixel 6',
    price: 29999,
    ogprice: 43950,
    category: '39% Off',
    description: 'Latest Google Pixel with advanced camera features and Tensor chip.',
    imageUrl: 'https://m.media-amazon.com/images/I/21YnaBj6SIL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/21YnaBj6SIL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/21YnaBj6SIL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/21YnaBj6SIL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/21YnaBj6SIL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 114,
    name: 'Realme GT Neo 2',
    price: 26900,
    ogprice: 39999,
    category: '33% Off',
    description: 'Realme mid-range phone with powerful performance.',
    imageUrl: 'https://m.media-amazon.com/images/I/51g1x26-MiL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/51g1x26-MiL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51g1x26-MiL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51g1x26-MiL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/51g1x26-MiL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 115,
    name: 'Motorola Edge 20',
    price: 17590,
    ogprice: 34999,
    category: '50% Off',
    description: 'Motorola phone with a sleek design and 108MP camera.',
    imageUrl: 'https://m.media-amazon.com/images/I/31M3HX919jL.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/31M3HX919jL.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/31M3HX919jL.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/31M3HX919jL.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/31M3HX919jL.jpg',
  },
  {
    id: 116,
    name: 'Vivo X60 Pro',
    price: 41399,
    ogprice: 69590,
    category: '40% Off',
    description: 'Vivo flagship with gimbal stabilization for superior photography.',
    imageUrl: 'https://m.media-amazon.com/images/I/6198aZ14osL._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6198aZ14osL._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/6198aZ14osL._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/6198aZ14osL._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/6198aZ14osL._SX679_.jpg',
  },
  {
    id: 117,
    name: 'OnePlus Nord 3 5G',
    price: 29990,
    ogprice: 34299,
    category: '12% Off',
    description: 'Oppo flagship with powerful camera capabilities and 120Hz display.',
    imageUrl: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 118,
    name: 'Redmi Note 13 5G',
    price: 17899,
    ogprice: 20999,
    category: '14% Off',
    description: 'LG premium phone with a stylish design and high-resolution display.',
    imageUrl: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 119,
    name: 'realme 11 Pro 5G ',
    price: 25449,
    ogprice: 27995,
    category: '9% Off',
    description: 'Nokia mid-range phone with ZEISS optics and 5G capability.',
    imageUrl: 'https://m.media-amazon.com/images/I/71ijeibYbTL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/71ijeibYbTL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71ijeibYbTL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71ijeibYbTL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/71ijeibYbTL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 120,
    name: 'Motorola razr 40',
    price: 45999,
    ogprice: 99999,
    category: '55% Off',
    description: 'Gaming-centric Asus ROG Phone with a high-refresh-rate display.',
    imageUrl: 'https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY327_FMwebp_QL65_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY327_FMwebp_QL65_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY327_FMwebp_QL65_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY327_FMwebp_QL65_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY327_FMwebp_QL65_.jpg',
  },
  // Electronic
  {
    id: 121,
    name: 'LEDDeskLamp',
    price: 29999,
    ogprice: 49999,
    category: '40% Off',
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
    category: '40% Off',
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
    category: '38% Off',
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
    category: '25% Off',
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
    category: '38% Off',
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
    category: '33% Off',
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
    category: '35% Off',
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
    category: '33% Off',
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
    category: '31% Off',
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
    category: '33% Off',
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
    category: '38% Off',
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
    category: '35% Off',
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
    category: '33% Off',
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
    category: '33% Off',
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
    category: '30% Off',
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
    category: '33% Off',
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
    category: '30% Off',
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
    category: '33% Off',
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
    category: '38% Off',
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
    category: '36% Off',
    description: 'Wireless Gaming Mouse with Programmable Buttons and RGB Lighting.',
    imageUrl: 'https://m.media-amazon.com/images/I/81PgM6Vu14L._SX679_.jpg',
    image1Url: 'https://m.media-amazon.com/images/I/81PgM6Vu14L._SX679_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',
    image4Url: 'https://m.media-amazon.com/images/I/61T4v19zB2L._SX679_.jpg',
  },
  // furniture
  {
  "id": 141,
  "name": "LuxuriousKingBed",
  "price": 20999.99,
  "ogprice": 24999.99,
  "category": "16% Off",
  "description": "Luxurious King Bed for Ultimate Comfort and Style.",
  "imageUrl": "https://m.media-amazon.com/images/I/71tXGfrTG9L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71tXGfrTG9L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71HGbIOxqGL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71kTg8i7WGL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71FVwTAuAbL._SX679_.jpg"
},
{
  "id": 142,
  "name": "ContemporaryLoungeChair",
  "price": 22999.99,
  "ogprice": 26999.99,
  "category": "14% Off",
  "description": "Contemporary Lounge Chair for Modern Living Spaces.",
  "imageUrl": "https://m.media-amazon.com/images/I/51KQP-ZCVtL._AC_UL480_FMwebp_QL65_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51KQP-ZCVtL._AC_UL480_FMwebp_QL65_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51x0iRIZypL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51GGY7MdLTL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51WYqIZXLiL._SX679_.jpg"
},
{
  "id": 143,
  "name": "DesignerDiningSet",
  "price": 24999.99,
  "ogprice": 28999.99,
  "category": "14% Off",
  "description": "Designer Dining Set for Stylish Dining Experiences.",
  "imageUrl": "https://m.media-amazon.com/images/I/91MfJ2r1UYL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/91MfJ2r1UYL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61Y6j-dQvXL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81t8jQxAvAL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/714-BScbFwL._SX679_.jpg"
},
{
  "id": 144,
  "name": "ExecutiveOfficeDesk",
  "price": 20999.99,
  "ogprice": 23999.99,
  "category": "13% Off",
  "description": "Executive Office Desk for a Professional Workspace.",
  "imageUrl": "https://m.media-amazon.com/images/I/71RxZgVXA8L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71RxZgVXA8L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51LgQdp1aSL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81Zd1d2rQQL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81qYU7qVadL._SX679_.jpg"
},
{
  "id": 145,
  "name": "PlushSectionalSofa",
  "price": 26999.99,
  "ogprice": 30999.99,
  "category": "13% Off",
  "description": "Plush Sectional Sofa for Cozy Family Gatherings.",
  "imageUrl": "https://m.media-amazon.com/images/I/61FW-8swR5L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61FW-8swR5L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/6121jOYy-iL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61ZmFpNCxHL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61ZmFpNCxHL._SX679_.jpg"
},
{
  "id": 146,
  "name": "AntiqueWardrobe",
  "price": 20999.99,
  "ogprice": 24999.99,
  "category": "16% Off",
  "description": "Antique Wardrobe for a Timeless Bedroom Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/71HESzfJ+-L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71HESzfJ+-L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61Hre6HnXZL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71comYxd5-L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71UqK6kKi2L._SX679_.jpg"
},
{
  "id": 147,
  "name": "ElegantCoffeeTable",
  "price": 20999.99,
  "ogprice": 23999.99,
  "category": "13% Off",
  "description": "Elegant Coffee Table for Sophisticated Living Rooms.",
  "imageUrl": "https://m.media-amazon.com/images/I/61njaqxTL7L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61njaqxTL7L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61G7XpSFaBL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71YMCVAsL+L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61TYhkY2xSL._SX679_.jpg"
},
{
  "id": 148,
  "name": "ModernBookcase",
  "price": 21999.99,
  "ogprice": 24999.99,
  "category": "14% Off",
  "description": "Modern Bookcase for Organizing Your Reading Collection.",
  "imageUrl": "https://m.media-amazon.com/images/I/81x51AX8RCL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/81x51AX8RCL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/81NY3zyS5KL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/718Cjr1jbnL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81x2LQOyuuL._SX679_.jpg"
},
{
  "id": 149,
  "name": "SleekVanityTable",
  "price": 20999.99,
  "ogprice": 24999.99,
  "category": "16% Off",
  "description": "Sleek Vanity Table for Your Daily Beauty Routine.",
  "imageUrl": "https://m.media-amazon.com/images/I/51wxTu2OAJL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51wxTu2OAJL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51RpI4-+VxL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/31D2mqba69L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/618lTPczH6L._SX679_.jpg"
},
{
  "id": 150,
  "name": "RetroSideboard",
  "price": 21999.99,
  "ogprice": 24999.99,
  "category": "12% Off",
  "description": "Retro Sideboard for a Vintage Touch in Your Home.",
  "imageUrl": "https://m.media-amazon.com/images/I/61v2e0Hq0xL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61v2e0Hq0xL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61rOy3SKtKL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/516i9IK45KL.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/31RX3O6Z4UL.jpg"
},
{
  "id": 151,
  "name": "VintageDiningTable",
  "price": 21999.99,
  "ogprice": 24999.99,
  "category": "12% Off",
  "description": "Vintage Dining Table for a Classic Dining Experience.",
  "imageUrl": "https://m.media-amazon.com/images/I/81FDrxwH2xL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/81FDrxwH2xL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/81-dGMKttuL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81zTewyu69L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81Upo1bz00L._SX679_.jpg"
},
{
  "id": 152,
  "name": "CozyBeanBagChair",
  "price": 20999.99,
  "ogprice": 22999.99,
  "category": "9% Off",
  "description": "Cozy Bean Bag Chair for Relaxed Seating.",
  "imageUrl": "https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61YOfqUKsWL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61ZSYQ3-YxL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/715V4pGx3iL._SX679_.jpg"
},
{
  "id": 153,
  "name": "IndustrialStyleDesk",
  "price": 22999.99,
  "ogprice": 25999.99,
  "category": "11% Off",
  "description": "Industrial Style Desk for a Trendy Workspace.",
  "imageUrl": "https://m.media-amazon.com/images/I/812lCY3qNGL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/812lCY3qNGL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/917YQ6dKUpL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81GlRcVzYCL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81GlRcVzYCL._SX679_.jpg"
},
{
  "id": 154,
  "name": "ContemporarySleeperSofa",
  "price": 24999.99,
  "ogprice": 27999.99,
  "category": "10% Off",
  "description": "Contemporary Sleeper Sofa for Stylish Guest Accommodation.",
  "imageUrl": "https://m.media-amazon.com/images/I/31XWz629MKL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/31XWz629MKL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/6125Hc6q+7L._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/6125Hc6q+7L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/41AZbS42QpL._SX679_.jpg"
},
{
  "id": 155,
  "name": "AntiqueWritingDesk",
  "price": 20999.99,
  "ogprice": 23999.99,
  "category": "13% Off",
  "description": "Antique Writing Desk for a Charming Home Office.",
  "imageUrl": "https://m.media-amazon.com/images/I/61TgOqqe44L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61TgOqqe44L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61jAUpHZxHL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61SxEg0ZHwL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51U-ZgKvfLL._SX679_.jpg"
},
{
  "id": 156,
  "name": "TraditionalRockingChair",
  "price": 21999.99,
  "ogprice": 24999.99,
  "category": "12% Off",
  "description": "Traditional Rocking Chair for Classic Comfort.",
  "imageUrl": "https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/31eCe7sZe9L._SX300_SY300_QL70_FMwebp_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/6143Bn0ImNL._SX679_.jpg"
},
{
  "id": 157,
  "name": "RusticEndTable",
  "price": 20999.99,
  "ogprice": 22999.99,
  "category": "9% Off",
  "description": "Rustic End Table for a Touch of Nature in Your Home.",
  "imageUrl": "https://m.media-amazon.com/images/I/61GYy4Kt9DL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61GYy4Kt9DL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51IxvdA5C6L.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81cU7AQzJ8L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/618IcDHwHCL._SX679_.jpg"
},
{
  "id": 158,
  "name": "ErgonomicOfficeChair",
  "price": 23999.99,
  "ogprice": 25999.99,
  "category": "11% Off",
  "description": "Ergonomic Office Chair for Comfortable Work Hours.",
  "imageUrl": "https://m.media-amazon.com/images/I/71RtACyG7JL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71RtACyG7JL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71gx6rNj-bL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/41V+GqbIYtL.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61VF-1JqzpL._SX679_.jpg"
},
{
  "id": 159,
  "name": "MinimalistConsoleTable",
  "price": 20999.99,
  "ogprice": 23999.99,
  "category": "13% Off",
  "description": "Minimalist Console Table for Simple Elegance.",
  "imageUrl": "https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61GwKph8g0L._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51Sv4zQoniL.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51Sv4zQoniL.jpg"
},
{
  "id": 160,
  "name": "Ultrafresh Mega TV Stand ",
  "price": 14999.99,
  "ogprice": 18999.99,
  "category": "21% Off",
  "description": "High Performance Brake Pads for Enhanced Stopping Power.",
  "imageUrl": "https://m.media-amazon.com/images/I/61J63J8jsdL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61J63J8jsdL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71oMJ-fzNJL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71eozm8fgrL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/712HIeGuiFL._SX679_.jpg"
},
{
  "id": 161,
  "name": "High Performance BrakePads",
  "price": 149.99,
  "ogprice": 189.99,
  "category": "21% Off",
  "description": "High Performance Brake Pads for Enhanced Stopping Power.",
  "imageUrl": "https://m.media-amazon.com/images/I/81qvuoxR6YL._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/81qvuoxR6YL._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/816179k+BuL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/7116hQ0T66L._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71YNTG+JcyL._SX679_.jpg"
},
{
  "id": 162,
  "name": "LEDHeadlightConversionKit",
  "price": 99.99,
  "ogprice": 129.99,
  "category": "23% Off",
  "description": "LED Headlight Conversion Kit for Improved Visibility.",
  "imageUrl": "https://m.media-amazon.com/images/I/81xhiVW9edL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/81xhiVW9edL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71RvAdNNozL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71pmhMMoYLL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81OonJpJJHL._SX466_.jpg"
},
{
  "id": 163,
  "name": "PerformanceAirFilter",
  "price": 49.99,
  "ogprice": 59.99,
  "category": "17% Off",
  "description": "Performance Air Filter for Increased Engine Efficiency.",
  "imageUrl": "https://m.media-amazon.com/images/I/71n6wvaGlzL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71n6wvaGlzL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51RWuOuim6L._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/519mwO9ra0L._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/511vBufqgRL._SX466_.jpg"
},
{
  "id": 164,
  "name": "HeavyDutyCarBattery",
  "price": 129.99,
  "ogprice": 159.99,
  "category": "18% Off",
  "description": "Heavy Duty Car Battery for Reliable Starting Power.",
  "imageUrl": "https://m.media-amazon.com/images/I/41SVx7YgEzL._QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/41SVx7YgEzL._QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/41QI6XK9hCL.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/41SVx7YgEzL._QL70_FMwebp_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/41QI6XK9hCL.jpg"
},
{
  "id": 165,
  "name": "PerformanceExhaustSystem",
  "price": 199.99,
  "ogprice": 239.99,
  "category": "17% Off",
  "description": "Performance Exhaust System for Enhanced Engine Sound.",
  "imageUrl": "https://m.media-amazon.com/images/I/617Z63qV2yL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/617Z63qV2yL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61a9xXEjxGL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/617UMr3MvvL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/617UMr3MvvL._SX466_.jpg"
},
{
  "id": 166,
  "name": "SportsCarSuspensionKit",
  "price": 349.99,
  "ogprice": 399.99,
  "category": "13% Off",
  "description": "Sports Car Suspension Kit for Improved Handling.",
  "imageUrl": "https://m.media-amazon.com/images/I/51x+YS59edL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51x+YS59edL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/41qhfQwfGqL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61ojFe6j8BL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/611LMg6DpWL._SX466_.jpg"
},
{
  "id": 167,
  "name": "GPSNavigationSystem",
  "price": 159.99,
  "ogprice": 199.99,
  "category": "20% Off",
  "description": "GPS Navigation System for Accurate Directions.",
  "imageUrl": "https://m.media-amazon.com/images/I/71GtK3rPgwL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71GtK3rPgwL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71faYQINRJL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71bIkq+xN9L._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/41+t7uE1NNL._SX466_.jpg"
},
{
  "id": 168,
  "name": "CarPerformanceChip",
  "price": 79.99,
  "ogprice": 99.99,
  "category": "20% Off",
  "description": "Car Performance Chip for Increased Horsepower.",
  "imageUrl": "https://m.media-amazon.com/images/I/714YXGDGV5L._SX679_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/714YXGDGV5L._SX679_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61sshE7Tl4L._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61cjz1arGqL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71HmThPV4dL._SX679_.jpg"
},
{
  "id": 169,
  "name": "AutomotiveToolSet",
  "price": 129.99,
  "ogprice": 149.99,
  "category": "13% Off",
  "description": "Automotive Tool Set for DIY Car Repairs.",
  "imageUrl": "https://m.media-amazon.com/images/I/61GnYnoQAfL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61GnYnoQAfL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71a1E4jMAtL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81d9Lhy6ewL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61expPUxlEL._SX679_.jpg"
},
{
  "id": 170,
  "name": "CarWashKit",
  "price": 39.99,
  "ogprice": 49.99,
  "category": "20% Off",
  "description": "Car Wash Kit for a Spotless and Shiny Vehicle.",
  "imageUrl": "https://m.media-amazon.com/images/I/61L9BkJwuQL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61L9BkJwuQL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71qejII0zKL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71gocL7kbcL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71yVfU77OWL._SX679_.jpg"
},
{
  "id": 171,
  "name": "PerformanceRadiator",
  "price": 599.99,
  "ogprice": 699.99,
  "category": "14% Off",
  "description": "Performance Radiator for Efficient Engine Cooling.",
  "imageUrl": "https://m.media-amazon.com/images/I/71FYCzYp2cS._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71FYCzYp2cS._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/91g4E5vFc-L._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81ByO7umZpL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71hNWuEqkgS._SX466_.jpg"
},
{
  "id": 172,
  "name": "TintedCarWindowFilm",
  "price": 629.99,
  "ogprice": 749.99,
  "category": "16% Off",
  "description": "Tinted Car Window Film for Privacy and UV Protection.",
  "imageUrl": "https://m.media-amazon.com/images/I/41J5kMGBAzL.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/41J5kMGBAzL.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/41vzcrEEhML.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51WCJ3Q4uBL.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/41L7+omdtaL.jpg"
},
{
  "id": 173,
  "name": "CarbonFiberHood",
  "price": 699.99,
  "ogprice": 799.99,
  "category": "13% Off",
  "description": "Carbon Fiber Hood for a Lightweight and Stylish Upgrade.",
  "imageUrl": "https://m.media-amazon.com/images/I/71NWXI7omGL._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71NWXI7omGL._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71epCiM+h9L._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61MXSmNf4fL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/81WqwKd8+2L._SX466_.jpg"
},
{
  "id": 174,
  "name": "HeavyDutySuspensionSprings",
  "price": 649.99,
  "ogprice": 749.99,
  "category": "13% Off",
  "description": "Heavy Duty Suspension Springs for Enhanced Load Capacity.",
  "imageUrl": "https://m.media-amazon.com/images/I/41Fu5fu2R-L._SY300_SX300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/41Fu5fu2R-L._SY300_SX300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51njaqr+bxL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51mJTeTZuJL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61PGgGpJtaL._SX466_.jpg"
},
{
  "id": 175,
  "name": "RemoteCarStarterKit",
  "price": 699.99,
  "ogprice": 849.99,
  "category": "18% Off",
  "description": "Remote Car Starter Kit for Convenient Cold Starts.",
  "imageUrl": "https://m.media-amazon.com/images/I/61IsAdokF9L._SX466_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61IsAdokF9L._SX466_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61ClcUVM77L._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61DWAuQVUXL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61AWk1ooUHL._SX466_.jpg"
},
{
  "id": 176,
  "name": "AlloyWheelSet",
  "price": 799.99,
  "ogprice": 899.99,
  "category": "11% Off",
  "description": "Alloy Wheel Set for a Sleek and Modern Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/41izp1ns-cL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/41izp1ns-cL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/7162RUKpjDL._SX679_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61ZtQMpLEGL._SX679_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61nsUiyDtUL._SX679_.jpg"
},
{
  "id": 177,
  "name": "BluetoothCarStereoSystem",
  "price": 629.99,
  "ogprice": 749.99,
  "category": "16% Off",
  "description": "Bluetooth Car Stereo System for Wireless Audio Streaming.",
  "imageUrl": "https://m.media-amazon.com/images/I/416SeGLtfkL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/416SeGLtfkL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61g2glMAlyL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/613gZKmM01L._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61rvSFwfS2L._SX466_.jpg"
},
{
  "id": 178,
  "name": "CustomCarFloorMats",
  "price": 599.99,
  "ogprice": 699.99,
  "category": "14% Off",
  "description": "Custom Car Floor Mats for Personalized Interior Protection.",
  "imageUrl": "https://m.media-amazon.com/images/I/31AhQoHb1gL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/31AhQoHb1gL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61ZgeOCKiPL._SY741_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/710k28AW5FL._SY741_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/710k28AW5FL._SY741_.jpg"
},
{
  "id": 179,
  "name": "PerformanceExhaustHeaders",
  "price": 699.99,
  "ogprice": 799.99,
  "category": "13% Off",
  "description": "Performance Exhaust Headers for Increased Horsepower.",
  "imageUrl": "https://m.media-amazon.com/images/I/51c3RwdT1zL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51c3RwdT1zL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61BcPcQ8UXL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71Q+mCKnK8L._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71IQPCw23-L._SX466_.jpg"
},
{
  "id": 180,
  "name": "BackupCameraSystem",
  "price": 629.99,
  "ogprice": 749.99,
  "category": "16% Off",
  "description": "Backup Camera System for Safe and Easy Parking.",
  "imageUrl": "https://m.media-amazon.com/images/I/51KdPMa9rcL._SX300_SY300_QL70_FMwebp_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51KdPMa9rcL._SX300_SY300_QL70_FMwebp_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71ERtkoncEL._SX466_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61vfsFOfDVL._SX466_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61zv84cspZL._SX466_.jpg"
},
{
  "id": 181,
  "name": "RunningShoes",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "High-performance Running Shoes for Comfort and Speed.",
  "imageUrl": "https://m.media-amazon.com/images/I/51Yf9pBf2WL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51Yf9pBf2WL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61i0mgyrmkL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61bxxkoen1L._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71i37WOJiiL._SL1500_.jpg"
},
{
  "id": 182,
  "name": "CasualSneakers",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Stylish Casual Sneakers for Everyday Comfort and Fashion.",
  "imageUrl": "https://m.media-amazon.com/images/I/71Pz9zbWPsL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71Pz9zbWPsL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/81WYbVQRS5L._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71EMdW9CahL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/7156wjJGfwL._SL1500_.jpg"
},
{
  "id": 183,
  "name": "FormalDressShoes",
  "price": 1299.99,
  "ogprice": 1499.99,
  "category": "13% Off",
  "description": "Elegant Formal Dress Shoes for Special Occasions.",
  "imageUrl": "https://m.media-amazon.com/images/I/61cW2dRkkTL._SL1110_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61cW2dRkkTL._SL1110_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/5188B7cwUJL._SL1110_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61C5mL532BL._SL1110_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/514LzARVhKL._SL1110_.jpg"
},
{
  "id": 184,
  "name": "OutdoorHikingBoots",
  "price": 1399.99,
  "ogprice": 1599.99,
  "category": "13% Off",
  "description": "Durable Outdoor Hiking Boots for Adventure Seekers.",
  "imageUrl": "https://m.media-amazon.com/images/I/619SMYFdbYL._SL1280_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/619SMYFdbYL._SL1280_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51phcndmtNL._SL1092_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61l4L-zTZRL._SL1253_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51DJScVY5OL._SL1120_.jpg"
},
{
  "id": 185,
  "name": "ClassicLoafers",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "Timeless Classic Loafers for a Smart Casual Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/61A5CSqPEZL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61A5CSqPEZL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61xlu8HcXrL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61V071pzBCL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/617nOthgngL._SL1500_.jpg"
},
{
  "id": 186,
  "name": "AthleticTrainingShoes",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Athletic Training Shoes for Intense Workout Sessions.",
  "imageUrl": "https://m.media-amazon.com/images/I/71YsNBOLebL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71YsNBOLebL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/613B+zNu04L._SL1200_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/613qHXuxjFL._SL1200_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71Bex3zTN6L._SL1500_.jpg"
},
{
  "id": 187,
  "name": "LeatherAnkleBoots",
  "price": 1299.99,
  "ogprice": 1499.99,
  "category": "13% Off",
  "description": "Stylish Leather Ankle Boots for a Trendy Winter Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/41RicB4a10L.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/41RicB4a10L.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51hJcWUhSkL.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/41NNT57SzVL.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/411GttQuiaL.jpg"
},
{
  "id": 188,
  "name": "BasketballHighTops",
  "price": 1399.99,
  "ogprice": 1599.99,
  "category": "13% Off",
  "description": "Basketball High Tops for Hoops Enthusiasts.",
  "imageUrl": "https://m.media-amazon.com/images/I/61km43b-q5L._SL1100_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61km43b-q5L._SL1100_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61sNdGyUqtL._SL1100_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51qMJiNZ2lL._SL1100_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/614SlhGGJ7L._SL1100_.jpg"
},
{
  "id": 189,
  "name": "Crocs Sandals",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "Fashionable Sandals for a Chic Summer Style.",
  "imageUrl": "https://m.media-amazon.com/images/I/51I8wNtYWGL._SL1337_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51I8wNtYWGL._SL1337_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71kx7MJqYQL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71ksN8g6IiL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71aKxjfMbRL._SL1500_.jpg"
},
{
  "id": 190,
  "name": "GymCrossTrainers",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Gym Cross Trainers for Versatile Workout Activities.",
  "imageUrl": "https://m.media-amazon.com/images/I/71xl1G2HOsL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71xl1G2HOsL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/81O4ss6m96L._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81BTGLOE25L._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71zTjh+odpL._SL1500_.jpg"
},
{
  "id": 191,
  "name": "CanvasSlipOns",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "Comfortable Canvas Slip-Ons for Easy Style.",
  "imageUrl": "https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51P5FKI7i2L._SL1110_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51mSbA+GCyL._SL1110_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51h9zZvx58L._SL1110_.jpg"
},
{
  "id": 192,
  "name": "DenimCasualShoes",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Casual Denim Shoes for a Relaxed Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/71edtiq+UrL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71edtiq+UrL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71-61I6mu7L._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81IE7nM9cFL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/916voXXsVRL._SL1500_.jpg"
},
{
  "id": 193,
  "name": "SuedeLoafers",
  "price": 1299.99,
  "ogprice": 1499.99,
  "category": "13% Off",
  "description": "Stylish Suede Loafers for a Sophisticated Casual Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/71VbdInbiFL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/71VbdInbiFL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71xE47KrkLL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71XehlfrwPL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71V6haIQX5L._SL1500_.jpg"
},
{
  "id": 194,
  "name": "VintageSneakers",
  "price": 1399.99,
  "ogprice": 1599.99,
  "category": "13% Off",
  "description": "Vintage Sneakers for a Retro Casual Vibe.",
  "imageUrl": "https://m.media-amazon.com/images/I/61HnFKrY07L._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61HnFKrY07L._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/61GVen36ykL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71yCJEwNsnL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71i2GrfK2ZL._SL1500_.jpg"
},
{
  "id": 195,
  "name": "Lace-UpEspadrilles",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "Lace-Up Espadrilles for a Casual Summer Feel.",
  "imageUrl": "https://m.media-amazon.com/images/I/51Fd-mTBfQL._SL1440_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/51Fd-mTBfQL._SL1440_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/516UwHt8KJL._SL1440_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/512PT-Rz89L._SL1440_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61cc9RxghcL._SL1440_.jpg"
},
{
  "id": 196,
  "name": "LeatherMoccasins",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Classic Leather Moccasins for Effortless Style.",
  "imageUrl": "https://m.media-amazon.com/images/I/711de2W7dkL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/711de2W7dkL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71lnaN7V8FL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71Y0qj7zGQL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71KzpEyH9aL._SL1500_.jpg"
},
{
  "id": 197,
  "name": "UrbanStreetShoes",
  "price": 1299.99,
  "ogprice": 1499.99,
  "category": "13% Off",
  "description": "Urban Street Shoes for a Modern Casual Look.",
  "imageUrl": "https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/6114xJ1ogZL._SL1200_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/61-3bssyeQL._SL1200_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/61BK1m6QIkL._SL1200_.jpg"
},
{
  "id": 198,
  "name": "KnitCasualSneakers",
  "price": 1399.99,
  "ogprice": 1599.99,
  "category": "13% Off",
  "description": "Knit Casual Sneakers for Lightweight Comfort.",
  "imageUrl": "https://m.media-amazon.com/images/I/61HxNhD0u7L._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61HxNhD0u7L._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/51qT5MzZQIL._SL1110_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/51cPIer4-NL._SL1110_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/51FqaG2DViL._SL1110_.jpg"
},
{
  "id": 199,
  "name": "FashionHighTops",
  "price": 1099.99,
  "ogprice": 1299.99,
  "category": "15% Off",
  "description": "Fashion High Tops for Trendy Casual Outfits.",
  "imageUrl": "https://m.media-amazon.com/images/I/61AjKQSFMhL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/61AjKQSFMhL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/71zEx-k2FUL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/71H+bR7KH4L._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/613eE6rOzIL._SL1500_.jpg"
},
{
  "id": 200,
  "name": "DistressedCasualBoots",
  "price": 1199.99,
  "ogprice": 1399.99,
  "category": "14% Off",
  "description": "Distressed Casual Boots for a Casual-Chic Appeal.",
  "imageUrl": "https://m.media-amazon.com/images/I/81TwzO9BFqL._SL1500_.jpg",
  "image1Url": "https://m.media-amazon.com/images/I/81TwzO9BFqL._SL1500_.jpg",
  "image2Url": "https://m.media-amazon.com/images/I/81bDFxj+orL._SL1500_.jpg",
  "image3Url": "https://m.media-amazon.com/images/I/81ggpCxsBFL._SL1500_.jpg",
  "image4Url": "https://m.media-amazon.com/images/I/71pQ1FFLq6L._SL1500_.jpg"
},{
  "id": 201,
  "name": "SmartRefrigerator",
  "price": 35999.99,
  "ogprice": 39999.99,
  "category": "10% Off",
  "description": "Smart Refrigerator with Wi-Fi Connectivity and Touchscreen.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 202,
  "name": "UltraHD4KSmartTV",
  "price": 37999.99,
  "ogprice": 41999.99,
  "category": "10% Off",
  "description": "Ultra HD 4K Smart TV with Dolby Vision and Surround Sound.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 203,
  "name": "FrontLoadWashingMachine",
  "price": 35999.99,
  "ogprice": 39999.99,
  "category": "10% Off",
  "description": "Front Load Washing Machine with Multiple Wash Programs.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 204,
  "name": "InverterTechnologyAC",
  "price": 37999.99,
  "ogprice": 41999.99,
  "category": "10% Off",
  "description": "Inverter Technology Air Conditioner with Energy Efficiency.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 205,
  "name": "SmartHomeSecuritySystem",
  "price": 35999.99,
  "ogprice": 39999.99,
  "category": "10% Off",
  "description": "Smart Home Security System with Cameras and Sensors.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 206,
  "name": "RoboticVacuumCleaner",
  "price": 37999.99,
  "ogprice": 41999.99,
  "category": "10% Off",
  "description": "Robotic Vacuum Cleaner with Mapping Technology and Voice Control.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 207,
  "name": "DigitalOvenToasterGrill",
  "price": 35999.99,
  "ogprice": 39999.99,
  "category": "10% Off",
  "description": "Digital Oven Toaster Grill for Baking and Grilling.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 208,
  "name": "SmartHomeTheaterSystem",
  "price": 37999.99,
  "ogprice": 41999.99,
  "category": "10% Off",
  "description": "Smart Home Theater System with Wireless Speakers.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 209,
  "name": "TopLoadWashingMachine",
  "price": 35999.99,
  "ogprice": 39999.99,
  "category": "10% Off",
  "description": "Top Load Washing Machine with TurboWash Technology.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 210,
  "name": "PortableAirPurifier",
  "price": 37999.99,
  "ogprice": 41999.99,
  "category": "10% Off",
  "description": "Portable Air Purifier for Clean and Fresh Indoor Air.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 211,
  "name": "FrenchDoorRefrigerator",
  "price": 45999.99,
  "ogprice": 49999.99,
  "category": "8% Off",
  "description": "French Door Refrigerator with Dual Ice Maker and Water Dispenser.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 212,
  "name": "CurvedSmartUHDTV",
  "price": 55999.99,
  "ogprice": 59999.99,
  "category": "7% Off",
  "description": "Curved Smart UHD TV with Quantum Dot Technology and HDR10+.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 213,
  "name": "FrontLoadSteamWasherDryerCombo",
  "price": 69999.99,
  "ogprice": 74999.99,
  "category": "7% Off",
  "description": "Front Load Steam Washer Dryer Combo for Convenient Laundry.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 214,
  "name": "SplitAirConditioner",
  "price": 49999.99,
  "ogprice": 54999.99,
  "category": "9% Off",
  "description": "Split Air Conditioner with Turbo Cooling and Smart Climate Control.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 215,
  "name": "SmartHomeAutomationHub",
  "price": 79999.99,
  "ogprice": 84999.99,
  "category": "6% Off",
  "description": "Smart Home Automation Hub for Integrated Control of Devices.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 216,
  "name": "SelfCleaningRoboticVacuum",
  "price": 64999.99,
  "ogprice": 69999.99,
  "category": "7% Off",
  "description": "Self-Cleaning Robotic Vacuum with AI Navigation and Mapping.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 217,
  "name": "ConvectionDoubleOvenRange",
  "price": 55999.99,
  "ogprice": 59999.99,
  "category": "7% Off",
  "description": "Convection Double Oven Range for Precise Cooking.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 218,
  "name": "SmartSoundbarSystem",
  "price": 44999.99,
  "ogprice": 49999.99,
  "category": "10% Off",
  "description": "Smart Soundbar System for Immersive Home Audio.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 219,
  "name": "TopLoadSteamWashingMachine",
  "price": 45999.99,
  "ogprice": 49999.99,
  "category": "8% Off",
  "description": "Top Load Steam Washing Machine with Stain Removal Technology.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
{
  "id": 220,
  "name": "SmartAirPurificationSystem",
  "price": 79999.99,
  "ogprice": 84999.99,
  "category": "6% Off",
  "description": "Smart Air Purification System with HEPA Filter and Real-time Monitoring.",
  "imageUrl": "",
  "image1Url": "",
  "image2Url": "",
  "image3Url": "",
  "image4Url": ""
},
// Sales-Electronics
{
  id: 221,
  name: 'USBChargingHub',
  price: 199.99,
  ogprice: 299.99,
  category: '33% Off',
  description: 'USB Charging Hub with Multiple Ports for Smartphones and Tablets.',
  imageUrl: 'https://m.media-amazon.com/images/I/41JvNaF4XEL._SX300_SY300_QL70_FMwebp_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41JvNaF4XEL._SX300_SY300_QL70_FMwebp_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/610zIwfPhRL._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61x3LoAMomL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/71QhQjYfZfL._SX679_.jpg',
},
{
  id: 222,
  name: 'BluetoothHeadphones',
  price: 469.99,
  ogprice: 499.99,
  category: '30% Off',
  description: 'Over-Ear Bluetooth Headphones with Active Noise Cancellation.',
  imageUrl: 'https://m.media-amazon.com/images/I/413SSzNtsdL._SX300_SY300_QL70_FMwebp_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/413SSzNtsdL._SX300_SY300_QL70_FMwebp_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/61MM+TqTPXL._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61jqPEgr+NL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/61KngrS7iVL._SX679_.jpg',
},
{
  id: 223,
  name: 'PortablePowerBank',
  price: 924.99,
  ogprice: 1339.99,
  category: '38% Off',
  description: 'Compact Portable Power Bank for Charging Devices on the Go.',
  imageUrl: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/71OcPYwiZQL._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/71XLCSIqDIL._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/71t1HtfIPAL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/81SBnMJYAZL._SX679_.jpg',
},
{
  id: 224,
  name: 'SmartDoorbell',
  price: 899.99,
  ogprice: 1299.99,
  category: '31% Off',
  description: 'Smart Video Doorbell with Motion Detection and Two-Way Audio.',
  imageUrl: 'https://m.media-amazon.com/images/I/41DT3rdX4RL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41DT3rdX4RL._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/51QHh0fQsML._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61iMHs3y-DL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/51x7-6SlY+L._SX679_.jpg',
},
{
  id: 225,
  name: 'SmartPlug',
  price: 129.99,
  ogprice: 199.99,
  category: '35% Off',
  description: 'Smart WiFi Plug for Remote Control and Voice-Activated Smart Home Devices.',
  imageUrl: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/61dhsFpHHVL._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/81DTVEIq+NL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/71EQAHD6wTL._SX679_.jpg',
},
{
  id: 226,
  name: 'WirelessCharger',
  price: 249.99,
  ogprice: 399.99,
  category: '38% Off',
  description: 'Qi Wireless Charger Pad compatible with iPhone and Android Devices.',
  imageUrl: 'https://m.media-amazon.com/images/I/31j5EM1h9fL._SX300_SY300_QL70_FMwebp_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/31j5EM1h9fL._SX300_SY300_QL70_FMwebp_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/61DNFLKFImL._SX679_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61DNFLKFImL._SX679_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/71QgbEUx7FL._SX679_.jpg',
},
{
  id: 227,
  name: 'Playful Patterns',
  price: 199,
  ogprice: 499,
  category: '60% Off',
  description: 'Comfortable Unisex Cartoon Print T-Shirt.',
  imageUrl: 'https://m.media-amazon.com/images/I/514ftDnqfvL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
},
// child-wear-sales
{
  id: 228,
  name: 'Pretty in Pink',
  price: 259,
  ogprice: 599,
  category: '57% Off',
  description: 'Girls Pink Polka Dot Summer Dress.',
  imageUrl: 'https://m.media-amazon.com/images/I/51DUW4vPZWL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
},
{
  id: 229,
  name: 'Sweet Dreams',
  price: 179,
  ogprice: 399,
  category: '55% Off',
  description: 'Cotton Pajama Set for Boys and Girls.',
  imageUrl: 'https://m.media-amazon.com/images/I/51AVqT6AJnL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
},
{
  id: 230,
  name: 'Cute Kiddo',
  price: 349,
  ogprice: 999,
  category: '65% Off',
  description: 'Adorable Girls Floral Print Cotton Dress.',
  imageUrl: 'https://m.media-amazon.com/images/I/51r8ijy9-uL.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/51r8ijy9-uL.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/41ARVnkDhHL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/41NHxYAOrlL.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/31SwanLW18L.jpg',
},
{
  id: 231,
  name: 'Sporty Star',
  price: 239,
  ogprice: 549,
  category: '56% Off',
  description: 'Athletic Star Print Track Pants for Kids.',
  imageUrl: 'https://m.media-amazon.com/images/I/51FVATIH1BL._SX679_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
},
{
  id: 232,
  name: 'Tiny Trendsetter',
  price: 289,
  ogprice: 799,
  category: '64% Off',
  description: 'Stylish Boys Denim Jacket with Embroidery.',
  imageUrl: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._AC_UL480_FMwebp_QL65_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/41fXBJDZt9L._SX679_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/416bdkiEwzL.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/414G8fa5n-L.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/41JQsHbioTL.jpg',
},
// sales-women dress
{
  id: 233,
  name: 'Preneum',
  price: 587,
  ogprice: 1499,
  category: '61% Off',
  description: 'Womens Georgette a-line Knee-Long Dress.',
  imageUrl: 'https://m.media-amazon.com/images/I/71OegJMc0xL._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/71OegJMc0xL._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/61GHVcLp1dL._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61rRe3YNe9L._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/71nrxTmrUkL._SY879_.jpg',
},
{
  id: 234,
  name: 'Satrani',
  price: 699,
  ogprice: 2000,
  category: '61% Off',
  description: 'Womens Georgette Saree With  Piece & Flare Maxi Dress.',
  imageUrl: 'https://m.media-amazon.com/images/I/81xOlaqarlL._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/81xOlaqarlL._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/81qbOtKSUYL._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/81YG0g3YJkL._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/8124OB4cmdL._SY879_.jpg',
},
{
  id: 235,
  name: 'HERIJA',
  price: 599,
  ogprice: 2200,
  category: '50% Off',
  description: 'Womens Georgette Solid Hot Fixing Saree with Unstitched.',
  imageUrl: 'https://m.media-amazon.com/images/I/51LfzsMZAWL._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/61JQiBVv-9L._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/61u6923ZA1L._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/61r9NTocTpL._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/61QK6YtiJuL._SY879_.jpg',
},
{
  id: 236,
  name: 'OOMPH!',
  price: 379,
  ogprice: 2000,
  category: '81% Off',
  description: 'OOMPH! Women Long Dress High-low A-line dress with ruffled hem in wrap-up style.',
  imageUrl: 'https://m.media-amazon.com/images/I/61se3QbO3WL._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/614u+5qQOiL._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/615GMX6-MYL._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/71270qvYP9L._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/611C3mlPJEL._SY879_.jpg',
},
{
  id: 237,
  name: 'Lymio',
  price: 799,
  ogprice: 2000,
  category: '60% Off',
  description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  imageUrl: 'https://m.media-amazon.com/images/I/81q1kX57RrL._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/91dAz6OeH7L._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/91EbegU3m5L._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/816LhBxXMqL._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/91xV7h4DGeL._SY879_.jpg',
},
{
  id: 238,
  name: 'Lymio',
  price: 799,
  ogprice: 2000,
  category: '60% Off',
  description: 'Womens Saree Velvet Fabric Saree With Embrodery.',
  imageUrl: 'https://m.media-amazon.com/images/I/81NxFQlOo+L._SY879_.jpg',
  image1Url: 'https://m.media-amazon.com/images/I/81NxFQlOo+L._SY879_.jpg',
  image2Url: 'https://m.media-amazon.com/images/I/716mT1nB1YL._SY879_.jpg',
  image3Url: 'https://m.media-amazon.com/images/I/81oTyFCGRzL._SY879_.jpg',
  image4Url: 'https://m.media-amazon.com/images/I/81QTU8QHl6L._SY879_.jpg',
},
];

localStorage.setItem("products", JSON.stringify(ecommerceProducts));






// Function to get the button text based on product id
function getButtonText(productId) {
  const addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];
  return addedProducts.includes(productId) ? "Added" : "Add to Cart";
}

// Function to handle the "Add to Cart" button click
function addToCart(event) {
  var productId = event.currentTarget.dataset.productId;
  var addButton = event.currentTarget;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  var foundObject = cart.find(function (elem) {
    return elem.id == productId;
  });

  if (foundObject !== undefined) {
    console.log("Product is already in the cart.");
    return;
  }

  var selectedProduct = ecommerceProducts.find(function (product) {
    return product.id == productId;
  });

  if (selectedProduct) {
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Product added to the cart:", selectedProduct);

    // Change button text to "Added"
    addButton.textContent = "Added to cart";

    event.currentTarget.addEventListener('dblclick', function () {
      alert("Product added to the cart!");
    });
  } else {
    console.log("Product not found.");
  }
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

  var selectedProduct = ecommerceProducts.find(function (product) {
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

// Function to save the last selected range in local storage
function saveLastSelectedRange(startIndex, endIndex, category) {

  const productsToDisplay = ecommerceProducts.filter(product => product.category === category).slice(startIndex - 1, endIndex);


  const lastSelectedRange = {
    startIndex,
    endIndex,
  };
  localStorage.setItem("lastSelectedRange", JSON.stringify(lastSelectedRange));
}

// Function to retrieve the last selected range from local storage
function getLastSelectedRange() {
  const lastSelectedRange = localStorage.getItem("lastSelectedRange");
  return lastSelectedRange ? JSON.parse(lastSelectedRange) : null;
}

// Function to display products on the webpage within a specified range
function displayProducts(startIndex, endIndex) {
  const container = document.getElementById('product-container');
  container.innerHTML = ""; // Clear the existing products

  const productsToDisplay = ecommerceProducts.slice(startIndex - 1, endIndex);

  productsToDisplay.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <a href="../Views/product-details.html?id=${product.id}">
        <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
        <h3>${product.name}</h3>
        <p class="blue">Offer: ${product.category}</p>
        <p class="price">Price: ₹${product.price.toFixed(2)}</p>
        <p><span class="th">(₹${product.ogprice})</span></p>
      </a>
      <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
      <a href="https://razorpay.com/payment-link/plink_NPeErRUJTj78rL">
        <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
      </a>
    `;

    container.appendChild(productDiv);
  });

  // Add event listeners after all products are added to the DOM
  document.querySelectorAll('.addToCartBtn').forEach(button => {
    button.addEventListener('click', addToCart);
  });

  document.querySelectorAll('.buyNowBtn').forEach(button => {
    button.addEventListener('click', buyNow);
  });

  // Save the current range to local storage
  saveLastSelectedRange(startIndex, endIndex);
}

document.getElementById('men-link').addEventListener('click', function () {
  displayProducts(1, 20, 'Mens-Wear'); // Modify the range and add category
});

document.getElementById('women-link').addEventListener('click', function () {
  displayProducts(21, 40);
});

document.getElementById('child-link').addEventListener('click', function () {
  displayProducts(41, 60);
});

document.getElementById('access-link').addEventListener('click', function () {
  displayProducts(61, 80);
});

document.getElementById('beauty-link').addEventListener('click', function () {
  displayProducts(81, 100);
});

document.getElementById('mobile-link').addEventListener('click', function () {
  displayProducts(101, 120);
});

document.getElementById('electronics-link').addEventListener('click', function () {
  displayProducts(121, 140);
});

document.getElementById('furniture-link').addEventListener('click', function () {
  displayProducts(141, 160);
});

document.getElementById('auto-link').addEventListener('click', function () {
  displayProducts(161, 180);
});

document.getElementById('shoes-link').addEventListener('click', function () {
  displayProducts(181, 200);
});

document.getElementById('home-link').addEventListener('click', function () {
  displayProducts(201, 220);
});

// Function to filter products based on search input
function filterProducts(searchTerm) {
  const filteredProducts = ecommerceProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear the product container
  const container = document.getElementById('product-container');
  container.innerHTML = "";

  // Display the filtered products
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <a href="../Views/product-details.html?id=${product.id}">
        <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
        <h3>${product.name}</h3>
        <p class="blue">Offer: ${product.category}</p>
        <p class="price">Price: ₹${product.price.toFixed(2)}</p>
        <p><span class="th">(₹${product.ogprice})</span></p>
      </a>
      <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
      <a href="https://razorpay.com/payment-link/plink_NPeErRUJTj78rL">
        <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
      </a>
    `;

    container.appendChild(productDiv);
  });

  // Add event listeners after all products are added to the DOM
  document.querySelectorAll('.addToCartBtn').forEach(button => {
    button.addEventListener('click', addToCart);
  });

  document.querySelectorAll('.buyNowBtn').forEach(button => {
    button.addEventListener('click', buyNow);
  });
}

// Event listener for the search input
document.getElementById('search-input').addEventListener('input', function () {
  const searchTerm = this.value;
  if (searchTerm.trim() === '') {
    // If search input is empty, display all products
    initializePage();
  } else {
    // Otherwise, filter and display products based on the search term
    filterProducts(searchTerm);
  }
});

// Call the initializePage function to set up the initial state
// initializePage();


// Call the displayProducts function to initialize the webpage
function initializePage() {
  const lastSelectedRange = getLastSelectedRange();

  if (lastSelectedRange) {
    displayProducts(lastSelectedRange.startIndex, lastSelectedRange.endIndex);
  } else {
    // If no last selected range, display default range
    displayProducts(1, 20);
  }
}

function showNoProductsFoundMessage() {
  const container = document.getElementById('product-container');
  container.innerHTML = "<h1>Product Not Found</h1>";
}

// Function to filter products based on search input
function filterProducts(searchTerm) {
  const filteredProducts = ecommerceProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const container = document.getElementById('product-container');
  container.innerHTML = ""; // Clear the product container

  if (filteredProducts.length === 0) {
    showNoProductsFoundMessage();
  } else {
    // Display the filtered products
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <a href="../Views/product-details.html?id=${product.id}">
          <img src="${product.imageUrl}" alt="${product.name} Image" style="max-width: 100%; height: auto;">
          <h3>${product.name}</h3>
          <p class="blue">Offer: ${product.category}</p>
          <p class="price">Price: ₹${product.price.toFixed(2)}</p>
          <p><span class="th">(₹${product.ogprice})</span></p>
        </a>
        <button class="addToCartBtn" data-product-id="${product.id}">${getButtonText(product.id)}</button>
        <a href="https://razorpay.com/payment-link/plink_NPeErRUJTj78rL">
          <button class="buyNowBtn" data-product-id="${product.id}">Buy Now</button>
        </a>
      `;

      container.appendChild(productDiv);
    });

    // Add event listeners after all products are added to the DOM
    document.querySelectorAll('.addToCartBtn').forEach(button => {
      button.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.buyNowBtn').forEach(button => {
      button.addEventListener('click', buyNow);
    });
  }
}


const checkboxMappings = [
  { id: 'mens-wear-checkbox', start: 1, end: 20 },
  { id: 'women-wear-checkbox', start: 21, end: 40 },
  { id: 'beauty-checkbox', start: 81, end: 100 },
  { id: 'home-appliances-checkbox', start: 201, end: 220 },
  { id: 'auto-parts-checkbox', start: 161, end: 180 },
  { id: 'accessories-checkbox', start: 61, end: 80 },
  { id: 'sales-electronic-appliances-checkbox', start: 221, end: 226 },
  { id: 'sales-women-checkbox', start: 233, end: 238 },
  { id: 'sales-child-wear-checkbox', start: 227, end: 232 },
];

function handleCheckboxChange() {
  const checkedCheckboxes = checkboxMappings.filter(mapping => {
    const checkbox = document.getElementById(mapping.id);
    return checkbox.checked;
  });

  if (checkedCheckboxes.length > 0) {
    let startIndex = Number.MAX_SAFE_INTEGER;
    let endIndex = Number.MIN_SAFE_INTEGER;

    checkedCheckboxes.forEach(checkbox => {
      startIndex = Math.min(startIndex, checkbox.start);
      endIndex = Math.max(endIndex, checkbox.end);
    });

    displayProducts(startIndex, endIndex);
  } else {
    initializePage();
  }
}

// Attach event listeners for each checkbox
checkboxMappings.forEach(mapping => {
  const checkbox = document.getElementById(mapping.id);
  checkbox.addEventListener('change', handleCheckboxChange);
});

// Initial call to handleCheckboxChange to set up the page based on initial checkbox state
handleCheckboxChange();

// Call the initializePage function to set up the initial state
initializePage();