import React from 'react';
import { MatchCounter } from './MatchCounter';

import PassionLogo from '../../assets/Logo/logo.png';
import { WinRate } from './WinRate';
import { Match } from './Match';
import { Commitment } from './Commitment';

const Home: React.FC = () => {
  const Head = () => (
    <div className="flex h-1/4 items-center justify-between p-8 text-red-700">
      <MatchCounter />
      <img className="flex" src={PassionLogo} />
      <WinRate />
    </div>
  );

  const Body = () => (
    <div>
      <Match />
      <Commitment />
    </div>
  );

  return (
    <div>
      <Head />
      <Body />
    </div>
  );
};

export default Home;
