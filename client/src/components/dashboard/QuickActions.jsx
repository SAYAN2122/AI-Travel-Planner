import { Link } from "react-router-dom";

import {
  Plus,
  History,
  User,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Plan Trip",
    icon: <Plus />,
    path: "/planner",
  },
  {
    title: "Trip History",
    icon: <History />,
    path: "/history",
  },
  {
    title: "Profile",
    icon: <User />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-bold">

        Quick Actions

      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.path}
            className="rounded-2xl border border-orange-100 p-6 transition hover:bg-orange-50"
          >

            <div className="mb-5 text-orange-500">

              {action.icon}

            </div>

            <h3 className="font-semibold">

              {action.title}

            </h3>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;