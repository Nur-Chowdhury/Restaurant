import React, { useState, useEffect } from "react";
import darkPng from "../assets/dark-mode-button.png";
import lightPng from "../assets/light-mode-button.png";

export default function DarkMode() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    });
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme, element]);

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="relative">
            <img
                src={lightPng}
                alt="light"
                onClick={changeTheme}
                className={`w-32 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                }`}
            />
            <img
                src={darkPng}
                alt="dark"
                onClick={changeTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
}
