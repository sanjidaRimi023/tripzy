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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  // Navigation links data
  const menus = [
    { path: "/", label: "Home", icon: <Home size={20} /> },
    { path: "/tours", label: "Tours", icon: <Globe size={20} /> },
    { path: "/plans", label: "Plans", icon: <SquareDashedKanban size={20} /> },
    { path: "/guides", label: "Guides", icon: <MapMinus size={20} /> },
  ];

  return (
    <section className="bg-white/80 border-b dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="shrink-0">
            <Image
              src="/tripzylogo.png"
              width={200}
              height={200}
              alt="tripzy logo section"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menus.map((menu, idx) => {
              const isActive = pathName === menu.path;
              return (
                <Link
                  key={idx}
                  href={menu.path}
                  className="relative text-sm xl:text-base font-semibold text-gray-700 dark:text-gray-300 dark:hover:text-primary transition whitespace-nowrap flex items-center gap-1 hover:text-primary"
                >
                  {menu.icon}
                  {menu.label}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-1 rounded-full bg-primary animate-[underlineExpand_0.8s]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </Link>
            <ModeBtn />

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Sheet) */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-gray-200 dark:border-gray-700"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menus.map((menu, idx) => {
              const isActive = pathName === menu.path;
              return (
                <Link
                  key={idx}
                  href={menu.path}
                  className="relative text-sm xl:text-base font-semibold text-gray-700 dark:text-gray-300 dark:hover:text-primary transition whitespace-nowrap flex items-center gap-1 hover:text-primary"
                >
                  {menu.icon}
                  {menu.label}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-1 rounded-full bg-primary animate-[underlineExpand_0.8s]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/"
              className="w-full mt-2 text-center items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300"
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
