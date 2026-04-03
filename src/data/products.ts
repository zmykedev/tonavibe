export interface Product {
  id: string
  name: { pt: string; es: string }
  description: { pt: string; es: string }
  price: number
  category: 'caipirinha' | 'classico' | 'especial' | 'combo'
  image: string
  popular?: boolean
}

export const products: Product[] = [
  // Caipirinhas
  {
    id: 'caip-limao',
    name: { pt: 'Caipirinha Clássica', es: 'Caipirinha Clásica' },
    description: {
      pt: 'A tradicional caipirinha de limão com cachaça artesanal',
      es: 'La tradicional caipirinha de limón con cachaça artesanal',
    },
    price: 18.90,
    category: 'caipirinha',
    image: '🍋',
    popular: true,
  },
  {
    id: 'caip-morango',
    name: { pt: 'Caipirinha de Morango', es: 'Caipirinha de Fresa' },
    description: {
      pt: 'Morangos frescos com cachaça e açúcar',
      es: 'Fresas frescas con cachaça y azúcar',
    },
    price: 22.90,
    category: 'caipirinha',
    image: '🍓',
    popular: true,
  },
  {
    id: 'caip-maracuja',
    name: { pt: 'Caipirinha de Maracujá', es: 'Caipirinha de Maracuyá' },
    description: {
      pt: 'Maracujá fresco com cachaça premium',
      es: 'Maracuyá fresco con cachaça premium',
    },
    price: 22.90,
    category: 'caipirinha',
    image: '🥭',
  },
  {
    id: 'caip-kiwi',
    name: { pt: 'Caipirinha de Kiwi', es: 'Caipirinha de Kiwi' },
    description: {
      pt: 'Kiwi fresco com toque de hortelã',
      es: 'Kiwi fresco con toque de menta',
    },
    price: 24.90,
    category: 'caipirinha',
    image: '🥝',
  },
  // Cocktails Clássicos
  {
    id: 'mojito',
    name: { pt: 'Mojito', es: 'Mojito' },
    description: {
      pt: 'Rum, hortelã fresca, limão e água com gás',
      es: 'Ron, menta fresca, limón y agua con gas',
    },
    price: 24.90,
    category: 'classico',
    image: '🌿',
    popular: true,
  },
  {
    id: 'margarita',
    name: { pt: 'Margarita', es: 'Margarita' },
    description: {
      pt: 'Tequila, licor de laranja e suco de limão',
      es: 'Tequila, licor de naranja y jugo de limón',
    },
    price: 26.90,
    category: 'classico',
    image: '🍸',
  },
  {
    id: 'pina-colada',
    name: { pt: 'Piña Colada', es: 'Piña Colada' },
    description: {
      pt: 'Rum, creme de coco e suco de abacaxi',
      es: 'Ron, crema de coco y jugo de piña',
    },
    price: 26.90,
    category: 'classico',
    image: '🍍',
    popular: true,
  },
  {
    id: 'gin-tonica',
    name: { pt: 'Gin Tônica Tropical', es: 'Gin Tónica Tropical' },
    description: {
      pt: 'Gin premium, tônica artesanal e frutas tropicais',
      es: 'Gin premium, tónica artesanal y frutas tropicales',
    },
    price: 28.90,
    category: 'classico',
    image: '🫧',
  },
  // Drinks Especiais
  {
    id: 'tropical-sunset',
    name: { pt: 'Tropical Sunset', es: 'Tropical Sunset' },
    description: {
      pt: 'Vodka, suco de manga, grenadine e espumante',
      es: 'Vodka, jugo de mango, granadina y espumante',
    },
    price: 32.90,
    category: 'especial',
    image: '🌅',
    popular: true,
  },
  {
    id: 'amazonia',
    name: { pt: 'Amazônia', es: 'Amazonía' },
    description: {
      pt: 'Gin, açaí, limão siciliano e xarope de cupuaçu',
      es: 'Gin, açaí, limón siciliano y jarabe de cupuaçu',
    },
    price: 34.90,
    category: 'especial',
    image: '🌴',
  },
  {
    id: 'coco-loco',
    name: { pt: 'Coco Loco', es: 'Coco Loco' },
    description: {
      pt: 'Rum, água de coco, leite de coco e abacaxi',
      es: 'Ron, agua de coco, leche de coco y piña',
    },
    price: 30.90,
    category: 'especial',
    image: '🥥',
  },
  {
    id: 'acai-smash',
    name: { pt: 'Açaí Smash', es: 'Açaí Smash' },
    description: {
      pt: 'Vodka, açaí, banana e mel',
      es: 'Vodka, açaí, banana y miel',
    },
    price: 32.90,
    category: 'especial',
    image: '🫐',
    popular: true,
  },
  // Combos
  {
    id: 'combo-caipirinha',
    name: { pt: 'Combo Caipirinha (4un)', es: 'Combo Caipirinha (4un)' },
    description: {
      pt: '4 caipirinhas à sua escolha com desconto especial',
      es: '4 caipirinhas a tu elección con descuento especial',
    },
    price: 69.90,
    category: 'combo',
    image: '🎉',
    popular: true,
  },
  {
    id: 'combo-festa',
    name: { pt: 'Combo Festa (8un)', es: 'Combo Fiesta (8un)' },
    description: {
      pt: '8 drinks variados para sua festa',
      es: '8 drinks variados para tu fiesta',
    },
    price: 129.90,
    category: 'combo',
    image: '🎊',
  },
  {
    id: 'combo-premium',
    name: { pt: 'Combo Premium (6un)', es: 'Combo Premium (6un)' },
    description: {
      pt: '6 drinks especiais premium para ocasiões especiais',
      es: '6 drinks especiales premium para ocasiones especiales',
    },
    price: 159.90,
    category: 'combo',
    image: '✨',
  },
]

export const categories = [
  { id: 'all' as const, label: { pt: 'Todos', es: 'Todos' }, emoji: '🍹' },
  { id: 'caipirinha' as const, label: { pt: 'Caipirinhas', es: 'Caipirinhas' }, emoji: '🍋' },
  { id: 'classico' as const, label: { pt: 'Clássicos', es: 'Clásicos' }, emoji: '🍸' },
  { id: 'especial' as const, label: { pt: 'Especiais', es: 'Especiales' }, emoji: '🌴' },
  { id: 'combo' as const, label: { pt: 'Combos', es: 'Combos' }, emoji: '🎉' },
]
