import { Container } from "@/components/container";
import { MediaCoverGrid } from "@/components/media-cover-grid";
import { books } from "@/config/books";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Books"),
  description:
    "Vipin Gautam’s reading shelf.",
  path: "/books",
});

export default function BooksPage() {
  return (
    <div className="pb-16 pt-8">
      <Container className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Books</h1>
          <p className="mt-3 max-w-xl text-secondary">
            My reading shelf is coming soon. In the meantime, explore my projects and work.
          </p>
        </div>

        <MediaCoverGrid items={books} getSubtitle={(book) => book.author} />
      </Container>
    </div>
  );
}
