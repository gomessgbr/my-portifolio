interface ICardProps {
  name: string;
  details?: string;
  tags?: string[];
  preset?: "sm" | "md";
  icon?: string;
}

export function Card({ name, details, icon, preset = "md", tags }: ICardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-white">
      <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <span className="font-bold text-xl mb-2">{name}</span>
        {details && <p className="text-gray-700 text-base">{details}</p>}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
}
