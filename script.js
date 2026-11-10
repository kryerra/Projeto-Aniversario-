const PROJECTOR_COMMAND = "projetor.exe";
const REVEAL_STEP_DELAY = 750;
const CAPTION_HANDOFF_DELAY = 600;
const SUBTITLE_DELAY = 350;
const AUTO_ADVANCE_DELAY = 2000;
const FIRST_GROUP_FINAL_PHOTO_HOLD_DELAY = 5000;
const FINAL_MEMORY_HOLD_DELAY = 4000;
const FINAL_GROUP_PHOTO_DURATION = 12000;
const FINAL_GROUP_PHOTO_FADE_DURATION = 5200;
const EMOTIONAL_PHOTO_FADE_DURATION = 2600;
const ENDING_MESSAGE_HOLD_DELAY = 5000;
const INTERMISSION_TERMINAL_LINES = [
  "Microsoft Windows [versão 10.0.19045.0000]",
  "(c) Microsoft Corporation. Todos os direitos reservados.",
  "",
  "C:\\Users\\Milena\\25/10> projetor.exe",
  "Primeira parte concluída.",
  "Digite familia.exe para continuar.",
];
const SECOND_GROUP_TERMINAL_LINES = [
  "Microsoft Windows [versão 10.0.19045.0000]",
  "(c) Microsoft Corporation. Todos os direitos reservados.",
  "",
  "C:\\Users\\Milena\\25/10> familia.exe",
  "Homenagens concluídas.",
  "Digite meu-mundo.exe para continuar.",
];
const INTERMISSION_TERMINAL_TYPING_DELAY = 42;
const INTERMISSION_TERMINAL_LINE_PAUSE = 320;
const INTERMISSION_COMMAND_TYPING_DELAY = 135;
const FAMILY_COMMAND_TYPING_DELAY = 260;
const THIRD_TERMINAL_COMMAND_TYPING_DELAY = 320;
const FAMILY_SLIDESHOW_VIDEO_START_DELAY = 3000;
const FAMILY_SLIDESHOW_ENTER_DURATION = 1500;
const FIRST_GROUP_FINAL_FADE_DURATION = 2500;
const PROJECTOR_START_DURATION = 1900;
const VIDEO_SNAPSHOT_HOLD_DELAY = 2800;
const PHOTO_SHUTTER_DURATION = 850;
const FAMILY_VIDEO_TRANSITION_DELAY = 3000;
const preloadedAssetUrls = new Map();
const FAMILY_MUSIC_FADE_DURATION = 2200;
const FAMILY_SCREEN_TRANSITION_DURATION = 1500;
const ENDING_MUSIC_DELAY = 3000;
const ENDING_WIND_FADE_DURATION = 3000;
const CINEMA_DARKEN_FALLBACK_DELAY = 2200;
const ENDING_BACKGROUND_FADE_FALLBACK_DURATION = 6000;
const SLIDESHOW_LOOP_CROSSFADE_DURATION = 0.35;
const WIND_SOUND_VOLUME = 1;
const MUSIC_VOLUME = 1;
const FIRST_TRACK_FADE_IN_DURATION = 10000;
const SLIDESHOW_SOUND_VOLUME = 0.25;
const FLASH_SOUND_VOLUME = 0.25;
const FAMILY_SOUND_VOLUME = 0.2;
const FAMILY_MUSIC_VOLUME = 0.25;
const FAMILY_VIDEO_VOLUME = 1;
const FAMILY_OTHER_AUDIO_FACTOR = 0.15;
const MADRINHA_OTHER_AUDIO_FACTOR = 1;
const FAMILY_AUDIO_ATTENUATION_FADE_DURATION = 1000;

