"use client";
import React, { useState } from "react";
import {
  Globe,
  Home,
  MapMinus,
  Menu,
  SquareDashedKanban,
  X,
} from "lucide-react";
import ModeBtn from "../customs/theme-btn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemType, SingleMenuProps } from "@/app/lib/types/navbar";

const menus: MenuItemType[] = [
  { path: "/", label: "Home", icon: <Home size={20} /> },
  { path: "/tours", label: "Tours", icon: <Globe size={20} /> },
  { path: "/plans", label: "Plans", icon: <SquareDashedKanban size={20} /> },
  { path: "/guides", label: "Guides", icon: <MapMinus size={20} /> },
];

const MenuItem: React.FC<SingleMenuProps> = ({ menu, isActive }) => (
  <Link
    href={menu.path}
    className="relative text-sm xl:text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition flex items-center gap-1 whitespace-nowrap"
  >
    {menu.icon}
    {menu.label}

    {isActive && (
      <span className="absolute left-0 -bottom-1 w-full h-1 rounded-full bg-primary animate-[underlineExpand_0.8s]" />
    )}
  </Link>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <section className="border-b backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/tripzylogo2.png"
              width={200}
              height={200}
              alt="tripzy logo"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menus.map((menu) => (
              <MenuItem
                key={menu.path}
                menu={menu}
                isActive={pathName === menu.path}
              />
            ))}
          </nav>

      
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </Link>

            <ModeBtn />

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-3 py-3 space-y-2">
            {menus.map((menu) => (
              <MenuItem
                key={menu.path}
                menu={menu}
                isActive={pathName === menu.path}
              />
            ))}

            <Link
              href="/"
              className="block text-center h-10 px-4 py-2 rounded-md text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
