import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // ServicesSection builds `md:${service.span}` at runtime (span is 'col-span-1' | 'col-span-2'),
  // which Tailwind's static JIT scanner can't detect since the full token never appears literally.
  // Safelisting keeps the bento grid's asymmetric layout intact without touching component logic.
  safelist: ['md:col-span-1', 'md:col-span-2'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(28, 43, 58, 0.06)',
        'card-lg': '0 12px 40px rgba(28, 43, 58, 0.10)',
        'card-xl': '0 24px 60px rgba(28, 43, 58, 0.16)',
        accent: '0 10px 28px rgba(200, 150, 90, 0.35)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