function decodeText(encoded) {
  const bytes = Uint8Array.from(atob(encoded), (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function resolveSlideAssetPath(path) {
  if (
    path.startsWith("primeiro slideshow/")
    || path.startsWith("segundo slideshow/")
    || path.startsWith("homenagens/")
  ) {
    return `assets/${path}`;
  }

  return path;
}

function getPreloadedAssetUrl(path) {
  const url = new URL(path, document.baseURI).href;
  return preloadedAssetUrls.get(url) ?? url;
}

document.querySelector("#birthday-title").textContent = decodeText("RmVsaXogYW5pdmVyc8OhcmlvLCBNaWxlbmEh");
const openingMessage = decodeText("SG9qZSDDqSBvIGRpYSBlbSBxdWUsIGjDoSAyMSBhbm9zLCBuYXNjZXUgYSBwZXNzb2EgcXVlIHZpcmlhIGEgc2UgdG9ybmFyIGEgbWFpcyBpbXBvcnRhbnRlIGRhIG1pbmhhIHZpZGEuCgpIw6EgMjEgYW5vcywgdm9jw6ogY2hlZ291IGFvIG11bmRvIHRyYXplbmRvIHVtYSBhbGVncmlhIGltZW5zdXLDoXZlbCBwYXJhIHN1YSBmYW3DrWxpYSBlLCBjb20gbyBwYXNzYXIgZG8gdGVtcG8sIHBhcmEgdG9kb3MgYXF1ZWxlcyBxdWUgdGl2ZXJhbSBhIG9wb3J0dW5pZGFkZSBkZSB0ZSBjb25oZWNlci4gTWVzbW8gZGVwb2lzIGRlIHRvZGFzIGFzIGRpZmljdWxkYWRlcyBxdWUgdm9jw6ogZW5mcmVudG91LCBvbGhhIHF1ZW0gdm9jw6ogc2UgdG9ybm91LiBBIG1lbmluYSBxdWUgdm9jw6ogw6kgaG9qZSDDqSBhbGd1w6ltIMO6bmljYSwgZXNwZWNpYWwgZSBxdWUgbWVyZWNlIHR1ZG8gZGUgYm9tIHF1ZSBhIHZpZGEgcHVkZXIgb2ZlcmVjZXIuCgpFdSBudW5jYSBmdWkgdW1hIHBlc3NvYSBtdWl0byBsaWdhZGEgw6AgcmVsaWdpw6NvLiBTZW1wcmUgYWNyZWRpdGVpIGVtIERldXMsIG1hcyBuYWRhIGFsw6ltIGRpc3NvLiBQb3LDqW0sIGRlcG9pcyBxdWUgdm9jw6ogZW50cm91IG5hIG1pbmhhIHZpZGEsIGFsZ28gbXVkb3UgZW0gbWltLiBQYXNzZWkgYSBvcmFyIGUgYSBhZ3JhZGVjZXIgYSBEZXVzIHBvciB0ZXIgY29sb2NhZG8gdW1hIGx1eiBubyBtZWlvIGRlIHRhbnRhIGVzY3VyaWTDo28gcXVlIGV4aXN0aWEgZGVudHJvIGRlIG1pbS4KCkRlc2RlIHBlcXVlbm8sIHBhc3NlaSBwb3IgbXVpdGFzIGNvaXNhcy4gRm9yYW0gbm9pdGVzIGVtIHF1ZSBjaG9yZWkgc296aW5obywgbWFkcnVnYWRhcyBlbSBxdWUgcHJlY2lzZWkgbGlkYXIgY29tIHR1ZG8gc2VtIHF1ZSBuaW5ndcOpbSBzb3ViZXNzZSwgZSBtYW5ow6NzIGVtIHF1ZSBldSBjb2xvY2F2YSB1bSBzb3JyaXNvIG5vIHJvc3RvIGUgZmluZ2lhIHF1ZSBlc3RhdmEgdHVkbyBiZW0uIEZ1aSwgZGUgY2VydGEgZm9ybWEsIG1vbGRhZG8gcGVsYSBkb3IgZSBwZWxvIHNvZnJpbWVudG8uIEUgdGFsdmV6IHNlamEgcG9yIGlzc28gcXVlIGhvamUgZXUgc2VqYSBlc3NhIHBlc3NvYSBxdWUgdm9jw6ogY29uaGVjZTogYWxndcOpbSBxdWUgw6BzIHZlemVzIHNvbWUsIHF1ZSBjaG9yYSwgcXVlIGZpY2EgdHJpc3RlIHNlbSBzYWJlciBleHBsaWNhciBvIG1vdGl2byBlIHF1ZSBuZW0gc2VtcHJlIGNvbnNlZ3VlIGNvbG9jYXIgZW0gcGFsYXZyYXMgYXF1aWxvIHF1ZSBzZW50ZS4KCk1hcywgaMOhIDggbWVzZXMsIGV1IGVuY29udHJlaSB1bSBwcm9ww7NzaXRvLgoKRmF6ZXIgdm9jw6ogZmVsaXouCgpNZXNtbyBxdWUsIMOgcyB2ZXplcywgaXNzbyBjdXN0ZSBhIG1pbmhhIHByw7NwcmlhIGZlbGljaWRhZGUuIEUgZXNzZSBwcm9ww7NzaXRvIHRhbWLDqW0gc2UgdG9ybm91IHVtYSBkYXMgcmF6w7VlcyBwZWxhcyBxdWFpcyBldSBjb250aW51byBzZWd1aW5kbyBlbSBmcmVudGUuIFZvY8OqIHRyb3V4ZSB1bSBzaWduaWZpY2FkbyBkaWZlcmVudGUgcGFyYSBhIG1pbmhhIHZpZGEsIGUgZXUgbnVuY2Egdm91IGNvbnNlZ3VpciBleHBsaWNhciBjb21wbGV0YW1lbnRlIG8gdGFtYW5obyBkaXNzby4KCk7Do28gZXhpc3RlIG5hZGEgcXVlIGV1IHBvc3NhIGZhemVyIG91IGRpemVyIHF1ZSBjb25zaWdhIGV4cHJlc3NhciB0dWRvIG8gcXVlIHNpbnRvIHBvciB2b2PDqi4gVGFsdmV6IGV1IG51bmNhIGNvbnNpZ2EgZGVtb25zdHJhciBuZW0gMSUgZGVzc2Ugc2VudGltZW50by4gTWFzLCBtZXNtbyBhc3NpbSwgZXUgdm91IGNvbnRpbnVhciB0ZW50YW5kby4gVm91IHRlbnRhciBob2plLCBhbWFuaMOjIGUgZW5xdWFudG8gYSB2aWRhIG1lIHBlcm1pdGlyLgoKUXVhbmRvIHNvdWJlIHF1ZSB2b2PDqiB0aW5oYSBzaWRvIGFwcm92YWRhIG5vIFByb01BSSwgZXUgc2VudGkgZHVhcyBjb2lzYXMgYW8gbWVzbW8gdGVtcG8uIEZpcXVlaSBpbWVuc2FtZW50ZSBmZWxpeiBwb3Igdm9jw6osIHBvcnF1ZSBzZWkgbyBxdWFudG8gdm9jw6ogbWVyZWNlIGNvbnF1aXN0YXIgc2V1cyBzb25ob3MuIE1hcyB0YW1iw6ltIGZpcXVlaSB0cmlzdGUgcG9yIHNhYmVyIHF1ZSB2b2PDqiB0ZXJpYSBxdWUgaXIgZW1ib3JhLCBwb3JxdWUgZXUgZ29zdG8gZGUgdGUgdmVyLCBkZSB0ZSBvbGhhciwgZGUgdGUgb3V2aXIsIGRlIGNvbnZlcnNhciBjb20gdm9jw6ogZSwgcHJpbmNpcGFsbWVudGUsIGRlIHJpciBhbyBzZXUgbGFkby4KCkV1IHRlIGFtbywgTWlsZW5hLgoKRSBlc3RhcmVpIGFxdWkuCgpRdWFuZG8gdm9jw6ogcmlyLCBldSBlc3RhcmVpIGFxdWkgcGFyYSByaXIgY29tIHZvY8OqLiBRdWFuZG8gdm9jw6ogY2hvcmFyLCBlc3RhcmVpIGFxdWkgcGFyYSB0ZSBhcG9pYXIuIFF1YW5kbyB2b2PDqiBzb3JyaXIsIGVzdGFyZWkgYXF1aSBwYXJhIGFkbWlyYXIgZXNzZSBzb3JyaXNvLiBFIHF1YW5kbyB2b2PDqiBlc3RpdmVyIGNhbnNhZGEsIHBlcmRpZGEgb3UgcGVuc2FuZG8gZW0gZGVzaXN0aXIsIGV1IGVzdGFyZWkgYXF1aSBwYXJhIHRlIGxlbWJyYXIgZGUgcXVlIHZvY8OqIMOpIG11aXRvIG1haXMgZm9ydGUgZG8gcXVlIGltYWdpbmEuCgpOw6NvIGltcG9ydGEgb25kZSB2b2PDqiBlc3RlamEgb3UgbyBxdWUgYWNvbnRlw6dhLgoKRW5xdWFudG8gZXUgZXN0aXZlciBhcXVpLCB2b2PDqiBudW5jYSBlc3RhcsOhIHNvemluaGEuCgpGZWxpeiBhbml2ZXJzw6FyaW8sIHByaW5jZXNhLg==");
const playlist = [
  "assets/TIME.mp3",
  "assets/Interstellar  Piano Reflections Relaxing Piano Under the Stars.wav",
];
const familyMusicTracks = [
  "PRIMEIRA MUSICA.wav",
  "SEGUNDA MUSICA.wav",
  "TERCEIRA MUSICA.wav",
  "MUSICA 4.wav",
];
const photoFiles = [
  "primeira foto.jpg",
  "segunda foto.jpg",
  "terceira foto.jpg",
  "quarta foto.jpg",
  "quinta foto.jpg",
  "setima.jpg",
  "a.jpeg",
  "oitava.jpg",
  "nona.jpg",
  "decima.jpg",
];
const firstGroupVideoFiles = [
  "primeiro slideshow/primeiro grupo.mp4",
  "primeiro slideshow/primeiro grupo 2.mp4",
  "primeiro slideshow/primeiro grupo 3.mp4",
  "primeiro slideshow/shiro.mp4",
  "primeiro slideshow/video milena 2.mp4",
  "segundo slideshow/selina.mp4",
];
const familyVideoFiles = [
  "MADRINHA.mp4",
  "Tia.mp4",
  "TIA2.mp4",
  "Tio.mp4",
];
const familyAudioFocusVideoFiles = new Set(["madrinha.mp4", "tia.mp4"]);
for (let index = familyVideoFiles.length - 1; index > 0; index -= 1) {
  const randomIndex = Math.floor(Math.random() * (index + 1));
  [familyVideoFiles[index], familyVideoFiles[randomIndex]] = [
    familyVideoFiles[randomIndex],
    familyVideoFiles[index],
  ];
}
familyVideoFiles.push("VIDEO.mp4", "Avó.mp4", "MAE2.mp4");
const firstGroupPhotoFiles = [
  "primeiro slideshow/milena nova.jpeg",
  "primeiro slideshow/mileva nova 2.jpeg",
  "segundo slideshow/selinaa.jpeg",
];
const videosWithoutSnapshot = new Set();
const additionalPhotoFiles = [
  "7.jpg",
  "6.jpg",
  "5.jpg",
  "4.jpg",
  "3.jpg",
  "2.jpg",
  "1.jpg",
];
const firstSlide = {
  photo: "primeiro slideshow/inicio.mp4",
  isVideo: true,
  year: "",
  title: "",
  message: "",
  subtitle: "",
};
const endingSlide = {
  isEnding: true,
  year: "",
  title: "",
  message: "",
  subtitle: "",
};
const intermissionSlide = {
  isIntermission: true,
  year: "",
  title: "",
  message: "",
  subtitle: "",
};
const years = Array(photoFiles.length + additionalPhotoFiles.length).fill("ANO");
const captions = [
  {
    title: decodeText("U2V1IGRpYSBlc3BlY2lhbA=="),
    message: decodeText("SG9qZSBvIG11bmRvIGZpY2EgdW0gcG91cXVpbmhvIG1haXMgYm9uaXRvIHBvcnF1ZSDDqSBvIHNldSBhbml2ZXJzw6FyaW8u"),
  },
  {
    title: decodeText("VW0gc29ycmlzbyBpbmVzcXVlY8OtdmVs"),
    message: decodeText("UXVlIGEgYWxlZ3JpYSBkZXN0ZSBtb21lbnRvIGFjb21wYW5oZSB2b2PDqiBwb3IgdG9kbyBvIG5vdm8gY2ljbG8u"),
  },
  {
    title: decodeText("TW9tZW50b3MgcXVlIGZpY2Ft"),
    message: decodeText("QXMgbWVsaG9yZXMgbGVtYnJhbsOnYXMgc8OjbyBhcXVlbGFzIHF1ZSBndWFyZGFtb3MgY29tIGNhcmluaG8gbm8gY29yYcOnw6NvLg=="),
  },
  {
    title: decodeText("VW1hIGxlbWJyYW7Dp2EgcGFyYSBndWFyZGFy"),
    message: decodeText("UXVlIG51bmNhIGZhbHRlbSBtb3Rpdm9zIHBhcmEgY2VsZWJyYXIgYSBwZXNzb2EgaW5jcsOtdmVsIHF1ZSB2b2PDqiDDqS4="),
  },
  {
    title: decodeText("U2VtcHJlIGVzcGVjaWFs"),
    message: decodeText("Q2FkYSBmYXNlIGRhIHN1YSB2aWRhIHRlbSB1bWEgYmVsZXphIMO6bmljYS4gUXVlIHZlbmhhbSBtdWl0YXMgb3V0cmFzLg=="),
  },
  {
    title: decodeText("TWFpcyB1bWEgaGlzdMOzcmlhIGJvbml0YQ=="),
    message: decodeText("UXVlIGVzdGUgbm92byBjYXDDrXR1bG8gc2VqYSByZXBsZXRvIGRlIGFtb3IsIHNvbmhvcyBlIGJvYXMgc3VycHJlc2FzLg=="),
  },
  {
    title: decodeText("Q29tIG11aXRvIGNhcmluaG8="),
    message: decodeText("VW0gcGVkYWNpbmhvIGRlIHVtIGRpYSBlc3BlY2lhbCwgZ3VhcmRhZG8gcGFyYSBzZW1wcmUgbmEgbWVtw7NyaWEu"),
  },
  {
    title: decodeText("Vm9jw6ogbWVyZWNlIG8gbWVsaG9y"),
    message: decodeText("RmVsaXogYW5pdmVyc8OhcmlvLCBNaWxlbmEhIFF1ZSBzZXUgY2FtaW5obyBzZWphIHNlbXByZSBjaGVpbyBkZSBsdXou"),
  },
];
const photoSlides = [...photoFiles, ...additionalPhotoFiles].map((photo, index) => ({
  photo: photo.startsWith("primeiro slideshow/")
    ? photo
    : `primeiro slideshow/${photo}`,
  isVideo: /\.mp4$/i.test(photo),
  skipEndSnapshot: videosWithoutSnapshot.has(photo),
  year: years[index],
  ...captions[index % captions.length],
  ...(index === photoFiles.length + additionalPhotoFiles.length - 1
    ? {
        isFinalMemory: true,
        year: "2017",
        title: decodeText("TWVpcnllbGxlIEFjY2lvbGU="),
        message: decodeText("TWV1IGFtb3IsIG1pbmhhIHZpZGEsIGVzc2UgbcOqcyDDqSBzZXUuLi51bSBtw6pzIG5vIHF1YWwgZnVpIGFiZW7Dp29hZGEgcG9yIERldXMgcG9yIHVtIGJlbG8gcHJlc2VudGUuLi4gInVtIHBlZGFjaW5obyBkZWxlIiwgdGUgYW1vIG11aXRvIHZpZGEh"),
        subtitle: decodeText("UHNpY8OzbG9nYSBlIE3Do2UgZGEgTWlsZW5hLCBhIG1lbmluYSBtYWlzIGxpbmRhIGRvIHBsYW5ldGEh"),
      }
    : {}),
}));
const newSecondGroupSlides = [
  {
    photo: "segundo slideshow/1.mp4",
    isVideo: true,
    skipEndSnapshot: false,
    year: "",
    title: "",
    message: "",
    subtitle: "",
  },
  ...[
    "segundo slideshow/2.png",
    "segundo slideshow/3.jpeg",
    "segundo slideshow/4.jpeg",
    "segundo slideshow/5.png",
    "segundo slideshow/6.jpeg",
    "segundo slideshow/7.png",
    "segundo slideshow/8.jpeg",
    "segundo slideshow/9.png",
    "segundo slideshow/10 sequencial.jpg",
    "segundo slideshow/10.jpeg",
    "segundo slideshow/11.jpeg",
    "segundo slideshow/12.jpeg",
    "segundo slideshow/13.jpeg",
    "segundo slideshow/14.jpeg",
    "segundo slideshow/15.jpeg",
    "segundo slideshow/16.jpeg",
    "segundo slideshow/17.jpeg",
    "segundo slideshow/18.jpeg",
    "segundo slideshow/19.jpeg",
    "segundo slideshow/20.jpeg",
    "segundo slideshow/21.jpg",
    "segundo slideshow/22.jpg",
    "segundo slideshow/23.jpg",
  ].map((photo) => ({
    photo,
    year: "",
    title: "",
    message: "",
    subtitle: "",
  })),
  {
    photo: "segundo slideshow/foto final segundo grupo.jpeg",
    isSecondGroupFinal: true,
    year: "",
    title: "",
    message: "",
    subtitle: "",
  },
  ...[
    "segundo slideshow/primeira pos.jpg",
    "segundo slideshow/segunda pos.jpg",
    "segundo slideshow/terceira pos.jpg",
    "segundo slideshow/quarta pos.jpg",
    "segundo slideshow/sexta pos.jpg",
    "segundo slideshow/setima pos.jpg",
    "segundo slideshow/oitava pos.jpg",
    "segundo slideshow/nona pos.jpg",
    "segundo slideshow/antepenultima.jpg",
    "segundo slideshow/penultima.jpg",
    "segundo slideshow/ultima foto nenem.jpg",
  ].map((photo, index) => ({
    photo,
    ...(index >= 6 ? { holdDuration: 9000 + (index - 6) * 2000 } : {}),
    isEmotionalClosingPhoto: index >= 6,
    year: "",
    title: "",
    message: "",
    subtitle: "",
  })),
];
function createFirstGroupSlides() {
  const groupSlides = [
    ...photoSlides.slice(0, photoFiles.length),
    ...firstGroupPhotoFiles.map((photo) => ({
      photo,
      year: "ANO",
      ...captions[Math.floor(Math.random() * captions.length)],
    })),
    ...firstGroupVideoFiles.map((photo) => ({
      photo,
      isVideo: true,
      year: "",
      title: "",
      message: "",
      subtitle: "",
    })),
  ];
  for (let index = groupSlides.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [groupSlides[index], groupSlides[randomIndex]] = [groupSlides[randomIndex], groupSlides[index]];
  }

  groupSlides[groupSlides.length - 1].isFirstGroupFinal = true;
  return groupSlides;
}
const firstGroupSlides = createFirstGroupSlides();
const slides = [firstSlide, ...firstGroupSlides, intermissionSlide,
  ...newSecondGroupSlides];
slides.push(endingSlide);
const firstGroupFinalSlideIndex = firstGroupSlides.length;
const intermissionSlideIndex = firstGroupFinalSlideIndex + 1;

const form = document.querySelector("#password-form");
const projectorCommandInput = document.querySelector("#projector-command");
const startupLoadingStatus = document.querySelector("#startup-loading");
const startupLoadingProgress = document.querySelector("#startup-progress");
const lockScreen = document.querySelector("#lock-screen");
const birthday = document.querySelector("#birthday");
const memories = document.querySelector("#memories");
const fullscreenStatus = document.querySelector("#fullscreen-status");
const music = document.querySelector("#birthday-music");
music.volume = MUSIC_VOLUME;
music.src = new URL(playlist[0], document.baseURI).href;
const endingMusic = document.querySelector("#ending-music");
endingMusic.volume = MUSIC_VOLUME;
const familyMusic = document.querySelector("#family-music");
familyMusic.volume = FAMILY_MUSIC_VOLUME;
const windSound = document.querySelector("#wind-sound");
const slideshowStartSound = document.querySelector("#slideshow-start-sound");
const slideshowLoopSound = document.querySelector("#slideshow-loop-sound");
const slideshowLoopBackupSound = document.querySelector("#slideshow-loop-backup-sound");
const slideshowLoopPlayers = [slideshowLoopSound, slideshowLoopBackupSound];
const audioElements = Array.from(document.querySelectorAll("audio"));
let familyAudioAttenuationActive = false;
let madrinhaAudioAttenuationActive = false;
let audioAttenuationFactor = 1;
let audioAttenuationInterval = 0;
let musicPausedForVideo = null;
function getAudioVolumeFactor(audio) {
  return audio === familyMusic ? 1 : audioAttenuationFactor;
}

function setAudioVolume(audio, volume) {
  audio.volume = volume * getAudioVolumeFactor(audio);
}

function isMobileLayout() {
  return window.matchMedia(
    "(max-width: 600px), (max-width: 900px) and (orientation: landscape) and (max-height: 500px)",
  ).matches;
}

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  return navigator.userAgentData?.mobile
    || /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    || (isMobileLayout() && window.matchMedia("(pointer: coarse)").matches);
}

function pauseMusicForVideo(audio) {
  if (!audio.paused) {
    audio.pause();
    musicPausedForVideo = audio;
  }
}

function resumeMusicAfterVideo() {
  const audio = musicPausedForVideo;
  if (!audio) {
    return;
  }

  musicPausedForVideo = null;
  if (!document.hidden) {
    audio.play().catch(() => {
      musicStatus.textContent = "Não foi possível retomar a música após o vídeo.";
    });
  }
}

function getBaseAudioVolume(audio) {
  return audio.volume / getAudioVolumeFactor(audio);
}

function applyAudioAttenuationFactor(nextFactor) {
  const previousFactor = audioAttenuationFactor;
  if (previousFactor === nextFactor) {
    return;
  }

  audioAttenuationFactor = nextFactor;
  audioElements.forEach((audio) => {
    if (audio === familyMusic) {
      return;
    }
    audio.volume = (audio.volume / previousFactor) * nextFactor;
  });
}

function updateAudioAttenuation(updateState, smooth = false) {
  updateState();
  const nextFactor = (familyAudioAttenuationActive ? FAMILY_OTHER_AUDIO_FACTOR : 1)
    * (madrinhaAudioAttenuationActive ? MADRINHA_OTHER_AUDIO_FACTOR : 1);
  window.clearInterval(audioAttenuationInterval);
  audioAttenuationInterval = 0;
  if (audioAttenuationFactor === nextFactor) {
    return;
  }

  if (!smooth) {
    applyAudioAttenuationFactor(nextFactor);
    return;
  }

  const startFactor = audioAttenuationFactor;
  const startedAt = performance.now();
  audioAttenuationInterval = window.setInterval(() => {
    const progress = Math.min(
      1,
      (performance.now() - startedAt) / FAMILY_AUDIO_ATTENUATION_FADE_DURATION,
    );
    const easedProgress = progress * progress * (3 - 2 * progress);
    applyAudioAttenuationFactor(
      startFactor + (nextFactor - startFactor) * easedProgress,
    );
    if (progress >= 1) {
      window.clearInterval(audioAttenuationInterval);
      audioAttenuationInterval = 0;
    }
  }, 30);
}

function setFamilyAudioAttenuation(active) {
  const smooth = madrinhaAudioAttenuationActive || Boolean(audioAttenuationInterval);
  updateAudioAttenuation(() => {
    familyAudioAttenuationActive = active;
  }, smooth);
}

function setMadrinhaAudioAttenuation(active) {
  updateAudioAttenuation(() => {
    madrinhaAudioAttenuationActive = active;
  }, true);
}

function setFamilySoundEffectsVolume(active) {
  const volume = active ? FAMILY_SOUND_VOLUME : SLIDESHOW_SOUND_VOLUME;
  setAudioVolume(slideshowStartSound, volume);
  setAudioVolume(slideChangeSound, volume);
  setAudioVolume(flashSound, active ? FAMILY_SOUND_VOLUME : FLASH_SOUND_VOLUME);
}

const slideChangeSound = document.querySelector("#slide-change-sound");
const slideshowEndSound = document.querySelector("#slideshow-end-sound");
const flashSound = document.querySelector("#flash-sound");
[slideshowStartSound, ...slideshowLoopPlayers, slideChangeSound, slideshowEndSound]
  .forEach((audio) => {
    setAudioVolume(audio, SLIDESHOW_SOUND_VOLUME);
  });
setAudioVolume(windSound, WIND_SOUND_VOLUME);
setAudioVolume(flashSound, FLASH_SOUND_VOLUME);
const musicStatus = document.querySelector("#music-status");
const photo = document.querySelector("#memory-photo");
const video = document.querySelector("#memory-video");
const mediaLayer = document.querySelector("#media-layer");
const photoFrame = document.querySelector(".photo-frame");
const projectorStatus = document.querySelector(".film-start-status");
const projectionPlayButton = document.querySelector("#projection-play-button");
const terminalTextElements = [
  ...document.querySelectorAll(".lock-screen .terminal-output p:not(.terminal-spacer)"),
  document.querySelector(".lock-screen .terminal-prompt"),
];
const terminalText = terminalTextElements.map((element) => element.textContent);
const secondGroupTerminal = document.querySelector("#second-group-terminal");
const secondGroupTerminalOutput = secondGroupTerminal.querySelector(".terminal-output");
const secondGroupTerminalOutputLines = Array.from(
  secondGroupTerminalOutput.querySelectorAll("p"),
);
const secondGroupCommandForm = document.querySelector("#second-group-command-form");
const secondGroupCommandInput = document.querySelector("#second-group-command");
const secondGroupCommandError = document.querySelector("#second-group-command-error");
const secondGroupTerminalPrompt = secondGroupCommandForm.querySelector(".terminal-prompt");
const familySlideshow = document.querySelector("#family-slideshow");
const photoPlaceholder = document.querySelector("#photo-placeholder");
const placeholderText = document.querySelector("#placeholder-text");
const slideYear = document.querySelector("#slide-year");
const slideTitle = document.querySelector("#slide-title");
const slideMessage = document.querySelector("#slide-message");
const slideSubtitle = document.querySelector("#slide-subtitle");
const revealYear = document.querySelector("#reveal-year");
const revealTitle = document.querySelector("#reveal-title");
const revealMessage = document.querySelector("#reveal-message");
const endingContentElement = document.querySelector("#ending-content");
const endingMessageElement = document.querySelector("#ending-message");
const secondSlideshowGroupStart = firstGroupSlides.length + 2;
const decorationFadeDuration = 2500;
let activeSlide = 0;
let activeTrack = 0;
let revealTimers = [];
let galleryStarted = false;
let loginSubmitted = false;
let endingMessageTimer = 0;
let secondGroupTerminalTimer = 0;
let secondGroupTerminalLineIndex = 0;
let secondGroupTerminalCharacterIndex = 0;
let secondGroupTerminalReady = false;
let secondGroupTransitionStarted = false;
let secondGroupAutoCommandCharacterIndex = 0;
let intermissionPhase = "family";
let familySlideshowActive = false;
let activeFamilyVideoIndex = -1;
let activeFamilyMusicTrack = -1;
let familyMusicFadeInterval = 0;
let familyMusicFadeRemaining = 0;
let familyMusicFadeStartedAt = 0;
let endingWindFadeInterval = 0;
let endingWindFadeRemaining = 0;
let endingWindFadeStartedAt = 0;
let endingWindFadeStartVolume = 0;
let visibilityPausedFamilyVideo = null;
let musicFadeInInterval = 0;
let musicPlaybackRequested = false;
let musicPausedForSecondGroup = false;
let activeSlideshowLoopPlayer = 0;
let slideshowLoopCrossfadeInterval = 0;
let slideshowLoopActive = false;
let slideshowLoopFadeInterval = 0;
let slideshowLoopFadeDuration = 0;
let slideshowLoopFadeRemaining = 0;
let slideshowLoopFadeStartedAt = 0;
let slideshowLoopFadeStartVolumes = [];
let firstGroupOutroStarted = false;
const transitionTimers = new Map();
let visibilityPausedAudio = new Map();
let visibilityPausedVideo = null;
let deferredSlideIndex = null;
let terminalTypingElementIndex = 0;
let terminalTypingCharacterIndex = 0;
let terminalTypingTimer = 0;

const familyVideoEntries = familyVideoFiles.map((fileName, index) => {
  const figure = document.createElement("figure");
  figure.className = "family-video-card";
  const frame = document.createElement("div");
  frame.className = "family-video-frame";
  const familyVideo = document.createElement("video");
  familyVideo.className = "family-video";
  familyVideo.muted = false;
  familyVideo.volume = FAMILY_VIDEO_VOLUME;
  familyVideo.playsInline = true;
  familyVideo.preload = "none";
  familyVideo.setAttribute("aria-label", `Homenagem em vídeo ${index + 1} de ${familyVideoFiles.length}`);
  familyVideo.src = resolveSlideAssetPath(`homenagens/${fileName}`);
  const errorMessage = document.createElement("p");
  errorMessage.className = "family-video-error";
  errorMessage.setAttribute("role", "status");
  errorMessage.hidden = true;
  frame.append(familyVideo);
  figure.append(frame, errorMessage);
  familySlideshow.append(figure);

  familyVideo.addEventListener("ended", () => {
    if (!familySlideshowActive || activeFamilyVideoIndex !== index) {
      return;
    }
    resumeMusicAfterVideo();
    familyVideo.pause();
    familyVideo.classList.add("is-frozen");
    setMadrinhaAudioAttenuation(false);
    playAudioCue(flashSound, "Não foi possível iniciar o som do flash.");
    scheduleTransitionTimer(
      "family-video-transition",
      () => playNextFamilyVideo(index + 1),
      FAMILY_VIDEO_TRANSITION_DELAY,
    );
  });
  familyVideo.addEventListener("playing", () => {
    familyVideo.classList.add("is-playing");
    familyVideo.volume = FAMILY_VIDEO_VOLUME;
    if (isMobileLayout()) {
      pauseMusicForVideo(familyMusic);
    }
    setMadrinhaAudioAttenuation(
      familyAudioFocusVideoFiles.has(familyVideoFiles[index].toLowerCase()),
    );
  });
  familyVideo.addEventListener("pause", () => {
    setMadrinhaAudioAttenuation(false);
  });
  familyVideo.addEventListener("error", () => {
    if (!familySlideshowActive || activeFamilyVideoIndex !== index) {
      return;
    }
    resumeMusicAfterVideo();
    setMadrinhaAudioAttenuation(false);
    if (familyVideo.dataset.failureHandled) {
      return;
    }
    familyVideo.dataset.failureHandled = "true";
    errorMessage.textContent = "Não foi possível reproduzir uma das homenagens em vídeo.";
    errorMessage.hidden = false;
    musicStatus.textContent = "Não foi possível reproduzir o vídeo da homenagem.";
    playNextFamilyVideo(index + 1);
  });

  return { figure, video: familyVideo };
});

terminalTextElements.forEach((element) => {
  element.textContent = "";
});

function typeNextTerminalCharacter() {
  terminalTypingTimer = 0;
  if (document.hidden || loginSubmitted) {
    return;
  }

  const element = terminalTextElements[terminalTypingElementIndex];
  if (!element) {
    return;
  }

  terminalTypingCharacterIndex += 1;
  element.textContent = terminalText[terminalTypingElementIndex].slice(
    0,
    terminalTypingCharacterIndex,
  );

  if (terminalTypingCharacterIndex >= terminalText[terminalTypingElementIndex].length) {
    terminalTypingElementIndex += 1;
    terminalTypingCharacterIndex = 0;
    terminalTypingTimer = window.setTimeout(typeNextTerminalCharacter, 260);
  } else {
    terminalTypingTimer = window.setTimeout(typeNextTerminalCharacter, 28);
  }
}

function startTerminalTyping() {
  if (terminalTypingTimer || document.hidden || loginSubmitted) {
    return;
  }

  terminalTypingTimer = window.setTimeout(typeNextTerminalCharacter, 180);
}

startTerminalTyping();

function getStartupAssets() {
  const assetsByUrl = new Map();
  const addAsset = (path, type) => {
    if (!path) {
      return;
    }

    const url = new URL(path, document.baseURI).href;
    if (!assetsByUrl.has(url)) {
      assetsByUrl.set(url, { url, label: path, type });
    }
  };

  slides.forEach((slide) => {
    if (slide.photo) {
      addAsset(
        resolveSlideAssetPath(slide.photo),
        slide.isVideo ? "video" : "image",
      );
    }
  });
  playlist.forEach((path) => addAsset(path, "audio"));
  familyMusicTracks.forEach((path) => {
    addAsset(resolveSlideAssetPath(`homenagens/${path}`), "audio");
  });
  familyVideoFiles.forEach((path) => {
    addAsset(resolveSlideAssetPath(`homenagens/${path}`), "video");
  });
  audioElements.forEach((audio) => {
    addAsset(audio.currentSrc || audio.src, "audio");
  });
  addAsset("fontes/Roboto-Light.ttf", "font");

  return Array.from(assetsByUrl.values());
}

function preloadStartupAsset(asset) {
  if (asset.type === "font") {
    return document.fonts.load('300 16px "Roboto Light"').then(() => {
      if (!document.fonts.check('300 16px "Roboto Light"')) {
        throw new Error(`Falha ao carregar ${asset.label}`);
      }
    });
  }

  if (window.location.protocol !== "file:") {
    return fetch(asset.url, { cache: "force-cache" }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`Falha ao carregar ${asset.label} (${response.status})`);
      }

      const blob = await response.blob();
      const playbackUrl = URL.createObjectURL(blob);
      try {
        if (asset.type === "image") {
          const image = new Image();
          image.src = playbackUrl;
          if (typeof image.decode === "function") {
            await image.decode();
          } else {
            await new Promise((resolve, reject) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", reject, { once: true });
            });
          }
        } else {
          await new Promise((resolve, reject) => {
            const media = document.createElement(asset.type);
            media.preload = "metadata";
            media.addEventListener("loadedmetadata", resolve, { once: true });
            media.addEventListener("error", reject, { once: true });
            media.src = playbackUrl;
            media.load();
          });
        }

        preloadedAssetUrls.set(asset.url, playbackUrl);
      } catch (error) {
        URL.revokeObjectURL(playbackUrl);
        throw error;
      }
    });
  }

  if (asset.type === "image") {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", async () => {
        try {
          if (typeof image.decode === "function") {
            await image.decode();
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      }, { once: true });
      image.addEventListener("error", () => {
        reject(new Error(`Falha ao carregar ${asset.label}`));
      }, { once: true });
      image.src = asset.url;
    });
  }

  return new Promise((resolve, reject) => {
    const media = document.createElement(asset.type);
    media.preload = "auto";
    if (asset.type === "video") {
      media.muted = true;
      media.playsInline = true;
    } else {
      media.volume = 0;
    }

    const cleanup = () => {
      media.removeEventListener("canplaythrough", handleCanPlayThrough);
      media.removeEventListener("error", handleError);
    };
    const handleCanPlayThrough = () => {
      if (media.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
        return;
      }
      cleanup();
      media.removeAttribute("src");
      media.load();
      resolve();
    };
    const handleError = () => {
      cleanup();
      reject(new Error(`Falha ao carregar ${asset.label}`));
    };

    media.addEventListener("canplaythrough", handleCanPlayThrough);
    media.addEventListener("error", handleError);
    media.src = asset.url;
    media.load();
    handleCanPlayThrough();
  });
}

