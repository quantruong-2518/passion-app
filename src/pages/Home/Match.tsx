export const Match = () => {
  const Head = () => (
    <div className="flex items-center justify-between border-b-2 pb-6">
      <div className="font-bold">- Trận 1 -</div>
      <div>19h - 05/01/2025</div>
    </div>
  );
  const Body = () => {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <strong>PassionFC</strong> vs <strong>Sparta</strong>
            </div>
            <div>Sân đấu: Việt Hàn</div>
          </div>

          <div className="text-6xl">10 : 8</div>
        </div>

        <div className="flex justify-between">
          <button className="rounded-lg border border-gray-400 px-10 py-2">
            Ghi điểm
          </button>
          <button className="rounded-lg border border-gray-400 px-10 py-2">
            Thủng lưới
          </button>
          <button className="rounded-lg border border-gray-400 bg-blue-400 px-10 py-2 text-white">
            Kết thúc trận
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-4 flex flex-col gap-6 rounded-2xl bg-white p-10 text-4xl shadow-2xl shadow-slate-400">
      <Head />
      <Body />
    </div>
  );
};
