import { useState } from "react";

export default function KursSeite({ data }) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto pt-[150px] pb-[150px]">
      <div className="text-3xl pb-[50px]">AEVO Kurs – Ausbilder-Eignung erfolgreich bestehen</div>
      {data.map(({ id, title, content }) => (
        <div key={id} className="border-b">
          <button
            onClick={() => toggle(id)}
            className="bg-[#ebebeb] w-full py-3 text-left text-xl font-bold flex justify-between items-center focus:outline-none p-[20px]"
          >
            <span>{title}</span>
            <span>{openId === id ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 whitespace-pre-wrap ${
              openId === id ? "py-2" : "max-h-0"
            }`}
          >
            <p className="px-2">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}