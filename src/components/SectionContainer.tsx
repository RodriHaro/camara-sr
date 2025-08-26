import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
