"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, X } from "@phosphor-icons/react";
import { ClientWorkLink } from "@/components/client-work-link";
import { getTechIcon } from "@/lib/tech-icons";
import { Container } from "@/components/container";
import { achievements, type Achievement } from "@/config/achievements";
import { experience, type ExperienceItem } from "@/config/experience";

type FeaturedItem =
  | {
      type: "experience";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    }
  | {
      type: "achievement";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    };

function experienceToFeatured(item: ExperienceItem): FeaturedItem {
  return {
    type: "experience",
    title: item.company,
    subtitle: item.role,
    period: item.periodLong,
    location: item.locationLong.trim(),
    image: item.image ?? "/assets/work/freelance.svg",
    details: item.details ?? [],
    tech: item.tech ?? [],
    href: "/work",
  };
}

function achievementToFeatured(item: Achievement): FeaturedItem {
  return {
    type: "achievement",
    title: item.organization,
    subtitle: item.title,
    period: item.periodLong,
    location: "Achievement",
    image: item.image ?? "/assets/work/achievement.svg",
    details: item.details ?? [],
    tech: [],
    href: `/achievements/${item.slug}`,
  };
}

function TechPill({ name }: { name: string }) {
  const icon = getTechIcon(name);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/70 px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm">
      {icon && <Image
        src={icon.startsWith("/") ? icon : `https://cdn.simpleicons.org/${icon}`}
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0"
        unoptimized
      />}
      {name}
    </span>
  );
}

function FeaturedExperienceItem({
  item,
  delay,
  open,
  onToggle,
}: {
  item: FeaturedItem;
  delay: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="animate-in-up-on-view py-7"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid gap-4 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-start">
        <Link
          href={item.href}
          className="relative size-16 overflow-hidden rounded-xl bg-muted shadow-sm transition-transform hover:scale-[1.02]"
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </Link>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={item.href}
              className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-secondary"
            >
              {item.title}
            </Link>
          </div>
          <p className="mt-1 text-xl text-foreground">{item.subtitle}</p>
        </div>

        <div className="text-left text-base text-secondary sm:min-w-[190px] sm:text-right sm:text-lg">
          <p>{item.period}</p>
          <p className="mt-1">{item.location}</p>
          <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={`featured-${item.title.replaceAll(" ", "-")}`} aria-label={`${open ? "Collapse" : "Expand"} ${item.title} experience`} className="mt-2 inline-flex size-8 items-center justify-center rounded-md text-secondary transition-colors hover:bg-muted hover:text-foreground">
            {open ? <X className="size-4" /> : <Plus className="size-4" />}
          </button>
        </div>
      </div>

      {open && <div id={`featured-${item.title.replaceAll(" ", "-")}`}>
      {item.tech.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {item.tech.map((tech) => (
              <TechPill key={`${item.title}-${tech}`} name={tech} />
            ))}
          </div>
        </div>
      )}

      {item.details.length > 0 && (
        <ul className="mt-6 space-y-2 text-lg leading-relaxed text-secondary">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-[0.65em] size-1.5 shrink-0 bg-secondary/70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
      {item.title === "Freelance" && <ClientWorkLink />}
      </div>}
    </article>
  );
}

export function FeaturedExperienceSection() {
  const [openItem, setOpenItem] = useState<string | null>(experience[0]?.company ?? null);
  const featuredItems = [
    ...experience.map(experienceToFeatured),
    ...achievements.filter((item) => item.featured).map(achievementToFeatured),
  ].slice(0, 2);

  return (
    <Container>
      <div className="mb-8">
        <p className="text-sm text-secondary">Featured</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      <div className="space-y-6">
        {featuredItems.map((item, index) => {
          const itemId = `${item.type}-${item.title}`;

          return (
            <FeaturedExperienceItem
              key={itemId}
              item={item}
              delay={0.08 + index * 0.08}
              open={openItem === item.title}
              onToggle={() => setOpenItem((current) => current === item.title ? null : item.title)}
            />
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/work"
          className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
        >
          Show all work experiences
        </Link>
      </div>
    </Container>
  );
}
