import React from 'react';
import { MatchCounter } from './MatchCounter';

import PassionLogo from '../../assets/Logo/logo.png';

import { WinRate } from './WinRate';
import { Match } from './Match';
import { Commitment } from './Commitment';

const Home: React.FC = () => {
  const Head = () => (
    <div className="flex flex-1 items-center justify-between">
      <MatchCounter />
      <img className="flex w-1/2" src={PassionLogo} />
      <WinRate />
    </div>
  );

  const Body = () => (
    <div className="flex flex-[3] flex-col gap-10">
      <Match />
      <Commitment />
    </div>
  );

  return (
    <div
      style={{
        backgroundImage: `url(https://marketplace.canva.com/EAFW7eSaHnY/1/0/900w/canva-blue-abstract-wave-phone-wallpaper-k7iCjgKKe80.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex h-screen flex-col gap-4 px-10 py-8"
    >
      <Head />
      <Body />
    </div>
  );
};

export default Home;
