# Heading

Creates a generic `<h#>` DOM object. By default the classes match the level, but ideally they should be passed in by using `elementClass`. This is so that the semantic meaning of the heading can be separated from its appearance. E.g., sometimes we might want a heading to be very small stylistically (like an `h6`-equivalent size), but due to its location nested under an `<h2>` it must be an `<h3>`.

## Properties

### children

Whatever you stick between the `<Heading>` tags.

### elementClass

Accepts a string and replaces the default className of `Heading`.

### level\*

Accepts a number from 1 to 6 and renders your header from `<h1>` to `<h6>` accordingly.
