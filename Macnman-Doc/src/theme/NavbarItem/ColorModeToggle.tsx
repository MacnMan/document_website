import React, { useEffect, useState } from 'react';

const modes = ['dark', 'light', 'system'] as const;
type Mode = typeof modes[number];

const ColorModeToggle: React.FC = () => {
  const [modeIndex, setModeIndex] = useState(0);

  const nextMode = () => {
    const nextIndex = (modeIndex + 1) % modes.length;
    const newMode = modes[nextIndex];
    setModeIndex(nextIndex);
    applyMode(newMode);
    localStorage.setItem('theme-preference', newMode);
  };

  const applyMode = (mode: Mode) => {
    const html = document.documentElement;
    if (mode === 'system') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', mode);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme-preference') as Mode;
    const initialMode = stored || 'system';
    setModeIndex(modes.indexOf(initialMode));
    applyMode(initialMode);
  }, []);

  return (
    <button onClick={nextMode} className="theme-toggle-btn" title="Toggle theme">
      {modes[modeIndex]}
    </button>
  );
};

export default ColorModeToggle;
