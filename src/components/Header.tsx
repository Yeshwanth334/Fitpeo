import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="text-indigo-700" size={20} />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-indigo-600 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-teal-400">
            <img 
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <button className="p-2 bg-indigo-700 text-white rounded-lg">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;