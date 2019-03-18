# Pagination

A component that sets up pagination for a given page of items.

## Properties

### linkPrefix*

Requires a string. This is used to create the internal link to the various pages of data being paginated.

### linksToShow*

Requires a number. This is the maximum number of links that should be shown on each page.

### page*

Requires a number. The current page that the user should be on.

### totalPages*

Requires a number. This number represents the total number of pages that are being split up for pagination.

> TODO: right now prevPage and nextPage are being asked for too, and I think that those should be calculated instead of fed in manually. Leaving it like this introduces a lot of capacity for bugs, say, if you say we're currently on page 6 and the next page is page 8.