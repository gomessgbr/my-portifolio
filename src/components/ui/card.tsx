interface ICardProps {
  name: string;
  details?: string;
  tags?: string[];
  preview?: string;
}

export function Card({ name, details, preview, tags }: ICardProps) {
  return (
    <div className="w-[384px] h-[327px] bg-[#0B0B0B] rounded-lg border border-[#4169E1] flex flex-col justify-between p-4 hover:scale-[1.02] transition-transform">
      <div className="w-full h-[160px] bg-[#4169E1] rounded-md overflow-hidden mb-4">
        <img
          className="w-full h-full object-cover"
          src={preview || "/img/card-top.jpg"}
          alt={name}
        />
      </div>

      <div className="text-white">
        <h3 className="font-semibold text-lg">{name}</h3>
        {details && <p className="text-sm text-gray-300 mt-1">{details}</p>}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
