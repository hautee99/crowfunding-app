import {
  IconCampain,
  IconDarkMode,
  IconDashboard,
  IconLogOut,
  IconPayment,
  IconProfile,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
const siderbarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
    onclick: () => {},
  },
  {
    icon: <IconCampain></IconCampain>,
    title: "Campain",
    url: "/campain",
    onclick: () => {},
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/Payment",
    onclick: () => {},
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/Profile",
    onclick: () => {},
  },
  {
    icon: <IconLogOut></IconLogOut>,
    title: "LogOut",
    url: "/logOut",
    onclick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/#",
    onclick: () => {},
  },
];

const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 justify-center md:rounded-lg md:mb-8 last:mb-auto last:bg-white last:shadow-shawowPrimary";
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0 pt-2">
      {siderbarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
              : navlinkClass
          }
        >
          {link.icon}
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
