'use client';

import React from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export type IconName = keyof typeof OutlineIcons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  variant?: 'outline' | 'solid';
}

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export default function Icon({ name, size = 24, className = '', variant = 'outline' }: IconProps) {
  const set = (variant === 'solid' ? SolidIcons : OutlineIcons) as unknown as Record<string, IconComponent>;
  const IconComponent = set[name];

  if (!IconComponent) return null;

  return <IconComponent width={size} height={size} className={className} />;
}
