import { useState, useEffect } from 'react';
import { Save, Trash2, Undo, Redo, Users } from 'lucide-react';
import { Button } from './ui/button';
import { players, Player } from '../lib/data/PlayerData';

interface PlayerPosition {
  playerId: number;
  x: number;
  y: number;
}

interface FormationSlot {
  id: string;
  x: number;
  y: number;
}

const formations = {
  '4-4-2': [
    { id: 'GK', x: 0.95, y: 0.5 },
    { id: 'LB', x: 0.75, y: 0.15 }, { id: 'CB1', x: 0.75, y: 0.38 }, { id: 'CB2', x: 0.75, y: 0.62 }, { id: 'RB', x: 0.75, y: 0.85 },
    { id: 'LM', x: 0.45, y: 0.15 }, { id: 'CM1', x: 0.45, y: 0.38 }, { id: 'CM2', x: 0.45, y: 0.62 }, { id: 'RM', x: 0.45, y: 0.85 },
    { id: 'ST1', x: 0.15, y: 0.35 }, { id: 'ST2', x: 0.15, y: 0.65 }
  ],
  '4-3-3': [
    { id: 'GK', x: 0.95, y: 0.5 },
    { id: 'LB', x: 0.75, y: 0.15 }, { id: 'CB1', x: 0.75, y: 0.38 }, { id: 'CB2', x: 0.75, y: 0.62 }, { id: 'RB', x: 0.75, y: 0.85 },
    { id: 'CM1', x: 0.45, y: 0.3 }, { id: 'CM2', x: 0.55, y: 0.5 }, { id: 'CM3', x: 0.45, y: 0.7 },
    { id: 'LW', x: 0.15, y: 0.2 }, { id: 'ST', x: 0.15, y: 0.5 }, { id: 'RW', x: 0.15, y: 0.8 }
  ],
};

const TacticalBoard = () => {
  const [selectedFormation, setSelectedFormation] = useState('4-4-2');
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [playerPositions, setPlayerPositions] = useState<PlayerPosition[]>([]);
  const [formationSlots, setFormationSlots] = useState<FormationSlot[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const formationEntries = Object.entries(formations).map(([name, slots]) => ({
    name,
    description: `${slots.length} players`,
  }));

  useEffect(() => {
    setFormationSlots(formations[selectedFormation as keyof typeof formations] || []);
    setPlayerPositions([]);
  }, [selectedFormation]);

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleSlotClick = (slot: FormationSlot) => {
    if (!selectedPlayer) return;

    setPlayerPositions(prev => {
      const newPositions = prev.filter(p => p.playerId !== selectedPlayer.id && !(p.x === slot.x && p.y === slot.y));
      return [...newPositions, { playerId: selectedPlayer.id, x: slot.x, y: slot.y }];
    });

    setSelectedPlayers(prev => {
      if (!prev.find(p => p.id === selectedPlayer.id)) {
        return [...prev, selectedPlayer];
      }
      return prev;
    });

    setSelectedPlayer(null);
  };

  const removePlayerFromPosition = (playerId: number) => {
    setPlayerPositions(prev => prev.filter(p => p.playerId !== playerId));
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Undo className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Redo className="h-5 w-5" />
            </button>
            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <Button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
            <Save className="h-5 w-5" />
            <span>Save Tactic</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Formations and Players Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Formations</h2>
            <div className="space-y-2">
              {formationEntries.map(({ name, description }) => (
                <button
                  key={name}
                  onClick={() => setSelectedFormation(name)}
                  className={`w-full p-3 rounded-lg text-left ${
                    selectedFormation === name
                      ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5" />
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Players</h2>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  onClick={() => handlePlayerSelect(player)}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedPlayer?.id === player.id
                      ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className="font-medium">{player.name}</p>
                  <p className="text-sm text-gray-500">{player.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Board */}
        <div className="lg:col-span-3 max-w-2xl max-h-screen">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div
              id="pitch"
              className="aspect-[3/4] bg-green-800 rounded-lg relative"
            >
              {/* Field Markings */}
              <div className="absolute inset-0 p-4">
                <div className="border-2 border-white/50 w-full h-full rounded-lg relative">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/50 rounded-full" />
                  {/* Center Line */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/50" />
                  {/* Penalty Areas */}
                  <div className="absolute left-1/4 top-0 h-1/6 w-2/4 border-2 border-t-0 border-white/50" />
                  <div className="absolute left-1/4 bottom-0 h-1/6 w-2/4 border-2 border-b-0 border-white/50" />
                </div>
              </div>

              {/* Formation Slots */}
              {formationSlots.map((slot) => (
                <div
                  key={slot.id}
                  onClick={() => handleSlotClick(slot)}
                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer ${
                    selectedPlayer ? 'bg-yellow-300' : 'bg-gray-300 bg-opacity-50'
                  }`}
                  style={{
                    left: `${slot.y * 100}%`,
                    top: `${slot.x * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {slot.id}
                  {playerPositions.find(p => p.x === slot.x && p.y === slot.y) && (
                    <div
                      className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        removePlayerFromPosition(playerPositions.find(p => p.x === slot.x && p.y === slot.y)!.playerId);
                      }}
                    >
                      {players.find(p => p.id === playerPositions.find(pos => pos.x === slot.x && pos.y === slot.y)!.playerId)?.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              ))}

              {/* Bench Area */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-200 bg-opacity-50 flex items-center px-2 overflow-x-auto">
                {selectedPlayers.filter(player => !playerPositions.some(p => p.playerId === player.id)).map((player) => (
                  <div
                    key={player.id}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer mx-1"
                    onClick={() => handlePlayerSelect(player)}
                  >
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tactical Notes</h2>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Add notes about the tactical setup..."
        />
      </div>
    </div>
  );
};

export default TacticalBoard;
