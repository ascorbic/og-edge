/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

const font = fetch("https://deno.land/x/og_edge@0.0.1/assets/TYPEWR__.TTF")
  .then(
    (res) => res.arrayBuffer(),
  );

export default async function handler() {
  const fontData = await font;

  return new ImageResponse(
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        fontSize: 100,
        fontFamily: "Typewriter",
        paddingTop: "100px",
        paddingLeft: "50px",
      }}
    >
      Hello world!
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Typewriter",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