const startupAssets = getStartupAssets();
const startupAssetResults = new Map();
let startupLoadingInProgress = false;

async function loadStartupAssets() {
  if (startupLoadingInProgress) {
    return;
  }

  if (isMobileDevice()) {
    startupLoadingStatus.textContent = "Apenas para computador";
    startupLoadingProgress.hidden = true;
    document.querySelector(".startup-hint").hidden = true;
    document.querySelector(".terminal-output").hidden = true;
    form.hidden = true;
    return;
  }

  startupLoadingInProgress = true;
  startupLoadingProgress.max = Math.max(startupAssets.length, 1);

  const pendingAssets = startupAssets.filter(
    (asset) => startupAssetResults.get(asset.url) !== true,
  );
  let completedAssets = startupAssets.length - pendingAssets.length;
  startupLoadingProgress.value = completedAssets;
  startupLoadingStatus.textContent = `Carregando arquivos (${completedAssets}/${startupAssets.length})...`;
  let nextAssetIndex = 0;

  const loadNextAsset = async () => {
    while (nextAssetIndex < pendingAssets.length) {
      const asset = pendingAssets[nextAssetIndex];
      nextAssetIndex += 1;

      let loaded = false;
      let attempt = 0;
      while (!loaded) {
        try {
          await preloadStartupAsset(asset);
          startupAssetResults.set(asset.url, true);
          loaded = true;
        } catch {
          attempt += 1;
          startupLoadingStatus.textContent =
            "Falha ao carregar arquivos. Tentando novamente...";
          await new Promise((resolve) => {
            window.setTimeout(resolve, Math.min(attempt * 500, 5000));
          });
        }
      }

      completedAssets += 1;
      startupLoadingProgress.value = completedAssets;
      startupLoadingStatus.textContent =
        `Carregando arquivos (${completedAssets}/${startupAssets.length})...`;
    }
  };

  try {
    await Promise.all(
      Array.from(
        { length: Math.min(4, pendingAssets.length) },
        () => loadNextAsset(),
      ),
    );

    audioElements.forEach((audio) => {
      if (audio.src) {
        audio.src = getPreloadedAssetUrl(audio.src);
      }
    });
    familyVideoEntries.forEach(({ video: familyVideo }, index) => {
      familyVideo.src = getPreloadedAssetUrl(
        resolveSlideAssetPath(`homenagens/${familyVideoFiles[index]}`),
      );
    });
    startupLoadingStatus.textContent = "Arquivos prontos.";
    projectorCommandInput.disabled = false;
    if (!isMobileLayout()) {
      projectorCommandInput.focus();
    }
  } finally {
    startupLoadingInProgress = false;
  }
}

