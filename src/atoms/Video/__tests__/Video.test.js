import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Video from '../Video';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Video', () => {
  const defaultPropsVimeo = {
    video: {
      url:
        'https://player.vimeo.com/external/543289941.hd.mp4?s=63b6e14c286059e3c358337878bc3fe7d77d0e8d&profile_id=174',
      caption: 'this is a video caption for vimeo',
      background: 'true',
      credit: { name: 'credit name', url: 'https://vimeo.com' }
    }
  };

  const defaultPropsMprApmcdn = {
    video: {
      url: 'https://mpr.apmcdn.org/video/apmreports/bia3sm.mp4',
      caption: 'this is a video caption for mprApmcdn',
      background: 'true',
      credit: { name: 'credit name', url: 'https://mpr.apmcdn.org' }
    }
  };

  const defaultPropsYoutube = {
    video: {
      url: 'https://www.youtube.com/watch?v=JrAPSy9Rboc',
      caption: 'this is a video caption for youtube',
      background: 'true',
      credit: { name: 'credit name', url: 'https://www.youtube.com' }
    }
  };

  const defaultPropsFacebook = {
    video: {
      url:
        'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMPRnews%2Fvideos%2F2976642805906134%2F&show_text=false&width=560',
      caption: 'this is a video caption for facebook',
      background: 'true',
      credit: { name: 'credit name', url: 'https://www.facebook.com' }
    }
  };

  test('Renders video object for vimeo.com', () => {
    const { container, getByText } = render(
      <Video video={defaultPropsVimeo.video} />
    );

    const videoNode = getByText('this is a video caption for vimeo');
    const htmlVideoPlayer = container.querySelector('video');
    expect(htmlVideoPlayer).toBeTruthy();
    expect(videoNode.textContent).toBe('this is a video caption for vimeo');
    expect(container.innerHTML).toBe(
      '<div class="content_primaryVisual"><figure class="figure"><video id="credit name" autoplay="" loop=""><source src="https://player.vimeo.com/external/543289941.hd.mp4?s=63b6e14c286059e3c358337878bc3fe7d77d0e8d&amp;profile_id=174" type="video/mp4">Your browser does not support HTML5 video.</video><figcaption class="figure_caption"><div class="figure_caption_content">this is a video caption for vimeo</div><a href="https://vimeo.com" target="_blank" rel="noreferrer"><span class="figure_credit">credit name</span></a></figcaption></figure></div>'
    );
    expect(container.getElementsByClassName('figure_caption')).toHaveLength(1);
    expect(
      container.getElementsByClassName('figure_caption_content')
    ).toHaveLength(1);
    expect(container.getElementsByClassName('figure_credit')).toHaveLength(1);
  });

  test('Renders video object for mpr.apmcdn.org', () => {
    const { container, getByText } = render(
      <Video video={defaultPropsMprApmcdn.video} />
    );

    const videoNode = getByText('this is a video caption for mprApmcdn');
    const htmlVideoPlayer = container.querySelector('video');
    expect(htmlVideoPlayer).toBeTruthy();
    expect(videoNode.textContent).toBe('this is a video caption for mprApmcdn');
    expect(container.innerHTML).toBe(
      '<div class="content_primaryVisual"><figure class="figure"><video id="credit name" autoplay="" loop=""><source src="https://mpr.apmcdn.org/video/apmreports/bia3sm.mp4" type="video/mp4">Your browser does not support HTML5 video.</video><figcaption class="figure_caption"><div class="figure_caption_content">this is a video caption for mprApmcdn</div><a href="https://mpr.apmcdn.org" target="_blank" rel="noreferrer"><span class="figure_credit">credit name</span></a></figcaption></figure></div>'
    );
    expect(container.getElementsByClassName('figure_caption')).toHaveLength(1);
    expect(
      container.getElementsByClassName('figure_caption_content')
    ).toHaveLength(1);
    expect(container.getElementsByClassName('figure_credit')).toHaveLength(1);
  });

  test('Renders video object for facebook.com', () => {
    const { container, getByText } = render(
      <Video video={defaultPropsFacebook.video} />
    );

    const videoNode = getByText('this is a video caption for facebook');
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(videoNode.textContent).toBe('this is a video caption for facebook');
    expect(container.innerHTML).toBe(
      '<div class="content_primaryVisual"><figure class="figure"><iframe src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2FMPRnews%2Fvideos%2F2976642805906134%2F&amp;show_text=false&amp;width=560" width="560" height="460" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen=""></iframe><figcaption class="figure_caption"><div class="figure_caption_content">this is a video caption for facebook</div><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><span class="figure_credit">credit name</span></a></figcaption></figure></div>'
    );
    expect(container.getElementsByClassName('figure_caption')).toHaveLength(1);
    expect(
      container.getElementsByClassName('figure_caption_content')
    ).toHaveLength(1);
    expect(container.getElementsByClassName('figure_credit')).toHaveLength(1);
  });

  test('Renders video object for youtube.com', () => {
    const { container, getByText } = render(
      <Video video={defaultPropsYoutube.video} />
    );

    const videoNode = getByText('this is a video caption for youtube');
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(videoNode.textContent).toBe('this is a video caption for youtube');
    expect(container.innerHTML).toBe(
      '<div class="content_primaryVisual"><figure class="figure"><iframe src="https://www.youtube.com/embed/JrAPSy9Rboc" width="420" height="460"></iframe><figcaption class="figure_caption"><div class="figure_caption_content">this is a video caption for youtube</div><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><span class="figure_credit">credit name</span></a></figcaption></figure></div>'
    );
    expect(container.getElementsByClassName('figure_caption')).toHaveLength(1);
    expect(
      container.getElementsByClassName('figure_caption_content')
    ).toHaveLength(1);
    expect(container.getElementsByClassName('figure_credit')).toHaveLength(1);
  });
});
