import React, { useEffect, useState } from 'react';

const modes = ['dark', 'light', 'system'] as const;
type Mode = typeof modes[number];

const ColorModeToggle: React.FC = () => {
  const [modeIndex, setModeIndex] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem('color-mode') as Mode | null;
    const initialMode = saved || 'system';
    setModeIndex(modes.indexOf(initialMode));
    applyMode(initialMode);
  }, []);

  const applyMode = (mode: Mode) => {
    if (mode === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.removeItem('color-mode');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem('color-mode', mode);
    }
  };

  const handleToggle = () => {
    const nextIndex = (modeIndex + 1) % modes.length;
    const nextMode = modes[nextIndex];
    setModeIndex(nextIndex);
    applyMode(nextMode);
  };

  const modeIcon: Record<Mode, string> = {
    light: '🌞',
    dark: '🌙',
    system: '🖥️',
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        background: 'none',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginLeft: '1rem',
      }}
      title={`Switch to ${modes[(modeIndex + 1) % modes.length]} mode`}
    >
      {modeIcon[modes[modeIndex]]}
    </button>
  );
};

export default ColorModeToggle;
