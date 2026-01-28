export default function QuizWidget() {
  const iconUrl = "/svg/icons/admin.svg";

  return (
    <div className="bg-ocean-600 flex w-full rounded-xl overflow-hidden">
      <div className="bg-ocean-400 p-4 flex items-center justify-center relative">
        <img
          src={iconUrl}
          alt="Quiz icon"
          className="w-16 h-16 bg-white p-1 rounded-full"
        />
      </div>
      <div className="flex-1 text-white  p-4">
        <h2 className="font-bold text-2xl">Titre</h2>
        <p>Description</p>
      </div>
      <div className="bg-ocean-900 flex items-center justify-center p-4 relative ">
        <img src="/svg/icons/arrow.svg" alt="Flèche" className="w-12 h-12" />
      </div>
    </div>
  );
}
