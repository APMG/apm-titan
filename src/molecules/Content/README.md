# Content

The `<Content />` component renders a full representation of a content node in the CMS. This could mean a story, page, episode, etc.

This component has several props tied to the basic fields of the CMS node (title, byline, pubdate, etc.) as well as a body which will utilize ProseMirror rendering.

The `<Content />` component has a subcomponent, `<ContentHeader />`, that can be imported and used independently if needed.

The `Figure` will only render if the `image` prop is present, and the `Body` will only render if the `bodyHtml` prop is present.

## Properties

### authors

Accepts an array of objects containing each author's name and a link.

### headingLevel

Passes through to the `<Heading />` atom in this package. It determines how large the title of this particular page should be.

### image

Accepts an image object created with [apm-mimas](https://www.npmjs.com/package/apm-mimas). Turns it into a `<Figure />` element.

### imageCaption

Accepts a string. Becomes the caption for the `<Figure />` element.

### imageCredit

Accepts a string. Becomes the credit for whoever took the image in the `<Figure />` element.

### imageCreditHref

Accepts a URL string. Turns the credit on the `<Figure />` into a link.

### publishDate

Accepts an unformatted date from the CMS endpoint. Returns a date formatted 'MMMM DD, YYYY' by [date-fns](https://date-fns.org/)

### subtitle

Accepts a string. Becomes the subtitle for this article, right underneath the title.

### tag

Accepts an object of the shape:

```
{
  "tagName": [String],
  "to": [String]
}
```

### title*

Accepts a string. Becomes the title of the page.