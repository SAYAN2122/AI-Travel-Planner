import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

function NavLinks({ mobile = false, onClick }) {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onClick}
          className={({ isActive }) =>
            `
            font-medium
            transition-all
            duration-300
            ${
              mobile
                ? "block rounded-xl px-4 py-3"
                : "rounded-full px-5 py-2"
            }
            ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
            }
          `
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default NavLinks;