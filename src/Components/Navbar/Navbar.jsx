import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Portfolio",
      path: "/portfolio",
    },
  ];

  return (
    <nav>
      <div
        onClick={() => {
          SetOpen(!open);
        }}
      >
        <Bars4Icon className="h-6 w-6 text-purple-500" />
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
