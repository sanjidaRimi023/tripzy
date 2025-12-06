"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const ModeBtn = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mount, setMount] = useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return (
      <Button variant="outline" disabled size="icon">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden transition-all cursor-pointer rounded-full"
      >
        <AnimatePresence mode="wait" initial={false}>
          {currentTheme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};

export default ModeBtn;
