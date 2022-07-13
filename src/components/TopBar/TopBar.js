import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

import Logo from "../Logo";
import navigation from "../Navigation";
import Link from "next/link";
import styles from "./TopBar.styles";

const TopBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div style={styles.container}>
      {navigation.map((link) => {
        return (
          <ul
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
            style={styles.navbar}
            key={link.name}>
            <Link href={link.path}>
              <li>{link.name}</li>
            </Link>
          </ul>
        );
      })}

      <div>
        <div style={styles.themeChanger}>{renderThemeChanger()}</div>
      </div>
    </div>
  );
};
export default TopBar;
