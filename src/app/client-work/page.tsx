import Link from "next/link";
import { Container } from "@/components/container";
import { FreelanceClientCards } from "@/components/freelance-client-cards";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Client Work"),
  description: "Selected freelance client work by Vipin Gautam. Web applications built from requirements to deployment and maintenance.",
  path: "/client-work",
});

export default function ClientWorkPage() {
  return (
    <div className="space-y-10 pb-20 pt-8">
      <Container>
        <Link href="/" className="text-sm text-secondary transition-colors hover:text-foreground">← Back to home</Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Client Work</h1>
        <p className="mt-3 max-w-xl text-secondary">Selected applications built for clients, from understanding their requirements to launch and ongoing support.</p>
      </Container>
      <Container>
        <FreelanceClientCards />
      </Container>
    </div>
  );
}
