import React, { useEffect, useState } from 'react';

const modes = ['light', 'dark'] as const;
type Mode = typeof modes[number];

const ColorModeToggle: React.FC = () => {
  const [modeIndex, setModeIndex] = useState(0);

  const applyMode = (mode: Mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme-preference', mode);
  };

  const toggleMode = () => {
    const nextIndex = (modeIndex + 1) % modes.length;
    const nextMode = modes[nextIndex];
    setModeIndex(nextIndex);
    applyMode(nextMode);
  };

  useEffect(() => {
    const stored = (localStorage.getItem('theme-preference') as Mode) || 'light';
    const index = modes.indexOf(stored);
    setModeIndex(index === -1 ? 0 : index);
    applyMode(modes[index === -1 ? 0 : index]);
  }, []);

  return (
    <button
      onClick={toggleMode}
      className="theme-toggle-btn"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {modes[modeIndex]}
    </button>
  );
};

export default ColorModeToggle;
