import PlayerImage from '../../assets/Ava/VuHoang.png';

export const Commitment = () => {
  return (
    <div className="mx-4 flex flex-col gap-2 rounded-2xl bg-white p-8 text-4xl shadow-2xl shadow-slate-400">
      <div className="flex gap-2">
        <button className="rounded-lg border bg-gray-400 px-10 py-2 text-white">
          Top goal
        </button>
        <button className="rounded-lg border border-gray-400 px-10 py-2">
          Top kiến tạo
        </button>
        <button className="rounded-lg border border-gray-400 px-10 py-2">
          Thủ môn
        </button>
      </div>

      {/* Top 1 */}
      <div className="flex flex-1 items-center justify-between rounded-lg p-10">
        <div className="flex items-center gap-4">
          <strong className="text-8xl text-blue-400">1</strong>
          <img className="h-[10rem]" src={PlayerImage} />
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold">Cầu thủ: Vũ Hoàng</div>
          <div>G: 10 - A: 2 - P: 12</div>
          <div>Rate: 20%</div>
        </div>
      </div>

      {/* Top 2 & 3 */}
      <div className="flex flex-1 items-center justify-between rounded-lg p-10">
        <div className="flex items-center gap-4">
          <strong className="text-7xl">2</strong>
          <img className="h-[8rem]" src={PlayerImage} />
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold">Cầu thủ: Kobbie Vũ</div>
          <div>G: 10 - A: 2 - P: 12</div>
          <div>Rate: 20%</div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-lg p-10">
        <div className="flex items-center gap-4">
          <strong className="text-7xl">3</strong>
          <img className="h-[8rem]" src={PlayerImage} />
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold">Cầu thủ: Fenaldo Voo</div>
          <div>G: 10 - A: 2 - P: 12</div>
          <div>Rate: 20%</div>
        </div>
      </div>

      <button>Xem thêm</button>
    </div>
  );
};
