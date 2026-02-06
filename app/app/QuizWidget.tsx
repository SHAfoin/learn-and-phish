import Link from "next/link";

interface QuizWidgetProps {
  title: string;
  description: string;
  iconUrl: string;
  url: string;
}

export default function QuizWidget({
  title,
  description,
  iconUrl,
  url,
}: QuizWidgetProps) {
  return (
    <div className="bg-ocean-600 flex w-full rounded-xl overflow-hidden">
      <div className="bg-ocean-400 p-4 flex items-center pr-10 justify-center relative">
        <img
          src={iconUrl}
          alt="Quiz icon"
          className="w-16 h-16 bg-white p-1 rounded-full"
        />
        <div className="absolute top-0 right-0  h-full w-8">
          <svg
            className="h-full w-full"
            viewBox="0 0 30 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 10 0 Q 25 17 11 33 T 10 66 T 10 100 L 40 100 L 40 0 Z"
              fill="#27AED3"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1 text-white  p-4">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="bg-ocean-900 flex items-center justify-center p-4 pl-14 relative ">
        <div className="absolute top-0 left-0 h-full w-8">
          <svg
            className="h-full w-full"
            viewBox="0 0 40 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100V0H30Q17 17 30 34T29 67t1 33Z" fill="#27AED3" />
          </svg>
        </div>
        <Link href={url}>
          <img 
            src="/svg/icons/arrow.svg" 
            alt="Flèche" 
            className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-x-1" 
          />
        </Link>
      </div>
    </div>
  );
}
