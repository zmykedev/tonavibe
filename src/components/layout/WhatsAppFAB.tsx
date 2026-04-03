import { MessageCircle } from 'lucide-react'
import { openWhatsAppChat } from '@/lib/whatsapp'

export default function WhatsAppFAB() {
  return (
    <button
      onClick={openWhatsAppChat}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl active:scale-90 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  )
}
