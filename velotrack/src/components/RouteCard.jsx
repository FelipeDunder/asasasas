import React from 'react';
import { MapPin, Navigation, Star } from 'lucide-react';

const RouteCard = ({ route }) => {
    const difficultyColor = {
        'Fácil': 'bg-green-100 text-green-700',
        'Moderada': 'bg-yellow-100 text-yellow-700',
        'Difícil': 'bg-red-100 text-red-700'
    }[route.difficulty];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            {/* Image */}
            <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${difficultyColor}`}>
                    {route.difficulty}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">{route.title}</h3>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <MapPin size={14} />
                                <span>{route.location}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                            <Star size={16} fill="currentColor" />
                            <span>{route.rating}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase">Distância</p>
                            <p className="font-bold text-brand-dark">{route.stats.distance}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase">Elevação</p>
                            <p className="font-bold text-brand-dark">{route.stats.elevation}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Navigation size={12} />
                        {route.usage}
                    </span>
                    <button className="px-4 py-2 bg-brand text-white text-sm font-bold rounded-lg hover:bg-brand-dark transition-colors">
                        Ver Rota
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RouteCard;
