import { Users, TrendingUp, Award, Calendar } from 'lucide-react';
import { players } from '@/lib/data/PlayerData';

const TeamOverview = () => {
  const teamStats = [
    { icon: Users, label: 'Squad Size', value: players.length },
    { icon: TrendingUp, label: 'Average Age', value: '24.5 years' },
    { icon: Award, label: 'Trophies', value: '3' },
    { icon: Calendar, label: 'Next Match', value: '3 days' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamStats.map(({ icon: Icon, label, value }) => (
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

      <div className="bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold ">Team Composition</h2>
        </div>
        <div className="px-6 pb-6">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-2 px-4 uppercase rounded-full text-primary bg-foreground/10">
                  Position Distribution
                </span>
              </div>
            </div>
            <div className="flex h-4 mb-4 overflow-hidden bg-foreground/10 rounded">
              <div style={{ width: "30%" }} className="bg-red-500"></div>
              <div style={{ width: "40%" }} className="bg-blue-500"></div>
              <div style={{ width: "20%" }} className="bg-green-500"></div>
              <div style={{ width: "10%" }} className="bg-yellow-500"></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Forwards (30%)</span>
              <span>Midfielders (40%)</span>
              <span>Defenders (20%)</span>
              <span>Goalkeepers (10%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold  mb-4">Recent Results</h2>
          <div className="space-y-4">
            {[
              { opponent: 'FC United', result: 'Win', score: '3-1' },
              { opponent: 'City Rovers', result: 'Draw', score: '2-2' },
              { opponent: 'Athletico', result: 'Loss', score: '0-1' },
              { opponent: 'Sporting FC', result: 'Win', score: '4-0' },
            ].map((match, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <span className="text-sm font-medium ">{match.opponent}</span>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${
                    match.result === 'Win' ? 'text-green-600' : 
                    match.result === 'Loss' ? 'text-red-600' : 'text-yellow-600'
                  }`}>{match.result}</span>
                  <span className="text-sm text-muted-foreground">{match.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold  mb-4">Top Performers</h2>
          <div className="space-y-4">
            {players.slice(0, 5).map((player) => (
              <div key={player.id} className="flex items-center justify-between p-3 bg-foreground/10 rounded-lg">
                <div>
                  <p className="text-sm font-medium ">{player.name}</p>
                  <p className="text-xs text-muted-foreground">{player.position}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {player.stats.goals} goals, {player.stats.assists} assists
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;
