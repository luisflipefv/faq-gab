import { Division } from '../types';
import * as Icons from 'lucide-react';

interface DivisionCardProps {
  division: Division;
  onClick: () => void;
}

export function DivisionCard({ division, onClick }: DivisionCardProps) {
  const IconComponent = Icons[division.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <button
      onClick={onClick}
      className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-b-4 ${division.color} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003071] focus:ring-offset-2`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-[#003071] text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
          <IconComponent size={32} />
        </div>
        <h3 className="text-xl font-semibold text-[#003071] text-center">
          {division.name}
        </h3>
      </div>
    </button>
  );
}
