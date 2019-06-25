# Event Teaser

The `<EventTeaser />` component is made up of a atom component and uses the `<Event />`, `<Heading />`, `<EventDates />`, and `<EventVenue />` components.

## Properties

### eventDates

Accepts an array of objects with the following shape:

```
{
  date: [String] (required),
  description: [String]
}
```

### headingLevel

Accepts an integer between 1 and 6 to set the title element to be anything from `<h1>` to `<h6>`.

### id*

Accepts a number. Should match the id of a particular event.

### title

Accepts a string. Sets the title of this Event Teaser object.

### venue

Accepts a data object with the following shape:

```
{
  id: [number],
  name: [String],
  street: [String],
  city: [String],
  state: [String],
  zip: [String],
  longitude: [String],
  latitude: [String]
}
```
