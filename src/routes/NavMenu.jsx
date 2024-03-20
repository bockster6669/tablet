import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { nav_menu_options } from "../assets/nav-menu-options";

function NavMenu() {
  return (
    <>
    <ul>
      {nav_menu_options.map((opt) => (
        <li>
          <NavLink to={opt.path}>{opt.text}</NavLink>
        </li>
      ))}
    </ul>
    <Outlet/>
    </>
  );
}

export default NavMenu;
