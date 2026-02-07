import { Category } from '../types';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-between border border-gray-100 hover:border-[#003071] focus:outline-none focus:ring-2 focus:ring-[#003071] focus:ring-offset-2"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-blue-50 text-[#003071] p-3 rounded-lg group-hover:bg-[#003071] group-hover:text-white transition-colors duration-300">
          <IconComponent size={24} />
        </div>
        <span className="text-lg font-medium text-gray-800 group-hover:text-[#003071] transition-colors">
          {category.name}
        </span>
      </div>
      <ChevronRight className="text-gray-400 group-hover:text-[#003071] group-hover:translate-x-1 transition-all" size={20} />
    </button>
  );
}
