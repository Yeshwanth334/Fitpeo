import React from 'react';
import { 
  LayoutDashboard, History, Calendar, CalendarCheck, 
  BarChart2, FileText, MessageSquare, Headphones, Settings 
} from 'lucide-react';
import { navLinks } from '../data/mockData';

const Sidebar: React.FC = () => {
  // Map the icon names to the actual Lucide React components
  const getIcon = (iconName: string, active: boolean = false) => {
    const iconProps = { 
      size: 20, 
      className: active ? 'text-indigo-700' : 'text-gray-500'
    };
    
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard {...iconProps} />;
      case 'History': return <History {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'CalendarCheck': return <CalendarCheck {...iconProps} />;
      case 'BarChart2': return <BarChart2 {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'MessageSquare': return <MessageSquare {...iconProps} />;
      case 'HeadphonesIcon': return <Headphones {...iconProps} />;
      case 'Settings': return <Settings {...iconProps} />;
      default: return <LayoutDashboard {...iconProps} />;
    }
  };

  return (
    <aside className="min-h-screen w-64 bg-white p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          <span className="text-teal-400">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            General
          </h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href="#" 
                  className={`flex items-center p-2 rounded-lg transition duration-150 ease-in-out ${
                    link.active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">{getIcon(link.icon, link.active)}</span>
                  <span className={`font-medium ${link.active ? 'text-indigo-700' : ''}`}>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Tools
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                <span className="mr-3"><MessageSquare size={20} /></span>
                <span className="font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                <span className="mr-3"><Headphones size={20} /></span>
                <span className="font-medium">Support</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                <span className="mr-3"><Settings size={20} /></span>
                <span className="font-medium">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;