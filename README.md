# Akzedia

This is the website of the Black Metal Band Akzedia. 

## Developing

Once you've created a project and installed dependencies with `pnpm install` (as the CI/CD is using `pnpm` as well), start a
development server:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Deployment

There is a GitHub action triggered after every commit on `main` which will build a Docker container, push it to GitHub
Container Registry and trigger a re-deployment via a webhook. The project uses SvelteKit's `node-adaptor` to enable SSR. 
