import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { UserContext } from '../App';

const localizer = momentLocalizer(moment);

const AdjustCalendar = () => {
  const { user, setUser } = useContext(UserContext);
  const views = ['month', 'agenda'];

  const handleEventDoubleClick = (event) => {
    const updatedEvents = user.events.filter((e) => e.id !== event.id);
    setUser({ ...user, events: updatedEvents });
    UpdateLocalStorage({ ...user, events: updatedEvents });
  };
  const UpdateLocalStorage = (element) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const targetIndex = users.findIndex(
      (user) => user.UserName === element.UserName
    );
    users[targetIndex] = element;
    localStorage.setItem("users", JSON.stringify(users));
  };
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={user.events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
        views={views}
        onDoubleClickEvent={handleEventDoubleClick}
      />
    </div>
  );
};

export default AdjustCalendar;
