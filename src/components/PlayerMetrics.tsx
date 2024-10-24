import { 
  Heart, 
  Timer, 
  Target, 
  TrendingUp, 
  Award,
  Zap,
  Footprints,
  BarChart3
} from 'lucide-react';
import { players } from '@/lib/data/PlayerData';

const PlayerMetrics = () => {

  const performanceMetrics = [
    { icon: Target, label: 'Shot Accuracy', value: '78%' },
    { icon: Timer, label: 'Avg. Distance', value: '10.2km' },
    { icon: Heart, label: 'Fitness Level', value: '92%' },
    { icon: TrendingUp, label: 'Form Rating', value: '8.5/10' }
  ];

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-card p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Icon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                <p className="text-2xl font-semibold ">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Player List */}
      <div className="bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold ">Player Performance</h2>
        </div>
        <div className="border-t border-foreground/10">
          <table className="min-w-full divide-y divide-foreground/10">
            <thead className="bg-foreground/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Goals
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Assists
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Fitness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Form
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-foreground/10">
              {players.map((player) => (
                <tr key={player.id} className="hover:bg-foreground/10">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium ">{player.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-muted-foreground">{player.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">{player.stats.goals}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">{player.stats.assists}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">{player.stats.accuracy}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">{player.stats.fitness}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      player.stats.form === 'Excellent' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {player.stats.form}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Metrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Training Load</h2>
          <div className="mt-4 space-y-4">
            {[
              { icon: Zap, label: 'High Intensity Minutes', value: '45 mins' },
              { icon: Footprints, label: 'Distance Covered', value: '8.5 km' },
              { icon: Heart, label: 'Avg Heart Rate', value: '145 bpm' },
              { icon: BarChart3, label: 'Performance Score', value: '8.5/10' }
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium ">{label}</span>
                </div>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold ">Recent Achievements</h2>
          <div className="mt-4 space-y-4">
            {[
              { title: 'Hat-trick vs United', date: '2 days ago' },
              { title: '10 Assists Milestone', date: '1 week ago' },
              { title: 'Player of the Month', date: '2 weeks ago' },
              { title: 'Clean Sheet Record', date: '3 weeks ago' }
            ].map((achievement) => (
              <div key={achievement.title} className="flex items-center space-x-3 p-3 bg-foreground/10 rounded-lg">
                <Award className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium ">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMetrics;