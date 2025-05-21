// Define all themes here
const themes = {
    default: {
      '--bg-color': '#fff',
      '--text-color': '#222',
      '--button-bg': '#3498db',
      '--button-hover': '#2980b9',
      '--bg-image': 'none'
    },
    fart: {
      '--bg-color': '#4d2c1d',
      '--text-color': '#f1c40f',
      '--button-bg': '#8e5a2e',
      '--button-hover': '#6e4121',
      '--bg-image': 'none'
    },
    futuristic: {
      '--bg-color': '#0d0d0d',
      '--text-color': '#00ffcc',
      '--button-bg': '#111',
      '--button-hover': '#333',
      '--bg-image': "url('https://yourdomain.com/futuristic.jpg')" // Replace with actual URL
    },
    cave: {
      '--bg-color': '#1a1a1a',
      '--text-color': '#ccccaa',
      '--button-bg': '#3b2e2a',
      '--button-hover': '#5a423b',
      '--bg-image': "url('https://yourdomain.com/cave.jpg')" // Replace with actual URL
    }
  };
  
  // Apply theme from localStorage
  (function applySavedTheme() {
    const root = document.documentElement;
    const themeName = localStorage.getItem('theme') || 'default';
    const theme = themes[themeName] || themes.default;
    for (const key in theme) {
      root.style.setProperty(key, theme[key]);
    }
  })();
  