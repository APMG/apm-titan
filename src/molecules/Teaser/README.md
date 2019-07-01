# Teaser

## Properties

### audioPlayButton

Accepts a React node which controls the audio. This is necessary so that the play button can use the state of the site it's used on. This could be the local state of the Teaser's parent component, React Context, or Redux depending on the implementation.

### contributors

Takes an array of strings. Uses the utility function "toSentence" to chain array of people into a grammatically correct label.

### description

Accepts a string, which will be the description of whatever is being teased.

### elementClass

Accepts a string. Adds that string to the classList of `<Teaser />`.

### headingLevel\*

Accepts a number between 1 and 6, which will determine whether the teaser's title is an `<h1>`, and `<h6>` or somewhere in between.

### href\*

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

### title\*

Accepts a string, which becomes the main title of this Teaser.
