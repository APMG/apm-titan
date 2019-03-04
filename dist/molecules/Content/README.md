## Content

The `<Content />` component renders a full representation of a content node in the CMS. This could mean a story, page, episode, etc.

This component has several props tied to the basic fields of the CMS node (title, byline, pubdate, etc.) as well as a body which will utilize ProseMirror rendering.

The `<Content />` component is made up of three subcomponents: `<ContentHeader />`, `<ContentFigure />`, and `<ContentBody />`. These subcomponents could be used in a different component independently if needed.

`<ContentFigure />` and `<ContentBody />` are displayed optionally based on the props passed into `<Content />`. `<ContentFigure />` will only render if the `image` prop is present, and `<ContentBody />` will only render if the `bodyHtml` prop is present.
