import './icon-button.scss';
import { type LucideIcon } from 'lucide-react';

interface IconButtonProps {
  label?: string;
  icon?: LucideIcon;
  iconSize?: number;
}

export const IconButton = ({ label, icon, iconSize = 20 }: IconButtonProps) => {
  const Icon = icon;

  return (
    <div className="main-button">
      {Icon ? <Icon size={iconSize} /> : null}
      {label}
    </div>
  );
};
