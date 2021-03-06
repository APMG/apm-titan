(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    100: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(36);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63),
        next_link__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_4__
        );
      var TagLink = function(_ref) {
        var elementClass = _ref.elementClass,
          href = _ref.href,
          tagName = _ref.tagName,
          classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(
            (function _defineProperty(obj, key, value) {
              return (
                key in obj
                  ? Object.defineProperty(obj, key, {
                      value: value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (obj[key] = value),
                obj
              );
            })({ tag: !0 }, elementClass, elementClass)
          );
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
          { href: href, className: classes },
          tagName
        );
      };
      (TagLink.displayName = 'TagLink'),
        (TagLink.propTypes = {
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          href:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
          tagName:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
        }),
        (TagLink.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TagLink',
          props: {
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            href: { type: { name: 'string' }, required: !0, description: '' },
            tagName: { type: { name: 'string' }, required: !0, description: '' }
          }
        }),
        (__webpack_exports__.a = TagLink),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/TagLink/TagLink.js'] = {
            name: 'TagLink',
            docgenInfo: TagLink.__docgenInfo,
            path: 'src/atoms/TagLink/TagLink.js'
          });
    },
    104: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(3), __webpack_require__(15), __webpack_require__(36);
      var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_5__
        ),
        _atoms_Link_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54),
        _atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          73
        ),
        _atoms_TagLink_TagLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          100
        ),
        _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(163);
      var Teaser = function(_ref) {
        var title = _ref.title,
          headingLevel = _ref.headingLevel,
          publishDate = _ref.publishDate,
          href = _ref.href,
          as = _ref.as,
          tag = _ref.tag,
          audioPlayButton = _ref.audioPlayButton,
          image = _ref.image,
          contributors = _ref.contributors,
          description = _ref.description,
          elementClass = _ref.elementClass,
          classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(
            (function _defineProperty(obj, key, value) {
              return (
                key in obj
                  ? Object.defineProperty(obj, key, {
                      value: value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (obj[key] = value),
                obj
              );
            })({ teaser: !0 }, elementClass, elementClass)
          );
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'article',
          { className: classes },
          tag &&
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _atoms_TagLink_TagLink__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                elementClass: 'teaser_tagLink',
                to: tag.to,
                tagName: tag.tagName
              }
            ),
          audioPlayButton &&
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              { className: 'teaser_button' },
              audioPlayButton
            ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            _atoms_Link_Link__WEBPACK_IMPORTED_MODULE_6__.a,
            { href: href, as: as, className: 'teaser_link' },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              { className: 'teaser_image' },
              image
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              { className: 'teaser_content' },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'div',
                { className: 'teaser_header' },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__.a,
                  { level: headingLevel },
                  title
                )
              ),
              (publishDate || contributors) &&
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { className: 'teaser_meta' },
                  publishDate &&
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'div',
                      { className: 'teaser_pubdate' },
                      publishDate
                    ),
                  contributors &&
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'div',
                      { className: 'teaser_contributors' },
                      'By '.concat(
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__.c)(
                          contributors
                        )
                      )
                    )
                ),
              description &&
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { className: 'teaser_body userContent' },
                  description
                )
            )
          )
        );
      };
      (Teaser.displayName = 'Teaser'),
        (Teaser.propTypes = {
          audioPlayButton:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
          contributors: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
          ),
          description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
            ]
          ),
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
          headingLevel:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
          href:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
          as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
          image: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          publishDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
          tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
            to:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            tagName:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired
          }),
          title:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
        }),
        (Teaser.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Teaser',
          props: {
            audioPlayButton: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            contributors: {
              type: { name: 'arrayOf', value: { name: 'string' } },
              required: !1,
              description: ''
            },
            description: {
              type: {
                name: 'union',
                value: [{ name: 'string' }, { name: 'node' }]
              },
              required: !1,
              description: ''
            },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            headingLevel: {
              type: { name: 'number' },
              required: !0,
              description: ''
            },
            href: { type: { name: 'string' }, required: !0, description: '' },
            as: { type: { name: 'string' }, required: !1, description: '' },
            image: { type: { name: 'object' }, required: !1, description: '' },
            publishDate: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            tag: {
              type: {
                name: 'shape',
                value: {
                  to: { name: 'string', required: !0 },
                  tagName: { name: 'string', required: !0 }
                }
              },
              required: !1,
              description: ''
            },
            title: { type: { name: 'string' }, required: !0, description: '' }
          }
        }),
        (__webpack_exports__.a = Teaser),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/molecules/Teaser/Teaser.js'] = {
            name: 'Teaser',
            docgenInfo: Teaser.__docgenInfo,
            path: 'src/molecules/Teaser/Teaser.js'
          });
    },
    105: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        Heading = __webpack_require__(73),
        TagLink = __webpack_require__(100),
        EventHeader = function(_ref) {
          var title = _ref.title,
            subtitle = _ref.subtitle,
            tag = _ref.tag,
            headingLevel = _ref.headingLevel,
            publishDate = _ref.publishDate;
          return react_default.a.createElement(
            'header',
            { className: 'event_header' },
            tag &&
              react_default.a.createElement(TagLink.a, {
                href: tag.href,
                tagName: tag.tagName,
                elementClass: 'event_topic'
              }),
            react_default.a.createElement(
              Heading.a,
              { level: headingLevel || 1, className: 'hdg hdg-1' },
              title
            ),
            subtitle &&
              react_default.a.createElement(
                'p',
                { className: 'event_subtitle', 'data-testid': 'eventSubtitle' },
                subtitle
              ),
            publishDate &&
              react_default.a.createElement(
                'div',
                { className: 'event_meta' },
                publishDate
              )
          );
        };
      (EventHeader.displayName = 'EventHeader'),
        (EventHeader.propTypes = {
          title: prop_types_default.a.string.isRequired,
          headingLevel: prop_types_default.a.number,
          publishDate: prop_types_default.a.node,
          subtitle: prop_types_default.a.string,
          tag: prop_types_default.a.shape({
            href: prop_types_default.a.string,
            tagName: prop_types_default.a.string
          })
        }),
        (EventHeader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventHeader',
          props: {
            title: { type: { name: 'string' }, required: !0, description: '' },
            headingLevel: {
              type: { name: 'number' },
              required: !1,
              description: ''
            },
            publishDate: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            subtitle: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            tag: {
              type: {
                name: 'shape',
                value: {
                  href: { name: 'string', required: !1 },
                  tagName: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            }
          }
        });
      var Event_EventHeader = EventHeader;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventHeader.js'] = {
          name: 'EventHeader',
          docgenInfo: EventHeader.__docgenInfo,
          path: 'src/molecules/Event/EventHeader.js'
        });
      var Body = __webpack_require__(215),
        EventVenue = __webpack_require__(216),
        _ref2 =
          (__webpack_require__(17),
          react_default.a.createElement('h2', null, 'Artist')),
        _ref3 = react_default.a.createElement('br', null),
        _ref4 = react_default.a.createElement('br', null),
        EventArtist = function(_ref) {
          var artist = _ref.artist;
          return react_default.a.createElement(
            'div',
            { className: 'eventInfo-artist' },
            _ref2,
            react_default.a.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: artist.website
              },
              react_default.a.createElement(
                'div',
                { className: 'link-plain' },
                artist.name
              )
            ),
            _ref3,
            react_default.a.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: artist.facebook,
                className: 'link'
              },
              'Facebook'
            ),
            _ref4,
            react_default.a.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: artist.twitter,
                className: 'link'
              },
              'Twitter'
            )
          );
        };
      (EventArtist.displayName = 'EventArtist'),
        (EventArtist.propTypes = {
          artist: prop_types_default.a.shape({
            name: prop_types_default.a.string,
            facebook: prop_types_default.a.string,
            twitter: prop_types_default.a.string,
            website: prop_types_default.a.string
          })
        }),
        (EventArtist.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventArtist',
          props: {
            artist: {
              type: {
                name: 'shape',
                value: {
                  name: { name: 'string', required: !1 },
                  facebook: { name: 'string', required: !1 },
                  twitter: { name: 'string', required: !1 },
                  website: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            }
          }
        });
      var Event_EventArtist = EventArtist;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventArtist.js'] = {
          name: 'EventArtist',
          docgenInfo: EventArtist.__docgenInfo,
          path: 'src/molecules/Event/EventArtist.js'
        });
      __webpack_require__(3), __webpack_require__(15), __webpack_require__(12);
      var EventPrices_ref2 = react_default.a.createElement(
          'h2',
          null,
          'Event tickets'
        ),
        EventPrices_ref3 = react_default.a.createElement('br', null),
        EventPrices = function(_ref) {
          var prices = _ref.prices,
            ticketLink = _ref.ticketLink;
          return react_default.a.createElement(
            'div',
            { className: 'eventInfo-prices' },
            EventPrices_ref2,
            prices.map(function(price, i) {
              return react_default.a.createElement(
                'div',
                { key: i, className: 'eventInfo-price' },
                price.description,
                ': $',
                price.price
              );
            }),
            EventPrices_ref3,
            react_default.a.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: ticketLink,
                className: 'link'
              },
              'Buy Tickets here'
            )
          );
        };
      (EventPrices.displayName = 'EventPrices'),
        (EventPrices.propTypes = {
          prices: prop_types_default.a.arrayOf(
            prop_types_default.a.shape({
              price: prop_types_default.a.string.isRequired,
              description: prop_types_default.a.string
            })
          ),
          ticketLink: prop_types_default.a.string
        }),
        (EventPrices.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventPrices',
          props: {
            prices: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    price: { name: 'string', required: !0 },
                    description: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            ticketLink: {
              type: { name: 'string' },
              required: !1,
              description: ''
            }
          }
        });
      var Event_EventPrices = EventPrices;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventPrices.js'] = {
          name: 'EventPrices',
          docgenInfo: EventPrices.__docgenInfo,
          path: 'src/molecules/Event/EventPrices.js'
        });
      var EventDates = __webpack_require__(217),
        EventInfo = function(_ref) {
          var venue = _ref.venue,
            artist = _ref.artist,
            prices = _ref.prices,
            ticketLink = _ref.ticketLink,
            eventDates = _ref.eventDates;
          return react_default.a.createElement(
            'div',
            { className: 'eventInfo' },
            venue &&
              react_default.a.createElement(EventVenue.a, { venue: venue }),
            artist &&
              react_default.a.createElement(Event_EventArtist, {
                artist: artist
              }),
            prices &&
              react_default.a.createElement(Event_EventPrices, {
                prices: prices,
                ticketLink: ticketLink
              }),
            eventDates &&
              react_default.a.createElement(EventDates.a, {
                eventDates: eventDates
              })
          );
        };
      (EventInfo.displayName = 'EventInfo'),
        (EventInfo.propTypes = {
          artist: prop_types_default.a.object,
          venue: prop_types_default.a.object,
          prices: prop_types_default.a.array,
          ticketLink: prop_types_default.a.string,
          eventDates: prop_types_default.a.array
        }),
        (EventInfo.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventInfo',
          props: {
            artist: { type: { name: 'object' }, required: !1, description: '' },
            venue: { type: { name: 'object' }, required: !1, description: '' },
            prices: { type: { name: 'array' }, required: !1, description: '' },
            ticketLink: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            eventDates: {
              type: { name: 'array' },
              required: !1,
              description: ''
            }
          }
        });
      var Event_EventInfo = EventInfo;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventInfo.js'] = {
          name: 'EventInfo',
          docgenInfo: EventInfo.__docgenInfo,
          path: 'src/molecules/Event/EventInfo.js'
        });
      var Event_ref2 = react_default.a.createElement('br', null),
        Event_ref3 = react_default.a.createElement('br', null),
        Event_ref4 = react_default.a.createElement('br', null),
        Event = function(_ref) {
          var title = _ref.title,
            subtitle = _ref.subtitle,
            headingLevel = _ref.headingLevel,
            publishDate = _ref.publishDate,
            tag = _ref.tag,
            bodyHtml = _ref.bodyHtml,
            venue = _ref.venue,
            artist = _ref.artist,
            prices = _ref.prices,
            website = _ref.website,
            eventDates = _ref.eventDates;
          return react_default.a.createElement(
            'div',
            { className: 'event' },
            react_default.a.createElement(
              'div',
              { className: 'col col-page' },
              title &&
                react_default.a.createElement(Event_EventHeader, {
                  title: title,
                  headingLevel: headingLevel,
                  publishDate: publishDate,
                  tag: tag,
                  subtitle: subtitle
                }),
              Event_ref2,
              bodyHtml &&
                react_default.a.createElement(Body.a, {
                  elementClass: 'event_body',
                  bodyHtml: bodyHtml
                }),
              Event_ref3,
              Event_ref4,
              react_default.a.createElement(Event_EventInfo, {
                title: title,
                venue: venue,
                artist: artist,
                prices: prices,
                ticketLink: website,
                eventDates: eventDates
              })
            )
          );
        };
      (Event.displayName = 'Event'),
        (Event.propTypes = {
          artist: prop_types_default.a.shape({
            name: prop_types_default.a.string,
            facebook: prop_types_default.a.string,
            twitter: prop_types_default.a.string,
            website: prop_types_default.a.string
          }),
          bodyHtml: prop_types_default.a.string,
          eventDates: prop_types_default.a.arrayOf(
            prop_types_default.a.shape({
              date: prop_types_default.a.string.isRequired,
              description: prop_types_default.a.string
            })
          ),
          headingLevel: prop_types_default.a.number,
          prices: prop_types_default.a.arrayOf(
            prop_types_default.a.shape({
              price: prop_types_default.a.string.isRequired,
              description: prop_types_default.a.string
            })
          ),
          publishDate: prop_types_default.a.node,
          tag: prop_types_default.a.shape({
            tagName: prop_types_default.a.string,
            to: prop_types_default.a.string
          }),
          subtitle: prop_types_default.a.string,
          title: prop_types_default.a.string.isRequired,
          venue: prop_types_default.a.shape({
            name: prop_types_default.a.string,
            website: prop_types_default.a.string,
            street: prop_types_default.a.string,
            city: prop_types_default.a.string,
            state: prop_types_default.a.string,
            zip: prop_types_default.a.string,
            phone: prop_types_default.a.string,
            latitude: prop_types_default.a.string,
            longitude: prop_types_default.a.string
          }),
          website: prop_types_default.a.string
        }),
        (Event.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Event',
          props: {
            artist: {
              type: {
                name: 'shape',
                value: {
                  name: { name: 'string', required: !1 },
                  facebook: { name: 'string', required: !1 },
                  twitter: { name: 'string', required: !1 },
                  website: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            },
            bodyHtml: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            eventDates: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    date: { name: 'string', required: !0 },
                    description: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            headingLevel: {
              type: { name: 'number' },
              required: !1,
              description: ''
            },
            prices: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    price: { name: 'string', required: !0 },
                    description: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            publishDate: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            tag: {
              type: {
                name: 'shape',
                value: {
                  tagName: { name: 'string', required: !1 },
                  to: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            },
            subtitle: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            title: { type: { name: 'string' }, required: !0, description: '' },
            venue: {
              type: {
                name: 'shape',
                value: {
                  name: { name: 'string', required: !1 },
                  website: { name: 'string', required: !1 },
                  street: { name: 'string', required: !1 },
                  city: { name: 'string', required: !1 },
                  state: { name: 'string', required: !1 },
                  zip: { name: 'string', required: !1 },
                  phone: { name: 'string', required: !1 },
                  latitude: { name: 'string', required: !1 },
                  longitude: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            },
            website: { type: { name: 'string' }, required: !1, description: '' }
          }
        });
      __webpack_exports__.a = Event;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Event/Event.js'] = {
          name: 'Event',
          docgenInfo: Event.__docgenInfo,
          path: 'src/molecules/Event/Event.js'
        });
    },
    1280: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(1281),
        __webpack_require__(1283),
        __webpack_require__(1285);
    },
    1281: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(305),
        content = __webpack_require__(1282);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1282: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(306)(!1)).push([
        module.i,
        '.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;overflow:hidden;display:block;margin:0;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.slick-track{position:relative;left:0;top:0;display:block}.slick-track::before,.slick-track::after{content:"";display:table}.slick-track::after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{float:left;height:100%;min-height:1px;display:none}[dir="rtl"] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box;font-size:62.5%;height:100%}*,*::before,*::after{box-sizing:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}::-moz-selection{background:#b3b3b3}::selection{background:#b3b3b3}body{display:flex;flex-direction:column;justify-content:space-between;min-height:100%;font-family:"Montserrat",sans-serif;font-size:1.6rem;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;color:#1a1a1a}ul,ol,li{margin:0;padding:0;list-style:none}h1,h2,h3,h4,h5,h6{font-weight:normal;margin:0}p{margin-top:1em;margin-bottom:1em}p:first-child{margin-top:0}p:last-child{margin-bottom:0}q::before,q::after{content:\'\'}blockquote::before,blockquote::after{content:\'\'}img{display:block;max-width:100%}iframe{max-width:100%}a{color:inherit;text-decoration:none}figure{margin:0}.invisible{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px)}.center{text-align:center}.has-blur{transition:filter .5s}.has-blur.is-blur{opacity:.2}@supports (-webkit-filter: blur(20px)) or (filter: blur(20px)){.has-blur.is-blur{opacity:1;filter:blur(15px)}}.no-scroll{overflow:hidden}.userContent>*{margin-bottom:1em}.userContent h1,.userContent h2,.userContent h3,.userContent h4,.userContent h5,.userContent h6{display:block;font-family:"Montserrat",sans-serif;font-weight:bold;line-height:normal;margin:1em 0 .5em;line-height:normal}.userContent h1{font-size:4rem}@media (min-width: 32em){.userContent h1{font-size:4.8rem}}.userContent h2{font-size:3.2rem}@media (min-width: 32em){.userContent h2{font-size:3.8rem}}.userContent h3{font-size:2.6rem}@media (min-width: 32em){.userContent h3{font-size:3.2rem}}.userContent h4{font-size:2rem}@media (min-width: 32em){.userContent h4{font-size:2.6rem}}.userContent h5{font-size:1.8rem}@media (min-width: 32em){.userContent h5{font-size:2.4rem}}.userContent h6{font-size:1.6rem}@media (min-width: 32em){.userContent h6{font-size:2.2rem}}.userContent p{font-weight:normal}.userContent em,.userContent i{font-style:italic}.userContent strong,.userContent b{font-weight:bold}.userContent img{display:inline-block}.userContent ul li{margin-left:3rem;padding-left:1rem}.userContent ul ul{margin:1rem 0}.userContent ul>li{list-style:disc}.userContent ul>li>ul>li{list-style:circle}.userContent ul>li>ul>li>ul>li{list-style:square}.userContent ol li{margin-left:3rem;padding-left:1rem}.userContent ol ol{margin:1rem 0}.userContent ol>li{list-style:decimal}.userContent ol>li>ol>li{list-style:lower-alpha}.userContent ol>li>ol>li>ol>li{list-style:lower-roman}.userContent ol>li>ol>li>ol>li>ol>li{list-style:decimal}.userContent a{color:#a4343a;fill:#a4343a;text-decoration:underline;transition:color .175s,fill .175s}.userContent a:hover{color:#571b1f;fill:#571b1f}.userContent a svg{vertical-align:-2px}.userContent blockquote{margin:3rem auto;padding-left:2.5rem;padding-right:2.5rem;max-width:80rem;position:relative;font-family:"Montserrat",sans-serif;font-size:1.8rem;line-height:1.1}.userContent blockquote::before,.userContent blockquote::after{color:gray;position:absolute;font-size:2em}.userContent blockquote::before{content:\'“\';left:0;top:-1rem}.userContent blockquote::after{content:\'”\';right:0;bottom:4rem}@media (min-width: 24em){.userContent blockquote{padding-left:4rem;padding-right:4rem;font-size:2rem}.userContent blockquote::before,.userContent blockquote::after{font-size:4em}.userContent blockquote::before{top:-2rem}.userContent blockquote::after{bottom:0}}@media (min-width: 32em){.userContent blockquote{padding-left:6rem;padding-right:6rem;font-size:2.2rem}.userContent blockquote::after{bottom:-4rem}}.userContent blockquote footer{font-size:1.6rem;font-style:normal;color:gray}.userContent blockquote footer cite{font-style:normal}.userContent hr{display:block;border:0;margin:60px auto;width:60%;height:1px;background:gray}.userContent iframe{width:100%}.banner{width:100%;margin-left:auto;margin-right:auto}.banner>*{margin-left:auto;margin-right:auto}.banner-header{box-shadow:0 1px 10px rgba(0,0,0,0.2);max-width:none;background:#fff;position:fixed;z-index:1020}.banner-footer{background-color:#000}.banner-fill{overflow:hidden}.banner-fill::before,.banner-fill::after{content:\' \';display:table}.banner-fill::after{clear:both}.banner-fill-primary{background-color:#a4343a}.banner-fill-secondary{background-color:#333}.col{margin-left:auto;margin-right:auto}.col::before,.col::after{content:\' \';display:table}.col::after{clear:both}.col-content{margin:0 10px}@media (min-width: 32em){.col-content{margin:0 20px}}@media (min-width: 48em){.col-content{margin:0 12.5%}}@media (min-width: 64em){.col-content{margin:0 16.667%}}.col-page{margin:0 10px}@media (min-width: 32em){.col-page{margin:0 20px}}@media (min-width: 48em){.col-page{margin:0 6%}}@media (min-width: 64em){.col-page{margin:0 10%}}.container{margin:0 auto;max-width:1300px;padding:0 10px;position:relative}.main{width:100%;max-width:1280px;padding-top:104px;margin-left:auto;margin-right:auto;flex-grow:1;background:#fff}@media (min-width: 48em){.main{padding-top:136px}}.page{flex:1;flex-basis:auto}.row::before,.row::after{content:\' \';display:table}.row::after{clear:both}.section{margin-bottom:40px}@media (min-width: 48em){.section{margin-bottom:60px}}.section-md{margin-bottom:20px}@media (min-width: 48em){.section-md{margin-bottom:40px}}.section-sm{margin-bottom:8px}@media (min-width: 48em){.section-sm{margin-bottom:20px}}.section-page{margin-top:80px;margin-bottom:80px}.split{display:table;width:100%}.split>*{display:table-cell;vertical-align:top}.split-center>*{vertical-align:middle}.split_first{text-align:left}.split_last{text-align:right}.content::before,.content::after{content:\' \';display:table}.content::after{clear:both}.content_header{margin-bottom:4rem}.content_meta{margin:25px 0;font-size:1.8rem;font-family:"Montserrat",sans-serif}.content_topic{text-transform:uppercase}.content_title{display:block;font-family:"Montserrat",sans-serif;font-weight:bold;line-height:normal;font-size:4rem}@media (min-width: 32em){.content_title{font-size:4.8rem}}.content_subtitle{margin:0;font-family:"Montserrat",sans-serif;font-size:1.6rem}.content_byline{margin-bottom:5px;color:#333}.content_byline a{color:#a4343a;fill:#a4343a;text-decoration:underline;transition:color .175s,fill .175s;text-decoration:none;background-color:transparent}.content_byline a:hover{color:#571b1f;fill:#571b1f}.content_byline a svg{vertical-align:-2px}.content_byline a:hover{text-decoration:underline}.content_date{display:inline-block;margin-right:20px;font-family:"Trocchi",Georgia,serif}.content_date_updated{font-style:italic;font-size:.8em;color:gray}.content_social{display:inline-block;color:gray;fill:gray}.content_social a{vertical-align:middle;transition:color .175s,fill .175s}.content_social a:hover{color:#a4343a;fill:#a4343a}.content_social svg{height:24px;width:24px}.content_hero{margin:0 0 50px}.content_hero img{width:100%}.content_body{font-family:"Trocchi",Georgia,serif;font-size:1.6rem;line-height:1.8}@media (min-width: 32em){.content_body{font-size:1.8rem;line-height:2}}.content_body>*{margin-top:1.4em;margin-bottom:1.4em}.item{display:flex;flex-direction:row;justify-content:space-between}.item>:not(:last-child){margin-right:30px}.item_figure{flex-shrink:0;flex-grow:0;width:30%}.item_figure img{width:100%;height:auto}.item_content{flex-grow:1}.item_content_header{margin-bottom:8px}.item_content_meta{color:gray;margin-bottom:2px}.item_content_body{line-height:1.5}.event::before,.event::after{content:\' \';display:table}.event::after{clear:both}.event_header{margin-bottom:4rem}.event_meta{margin:25px 0;font-size:1.8rem;font-family:"Montserrat",sans-serif}.event_topic{text-transform:uppercase}.event_title{display:block;font-family:"Montserrat",sans-serif;font-weight:bold;line-height:normal;font-size:4rem}@media (min-width: 32em){.event_title{font-size:4.8rem}}.event_subtitle{margin:0;font-family:"Montserrat",sans-serif;font-size:1.6rem}.event_date{display:inline-block;margin-right:20px;font-family:"Trocchi",Georgia,serif}.event_date_updated{font-style:italic;font-size:.8em;color:gray}.event_body{font-family:"Trocchi",Georgia,serif;font-size:1.6rem;line-height:1.8}@media (min-width: 32em){.event_body{font-size:1.8rem;line-height:2}}.event_body>*{margin-top:1.4em;margin-bottom:1.4em}.field{width:100%;vertical-align:top}.field-attached{display:flex}.field-attached>input{flex-grow:1;width:auto;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.field-attached>.btn{width:auto;white-space:nowrap;border-top-left-radius:0;border-bottom-left-radius:0}.field_input{display:inline-block;width:100%;height:40px;padding:0 8px;border:1px solid gray;border-radius:0;font-family:"Montserrat",sans-serif;font-size:1.6rem;line-height:40px;vertical-align:top;transition:border-color .175s}.field_input::-webkit-input-placeholder{font-size:1.4rem;opacity:1;color:gray}.field_input:-moz-placeholder{font-size:1.4rem;opacity:1;color:gray}.field_input::-moz-placeholder{font-size:1.4rem;opacity:1;color:gray}.field_input:-ms-input-placeholder{font-size:1.4rem;opacity:1;color:gray}.field_input:focus{outline:0;border-color:#a4343a}textarea.field_input{border:1px solid gray}.bList li{margin-left:3rem;padding-left:1rem}.bList ul{margin:1rem 0}.bList>li{list-style:disc}.bList>li>ul>li{list-style:circle}.bList>li>ul>li>ul>li{list-style:square}.hList>*{display:inline-block;margin-right:15px;margin-bottom:15px;vertical-align:middle;list-style:none}.hList>*:last-child{margin-right:0}.hList-compressed>*{margin-right:1px;margin-bottom:0}.hList-lg>*{margin-right:20px;margin-bottom:0}.hList-oneLine>*{margin-bottom:0}.nList li{margin-left:3rem;padding-left:1rem}.nList ol{margin:1rem 0}.nList>li{list-style:decimal}.nList>li>ol>li{list-style:lower-alpha}.nList>li>ol>li>ol>li{list-style:lower-roman}.nList>li>ol>li>ol>li>ol>li{list-style:decimal}.vList>*{display:block;margin-bottom:10px}.vList>*:last-child{margin-bottom:0}.vList-condensed>*{margin-bottom:4px}.vList-compressed>*{margin-bottom:1px}.vList-collection>*{margin-bottom:40px}.aspect{position:relative;overflow:hidden}.aspect::before{display:block;content:\'\';width:100%}.aspect>*{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;object-fit:cover}.aspect>iframe{height:100%}.aspect-widescreen::before{padding-top:56.25%}.aspect-fullscreen::before{padding-top:75%}.aspect-square::before{padding-top:100%}.blocks{margin-left:-5%;margin-bottom:-40px;font-size:0}@media (min-width: 48em){.blocks{margin-bottom:-80px}}.blocks>*{width:95%;margin-left:5%;margin-bottom:40px;display:inline-block;font-size:1.6rem;vertical-align:top}@media (min-width: 48em){.blocks>*{margin-bottom:80px}}.blocks-1>*{width:95%}.blocks-2>*{width:45%}.blocks-3>*{width:28.33333%}.blocks-4>*{width:20%}@media (min-width: 32em){.blocks-smallTablet-1>*{width:95%}.blocks-smallTablet-2>*{width:45%}.blocks-smallTablet-3>*{width:28.33333%}.blocks-smallTablet-4>*{width:20%}}@media (min-width: 48em){.blocks-tablet-1>*{width:95%}.blocks-tablet-2>*{width:45%}.blocks-tablet-3>*{width:28.33333%}.blocks-tablet-4>*{width:20%}}@media (min-width: 64em){.blocks-desktop-1>*{width:95%}.blocks-desktop-2>*{width:45%}.blocks-desktop-3>*{width:28.33333%}.blocks-desktop-4>*{width:20%}}.figure{margin:0 -10px 30px;font-family:"Montserrat",sans-serif;font-size:1.4rem;line-height:normal}.figure.align-none{margin-left:auto;margin-right:auto}.figure>*{display:block}.figure>img,.figure>iframe,.figure>video,.figure>canvas{display:block;width:100%}@media (min-width: 48em){.figure.half,.figure-half{width:60%}}.figure.quarter,.figure-quarter{width:40%;margin-left:0;float:left;margin-right:20px}@media (min-width: 48em){.figure.quarter,.figure-quarter{width:25%;margin-left:0}}@media (min-width: 48em){.figure-right,.figure.align-right{float:right;margin-left:30px}}@media (min-width: 48em){.figure-left,.figure.align-left{float:left;margin-right:30px}}*+.figure_caption,.figure_caption+*{display:flex;justify-content:space-between;flex-direction:row;font-family:"Montserrat",sans-serif;margin:15px 10px 0}.figure_credit{margin-left:30px;margin-bottom:10px;color:gray;font-size:1.2rem;font-style:italic}.figure_text{font-size:1.5rem}.media{display:flex;flex-direction:row;justify-content:space-between}.media>:not(:last-child){margin-right:30px}.media_figure{flex-shrink:0;flex-grow:0}.media_figure img{width:100%;height:auto}.media_body{flex-grow:1}.mod{display:block;position:relative}.mod_header{display:block;margin-bottom:10px}.mod_header-lg{margin-bottom:60px}.mod_row{margin-bottom:10px}.mod_img{display:block;margin-bottom:10px;position:relative}.mod_img img,.mod_img video{width:100%}.mod_footer{display:block;margin-top:10px}.blockquote{margin:3rem auto;padding-left:2.5rem;padding-right:2.5rem;max-width:80rem;position:relative;font-family:"Montserrat",sans-serif;font-size:1.8rem;line-height:1.1}.blockquote::before,.blockquote::after{color:gray;position:absolute;font-size:2em}.blockquote::before{content:\'“\';left:0;top:-1rem}.blockquote::after{content:\'”\';right:0;bottom:4rem}@media (min-width: 24em){.blockquote{padding-left:4rem;padding-right:4rem;font-size:2rem}.blockquote::before,.blockquote::after{font-size:4em}.blockquote::before{top:-2rem}.blockquote::after{bottom:0}}@media (min-width: 32em){.blockquote{padding-left:6rem;padding-right:6rem;font-size:2.2rem}.blockquote::after{bottom:-4rem}}.blockquote footer{font-size:1.6rem;font-style:normal;color:gray}.blockquote footer cite{font-style:normal}.hdg{display:block;font-family:"Montserrat",sans-serif;font-weight:bold;line-height:normal}.hdg-1{font-size:4rem}@media (min-width: 32em){.hdg-1{font-size:4.8rem}}.hdg-2{font-size:3.2rem}@media (min-width: 32em){.hdg-2{font-size:3.8rem}}.hdg-3{font-size:2.6rem}@media (min-width: 32em){.hdg-3{font-size:3.2rem}}.hdg-4{font-size:2rem}@media (min-width: 32em){.hdg-4{font-size:2.6rem}}.hdg-5{font-size:1.8rem}@media (min-width: 32em){.hdg-5{font-size:2.4rem}}.hdg-6{font-size:1.6rem}@media (min-width: 32em){.hdg-6{font-size:2.2rem}}.hdg-inline{display:inline-block}.hr{display:block;border:0;margin:60px auto;width:60%;height:1px;background:gray}.link{color:#a4343a;fill:#a4343a;text-decoration:underline;transition:color .175s,fill .175s}.link:hover{color:#571b1f;fill:#571b1f}.link svg{vertical-align:-2px}.link-plain{text-decoration:none;background-color:transparent}.link-plain:hover{text-decoration:underline}.link-inverted{color:#fff}.link-inverted:hover{color:#fff}.text-light{color:gray}.text-bold{font-weight:bold}.text-small{font-size:1.4rem}.text-center{text-align:center}.text-em{font-style:italic}.text-sans{font-family:"Montserrat",sans-serif}.text-serif{font-family:"Trocchi",Georgia,serif}.text-white{color:#fff}.text-alt{line-height:1.8}@media (min-width: 32em){.text-alt{font-size:1.7rem}}.text-animate{opacity:0;transition:opacity .75s ease-out}.text-animate.fade-in{opacity:1}.btn{display:inline-block;margin:0;padding:0;border:0;border-radius:0;appearance:none;text-align:center;text-decoration:none;line-height:1;background:transparent;cursor:pointer;padding:6px 20px;border:1px solid transparent;border-radius:3px;font-size:1.5rem;font-family:"Montserrat",sans-serif;line-height:1.5;background:#e6e6e6;color:#1a1a1a;outline:0;transition:background-color .2s,border .2s,color .2s,box-shadow .2s}.btn:hover,.btn:focus{background-color:#ccc}.btn:focus{box-shadow:0 0 0 3px #4a90e2}.btn[disabled],.btn[disabled]:hover,.btn[disabled]:focus,.btn[disabled]:active{border-color:#e6e6e6;background:#fafafa;color:#e6e6e6;cursor:default}.btn[disabled]>.icon,.btn[disabled]:hover>.icon,.btn[disabled]:focus>.icon,.btn[disabled]:active>.icon{fill:#e6e6e6}.btn>.icon{fill:#1a1a1a;height:18px;width:18px;margin:-2px 0 -2px 6px;vertical-align:-2px}.btn-large{font-size:1.75rem;padding:10px 30px}.btn-small{font-size:1.25rem;padding:4px 12px}.btn-primary{border:1px solid #4a90e2;background:#4a90e2;color:#fff}.btn-primary:hover,.btn-primary:focus{border-color:#76abe9;background:#76abe9}.btn-secondary{border:1px solid #4a90e2;color:#4a90e2;background:#fff}.btn-secondary:hover,.btn-secondary:focus{border-color:#1b5dab;color:#1b5dab;background:#e4eefb}.btn-destructive{border:1px solid #b4111a;background:#b4111a;color:#fff}.btn-destructive:hover,.btn-destructive:focus{border-color:#e31521;background:#e31521}.btn-destructive:focus{box-shadow:0 0 0 3px #b4111a}.icon{display:inline-block}.pagination{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:283px}.pagination_page{text-align:center;vertical-align:middle;font-size:2.25rem;font-weight:700;width:30px;height:30px}.player{display:flex;background:rgba(230,230,230,0.5);border-radius:2px;width:100%;border:1px solid rgba(26,26,26,0.5)}.player_wrapper{display:flex;flex-direction:column;padding:16px;width:inherit;font-size:.9em;overflow:hidden}@media (min-width: 48em){.player_wrapper{padding:8px;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}}.player_wrapper_content{min-width:0;width:100%}@media (min-width: 48em){.player_wrapper_content{margin-left:10px;order:2}}.player_controls{display:flex;flex-wrap:nowrap;justify-content:space-evenly;align-items:center}@media (min-width: 48em){.player_controls{order:1}}.player_controlsSecondary{display:flex;justify-content:space-between}@media (min-width: 48em){.player_controlsSecondary{flex-direction:column;width:auto;margin:auto 10px}}.player_timeWrapper{display:block;text-align:center;margin-top:6px;margin-bottom:10px}@media (min-width: 48em){.player_timeWrapper{margin-bottom:0;text-align:left}}.player_btn{padding:0;border:0;cursor:pointer;background:none;border-radius:50%;position:relative;margin:auto 10px}.player_btn[disabled]{opacity:.3}.player_btn svg{margin:auto}.player_btn svg:focus{box-shadow:none}.player_btn-playpause{background:#4a90e2;border-radius:50%}.player_btn-playpause:focus{border-radius:50%}.player_btn-large{width:36px;height:36px}@media (min-width: 22em){.player_btn-large{width:50px;height:50px}}.player_btn-medium{width:32px;height:32px}.player_btn-medium svg{width:32px;height:32px}.player_button-small{width:24px;height:24px}.player_button-small svg{width:24px;height:24px}@media (min-width: 22em){.player_button-small{width:32px;height:32px}}.player_play svg,.player_pause svg,.player_loading svg{margin:auto;position:relative;top:2px;fill:#fff;width:16px;height:16px}@media (min-width: 22em){.player_play svg,.player_pause svg,.player_loading svg{top:3px;width:24px;height:24px}}.player_pause{display:none}.player_loading{display:none;position:relative;fill:#4a90e2}.player_body{padding:20px 0;width:85%;overflow:hidden}.player_title{display:block;font-family:"Montserrat",sans-serif;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.player_label{color:#4a90e2;text-transform:uppercase;font-family:"Montserrat",sans-serif;font-weight:bold;font-size:.7em;letter-spacing:1px;margin-bottom:6px}.player_time{color:#333;display:inline-block;width:12.5%;margin:auto 1%;border-radius:5px}@media (min-width: 48em){.player_time{width:7%}}@media (min-width: 68em){.player_time{width:4.5%}}.player_time-right{text-align:right}.player_timeline{height:6px;overflow:hidden;background:#ccc;border-radius:5px;cursor:pointer;display:inline-block;width:68%;margin:auto 1%;position:relative}@media (min-width: 48em){.player_timeline{width:80%}}@media (min-width: 68em){.player_timeline{width:85%}}.player_content{align-items:baseline;text-align:center;margin:8px 12px;line-height:1.4}@media (min-width: 48em){.player_content{text-align:left;margin:0 1%}}.player_text{text-transform:uppercase}.player_text,.player_subhead{font-size:.7em}.player-wave{position:relative;height:14px;width:20px;margin:auto 0}@media (min-width: 48em){.player-wave{margin:auto}}.player-wave span{background:#4a90e2;opacity:.5;bottom:0;height:20%;position:absolute;width:4px;transition:opacity .25s, height .25s, background-color .4s}.player-wave span:nth-child(1){left:0}.player-wave span:nth-child(2){left:5px}.player-wave span:nth-child(3){left:10px}.player-wave span:nth-child(4){left:15px}.is-playing .player_play{display:none}.is-playing .player_pause{display:block}.is-playing .player-wave span{animation:sound1 1000ms -800ms linear infinite normal;opacity:.8}.is-playing .player-wave span:nth-child(1){animation-duration:780ms;animation-name:sound1;height:75%}.is-playing .player-wave span:nth-child(2){animation-duration:750ms;animation-name:sound2;height:50%}.is-playing .player-wave span:nth-child(3){animation-duration:790ms;animation-name:sound3;height:100%}.is-playing .player-wave span:nth-child(4){animation-duration:760ms;animation-name:sound4;height:70%}.player_mute{display:none}.is-muted .player_volume{display:none}.is-muted .player_mute{display:block}.is-playing .player_timeline_progress,.is-paused .player_timeline_progress{border-radius:5px;height:6px;background-color:#4a90e2;position:absolute;top:0;bottom:0;z-index:1003}.is-playing .player_timeline_buffered,.is-paused .player_timeline_buffered{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1001}.is-playing .player_timeline_buffered>*,.is-paused .player_timeline_buffered>*{position:absolute;top:0;bottom:0;background:#b3b3b3}.is-playing .player_timeline_buffered .player_timeline_loading,.is-paused .player_timeline_buffered .player_timeline_loading{display:none;width:100%;position:absolute;top:0;bottom:0;left:0;z-index:1002;background-image:repeating-linear-gradient(-45deg, #1a1a1a, #1a1a1a 11px, #ccc 10px, #ccc 20px);background-size:28px 28px;animation:loading .5s linear infinite}.is-loading .player-wave span{animation:loading1 500ms linear infinite normal;height:100%}.is-loading .player-wave span:nth-child(1){animation-name:loading1;animation-duration:500ms;height:100%}.is-loading .player-wave span:nth-child(2){animation-name:loading2;animation-duration:500ms;height:100%}.is-loading .player-wave span:nth-child(3){animation-name:loading3;animation-duration:500ms;height:100%}.is-loading .player-wave span:nth-child(4){animation-name:loading4;animation-duration:500ms;height:100%}.is-loading .player_play::before{content:\'\';box-sizing:border-box;position:absolute;top:50%;left:50%;width:32px;height:32px;margin-top:-25px;margin-left:-25px;border-radius:50%;border:4px solid transparent;border-top-color:#4a90e2;border-bottom-color:#4a90e2;animation:spinner 1.5s linear infinite}@media (min-width: 22em){.is-loading .player_play::before{width:50px;height:50px}}.is-paused .player-wave span{animation:none}.is-paused .player-wave span:nth-child(1){left:0}.is-paused .player-wave span:nth-child(2){left:5px}.is-paused .player-wave span:nth-child(3){left:10px}.is-paused .player-wave span:nth-child(4){left:15px}.player-volume-level{width:8px;height:29px;border-radius:5px;background:rgba(74,144,226,0.5);position:relative;cursor:pointer}@media (min-width: 37.5em){.player-volume-level{height:38px}}.player-volume-current{width:100%;height:100%;background:#4a90e2;position:absolute;pointer-events:none;bottom:0;border-radius:5px}@keyframes loading1{0%{opacity:1}25%{opacity:.5}50%{opacity:.5}75%{opacity:.5}}@keyframes loading2{0%{opacity:.5}25%{opacity:1}50%{opacity:.5}75%{opacity:.5}}@keyframes loading3{0%{opacity:.5}25%{opacity:.5}50%{opacity:1}75%{opacity:.5}}@keyframes loading4{0%{opacity:.5}25%{opacity:.5}50%{opacity:.5}75%{opacity:1}}@keyframes sound1{0%{height:20%}20%{height:27%}28%{height:20%}50%{height:80%}52%{height:20%}85%{height:60%}100%{height:20%}}@keyframes sound2{0%{height:20%}20%{height:35%}24%{height:20%}40%{height:100%}48%{height:20%}70%{height:90%}100%{height:20%}}@keyframes sound3{0%{height:20%}20%{height:40%}24%{height:20%}50%{height:80%}58%{height:20%}75%{height:100%}100%{height:20%}}@keyframes sound4{0%{height:20%}20%{height:30%}24%{height:20%}40%{height:50%}48%{height:20%}70%{height:80%}78%{height:20%}90%{height:65%}100%{height:20%}}.socialLink{display:inline-block;height:30px;width:30px;padding:2px;border-radius:100px;border:2px solid gray;color:gray;fill:gray;transition:color .175s,border-color .175s,fill .175s}.socialLink:hover{color:#a4343a;border-color:#a4343a;fill:#a4343a}.socialLink svg{height:22px;width:22px}@keyframes spinner{to{transform:rotate(360deg)}}.spinner{position:relative;height:100%;margin:90px 0;min-height:30px;width:100%}.spinner::before{content:\'\';box-sizing:border-box;position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:5px solid transparent;border-top-color:#4a90e2;border-bottom-color:#4a90e2;animation:spinner 1s linear infinite}.collection_header{margin-bottom:120px}.collection_header::after{content:\'\';display:block;margin:0 auto;width:50%;height:1px;position:relative;top:60px;background:gray}.collection_list{margin-left:auto;margin-right:auto;margin:0 10px}.collection_list::before,.collection_list::after{content:\' \';display:table}.collection_list::after{clear:both}@media (min-width: 32em){.collection_list{margin:0 20px}}@media (min-width: 48em){.collection_list{margin:0 6%}}@media (min-width: 64em){.collection_list{margin:0 10%}}.collection_list>*{display:block;margin-bottom:40px}.collection_list>*:last-child{margin-bottom:0}.story{margin-bottom:3rem}.footer{color:gray;display:flex;flex-wrap:nowrap;flex-direction:column;font-size:1.4rem;height:100%;align-items:center;padding:24px 0;font-family:"Montserrat",sans-serif;margin-top:0}@media (min-width: 48em){.footer{flex-direction:row;flex-wrap:nowrap;padding:94px 0}}.footer_column{padding:30px 0;text-align:center}@media (min-width: 48em){.footer_column{border:0;height:40%;margin:0;width:40%}}.footer_column:first-child{border-top:1px solid gray;border-bottom:1px solid gray}@media (min-width: 48em){.footer_column:first-child{border:0}}.footer_column-logo{border-bottom:0;order:-1}@media (min-width: 48em){.footer_column-logo{order:0}}.footer_apm_logo{fill:#fff;height:14px;margin:auto auto 16px;text-align:center;width:250px}@media (min-width: 48em){.footer_apm_logo{margin-bottom:20px}}.footer_nav{color:gray}.footer_apm_small small{display:block;font-size:1.4rem;margin-bottom:8px}.header{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 16px;box-shadow:0 0 20px rgba(0,0,0,0.2);height:64px;position:fixed;z-index:1020;font-family:"Montserrat",sans-serif;color:#1a1a1a;background-color:#fff}@media (min-width: 48em){.header{height:96px}}.header_logo{display:flex;align-items:center}@media (max-width: 47.999em){.header_logo{order:2;margin-left:auto;margin-right:auto}}.header_logoImg{height:36px;width:36px;margin-right:8px}@media (min-width: 48em){.header_logoImg{height:64px;width:64px;margin-right:16px}}.header_logoImg svg{height:100%;width:100%}.header_logoText{font-size:13px;font-weight:600;line-height:1;text-transform:uppercase}@media (min-width: 48em){.header_logoText{font-size:18px}}.header_logoText_lg{display:block;font-size:1.6em;text-transform:none}.header_nav{display:block}@media (max-width: 47.999em){.header_nav{width:240px;padding-top:20px;position:fixed;overflow-y:auto;top:64px;left:0;right:0;bottom:0;z-index:2002;background-color:#fff;transform:translateX(-100%);transition:transform .4s}.is-open .header_nav{transform:translateX(0)}}.header_navButton{display:inline-block;margin:0;padding:0;border:0;border-radius:0;appearance:none;text-align:center;text-decoration:none;line-height:1;background:transparent;cursor:pointer;display:none;padding:10px}@media (max-width: 47.999em){.header_navButton{display:block;order:1}}.header_navButton svg{display:block;height:30px;width:30px}.header_navBg{display:none}@media (max-width: 47.999em){.header_navBg{display:block;position:fixed;opacity:0;transition:opacity .4s}.is-open .header_navBg{top:64px;left:0;right:0;bottom:0;z-index:2001;opacity:1;background:rgba(0,0,0,0.7)}}.nav{font-size:2rem;font-weight:bold}@media (min-width: 48em){.nav{font-size:1.6rem}}@media (min-width: 64em){.nav{font-size:2rem}.is-compact .nav{font-size:1.6rem}}.nav_list{display:flex;flex-direction:row;align-items:center}@media (max-width: 47.999em){.nav_list{flex-direction:column;align-items:stretch}}.nav_item:last-child{margin-right:0}.nav_link{display:block;padding:10px;text-align:center;color:#1a1a1a;transition:color .175s}.nav_link.is-active{color:#571b1f}.nav_link:hover,.nav_link:focus{color:#4a90e2}@media (min-width: 48em){.nav_link{padding:20px 12px}}@media (min-width: 56em){.nav_link{padding:20px}}.navIcon{display:block;height:30px;width:30px;position:relative}.navIcon span{display:block;width:100%;border-top:2px solid #1a1a1a;border-radius:2px;position:absolute;transition:transform .175s,opacity .175s}.navIcon span:first-child{top:6px;transform-origin:6px 5px}.is-open .navIcon span:first-child{transform:rotate(45deg)}.navIcon span:nth-child(2){top:50%;margin-top:-1px}.is-open .navIcon span:nth-child(2){transform:rotate(-45deg);transform-origin:center}.navIcon span:last-child{bottom:6px;transform-origin:6px -6px;opacity:1}.is-open .navIcon span:last-child{transform:rotate(-45deg);opacity:0}\n',
        ''
      ]),
        (module.exports = exports);
    },
    1283: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(305),
        content = __webpack_require__(1284);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1284: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(306)(!1)).push([
        module.i,
        'body {\n  background-color: #fff;\n  margin-top: 0;\n  padding: 16px;\n}\n\ntable {\n  border-spacing: 0 !important;\n  padding: 2rem 0;\n  font-size: 14px;\n}\n\nthead {\n  background-color: #dcdcdc;\n}\n\nth {\n  text-transform: capitalize !important;\n}\n\nth,\ntd {\n  padding: 0.5rem !important;\n}\n\ntable,\nthead,\nth,\ntd,\ntr {\n  border: none;\n}\n',
        ''
      ]),
        (module.exports = exports);
    },
    1285: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(305),
        content = __webpack_require__(1286);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1286: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(306)(!1)).push([
        module.i,
        "body {\n  background-color: #fff;\n  margin-top: 0;\n}\n\ntable {\n  /* border-spacing: 0 !important; */\n  padding: 2rem 0;\n  font-size: 14px;\n  border: 1px solid #ccc !important;\n  margin-top: 10px;\n}\n\nthead {\n  background-color: #dcdcdc;\n}\n\nth {\n  text-transform: capitalize !important;\n}\n\nth,\ntd {\n  padding: 1rem !important;\n  border: 1px solid #ccc;\n}\ntd {\n  font-family: Monaco, Consolas, 'Courier New', monospace;\n}\n",
        ''
      ]),
        (module.exports = exports);
    },
    1296: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            22
          );
          (module._StorybookPreserveDecorators = !0),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
              [__webpack_require__(1319)],
              module
            );
        }.call(this, __webpack_require__(58)(module));
    },
    1319: function(module, exports, __webpack_require__) {
      var map = {
        './atoms/Button/Button.story.js': 1320,
        './atoms/Figure/Figure.story.js': 1336,
        './atoms/Heading/Heading.story.js': 1337,
        './atoms/Link/Link.story.js': 1338,
        './atoms/Loading/Loading.story.js': 1339,
        './atoms/Pagination/Pagination.story.js': 1340,
        './atoms/TagLink/TagLink.story.js': 1343,
        './atoms/Time/Time.story.js': 1344,
        './molecules/Content/Content.story.js': 1345,
        './molecules/Event/Event.story.js': 1346,
        './molecules/EventTeaser/EventTeaser.story.js': 1347,
        './molecules/Teaser/Teaser.story.js': 1348
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1319);
    },
    1320: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, select } from '@storybook/addon-knobs';\nimport Button from './Button';\n\nconst stories = storiesOf('Atoms/Button', module);\n\nstories.addDecorator(withKnobs);\n\nstories\n  .add('Button All Props', () => {\n    return (\n      <Button\n        type={select(\n          'Type',\n          [null, 'primary', 'secondary', 'destructive'],\n          null\n        )}\n        href={select('Href', [null, 'https://example.com', '/page'], null)}\n        size={select('Size', [null, 'large', 'small'], null)}\n        disabled={select('Disabled', [null, true, false], null)}\n        elementClass={text('Custom Class', '')}\n        newWindow={select('New window?', [null, true, false], null)}\n        submitForm={select('Submit form?', [null, true, false], null)}\n      >\n        {text('Inner Text', 'Button Text')}\n      </Button>\n    );\n  })\n  .add('Button Sizes', () => {\n    return (\n      <ul className=\"hList\">\n        <li>\n          <Button>Default Size</Button>\n        </li>\n        <li>\n          <Button size=\"small\">Small Button</Button>\n        </li>\n        <li>\n          <Button size=\"large\">Large Button</Button>\n        </li>\n      </ul>\n    );\n  })\n  .add('Button Types', () => {\n    return (\n      <ul className=\"hList\">\n        <li>\n          <Button>Default Button</Button>\n        </li>\n        <li>\n          <Button type=\"primary\">Primary Action</Button>\n        </li>\n        <li>\n          <Button type=\"secondary\">Secondary Action</Button>\n        </li>\n        <li>\n          <Button type=\"destructive\">Destructive Action</Button>\n        </li>\n      </ul>\n    );\n  });\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/Button', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Button.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Button',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
          );
          var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'ul',
              { className: 'hList' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  null,
                  'Default Size'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 'small' },
                  'Small Button'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 'large' },
                  'Large Button'
                )
              )
            ),
            _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'ul',
              { className: 'hList' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  null,
                  'Default Button'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  { type: 'primary' },
                  'Primary Action'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  { type: 'secondary' },
                  'Secondary Action'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  { type: 'destructive' },
                  'Destructive Action'
                )
              )
            );
          stories
            .add('Button All Props', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  type: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )(
                    'Type',
                    [null, 'primary', 'secondary', 'destructive'],
                    null
                  ),
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Href', [null, 'https://example.com', '/page'], null),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Size', [null, 'large', 'small'], null),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Disabled', [null, !0, !1], null),
                  elementClass: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Custom Class', ''),
                  newWindow: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('New window?', [null, !0, !1], null),
                  submitForm: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Submit form?', [null, !0, !1], null)
                },
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                )('Inner Text', 'Button Text')
              );
            })
            .add('Button Sizes', function() {
              return _ref;
            })
            .add('Button Types', function() {
              return _ref2;
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1336: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            apm_mimas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              1
            ),
            _Figure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(213),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { Image } from 'apm-mimas';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, select } from '@storybook/addon-knobs';\nimport Figure from './Figure';\n\nconst stories = storiesOf('Atoms/Figure', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('Full config', () => {\n  const testImage = (\n    <Image\n      fallbackSrc={text('Example Image Src', 'http://placecorgi.com/800')}\n      alt={text('Image Alt Text', 'a good boi')}\n    />\n  );\n\n  return (\n    <Figure\n      size={select('Size', ['full', 'half', 'quarter'], 'full')}\n      position={select('Position', [null, 'left', 'right'], null)}\n      image={testImage}\n      caption={text('Caption', 'a v good boi 11/10 would pet')}\n      credit={text('Credit', 'Picture McPhotoface')}\n      creditHref={text('Credit Href', 'http://example.com')}\n    />\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf
            )('Atoms/Figure', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Figure.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Figure',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
          ),
            stories.add('Full config', function() {
              var testImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                apm_mimas__WEBPACK_IMPORTED_MODULE_1__.Image,
                {
                  fallbackSrc: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Example Image Src', 'http://placecorgi.com/800'),
                  alt: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Image Alt Text', 'a good boi')
                }
              );
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Figure__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select
                  )('Size', ['full', 'half', 'quarter'], 'full'),
                  position: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select
                  )('Position', [null, 'left', 'right'], null),
                  image: testImage,
                  caption: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Caption', 'a v good boi 11/10 would pet'),
                  credit: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Credit', 'Picture McPhotoface'),
                  creditHref: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Credit Href', 'http://example.com')
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1337: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, select } from '@storybook/addon-knobs';\nimport Heading from './Heading';\n\nconst stories = storiesOf('Atoms/Heading', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('Heading All Props', () => {\n  return (\n    <Heading\n      className={text('className', '')}\n      elementClass={text('Element Class', '')}\n      level={select('Level', [1, 2, 3, 4, 5, 6], 1)}\n    >\n      {text('Children', 'Heading Inner Text')}\n    </Heading>\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/Heading', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Heading.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Heading',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
          ),
            stories.add('Heading All Props', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Heading__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  className: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('className', ''),
                  elementClass: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Element Class', ''),
                  level: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Level', [1, 2, 3, 4, 5, 6], 1)
                },
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                )('Children', 'Heading Inner Text')
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1338: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              1
            ),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport Link from './Link'; \nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, select } from '@storybook/addon-knobs';\n\nconst stories = storiesOf('Atoms/Link', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('Basic Link', () => {\n  return (\n    <Link\n      href={select(\n        'To',\n        [`${window.location.origin}/page`, 'https://example.com', '/page'],\n        '/page'\n      )}\n      className={text('CSS Class', 'link')}\n    >\n      {text('Inner Text', 'Text')}\n    </Link>\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf
            )('Atoms/Link', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Link.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Link',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
          ),
            stories.add('Basic Link', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Link__WEBPACK_IMPORTED_MODULE_1__.a,
                {
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select
                  )(
                    'To',
                    [
                      ''.concat(window.location.origin, '/page'),
                      'https://example.com',
                      '/page'
                    ],
                    '/page'
                  ),
                  className: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('CSS Class', 'link')
                },
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                )('Inner Text', 'Text')
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1339: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport Loading from './Loading';\n\nconst stories = storiesOf('Atoms/Loading', module);\n\nstories.add('Loading', () => {\n  return <Loading />;\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/Loading', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Loading.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Loading',
                  {}
                )
              ),
            _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Loading__WEBPACK_IMPORTED_MODULE_2__.a,
              null
            );
          stories.add('Loading', function() {
            return _ref;
          });
        }.call(this, __webpack_require__(58)(module));
    },
    1340: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _testdata_pagination_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              223
            ),
            _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(483),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, boolean, number } from '@storybook/addon-knobs';\nimport data from './__testdata__/pagination.json';\nimport Pagination from './Pagination';\n\nconst stories = storiesOf('Atoms/Pagination', module);\n\nconst testPropsLarge = {\n  hasFirstAndLast: true,\n  linksToShow: 5,\n  linkPrefix: 'episodes',\n  currentPage: data.episodesList.results.currentPage,\n  elementsPerPage: data.episodesList.results.items.length,\n  totalElements: data.episodesList.results.totalItems\n};\n\nstories.addDecorator(withKnobs);\n\nstories.add('Pagination', () => {\n  return (\n    <Pagination\n      hasFirstAndLast={boolean(\n        'Has First & Last',\n        testPropsLarge.hasFirstAndLast\n      )}\n      linksToShow={number('Links to Show', testPropsLarge.linksToShow)}\n      linkPrefix={testPropsLarge.linkPrefix}\n      currentPage={number('Current Page', testPropsLarge.currentPage)}\n      elementsPerPage={number(\n        'Elements Per Page',\n        testPropsLarge.elementsPerPage\n      )}\n      totalElements={number('Total Elements', testPropsLarge.totalElements)}\n    />\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/Pagination', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Pagination.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Pagination',
                  {}
                )
              ),
            testPropsLarge = {
              hasFirstAndLast: !0,
              linksToShow: 5,
              linkPrefix: 'episodes',
              currentPage:
                _testdata_pagination_json__WEBPACK_IMPORTED_MODULE_3__
                  .episodesList.results.currentPage,
              elementsPerPage:
                _testdata_pagination_json__WEBPACK_IMPORTED_MODULE_3__
                  .episodesList.results.items.length,
              totalElements:
                _testdata_pagination_json__WEBPACK_IMPORTED_MODULE_3__
                  .episodesList.results.totalItems
            };
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
          ),
            stories.add('Pagination', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Pagination__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  hasFirstAndLast: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                  )('Has First & Last', testPropsLarge.hasFirstAndLast),
                  linksToShow: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('Links to Show', testPropsLarge.linksToShow),
                  linkPrefix: testPropsLarge.linkPrefix,
                  currentPage: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('Current Page', testPropsLarge.currentPage),
                  elementsPerPage: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('Elements Per Page', testPropsLarge.elementsPerPage),
                  totalElements: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('Total Elements', testPropsLarge.totalElements)
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1343: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _TagLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text } from '@storybook/addon-knobs';\nimport Taglink from './TagLink';\n\nconst stories = storiesOf('Atoms/TagLink', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('TagLink All Props', () => {\n  return (\n    <Taglink\n      title={text('Title', 'TOPIC')}\n      href={text('Link', 'url/path/')}\n      tagName={text('Tag Name', 'Live from Here')}\n      elementClass={text('elementClass', 'event_topic')}\n    />\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/TagLink', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/TagLink.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/TagLink',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
          ),
            stories.add('TagLink All Props', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _TagLink__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Title', 'TOPIC'),
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Link', 'url/path/'),
                  tagName: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Tag Name', 'Live from Here'),
                  elementClass: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('elementClass', 'event_topic')
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1344: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, select } from '@storybook/addon-knobs';\nimport Time from './Time';\n\nconst stories = storiesOf('Atoms/Time', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('Time All Props', () => {\n  return (\n    <Time\n      dateTime={text('DateTime', '2019-07-18T04:00:00-05:00')}\n      type={select('Type', ['timestamp', 'distance'], 'timestamp')}\n      formatString={text('Format String', 'MMMM DD, YYYY')}\n      elementClass={text('elementClass', '')}\n    />\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Atoms/Time', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Time.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/atoms/Time',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
          ),
            stories.add('Time All Props', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Time__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  dateTime: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('DateTime', '2019-07-18T04:00:00-05:00'),
                  type: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Type', ['timestamp', 'distance'], 'timestamp'),
                  formatString: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Format String', 'MMMM DD, YYYY'),
                  elementClass: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('elementClass', '')
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1345: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            apm_mimas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              1
            ),
            _Content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(224),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { Image } from 'apm-mimas';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, number } from '@storybook/addon-knobs';\nimport Content from './Content.js';\n\nconst stories = storiesOf('Content', module);\nstories.addDecorator(withKnobs({ escapeHTML: false }));\n\nstories\n  .add('Content All', () => {\n    const testImage = (\n      <Image\n        fallbackSrc={text('Image Src', 'https://unsplash.it/1600/900')}\n        alt={text('Image Alt Text', 'Description text example')}\n      />\n    );\n\n    return (\n      <Content\n        authors={[\n          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },\n          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }\n        ]}\n        bodyHtml={text(\n          'Body HTML',\n          \"<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>\"\n        )}\n        image={testImage}\n        imageCaption={text(\n          'Image Caption',\n          'Lorem Ipsum dolor sit amet consectitur sit elit'\n        )}\n        imageCredit={text('Image Credit', 'Some Guy')}\n        imageCreditHref=\"https://example.com\"\n        headingLevel={number('Heading Level', 1)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        title={text('Title', 'Content Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n      />\n    );\n  })\n  .add('Content w/o Image', () => {\n    return (\n      <Content\n        authors={[\n          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },\n          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }\n        ]}\n        bodyHtml={text(\n          'Body HTML',\n          \"<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>\"\n        )}\n        imageCaption={text(\n          'Image Caption',\n          'Lorem Ipsum dolor sit amet consectitur sit elit'\n        )}\n        imageCredit={text('Image Credit', 'Some Guy')}\n        imageCreditHref=\"https://example.com\"\n        headingLevel={number('Heading Level', 1)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        title={text('Title', 'Content Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n      />\n    );\n  })\n  .add('Content w/o Body', () => {\n    const testImage = (\n      <Image\n        fallbackSrc={text('Image Src', 'https://placekitten.com/1600/900')}\n        alt={text('Image Alt Text', 'Awwwwwww')}\n      />\n    );\n    return (\n      <Content\n        authors={[\n          { name: text('Author 1 Name', 'Jim'), href: '/bio/jim' },\n          { name: text('Author 2 Name', 'Bill'), href: '/bio/bill' }\n        ]}\n        image={testImage}\n        imageCaption={text('Image Caption', \"I can't even ❤️\")}\n        imageCredit={text('Image Credit', 'Some Guy')}\n        imageCreditHref=\"https://example.com\"\n        headingLevel={number('Heading Level', 1)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        title={text('Title', 'Content Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n      />\n    );\n  });\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf
            )('Content', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Content.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/molecules/Content',
                  {}
                )
              );
          stories.addDecorator(
            Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
            )({ escapeHTML: !1 })
          ),
            stories
              .add('Content All', function() {
                var testImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  apm_mimas__WEBPACK_IMPORTED_MODULE_1__.Image,
                  {
                    fallbackSrc: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Src', 'https://unsplash.it/1600/900'),
                    alt: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Alt Text', 'Description text example')
                  }
                );
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Content_js__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    authors: [
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 1 Name', 'Jim'),
                        href: '/bio/jim'
                      },
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 2 Name', 'Bill'),
                        href: '/bio/bill'
                      }
                    ],
                    bodyHtml: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Body HTML',
                      "<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
                    ),
                    image: testImage,
                    imageCaption: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Image Caption',
                      'Lorem Ipsum dolor sit amet consectitur sit elit'
                    ),
                    imageCredit: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Credit', 'Some Guy'),
                    imageCreditHref: 'https://example.com',
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Heading Level', 1),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Publish Date', 'December 31, 2018'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Title', 'Content Title'),
                    tag: { href: '/topic', title: 'Topic' }
                  }
                );
              })
              .add('Content w/o Image', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Content_js__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    authors: [
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 1 Name', 'Jim'),
                        href: '/bio/jim'
                      },
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 2 Name', 'Bill'),
                        href: '/bio/bill'
                      }
                    ],
                    bodyHtml: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Body HTML',
                      "<p>The body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
                    ),
                    imageCaption: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Image Caption',
                      'Lorem Ipsum dolor sit amet consectitur sit elit'
                    ),
                    imageCredit: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Credit', 'Some Guy'),
                    imageCreditHref: 'https://example.com',
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Heading Level', 1),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Publish Date', 'December 31, 2018'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Title', 'Content Title'),
                    tag: { href: '/topic', title: 'Topic' }
                  }
                );
              })
              .add('Content w/o Body', function() {
                var testImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  apm_mimas__WEBPACK_IMPORTED_MODULE_1__.Image,
                  {
                    fallbackSrc: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Src', 'https://placekitten.com/1600/900'),
                    alt: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Alt Text', 'Awwwwwww')
                  }
                );
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Content_js__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    authors: [
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 1 Name', 'Jim'),
                        href: '/bio/jim'
                      },
                      {
                        name: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )('Author 2 Name', 'Bill'),
                        href: '/bio/bill'
                      }
                    ],
                    image: testImage,
                    imageCaption: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Caption', "I can't even ❤️"),
                    imageCredit: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Image Credit', 'Some Guy'),
                    imageCreditHref: 'https://example.com',
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Heading Level', 1),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Publish Date', 'December 31, 2018'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Title', 'Content Title'),
                    tag: { href: '/topic', title: 'Topic' }
                  }
                );
              });
        }.call(this, __webpack_require__(58)(module));
    },
    1346: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, number } from '@storybook/addon-knobs';\nimport Event from './Event';\n\nconst stories = storiesOf('Event', module);\nstories.addDecorator(withKnobs({ escapeHTML: false }));\n\nstories\n  .add('Event All props', () => {\n    return (\n      <Event\n        title={text('Title', 'Event Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n        headingLevel={number('Heading level', 2)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        description={text('Description', 'Description text')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        bodyHtml={text(\n          'Body HTML',\n          \"<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>\"\n        )}\n        venue={{\n          id: number('Venue id', 133),\n          name: text('Name', 'Walker Art Center'),\n          street: text('Street', '1750 Hennepin Ave.'),\n          city: text('City', 'Minneapolis'),\n          state: text('State', 'MN'),\n          zip: text('zip', '55403'),\n          latitude: text('Latitude', '44.968436'),\n          longitude: text('Longitude', '-93.288541'),\n          website: text('Website URL', 'http://www.walkerart.org/'),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/walkerartcenter'\n          ),\n          twitter: text('Twitter URL', 'walkerartcenter'),\n          photo_id: '',\n          image_slug: null,\n          phone: text('Phone', '(612) 375-7600'),\n          slug: 'walker-art-center',\n          updated_at: '2016-08-11T14:09:52.000-05:00'\n        }}\n        artist={{\n          id: number('Venue id', 1233),\n          name: text('Name', 'Anthony Kiedis'),\n\n          slug: 'mock-slug-the-red-hot-chili-peppers',\n          photo_id: null,\n          image_slug: '20180104-tba',\n          website: text(\n            'Website URL',\n            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'\n          ),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/ChiliPeppers/'\n          ),\n          twitter: text('https://twitter.com/ChiliPeppers'),\n\n          is_local: false,\n          updated_at: '2018-01-04T14:16:28.000-06:00'\n        }}\n        eventPrices={[\n          {\n            price: text('Event Price 1', '70.0'),\n            description: text(\n              'Event Price Description 1',\n              'Member price general admission'\n            )\n          },\n          {\n            price: text('Event Price 2', '300.0'),\n            description: text('Event Price Description 2', 'VIP member')\n          }\n        ]}\n        eventDates={[\n          {\n            date: text('Event Date 1', 'August 5th, 2019')\n          },\n          {\n            date: text('Event Date 2', 'August 23th, 2019')\n          }\n        ]}\n      />\n    );\n  })\n  .add('Event w/o Body', () => {\n    return (\n      <Event\n        title={text('Title', 'Event Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n        headingLevel={number('Heading level', 2)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        description={text('Description', 'Description text')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        venue={{\n          id: number('Venue id', 133),\n          name: text('Name', 'Walker Art Center'),\n          street: text('Street', '1750 Hennepin Ave.'),\n          city: text('City', 'Minneapolis'),\n          state: text('State', 'MN'),\n          zip: text('zip', '55403'),\n          latitude: text('Latitude', '44.968436'),\n          longitude: text('Longitude', '-93.288541'),\n          website: text('Website URL', 'http://www.walkerart.org/'),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/walkerartcenter'\n          ),\n          twitter: text('Twitter URL', 'walkerartcenter'),\n          photo_id: '',\n          image_slug: null,\n          phone: text('Phone', '(612) 375-7600'),\n          slug: 'walker-art-center',\n          updated_at: '2016-08-11T14:09:52.000-05:00'\n        }}\n        artist={{\n          id: number('Venue id', 1233),\n          name: text('Name', 'Anthony Kiedis'),\n\n          slug: 'mock-slug-the-red-hot-chili-peppers',\n          photo_id: null,\n          image_slug: '20180104-tba',\n          website: text(\n            'Website URL',\n            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'\n          ),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/ChiliPeppers/'\n          ),\n          twitter: text('https://twitter.com/ChiliPeppers'),\n\n          is_local: false,\n          updated_at: '2018-01-04T14:16:28.000-06:00'\n        }}\n        eventDates={[\n          {\n            date: text('Event Date 1', 'August 5th, 2019')\n          },\n          {\n            date: text('Event Date 2', 'August 23th, 2019')\n          }\n        ]}\n      />\n    );\n  })\n  .add('Event w/o EventInfo', () => {\n    return (\n      <Event\n        title={text('Title', 'Event Title')}\n        tag={{ href: '/topic', title: 'Topic' }}\n        headingLevel={number('Heading level', 2)}\n        publishDate={text('Publish Date', 'December 31, 2018')}\n        description={text('Description', 'Description text')}\n        subtitle={text(\n          'Subtitle',\n          'Eam velit legimus accommodare ne, no sint euismod meliore vis.'\n        )}\n        bodyHtml={text(\n          'Body HTML',\n          \"<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>\"\n        )}\n      />\n    );\n  })\n  .add('Event venue', () => {\n    return (\n      <Event\n        venue={{\n          id: number('Venue id', 133),\n          name: text('Name', 'Walker Art Center'),\n          street: text('Street', '1750 Hennepin Ave.'),\n          city: text('City', 'Minneapolis'),\n          state: text('State', 'MN'),\n          zip: text('zip', '55403'),\n          latitude: text('Latitude', '44.968436'),\n          longitude: text('Longitude', '-93.288541'),\n          website: text('Website URL', 'http://www.walkerart.org/'),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/walkerartcenter'\n          ),\n          twitter: text('Twitter URL', 'walkerartcenter'),\n          photo_id: '',\n          image_slug: null,\n          phone: text('Phone', '(612) 375-7600'),\n          slug: 'walker-art-center',\n          updated_at: '2016-08-11T14:09:52.000-05:00'\n        }}\n      />\n    );\n  })\n  .add('Event dates', () => {\n    return (\n      <Event\n        eventDates={[\n          {\n            date: text('Event Date 1', 'August 5th, 2019')\n          },\n          {\n            date: text('Event Date 2', 'August 23th, 2019')\n          }\n        ]}\n      />\n    );\n  })\n  .add('Event artist', () => {\n    return (\n      <Event\n        artist={{\n          id: number('Venue id', 1233),\n          name: text('Name', 'Anthony Kiedis'),\n\n          slug: 'mock-slug-the-red-hot-chili-peppers',\n          photo_id: null,\n          image_slug: '20180104-tba',\n          website: text(\n            'Website URL',\n            'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'\n          ),\n          facebook: text(\n            'Facebook URL',\n            'https://www.facebook.com/ChiliPeppers/'\n          ),\n          twitter: text('https://twitter.com/ChiliPeppers'),\n\n          is_local: false,\n          updated_at: '2018-01-04T14:16:28.000-06:00'\n        }}\n      />\n    );\n  })\n  .add('Event prices', () => {\n    const eventPrices = [\n      {\n        price: text('Event Price 1', '70.0'),\n        description: text(\n          'Event Price Description 1',\n          'Member price general admission'\n        )\n      },\n      {\n        price: text('Event Price 1', '300.0'),\n        description: text('Event Price Description 1', 'VIP member')\n      }\n    ];\n\n    return (\n      <Event\n        eventPrices={eventPrices}\n        website={{ ticketLink: 'ticket/link/url' }}\n      />\n    );\n  });\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Event', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Event.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/molecules/Event',
                  {}
                )
              );
          stories.addDecorator(
            Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
            )({ escapeHTML: !1 })
          ),
            stories
              .add('Event All props', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Title', 'Event Title'),
                    tag: { href: '/topic', title: 'Topic' },
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                    )('Heading level', 2),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Publish Date', 'December 31, 2018'),
                    description: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Description', 'Description text'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    bodyHtml: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Body HTML',
                      "<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
                    ),
                    venue: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 133),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Walker Art Center'),
                      street: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Street', '1750 Hennepin Ave.'),
                      city: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('City', 'Minneapolis'),
                      state: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('State', 'MN'),
                      zip: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('zip', '55403'),
                      latitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Latitude', '44.968436'),
                      longitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Longitude', '-93.288541'),
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Website URL', 'http://www.walkerart.org/'),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/walkerartcenter'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Twitter URL', 'walkerartcenter'),
                      photo_id: '',
                      image_slug: null,
                      phone: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Phone', '(612) 375-7600'),
                      slug: 'walker-art-center',
                      updated_at: '2016-08-11T14:09:52.000-05:00'
                    },
                    artist: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 1233),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Anthony Kiedis'),
                      slug: 'mock-slug-the-red-hot-chili-peppers',
                      photo_id: null,
                      image_slug: '20180104-tba',
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Website URL',
                        'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
                      ),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/ChiliPeppers/'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('https://twitter.com/ChiliPeppers'),
                      is_local: !1,
                      updated_at: '2018-01-04T14:16:28.000-06:00'
                    },
                    eventPrices: [
                      {
                        price: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Price 1', '70.0'),
                        description: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )(
                          'Event Price Description 1',
                          'Member price general admission'
                        )
                      },
                      {
                        price: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Price 2', '300.0'),
                        description: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Price Description 2', 'VIP member')
                      }
                    ],
                    eventDates: [
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 1', 'August 5th, 2019')
                      },
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 2', 'August 23th, 2019')
                      }
                    ]
                  }
                );
              })
              .add('Event w/o Body', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Title', 'Event Title'),
                    tag: { href: '/topic', title: 'Topic' },
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                    )('Heading level', 2),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Publish Date', 'December 31, 2018'),
                    description: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Description', 'Description text'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    venue: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 133),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Walker Art Center'),
                      street: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Street', '1750 Hennepin Ave.'),
                      city: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('City', 'Minneapolis'),
                      state: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('State', 'MN'),
                      zip: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('zip', '55403'),
                      latitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Latitude', '44.968436'),
                      longitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Longitude', '-93.288541'),
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Website URL', 'http://www.walkerart.org/'),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/walkerartcenter'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Twitter URL', 'walkerartcenter'),
                      photo_id: '',
                      image_slug: null,
                      phone: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Phone', '(612) 375-7600'),
                      slug: 'walker-art-center',
                      updated_at: '2016-08-11T14:09:52.000-05:00'
                    },
                    artist: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 1233),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Anthony Kiedis'),
                      slug: 'mock-slug-the-red-hot-chili-peppers',
                      photo_id: null,
                      image_slug: '20180104-tba',
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Website URL',
                        'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
                      ),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/ChiliPeppers/'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('https://twitter.com/ChiliPeppers'),
                      is_local: !1,
                      updated_at: '2018-01-04T14:16:28.000-06:00'
                    },
                    eventDates: [
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 1', 'August 5th, 2019')
                      },
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 2', 'August 23th, 2019')
                      }
                    ]
                  }
                );
              })
              .add('Event w/o EventInfo', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    title: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Title', 'Event Title'),
                    tag: { href: '/topic', title: 'Topic' },
                    headingLevel: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                    )('Heading level', 2),
                    publishDate: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Publish Date', 'December 31, 2018'),
                    description: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Description', 'Description text'),
                    subtitle: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Subtitle',
                      'Eam velit legimus accommodare ne, no sint euismod meliore vis.'
                    ),
                    bodyHtml: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Body HTML',
                      "<p>The Event body will live here. This is simplified because AmatJS will handle the rendering of the body's ProseMirror json.</p><p>However, this field will use html tags like <strong>bold formatting</strong>, paragraphs, images, and other things.</p>"
                    )
                  }
                );
              })
              .add('Event venue', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    venue: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 133),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Walker Art Center'),
                      street: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Street', '1750 Hennepin Ave.'),
                      city: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('City', 'Minneapolis'),
                      state: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('State', 'MN'),
                      zip: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('zip', '55403'),
                      latitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Latitude', '44.968436'),
                      longitude: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Longitude', '-93.288541'),
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Website URL', 'http://www.walkerart.org/'),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/walkerartcenter'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Twitter URL', 'walkerartcenter'),
                      photo_id: '',
                      image_slug: null,
                      phone: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Phone', '(612) 375-7600'),
                      slug: 'walker-art-center',
                      updated_at: '2016-08-11T14:09:52.000-05:00'
                    }
                  }
                );
              })
              .add('Event dates', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    eventDates: [
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 1', 'August 5th, 2019')
                      },
                      {
                        date: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                        )('Event Date 2', 'August 23th, 2019')
                      }
                    ]
                  }
                );
              })
              .add('Event artist', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    artist: {
                      id: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                      )('Venue id', 1233),
                      name: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Name', 'Anthony Kiedis'),
                      slug: 'mock-slug-the-red-hot-chili-peppers',
                      photo_id: null,
                      image_slug: '20180104-tba',
                      website: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Website URL',
                        'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers'
                      ),
                      facebook: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )(
                        'Facebook URL',
                        'https://www.facebook.com/ChiliPeppers/'
                      ),
                      twitter: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('https://twitter.com/ChiliPeppers'),
                      is_local: !1,
                      updated_at: '2018-01-04T14:16:28.000-06:00'
                    }
                  }
                );
              })
              .add('Event prices', function() {
                var eventPrices = [
                  {
                    price: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Event Price 1', '70.0'),
                    description: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Event Price Description 1',
                      'Member price general admission'
                    )
                  },
                  {
                    price: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Event Price 1', '300.0'),
                    description: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Event Price Description 1', 'VIP member')
                  }
                ];
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    eventPrices: eventPrices,
                    website: { ticketLink: 'ticket/link/url' }
                  }
                );
              });
        }.call(this, __webpack_require__(58)(module));
    },
    1347: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _EventTeaser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              484
            ),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text, number } from '@storybook/addon-knobs';\nimport EventTeaser from './EventTeaser';\n\nconst stories = storiesOf('Event Teaser', module);\nstories.addDecorator(withKnobs({ escapeHTML: false }));\n\nstories.add('Event Teaser All Props', () => {\n  return (\n    <EventTeaser\n      id={number('id', 2323)}\n      title={text('Title', 'Event Teaser Title')}\n      headingLevel={number('Heading level', 2)}\n      venue={{\n        id: number('Venue id', 133),\n        name: text('Name', 'Walker Art Center'),\n        street: text('Street', '1750 Hennepin Ave.'),\n        city: text('City', 'Minneapolis'),\n        state: text('State', 'MN'),\n        zip: text('zip', '55403'),\n        latitude: text('Latitude', '44.968436'),\n        longitude: text('Longitude', '-93.288541'),\n        website: text('Website URL', 'http://www.walkerart.org/'),\n        facebook: text(\n          'Facebook URL',\n          'https://www.facebook.com/walkerartcenter'\n        ),\n        twitter: text('Twitter URL', 'walkerartcenter'),\n        photo_id: '',\n        image_slug: null,\n        phone: text('Phone', '(612) 375-7600'),\n        slug: 'walker-art-center',\n        updated_at: '2016-08-11T14:09:52.000-05:00'\n      }}\n      eventDates={[\n        {\n          date: text('Event Date 1', 'August 5th, 2019')\n        },\n        {\n          date: text('Event Date 2', 'August 10th, 2019')\n        }\n      ]}\n    />\n  );\n});\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Event Teaser', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/EventTeaser.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/molecules/EventTeaser',
                  {}
                )
              );
          stories.addDecorator(
            Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
            )({ escapeHTML: !1 })
          ),
            stories.add('Event Teaser All Props', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _EventTeaser__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  id: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('id', 2323),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Title', 'Event Teaser Title'),
                  headingLevel: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                  )('Heading level', 2),
                  venue: {
                    id: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                    )('Venue id', 133),
                    name: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Name', 'Walker Art Center'),
                    street: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Street', '1750 Hennepin Ave.'),
                    city: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('City', 'Minneapolis'),
                    state: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('State', 'MN'),
                    zip: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('zip', '55403'),
                    latitude: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Latitude', '44.968436'),
                    longitude: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Longitude', '-93.288541'),
                    website: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Website URL', 'http://www.walkerart.org/'),
                    facebook: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )(
                      'Facebook URL',
                      'https://www.facebook.com/walkerartcenter'
                    ),
                    twitter: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Twitter URL', 'walkerartcenter'),
                    photo_id: '',
                    image_slug: null,
                    phone: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('Phone', '(612) 375-7600'),
                    slug: 'walker-art-center',
                    updated_at: '2016-08-11T14:09:52.000-05:00'
                  },
                  eventDates: [
                    {
                      date: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Event Date 1', 'August 5th, 2019')
                    },
                    {
                      date: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                      )('Event Date 2', 'August 10th, 2019')
                    }
                  ]
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    1348: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            apm_mimas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              22
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              1
            ),
            _Teaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104),
            _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              64
            ),
            _testdata_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              318
            ),
            withSourceLoader = __webpack_require__(28).withSource,
            __STORY__ =
              (__webpack_require__(28).addSource,
              "import React from 'react';\nimport { Image } from 'apm-mimas';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, text } from '@storybook/addon-knobs';\nimport Teaser from './Teaser';\nimport { teaser } from './__testdata__/teaser';\nimport { image } from '../../__testdata__/image';\n\nconst stories = storiesOf('Teaser', module);\nstories.addDecorator(withKnobs);\n\nstories\n  .add('Teaser default', () => (\n    <Teaser\n      href={text('Link', 'https://www.mpr.org')}\n      headingLevel={2}\n      description={text('Description', 'Enter description text here')}\n      title={text('Title', 'Enter title text here')}\n    />\n  ))\n  .add('Teaser with contributors', () => {\n    const contributors = [\n      text('Contributor one name', 'Sally TacoPants'),\n      text('Contributor two name', 'Jazzy J')\n    ];\n\n    return (\n      <Teaser\n        contributors={contributors}\n        href={text('Link', 'https://www.mpr.org')}\n        headingLevel={2}\n        description={text('Description', 'Enter description text here')}\n        title={text('Title', 'Enter title text here')}\n      />\n    );\n  })\n  .add('Teaser with tag', () => {\n    const tag = {\n      title: text('title', 'Teaser text example'),\n      href: text('Link', 'https://www.mpr.org')\n    };\n    return (\n      <Teaser\n        tag={tag}\n        href={text('Link', 'https://www.mpr.org')}\n        headingLevel={2}\n        description={text('Description', 'Enter description text here')}\n        title={text('Title', 'Enter title text here')}\n      />\n    );\n  })\n\n  .add('Teaser with image', () => {\n    const tempImage = <Image image={image} />;\n    return (\n      <Teaser\n        image={tempImage}\n        href={text('Link', 'https://www.mpr.org')}\n        headingLevel={2}\n        description={text('Description', 'Enter description text here')}\n        title={text('Title', 'Enter title text here')}\n      />\n    );\n  })\n\n  .add('Teaser with audio', () => {\n    return (\n      <Teaser\n        audio={teaser.audio}\n        href={text('Link', teaser.canonicalSlug)}\n        headingLevel={2}\n        description={text('Description', teaser.descriptionText)}\n        title={text('Title', teaser.title)}\n      />\n    );\n  })\n\n  .add('Teaser with publishDate', () => {\n    return (\n      <Teaser\n        audio={teaser.audio}\n        href={text('Link', teaser.canonicalSlug)}\n        headingLevel={2}\n        publishDate={teaser.publishDate}\n        description={text('Description', teaser.descriptionText)}\n        title={text('Title', teaser.title)}\n      />\n    );\n  })\n\n  .add('Teaser with everything', () => {\n    const tempImage = <Image image={image} />;\n    const tag = {\n      title: text('title', 'Teaser text example'),\n      href: text('Link', 'https://www.mpr.org')\n    };\n    const contributors = [\n      text('Contributor one name', 'Sally TacoPants'),\n      text('Contributor two name', 'Jazzy J')\n    ];\n    return (\n      <Teaser\n        audio={teaser.audio}\n        image={tempImage}\n        tag={tag}\n        contributors={contributors}\n        href={text('Link', 'https://www.mpr.org')}\n        headingLevel={2}\n        publishDate={teaser.publishDate}\n        description={text('Description', 'Enter description text here')}\n        title={text('Title', 'Enter title text here')}\n      />\n    );\n  });\n"),
            __ADDS_MAP__ = {},
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf
            )('Teaser', module)
              .addParameters({
                storySource: { source: __STORY__, locationsMap: __ADDS_MAP__ }
              })
              .addDecorator(
                withSourceLoader(
                  __STORY__,
                  __ADDS_MAP__,
                  '/Teaser.story.js',
                  [],
                  {},
                  '/Users/kthompson/Git/apm-titan/src/molecules/Teaser',
                  {}
                )
              );
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
          );
          var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              apm_mimas__WEBPACK_IMPORTED_MODULE_1__.Image,
              { image: _testdata_image__WEBPACK_IMPORTED_MODULE_6__.a }
            ),
            _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              apm_mimas__WEBPACK_IMPORTED_MODULE_1__.Image,
              { image: _testdata_image__WEBPACK_IMPORTED_MODULE_6__.a }
            );
          stories
            .add('Teaser default', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org'),
                  headingLevel: 2,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Description', 'Enter description text here'),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Title', 'Enter title text here')
                }
              );
            })
            .add('Teaser with contributors', function() {
              var contributors = [
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                )('Contributor one name', 'Sally TacoPants'),
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                )('Contributor two name', 'Jazzy J')
              ];
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  contributors: contributors,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org'),
                  headingLevel: 2,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Description', 'Enter description text here'),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Title', 'Enter title text here')
                }
              );
            })
            .add('Teaser with tag', function() {
              var tag = {
                title: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                )('title', 'Teaser text example'),
                href: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                )('Link', 'https://www.mpr.org')
              };
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  tag: tag,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org'),
                  headingLevel: 2,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Description', 'Enter description text here'),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Title', 'Enter title text here')
                }
              );
            })
            .add('Teaser with image', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  image: _ref,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org'),
                  headingLevel: 2,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Description', 'Enter description text here'),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Title', 'Enter title text here')
                }
              );
            })
            .add('Teaser with audio', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  audio: _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.audio,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Link',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a
                      .canonicalSlug
                  ),
                  headingLevel: 2,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Description',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a
                      .descriptionText
                  ),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Title',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.title
                  )
                }
              );
            })
            .add('Teaser with publishDate', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  audio: _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.audio,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Link',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a
                      .canonicalSlug
                  ),
                  headingLevel: 2,
                  publishDate:
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.publishDate,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Description',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a
                      .descriptionText
                  ),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )(
                    'Title',
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.title
                  )
                }
              );
            })
            .add('Teaser with everything', function() {
              var tag = {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('title', 'Teaser text example'),
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org')
                },
                contributors = [
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Contributor one name', 'Sally TacoPants'),
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Contributor two name', 'Jazzy J')
                ];
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Teaser__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  audio: _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.audio,
                  image: _ref2,
                  tag: tag,
                  contributors: contributors,
                  href: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Link', 'https://www.mpr.org'),
                  headingLevel: 2,
                  publishDate:
                    _testdata_teaser__WEBPACK_IMPORTED_MODULE_5__.a.publishDate,
                  description: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Description', 'Enter description text here'),
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Title', 'Enter title text here')
                }
              );
            });
        }.call(this, __webpack_require__(58)(module));
    },
    163: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'c', function() {
        return toSentence;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return prevIndex;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return nextIndex;
        });
      __webpack_require__(24), __webpack_require__(83);
      function toSentence(arr) {
        if (arr && 0 !== arr.length) {
          if (1 === arr.length) return arr[0];
          if (2 === arr.length)
            return ''.concat(arr[0], ' and ').concat(arr[1]);
          var last = arr.pop();
          return ''.concat(arr.join(', '), ', and ').concat(last);
        }
      }
      function prevIndex(i) {
        return 1 < i ? i - 1 : 1;
      }
      function nextIndex(i, count) {
        return i < count ? i + 1 : count;
      }
    },
    213: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(36);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__
        );
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var Figure = function(_ref) {
        var _classNames,
          elementClass = _ref.elementClass,
          image = _ref.image,
          caption = _ref.caption,
          size = _ref.size,
          position = _ref.position,
          credit = _ref.credit,
          creditHref = _ref.creditHref,
          classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
            (_defineProperty(
              (_classNames = { figure: !0 }),
              'figure-'.concat(position),
              position
            ),
            _defineProperty(_classNames, 'figure-'.concat(size), size),
            _defineProperty(_classNames, elementClass, elementClass),
            _classNames)
          ),
          _ref2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'a',
            { href: creditHref, className: 'figure_credit' },
            credit
          ),
          _ref3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'figure_credit' },
            credit
          );
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'figure',
          { className: classes },
          image,
          caption || credit
            ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'figcaption',
                { className: 'figure_caption' },
                caption &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    { className: 'figure_text' },
                    caption
                  ),
                credit && creditHref ? _ref2 : credit ? _ref3 : void 0
              )
            : ''
        );
      };
      (Figure.displayName = 'Figure'),
        (Figure.defaultProps = { size: 'full' }),
        (Figure.propTypes = {
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          image:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element
              .isRequired,
          caption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          position: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          credit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          creditHref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
        }),
        (Figure.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Figure',
          props: {
            size: {
              defaultValue: { value: "'full'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            image: { type: { name: 'element' }, required: !0, description: '' },
            caption: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            position: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            credit: { type: { name: 'string' }, required: !1, description: '' },
            creditHref: {
              type: { name: 'string' },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Figure),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Figure/Figure.js'] = {
            name: 'Figure',
            docgenInfo: Figure.__docgenInfo,
            path: 'src/atoms/Figure/Figure.js'
          });
    },
    214: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(35),
        __webpack_require__(18),
        __webpack_require__(428),
        __webpack_require__(26),
        __webpack_require__(39),
        __webpack_require__(86);
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__
        ),
        date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1356),
        date_fns_tz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1354),
        date_fns_tz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1355),
        date_fns_tz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(485);
      var Time = function(props) {
        var time = /\d\d\d\d-[01]\d-[0123]\dT[012]\d:[012345]\d/.test(
            props.dateTime
          )
            ? (function constructTime(timeString) {
                var sections = timeString.split(/-|T/),
                  year = parseInt(sections[0]),
                  month = parseInt(sections[1] - 1),
                  day = parseInt(sections[2]).toString(),
                  timeBreak = sections[3].split(':'),
                  hour = parseInt(timeBreak[0]).toString(),
                  minute = parseInt(timeBreak[1]);
                return new Date(year, month, day, hour, minute);
              })(props.dateTime)
            : new Date(props.dateTime),
          utcTime = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_9__.a)(
            time,
            'America/Chicago'
          ),
          chicagoTime = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_10__.a)(
            utcTime,
            'America/Chicago'
          );
        return 'distance' === props.type
          ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'time',
              {
                className: props.elementClass && props.elementClass,
                dateTime: props.dateTime,
                title: Object(
                  date_fns_tz__WEBPACK_IMPORTED_MODULE_11__.a
                )(chicagoTime, 'MMMM d, yyyy h:mm aa', {
                  timeZone: 'America/Chicago'
                })
              },
              Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(time)
            )
          : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'time',
              {
                className: props.elementClass && props.elementClass,
                dateTime: props.dateTime
              },
              Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_11__.a)(
                chicagoTime,
                props.formatString,
                { timeZone: 'America/Chicago' }
              )
            );
      };
      (Time.defaultProps = { type: 'timestamp', formatString: 'MMMM d, yyyy' }),
        (Time.propTypes = {
          dateTime:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
          formatString:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
          type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([
            'timestamp',
            'distance'
          ])
        }),
        (Time.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Time',
          props: {
            type: {
              defaultValue: { value: "'timestamp'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'timestamp'", computed: !1 },
                  { value: "'distance'", computed: !1 }
                ]
              },
              required: !1,
              description: ''
            },
            formatString: {
              defaultValue: { value: "'MMMM d, yyyy'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            dateTime: {
              type: { name: 'string' },
              required: !0,
              description: ''
            },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Time),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Time/Time.js'] = {
            name: 'Time',
            docgenInfo: Time.__docgenInfo,
            path: 'src/atoms/Time/Time.js'
          });
    },
    215: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(36);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        );
      var Body = function(_ref) {
        var bodyHtml = _ref.bodyHtml,
          elementClass = _ref.elementClass,
          classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(
            (function _defineProperty(obj, key, value) {
              return (
                key in obj
                  ? Object.defineProperty(obj, key, {
                      value: value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (obj[key] = value),
                obj
              );
            })({ userContent: !0 }, elementClass, elementClass)
          );
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: classes,
            dangerouslySetInnerHTML: (function markup() {
              return { __html: bodyHtml };
            })()
          }
        );
      };
      (Body.displayName = 'Body'),
        (Body.propTypes = {
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          bodyHtml:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
        }),
        (Body.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Body',
          props: {
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            bodyHtml: {
              type: { name: 'string' },
              required: !0,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Body),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/molecules/Body/Body.js'] = {
            name: 'Body',
            docgenInfo: Body.__docgenInfo,
            path: 'src/molecules/Body/Body.js'
          });
    },
    216: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(24), __webpack_require__(17);
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        ),
        _ref2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          'h2',
          null,
          'Location'
        ),
        _ref3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          'br',
          null
        ),
        _ref4 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          'br',
          null
        ),
        EventVenue = function(_ref) {
          var venue = _ref.venue;
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'eventInfo-venue' },
            _ref2,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'a',
              {
                href: venue.website,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'link-plain'
              },
              venue.name
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'address',
              null,
              venue.street,
              ' ',
              venue.city,
              ', ',
              venue.state,
              _ref3,
              venue.zip,
              _ref4,
              venue.phone
            ),
            venue.latitude &&
              venue.longitude &&
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'a',
                {
                  href: 'https://www.google.com/maps/?q='
                    .concat(venue.latitude, ',')
                    .concat(venue.longitude),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'link'
                },
                'View Map'
              )
          );
        };
      (EventVenue.displayName = 'EventVenue'),
        (EventVenue.propTypes = {
          venue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
            name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            website: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            street: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            city: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            zip: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            phone: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            latitude: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            longitude: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
          })
        }),
        (EventVenue.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventVenue',
          props: {
            venue: {
              type: {
                name: 'shape',
                value: {
                  name: { name: 'string', required: !1 },
                  website: { name: 'string', required: !1 },
                  street: { name: 'string', required: !1 },
                  city: { name: 'string', required: !1 },
                  state: { name: 'string', required: !1 },
                  zip: { name: 'string', required: !1 },
                  phone: { name: 'string', required: !1 },
                  latitude: { name: 'string', required: !1 },
                  longitude: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = EventVenue),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventVenue.js'] = {
            name: 'EventVenue',
            docgenInfo: EventVenue.__docgenInfo,
            path: 'src/molecules/Event/EventVenue.js'
          });
    },
    217: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(12);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        ),
        _atoms_Time_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          214
        ),
        _ref2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'h2',
          null,
          'Event Dates'
        ),
        EventDates = function(_ref) {
          var eventDates = _ref.eventDates;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'eventInfo-dates' },
            _ref2,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'ul',
              null,
              eventDates.map(function(event, i) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'li',
                  { className: 'eventInfo-date', key: i },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _atoms_Time_Time__WEBPACK_IMPORTED_MODULE_3__.a,
                    { dateTime: event.date, formatString: 'MMMM d, yyyy' }
                  )
                );
              })
            )
          );
        };
      (EventDates.displayName = 'EventDates'),
        (EventDates.propTypes = {
          eventDates: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
              date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
              description:
                prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
            })
          )
        }),
        (EventDates.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventDates',
          props: {
            eventDates: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    date: { name: 'string', required: !1 },
                    description: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = EventDates),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/molecules/Event/EventDates.js'] = {
            name: 'EventDates',
            docgenInfo: EventDates.__docgenInfo,
            path: 'src/molecules/Event/EventDates.js'
          });
    },
    223: function(module) {
      module.exports = JSON.parse(
        '{"variables":{"page":1},"loading":false,"networkStatus":7,"episodesList":{"title":"Terrible, Thanks for Asking®","results":{"nextPage":2,"pageSize":10,"totalPages":8,"totalItems":80,"previousPage":null,"currentPage":1,"items":[{"id":"01D5CZQHFKGEJV9DS32DB2F9M7","title":"Episode #62: The Bride Price","publishDate":"2019-02-19T17:20:10+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Every wedding has a at least a little bit of drama. \\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/02/19/episode-62-the-bride-price","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"Archive Portal","durationHms":null,"encodings":[{"httpFilePath":"https://play-dev.publicradio.org/unreplaced_ua/o/devel/minnesota/archive_portal/10000.mp3","__typename":"Encoding"}],"__typename":"Audio"},{"title":"The Show -  3pisode","durationHms":null,"encodings":[{"httpFilePath":"https://play-dev.publicradio.org/unreplaced_ua/o/devel/foo/foo2_20190403_2_64.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQTRNTD0EA3BZSAQ0PV1G","title":"Episode #64: WWJD?","publishDate":"2019-03-05T15:20:31+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Jenny and Michelle are twins. Twin telepathy, switching places, the whole deal. Pat and Teddy are big parts of Jenny and Michelle’s lives, but no one has been HERE before. You can catch up with TTFA on Instagram, Twitter and Facebook using @ttfapodcast. Nora’s Instagram is @noraborealis. You can pre-order Nora’s new book – No […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/03/05/episode-64-wwjd","primaryVisuals":{"thumbnail":{"aspectRatios":{"normal":{"instances":[{"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/normal/7466a7-2019-02-columbo.jpg","width":400,"height":301,"__typename":"Instance"},{"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/normal/18e1e6-2019-02-columbo.jpg","width":600,"height":451,"__typename":"Instance"}],"__typename":"AspectRatio"},"portrait":{"instances":[{"width":400,"height":500,"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/portrait/b0b5ae-2019-02-columbo.jpg","__typename":"Instance"},{"width":600,"height":750,"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/portrait/90ba1b-2019-02-columbo.jpg","__typename":"Instance"}],"__typename":"AspectRatio"},"widescreen":{"instances":[{"width":400,"height":225,"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/widescreen/055467-2019-02-columbo.jpg","__typename":"Instance"},{"width":600,"height":337,"url":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/widescreen/c460ca-2019-02-columbo.jpg","__typename":"Instance"}],"__typename":"AspectRatio"},"__typename":"AspectRatioList"},"contentArea":"TBTL targeted by Rasmussen","dateTaken":null,"dateline":"","fallback":"https://img.apmcdn.org/dev/e892a1a7ba08d41f14d4552ec41a69c8450f278b/uncropped/1b9835-2019-02-columbo.jpg","longCaption":"Just one more thing...","shortCaption":"Columbo.jpg","xid":300233,"__typename":"Image"},"__typename":"PrimaryVisual"},"audio":[],"__typename":"Episode"},{"id":"01D5CZQM6E7EDQSCWWY0PR5SWT","title":"Episode #63: The Intended Outcome","publishDate":"2019-02-26T11:48:40+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Deya and Sandra are two moms who are stuck at the intersection of maternal love and uncertainty.\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/02/26/episode-63-the-intended-outcome","primaryVisuals":{"thumbnail":{"aspectRatios":{"normal":{"instances":[{"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/normal/768772-2019-02-show-pic-andrew-hawaii.jpg","width":400,"height":301,"__typename":"Instance"},{"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/normal/e1f195-2019-02-show-pic-andrew-hawaii.jpg","width":600,"height":451,"__typename":"Instance"},{"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/normal/6951ad-2019-02-show-pic-andrew-hawaii.jpg","width":1000,"height":752,"__typename":"Instance"},{"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/normal/87bd20-2019-02-show-pic-andrew-hawaii.jpg","width":1400,"height":1053,"__typename":"Instance"},{"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/normal/cf512a-2019-02-show-pic-andrew-hawaii.jpg","width":2000,"height":1504,"__typename":"Instance"}],"__typename":"AspectRatio"},"portrait":{"instances":[{"width":400,"height":500,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/portrait/c7b892-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":600,"height":750,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/portrait/9840f7-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":1000,"height":1250,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/portrait/99a0f0-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":1400,"height":1750,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/portrait/dba2bc-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":2000,"height":2500,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/portrait/1bf81c-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"}],"__typename":"AspectRatio"},"widescreen":{"instances":[{"width":400,"height":225,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/widescreen/f7f3c8-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":600,"height":337,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/widescreen/5e55c3-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":1000,"height":562,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/widescreen/259b86-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":1400,"height":786,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/widescreen/eb51fc-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"},{"width":2000,"height":1124,"url":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/widescreen/1bb687-2019-02-show-pic-andrew-hawaii.jpg","__typename":"Instance"}],"__typename":"AspectRatio"},"__typename":"AspectRatioList"},"contentArea":"TBTL","dateTaken":"2019-02-21T00:00:00+00:00","dateline":"","fallback":"https://img.apmcdn.org/dev/8bb4ac84c7fb4913f4c1a4d98632449c97bef4e7/uncropped/7cde69-2019-02-show-pic-andrew-hawaii.jpg","longCaption":"Andrew vacations","shortCaption":"Show-Pic-Andrew-Hawaii.jpg","xid":300223,"__typename":"Image"},"__typename":"PrimaryVisual"},"audio":[{"title":"63: The Intended Outcome","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2019/02/ttfa_20190226_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQES2JSXPSDRNVD1PKAD4","title":"Episode #61: A Bailey Moment","publishDate":"2019-02-12T11:37:21+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Parenting is *never* what you expect it to be. Maiya knows that as well as anyone.\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/02/12/episode-61-a-bailey-moment","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"61: A Bailey Moment","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2019/02/ttfa_20190212_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQPXRC100HJE1NRFA7XEN","title":"Episode #60: The Treatment","publishDate":"2019-02-05T16:28:19+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Rachel Haines makes everything look easy. Even when things are very very very not easy. A gymnast, a competitor, and a champion, Rachel endures and survives… with a smile. Rachel’s book is out April 12. You can pre-order it here. You can catch up with TTFA on Instagram, Twitter and Facebook using @ttfapodcast. Nora’s Instagram […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/02/05/episode-60-the-treatment","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"60: The Treatment","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2019/02/ttfa_20190205_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQC3BXJ9VW8XBWRF1WFP4","title":"Episode #59: Where Are They Now?","publishDate":"2019-01-29T16:07:01+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Our episodes end. Obviously. But the lives whose stories we tell… they keep going. So today we are going to get back in touch with some old friends and see what has happened and what they’ve been up to since we first got to know them. WARNING – spoilers ahead for some past episodes of […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/01/29/episode-59-where-are-they-now","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"59: Where Are They Now?","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2019/01/ttfa_20190129_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQ9D8Q1K4AH2WSATAPKX3","title":"Listen to This: The Slowdown","publishDate":"2019-01-23T17:09:31+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Need a slight daily readjustment of your point of view? A moment to focus and meditate on something besides your to-do list? We want to introduce you to The Slowdown. It’s a podcast we love where every weekday, U.S. Poet Laureate Tracy K. Smith delivers a different way to see the world — through poetry. […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2019/01/23/listen-to-this-the-slowdown","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"Listen to This: The Slowdown","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2019/01/ttfa_20190123_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQ3YD6J5JXB89JGB023GA","title":"Episode #58: Happy(ish) Holidays III","publishDate":"2018-11-27T13:41:09+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"In our final episode of the season we are talking about… The Holidays. Which are a time of reflection and anticipation. Of looking back at what we did… and what was done to us. We will hear from comedian and writer Alyssa Limperis and the shine-it-up Holiday letter she wrote the year her dad died […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2018/11/27/episode-58-happyish-holidays-iii","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"58: Happy(ish) Holidays III","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2018/11/ttfa_20181127_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZQ168J106B5AWA0NYV4Z3","title":"Episode #57: Don’t Should Yourself","publishDate":"2018-11-20T11:04:42+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Two things that grief brings you: Kleenex and hotdish. Two other things? Anger and people telling you what you should do. This week, stories about grief, anger and Hans’ Gramma, written and read by Nora. You can pre-order Nora’s new book – “No Happy Endings” – from her website at noraborealis.com/book You can catch up […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2018/11/20/episode-57-dont-should-yourself","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"57: Don\'t Should Yourself","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2018/11/ttfa_20181120_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"},{"id":"01D5CZPYFKAB2W298BYMVYNKQF","title":"Episode #56: Birthright","publishDate":"2018-11-13T11:50:34+00:00","description":"{\\"type\\":\\"doc\\",\\"content\\":[{\\"type\\":\\"paragraph\\",\\"content\\":[{\\"text\\":\\"Sheridan’s dad died by suicide when she was 6 years old. And for years she feared that was his legacy. And her birthright. You can catch up with TTFA on Instagram, Twitter and Facebook using @ttfapodcast. Nora’s Instagram is @noraborealis. Check out our sponsors this week: Talkspace — talkspace.com/ttfa Third Love — thirdlove.com/terrible For Hers […]\\",\\"type\\":\\"text\\"}]}]}","canonicalSlug":"2018/11/13/episode-56-birthright","primaryVisuals":{"thumbnail":null,"__typename":"PrimaryVisual"},"audio":[{"title":"56: Birthright","durationHms":null,"encodings":[{"httpFilePath":"https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2018/11/ttfa_20181113_128.mp3","__typename":"Encoding"}],"__typename":"Audio"}],"__typename":"Episode"}],"__typename":"ResultsPage"},"__typename":"Collection"}}'
      );
    },
    224: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        next_link =
          (__webpack_require__(12),
          __webpack_require__(52),
          __webpack_require__(17),
          __webpack_require__(63)),
        link_default = __webpack_require__.n(next_link),
        Heading = __webpack_require__(73),
        TagLink = __webpack_require__(100),
        ContentHeader = function(_ref) {
          var title = _ref.title,
            subtitle = _ref.subtitle,
            tag = _ref.tag,
            headingLevel = _ref.headingLevel,
            authors = _ref.authors,
            publishDate = _ref.publishDate;
          return react_default.a.createElement(
            'header',
            { className: 'content_header' },
            tag &&
              react_default.a.createElement(TagLink.a, {
                href: tag.href,
                tagName: tag.tagName,
                elementClass: 'content_topic'
              }),
            react_default.a.createElement(
              Heading.a,
              { level: headingLevel || 1 },
              title
            ),
            subtitle &&
              react_default.a.createElement(
                'p',
                {
                  className: 'content_subtitle',
                  'data-testid': 'contentSubtitle'
                },
                subtitle
              ),
            react_default.a.createElement(
              'div',
              { className: 'content_meta' },
              authors &&
                (function(authors) {
                  if (authors && !(0 >= authors.length))
                    return 1 === authors.length
                      ? react_default.a.createElement(
                          'div',
                          {
                            className: 'content_byline',
                            'data-testid': 'contentByline'
                          },
                          'By ',
                          react_default.a.createElement(
                            link_default.a,
                            { href: authors[0].href },
                            ''.concat(authors[0].name)
                          )
                        )
                      : 2 === authors.length
                      ? react_default.a.createElement(
                          'div',
                          {
                            className: 'content_byline',
                            'data-testid': 'contentByline'
                          },
                          'By ',
                          react_default.a.createElement(
                            link_default.a,
                            { href: authors[0].href },
                            ''.concat(authors[0].name)
                          ),
                          ' and ',
                          react_default.a.createElement(
                            link_default.a,
                            { href: authors[1].href },
                            ''.concat(authors[1].name)
                          )
                        )
                      : react_default.a.createElement(
                          'div',
                          {
                            className: 'content_byline',
                            'data-testid': 'contentByline'
                          },
                          'By ',
                          authors
                            .slice(0, authors.length - 2)
                            .map(function(author) {
                              return react_default.a.createElement(
                                'span',
                                { key: author.href },
                                react_default.a.createElement(
                                  link_default.a,
                                  { href: author.href },
                                  ''.concat(author.name)
                                ),
                                ', '
                              );
                            }),
                          react_default.a.createElement(
                            link_default.a,
                            { href: authors[authors.length - 2].href },
                            ''.concat(authors[authors.length - 2].name)
                          ),
                          ' and ',
                          react_default.a.createElement(
                            link_default.a,
                            { href: authors[authors.length - 1].href },
                            ''.concat(authors[authors.length - 1].name)
                          )
                        );
                })(authors),
              publishDate
            )
          );
        };
      (ContentHeader.displayName = 'ContentHeader'),
        (ContentHeader.propTypes = {
          authors: prop_types_default.a.arrayOf(
            prop_types_default.a.shape({
              name: prop_types_default.a.string,
              href: prop_types_default.a.string
            })
          ),
          headingLevel: prop_types_default.a.number,
          publishDate: prop_types_default.a.node,
          subtitle: prop_types_default.a.string,
          tag: prop_types_default.a.shape({
            href: prop_types_default.a.string,
            tagName: prop_types_default.a.string
          }),
          title: prop_types_default.a.string.isRequired
        }),
        (ContentHeader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ContentHeader',
          props: {
            authors: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    name: { name: 'string', required: !1 },
                    href: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            headingLevel: {
              type: { name: 'number' },
              required: !1,
              description: ''
            },
            publishDate: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            subtitle: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            tag: {
              type: {
                name: 'shape',
                value: {
                  href: { name: 'string', required: !1 },
                  tagName: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            },
            title: { type: { name: 'string' }, required: !0, description: '' }
          }
        });
      var Content_ContentHeader = ContentHeader;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Content/ContentHeader.js'] = {
          name: 'ContentHeader',
          docgenInfo: ContentHeader.__docgenInfo,
          path: 'src/molecules/Content/ContentHeader.js'
        });
      var Figure = __webpack_require__(213),
        Body = __webpack_require__(215),
        Content = function(_ref) {
          var title = _ref.title,
            subtitle = _ref.subtitle,
            authors = _ref.authors,
            headingLevel = _ref.headingLevel,
            publishDate = _ref.publishDate,
            tag = _ref.tag,
            image = _ref.image,
            imageCaption = _ref.imageCaption,
            imageCredit = _ref.imageCredit,
            imageCreditHref = _ref.imageCreditHref,
            bodyHtml = _ref.bodyHtml;
          return react_default.a.createElement(
            'article',
            { className: 'content' },
            react_default.a.createElement(
              'div',
              { className: 'col col-page' },
              react_default.a.createElement(Content_ContentHeader, {
                title: title,
                authors: authors,
                headingLevel: headingLevel,
                publishDate: publishDate,
                subtitle: subtitle,
                tag: tag
              })
            ),
            image &&
              react_default.a.createElement(Figure.a, {
                image: image,
                caption: imageCaption,
                credit: imageCredit,
                creditHref: imageCreditHref
              }),
            bodyHtml &&
              react_default.a.createElement(
                'div',
                { className: 'col col-content' },
                react_default.a.createElement(Body.a, { bodyHtml: bodyHtml })
              )
          );
        };
      (Content.displayName = 'Content'),
        (Content.propTypes = {
          authors: prop_types_default.a.arrayOf(
            prop_types_default.a.shape({
              name: prop_types_default.a.string,
              href: prop_types_default.a.string
            })
          ),
          headingLevel: prop_types_default.a.number,
          publishDate: prop_types_default.a.node,
          subtitle: prop_types_default.a.string,
          bodyHtml: prop_types_default.a.string,
          image: prop_types_default.a.object,
          imageCaption: prop_types_default.a.string,
          imageCredit: prop_types_default.a.string,
          imageCreditHref: prop_types_default.a.string,
          tag: prop_types_default.a.shape({
            title: prop_types_default.a.string,
            href: prop_types_default.a.string
          }),
          title: prop_types_default.a.string.isRequired
        }),
        (Content.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Content',
          props: {
            authors: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    name: { name: 'string', required: !1 },
                    href: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            headingLevel: {
              type: { name: 'number' },
              required: !1,
              description: ''
            },
            publishDate: {
              type: { name: 'node' },
              required: !1,
              description: ''
            },
            subtitle: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            bodyHtml: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            image: { type: { name: 'object' }, required: !1, description: '' },
            imageCaption: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            imageCredit: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            imageCreditHref: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            tag: {
              type: {
                name: 'shape',
                value: {
                  title: { name: 'string', required: !1 },
                  href: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            },
            title: { type: { name: 'string' }, required: !0, description: '' }
          }
        });
      __webpack_exports__.a = Content;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/molecules/Content/Content.js'] = {
          name: 'Content',
          docgenInfo: Content.__docgenInfo,
          path: 'src/molecules/Content/Content.js'
        });
    },
    318: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return image;
      });
      var image = {
        aspect_ratios: {
          normal: {
            instances: [
              {
                width: 400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/normal/fa6aa0-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 301
              },
              {
                width: 600,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/normal/00b407-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 451
              },
              {
                width: 1e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/normal/10ac72-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 752
              },
              {
                width: 1400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/normal/6e721c-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1053
              },
              {
                width: 2e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/normal/f49c92-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1504
              }
            ],
            slug: 'normal'
          },
          square: {
            instances: [
              {
                width: 400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/square/5ecd52-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 400
              },
              {
                width: 600,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/square/de193e-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 600
              },
              {
                width: 1e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/square/7cb7e2-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1e3
              },
              {
                width: 1400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/square/822d4e-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1400
              },
              {
                width: 2e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/square/f977a8-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 2e3
              }
            ],
            slug: 'square'
          },
          thumbnail: {
            instances: [
              {
                width: 120,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/thumbnail/e8796f-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 90
              },
              {
                width: 300,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/thumbnail/dfad0f-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 226
              }
            ],
            slug: 'thumbnail'
          },
          widescreen: {
            instances: [
              {
                width: 400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 225
              },
              {
                width: 600,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 337
              },
              {
                width: 1e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 562
              },
              {
                width: 1400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 787
              },
              {
                width: 2e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1124
              }
            ],
            slug: 'widescreen'
          },
          portrait: {
            instances: [
              {
                width: 400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/portrait/e6415b-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 500
              },
              {
                width: 600,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/portrait/0ebc89-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 750
              },
              {
                width: 1e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/portrait/fed99c-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1250
              },
              {
                width: 1400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/portrait/523b4b-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1750
              },
              {
                width: 1883,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/portrait/766692-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 2354
              }
            ],
            slug: 'portrait'
          },
          uncropped: {
            instances: [
              {
                width: 400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/uncropped/35bd3b-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 320
              },
              {
                width: 600,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/uncropped/f5db37-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 480
              },
              {
                width: 1e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/uncropped/04a63f-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 800
              },
              {
                width: 1400,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/uncropped/72bc48-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1120
              },
              {
                width: 2e3,
                url:
                  'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/uncropped/f20034-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
                height: 1600
              }
            ],
            slug: 'uncropped'
          }
        },
        long_caption: 'Serena Brook opens our show at The Town Hall',
        short_caption: 'Serena Brook opens our show at The Town Hall',
        width: 'full',
        preferred_aspect_ratio_slug: 'widescreen',
        id: 'c2c452354fbff94d720ba8f86e2c71ba7427b306',
        credit_url: '',
        type: 'apmImage',
        float: 'none',
        credit: 'American Public Media',
        url:
          'https://img.publicradio.org/images/20181220-serena-brook-opens-our-show-at-the-town-hall.jpg',
        srcset:
          'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 600w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1000w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 2000w'
      };
    },
    482: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'spinner' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            { className: 'invisible' },
            'Loading'
          )
        ),
        Loading = function() {
          return _ref;
        };
      (Loading.displayName = 'Loading'),
        (Loading.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Loading'
        }),
        (__webpack_exports__.a = Loading),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Loading/Loading.js'] = {
            name: 'Loading',
            docgenInfo: Loading.__docgenInfo,
            path: 'src/atoms/Loading/Loading.js'
          });
    },
    483: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(24),
        __webpack_require__(1341),
        __webpack_require__(47),
        __webpack_require__(12),
        __webpack_require__(36),
        __webpack_require__(49);
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__
        ),
        uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1357),
        _Link_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54),
        prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_9__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_10__
        ),
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(163);
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var Pagination = function(_ref) {
        var elementClass = _ref.elementClass,
          prevNextClass = _ref.prevNextClass,
          firstLastClass = _ref.firstLastClass,
          numberClass = _ref.numberClass,
          currentNumberClass = _ref.currentNumberClass,
          currentPage = _ref.currentPage,
          totalPages = _ref.totalPages,
          buffer = _ref.buffer,
          hrefPrefix = _ref.hrefPrefix,
          asPrefix = _ref.asPrefix,
          hasFirstAndLast = _ref.hasFirstAndLast,
          inclusiveFirstLast = _ref.inclusiveFirstLast,
          firstLastSeparator = _ref.firstLastSeparator,
          firstSymbol = _ref.firstSymbol,
          prevSymbol = _ref.prevSymbol,
          nextSymbol = _ref.nextSymbol,
          lastSymbol = _ref.lastSymbol,
          classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            _defineProperty({ pagination: !0 }, elementClass, elementClass)
          ),
          firstLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            _defineProperty(
              { pagination_link: !0, 'pagination_link-first': !0 },
              firstLastClass,
              firstLastClass
            )
          ),
          prevLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            _defineProperty(
              { pagination_link: !0, 'pagination_link-prev': !0 },
              prevNextClass,
              prevNextClass
            )
          ),
          nextLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            _defineProperty(
              { pagination_link: !0, 'pagination_link-next': !0 },
              prevNextClass,
              prevNextClass
            )
          ),
          lastLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            _defineProperty(
              { pagination_link: !0, 'pagination_link-last': !0 },
              firstLastClass,
              firstLastClass
            )
          ),
          paginationArray = [];
        return (
          Array(2 * buffer + 1)
            .fill(0)
            .forEach(function(val, i) {
              var value = i + currentPage - buffer;
              0 < value && value <= totalPages && paginationArray.push(value);
            }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'nav',
            { 'data-testid': 'pagination-test', className: classes },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'ul',
              { className: 'pagination_list' },
              (function showFirst() {
                return (
                  !!hasFirstAndLast &&
                  (!!(inclusiveFirstLast && currentPage > 1 + buffer) ||
                    (!inclusiveFirstLast && 1 < currentPage))
                );
              })() &&
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'li',
                  { className: 'pagination_page pagination_page-first' },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      href: '/'.concat(hrefPrefix),
                      as: '/'.concat(asPrefix, '/1'),
                      className: firstLinkClasses
                    },
                    firstSymbol
                  ),
                  firstLastSeparator &&
                    currentPage > buffer + 2 &&
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      'span',
                      {
                        className:
                          'pagination_separator pagination_separator-first'
                      },
                      firstLastSeparator
                    )
                ),
              1 < currentPage &&
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'li',
                  { className: 'pagination_page pagination_page-prev' },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      href: '/'.concat(hrefPrefix),
                      as: '/'
                        .concat(asPrefix, '/')
                        .concat(
                          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__.b)(
                            currentPage
                          )
                        ),
                      className: prevLinkClasses
                    },
                    prevSymbol
                  )
                ),
              paginationArray.map(function(value) {
                var _classNames6,
                  pageClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
                    {
                      pagination_page: !0,
                      'pagination_page-number': !0,
                      'pagination_page-current': currentPage === value
                    }
                  ),
                  linkClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
                    (_defineProperty(
                      (_classNames6 = {
                        pagination_link: !0,
                        'pagination_link-number': !0,
                        'pagination_link-current': currentPage === value
                      }),
                      numberClass,
                      numberClass
                    ),
                    _defineProperty(
                      _classNames6,
                      currentNumberClass,
                      currentNumberClass && currentPage === value
                    ),
                    _classNames6)
                  );
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'li',
                  {
                    key: Object(uuid__WEBPACK_IMPORTED_MODULE_7__.a)(),
                    className: pageClasses
                  },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      href: '/'.concat(hrefPrefix),
                      as: '/'.concat(asPrefix, '/').concat(value),
                      className: linkClasses
                    },
                    value
                  )
                );
              }),
              currentPage < totalPages &&
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'li',
                  { className: 'pagination_page pagination_page-next' },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      href: '/'.concat(hrefPrefix),
                      as: '/'
                        .concat(asPrefix, '/')
                        .concat(
                          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__.a)(
                            currentPage,
                            totalPages
                          )
                        ),
                      className: nextLinkClasses
                    },
                    nextSymbol
                  )
                ),
              (function showLast() {
                return (
                  !!hasFirstAndLast &&
                  (!!(
                    inclusiveFirstLast && currentPage < totalPages - buffer
                  ) ||
                    (!inclusiveFirstLast && currentPage < totalPages))
                );
              })() &&
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'li',
                  { className: 'pagination_page pagination_page-last' },
                  firstLastSeparator &&
                    currentPage < totalPages - buffer - 1 &&
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      'span',
                      {
                        className:
                          'pagination_separator pagination_separator-last'
                      },
                      firstLastSeparator
                    ),
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      href: '/'.concat(hrefPrefix),
                      as: '/'.concat(asPrefix, '/').concat(totalPages),
                      className: lastLinkClasses
                    },
                    lastSymbol
                  )
                )
            )
          )
        );
      };
      (Pagination.displayName = 'Pagination'),
        (Pagination.propTypes = {
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          prevNextClass:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          firstLastClass:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          numberClass: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          currentNumberClass:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          currentPage:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
          hrefPrefix:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
          asPrefix:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
          buffer:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
          totalPages:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
          hasFirstAndLast:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
          inclusiveFirstLast:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
          firstLastSeparator:
            prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
          firstSymbol: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any,
          prevSymbol: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any,
          nextSymbol: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any,
          lastSymbol: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any
        }),
        (Pagination.defaultProps = {
          hasFirstAndLast: !0,
          prevSymbol: '〈',
          nextSymbol: '〉',
          firstSymbol: '《',
          lastSymbol: '》'
        }),
        (Pagination.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Pagination',
          props: {
            hasFirstAndLast: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: ''
            },
            prevSymbol: {
              defaultValue: { value: "'〈'", computed: !1 },
              type: { name: 'any' },
              required: !1,
              description: ''
            },
            nextSymbol: {
              defaultValue: { value: "'〉'", computed: !1 },
              type: { name: 'any' },
              required: !1,
              description: ''
            },
            firstSymbol: {
              defaultValue: { value: "'《'", computed: !1 },
              type: { name: 'any' },
              required: !1,
              description: ''
            },
            lastSymbol: {
              defaultValue: { value: "'》'", computed: !1 },
              type: { name: 'any' },
              required: !1,
              description: ''
            },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            prevNextClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            firstLastClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            numberClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            currentNumberClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            currentPage: {
              type: { name: 'number' },
              required: !0,
              description: ''
            },
            hrefPrefix: {
              type: { name: 'string' },
              required: !0,
              description: ''
            },
            asPrefix: {
              type: { name: 'string' },
              required: !0,
              description: ''
            },
            buffer: { type: { name: 'number' }, required: !0, description: '' },
            totalPages: {
              type: { name: 'number' },
              required: !0,
              description: ''
            },
            inclusiveFirstLast: {
              type: { name: 'bool' },
              required: !1,
              description: ''
            },
            firstLastSeparator: {
              type: { name: 'string' },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Pagination),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Pagination/Pagination.js'] = {
            name: 'Pagination',
            docgenInfo: Pagination.__docgenInfo,
            path: 'src/atoms/Pagination/Pagination.js'
          });
    },
    484: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__
        ),
        _atoms_Link_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54),
        _atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          73
        ),
        _Event_EventDates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          217
        ),
        _Event_EventVenue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          216
        ),
        EventTeaser = function(_ref) {
          var id = _ref.id,
            title = _ref.title,
            headingLevel = _ref.headingLevel,
            eventDates = _ref.eventDates,
            venue = _ref.venue;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'eventTeaser' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'eventTeaser_header' },
              id &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _atoms_Link_Link__WEBPACK_IMPORTED_MODULE_2__.a,
                  { href: '/'.concat(id), className: 'event_topic link-plain' },
                  title &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__.a,
                      { level: headingLevel || 4 },
                      title
                    )
                ),
              eventDates &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event_EventDates__WEBPACK_IMPORTED_MODULE_4__.a,
                  { eventDates: eventDates }
                ),
              venue &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Event_EventVenue__WEBPACK_IMPORTED_MODULE_5__.a,
                  { venue: venue }
                )
            )
          );
        };
      (EventTeaser.displayName = 'EventTeaser'),
        (EventTeaser.propTypes = {
          eventDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              date:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                  .isRequired,
              description:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            })
          ),
          id:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          headingLevel:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          venue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            street: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            zip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            longitude: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            latitude: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
          })
        }),
        (EventTeaser.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EventTeaser',
          props: {
            eventDates: {
              type: {
                name: 'arrayOf',
                value: {
                  name: 'shape',
                  value: {
                    date: { name: 'string', required: !0 },
                    description: { name: 'string', required: !1 }
                  }
                }
              },
              required: !1,
              description: ''
            },
            id: { type: { name: 'number' }, required: !0, description: '' },
            headingLevel: {
              type: { name: 'number' },
              required: !1,
              description: ''
            },
            title: { type: { name: 'string' }, required: !1, description: '' },
            venue: {
              type: {
                name: 'shape',
                value: {
                  id: { name: 'number', required: !1 },
                  name: { name: 'string', required: !1 },
                  street: { name: 'string', required: !1 },
                  city: { name: 'string', required: !1 },
                  state: { name: 'string', required: !1 },
                  zip: { name: 'string', required: !1 },
                  longitude: { name: 'string', required: !1 },
                  latitude: { name: 'string', required: !1 }
                }
              },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = EventTeaser),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/molecules/EventTeaser/EventTeaser.js'
          ] = {
            name: 'EventTeaser',
            docgenInfo: EventTeaser.__docgenInfo,
            path: 'src/molecules/EventTeaser/EventTeaser.js'
          });
    },
    486: function(module, exports, __webpack_require__) {
      __webpack_require__(487),
        __webpack_require__(630),
        __webpack_require__(631),
        __webpack_require__(1279),
        __webpack_require__(1280),
        __webpack_require__(1287),
        (module.exports = __webpack_require__(1296));
    },
    54: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(3),
        __webpack_require__(14),
        __webpack_require__(5),
        __webpack_require__(7),
        __webpack_require__(1323),
        __webpack_require__(26),
        __webpack_require__(39),
        __webpack_require__(62);
      var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_8__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_9__
        ),
        next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63),
        next_link__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_10__
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              0 <= excluded.indexOf(key) ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Link = function(props) {
        var url,
          href = props.href,
          as = props.as,
          children = props.children,
          rest = _objectWithoutProperties(props, ['href', 'as', 'children']),
          host = 'undefined' != typeof window ? window.location.host : '',
          protocolReg = (new RegExp(host), /^(http:\/\/|https:\/\/|\/\/)/);
        return (
          (url = href),
          protocolReg.test(url)
            ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                'a',
                _extends({ href: href }, rest, {
                  'data-testid': 'externalLink'
                }),
                children
              )
            : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_10___default.a,
                { href: href, as: as },
                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                  'a',
                  _extends({}, rest, { 'data-testid': 'relativeLink' }),
                  children
                )
              )
        );
      };
      (Link.propTypes = {
        children:
          prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
        href:
          prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
        as: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
      }),
        (Link.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Link',
          props: {
            children: { type: { name: 'any' }, required: !0, description: '' },
            href: { type: { name: 'string' }, required: !0, description: '' },
            as: { type: { name: 'string' }, required: !1, description: '' }
          }
        }),
        (__webpack_exports__.a = Link),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Link/Link.js'] = {
            name: 'Link',
            docgenInfo: Link.__docgenInfo,
            path: 'src/atoms/Link/Link.js'
          });
    },
    549: function(module, exports) {},
    64: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return teaser;
      });
      var teaser = {
        id: '01D5CZPVTSPMDHBYA44H5EF2WK',
        title: 'Update on Episode #51: Nebach',
        publishDate: '2018-10-17T09:24:46-05:00',
        descriptionText: 'A quick update and clarification on Episode 51.\n',
        canonicalSlug: '2018/10/17/update-on-episode-51-nebach',
        primaryVisuals: { lead: null, __typename: 'PrimaryVisual' },
        audio: [
          {
            title: 'Update on Episode 51: Nebach',
            durationHms: null,
            encodings: [
              {
                httpFilePath:
                  'https://download.publicradio.org/podcast/americanpublicmedia/podcasts/ttfa/2018/10/ttfanebachupdate_20181017_128.mp3',
                __typename: 'Encoding'
              }
            ],
            __typename: 'Audio'
          }
        ],
        __typename: 'Episode'
      };
    },
    73: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(36);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__
        );
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var Heading = function(_ref) {
        var _classNames,
          elementClass = _ref.elementClass,
          className = _ref.className,
          children = _ref.children,
          level = _ref.level,
          classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
            (_defineProperty(
              (_classNames = { hdg: !className }),
              'hdg-'.concat(level),
              !className && level
            ),
            _defineProperty(_classNames, className, className),
            _defineProperty(_classNames, elementClass, elementClass),
            _classNames)
          ),
          Hdg = 'h'.concat(level);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          Hdg,
          { className: classes },
          children
        );
      };
      (Heading.displayName = 'Heading'),
        (Heading.propTypes = {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          elementClass:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          level: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
            1,
            2,
            3,
            4,
            5,
            6
          ]).isRequired
        }),
        (Heading.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Heading',
          props: {
            children: { type: { name: 'node' }, required: !1, description: '' },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            className: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            level: {
              type: {
                name: 'enum',
                value: [
                  { value: '1', computed: !1 },
                  { value: '2', computed: !1 },
                  { value: '3', computed: !1 },
                  { value: '4', computed: !1 },
                  { value: '5', computed: !1 },
                  { value: '6', computed: !1 }
                ]
              },
              required: !0,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Heading),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Heading/Heading.js'] = {
            name: 'Heading',
            docgenInfo: Heading.__docgenInfo,
            path: 'src/atoms/Heading/Heading.js'
          });
    },
    89: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(3),
        __webpack_require__(14),
        __webpack_require__(5),
        __webpack_require__(36),
        __webpack_require__(7);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__
        ),
        classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40),
        classnames__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_7__
        ),
        _Link_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              0 <= excluded.indexOf(key) ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Button = function(_ref) {
        var _classNames,
          as = _ref.as,
          children = _ref.children,
          disabled = _ref.disabled,
          elementClass = _ref.elementClass,
          href = _ref.href,
          newWindow = _ref.newWindow,
          size = _ref.size,
          submitForm = _ref.submitForm,
          type = _ref.type,
          rest = _objectWithoutProperties(_ref, [
            'as',
            'children',
            'disabled',
            'elementClass',
            'href',
            'newWindow',
            'size',
            'submitForm',
            'type'
          ]),
          classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(
            (_defineProperty(
              (_classNames = { btn: !0 }),
              'btn-'.concat(type),
              type
            ),
            _defineProperty(_classNames, 'btn-'.concat(size), size),
            _defineProperty(_classNames, 'disabled', disabled),
            _defineProperty(_classNames, elementClass, elementClass),
            _classNames)
          );
        return href
          ? disabled
            ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: classes, disabled: disabled },
                children
              )
            : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _Link_Link__WEBPACK_IMPORTED_MODULE_8__.a,
                _extends(
                  {
                    href: href,
                    as: as,
                    className: classes,
                    target: newWindow ? '_blank' : null,
                    rel: newWindow ? 'noopener noreferrer' : null
                  },
                  rest
                ),
                children
              )
          : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              _extends(
                {
                  className: classes,
                  disabled: disabled,
                  type: submitForm ? 'submit' : 'button'
                },
                rest
              ),
              children
            );
      };
      (Button.propTypes = {
        children:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any.isRequired,
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        elementClass: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        href: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        newWindow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
          'large',
          'small'
        ]),
        submitForm: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        type: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
          'primary',
          'secondary',
          'destructive'
        ])
      }),
        (Button.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Button',
          props: {
            children: { type: { name: 'any' }, required: !0, description: '' },
            disabled: { type: { name: 'bool' }, required: !1, description: '' },
            elementClass: {
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            href: { type: { name: 'string' }, required: !1, description: '' },
            newWindow: {
              type: { name: 'bool' },
              required: !1,
              description:
                'newWindow only applies to Link buttons, adds target="_blank"'
            },
            size: {
              type: {
                name: 'enum',
                value: [
                  { value: "'large'", computed: !1 },
                  { value: "'small'", computed: !1 }
                ]
              },
              required: !1,
              description: ''
            },
            submitForm: {
              type: { name: 'bool' },
              required: !1,
              description:
                'if submitForm == true, adds type="submit" to <button>'
            },
            type: {
              type: {
                name: 'enum',
                value: [
                  { value: "'primary'", computed: !1 },
                  { value: "'secondary'", computed: !1 },
                  { value: "'destructive'", computed: !1 }
                ]
              },
              required: !1,
              description: ''
            }
          }
        }),
        (__webpack_exports__.a = Button),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/atoms/Button/Button.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'src/atoms/Button/Button.js'
          });
    }
  },
  [[486, 1, 2]]
]);
//# sourceMappingURL=main.8605b5baae04a6195cc7.bundle.js.map
