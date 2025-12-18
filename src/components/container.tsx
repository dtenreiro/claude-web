import { containerClasses, cn } from '@/lib/styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Consistent container width component for layout alignment
 */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn(containerClasses, className)}>{children}</div>;
}
