
import { useEffect, useState } from "react";
import { CloudSun, MapPin, Wind, Droplets, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

export default function WeatherWidget({
  city = "Goa",
  apiKey = "",
}) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!apiKey) {
      setWeather({
        temp: 31,
        humidity: 72,
        wind: 14,
        description: "Clear Sky",
        location: city,
      });
      setLoading(false);
      return;
    }

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await res.json();

        setWeather({
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          location: data.name,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
        Loading weather...
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-600/10 p-6 backdrop-blur-xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Weather
          </h2>

          <div className="mt-2 flex items-center gap-2 text-slate-400">
            <MapPin size={16} />
            {weather.location}
          </div>
        </div>

        <CloudSun className="h-12 w-12 text-cyan-400" />
      </div>

      <div className="mb-8 text-5xl font-black text-white">
        {weather.temp}°
      </div>

      <p className="mb-6 capitalize text-slate-300">
        {weather.description}
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-slate-900/60 p-4 text-center">
          <Thermometer className="mx-auto mb-2 text-cyan-400" />
          <p className="text-lg font-semibold text-white">
            {weather.temp}°
          </p>
          <span className="text-xs text-slate-400">
            Temp
          </span>
        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4 text-center">
          <Droplets className="mx-auto mb-2 text-cyan-400" />
          <p className="text-lg font-semibold text-white">
            {weather.humidity}%
          </p>
          <span className="text-xs text-slate-400">
            Humidity
          </span>
        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4 text-center">
          <Wind className="mx-auto mb-2 text-cyan-400" />
          <p className="text-lg font-semibold text-white">
            {weather.wind}
          </p>
          <span className="text-xs text-slate-400">
            km/h
          </span>
        </div>
      </div>
    </motion.div>
  );
}