loadStartupAssets();

function scheduleTransitionTimer(name, callback, delay) {
  const previous = transitionTimers.get(name);
  if (previous?.timerId) {
    window.clearTimeout(previous.timerId);
  }

  const timer = { callback, remaining: delay, startedAt: 0, timerId: 0 };
  transitionTimers.set(name, timer);
  startTransitionTimer(name, timer);
}

function startTransitionTimer(name, timer) {
  if (document.hidden || transitionTimers.get(name) !== timer) {
    return;
  }

  timer.startedAt = performance.now();
  timer.timerId = window.setTimeout(() => {
    transitionTimers.delete(name);
    timer.callback();
  }, timer.remaining);
}

function pauseTransitionTimers() {
  const now = performance.now();
  transitionTimers.forEach((timer) => {
    if (timer.timerId) {
      window.clearTimeout(timer.timerId);
      timer.timerId = 0;
      timer.remaining = Math.max(0, timer.remaining - (now - timer.startedAt));
    }
  });
}

function resumeTransitionTimers() {
  transitionTimers.forEach((timer, name) => startTransitionTimer(name, timer));
}

function clearTransitionTimers() {
  transitionTimers.forEach((timer) => window.clearTimeout(timer.timerId));
  transitionTimers.clear();
}

function clearTransitionTimer(name) {
  const timer = transitionTimers.get(name);
  if (!timer) {
    return;
  }

  window.clearTimeout(timer.timerId);
  transitionTimers.delete(name);
}

function showFinalBlackout(slideIndex) {
  if (activeSlide !== slideIndex) {
    return;
  }

  musicPlaybackRequested = false;
  visibilityPausedAudio.clear();
  visibilityPausedVideo = null;
  window.clearInterval(musicFadeInInterval);
  musicFadeInInterval = 0;
  video.pause();
  stopSlideshowLoop();
  [
    music,
    slideshowStartSound,
    ...slideshowLoopPlayers,
    slideChangeSound,
    slideshowEndSound,
    flashSound,
  ].forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  familyMusic.pause();
  familyVideoEntries.forEach(({ video: familyVideo }) => familyVideo.pause());
  document.body.classList.add("presentation-ended");
  syncWindSound();
  endingMusic.pause();
  endingMusic.currentTime = 0;
  scheduleTransitionTimer("ending-music", () => {
    endingMusic.play().catch(() => {
      musicStatus.textContent = "Não foi possível iniciar a música final.";
      startEndingWindFade();
    });
  }, ENDING_MUSIC_DELAY);
}

function pauseEndingWindFade() {
  if (!endingWindFadeInterval) {
    return;
  }

  endingWindFadeRemaining = Math.max(
    0,
    endingWindFadeRemaining - (performance.now() - endingWindFadeStartedAt),
  );
  window.clearInterval(endingWindFadeInterval);
  endingWindFadeInterval = 0;
}

function resumeEndingWindFade() {
  if (!endingWindFadeRemaining || endingWindFadeInterval || document.hidden) {
    return;
  }

  endingWindFadeStartedAt = performance.now();
  endingWindFadeInterval = window.setInterval(() => {
    const elapsed = performance.now() - endingWindFadeStartedAt;
    const progress = Math.min(
      1,
      (ENDING_WIND_FADE_DURATION - endingWindFadeRemaining + elapsed)
        / ENDING_WIND_FADE_DURATION,
    );
    setAudioVolume(windSound, endingWindFadeStartVolume * (1 - progress));

    if (progress >= 1) {
      window.clearInterval(endingWindFadeInterval);
      endingWindFadeInterval = 0;
      endingWindFadeRemaining = 0;
      windSound.pause();
      setAudioVolume(windSound, WIND_SOUND_VOLUME);
      document.body.classList.add("presentation-sounds-ended");
    }
  }, 40);
}

function startEndingWindFade() {
  window.clearInterval(endingWindFadeInterval);
  endingWindFadeInterval = 0;
  endingWindFadeRemaining = ENDING_WIND_FADE_DURATION;
  endingWindFadeStartVolume = getBaseAudioVolume(windSound);
  resumeEndingWindFade();
}

function syncWindSound() {
  if (document.hidden) {
    windSound.pause();
    return;
  }

  if (
    document.body.classList.contains("presentation-ended")
    && endingMusic.ended
    && !endingWindFadeRemaining
  ) {
    windSound.pause();
    return;
  }

  if (!windSound.paused) {
    return;
  }

  windSound.play().catch(() => {
    musicStatus.textContent = "Não foi possível iniciar o som de vento.";
  });
}

function captureVideoSnapshot(slideIndex) {
  if (activeSlide !== slideIndex) {
    return;
  }

  video.pause();

  try {
    const snapshot = document.createElement("canvas");
    snapshot.width = video.videoWidth;
    snapshot.height = video.videoHeight;
    if (!snapshot.width || !snapshot.height) {
      throw new Error("O vídeo não possui um quadro disponível para captura.");
    }

    const context = snapshot.getContext("2d");
    if (!context) {
      throw new Error("Não foi possível preparar a fotografia do vídeo.");
    }
    context.drawImage(video, 0, 0, snapshot.width, snapshot.height);
    const frame = context.getImageData(0, 0, snapshot.width, snapshot.height);
    for (let index = 0; index < frame.data.length; index += 4) {
      const luminance = (
        frame.data[index] * 0.2126
        + frame.data[index + 1] * 0.7152
        + frame.data[index + 2] * 0.0722
      );
      const contrast = (luminance - 128) * 1.12 + 128;
      const grain = (Math.random() - 0.5) * 8;
      const monochrome = Math.max(0, Math.min(255, Math.round(contrast + grain)));
      frame.data[index] = monochrome;
      frame.data[index + 1] = monochrome;
      frame.data[index + 2] = monochrome;
    }
    context.putImageData(frame, 0, 0);
    const imageSource = snapshot.toDataURL("image/png");
    playAudioCue(flashSound, "Não foi possível iniciar o som do flash.");

    photo.onload = () => {
      photo.onload = null;
      photo.onerror = null;
      if (activeSlide !== slideIndex) {
        return;
      }

      video.hidden = true;
      photo.hidden = false;
      photo.alt = "Fotografia em preto e branco do último quadro do vídeo";
      photo.classList.add("black-white-snapshot", "media-visible");
      photoFrame.classList.add("photo-taking");
      revealTimers.push(window.setTimeout(() => {
        photoFrame.classList.remove("photo-taking");
      }, PHOTO_SHUTTER_DURATION));
      revealTimers.push(window.setTimeout(() => {
        if (slides[slideIndex].isFirstGroupFinal) {
          beginFirstGroupTransition(slideIndex);
        } else {
          renderSlide(slideIndex + 1);
        }
      }, VIDEO_SNAPSHOT_HOLD_DELAY));
    };
    photo.onerror = () => {
      photo.onload = null;
      photo.onerror = null;
      if (activeSlide === slideIndex) {
        musicStatus.textContent = "Não foi possível revelar a fotografia do vídeo.";
        revealTimers.push(window.setTimeout(() => {
          if (slides[slideIndex].isFirstGroupFinal) {
            beginFirstGroupTransition(slideIndex);
          } else {
            renderSlide(slideIndex + 1);
          }
        }, VIDEO_SNAPSHOT_HOLD_DELAY));
      }
    };
    photo.src = imageSource;
  } catch (error) {
    musicStatus.textContent = "Não foi possível capturar a fotografia do vídeo.";
    revealTimers.push(window.setTimeout(() => {
      if (activeSlide === slideIndex) {
        if (slides[slideIndex].isFirstGroupFinal) {
          beginFirstGroupTransition(slideIndex);
        } else {
          renderSlide(slideIndex + 1);
        }
      }
    }, VIDEO_SNAPSHOT_HOLD_DELAY));
  }
}

