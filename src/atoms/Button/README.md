
# Button

Creates a button or link with consistent appearance.

## Properties

### children*

Whatever you stick between the `<Button>` tags. Required, since a button will always need text inside for accessibility.

### disabled

Allows you to disable the button. Accepts either `true` or `false`, but is `false` by default. If the button is a `<button />`, the `disabled` prop on it will be set to true. If this object is a link, a `<span>` will be rendered instead of an `<a>` tag.

#### elementClass

Accepts a string. Adds that string to the className of `<Heading />`.

#### href

Accepts a string. If this prop is provided, a link (`<a>`). Otherwise, a `<button>` is rendered.

#### size

Determines the size of the button. Button will be medium if this is left empty. Accepts one of the following strings: "small" and "large".

#### type

Determines the basic appearance of the button relating to the button's purpose. By default, the button will be gray. Accepts one of the following strings:

* **primary**: used for the main actions on each form (such as "submit")
* **secondary**: used for other actions (such as "cancel")
* **destructive**: used when the user's action could cause some unintended effect (such as "destroy").