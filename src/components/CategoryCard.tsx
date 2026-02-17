import * as Icons from 'lucide-react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { Topic } from '../types';

interface CategoryCardProps {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
}

export function CategoryCard({ topic, isOpen, onClick }: CategoryCardProps) {
  const IconComponent = (Icons[topic.icon as keyof typeof Icons] as LucideIcon) || Icons.HelpCircle;

  return (
    <button
      onClick={onClick}
      className={`w-full group bg-white rounded-2xl p-6 flex items-center justify-between transition-all duration-300 border-2 
        ${isOpen 
          ? 'border-[#003071] shadow-[0_0_20px_rgba(0,48,113,0.3)] scale-[1.01]' 
          : 'border-transparent shadow-sm hover:shadow-[0_0_15px_rgba(0,48,113,0.15)] hover:-translate-y-1 hover:border-[#003071]/30'
        }`}
    >
      <div className="flex items-center space-x-5">
        <div className={`p-4 rounded-xl transition-all duration-500 ${
          isOpen 
            ? 'bg-[#003071] text-white rotate-6 scale-110 shadow-[0_0_15px_rgba(0,48,113,0.4)]' 
            : 'bg-blue-50 text-[#003071] group-hover:bg-[#003071] group-hover:text-white group-hover:rotate-6'
        }`}>
          <IconComponent size={28} />
        </div>
        
        <div className="text-left">
          <span className={`block text-xl font-bold transition-colors ${
            isOpen ? 'text-[#003071]' : 'text-gray-800 group-hover:text-[#003071]'
          }`}>
            {topic.name}
          </span>
          <span className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
            {isOpen ? 'Clique para recolher' : 'Clique para expandir'}
          </span>
        </div>
      </div>

      <ChevronRight 
        className={`text-gray-300 transition-all duration-500 ${
          isOpen ? 'rotate-90 text-[#003071] scale-125' : 'group-hover:text-[#003071] group-hover:translate-x-2'
        }`} 
        size={24} 
      />
    </button>
  );
}