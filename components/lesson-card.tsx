'use client';

import { MoreVertical } from 'lucide-react';
import Link from 'next/link';

interface LessonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress?: number;
  color: 'blue' | 'green' | 'orange' | 'emerald';
  href?: string;
  onClick?: () => void;
}

const colorMap = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  emerald: 'from-emerald-400 to-emerald-600',
};

const progressColorMap = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  emerald: 'bg-emerald-500',
};

export default function LessonCard({
  icon,
  title,
  description,
  progress,
  color,
  href,
  onClick,
}: LessonCardProps) {
  const cardContent = (
    <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Header with icon and menu */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorMap[color]} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-4">{description}</p>

      {/* Action Button */}
      <button 
        onClick={(e: React.MouseEvent) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={`w-full py-2 px-4 rounded-full bg-gradient-to-r ${colorMap[color]} text-white font-medium text-sm hover:opacity-90 transition`}
      >
        Start Learning
      </button>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
