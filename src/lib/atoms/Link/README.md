## Link

This component is meant as a drop-in replacement for the main router's `<Link>` component. It handles both internal and external urls and will return a reach-router `<Link>` component if the url is internal to the site, and a regular `<a>` tag if it is an external url.

This `Link` component will also detect if the url is formatted as an absolute path but the hostname is the same as the site, so if the user is navigating `http://example.com` and the url passed into this component is `http://example.com/path`, it will use the router to load the `/path` url instead of doing a full page refresh.