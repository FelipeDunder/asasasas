import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { activities } from '../data/mockData';
import { Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Feed de Atividades</h1>
          <p className="text-gray-500">Veja o que seus amigos estão pedalando</p>
        </div>
        <button className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand-dark transition-colors">
          <Plus size={24} />
        </button>
      </div>

      <div className="space-y-6">
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
