import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import RoutesPage from './pages/Routes';
import Profile from './pages/Profile';
import EmployeeArea from './pages/EmployeeArea';
import Store from './pages/Store';
import ActivityDetail from './pages/ActivityDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="stats" element={<Stats />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="employee" element={<EmployeeArea />} />
          <Route path="store" element={<Store />} />
          <Route path="activity/:id" element={<ActivityDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
