import React from 'react';
import RouteCard from '../components/RouteCard';
import { routes } from '../data/mockData';
import { Search } from 'lucide-react';

const Routes = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-brand-dark">Rotas Populares</h1>
                    <p className="text-gray-500">Descubra rotas de ciclismo na sua região</p>
                </div>
                <button className="px-4 py-2 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/30 hover:bg-brand-dark transition-colors flex items-center gap-2">
                    <Search size={18} />
                    Buscar Rotas
                </button>
            </div>

            <div className="space-y-6">
                {routes.map(route => (
                    <RouteCard key={route.id} route={route} />
                ))}
            </div>
        </div>
    );
};

export default Routes;
