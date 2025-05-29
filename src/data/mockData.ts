// Navigation links for the sidebar
export const navLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', active: true },
  { id: 'history', label: 'History', icon: 'History' },
  { id: 'calendar', label: 'Calendar', icon: 'Calendar' },
  { id: 'appointments', label: 'Appointments', icon: 'CalendarCheck' },
  { id: 'statistics', label: 'Statistics', icon: 'BarChart2' },
  { id: 'tests', label: 'Tests', icon: 'FileText' },
  { id: 'chat', label: 'Chat', icon: 'MessageSquare' },
  { id: 'support', label: 'Support', icon: 'HeadphonesIcon' },
  { id: 'setting', label: 'Setting', icon: 'Settings' },
];

// Health status data for the anatomical view
export const healthStatus = [
  { 
    id: 'heart', 
    label: 'Healthy Heart', 
    status: 'healthy', 
    position: { top: '38%', left: '45%' },
    color: '#4D3AD4',
    icon: 'Heart'
  },
  { 
    id: 'lungs', 
    label: 'Lungs', 
    status: 'attention', 
    date: '26 Oct 2021',
    position: { top: '32%', right: '25%' },
    color: '#F16063',
    icon: 'Lungs'
  },
  { 
    id: 'leg', 
    label: 'Healthy Leg', 
    status: 'healthy', 
    position: { bottom: '25%', left: '28%' },
    color: '#20E1DC',
    icon: 'ActivityIcon'
  },
];

// Health status cards data
export const healthCards = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'attention',
    icon: 'Lungs',
    color: '#F16063'
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'good',
    icon: 'Smile',
    color: '#20E1DC'
  },
  {
    id: 'bone',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'attention',
    icon: 'Bone',
    color: '#F16063'
  }
];

// Calendar data
export const calendarData = {
  month: 'October 2021',
  days: [
    { day: 'Mon', date: 25, appointments: ['10:00', '11:00', '12:00'] },
    { day: 'Tue', date: 26, appointments: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, appointments: ['12:00', '13:00'] },
    { day: 'Thu', date: 28, appointments: ['10:00', '14:00', '16:00'] },
    { day: 'Fri', date: 29, appointments: ['14:00', '15:00'] },
    { day: 'Sat', date: 30, appointments: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, appointments: ['09:00', '10:00', '11:00'] }
  ],
  highlightedAppointments: [
    { 
      id: 1, 
      title: 'Dentist', 
      time: '09:00-11:00', 
      doctor: 'Dr. Cameron Williamson',
      icon: 'Smile',
      color: '#4D3AD4'
    },
    { 
      id: 2, 
      title: 'Physiotherapy Appointment', 
      time: '11:00-12:00', 
      doctor: 'Dr. Kevin Djones',
      icon: 'Activity',
      color: '#ECEBF9'
    }
  ]
};

// Upcoming schedule data
export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      { 
        id: 1, 
        title: 'Health checkup complete', 
        time: '11:00 AM', 
        icon: 'ClipboardCheck',
        color: '#ECEBF9'
      },
      { 
        id: 2, 
        title: 'Ophthalmologist', 
        time: '14:00 PM', 
        icon: 'Eye',
        color: '#ECEBF9'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { 
        id: 3, 
        title: 'Cardiologist', 
        time: '12:00 AM', 
        icon: 'Heart',
        color: '#ECEBF9'
      },
      { 
        id: 4, 
        title: 'Neurologist', 
        time: '16:00 PM', 
        icon: 'Brain',
        color: '#ECEBF9'
      }
    ]
  }
];

// Activity data for the chart
export const activityData = {
  title: 'Activity',
  summary: '3 appointment on this week',
  dailyData: [
    { day: 'Mon', values: [0.3, 0.5, 0.2] },
    { day: 'Tues', values: [0.8, 0.2, 0.4, 0.3] },
    { day: 'Wed', values: [0.5, 0.3, 0.6, 0.2] },
    { day: 'Thurs', values: [0.7, 0.4, 0.2] },
    { day: 'Fri', values: [0.4, 0.6, 0.3, 0.5] },
    { day: 'Sat', values: [0.3, 0.7, 0.2] },
    { day: 'Sun', values: [0.5, 0.3, 0.6] }
  ]
};