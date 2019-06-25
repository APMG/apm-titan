# Event

The `<Event />` component is made up of three subcomponents: `<EventHeader />`, `<EventBody />`, and `<EventInfo />`. These subcomponents are specifically designed to be used in `<Event />`, but also can be used in `<EventTeaser />`.

The `<EventInfo />` subcomponent consists of the following imported child components: `<EventArtist />`, `<EventPrices />`, `<EventVenue />` and `<EventDates />`.

## Properties

### artist

Ends up in the `<EventInfo />` section. Accepts an object with the following shape:

```
{
  "name": [String],
  "facebook": [String],
  "twitter": [String],
  "website": [String]
}
```

### bodyHtml

Accepts a string. A very long string that will ultimately be the main body of this Event page.

### eventDates

Accepts an array of date objects, formatted like so:

```
{
  "date": [String],
  "description": [String]
}
```

### headingLevel

Accepts an integer between 1 and 6, which will determine whether the the title will be wrapped in between `<h1>` and `<h6>`.

### prices

Accepts an array of "price" objects, formatted like so:

```
{
  "price": [String],
  "description": [String]
}
```

### publishDate

Accepts a string, which will be parsed by the `date-fns` library and, if it is a valid date, turned into a properly formatted string such. Example: September 2, 2019.

### tag

Accepts a JavaScript "tag" object with the following format:

```
{
  tagName: [String],
  to: [String]
}
```

### subtitle

Accepts a string which will become this event's subtitle.

### title*

Accepts a string which will become this event's title.

### venue

Accepts a JavaScript "venue" object with the following format:

```
{
  name: [String],
  website: [String],
  street: [String],
  city: [String],
  state: [String],
  zip: [String],
  phone: [String],
  latitude: [String],
  longitude: [String]
}
```

### website

Accepts a URL string to the website where you can buy tickets for this event.