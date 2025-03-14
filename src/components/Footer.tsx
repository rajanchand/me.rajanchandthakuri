
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Phone, Mail, MapPin, Clock, Cpu, Cloud } from 'lucide-react';
import { useSystemInfo } from '@/utils/useSystemInfo';
import { useWeather } from '@/utils/useWeather';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const systemInfo = useSystemInfo();
  const weather = useWeather();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full px-4 py-8 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Date and Time */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
              <Clock size={14} />
              <span>Date & Time</span>
            </div>
            <p className="text-xl font-medium">
              {format(currentDateTime, 'PPP')}
            </p>
            <p className="text-2xl font-light">
              {format(currentDateTime, 'HH:mm:ss')}
            </p>
          </div>

          {/* Weather and Location */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
              <Cloud size={14} />
              <span>Current Location & Weather</span>
            </div>
            {weather.loading ? (
              <p className="text-xl font-medium">Loading weather data...</p>
            ) : weather.error ? (
              <p className="text-xl font-medium">Weather data unavailable</p>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span className="text-xl font-medium">{weather.location}</span>
                </div>
                <p className="text-2xl font-light">
                  {weather.temperature}°C, {weather.condition}
                </p>
              </>
            )}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
              <Cpu size={14} />
              <span>System Info</span>
            </div>
            <p className="text-xl font-medium">
              {systemInfo.operatingSystem} / {systemInfo.browser}
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2">
              <a href="tel:+441234567890" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a href="mailto:rajanchand48@gmail.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Rajan Prakash Chand. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Thank you for visiting my portfolio. I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
