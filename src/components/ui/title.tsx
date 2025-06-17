interface ITitleProps {
  text: string;
}

export function Title({ text }: ITitleProps) {
  return <h2 className="font-semibold text-5xl">{text}</h2>;
}
