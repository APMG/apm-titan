# Time

The `<Time>` component renders a basic `<time>` html element with a `datetime` attribute and formats the time as needed for visual display. The intend is to provide a valid machine-readable `dateTime` prop which will be uses as the `datetime` attribute but formatted inside the element in a human-readable format.

For example, as a basic usage, `<Time dateTime="2019-07-18T04:00:00-05:00" />` would produce the HTML: `<time datetime="2019-07-18T04:00:00-05:00">July 18, 2019</time>`

## Properties

### dateTime\*

Required. Accepts a string which should ideally be formatted to ISO-8601 standard (e.g. `2019-07-18T04:00:00-05:00`), although the date-fns library may also be able to parse other formats.

### type

Accepts either `distance` or `timestamp`. Default value is `timestamp`. Determines whether to format as a timestamp (like `July 18, 2019`) or the time "distance" (the amout of time "ago", e.g. `10 minutes`). Any templating for the `distance` type (adding the word "ago", for example) is outside the scope of this component and should be done in your app where the Time component is invoked.

### formatString

Accepts a string. The format to use for the `timestamp` type, using the tokens described in [date-fns format](https://date-fns.org/v1.30.1/docs/format). This defaults to the format `MMMM D, YYYY`, producing a date output like `July 18, 2019`. This prop has no effect if prop `type="distance"`.

### elementClass

Accepts a string. Adds a `class` property to the resulting html for styling usage.
