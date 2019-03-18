# TagLink

This component is a link that is used to categorize a topic. When the user clicks this link, they are taken to a collection of items with that same tag. `TagLink` is not limited to topic, and can be used has a generic link to a different page.

## Properties

### elementClass

Accepts a string and adds that string to the className of `TagLink`.

### to*

Accepts a URL string. This becomes the link's `href`, which leads to that tag's collection.

### tagName*

Accepts a string. This becomes the inner text (or child) of the link.
