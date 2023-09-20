import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { UserContext } from '../App';

const localizer = momentLocalizer(moment);

const AdjustCalendar = () => {
  const { user, setUser } = useContext(UserContext);

 
  // Specify the views you want to include (in this case, only 'month')
  const views = ['month'];

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={user.events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
        views={views} // Use the views prop to specify the views you want
      />
    </div>
  );
};

export default AdjustCalendar;