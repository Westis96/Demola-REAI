import React from 'react';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';

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
          <div key={label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
              </div>
              <Icon className="h-12 w-12 text-indigo-600 opacity-20" />
            </div>
            <p className="mt-2 text-sm text-gray-600">{trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Recent Analysis</h2>
          <div className="mt-4 space-y-4">
            {['Match vs. City', 'Training Session', 'Player Development'].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{item}</span>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Team Performance</h2>
          <div className="mt-4 space-y-4">
            {['Possession: 65%', 'Pass Accuracy: 88%', 'Shot Accuracy: 45%'].map((stat) => (
              <div key={stat} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{stat.split(':')[0]}</span>
                <div className="w-2/3">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
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