import React from 'react';
import { activityData } from '../data/mockData';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{activityData.title}</h2>
        <p className="text-sm text-gray-500">{activityData.summary}</p>
      </div>

      <div className="flex items-end h-40 space-x-4">
        {activityData.dailyData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-1 flex flex-col items-center space-y-1">
            <div className="w-full flex items-end justify-center h-32 space-x-1">
              {day.values.map((value, index) => (
                <div 
                  key={index}
                  className={`w-2 rounded-full ${
                    index % 3 === 0 
                      ? 'bg-teal-400' 
                      : index % 3 === 1 
                        ? 'bg-indigo-600' 
                        : 'bg-gray-300'
                  }`}
                  style={{ height: `${value * 100}%` }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;