import React from 'react';
import { Settings as Lungs, Smile, Bone } from 'lucide-react';
import { healthCards } from '../data/mockData';

const HealthStatusCards: React.FC = () => {
  // Function to get the appropriate icon based on the icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lungs': return <Lungs size={24} className="text-red-500" />;
      case 'Smile': return <Smile size={24} className="text-teal-400" />;
      case 'Bone': return <Bone size={24} className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-4">
      {healthCards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {getIcon(card.icon)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-500">Date: {card.date}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div 
                className={`h-full rounded-full ${card.status === 'good' ? 'bg-teal-400' : 'bg-red-400'}`}
                style={{ width: card.status === 'good' ? '80%' : '40%' }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;