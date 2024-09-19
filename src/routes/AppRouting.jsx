import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/admin/Dashboard';
import { Menu } from '../components/public/Menu';

export const AppRouting = () => {
  return (
    <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/" element={<Menu />} />
    </Routes>
  );
}
