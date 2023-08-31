/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Style = "normal" | "italic";

const customFonts = [
  {
    familyName: "Typewriter",
    ttf: "https://deno.land/x/og_edge@0.0.1/assets/TYPEWR__.TTF",
    weight: 400,
    style: "normal",
  },
  {
    familyName: "catamaran",
    ttf: "https://deno.land/x/og_edge@0.0.1/assets/Catamaran-Regular.ttf",
    weight: 400,
    style: "normal",
  },
];

const fonts = Promise.all(customFonts.map(({ ttf }) => fetch(ttf).then(res) => res.arrayBuffer())));

export default async function handler() {
  const fontsDatas = await fonts;

  const fontsOptions = fontsDatas.map((fontData, i) => ({
    name: customFonts[i].familyName,
    data: fontData,
    style: customFonts[i].style as Style,
    weight: customFonts[i].weight as Weight,
  }));

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
      <h1 style={{
        fontFamily: "Catamaran"
      }}>
        Hello world!
      </h1>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: fontsOptions,
    },
  );
}