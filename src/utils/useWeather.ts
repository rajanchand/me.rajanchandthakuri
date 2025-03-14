
import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  location: string;
  loading: boolean;
  error: string | null;
}

const DEFAULT_WEATHER: WeatherData = {
  temperature: 0,
  condition: 'Unknown',
  icon: '01d',
  location: 'Unknown',
  loading: true,
  error: null
};

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData>(DEFAULT_WEATHER);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setWeather(prev => ({ ...prev, loading: false, error: 'Unable to get location' }));
        }
      );
    } else {
      setWeather(prev => ({ ...prev, loading: false, error: 'Geolocation not supported' }));
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // For demo purposes, we'll simulate weather data
      // In a real application, you would fetch from a weather API
      
      // Simulate API call delay
      setTimeout(() => {
        // Mock weather data based on current month (for demo)
        const date = new Date();
        const month = date.getMonth();
        
        // Simple weather simulation
        let mockWeather: Partial<WeatherData> = {};
        
        if (month >= 2 && month <= 4) { // Spring
          mockWeather = {
            temperature: Math.floor(Math.random() * 10) + 15, // 15-25°C
            condition: 'Partly Cloudy',
            icon: '02d'
          };
        } else if (month >= 5 && month <= 7) { // Summer
          mockWeather = {
            temperature: Math.floor(Math.random() * 10) + 25, // 25-35°C
            condition: 'Sunny',
            icon: '01d'
          };
        } else if (month >= 8 && month <= 10) { // Fall
          mockWeather = {
            temperature: Math.floor(Math.random() * 10) + 10, // 10-20°C
            condition: 'Cloudy',
            icon: '03d'
          };
        } else { // Winter
          mockWeather = {
            temperature: Math.floor(Math.random() * 10), // 0-10°C
            condition: 'Light Snow',
            icon: '13d'
          };
        }
        
        // Get approximate location name (for demonstration)
        const locationName = 'Your City'; // In a real app, you'd use reverse geocoding
        
        setWeather({
          ...DEFAULT_WEATHER,
          ...mockWeather,
          location: locationName,
          loading: false
        });
      }, 1500);
    }
  }, [location]);

  return weather;
};
