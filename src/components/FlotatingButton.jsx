import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const menu = document.getElementById('menu-component');
    if (menu) {
      const rect = menu.getBoundingClientRect();
      const isMenuVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsVisible(!isMenuVisible);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="sticky bottom-16 left-5 w-12 h-12 bg-black opacity-50 rounded-full flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-100"
          onClick={scrollToTop}
        >
          <span className="text-white text-2xl">↑</span>
        </div>
      )}
    </>
  );
}