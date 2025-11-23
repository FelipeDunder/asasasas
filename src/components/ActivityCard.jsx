import React from 'react';
import { ThumbsUp, MessageSquare, Bike, Mountain } from 'lucide-react';

const ActivityCard = ({ activity }) => {
    const isRoad = activity.type === 'Estrada';

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={activity.user.avatar}
                        alt={activity.user.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-brand/20"
                    />
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm">{activity.user.name}</h3>
                        <p className="text-xs text-gray-500">{activity.timeAgo}</p>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${isRoad ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {isRoad ? <Bike size={12} /> : <Mountain size={12} />}
                    {activity.type}
                </span>
            </div>

            {/* Content */}
            <div className="px-4 pb-3">
                <h4 className="font-medium text-gray-800 mb-3">{activity.title}</h4>
                <div className="relative rounded-xl overflow-hidden aspect-video w-full">
                    <img
                        src={activity.image}
                        alt="Activity Map"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="px-4 pb-4">
                <div className="grid grid-cols-4 gap-2 bg-bg-primary rounded-xl p-3">
                    <StatItem label="Distância" value={activity.stats.distance} />
                    <StatItem label="Tempo" value={activity.stats.time} />
                    <StatItem label="Elevação" value={activity.stats.elevation} />
                    <StatItem label="Vel. Média" value={activity.stats.avgSpeed} />
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-50 flex items-center gap-6 text-gray-500">
                <button className="flex items-center gap-2 text-sm hover:text-brand transition-colors">
                    <ThumbsUp size={18} />
                    <span>{activity.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-sm hover:text-brand transition-colors">
                    <MessageSquare size={18} />
                    <span>{activity.comments}</span>
                </button>
            </div>
        </div>
    );
};

const StatItem = ({ label, value }) => (
    <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 uppercase tracking-wide">{label}</span>
        <span className="text-sm font-bold text-brand-dark">{value}</span>
    </div>
);

export default ActivityCard;
