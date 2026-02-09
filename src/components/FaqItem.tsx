import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  tip?: string;
}

export function FaqItem({ question, answer, tip }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-[#003071] transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003071] focus:ring-inset"
      >
        <span className="text-lg font-medium text-gray-800 pr-4">
          {question}
        </span>
        <div
          className={`flex-shrink-0 text-[#003071] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus size={24} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
          {tip && (
            <p><a className="mt-4 text-sm text-gray-500 italic" href='https://sos.aguiabranca.com.br/cardapio/descricao?id=120' target='_blank'>{tip}</a></p>
          )}
        </div>
      </div>
    </div>
  );
}
