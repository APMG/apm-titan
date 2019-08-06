# Pagination

A component that sets up pagination for a given page of items.

## Basic Properties

### slug\*

Requires a string. This is used to create the internal link to the various pages of data being paginated.

### resourceType\*

Requires a string. This is used to determine which type of page to render. Part of the `href` used by next/link

### buffer\*

Requires a number. This is the maximum number of links to either side of the current page that should be shown. E.g. if the user is on page 5, using `buffer={1}` will result in the pagination showing the numbers `4 5 6`. Using `buffer={2}` will result in `3 4 5 6 7`

### currentPage\*

Requires a number. The current page that the user should be on.

### totalPages\*

Requires a number. This number represents the total number of pages that are being split up for pagination.

## Styling Properties

### elementClass

Accepts a string. Adds a CSS class to the overall container. E.g. passing in `elementClass="foo"` would result in the containing div being `<div class="pagination foo">`

### prevNextClass

Accepts a string. Adds the given class onto the links for previous and next.

### firstLastClass

Accepts a string. Adds the given class onto the links for first and last.

### numberClass

Accepts a string. Adds the given class onto the inner number links.

### currentNumberClass

Accepts a string. Adds the given class onto the number/link for the current page.

## Other Optional Properties

### firstSymbol, prevSymbol, nextSymbol, lastSymbol

_Defaults: '《', '〈', '〉', '》'_

Accepts a node. Overrides the default values; the interior of the respective links. Typically one might want to pass in an svg and/or some other text.

### hasFirstAndLast

_Default: true_

Accepts a boolean. Determines whether or not to show the 'first' and 'last' links.

### inclusiveFirstLast

Accepts a boolean. When set to `true`, will hide the first or last link if the first or last position is included in the inner number links. This is useful especially if representing the first and last links as numbers, so that they merge better with the other numbers.

### firstLastSeparator

Accepts a string. Adds the string after the first button (but within the containing `<li>`) or before the last button. Helpful when representing first and last as numbers, so the numbers all together, when `firstLastSeparator="..."`, could appear as `Prev 1 ... 4 5 6 ... 88 Next`
