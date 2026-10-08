'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type AppImageProps = ImageProps;

export default function AppImage({ src, alt, className = '', ...props }: AppImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-muted text-muted-foreground/60 ${className}`}
        style={props.fill ? { position: 'absolute', inset: 0 } : undefined}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
