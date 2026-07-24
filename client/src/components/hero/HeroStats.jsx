import {
  Globe2,
  MapPinned,
  Star,
} from "lucide-react";

import Card from "../common/Card";

function HeroStats() {
  const stats = [
    {
      value: "150+",
      label: "Destinations",
      icon: Globe2,
    },
    {
      value: "50K+",
      label: "Trips Planned",
      icon: MapPinned,
    },
    {
      value: "4.9",
      label: "Average Rating",
      icon: Star,
    },
  ];

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="p-8 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Icon
                size={26}
                className="text-blue-600"
              />
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {item.label}
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export default HeroStats;