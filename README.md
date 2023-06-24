# \<canvas-polygon>

This webcomponent draw polygons on a canvas.
This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation

## Installation

```bash
npm i canvas-polygon
```

## Usage

```html
<script type="module">
  import 'canvas-polygon/canvas-polygon.js';
</script>

<canvas-polygon></canvas-polygon>

<canvas-polygon size="100" sides="3" line-width="4" bg-color="cyan"></canvas-polygon>
```

## Attributtes

 * **size** - The size of the canvas element in pixels.
 * **sides** - The number of sides of the polygon to render.
 * **line-width** - The width of the polygon's stroke in pixels.
 * **bg-color** - The background color of the canvas element.
 * **offset-rotation** - The rotation offset of the polygon in radians.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
