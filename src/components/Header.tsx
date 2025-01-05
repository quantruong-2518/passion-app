import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[6rem] gap-2 bg-gray-600 px-6 py-4 text-white shadow-2xl shadow-slate-300">
      <input
        className="h-full w-max flex-[4] rounded-lg p-4 text-3xl"
        type="text"
        value=""
        placeholder="Nhập tên cầu thủ bạn muốn tìm"
      />
      <button
        className="flex-1 rounded-lg bg-gray-400 p-4 text-3xl"
        type="submit"
      >
        Tìm kiếm
      </button>
    </header>
  );
};

export default Header;
