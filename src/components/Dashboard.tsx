import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import { Button } from './ui/button';

const Dashboard = () => {
  const stats = [
    { label: 'Total Players', value: '23', icon: Users, trend: '+2 this month' },
    { label: 'Next Match', value: '3 days', icon: Calendar, trend: 'vs. United' },
    { label: 'Team Form', value: 'WWDLW', icon: TrendingUp, trend: '70% win rate' },
    { label: 'Fitness Level', value: '85%', icon: Activity, trend: '+5% improvement' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, trend }) => (
          <div key={label} className="bg-card p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                <p className="mt-2 text-3xl font-semibold ">{value}</p>
              </div>
              <Icon className="h-12 w-12 text-primary opacity-90" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Recent Analysis</h2>
          <div className="mt-4 space-y-4">
            {['Match vs. City', 'Training Session', 'Player Development'].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg">
                <span className="text-sm font-medium ">{item}</span>
                <Button className="bg-transparent shadow-none text-sm text-primary hover:bg-foreground/5">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Team Performance</h2>
          <div className="mt-4 space-y-4">
            {['Possession: 65%', 'Pass Accuracy: 88%', 'Shot Accuracy: 45%'].map((stat) => (
              <div key={stat} className="flex items-center justify-center">
                <span className="text-sm text-muted-foreground">{stat.split(':')[0]}</span>
                <div className="grow" />
                <div className="w-2/3">
                  <span className="text-sm text-muted-foreground text-right w-full">{stat.split(':')[1]}</span>
                  <div className="h-2 bg-foreground/20 rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: stat.split(':')[1].trim() }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;