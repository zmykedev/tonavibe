import type { CartItem } from '@/stores/cartStore'
import type { Lang } from '@/data/translations'
import { formatBRL } from '@/lib/utils'

// Configure your WhatsApp business number here (with country code, no + or spaces)
const WHATSAPP_PHONE = '5511999999999'

const DELIVERY_FEE = 5.00
const FREE_DELIVERY_THRESHOLD = 100.00

export function getDeliveryFee(subtotal: number): number {
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE
}

export function buildWhatsAppMessage(
  items: CartItem[],
  address: string,
  lang: Lang
): string {
  const greeting = lang === 'pt'
    ? 'Olá! Gostaria de fazer um pedido:'
    : '¡Hola! Me gustaría hacer un pedido:'

  const itemLines = items
    .map(
      (item) =>
        `  ${item.quantity}x ${item.product.name[lang]} - ${formatBRL(
          item.product.price * item.quantity
        )}`
    )
    .join('\n')

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  const deliveryFee = getDeliveryFee(subtotal)
  const total = subtotal + deliveryFee

  const deliveryLabel = lang === 'pt' ? 'Entrega' : 'Envío'
  const freeLabel = lang === 'pt' ? 'Grátis' : 'Gratis'
  const deliveryText = deliveryFee === 0 ? freeLabel : formatBRL(deliveryFee)

  const addressLabel = lang === 'pt' ? 'Endereço' : 'Dirección'

  const message = [
    greeting,
    '',
    itemLines,
    '',
    `${deliveryLabel}: ${deliveryText}`,
    `*Total: ${formatBRL(total)}*`,
    '',
    `${addressLabel}: ${address}`,
  ].join('\n')

  return message
}

export function openWhatsApp(items: CartItem[], address: string, lang: Lang): void {
  const message = buildWhatsAppMessage(items, address, lang)
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank')
}

export function openWhatsAppChat(): void {
  window.open(`https://wa.me/${WHATSAPP_PHONE}`, '_blank')
}
