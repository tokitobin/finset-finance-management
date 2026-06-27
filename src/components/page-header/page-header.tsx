import { Bell, Search } from 'lucide-react';
import { IconButton } from '../icon-button/icon-button';
import './page-header.scss';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  hasNotifications?: boolean;
  hasSearch?: boolean;
}

export const PageHeader = ({
  title,
  subtitle,
  hasNotifications,
  hasSearch,
}: PageHeaderProps) => {
  return (
    <header className="row main-header">
      <div className="column">
        <div className="h1">{title}</div>
        <div className="gray">{subtitle}</div>
      </div>

      {hasSearch && <IconButton icon={Search} />}
      {hasNotifications && <IconButton icon={Bell} label="Notifications" />}
    </header>
  );
};
