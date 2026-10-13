import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function ClientWorkLink() {
  return (
    <div className="mt-6 flex justify-center">
      <Link href="/client-work" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted">
        See client projects
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