function revealFinalMemoryText(slideIndex) {
  const elements = [slideYear, slideMessage, slideTitle, slideSubtitle];
  const letterDelay = 16;

  function revealElement(elementIndex) {
    if (activeSlide !== slideIndex) {
      return;
    }

    const element = elements[elementIndex];
    const text = element.textContent;
    const letters = Array.from(text);
    const fragment = document.createDocumentFragment();
    element.setAttribute("aria-label", text);
    element.replaceChildren();
    element.style.opacity = "1";
    element.style.transform = "none";

    let letterIndex = 0;
    (text.match(/\s+|\S+/gu) ?? []).forEach((segment) => {
      if (/^\s+$/u.test(segment)) {
        fragment.append(document.createTextNode(segment));
        return;
      }

      const word = document.createElement("span");
      word.className = "revealed-word";
      Array.from(segment).forEach((letter) => {
        const character = document.createElement("span");
        character.className = "revealed-letter";
        character.setAttribute("aria-hidden", "true");
        character.textContent = letter;
        character.style.transitionDelay = `${letterIndex * letterDelay}ms`;
        word.append(character);
        letterIndex += 1;
      });
      fragment.append(word);
    });

    element.append(fragment);
    if (letters.length === 0) {
      if (elementIndex === elements.length - 1) {
        revealTimers.push(window.setTimeout(() => renderSlide(slideIndex + 1), FINAL_MEMORY_HOLD_DELAY));
      } else {
        revealElement(elementIndex + 1);
      }
      return;
    }

    window.requestAnimationFrame(() => {
      element.querySelectorAll(".revealed-letter").forEach((character) => {
        character.classList.add("is-visible");
      });
    });

    revealTimers.push(window.setTimeout(() => {
      if (activeSlide !== slideIndex) {
        return;
      }

      if (elementIndex === elements.length - 1) {
        revealTimers.push(window.setTimeout(() => renderSlide(slideIndex + 1), FINAL_MEMORY_HOLD_DELAY));
        return;
      }

      revealElement(elementIndex + 1);
    }, letters.length * letterDelay + 350));
  }

  revealTimers.push(window.setTimeout(() => revealElement(0), 500));
}

function revealTypedMessage(slideIndex, message, allowContinue = false) {
  const safeMessage = message ?? "";
  const characters = Array.from(safeMessage);
  let characterIndex = 0;
  let lastScrollTime = 0;

  endingMessageElement.textContent = "";
  endingMessageElement.hidden = false;
  endingContentElement.hidden = false;

  if (characters.length === 0 && !allowContinue) {
    endingMessageTimer = window.setTimeout(
      () => showFinalBlackout(slideIndex),
      ENDING_MESSAGE_HOLD_DELAY,
    );
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    endingMessageElement.textContent = safeMessage;
    if (allowContinue) {
      endingMessageTimer = window.setTimeout(() => renderSlide(slideIndex + 1), AUTO_ADVANCE_DELAY);
    } else {
      endingMessageTimer = window.setTimeout(() => {
        showFinalBlackout(slideIndex);
      }, ENDING_MESSAGE_HOLD_DELAY);
    }
    return;
  }

  function keepTextInView() {
    if (allowContinue || Date.now() - lastScrollTime < 120) {
      return;
    }

    lastScrollTime = Date.now();
    window.requestAnimationFrame(() => {
      if (activeSlide !== slideIndex) {
        return;
      }

      if (document.body.classList.contains("cinema-started")) {
        const visibleBottom = endingContentElement.getBoundingClientRect().bottom - 24;
        const textBottom = endingMessageElement.getBoundingClientRect().bottom;
        if (textBottom > visibleBottom) {
          endingContentElement.scrollBy({
            top: textBottom - visibleBottom,
            behavior: "smooth",
          });
        }
        return;
      }

      const bottom = endingMessageElement.getBoundingClientRect().bottom;
      const visibleBottom = window.innerHeight * 0.82;
      if (bottom > visibleBottom) {
        window.scrollBy({
          top: bottom - visibleBottom,
          behavior: "smooth",
        });
      }
    });
  }

  function revealNextCharacter() {
    if (activeSlide !== slideIndex) {
      return;
    }

    endingMessageElement.textContent += characters[characterIndex];
    keepTextInView();
    characterIndex += 1;

    if (characterIndex === characters.length) {
      if (allowContinue) {
        endingMessageTimer = window.setTimeout(() => renderSlide(slideIndex + 1), AUTO_ADVANCE_DELAY);
      } else {
        endingMessageTimer = window.setTimeout(
          () => showFinalBlackout(slideIndex),
          ENDING_MESSAGE_HOLD_DELAY,
        );
      }
      return;
    }

    const character = characters[characterIndex - 1];
    const pause = allowContinue
      ? (/[,\.!?]/.test(character) ? 450 : 80)
      : (/[,\.!?]/.test(character) ? 300 : 50);
    endingMessageTimer = window.setTimeout(revealNextCharacter, pause);
  }

  endingMessageTimer = window.setTimeout(revealNextCharacter, allowContinue ? 700 : 500);
}

function schedulePhotoReveal() {
  revealTimers.forEach(window.clearTimeout);
  revealTimers = [];
  if (!galleryStarted) {
    return;
  }

  if (slides[activeSlide].isVideo || slides[activeSlide].isEnding || slides[activeSlide].isIntermission) {
    return;
  }

  if (slides[activeSlide].isSecondGroupFinal) {
    photoFrame.classList.add("is-revealed", "caption-visible");
    const slideIndex = activeSlide;
    const fadeDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : FINAL_GROUP_PHOTO_FADE_DURATION;
    revealTimers.push(window.setTimeout(() => {
      if (activeSlide === slideIndex) {
        photoFrame.classList.add("is-fading-final-photo");
      }
    }, FINAL_GROUP_PHOTO_DURATION - fadeDuration));
    revealTimers.push(window.setTimeout(() => renderSlide(slideIndex + 1), FINAL_GROUP_PHOTO_DURATION));
    return;
  }

  if (Number.isFinite(slides[activeSlide].holdDuration)) {
    const slideIndex = activeSlide;
    const { holdDuration, isEmotionalClosingPhoto } = slides[slideIndex];
    photoFrame.classList.add("is-revealed", "caption-visible");

    if (isEmotionalClosingPhoto) {
      revealTimers.push(window.setTimeout(() => {
        if (activeSlide === slideIndex) {
          photoFrame.classList.add("is-fading-emotional-photo");
        }
      }, Math.max(0, holdDuration - EMOTIONAL_PHOTO_FADE_DURATION)));
    }

    revealTimers.push(window.setTimeout(() => renderSlide(slideIndex + 1), holdDuration));
    return;
  }

  if (slides[activeSlide].isFirstGroupFinal) {
    const slideIndex = activeSlide;
    photoFrame.classList.add("is-revealed", "caption-visible");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTimers.push(window.setTimeout(
        () => beginFirstGroupTransition(slideIndex),
        FIRST_GROUP_FINAL_PHOTO_HOLD_DELAY,
      ));
    } else {
      revealTimers.push(window.setTimeout(() => {
        photoFrame.classList.add("is-revealed");
      }, REVEAL_STEP_DELAY * 2));
      revealTimers.push(window.setTimeout(() => {
        photoFrame.classList.add("caption-visible");
      }, REVEAL_STEP_DELAY * 2 + CAPTION_HANDOFF_DELAY));
      revealTimers.push(window.setTimeout(
        () => beginFirstGroupTransition(slideIndex),
        REVEAL_STEP_DELAY * 2
          + CAPTION_HANDOFF_DELAY
          + FIRST_GROUP_FINAL_PHOTO_HOLD_DELAY,
      ));
    }
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    photoFrame.classList.add(
      "year-visible",
      "title-visible",
      "message-visible",
      "is-revealed",
      "caption-visible",
      "subtitle-visible",
    );
    if (slides[activeSlide].isFinalMemory) {
      [slideYear, slideMessage, slideTitle, slideSubtitle].forEach((element) => {
        element.style.opacity = "1";
      });
      revealTimers.push(window.setTimeout(() => renderSlide(activeSlide + 1), AUTO_ADVANCE_DELAY));
    } else {
      revealTimers.push(window.setTimeout(() => renderSlide(activeSlide + 1), AUTO_ADVANCE_DELAY));
    }
    return;
  }

  if (slides[activeSlide].isFinalMemory) {
    photoFrame.classList.add("is-revealed", "caption-visible");
    revealFinalMemoryText(activeSlide);
    return;
  }

  if (activeSlide > 0) {
    revealTimers.push(window.setTimeout(() => {
      photoFrame.classList.add("is-revealed");
    }, REVEAL_STEP_DELAY * 2));
    revealTimers.push(window.setTimeout(() => {
      photoFrame.classList.add("caption-visible");
    }, REVEAL_STEP_DELAY * 2 + CAPTION_HANDOFF_DELAY));
    revealTimers.push(window.setTimeout(() => renderSlide(activeSlide + 1),
      REVEAL_STEP_DELAY * 2 + CAPTION_HANDOFF_DELAY + AUTO_ADVANCE_DELAY));
    return;
  }

  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("year-visible");
  }, 100));
  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("title-visible");
  }, REVEAL_STEP_DELAY));
  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("message-visible");
  }, REVEAL_STEP_DELAY * 2));
  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("is-revealed");
  }, REVEAL_STEP_DELAY * 3));
  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("caption-visible");
  }, REVEAL_STEP_DELAY * 3 + CAPTION_HANDOFF_DELAY));
  revealTimers.push(window.setTimeout(() => {
    photoFrame.classList.add("subtitle-visible");
  }, REVEAL_STEP_DELAY * 3 + CAPTION_HANDOFF_DELAY + SUBTITLE_DELAY));
  revealTimers.push(window.setTimeout(() => renderSlide(activeSlide + 1),
    REVEAL_STEP_DELAY * 3 + CAPTION_HANDOFF_DELAY + SUBTITLE_DELAY + AUTO_ADVANCE_DELAY));
}

