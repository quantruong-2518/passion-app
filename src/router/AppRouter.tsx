import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load các trang
const Home = lazy(() => import('../pages/Home'));
const Player = lazy(() => import('../pages/Player'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
