import { useEffect } from 'react';

export const useAccessibility = (): void => {
  useEffect(() => {
    // Add skip to content link visibility on focus
    const addSkipLink = (): void => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only fixed top-0 left-0 z-50 bg-primary text-primary-foreground px-4 py-2';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    addSkipLink();

    // Announce navigation changes to screen readers
    const announceNavigation = (message: string): void => {
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);

      setTimeout(() => {
        announcement.remove();
      }, 3000);
    };

    // Listen for route changes (can be enhanced with router events)
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args: unknown[]) {
      announceNavigation('Page content has changed');
      return originalPushState.apply(window.history, args as Parameters<typeof originalPushState>);
    };

    // Keyboard navigation enhancement
    const handleKeyboardNav = (e: KeyboardEvent): void => {
      // Alt + "/" = search (common accessibility shortcut)
      if (e.altKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardNav);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNav);
    };
  }, []);
};

export const generateAriaLabel = (text: string, extra?: string): string => {
  return extra ? `${text}, ${extra}` : text;
};
