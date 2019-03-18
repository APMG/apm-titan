# Hero

A `<Hero />` component is used to highlight a particular story on a collection, or a particular aspect of a page. What it can be or do can change a lot depending on the project. It has a single subcomponent, `<Inner />`. The version we have here is a pretty simple and typical, but depending on whether it needs to have a play button or some other interactivity, this component could grow a lot. 


## Properties

### button

Accepts a string. This will decide the label of the button. (not yet functional)

### contributorsText

Accepts a string. Displays the contributors to this article/item, if any.

### href

Accepts a URL string. If this is provided, the `<Inner />` component of the hero will be wrapped in a `<Link />`.

### image*

Accepts a data object of any shape.

### publishDate

Accepts a date string. Is parsed by `date-fns`  and, if valid, is reformatted to be 'MMMM D, YYYY' (for example, September 2, 2019).

### subHead

Accepts a string, which becomes this Hero's "subtitle", if applicable.

### tag

Accepts an object of any shape.

### title*

Accepts a string, which becomes this Hero's "title".