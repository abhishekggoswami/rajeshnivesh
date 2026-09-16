'use client';

import { useEffect } from 'react';

const LANDING_BACKGROUND_SOURCE = '/landing-background.mp4';
const LANDING_PLAYBACK_RATE = 0.75;

function isLandingBackground(video: HTMLVideoElement) {
  return video.querySelector(`source[src="${LANDING_BACKGROUND_SOURCE}"]`) !== null;
}

function slowLandingVideo(video: HTMLVideoElement) {
  if (!isLandingBackground(video)) return;

  video.defaultPlaybackRate = LANDING_PLAYBACK_RATE;
  video.playbackRate = LANDING_PLAYBACK_RATE;
}

function slowLandingVideosWithin(root: ParentNode) {
  if (root instanceof HTMLVideoElement) slowLandingVideo(root);
  root.querySelectorAll<HTMLVideoElement>('video').forEach(slowLandingVideo);
}

export function LandingVideoSpeed() {
  useEffect(() => {
    slowLandingVideosWithin(document);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          slowLandingVideosWithin(node);
          const parentVideo = node.closest<HTMLVideoElement>('video');
          if (parentVideo) slowLandingVideo(parentVideo);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
