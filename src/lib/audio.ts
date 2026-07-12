let audioInstance: HTMLAudioElement | null = null;
let activeSrc: string | null = null;

export function getAudio(src: string): HTMLAudioElement {
  if (!audioInstance) {
    audioInstance = new Audio();
    audioInstance.loop = true;
    audioInstance.volume = 0.5;
    audioInstance.preload = "auto";
    audioInstance.muted = false;
    audioInstance.playsInline = true;
  }

  if (src && activeSrc !== src) {
    audioInstance.src = src;
    audioInstance.load();
    activeSrc = src;
  }

  return audioInstance;
}

export function playAudio(src: string) {
  const audio = getAudio(src);

  const startPlayback = () => {
    if (!audio.paused) return;

    audio.currentTime = 0;
    void audio.play().catch(() => {
      if (audio.readyState < 2) {
        audio.addEventListener(
          "canplaythrough",
          () => {
            void audio.play().catch(() => {});
          },
          { once: true },
        );
      }
    });
  };

  if (audio.readyState >= 2) {
    startPlayback();
    return;
  }

  audio.addEventListener(
    "canplaythrough",
    () => {
      startPlayback();
    },
    { once: true },
  );

  audio.load();
}