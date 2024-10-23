import React from 'react';
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

const PlayerMetrics = () => {
  const players = [
    {
      id: 1,
      name: 'Marcus Johnson',
      position: 'Forward',
      stats: {
        goals: 12,
        assists: 8,
        accuracy: 78,
        fitness: 92,
        form: 'Excellent'
      }
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'Midfielder',
      stats: {
        goals: 5,
        assists: 15,
        accuracy: 85,
        fitness: 88,
        form: 'Good'
      }
    },
    {
      id: 3,
      name: 'James Wilson',
      position: 'Defender',
      stats: {
        goals: 2,
        assists: 4,
        accuracy: 90,
        fitness: 95,
        form: 'Excellent'
      }
    }
  ];

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
          <div key={label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Icon className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">{label}</p>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Player List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Player Performance</h2>
        </div>
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Goals
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assists
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fitness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Form
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {players.map((player) => (
                <tr key={player.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{player.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{player.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.stats.goals}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.stats.assists}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.stats.accuracy}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.stats.fitness}%</div>
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
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Training Load</h2>
          <div className="mt-4 space-y-4">
            {[
              { icon: Zap, label: 'High Intensity Minutes', value: '45 mins' },
              { icon: Footprints, label: 'Distance Covered', value: '8.5 km' },
              { icon: Heart, label: 'Avg Heart Rate', value: '145 bpm' },
              { icon: BarChart3, label: 'Performance Score', value: '8.5/10' }
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-900">{label}</span>
                </div>
                <span className="text-sm text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Recent Achievements</h2>
          <div className="mt-4 space-y-4">
            {[
              { title: 'Hat-trick vs United', date: '2 days ago' },
              { title: '10 Assists Milestone', date: '1 week ago' },
              { title: 'Player of the Month', date: '2 weeks ago' },
              { title: 'Clean Sheet Record', date: '3 weeks ago' }
            ].map((achievement) => (
              <div key={achievement.title} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Award className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
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