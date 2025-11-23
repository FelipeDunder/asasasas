import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Activity,
    User,
    Map as MapIcon,
    Menu,
    BarChart,
    Briefcase,
    ShoppingBag
} from 'lucide-react';

const MainLayout = () => {
    return (
        // App Container - Centered Mobile View
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-[480px] h-screen bg-bg-primary flex flex-col shadow-2xl relative overflow-hidden">

                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center font-bold text-white">
                            <Activity size={20} />
                        </div>
                        <span className="text-lg font-bold text-brand-dark">AlbaRoute</span>
                    </div>
                    <button className="text-gray-500 hover:text-brand transition-colors">
                        <Menu size={24} />
                    </button>
                </header>

                {/* Main Content - Scrollable Area */}
                <main className="flex-1 overflow-y-auto scrollbar-hide bg-bg-primary">
                    <div className="p-4 pb-6">
                        <Outlet />
                    </div>
                </main>

                {/* Bottom Navigation */}
                <nav className="h-16 bg-white border-t border-gray-200 flex justify-around items-center shrink-0 z-20">
                    <MobileNavItem to="/dashboard" icon={<LayoutDashboard size={24} />} label="Início" />
                    <MobileNavItem to="/store" icon={<ShoppingBag size={24} />} label="Loja" />
                    <MobileNavItem to="/employee" icon={<Briefcase size={24} />} label="Func." />
                    <MobileNavItem to="/stats" icon={<BarChart size={24} />} label="Stats" />
                    <MobileNavItem to="/profile" icon={<User size={24} />} label="Perfil" />
                </nav>

            </div>
        </div>
    );
};

const MobileNavItem = ({ to, icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive
                ? 'text-brand'
                : 'text-gray-400 hover:text-gray-600'
            }`
        }
    >
        {icon}
        <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
);

export default MainLayout;
