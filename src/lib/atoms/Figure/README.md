# Figure

A component for displaying an image with optional caption. Can be used in multiple contexts such as a story primary image, teasers, etc.

## Props

### Layout

The `layout` prop determines the layout of the figure within its context. For example a `full` layout takes up the whole width of the column. Also available are `left` and `right`. These are dependent on the CSS to display correctly. Defaults to `full`.

### Caption

`caption` accepts a string. Appears below the image.

### Credit and Credit Href

The `credit` is for displaying the source of the image (photographer, etc.). Also a `creditHref` prop can be used to turn the Credit into a link.

### Image

The `image` prop is an object that gets passed to the `Image` component from the apm-mimas library. Image objects from the CMS are fairly complicated so usually we'll just want to pass it through as-is. But if we want to use a simpler image that doesn't come from the CMS, the minimum required properties of the `image` object are `fallbackSrc` and `alt`.

`image.fallbackSrc` is a string (the url to the image) and `alt` is a string (to provide alt text on the image)
