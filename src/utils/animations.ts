import gsap from 'gsap';

export const useScrambleText = (element: HTMLElement | string, text: string) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;

  const duration = 1.5;
  const originalText = text;
  let iteration = 0;

  const animate = () => {
    const interval = setInterval(() => {
      target.textContent = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return animate;
};

export const initMagneticButtons = () => {
  const buttons = document.querySelectorAll('.magnetic-btn');
  
  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e: any) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power3.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
};
