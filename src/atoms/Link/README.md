# Link

This component is meant as a drop-in replacement for the next.js `<Link>` component. It handles both internal and external urls and will return a next/link `<Link>` component if the url is internal to the site, and a regular `<a>` tag if it is an external url.

This `Link` component will also detect if the url is formatted as an absolute path but the hostname is the same as the site, so if the user is navigating `http://example.com` and the url passed into this component is `http://example.com/path`, it will use the router to load the `/path` url instead of doing a full page refresh.

## Properties

### href\*

Requires a string. The url that is passed to the `href` prop in the `next/link` component

### as

Accepts a string. This is passed to the `as` prop of the `next/link` component. Use this in the same way you would use `as` for internal links within the given site.

### children\*

Requires a node. This prop is required for accessibility reasons; all links should have some sort of content inside them to be readable by screenreaders, etc.
