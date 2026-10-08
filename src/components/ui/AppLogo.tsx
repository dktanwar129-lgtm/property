import React from 'react';

interface AppLogoProps {
  size?: number;
  className?: string;
}

export default function AppLogo({ size = 32, className = '' }: AppLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="var(--primary)" />
      <path d="M20 9L31 19.5H27.5V30H23V22H17V30H12.5V19.5H9L20 9Z" fill="var(--accent)" />
    </svg>
  );
}
