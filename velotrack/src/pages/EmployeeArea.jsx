import React, { useState } from 'react';
import { Wallet, Gift, Briefcase, Plus, Clock, Trophy, ShoppingBag, Lightbulb, CheckCircle } from 'lucide-react';

const EmployeeArea = () => {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="space-y-6">
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-[32px] p-6 text-white shadow-xl shadow-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <Wallet size={16} className="text-white" />
                            <span className="text-sm font-medium">Saldo Total</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-yellow-400/20 text-yellow-300 px-3 py-1.5 rounded-full border border-yellow-400/30">
                            <Trophy size={14} />
                            <span className="text-xs font-bold uppercase tracking-wide">Inovador Ouro</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-1">2450 <span className="text-2xl font-medium opacity-80">AC</span></h1>
                        <p className="text-purple-200 text-sm">AlbaCoins Disponíveis</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                            <div className="flex items-center gap-2 text-green-300 mb-1">
                                <span className="text-xs font-medium">↗ Este Mês</span>
                            </div>
                            <p className="text-xl font-bold">+380 AC</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                            <div className="flex items-center gap-2 text-purple-200 mb-1">
                                <Briefcase size={12} />
                                <span className="text-xs font-medium">Projetos</span>
                            </div>
                            <p className="text-xl font-bold">12</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Tabs */}
            <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex relative">
                <button
                    onClick={() => setActiveTab('projects')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'projects'
                        ? 'bg-purple-50 text-purple-600 shadow-sm'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <Lightbulb size={18} />
                    Projetos
                </button>
                <button
                    onClick={() => setActiveTab('store')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'store'
                        ? 'bg-purple-50 text-purple-600 shadow-sm'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <ShoppingBag size={18} />
                    Loja
                </button>
            </div>

            {/* Content */}
            {activeTab === 'projects' ? <ProjectsList /> : <RewardsStore />}
        </div>
    );
};

const ProjectsList = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="text-lg font-bold text-gray-900">Meus Projetos</h2>
                <p className="text-xs text-gray-500">Submeta ideias e ganhe AlbaCoins</p>
            </div>
            <button className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-brand/30 flex items-center gap-2 transition-colors">
                <Plus size={16} />
                Novo
            </button>
        </div>

        <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Em Análise (2)</p>
            <ProjectCard
                title="Automatização de Relatórios"
                category="Tecnologia"
                date="Submetido em 21/11/2025"
                status="Análise"
            />
            <ProjectCard
                title="Melhoria no Controle de Qualidade"
                category="Processos"
                date="Submetido em 20/11/2025"
                status="Análise"
            />

            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">Aprovados (1)</p>
            <ProjectCard
                title="Redução de Desperdício"
                category="Sustentabilidade"
                date="Aprovado em 15/11/2025"
                status="Aprovado"
                reward="+500 AC"
            />
        </div>
    </div>
);

const ProjectCard = ({ title, category, date, status, reward }) => (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-gray-800 text-sm leading-tight">{title}</h3>
            {status === 'Análise' ? (
                <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Clock size={10} /> ANÁLISE
                </span>
            ) : (
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <CheckCircle size={10} /> APROVADO
                </span>
            )}
        </div>
        <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-medium border border-gray-200">
                {category}
            </span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <span className="text-[10px] text-gray-400">{date}</span>
            {reward && <span className="text-xs font-bold text-brand">{reward}</span>}
        </div>
    </div>
);

const RewardsStore = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Loja de Prêmios</h2>
            <span className="bg-purple-100 text-brand text-xs font-bold px-3 py-1 rounded-full">
                2450 AC Disponíveis
            </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <StoreItem
                image="https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80&w=300"
                name="Camisa Pro Team"
                price="1200 AC"
            />
            <StoreItem
                image="https://images.unsplash.com/photo-1529511582893-2d7e684dd128?auto=format&fit=crop&q=80&w=300"
                name="Capacete Aero"
                price="2000 AC"
            />
            <StoreItem
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300"
                name="Fone Sport"
                price="800 AC"
            />
            <StoreItem
                image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=300"
                name="Kit Nutrição"
                price="450 AC"
            />
        </div>
    </div>
);

const StoreItem = ({ image, name, price }) => (
    <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm group">
        <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-gray-100 relative">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-brand hover:bg-brand hover:text-white transition-colors">
                <Plus size={16} />
            </button>
        </div>
        <h3 className="font-bold text-gray-800 text-sm mb-1">{name}</h3>
        <p className="text-brand font-bold text-xs">{price}</p>
    </div>
);

export default EmployeeArea;
