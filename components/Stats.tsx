

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100 shadow-sm">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Über 90 %
            </h2>
            <p className="text-lg md:text-2xl text-slate-700 font-medium leading-relaxed">
              unserer Teilnehmer bestehen beim <span className="text-blue-600 font-bold underline decoration-blue-300">ersten Versuch</span>.
            </p>
          </div>
          <div className="flex-shrink-0 flex gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-500 shadow-md">
              <i className="fas fa-check-circle text-3xl"></i>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-md">
              <i className="fas fa-certificate text-3xl"></i>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-md">
              <i className="fas fa-star text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
