import { sectionHeaderClasses, cn } from '@/lib/styles';

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return <h2 className={cn(sectionHeaderClasses, className)}>{title}</h2>;
}