function renderSlide(index) {
  if (document.hidden) {
    deferredSlideIndex = index;
    return;
  }

  activeSlide = (index + slides.length) % slides.length;
  const slide = slides[activeSlide];
  const slideIndex = activeSlide;

  if (slide.isEnding) {
    fadeEndingBackgroundWithAudio(slideIndex);
  } else if (slideIndex > 0 && !slide.isIntermission) {
    playAudioCue(slideChangeSound, "Não foi possível iniciar o som de troca de slide.");
  }

  window.clearTimeout(endingMessageTimer);
  window.clearTimeout(secondGroupTerminalTimer);
  secondGroupTerminalTimer = 0;
  endingMessageElement.textContent = "";
  endingContentElement.hidden = true;
  document.body.classList.remove("presentation-ended");
  document.body.classList.remove("presentation-sounds-ended");
  clearTransitionTimers();
  secondGroupTerminal.hidden = !slide.isIntermission;
  syncWindSound();
  secondGroupTerminal.classList.remove("is-closing");
  secondGroupTerminalOutputLines.forEach((line) => {
    line.textContent = "";
  });
  secondGroupTerminalLineIndex = 0;
  secondGroupTerminalCharacterIndex = 0;
  secondGroupTerminalReady = false;
  secondGroupTransitionStarted = false;
  secondGroupAutoCommandCharacterIndex = 0;
  secondGroupTerminalPrompt.textContent = "";
  secondGroupCommandInput.disabled = true;
  secondGroupCommandInput.value = "";
  secondGroupCommandError.hidden = true;
  secondGroupCommandError.textContent = "";
  revealTimers.forEach(window.clearTimeout);
  revealTimers = [];
  photoFrame.classList.remove(
    "first-slide",
    "projector-starting",
    "photo-taking",
    "year-visible",
    "title-visible",
    "message-visible",
    "is-revealed",
    "caption-visible",
    "subtitle-visible",
    "final-memory",
    "second-group-slide",
    "is-fading-final-photo",
    "is-fading-first-group-photo",
    "is-fading-emotional-photo",
    "vintage-slide",
    "ending-slide",
    "ending-audio-fading",
    "intermission-slide",
  );
  photoFrame.style.removeProperty("--ending-background-fade-duration");
  document.body.classList.toggle("intermission-active", Boolean(slide.isIntermission));
  photoFrame.classList.toggle("first-slide", activeSlide === 0);
  photoFrame.classList.toggle(
    "second-group-slide",
    activeSlide >= secondSlideshowGroupStart && activeSlide < slides.length - 1,
  );
  photoFrame.classList.toggle("video-slide", Boolean(slide.isVideo));
  photoFrame.classList.toggle("vintage-slide", !slide.isEnding && !slide.isIntermission);
  photoFrame.classList.toggle("ending-slide", Boolean(slide.isEnding));
  photoFrame.classList.toggle("intermission-slide", Boolean(slide.isIntermission));
  photoFrame.classList.toggle("final-memory", Boolean(slide.isFinalMemory));
  photoFrame.classList.toggle("second-group-final-photo", Boolean(slide.isSecondGroupFinal));
  photoFrame.classList.toggle("emotional-closing-photo", Boolean(slide.isEmotionalClosingPhoto));
  memories.classList.toggle("video-intro", Boolean(slide.isVideo));
  memories.classList.toggle("ending-intro", Boolean(slide.isEnding || slide.isIntermission));
  mediaLayer.hidden = true;
  resumeMusicAfterVideo();
  video.pause();
  video.loop = false;
  video.removeAttribute("src");
  video.load();
  video.classList.remove("media-visible");
  video.hidden = true;
  photo.removeAttribute("src");
  photo.onload = null;
  photo.onerror = null;
  photo.classList.remove("media-visible");
  photo.classList.remove("black-white-snapshot");
  photo.hidden = true;
  photoPlaceholder.hidden = true;
  placeholderText.textContent = slide.isVideo ? "Carregando vídeo..." : "Carregando foto...";
  photo.alt = `Foto ${activeSlide + 1} de Milena`;
  const mediaReady = (media, afterReveal) => {
    if (activeSlide !== slideIndex) {
      return;
    }

    mediaLayer.hidden = false;
    photoPlaceholder.hidden = true;
    schedulePhotoReveal();
    const revealMedia = () => {
      if (activeSlide !== slideIndex) {
        return;
      }

      photoFrame.classList.remove("projector-starting");
      media.classList.add("media-visible");
      afterReveal?.();
    };

    if (slideIndex === 0 && slide.isVideo) {
      photoFrame.classList.add("projector-starting");
      revealTimers.push(window.setTimeout(revealMedia, PROJECTOR_START_DURATION));
    } else {
      window.requestAnimationFrame(revealMedia);
    }
  };
  const mediaFailed = () => {
    if (activeSlide !== slideIndex) {
      return;
    }

    mediaLayer.hidden = true;
    photoPlaceholder.hidden = false;
    if (slide.isVideo) {
      placeholderText.textContent = "Não foi possível reproduzir o vídeo neste aparelho.";
      if (slideIndex !== 0) {
        revealTimers.push(window.setTimeout(() => {
          if (slide.isFirstGroupFinal) {
            beginFirstGroupTransition(slideIndex);
          } else {
            renderSlide(slideIndex + 1);
          }
        }, 2000));
      }
      return;
    }
    placeholderText.textContent = "Foto indisponível";
    schedulePhotoReveal();
  };

  if (slide.isIntermission) {
    photoPlaceholder.hidden = true;
    startIntermissionTerminalTyping();
  } else if (slide.isEnding) {
    photoPlaceholder.hidden = true;
    revealTypedMessage(slideIndex, slide.title);
  } else if (slide.isVideo) {
    video.hidden = false;
    video.muted = slide.photo !== "primeiro slideshow/shiro.mp4";
    video.onended = () => {
      if (activeSlide === slideIndex) {
        resumeMusicAfterVideo();
        if (slide.skipEndSnapshot) {
          renderSlide(slideIndex + 1);
        } else {
          captureVideoSnapshot(slideIndex);
        }
      }
    };
    video.onloadeddata = () => {
      video.onloadeddata = null;
      mediaReady(video, () => {
        if (!document.hidden) {
          video.play().catch(() => {
            musicStatus.textContent = "Não foi possível reproduzir o vídeo.";
          });
        }
      });
    };
    video.onerror = mediaFailed;
    video.src = getPreloadedAssetUrl(resolveSlideAssetPath(slide.photo));
  } else {
    photo.hidden = false;
    photo.onload = () => mediaReady(photo);
    photo.onerror = mediaFailed;
    photo.src = getPreloadedAssetUrl(resolveSlideAssetPath(slide.photo));
  }

  [slideYear, slideMessage, slideTitle, slideSubtitle].forEach((element) => {
    element.style.removeProperty("opacity");
    element.style.removeProperty("transform");
    element.removeAttribute("aria-label");
  });
  slideYear.textContent = slide.year ?? "";
  slideTitle.textContent = slide.title ?? "";
  slideMessage.textContent = slide.message ?? "";
  slideSubtitle.textContent = slide.subtitle ?? "";
  slideYear.hidden = !slide.isFinalMemory;
  slideTitle.hidden = !slide.isFinalMemory;
  slideMessage.hidden = !slide.isFinalMemory;
  slideSubtitle.hidden = !slide.isFinalMemory;
  revealYear.textContent = slide.year ?? "";
  revealYear.hidden = activeSlide !== 0 || Boolean(slide.isVideo);
  revealTitle.textContent = slide.title ?? "";
  revealMessage.textContent = slide.message ?? "";
  revealTitle.hidden = activeSlide > 0 || Boolean(slide.isVideo);
  revealMessage.hidden = activeSlide > 0 || Boolean(slide.isVideo);
}

function playMusic(trackIndex = activeTrack) {
  activeTrack = trackIndex % playlist.length;
  musicPlaybackRequested = true;
  const source = getPreloadedAssetUrl(playlist[activeTrack]);
  if (music.src !== source) {
    music.src = source;
  }

  window.clearInterval(musicFadeInInterval);
  musicFadeInInterval = 0;
  const shouldFadeIn = activeTrack === 0;
  setAudioVolume(music, shouldFadeIn ? 0 : MUSIC_VOLUME);
  music.currentTime = 0;
  startMusicPlayback(shouldFadeIn);
}

function startMusicPlayback(shouldFadeIn = activeTrack === 0) {
  if (
    !musicPlaybackRequested
    || musicPausedForSecondGroup
    || document.hidden
    || musicPausedForVideo === music
    || !music.src
    || music.ended
  ) {
    return;
  }

  music.play().then(() => {
    if (
      !shouldFadeIn
      || document.hidden
      || !musicPlaybackRequested
      || musicPausedForSecondGroup
    ) {
      return;
    }

    const fadeStartedAt = performance.now();
    const fadeStartVolume = music.volume;
    const fadeInMusic = () => {
      const progress = Math.min(
        1,
        (performance.now() - fadeStartedAt) / FIRST_TRACK_FADE_IN_DURATION,
      );
      setAudioVolume(
        music,
        fadeStartVolume + (MUSIC_VOLUME - fadeStartVolume) * progress ** 2,
      );

      if (progress >= 1) {
        window.clearInterval(musicFadeInInterval);
        musicFadeInInterval = 0;
      }
    };

    musicFadeInInterval = window.setInterval(fadeInMusic, 50);
    fadeInMusic();
  }).catch(() => {
    if (!document.hidden && musicPlaybackRequested) {
      musicStatus.textContent = "Não foi possível iniciar a música.";
    }
  });
}

function playAudioCue(audio, errorMessage) {
  if (document.hidden) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(() => {
    musicStatus.textContent = errorMessage;
  });
}

function fadeEndingBackgroundWithAudio(slideIndex) {
  const startFade = () => {
    if (activeSlide !== slideIndex || !slides[slideIndex].isEnding) {
      return;
    }

    const duration = Number.isFinite(slideshowEndSound.duration)
      ? Math.max(0, slideshowEndSound.duration - slideshowEndSound.currentTime)
      : ENDING_BACKGROUND_FADE_FALLBACK_DURATION / 1000;
    photoFrame.style.setProperty("--ending-background-fade-duration", `${duration}s`);
    slideshowStartSound.pause();
    fadeSlideshowLoopOut(duration);
    window.requestAnimationFrame(() => photoFrame.classList.add("ending-audio-fading"));
  };
  const finishFade = () => {
    if (activeSlide !== slideIndex || !slides[slideIndex].isEnding) {
      return;
    }

    stopSlideshowLoop();
    photoFrame.style.setProperty("--ending-background-fade-duration", "0s");
    photoFrame.classList.add("ending-audio-fading");
  };

  slideshowEndSound.addEventListener("playing", startFade, { once: true });
  slideshowEndSound.addEventListener("ended", finishFade, { once: true });
  playAudioCue(slideshowEndSound, "Não foi possível iniciar o som de encerramento do slideshow.");
}

function stopSlideshowLoop() {
  slideshowLoopActive = false;
  window.clearInterval(slideshowLoopCrossfadeInterval);
  slideshowLoopCrossfadeInterval = 0;
  window.clearInterval(slideshowLoopFadeInterval);
  slideshowLoopFadeInterval = 0;
  slideshowLoopFadeDuration = 0;
  slideshowLoopFadeRemaining = 0;
  slideshowLoopFadeStartedAt = 0;
  slideshowLoopFadeStartVolumes = [];
  slideshowLoopPlayers.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
    setAudioVolume(audio, SLIDESHOW_SOUND_VOLUME);
  });
}

function startSlideshowLoop() {
  stopSlideshowLoop();
  slideshowLoopActive = true;
  activeSlideshowLoopPlayer = 0;
  const firstPlayer = slideshowLoopPlayers[activeSlideshowLoopPlayer];
  setAudioVolume(firstPlayer, SLIDESHOW_SOUND_VOLUME);
  if (document.hidden) {
    return;
  }

  firstPlayer.play().catch(() => {
    slideshowLoopActive = false;
    musicStatus.textContent = "Não foi possível iniciar a trilha em loop do slideshow.";
  });
}

function fadeSlideshowLoopOut(durationSeconds) {
  if (!slideshowLoopActive) {
    return;
  }

  window.clearInterval(slideshowLoopCrossfadeInterval);
  slideshowLoopCrossfadeInterval = 0;
  window.clearInterval(slideshowLoopFadeInterval);
  slideshowLoopFadeDuration = Math.max(0, durationSeconds * 1000);
  slideshowLoopFadeRemaining = slideshowLoopFadeDuration;
  slideshowLoopFadeStartVolumes = slideshowLoopPlayers.map(getBaseAudioVolume);
  if (slideshowLoopFadeDuration === 0) {
    stopSlideshowLoop();
    return;
  }

  resumeSlideshowLoopFade();
}

function resumeSlideshowLoopFade() {
  if (!slideshowLoopFadeRemaining || slideshowLoopFadeInterval || document.hidden) {
    return;
  }

  slideshowLoopFadeStartedAt = performance.now();
  slideshowLoopFadeInterval = window.setInterval(() => {
    const elapsed = performance.now() - slideshowLoopFadeStartedAt;
    const progress = Math.min(
      1,
      (slideshowLoopFadeDuration - slideshowLoopFadeRemaining + elapsed)
        / slideshowLoopFadeDuration,
    );
    slideshowLoopPlayers.forEach((audio, index) => {
      setAudioVolume(audio, slideshowLoopFadeStartVolumes[index] * (1 - progress));
    });

    if (progress >= 1) {
      stopSlideshowLoop();
      return;
    }
  }, 40);
}

function pauseSlideshowLoopFade() {
  if (!slideshowLoopFadeInterval) {
    return;
  }

  slideshowLoopFadeRemaining = Math.max(
    0,
    slideshowLoopFadeRemaining - (performance.now() - slideshowLoopFadeStartedAt),
  );
  window.clearInterval(slideshowLoopFadeInterval);
  slideshowLoopFadeInterval = 0;
}

function startIntermissionTerminalTyping() {
  if (
    activeSlide !== intermissionSlideIndex
    || document.hidden
    || secondGroupTerminalReady
    || secondGroupTerminalTimer
  ) {
    return;
  }

  secondGroupTerminalTimer = window.setTimeout(typeNextIntermissionTerminalCharacter, 180);
}

