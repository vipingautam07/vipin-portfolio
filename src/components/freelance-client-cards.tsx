import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "@phosphor-icons/react/dist/ssr";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { freelanceClients } from "@/config/freelance-clients";

export function FreelanceClientCards() {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-lg font-bold tracking-tight">Selected client work</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {freelanceClients.map((client) => {
          const content = (
            <>
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-muted/50">
                {client.preview ? (
                  <div
                    className="absolute inset-x-0"
                    style={{
                      top: `${-100 * (client.previewInset ?? 0) / (1 - (client.previewInset ?? 0))}%`,
                      height: `${100 / (1 - (client.previewInset ?? 0))}%`,
                    }}
                  >
                    <Image src={client.preview} alt={`${client.title} website preview`} fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]" />
                  </div>
                ) : (
                  <Globe className="size-10 text-secondary/30" weight="duotone" aria-hidden="true" />
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="text-base font-bold tracking-tight">{client.title}</h3>
                {client.website && <ArrowUpRight className="size-4 text-secondary" aria-hidden="true" />}
              </div>
            </>
          );
          return (
            <LiquidGlassCard key={client.title} borderRadius="18px" blurIntensity="md" className="group min-w-0">
              {client.website ? (
                <Link href={client.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.title}`}>{content}</Link>
              ) : content}
            </LiquidGlassCard>
          );
        })}
      </div>
    </div>
  );
}
