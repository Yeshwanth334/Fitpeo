import React from 'react';
import { ClipboardCheck, Eye, Heart, Brain } from 'lucide-react';
import { upcomingSchedule } from '../data/mockData';

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ title, time, icon }) => {
  // Function to get the appropriate icon
  const getIcon = () => {
    switch (icon) {
      case 'ClipboardCheck': return <ClipboardCheck size={18} className="text-gray-700" />;
      case 'Eye': return <Eye size={18} className="text-gray-700" />;
      case 'Heart': return <Heart size={18} className="text-red-500" />;
      case 'Brain': return <Brain size={18} className="text-gray-700" />;
      default: return null;
    }
  };

  return (
    <div className="bg-indigo-50 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
        <div>
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">The Upcoming Schedule</h2>

      {upcomingSchedule.map((schedule, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-base font-medium text-gray-600">On {schedule.day}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {schedule.appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;