function typeNextIntermissionTerminalCharacter() {
  secondGroupTerminalTimer = 0;
  if (document.hidden || activeSlide !== intermissionSlideIndex) {
    return;
  }

  const lines = intermissionPhase === "family"
    ? INTERMISSION_TERMINAL_LINES
    : SECOND_GROUP_TERMINAL_LINES;
  const currentLine = lines[secondGroupTerminalLineIndex];
  const lineElement = secondGroupTerminalOutputLines[secondGroupTerminalLineIndex];
  if (currentLine.length === 0) {
    secondGroupTerminalLineIndex += 1;
    secondGroupTerminalCharacterIndex = 0;
  } else {
    secondGroupTerminalCharacterIndex += 1;
    lineElement.textContent = currentLine.slice(0, secondGroupTerminalCharacterIndex);
    if (secondGroupTerminalCharacterIndex >= currentLine.length) {
      secondGroupTerminalLineIndex += 1;
      secondGroupTerminalCharacterIndex = 0;
    }
  }

  if (secondGroupTerminalLineIndex >= lines.length) {
    secondGroupTerminalReady = true;
    secondGroupTerminalPrompt.textContent = "C:\\Users\\Milena\\25/10>";
    secondGroupCommandInput.disabled = false;
    secondGroupCommandInput.focus();
    startIntermissionCommandTyping();
    return;
  }

  const lineComplete = secondGroupTerminalCharacterIndex === 0;
  secondGroupTerminalTimer = window.setTimeout(
    typeNextIntermissionTerminalCharacter,
    lineComplete ? INTERMISSION_TERMINAL_LINE_PAUSE : INTERMISSION_TERMINAL_TYPING_DELAY,
  );
}

function startIntermissionCommandTyping() {
  const command = intermissionPhase === "family" ? "familia.exe" : "meu-mundo.exe";
  if (
    !secondGroupTerminalReady
    || secondGroupTransitionStarted
    || document.hidden
    || secondGroupCommandInput.value
      !== command.slice(0, secondGroupAutoCommandCharacterIndex)
    || secondGroupTerminalTimer
  ) {
    return;
  }

  secondGroupTerminalTimer = window.setTimeout(typeNextIntermissionCommandCharacter, 350);
}

function typeNextIntermissionCommandCharacter() {
  secondGroupTerminalTimer = 0;
  if (
    document.hidden
    || activeSlide !== intermissionSlideIndex
    || !secondGroupTerminalReady
    || secondGroupTransitionStarted
  ) {
    return;
  }

  const command = intermissionPhase === "family" ? "familia.exe" : "meu-mundo.exe";
  if (
    secondGroupCommandInput.value
    !== command.slice(0, secondGroupAutoCommandCharacterIndex)
  ) {
    return;
  }

  secondGroupCommandInput.value = command.slice(0, secondGroupAutoCommandCharacterIndex + 1);
  secondGroupAutoCommandCharacterIndex += 1;
  if (secondGroupAutoCommandCharacterIndex === command.length) {
    submitSecondGroupCommand();
    return;
  }

  secondGroupTerminalTimer = window.setTimeout(
    typeNextIntermissionCommandCharacter,
    intermissionPhase === "family"
      ? FAMILY_COMMAND_TYPING_DELAY
      : THIRD_TERMINAL_COMMAND_TYPING_DELAY,
  );
}

function playNextFamilyVideo(index) {
  if (!familySlideshowActive || document.hidden) {
    return;
  }

  if (index >= familyVideoEntries.length) {
    finishFamilySlideshow();
    return;
  }

  activeFamilyVideoIndex = index;
  if (index > 0) {
    playAudioCue(slideChangeSound, "Não foi possível iniciar o som de troca de homenagem.");
  }
  const entry = familyVideoEntries[index];
  entry.figure.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
  entry.video.play().catch(() => {
    if (entry.video.dataset.failureHandled) {
      return;
    }
    resumeMusicAfterVideo();
    entry.video.dataset.failureHandled = "true";
    setMadrinhaAudioAttenuation(false);
    const errorMessage = entry.figure.querySelector(".family-video-error");
    errorMessage.textContent = `Não foi possível reproduzir ${familyVideoFiles[index]}.`;
    errorMessage.hidden = false;
    musicStatus.textContent = "Não foi possível iniciar o vídeo da homenagem.";
    playNextFamilyVideo(index + 1);
  });
}

function startFamilySlideshow() {
  if (activeSlide !== intermissionSlideIndex || document.hidden) {
    return;
  }
  familySlideshowActive = true;
  familySlideshowActive = true;
  activeFamilyVideoIndex = -1;
  secondGroupTerminal.hidden = true;
  familySlideshow.classList.add("is-entering");
  familySlideshow.hidden = false;
  familySlideshow.style.setProperty(
    "--family-slideshow-enter-duration",
    `${FAMILY_SLIDESHOW_ENTER_DURATION}ms`,
  );
  document.body.classList.add("family-slideshow-active");
  document.documentElement.classList.add("family-slideshow-active");
  memories.classList.add("family-slideshow-active");
  musicPausedForSecondGroup = false;
  stopSlideshowLoop();
  window.clearInterval(musicFadeInInterval);
  musicFadeInInterval = 0;
  musicPlaybackRequested = false;
  music.pause();
  setFamilyAudioAttenuation(true);
  setFamilySoundEffectsVolume(true);
  playAudioCue(
    slideshowStartSound,
    "Não foi possível iniciar o som de abertura do slideshow da família.",
  );
  playFamilyMusic(0);
  window.requestAnimationFrame(() => familySlideshow.classList.remove("is-entering"));
  scheduleTransitionTimer(
    "family-first-video",
    () => playNextFamilyVideo(0),
    FAMILY_SLIDESHOW_VIDEO_START_DELAY,
  );
}

function playFamilyMusic(trackIndex) {
  if (!familySlideshowActive || trackIndex >= familyMusicTracks.length) {
    familyMusic.pause();
    return;
  }

  window.clearInterval(familyMusicFadeInterval);
  familyMusicFadeInterval = 0;
  familyMusicFadeRemaining = 0;
  setAudioVolume(familyMusic, FAMILY_MUSIC_VOLUME);
  activeFamilyMusicTrack = trackIndex;
  familyMusic.src = getPreloadedAssetUrl(
    resolveSlideAssetPath(`homenagens/${familyMusicTracks[trackIndex]}`),
  );
  familyMusic.currentTime = 0;
  familyMusic.play().catch(() => {
    musicStatus.textContent =
      `Não foi possível iniciar a música ${familyMusicTracks[trackIndex]}.`;
  });
}

function pauseFamilyMusicFade() {
  if (!familyMusicFadeInterval) {
    return;
  }

  familyMusicFadeRemaining = Math.max(
    0,
    familyMusicFadeRemaining - (performance.now() - familyMusicFadeStartedAt),
  );
  window.clearInterval(familyMusicFadeInterval);
  familyMusicFadeInterval = 0;
}

function resumeFamilyMusicFade() {
  if (!familyMusicFadeRemaining || familyMusicFadeInterval || document.hidden) {
    return;
  }

  familyMusicFadeStartedAt = performance.now();
  familyMusicFadeInterval = window.setInterval(() => {
    const elapsed = performance.now() - familyMusicFadeStartedAt;
    const progress = Math.min(
      1,
      (FAMILY_MUSIC_FADE_DURATION - familyMusicFadeRemaining + elapsed)
        / FAMILY_MUSIC_FADE_DURATION,
    );
    setAudioVolume(familyMusic, FAMILY_MUSIC_VOLUME * (1 - progress));

    if (progress >= 1) {
      window.clearInterval(familyMusicFadeInterval);
      familyMusicFadeInterval = 0;
      familyMusicFadeRemaining = 0;
      familyMusic.pause();
    }
  }, 40);
}

function finishFamilySlideshow() {
  if (!familySlideshowActive) {
    return;
  }
  familySlideshowActive = false;
  familySlideshowActive = false;
  setFamilySoundEffectsVolume(false);
  setMadrinhaAudioAttenuation(false);
  familyVideoEntries.forEach(({ video: familyVideo }) => familyVideo.pause());
  clearTransitionTimer("family-first-video");
  clearTransitionTimer("family-video-transition");
  familySlideshow.classList.add("is-closing");
  familyMusicFadeRemaining = FAMILY_MUSIC_FADE_DURATION;
  resumeFamilyMusicFade();
  scheduleTransitionTimer("family-slideshow-return", () => {
    activeFamilyVideoIndex = -1;
    activeFamilyMusicTrack = -1;
    familyMusic.pause();
    setAudioVolume(familyMusic, FAMILY_MUSIC_VOLUME);
    setFamilyAudioAttenuation(false);
    familySlideshow.hidden = true;
    familySlideshow.classList.remove("is-closing");
    memories.classList.remove("family-slideshow-active");
    document.body.classList.remove("family-slideshow-active");
    document.documentElement.classList.remove("family-slideshow-active");
    intermissionPhase = "second";
    stopSlideshowLoop();
    window.scrollTo({ top: 0, behavior: "auto" });
    renderSlide(intermissionSlideIndex);
  }, FAMILY_MUSIC_FADE_DURATION);
}

function startSecondGroupSlides() {
  if (activeSlide !== intermissionSlideIndex || document.hidden) {
    return;
  }

  musicPausedForSecondGroup = false;
  stopSlideshowLoop();
  playAudioCue(
    slideshowStartSound,
    "Não foi possível iniciar o som de abertura do segundo slideshow.",
  );
  playMusic(1);
  renderSlide(intermissionSlideIndex + 1);
}

function submitSecondGroupCommand() {
  if (activeSlide !== intermissionSlideIndex || document.hidden) {
    return;
  }

  if (!secondGroupTerminalReady || secondGroupTransitionStarted) {
    return;
  }

  const expectedCommand = intermissionPhase === "family" ? "familia.exe" : "meu-mundo.exe";
  if (secondGroupCommandInput.value.trim().toLowerCase() !== expectedCommand) {
    secondGroupCommandError.textContent =
      `'${secondGroupCommandInput.value.trim()}' não é reconhecido como um comando válido.`;
    secondGroupCommandError.hidden = false;
    secondGroupCommandInput.value = "";
    secondGroupCommandInput.focus();
    return;
  }

  secondGroupTransitionStarted = true;
  secondGroupCommandError.hidden = true;
  secondGroupCommandInput.disabled = true;
  secondGroupTerminal.classList.add("is-closing");
  scheduleTransitionTimer(
    "second-group-command",
    intermissionPhase === "family" ? startFamilySlideshow : startSecondGroupSlides,
    650,
  );
}

secondGroupCommandInput.addEventListener("input", () => {
  const expectedCommand = intermissionPhase === "family" ? "familia.exe" : "meu-mundo.exe";
  if (secondGroupCommandInput.value.trim().toLowerCase() === expectedCommand) {
    submitSecondGroupCommand();
  }
});

secondGroupCommandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSecondGroupCommand();
});

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const target = event.target;
  if (
    target instanceof HTMLElement
    && target.closest("button, a, input, textarea, select, [contenteditable='true']")
  ) {
    return;
  }

  const input = !lockScreen.hidden && !projectorCommandInput.disabled
    ? projectorCommandInput
    : activeSlide === intermissionSlideIndex && !secondGroupCommandInput.disabled
      ? secondGroupCommandInput
      : null;
  if (!input) {
    return;
  }

  const start = input.selectionStart;
  const end = input.selectionEnd;
  if (event.key.length === 1) {
    event.preventDefault();
    input.focus();
    input.setRangeText(event.key, start, end, "end");
  } else if (event.key === "Backspace") {
    event.preventDefault();
    input.focus();
    const deleteStart = start === end ? Math.max(0, start - 1) : start;
    input.setRangeText("", deleteStart, end, "start");
  } else if (event.key === "Enter") {
    event.preventDefault();
    input.focus();
    input.form.requestSubmit();
    return;
  } else {
    return;
  }

  input.dispatchEvent(new Event("input", { bubbles: true }));
});

