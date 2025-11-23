export const currentUser = {
    name: "João da Silva",
    avatar: "https://i.pravatar.cc/150?u=joao",
    memberSince: "Jan 2024",
    stats: {
        rides: 156,
        distance: "2.847 km",
        elevation: "45.280 m",
        time: "89h 23m"
    }
};

export const activities = [
    {
        id: 1,
        user: currentUser,
        timeAgo: "Há 2 horas",
        title: "Pedal Matinal - Rota Litorânea",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop",
        stats: {
            distance: "45.2 km",
            time: "1h 38m",
            elevation: "580 m",
            avgSpeed: "27.7 km/h"
        },
        likes: 24,
        comments: 5,
        type: "Estrada"
    },
    {
        id: 2,
        user: {
            name: "Maria Santos",
            avatar: "https://i.pravatar.cc/150?u=maria"
        },
        timeAgo: "Há 5 horas",
        title: "Trilha de Aventura - Serra da Mantiqueira",
        image: "https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?q=80&w=1000&auto=format&fit=crop",
        stats: {
            distance: "28.4 km",
            time: "2h 15m",
            elevation: "1250 m",
            avgSpeed: "12.6 km/h"
        },
        likes: 42,
        comments: 12,
        type: "Mountain Bike"
    }
];

export const routes = [
    {
        id: 1,
        title: "Volta Avenida Litorânea",
        location: "Rio de Janeiro, RJ",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop",
        difficulty: "Moderada",
        stats: {
            distance: "45.2 km",
            elevation: "580 m"
        },
        rating: 4.8,
        usage: "1.234 pedaladas"
    },
    {
        id: 2,
        title: "Trilha da Serra",
        location: "Serra da Mantiqueira, MG",
        image: "https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?q=80&w=1000&auto=format&fit=crop",
        difficulty: "Difícil",
        stats: {
            distance: "32.8 km",
            elevation: "1250 m"
        },
        rating: 4.9,
        usage: "892 pedaladas"
    },
    {
        id: 3,
        title: "Circuito Parque Ibirapuera",
        location: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=1000&auto=format&fit=crop",
        difficulty: "Fácil",
        stats: {
            distance: "18.5 km",
            elevation: "120 m"
        },
        rating: 4.5,
        usage: "2.156 pedaladas"
    }
];

export const weeklyStats = {
    distance: "217 km",
    rides: 156,
    elevation: "3.480 m",
    avgSpeed: "28.4 km/h"
};

export const personalRecords = [
    { label: "Maior Distância", value: "128.5 km", date: "15 Out, 2024", color: "bg-blue-500" },
    { label: "Maior Elevação", value: "2.450 m", date: "22 Set, 2024", color: "bg-purple-500" },
    { label: "Maior Velocidade", value: "32.8 km/h", date: "3 Nov, 2024", color: "bg-orange-500" },
    { label: "Maior Duração", value: "5h 42m", date: "15 Out, 2024", color: "bg-green-500" }
];
