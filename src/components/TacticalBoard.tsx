import React, { useState } from 'react';
import { Save, Trash2, Undo, Redo, Users } from 'lucide-react';

const TacticalBoard = () => {
  const [selectedFormation, setSelectedFormation] = useState('4-4-2');
  
  const formations = [
    { name: '4-4-2', description: 'Classic balanced formation' },
    { name: '4-3-3', description: 'Attacking formation' },
    { name: '3-5-2', description: 'Midfield control' },
    { name: '5-3-2', description: 'Defensive setup' },
  ];

  const tactics = [
    { name: 'High Press', type: 'Defensive' },
    { name: 'Tiki-Taka', type: 'Possession' },
    { name: 'Counter-Attack', type: 'Attacking' },
    { name: 'Wing Play', type: 'Attacking' },
  ];

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
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
            <Save className="h-5 w-5" />
            <span>Save Tactic</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Formations Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Formations</h2>
            <div className="space-y-2">
              {formations.map(({ name, description }) => (
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
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tactical Styles</h2>
            <div className="space-y-2">
              {tactics.map(({ name, type }) => (
                <div
                  key={name}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <p className="font-medium text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Board */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="aspect-[4/3] bg-green-800 rounded-lg relative">
              {/* Field Markings */}
              <div className="absolute inset-0 p-4">
                <div className="border-2 border-white/50 h-full rounded-lg relative">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/50 rounded-full" />
                  {/* Center Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/50" />
                  {/* Penalty Areas */}
                  <div className="absolute top-1/4 left-0 w-1/6 h-2/4 border-2 border-l-0 border-white/50" />
                  <div className="absolute top-1/4 right-0 w-1/6 h-2/4 border-2 border-r-0 border-white/50" />
                </div>
              </div>

              {/* Formation Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/75 text-xl font-semibold">
                  {selectedFormation}
                </p>
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