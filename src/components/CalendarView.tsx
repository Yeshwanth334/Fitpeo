import React from 'react';
import { ChevronLeft, ChevronRight, Smile, Activity } from 'lucide-react';
import { calendarData } from '../data/mockData';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">{calendarData.month}</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md bg-gray-100 text-gray-600">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 rounded-md bg-gray-100 text-gray-600">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {/* Days of the week */}
        {calendarData.days.map((day) => (
          <div key={day.day} className="text-center">
            <p className="text-sm text-gray-500 mb-2">{day.day}</p>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
              day.date === 28 ? 'bg-indigo-600 text-white' : 'text-gray-800'
            }`}>
              {day.date}
            </div>

            {/* Appointment times */}
            <div className="space-y-2">
              {day.appointments.map((time, idx) => (
                <div 
                  key={`${day.day}-${time}`} 
                  className={`text-xs py-1 px-1 rounded-md ${
                    day.date === 28 || day.date === 30 || day.date === 27 ? 
                    'bg-indigo-100 text-indigo-700' : 'text-gray-500'
                  } ${
                    day.date === 30 && time === '12:00' ? 'bg-indigo-600 text-white' : ''
                  } ${
                    day.date === 27 && time === '12:00' ? 'bg-indigo-100 text-indigo-700' : ''
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted appointments */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {calendarData.highlightedAppointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className={`rounded-xl p-4 ${
              appointment.color === '#4D3AD4' ? 'bg-indigo-700 text-white' : 'bg-indigo-50 text-gray-800'
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className={appointment.color === '#4D3AD4' ? 'text-white' : 'text-indigo-700'}>
                {appointment.icon === 'Smile' ? <Smile size={18} /> : <Activity size={18} />}
              </div>
              <h3 className="font-medium">{appointment.title}</h3>
            </div>
            <p className="text-sm mb-1">{appointment.time}</p>
            <p className={`text-sm ${appointment.color === '#4D3AD4' ? 'text-indigo-200' : 'text-gray-600'}`}>
              {appointment.doctor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;