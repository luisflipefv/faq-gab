import { useState } from 'react';
import { Plus, Lightbulb, SignpostBig } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  tip?: string;
  tipLink?: string;
}

export function FaqItem({ question, answer, tip, tipLink }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors focus:outline-none group px-2"
      >
        <span className={`text-base font-medium transition-colors duration-200 ${
          isOpen ? 'text-[#003071]' : 'text-gray-700'
        }`}>
          {question}
        </span>
        <div
          className={`flex-shrink-0 text-[#003071] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus size={20} />
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 pt-1 px-2 text-gray-600 leading-relaxed text-sm">
          <p className="mb-3">{answer}</p>
          
          {tip && (
            <div className="mt-4 flex items-start gap-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
    <SignpostBig size={18} className="text-[#003071] mt-0.5 flex-shrink-0" />
    <div className="flex flex-col w-full">
      <span className="text-xs font-bold text-[#003071] uppercase tracking-wider mb-1">
        Caminho no Portal:
      </span>
      
      {tipLink ? (
        <a 
          href={tipLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-[#003071] font-medium flex items-center justify-between group transition-all"
        >
          <span>{tip}</span>
          <span className="text-[#003071] text-xs font-bold underline group-hover:no-underline ml-2">
            Abrir Chamado
          </span>
        </a>
      ) : (
        <span className="text-sm text-gray-700">{tip}</span>
      )}
    </div>
  </div>
          )}
        </div>
      </div>
    </div>
  );
}