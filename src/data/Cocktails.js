const COCKTAILS = [
  {
    name: 'Classic Gin & Tonic',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 30 },
      { type: 'mixer', name: 'tonic water', amount: 100 },
      {},
    ],
    garnish: [
      { type: 'fruit', name: 'lemon', amount: 'slice' },
      { type: 'herb', name: 'rosemary', amount: 'sprig' },
    ],
    drinkware: 'copa',
    preparation:
      'G&T lovers know their usual mix, but don’t forget the flavour and alcohol in Jarrold’s is deliberately strong; it’s how we like it! For our perfect mix we reckon that less is more so we enjoy the above measurements for a refreshingly crisp and smooth G&T:',
  },
  {
    name: 'Gimlet',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 50 },
      { type: 'mixer', name: 'lime cordial', amount: 100 },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'lime', amount: 'peel' }],
    drinkware: 'cocktail',
    preparation:
      'Someone gimme a Gimlet! A Navy classic where strength should not be underestimated given its simplicity to prepare and the ease with which it goes down the hatch!  We enjoy the measures above but with only two ingredients to play with, you will soon find your perfect Gimlet.',
  },
  {
    name: 'Sussex 75',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 25 },
      { type: 'mixer', name: 'fresh lemon juice', amount: 15 },
      { type: 'wine', name: 'sparkling wine', amount: 60 },
      { type: 'mixer', name: 'sugar syrup', amount: 'dash' },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'lemon', amount: 'peel' }],
    drinkware: 'champange tulip',
    preparation:
      'This popular cocktail (the French 75) was developed in the 1920’s. We love this classic when replacing the Champagne with Sussex Sparkling Wine. Also, swapping the lemon for orange delivers an unusual twist.',
  },
  {
    name: 'Tom Collins',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 45 },
      { type: 'mixer', name: 'fresh lemon juice', amount: 30 },
      { type: 'mixer', name: 'soda water', amount: 60 },
      { type: 'mixer', name: 'sugar syrup', amount: 15 },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'lemon', amount: 'slice' }],
    drinkware: 'highball',
    preparation:
      'For those who don’t enjoy the taste of tonic water, don’t despair, this refreshing classic served in a tall glass with soda water has been quenching the thirst of gin lovers since the 1870’s.',
  },
  {
    name: 'Gin Rickey',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 45 },
      { type: 'mixer', name: 'sugar syrup', amount: 'dash' },
      { type: 'fruit', name: 'lime', amount: 'half' },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'lime', amount: '2 slices' }],
    drinkware: 'highball',
    preparation:
      'Another classic by-passing Tonic water, which is almost as old as the Tom Collins and was originally made with Bourbon.',
  },
  {
    name: 'Breakfast Martini',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 40 },
      { type: 'mixer', name: 'fresh lemon juice', amount: 15 },
      { type: 'liqueur', name: 'triple sec', amount: 15 },
      { type: 'sweet', name: 'marmalade', amount: 'tablespoon' },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'orange', amount: 'peel' }],
    drinkware: 'cocktail glass',
    preparation:
      'A modern classic, which we enjoy pre-and post-dinner but we’re yet to try it at breakfast!',
  },
  {
    name: 'Bramble',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 50 },
      { type: 'mixer', name: 'fresh lemon juice', amount: 20 },
      { type: 'mixer', name: 'sugar syrup', amount: 10 },
      { type: 'liqueur', name: 'creme de mur', amount: 10 },
      {},
    ],
    garnish: [
      { type: 'fruit', name: 'blackberry', amount: 2 },
      { type: 'fruit', name: 'lemon', amount: 'slice' },
    ],
    drinkware: 'double rocks',
    preparation:
      'Another modern classic from the 1980’s well balanced with sweet and sour tones.',
  },
  {
    name: 'Ricky G',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 45 },
      { type: 'mixer', name: 'grapefruit juice', amount: 15 },
      { type: 'mixer', name: 'sugar syrup', amount: 'dash' },
      { type: 'mixer', name: 'soda water', amount: 100 },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'grapefruit', amount: 'slice' }],
    drinkware: 'highball',
    preparation:
      'Our twist on the Gin Rickey – but replace the half lime with a quarter grapefruit and add a dash of sugar syrup.',
  },
  {
    name: 'Jarroni',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 25 },
      { type: 'aperitif', name: 'Aperol', amount: 25 },
      { type: 'vermouth', name: 'martini rosso', amount: 25 },
      { type: 'ingredient', name: 'bitters', amount: 25 },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'orange', amount: 'slice' }],
    drinkware: 'rocks',
    preparation:
      'Our cheeky nod to the legendary apéritif Negroni. We swapped Campari for Aperol and found that the orange and rhubarb flavours from Aperol combined well with our weightier juniper blend. By using Aperol the bitterness level is down a notch, but if you prefer the real deal stick with Campari and make a classic Negroni that will set you up for any meal.',
  },
  {
    name: 'Laburnum latina',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 60 },
      { type: 'mixer', name: 'fresh lemon juice', amount: 30 },
      { type: 'liqueur', name: 'triple sec', amount: 30 },
      {},
    ],
    garnish: [
      { type: 'fruit', name: 'orange', amount: 'slice' },
      { type: 'ingredient', name: 'sugar', amount: null },
    ],
    drinkware: 'cocktail',
    preparation:
      'Our gin margarita! The esteemed Margarita is not just for holidays, and this version substituting tequila for Jarrold’s will definitely appeal to Gin lovers wanting to try something new at home or abroad.',
  },
  {
    name: 'Sussex Sunrise',
    ingredients: [
      { type: 'spirit', name: "Jarrold's Sloe Gin", amount: 35 },
      { type: 'liqueur', name: 'Amaretto', amount: 35 },
      { type: 'mixer', name: 'orange juice', amount: 100 },
      { type: 'mixer', name: 'cranberry juice', amount: 25 },
      {},
    ],
    garnish: [{ type: 'fruit', name: 'orange', amount: 'slice' }],
    drinkware: 'highball',
    preparation:
      "We just love our gin with Amaretto and we're sure you're going to fall in love with this too.",
  },
  {
    name: 'Classic Gin & Tonic',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 30 },
      { type: 'mixer', name: 'tonic water', amount: 100 },
      {},
    ],
    garnish: [
      { type: 'fruit', name: 'lemon', amount: 'slice' },
      { type: 'herb', name: 'rosemary', amount: 'sprig' },
    ],
    drinkware: 'copa glass',
    preparation: '',
  },
  {
    name: 'Classic Gin & Tonic',
    ingredients: [
      { type: 'spirit', name: "Jarrold's London Dry Gin", amount: 30 },
      { type: 'mixer', name: 'tonic water', amount: 100 },
      {},
    ],
    garnish: [
      { type: 'fruit', name: 'lemon', amount: 'slice' },
      { type: 'herb', name: 'rosemary', amount: 'sprig' },
    ],
    drinkware: 'copa glass',
    preparation: '',
  },
];

export default COCKTAILS;
