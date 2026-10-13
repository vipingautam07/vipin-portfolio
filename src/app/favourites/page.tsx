import { Container } from "@/components/container";
import { MediaCoverGrid } from "@/components/media-cover-grid";
import { favouriteMovies, favouriteSeries } from "@/config/favourites";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Favourites"),
  description:
    "A personal collection from Vipin Gautam, coming soon.",
  path: "/favourites",
});

export default function FavouritesPage() {
  return (
    <div className="pb-16 pt-8">
      <Container className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Favourites</h1>
          <p className="mt-3 max-w-xl text-secondary">
            My personal collection is coming soon. Explore my projects to see what I&apos;m building.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Movies
          </h2>
          <MediaCoverGrid items={favouriteMovies} />
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Series
          </h2>
          <MediaCoverGrid items={favouriteSeries} />
        </div>
      </Container>
    </div>
  );
}
