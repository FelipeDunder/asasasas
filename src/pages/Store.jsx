import React from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';

const Store = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Loja Oficial</h1>
                <p className="text-gray-500">Equipamentos de alta performance para seu pedal.</p>
            </div>

            {/* Search & Filter */}
            <div className="flex gap-3">
                <div className="flex-1 bg-white flex items-center px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                    <Search size={20} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    />
                </div>
                <button className="bg-white w-12 flex items-center justify-center rounded-xl border border-gray-200 shadow-sm text-gray-600 hover:text-brand hover:border-brand transition-colors">
                    <Filter size={20} />
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4">
                <ProductCard
                    image="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=400"
                    title="Jersey Elite Aero"
                    description="Tecido italiano ultra-leve para máxima velocidade."
                    price="R$ 489,90"
                />
                <ProductCard
                    image="https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80&w=400"
                    title="Capacete S-Works"
                    description="Proteção MIPS com ventilação otimizada."
                    price="R$ 1.599,00"
                />
                <ProductCard
                    image="https://images.unsplash.com/photo-1516562309702-e9722a29d45a?auto=format&fit=crop&q=80&w=400"
                    title="Sapatilha Carbon"
                    description="Solado 100% carbono, rigidez nível 12."
                    price="R$ 2.190,00"
                />
                <ProductCard
                    image="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=400"
                    title="Luvas Gel Pro"
                    description="Amortecimento estratégico para longas distâncias."
                    price="R$ 199,90"
                />
            </div>
        </div>
    );
};

const ProductCard = ({ image, title, description, price }) => (
    <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
        <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-gray-50 relative group">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>

        <div className="flex-1 flex flex-col">
            <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
            <p className="text-[10px] text-gray-500 leading-tight mb-3 line-clamp-2">{description}</p>

            <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-bold text-green-600">{price}</span>
                <button className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-brand transition-colors shadow-md">
                    <ShoppingCart size={16} />
                </button>
            </div>
        </div>
    </div>
);

export default Store;
