const translations = {
  // Navbar
  'nav.home': { pt: 'Início', es: 'Inicio' },
  'nav.menu': { pt: 'Cardápio', es: 'Menú' },
  'nav.cart': { pt: 'Carrinho', es: 'Carrito' },

  // Hero
  'hero.tagline': { pt: 'Drinks & Caipirinhas Delivery', es: 'Drinks & Caipirinhas Delivery' },
  'hero.title': { pt: 'Sua festa, nosso sabor!', es: '¡Tu fiesta, nuestro sabor!' },
  'hero.subtitle': {
    pt: 'Caipirinhas artesanais e cocktails tropicais entregues na sua porta. Peça pelo WhatsApp!',
    es: 'Caipirinhas artesanales y cócteles tropicales entregados en tu puerta. ¡Pide por WhatsApp!',
  },
  'hero.cta': { pt: 'Ver Cardápio', es: 'Ver Menú' },

  // Categories
  'categories.title': { pt: 'Categorias', es: 'Categorías' },

  // Featured
  'featured.title': { pt: 'Mais Pedidos', es: 'Más Pedidos' },
  'featured.subtitle': {
    pt: 'Os favoritos dos nossos clientes',
    es: 'Los favoritos de nuestros clientes',
  },

  // How it works
  'how.title': { pt: 'Como Funciona', es: 'Cómo Funciona' },
  'how.step1.title': { pt: 'Escolha', es: 'Elige' },
  'how.step1.desc': {
    pt: 'Navegue pelo cardápio e escolha seus drinks favoritos',
    es: 'Navega por el menú y elige tus drinks favoritos',
  },
  'how.step2.title': { pt: 'Carrinho', es: 'Carrito' },
  'how.step2.desc': {
    pt: 'Adicione ao carrinho e revise seu pedido',
    es: 'Agrega al carrito y revisa tu pedido',
  },
  'how.step3.title': { pt: 'WhatsApp', es: 'WhatsApp' },
  'how.step3.desc': {
    pt: 'Envie seu pedido pelo WhatsApp e receba em casa',
    es: 'Envía tu pedido por WhatsApp y recíbelo en casa',
  },

  // Menu
  'menu.title': { pt: 'Cardápio', es: 'Menú' },
  'menu.search': { pt: 'Buscar drink...', es: 'Buscar drink...' },
  'menu.add': { pt: 'Adicionar', es: 'Agregar' },
  'menu.popular': { pt: 'Popular', es: 'Popular' },

  // Cart
  'cart.title': { pt: 'Seu Carrinho', es: 'Tu Carrito' },
  'cart.empty': { pt: 'Seu carrinho está vazio', es: 'Tu carrito está vacío' },
  'cart.empty.desc': {
    pt: 'Adicione alguns drinks deliciosos do nosso cardápio!',
    es: '¡Agrega algunos drinks deliciosos de nuestro menú!',
  },
  'cart.subtotal': { pt: 'Subtotal', es: 'Subtotal' },
  'cart.delivery': { pt: 'Taxa de entrega', es: 'Tarifa de envío' },
  'cart.delivery.free': { pt: 'Grátis', es: 'Gratis' },
  'cart.total': { pt: 'Total', es: 'Total' },
  'cart.address': { pt: 'Endereço de entrega', es: 'Dirección de entrega' },
  'cart.address.placeholder': {
    pt: 'Rua, número, bairro, complemento...',
    es: 'Calle, número, barrio, complemento...',
  },
  'cart.checkout': { pt: 'Enviar pedido por WhatsApp', es: 'Enviar pedido por WhatsApp' },
  'cart.continue': { pt: 'Continuar comprando', es: 'Seguir comprando' },
  'cart.clear': { pt: 'Limpar carrinho', es: 'Vaciar carrito' },
  'cart.items': { pt: 'itens', es: 'ítems' },

  // Footer
  'footer.tagline': {
    pt: 'Drinks artesanais entregues com amor na sua porta.',
    es: 'Drinks artesanales entregados con amor en tu puerta.',
  },
  'footer.hours': { pt: 'Horário de Funcionamento', es: 'Horario de Atención' },
  'footer.hours.weekday': { pt: 'Seg - Sex: 17h às 23h', es: 'Lun - Vie: 17h a 23h' },
  'footer.hours.weekend': { pt: 'Sáb - Dom: 14h às 00h', es: 'Sáb - Dom: 14h a 00h' },
  'footer.contact': { pt: 'Contato', es: 'Contacto' },
  'footer.rights': { pt: 'Todos os direitos reservados.', es: 'Todos los derechos reservados.' },

  // General
  'general.back_to_menu': { pt: 'Voltar ao Cardápio', es: 'Volver al Menú' },
  'whatsapp.order': { pt: 'Fazer Pedido', es: 'Hacer Pedido' },
  'whatsapp.fab': { pt: 'Fale Conosco', es: 'Contáctanos' },
} as const

export type TranslationKey = keyof typeof translations
export type Lang = 'pt' | 'es'

export default translations
