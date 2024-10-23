import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Activity, Layout, BarChart2, Video, Users } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VideoAnalysis from './components/VideoAnalysis';
import PlayerMetrics from './components/PlayerMetrics';
import TacticalBoard from './components/TacticalBoard';

function App() {
  const menuItems = [
    { name: 'Dashboard', icon: <Layout className="w-5 h-5" />, path: '/' },
    { name: 'Video Analysis', icon: <Video className="w-5 h-5" />, path: '/video' },
    { name: 'Player Metrics', icon: <BarChart2 className="w-5 h-5" />, path: '/metrics' },
    { name: 'Tactical Board', icon: <Users className="w-5 h-5" />, path: '/tactics' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <Activity className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">REAI</h1>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/video" element={<VideoAnalysis />} />
            <Route path="/metrics" element={<PlayerMetrics />} />
            <Route path="/tactics" element={<TacticalBoard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;