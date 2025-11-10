import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-soft-gray dark:bg-neutral-bg text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
