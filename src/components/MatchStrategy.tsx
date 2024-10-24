import { useState } from 'react';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import TacticalBoard from './TacticalBoard';

const MatchStrategy = () => {
  const [activeStrategy, setActiveStrategy] = useState('Attacking');

  const strategies = [
    { name: 'Attacking', description: 'High-pressure, possession-based play' },
    { name: 'Defensive', description: 'Solid backline with counter-attacking' },
    { name: 'Balanced', description: 'Adaptable approach for various situations' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Match Strategies</h2>
        <div className="space-y-4">
          {strategies.map((strategy) => (
            <div key={strategy.name} className="border rounded-lg">
              <button
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setActiveStrategy(strategy.name)}
              >
                <div>
                  <p className="font-medium text-gray-900">{strategy.name}</p>
                  <p className="text-sm text-gray-500">{strategy.description}</p>
                </div>
                {activeStrategy === strategy.name ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {activeStrategy === strategy.name && (
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-600 mb-2">Key Points:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Maintain high defensive line</li>
                    <li>Press aggressively in opponent's half</li>
                    <li>Quick transitions from defense to attack</li>
                    <li>Utilize width to stretch opponent's defense</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tactical Board</h2>
        <TacticalBoard />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Set Piece Strategies</h2>
          <div className="space-y-4">
            {[
              { name: 'Corner Kicks', variations: 3 },
              { name: 'Free Kicks', variations: 4 },
              { name: 'Throw-ins', variations: 2 },
              { name: 'Penalties', variations: 1 },
            ].map((setPiece, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{setPiece.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{setPiece.variations} variations</span>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Player Roles</h2>
          <div className="space-y-4">
            {[
              { position: 'Striker', role: 'Target Man' },
              { position: 'Midfielder', role: 'Box-to-Box' },
              { position: 'Winger', role: 'Inverted' },
              { position: 'Defender', role: 'Ball-Playing' },
              { position: 'Goalkeeper', role: 'Sweeper-Keeper' },
            ].map((role, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{role.position}</p>
                  <p className="text-xs text-gray-600">{role.role}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Assign
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStrategy;
