# Heading

Creates a generic `<h#>` DOM object. By default the classes match the level, but ideally they should be passed in by using `className`. This is so that the semantic meaning of the heading can be separated from its appearance. E.g., sometimes we might want a heading to be very small stylistically (like an `h6`-equivalent size), but due to its location nested under an `<h2>` it must be an `<h3>`.

## Properties

### children

Whatever you stick between the `<Heading>` tags.

### className

Accepts a string and replaces the default className of `Heading`. This should be used most of the time for applying the correct numbered `hdg hdg-*` classes.

### elementClass

Accepts a string and appends it to the end of the default/existing `className` of the heading.

### level\*

Accepts a number from 1 to 6 and renders your header from `<h1>` to `<h6>` accordingly.
