import { reposPreviews } from "../../services";

interface ICardProps {
  id: number;
  name: string;
  details?: string;
  tags?: string[];
  url: string;
}

export function Card({ name, details, tags, url, id }: ICardProps) {
  const preview =
    reposPreviews.find((repo) => repo.id === id)?.preview ??
    "/projects/default.png";
  return (
    <a
      className="w-[384px] h-[327px] bg-[#0B0B0B] cursor-pointer rounded-lg border border-[#4169E1] flex flex-col justify-between p-4 hover:scale-[1.02] transition-transform"
      href={url}
      target="_blanket"
    >
      <div className="w-full h-[160px] bg-[#4169E1] rounded-md overflow-hidden mb-4">
        <img className="w-full h-full object-cover" src={preview} alt={name} />
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
    </a>
  );
}
