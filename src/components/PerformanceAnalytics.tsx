import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { players } from '@/lib/data/PlayerData';

const PerformanceAnalytics = () => {
  const teamPerformance = [
    { name: 'Possession', value: 60 },
    { name: 'Shots on Target', value: 8 },
    { name: 'Pass Accuracy', value: 85 },
    { name: 'Tackles Won', value: 12 },
    { name: 'Aerial Duels Won', value: 15 },
  ];

  const playerPerformance = players.slice(0, 5).map(player => ({
    name: player.name,
    goals: player.stats.goals,
    assists: player.stats.assists,
  }));

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Team Performance Metrics</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={teamPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Top Player Contributions</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={playerPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="goals" fill="hsl(var(--chart-2))" />
              <Bar dataKey="assists" fill="hsl(var(--chart-3))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Key Performance Indicators</h2>
          <div className="space-y-4">
            {[
              { label: 'Goals Scored', value: '35' },
              { label: 'Goals Conceded', value: '15' },
              { label: 'Clean Sheets', value: '8' },
              { label: 'Average Possession', value: '58%' },
              { label: 'Shot Conversion Rate', value: '12%' },
            ].map((kpi, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <span className="text-sm font-medium ">{kpi.label}</span>
                <span className="text-sm text-muted-foreground">{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
          <div className="space-y-4">
            {[
              { label: 'Goal Scoring', trend: 'Increasing', change: '+15%' },
              { label: 'Defensive Solidity', trend: 'Stable', change: '0%' },
              { label: 'Passing Accuracy', trend: 'Increasing', change: '+5%' },
              { label: 'Set Piece Conversion', trend: 'Decreasing', change: '-8%' },
              { label: 'Fitness Levels', trend: 'Increasing', change: '+10%' },
            ].map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <span className="text-sm font-medium ">{trend.label}</span>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${
                    trend.trend === 'Increasing' ? 'text-green-600' : 
                    trend.trend === 'Decreasing' ? 'text-red-600' : 'text-yellow-600'
                  }`}>{trend.trend}</span>
                  <span className="text-sm text-muted-foreground">{trend.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
