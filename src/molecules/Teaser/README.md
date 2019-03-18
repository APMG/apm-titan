# Teaser

## Properties

### audio

Accepts a data object with the following shape:

```
title: [String],
credit: [String],
durationHms: [any],
encodings: {
  mediaType: [String] (required),
  filename: [String],
  httpFilePath: [String] (required)
}
```

### audioButtonSymbol

Accepts anything and puts it on the audio button. It'll usually either be a word (like "Play") or an svg "Play" symbol.

### contributors

Takes an array of strings. Uses the utility function "toSentence" to chain array of people into a grammatically correct label.

### description

Accepts a string, which will be the description of whatever is being teased.

### headingLevel*

Accepts a number between 1 and 6, which will determine whether the teaser's title is an `<h1>`, and `<h6>` or somewhere in between.

### href*

Accepts a URL string. Turns the whole Teaser container into a link to its story, event or whatever.

### image

Accepts an HTML object, or alternatively a React component. It is recommended that you create an `<Image/>` with `apm-mimas` and put that in here, setting the `aspectRatio` attribute to "thumbnail".

### publishDate

Accepts a date string. If successfully parsed by `date-fns`, this date is shown on the teaser.

### tag

Accepts an object with the following shape:

```
{
  to: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired
}
```

### title*

Accepts a string, which becomes the main title of this Teaser.
