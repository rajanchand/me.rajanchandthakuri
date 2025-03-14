
import { useState, useEffect } from 'react';

interface SystemInfo {
  ipAddress: string;
  operatingSystem: string;
  browser: string;
  screenSize: string;
}

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>({
    ipAddress: 'Loading...',
    operatingSystem: 'Loading...',
    browser: 'Loading...',
    screenSize: 'Loading...',
  });

  useEffect(() => {
    // Get browser and OS info
    const detectOperatingSystem = () => {
      const userAgent = window.navigator.userAgent;
      
      if (userAgent.indexOf('Windows') !== -1) return 'Windows';
      if (userAgent.indexOf('Mac') !== -1) return 'macOS';
      if (userAgent.indexOf('Linux') !== -1) return 'Linux';
      if (userAgent.indexOf('Android') !== -1) return 'Android';
      if (userAgent.indexOf('iOS') !== -1 || userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) return 'iOS';
      
      return 'Unknown OS';
    };

    const detectBrowser = () => {
      const userAgent = window.navigator.userAgent;
      
      if (userAgent.indexOf('Chrome') !== -1) return 'Chrome';
      if (userAgent.indexOf('Firefox') !== -1) return 'Firefox';
      if (userAgent.indexOf('Safari') !== -1) return 'Safari';
      if (userAgent.indexOf('Edge') !== -1) return 'Edge';
      if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR') !== -1) return 'Opera';
      if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) return 'Internet Explorer';
      
      return 'Unknown Browser';
    };

    // For demo purposes, we'll use a placeholder for IP (would normally be fetched from an API)
    const mockIpAddress = '192.168.x.x';

    setSystemInfo({
      ipAddress: mockIpAddress,
      operatingSystem: detectOperatingSystem(),
      browser: detectBrowser(),
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
    });

    const handleResize = () => {
      setSystemInfo(prev => ({
        ...prev,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return systemInfo;
};
