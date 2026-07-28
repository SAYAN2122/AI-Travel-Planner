import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  History,
  User,
  Settings,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Plan a New Trip",
    description:
      "Generate a complete AI-powered travel itinerary.",
    icon: <Plus size={26} />,
    path: "/planner",
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Trip History",
    description:
      "View and manage your previous travel plans.",
    icon: <History size={26} />,
    path: "/history",
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Profile",
    description:
      "Update your account and personal details.",
    icon: <User size={26} />,
    path: "/profile",
    gradient: "from-violet-600 to-indigo-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Settings",
    description:
      "Manage preferences and application settings.",
    icon: <Settings size={26} />,
    path: "/settings",
    gradient: "from-slate-700 to-slate-900",
    bg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
];

function QuickActions() {
  return (
    <section className="relative">

      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-600">
          Jump straight to the features you use most.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
            whileHover={{
              y: -8,
            }}
          >
            <Link
              to={action.path}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-white/80
                p-7
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-200
                hover:shadow-2xl
              "
            >
              {/* Glow */}

              <div
                className={`
                  absolute
                  -right-10
                  -top-10
                  h-40
                  w-40
                  rounded-full
                  bg-gradient-to-br
                  ${action.gradient}
                  opacity-10
                  blur-3xl
                `}
              />

              <div className="relative">

                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    ${action.bg}
                    ${action.iconColor}
                  `}
                >
                  {action.icon}
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {action.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-slate-700">
                    Open
                  </span>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      ${action.gradient}
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    `}
                  >
                    <ArrowRight size={18} />
                  </div>

                </div>

              </div>

            </Link>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default QuickActions;