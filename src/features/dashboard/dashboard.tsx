import { PageHeader } from '../../components/page-header/page-header';
import './dashboard.scss';

const userName = 'Andrea';

function Dashboard() {
  return (
    <div className="main-container">
      <PageHeader
        title={`Welcome back, ${userName}!`}
        subtitle="It is the best time to manage your finances!"
        hasNotifications
        hasSearch
      />
    </div>
  );
}

export default Dashboard;
