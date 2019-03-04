## Button

### href

A generic button to use across the site. Renders an `<a>` tag (the `Link` component) if the href prop is passed in, otherwise renders a `<button>`.

### type

The `type` prop determines the appearance, which should be related to the button's purpose. The `primary` type is used for the primary action on a form. This will probably be the most widely used button. `secondary` is used for secondary actions (such as "cancel"). The `destructive` variant should be used when the user's action could cause some unintended effect, or as a warning, such as when deleting something. The button also has a default grey appearance.

### size

The `size` prop has `small`, `large`, and default (medium sized) variants.

### disabled

The button can also be disabled by passing in the `disabled={true}` prop. If the button is a link (in other words: it has an `href` prop), then a `<span>` will be rendered insted of an `<a>` tag.
