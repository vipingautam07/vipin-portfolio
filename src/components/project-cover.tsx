import Image from "next/image";

export function ProjectCover({ src, title, inset = 0, bottomInset = 0, fit = "cover", sizes }: {
  src: string;
  title: string;
  inset?: number;
  bottomInset?: number;
  fit?: "cover" | "contain";
  sizes: string;
}) {
  return (
    <div className="absolute inset-x-0" style={{ top: `${-100 * inset / (1 - inset - bottomInset)}%`, height: `${100 / (1 - inset - bottomInset)}%` }}>
      <Image src={src} alt={`${title} preview`} fill sizes={sizes} className="object-top transition-transform duration-500 group-hover:scale-[1.035]" style={{ objectFit: fit }} />
    </div>
  );
}