function beginFirstGroupTransition(slideIndex) {
  if (activeSlide !== slideIndex || firstGroupOutroStarted) {
    return;
  }

  firstGroupOutroStarted = true;
  musicPausedForSecondGroup = true;
  window.clearInterval(musicFadeInInterval);
  musicFadeInInterval = 0;
  const fadeDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : FIRST_GROUP_FINAL_FADE_DURATION;
  if (!music.paused && !document.hidden && fadeDuration > 0) {
    const fadeStartedAt = performance.now();
    const startingVolume = getBaseAudioVolume(music);
    musicFadeInInterval = window.setInterval(() => {
      const progress = Math.min(
        1,
        (performance.now() - fadeStartedAt) / fadeDuration,
      );
      setAudioVolume(music, startingVolume * (1 - progress));
      if (progress >= 1) {
        window.clearInterval(musicFadeInInterval);
        musicFadeInInterval = 0;
        music.pause();
      }
    }, 40);
  } else {
    setAudioVolume(music, 0);
    music.pause();
  }
  stopSlideshowLoop();
  slideshowEndSound.pause();
  slideshowEndSound.currentTime = 0;

  photoFrame.classList.add("is-fading-first-group-photo");
  revealTimers.push(window.setTimeout(() => {
    if (activeSlide === slideIndex) {
      renderSlide(intermissionSlideIndex);
    }
  }, fadeDuration));
}

function crossfadeSlideshowLoop() {
  if (
    !slideshowLoopActive
    || slideshowLoopFadeRemaining
    || document.hidden
    || slideshowLoopCrossfadeInterval
  ) {
    return;
  }

  const currentPlayer = slideshowLoopPlayers[activeSlideshowLoopPlayer];
  const nextPlayerIndex = (activeSlideshowLoopPlayer + 1) % slideshowLoopPlayers.length;
  const nextPlayer = slideshowLoopPlayers[nextPlayerIndex];
  if (!Number.isFinite(currentPlayer.duration) || currentPlayer.duration <= 0) {
    return;
  }

  const remaining = currentPlayer.duration - currentPlayer.currentTime;
  if (remaining > SLIDESHOW_LOOP_CROSSFADE_DURATION) {
    return;
  }

  nextPlayer.pause();
  nextPlayer.currentTime = 0;
  setAudioVolume(nextPlayer, 0);
  nextPlayer.play().catch(() => {
    musicStatus.textContent = "Não foi possível reiniciar a trilha em loop do slideshow.";
  });

  const fadeStartedAt = performance.now();
  slideshowLoopCrossfadeInterval = window.setInterval(() => {
    if (!slideshowLoopActive) {
      window.clearInterval(slideshowLoopCrossfadeInterval);
      slideshowLoopCrossfadeInterval = 0;
      return;
    }

    const progress = Math.min(
      1,
      (performance.now() - fadeStartedAt) / (SLIDESHOW_LOOP_CROSSFADE_DURATION * 1000),
    );
    setAudioVolume(currentPlayer, SLIDESHOW_SOUND_VOLUME * (1 - progress));
    setAudioVolume(nextPlayer, SLIDESHOW_SOUND_VOLUME * progress);

    if (progress >= 1) {
      window.clearInterval(slideshowLoopCrossfadeInterval);
      slideshowLoopCrossfadeInterval = 0;
      currentPlayer.pause();
      currentPlayer.currentTime = 0;
      setAudioVolume(currentPlayer, SLIDESHOW_SOUND_VOLUME);
      activeSlideshowLoopPlayer = nextPlayerIndex;
    }
  }, 20);
}

function startBirthdayPresentation() {
  if (galleryStarted) {
    return;
  }

  memories.hidden = false;
  galleryStarted = true;
  playAudioCue(
    slideshowStartSound,
    "Não foi possível iniciar o som de abertura do slideshow.",
  );
  syncWindSound();
  renderSlide(0);
  document.querySelector("#birthday-title").focus();
  playMusic();
}

projectionPlayButton.addEventListener("click", () => {
  if (galleryStarted) {
    return;
  }

  photoFrame.classList.remove("awaiting-play");
  projectorStatus.textContent = "PROJETOR INICIANDO";
  projectionPlayButton.remove();
  startBirthdayPresentation();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isMobileDevice()) {
    return;
  }

  if (projectorCommandInput.value.trim().toLocaleLowerCase() === PROJECTOR_COMMAND) {
    loginSubmitted = true;
    window.clearTimeout(terminalTypingTimer);
    terminalTypingTimer = 0;
    if (!isMobileLayout()) {
      if (typeof document.documentElement.requestFullscreen === "function") {
        document.documentElement.requestFullscreen().catch(() => {
          fullscreenStatus.textContent = "Não foi possível ativar a tela cheia. Pressione F11 para ativá-la.";
          fullscreenStatus.hidden = false;
        });
      } else {
        fullscreenStatus.textContent = "Este navegador não permite ativar a tela cheia automaticamente. Pressione F11.";
        fullscreenStatus.hidden = false;
      }
    }

    const finishDarkening = (transitionEvent) => {
      if (
        transitionEvent
        && (
          transitionEvent.target !== document.body
          || transitionEvent.propertyName !== "opacity"
        )
      ) {
        return;
      }

      window.clearTimeout(darkenFallbackTimer);
      document.body.removeEventListener("transitionend", finishDarkening);
      document.body.classList.remove("cinema-darkening");
      document.body.classList.add("cinema-started");
      lockScreen.hidden = true;
      birthday.hidden = false;
      memories.hidden = false;
      syncWindSound();
      photoFrame.classList.add("awaiting-play");
      projectionPlayButton.focus();
    };
    const darkenFallbackTimer = window.setTimeout(
      () => finishDarkening(),
      CINEMA_DARKEN_FALLBACK_DELAY,
    );

    document.body.addEventListener("transitionend", finishDarkening);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.body.classList.add("cinema-darkening");
      });
    });
    return;
  }

  projectorCommandInput.value = "";
  projectorCommandInput.focus();
});

projectorCommandInput.addEventListener("input", () => {
  if (projectorCommandInput.value && !loginSubmitted) {
    syncWindSound();
  }

  if (
    projectorCommandInput.value.trim().toLocaleLowerCase() === PROJECTOR_COMMAND
    && !loginSubmitted
  ) {
    form.requestSubmit();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !document.fullscreenElement) {
    return;
  }

  document.exitFullscreen().catch(() => {
    fullscreenStatus.textContent = "Não foi possível sair da tela cheia.";
    fullscreenStatus.hidden = false;
  });
});

birthday.addEventListener("copy", (event) => {
  event.preventDefault();
});

birthday.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".slide-caption, .ending-content, .reveal-copy")) {
    event.preventDefault();
  }
});

music.addEventListener("error", () => {
  musicStatus.textContent = "Não foi possível carregar a música.";
});

endingMusic.addEventListener("error", () => {
  if (document.body.classList.contains("presentation-ended")) {
    musicStatus.textContent = "Não foi possível carregar a música final.";
  }
});

endingMusic.addEventListener("ended", startEndingWindFade);

familyMusic.addEventListener("ended", () => {
  if (familySlideshowActive) {
    playFamilyMusic(activeFamilyMusicTrack + 1);
  }
});

familyMusic.addEventListener("error", () => {
  const trackName = familyMusicTracks[activeFamilyMusicTrack];
  if (familySlideshowActive && trackName) {
    musicStatus.textContent = `Não foi possível carregar a música ${trackName}.`;
  }
});

windSound.addEventListener("error", () => {
  musicStatus.textContent = "Não foi possível carregar o som de vento.";
});

[
  [slideshowStartSound, "Não foi possível carregar o som de abertura do slideshow."],
  [slideshowLoopSound, "Não foi possível carregar a trilha em loop do slideshow."],
  [slideshowLoopBackupSound, "Não foi possível carregar a trilha em loop do slideshow."],
  [slideChangeSound, "Não foi possível carregar o som de troca de slide."],
  [slideshowEndSound, "Não foi possível carregar o som de encerramento do slideshow."],
  [flashSound, "Não foi possível carregar o som do flash."],
].forEach(([audio, errorMessage]) => {
  audio.addEventListener("error", () => {
    musicStatus.textContent = errorMessage;
  });
});

slideshowStartSound.addEventListener("ended", () => {
  if (
    familySlideshowActive
    || (activeSlide !== intermissionSlideIndex && !slides[activeSlide]?.isEnding)
  ) {
    startSlideshowLoop();
  }
});

slideshowLoopPlayers.forEach((audio) => {
  audio.addEventListener("timeupdate", crossfadeSlideshowLoop);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(terminalTypingTimer);
    terminalTypingTimer = 0;
    window.clearTimeout(secondGroupTerminalTimer);
    secondGroupTerminalTimer = 0;
    visibilityPausedAudio = new Map();
    audioElements.forEach((audio) => {
      if (!audio.paused) {
        visibilityPausedAudio.set(audio, {
          source: audio.currentSrc || audio.src,
          currentTime: audio.currentTime,
        });
      }
      audio.pause();
    });
    visibilityPausedVideo = !video.paused
      ? {
        source: video.currentSrc || video.src,
        currentTime: video.currentTime,
      }
      : null;
    video.pause();
    const activeFamilyVideo = familyVideoEntries[activeFamilyVideoIndex]?.video;
    visibilityPausedFamilyVideo = activeFamilyVideo && !activeFamilyVideo.paused
      ? {
        video: activeFamilyVideo,
        currentTime: activeFamilyVideo.currentTime,
      }
      : null;
    familyVideoEntries.forEach(({ video: familyVideo }) => familyVideo.pause());
    window.clearInterval(musicFadeInInterval);
    musicFadeInInterval = 0;
    window.clearInterval(slideshowLoopCrossfadeInterval);
    slideshowLoopCrossfadeInterval = 0;
    pauseEndingWindFade();
    pauseFamilyMusicFade();
    pauseSlideshowLoopFade();
    pauseTransitionTimers();
    return;
  }

  startTerminalTyping();
  startIntermissionTerminalTyping();
  if (secondGroupTerminalReady) {
    startIntermissionCommandTyping();
  }
  if (deferredSlideIndex !== null) {
    const slideIndex = deferredSlideIndex;
    deferredSlideIndex = null;
    renderSlide(slideIndex);
  }
  resumeTransitionTimers();

  visibilityPausedAudio.forEach((state, audio) => {
    const source = audio.currentSrc || audio.src;
    if (source !== state.source || Math.abs(audio.currentTime - state.currentTime) > 0.5) {
      return;
    }

    if (audio === music) {
      return;
    }
    if (audio === familyMusic && !familySlideshowActive) {
      return;
    }
    if (audio === windSound) {
      return;
    }
    if (slideshowLoopPlayers.includes(audio) && !slideshowLoopActive) {
      return;
    }

    audio.play().catch(() => {
      musicStatus.textContent = "Não foi possível retomar o áudio.";
    });
  });
  visibilityPausedAudio.clear();
  syncWindSound();
  resumeEndingWindFade();
  resumeFamilyMusicFade();
  resumeSlideshowLoopFade();

  if (galleryStarted && musicPlaybackRequested && !musicPausedForSecondGroup && !music.ended) {
    startMusicPlayback(activeTrack === 0 && activeSlide < secondSlideshowGroupStart);
  }
  if (
    activeSlide === intermissionSlideIndex
    && !secondGroupTerminal.classList.contains("is-closing")
    && !secondGroupCommandInput.disabled
  ) {
    secondGroupCommandInput.focus();
  }

  if (
    visibilityPausedVideo
    && (video.currentSrc || video.src) === visibilityPausedVideo.source
    && Math.abs(video.currentTime - visibilityPausedVideo.currentTime) <= 0.5
    && slides[activeSlide]?.isVideo
  ) {
    video.play().catch(() => {
      musicStatus.textContent = "Não foi possível retomar o vídeo.";
    });
  }
  visibilityPausedVideo = null;
  if (familySlideshowActive && activeFamilyVideoIndex >= 0) {
    const activeFamilyVideo = familyVideoEntries[activeFamilyVideoIndex].video;
    if (activeFamilyVideo.ended) {
      activeFamilyVideo.classList.add("is-frozen");
      playAudioCue(flashSound, "Não foi possível iniciar o som do flash.");
      playNextFamilyVideo(activeFamilyVideoIndex + 1);
    } else if (activeFamilyVideo.error || activeFamilyVideo.dataset.failureHandled) {
      playNextFamilyVideo(activeFamilyVideoIndex + 1);
    } else if (
      visibilityPausedFamilyVideo
      && activeFamilyVideo === visibilityPausedFamilyVideo.video
      && Math.abs(activeFamilyVideo.currentTime - visibilityPausedFamilyVideo.currentTime) <= 0.5
    ) {
      activeFamilyVideo.play().catch(() => {
        musicStatus.textContent = "Não foi possível retomar o vídeo da família.";
      });
    }
  }
  visibilityPausedFamilyVideo = null;
});
