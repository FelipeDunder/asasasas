import React from 'react';
import { currentUser, personalRecords } from '../data/mockData';
import { Settings, Award, Trophy } from 'lucide-react';

const Profile = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative">
                <div className="absolute top-4 right-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50">
                        <Settings size={14} />
                        Editar Perfil
                    </button>
                </div>

                <div className="relative">
                    <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-brand/10"
                    />
                    <div className="absolute bottom-0 right-0 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                        Pro
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                    <p className="text-gray-500 text-sm mb-4">Membro desde {currentUser.memberSince}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12">
                        <StatBox label="Pedaladas" value={currentUser.stats.rides} />
                        <StatBox label="Distância Total" value={currentUser.stats.distance} />
                        <StatBox label="Elevação Total" value={currentUser.stats.elevation} />
                        <StatBox label="Tempo Total" value={currentUser.stats.time} />
                    </div>
                </div>
            </div>

            {/* Personal Records */}
            <div>
                <h2 className="text-lg font-bold text-brand-dark mb-4">Recordes Pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalRecords.map((record, index) => (
                        <div key={index} className={`${record.color} text-white p-5 rounded-2xl shadow-lg relative overflow-hidden group`}>
                            <div className="relative z-10">
                                <p className="text-white/80 text-sm font-medium mb-1">{record.label}</p>
                                <h3 className="text-2xl font-bold">{record.value}</h3>
                                <p className="text-white/60 text-xs mt-2 text-right">{record.date}</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div>
                <h2 className="text-lg font-bold text-brand-dark mb-4">Conquistas</h2>
                <div className="space-y-3">
                    <AchievementCard
                        title="Centurião"
                        desc="Complete um pedal de 100km"
                        icon={<Trophy size={20} />}
                        color="bg-amber-100 text-amber-600"
                    />
                    <AchievementCard
                        title="Escalador"
                        desc="Ganhe 1000m de elevação em um pedal"
                        icon={<Award size={20} />}
                        color="bg-blue-100 text-blue-600"
                    />
                </div>
            </div>
        </div>
    );
};

const StatBox = ({ label, value }) => (
    <div>
        <p className="text-2xl font-bold text-brand-dark">{value}</p>
        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
    </div>
);

const AchievementCard = ({ title, desc, icon, color }) => (
    <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
            {icon}
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900">{title}</h3>
                <span className="px-2 py-0.5 bg-brand/10 text-brand text-[10px] font-bold rounded-full">Conquistada</span>
            </div>
            <p className="text-sm text-gray-500">{desc}</p>
        </div>
    </div>
);

export default Profile;
