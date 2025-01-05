import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
