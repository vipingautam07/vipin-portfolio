# Vipin Gautam — Portfolio

Portfolio for a software engineer and freelance full stack developer based in Bhopal.

**Website:** [vipingautam.in](https://vipingautam.in) · **GitHub:** [@vipingautam07](https://github.com/vipingautam07)

Content is grounded in Vipin's resume: Kripanidhi Legal Services, freelance work since February 2023, Easecase, RGPV education, KinnectAI, BINKEYIT, and hackathon/community achievements. The existing Geist typography, grid background, glass cards, theme switch, and animations are retained.

## Run locally

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run build
npm start
```

## Content

- `src/config/hero.ts`: profile, project inquiry email, and social links
- `src/config/meta.ts`: canonical domain and search/social metadata
- `src/config/experience.ts`: employment and freelance experience
- `src/config/projects.ts`: project cards and verified repository/demo links
- `src/config/about.ts`: services, client proof, and background
- `src/config/resume.ts`: Google Drive view, preview, and download links
- `content/projects/`: project case studies
- `content/blog/`: practical client guidance
- `public/assets/vipin-gautam.jpg`: public GitHub profile photo
- `src/app/icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`: VG bookmark/app icons and share preview

The Books and Favourites routes retain their layouts but are omitted from navigation until personal selections are added.

## Deployment

The canonical URL is `https://vipingautam.in`. Deploy to a Next.js host and configure the domain there.

The visitor counter uses `data/visitors.json` locally. For production, configure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in your hosting environment.

The music card plays full audio directly through an HTML audio element, using the original vinyl and waveform controls. The supplied audio is in `public/assets/winning_speech.mp4` and `public/assets/lose_yourself.mp4`; the HTML audio player uses those MP4 audio tracks directly. Set source paths or direct audio URLs in `src/config/music.ts`. The availability endpoint disables playback until a source exists. There are no Spotify embeds.

`src/config/freelance-clients.ts` controls the cards on `/client-work`. Add each client website URL and preview image there; the cards are prepared with the client names from the resume. Freelance experience links to this page through See client projects.

## License

The base code is MIT-licensed; its original copyright notice is retained in `LICENSE`.
