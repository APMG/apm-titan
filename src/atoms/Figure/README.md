
# Figure

A component for displaying an image with optional caption. Can be used in multiple contexts such as a story primary image, teasers, etc.

## Properties

### size

Determines the size of the figure within its column. Defaults to "full".

### position

Determines the layout of the figure within its column. Accepts one of the following strings:

* **left**: stays on the left side of its column
* **right**: styas on the right side of its column

### caption

Accepts a string that will appear below the image.

### credit

Accepts a string that will display the source of the image (photographer, etc.).

### creditHref

Accepts a string that prop can be used to turn the credit prop into a link.

### image

Accepts an `<Image />` component from **apm-mimas**. The Image component itself accepts either an Image object from APM's Images API, or it will accept a `fallbackSrc` or `fallbackSrcSet`. For more details, see [apm-mimas](https://www.npmjs.com/package/apm-mimas)
