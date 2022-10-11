import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefer-color-scheme: dark)').matches) {
            setTheme('dark');

        } else {
            setTheme('Light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <button type='button' onClick={handleThemeSwitch} className="fixed z-10 p-1 text-lg bg-indigo-400 rounded-md right-2 top-2">
                {theme === 'dark' ? '🌝' : '🌙'}
            </button>
            <div className="font-comic bg:white dark:bg-slate-900">
                <div className="w-11/12 max-w-5xl mx-auto">
                        <HeroSection />
                <Services />
                <Works></Works>
            </div>
        </div>
       </>
    )
}

export default App;