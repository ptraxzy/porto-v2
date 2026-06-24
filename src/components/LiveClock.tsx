import { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';

export const LiveClock: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      };
      setTime(now.toLocaleTimeString('en-US', options));
      setDate(now.toLocaleDateString('en-US', dateOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-clock">
      <Clock size={12} />
      <span>{time}</span>
      <span className="clock-separator">|</span>
      <MapPin size={10} />
      <span>{date} WIB</span>
    </div>
  );
};
