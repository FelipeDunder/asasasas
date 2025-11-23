import React from 'react';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6">Detalhes da Atividade</h1>
            <p className="text-gray-400">ID da Atividade: {id}</p>
        </div>
    );
};

export default ActivityDetail;
