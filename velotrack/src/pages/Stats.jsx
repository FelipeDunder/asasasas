import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TrendingUp, Calendar, Award, Zap } from 'lucide-react';
import { weeklyStats } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
    const chartData = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
            {
                label: 'Distância (km)',
                data: [25, 0, 42, 15, 0, 80, 56],
                backgroundColor: '#8B5CF6',
                borderRadius: 8,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
        scales: {
            y: { beginAtZero: true, grid: { color: '#F3F4F6' } },
            x: { grid: { display: false } }
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-brand-dark">Suas Estatísticas</h1>
                <p className="text-gray-500">Acompanhe seu progresso e desempenho</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
                <StatSummaryCard
                    title="Esta Semana"
                    value={weeklyStats.distance}
                    sub="+12% vs anterior"
                    icon={<TrendingUp size={18} />}
                    color="bg-blue-500"
                />
                <StatSummaryCard
                    title="Pedaladas"
                    value={weeklyStats.rides}
                    sub="Este ano"
                    icon={<Calendar size={18} />}
                    color="bg-purple-500"
                />
                <StatSummaryCard
                    title="Elevação"
                    value={weeklyStats.elevation}
                    sub="Este mês"
                    icon={<Award size={18} />}
                    color="bg-orange-500"
                />
                <StatSummaryCard
                    title="Vel. Média"
                    value={weeklyStats.avgSpeed}
                    sub="Recorde pessoal"
                    icon={<Zap size={18} />}
                    color="bg-green-500"
                />
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-brand-dark">Visão Geral de Atividades</h3>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button className="px-3 py-1 text-xs font-medium bg-white text-brand shadow-sm rounded-md">Semana</button>
                        <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700">Mês</button>
                    </div>
                </div>
                <div className="h-64">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

const StatSummaryCard = ({ title, value, sub, icon, color }) => (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden">
        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white ${color} shadow-md`}>
            {icon}
        </div>
        <div>
            <p className="text-[11px] text-gray-500 font-medium mb-1 uppercase tracking-wide">{title}</p>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">{value}</h3>
            <p className="text-[10px] text-gray-400 mt-1 font-medium">{sub}</p>
        </div>
    </div>
);

export default Stats;
