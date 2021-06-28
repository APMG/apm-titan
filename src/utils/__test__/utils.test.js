import React from 'react';
import {
  toSentence,
  markup,
  prevIndex,
  nextIndex,
  youtubeParser,
  getVideoPlayer
} from '../utils';

describe('toSentence()', () => {
  it('properly formats a sentence listing more than two authors', () => {
    const arr = ['Opie Schmuck', 'Opiette Schmuck', "Opie Schmuck's Mom"];
    const expectedResult =
      "Opie Schmuck, Opiette Schmuck, and Opie Schmuck's Mom";
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('properly formats a sentence listing 2 authors', () => {
    const arr = ['Opie Schmuck', 'Opiette Schmuck'];
    const expectedResult = 'Opie Schmuck and Opiette Schmuck';
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('returns an author sentence with single author', () => {
    const arr = ['Opie Schmuck'];
    const expectedResult = 'Opie Schmuck';
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('returns undefined when nothing is passed in ', () => {
    const testVal = toSentence();
    expect(testVal).toEqual(undefined);
  });
});

describe('markup()', () => {
  it('returns an object with a key of __html and the value of a markup string', () => {
    const input = '<blink>I am blinking</blink>';
    const result = markup(input);
    expect(result).toEqual({ __html: input });
  });
});

describe('prevIndex()', () => {
  it('gets the previous index for values greater than 1', () => {
    expect(prevIndex(5)).toEqual(4);
    expect(prevIndex(9)).toEqual(8);
  });

  //@todo do we really want to return 1 in all these cases?
  it('returns the last page of results if the next index would be greater than that', () => {
    expect(prevIndex(1)).toEqual(1);
    expect(prevIndex(0)).toEqual(1);
    expect(prevIndex(-1)).toEqual(1);
  });
});

describe('nextIndex()', () => {
  it('gets the next index', () => {
    expect(nextIndex(1, 10)).toEqual(2);
    expect(nextIndex(9, 10)).toEqual(10);
  });

  it('returns the last page of results if the next index would be greater than that', () => {
    expect(nextIndex(10, 10)).toEqual(10);
    expect(nextIndex(12, 10)).toEqual(10);
  });
});

describe('youtubeParser', () => {
  const youtubeLinks = {
    varOne:
      'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index',
    varTwo:
      'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o',
    varThree:
      'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0',
    varFour: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s',
    varFive: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0',
    varSix: 'http://www.youtube.com/watch?v=0zM3nApSvMg',
    varSeven: 'http://youtu.be/0zM3nApSvMg'
  };

  test('test: varOne - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varOne);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varTwo - youtube video variation: should return youtube id: QdK8U-VIH_o', () => {
    const result = youtubeParser(youtubeLinks.varTwo);
    expect(result).toEqual('QdK8U-VIH_o');
  });
  test('test: varThree - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varThree);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varFour - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varFour);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varFive - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varFive);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varSix - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varSix);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varSeven - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varSeven);
    expect(result).toEqual('0zM3nApSvMg');
  });
});

describe('getVideoPlayer', () => {
  // iframe data
  const facebook = {
    credit: { name: 'jason', url: 'https://www.facebook.com' },
    url: 'https://www.facebook.com/MPRnews/videos/337942824530987'
  };
  const youtube = {
    credit: { name: 'jason3', url: 'https://www.youtube.com' },
    url: 'https://www.youtube.com/watch?v=JrAPSy9Rboc'
  };
  // html player data
  const vimeo = {
    credit: { name: 'jason2', url: 'https://vimeo.com' },
    url:
      'https://player.vimeo.com/external/543289941.hd.mp4?s=63b6e14c286059e3c358337878bc3fe7d77d0e8d&profile_id=174'
  };
  const mprApmcdn = {
    credit: { name: 'jason3', url: 'https://mpr.apmcdn.org' },
    url: 'https://mpr.apmcdn.org/video/apmreports/bia3sm.mp4'
  };

  test('return facebook iframe if facebook.url matches the uri.hostname, www.facebook.com', () => {
    const result = getVideoPlayer(facebook);
    expect(getVideoPlayer(facebook)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <div className="iframe-container">
        <iframe
          src={
            'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MPRnews/videos/337942824530987&show_text=0&width=560'
          }
          title="jason"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
      </div>
    );
  });
  test('return youtube iframe if youtube.url matches the uri.hostname, www.youtube.com', () => {
    const result = getVideoPlayer(youtube);
    expect(getVideoPlayer(youtube)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <div className="iframe-container">
        <iframe
          src={'https://www.youtube.com/embed/JrAPSy9Rboc'}
          title="jason3"
        ></iframe>
      </div>
    );
  });
  test('return vimeo html5 player if vimeo.url matches the uri.hostname, player.vimeo.com', () => {
    const result = getVideoPlayer(vimeo);
    expect(getVideoPlayer(vimeo)).toBeDefined();
    expect(result).toEqual(
      <video id={vimeo.credit.name} autoPlay={true} muted={true} loop={true}>
        <source src={vimeo.url} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  });
  test('return mpr.apmcdn html5 player if mpr.apmcdn matches the uri.hostname, mpr.apmcdn.org', () => {
    const result = getVideoPlayer(mprApmcdn);
    expect(getVideoPlayer(mprApmcdn)).toBeDefined();
    expect(result).toEqual(
      <video
        id={mprApmcdn.credit.name}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={mprApmcdn.url} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  });
});
