import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "../../mod.ts";
export default function handler() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hello world!
    </div>,
    {
      width: 1200,
      height: 600,
    },
  );
}
