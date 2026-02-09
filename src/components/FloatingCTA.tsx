import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  const handleOpenTicket = () => {
    window.open('https://sos.aguiabranca.com.br/', '_blank');
  };

  return (
    <button
      onClick={handleOpenTicket} 
      className="fixed bottom-8 right-8 bg-[#003071] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 font-semibold focus:outline-none focus:ring-4 focus:ring-[#003071] focus:ring-opacity-50 z-50 group"
    >
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Abrir Chamado Field Service</span>
      <span className="sm:hidden">Abrir Chamado</span>
    </button>
  );
}
