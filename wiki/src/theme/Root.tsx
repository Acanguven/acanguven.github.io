import React, {useEffect} from 'react';

const VALID_THEMES = ['light', 'dark', 'halloween', 'ocean', 'rose', 'forest'];

export default function Root({children}: {children: React.ReactNode}) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gameTheme = params.get('theme');

    if (gameTheme && VALID_THEMES.includes(gameTheme)) {
      document.documentElement.setAttribute('data-game-theme', gameTheme);

      if (gameTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  return <>{children}</>;
}
