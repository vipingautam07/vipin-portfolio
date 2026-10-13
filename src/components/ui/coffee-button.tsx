"use client";

import { useState } from "react";
import { Coffee } from "@phosphor-icons/react";
import { Liquid, type Colors } from "@/components/ui/liquid-gradient";

const colors: Colors = {
  color1: "#FFF7D6", color2: "#B85B08", color3: "#F4B942",
  color4: "#FFF2BD", color5: "#FFE9A0", color6: "#F3C86A",
  color7: "#D8750B", color8: "#F7A51A", color9: "#F5BF35",
  color10: "#FFE2A0", color11: "#C46B0A", color12: "#F8D58A",
  color13: "#D48A12", color14: "#FFD974", color15: "#F7D69A",
  color16: "#B87312", color17: "#EBA620",
};

export function CoffeeButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative inline-flex h-10 w-36 shrink-0 items-center justify-center rounded-xl outline-none transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background min-[360px]:w-40 sm:w-44"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 opacity-25 blur-md transition-all duration-500 group-hover:opacity-50 group-focus-visible:opacity-50" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl border border-amber-200/60 bg-[#EEAC25] shadow-[0_2px_8px_rgba(148,82,8,0.16)]">
        <span className="absolute inset-0 opacity-75 transition-opacity duration-300 group-hover:opacity-100"><Liquid isHovered={hovered} colors={colors} /></span>
        <span className="absolute inset-0 rounded-xl border border-white/30" />
        <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
      <span className="relative z-10 flex items-center gap-1.5 px-2 text-xs font-semibold tracking-wide text-[#3B2009] min-[360px]:gap-2 min-[360px]:text-sm">
        <Coffee className="size-4 shrink-0 transition-transform duration-300 group-hover:-rotate-12 min-[360px]:size-5" weight="fill" aria-hidden="true" />
        Buy me a coffee
      </span>
    </a>
  );
}
