import { useState } from "react";

export function useMediaStream() {
  const [mediaStream, setMediaStream] = useState(null);

  async function obtainStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 256,
          height: 256,
        },
      });
      setMediaStream(stream);
    } catch (e) {
      console.error("Could not obtain stream", e);
    }
  }

  if (!mediaStream) {
    obtainStream();
  }

  return mediaStream;
}
