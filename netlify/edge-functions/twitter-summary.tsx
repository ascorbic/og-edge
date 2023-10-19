/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

const notoBold = await loadFont(
"https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-800-normal.ttf"
    )

const notoSans = await loadFont(
    "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-500-normal.ttf")

function loadFont(name:string) {
  return fetch(name).then((res) => res.arrayBuffer())
}

export default function handler(req: Request) {

  return new ImageResponse(
    <div
      style={{
        color: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: 1024,
        height: 576,
      }}
    >
      <div
        style={{
          width: "100%",
          flex: 1,
          backgroundSize: "cover",
          background:
            `url(https://images.unsplash.com/photo-1696620257089-8197cfb52948?auto=format&fit=crop&q=80&w=1024&h=512)`,
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: "white",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          fontSize: 30,
          "padding": 30,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "noto-sans",
            fontWeight: 800,
          }}
        >
          Bring back the Twitter link preview
        </p>
        <p
          style={{
            fontSize: 30,
            marginTop: 10,
            marginBottom: 10,

          }}
        >
          Use dynamic images to make your Twitter links look like links again.
        </p>
        <p
          style={{
            "color": "#666666",
            margin: 0,
            fontSize: 26
          }}
        >
          mk.gg
        </p>
      </div>
    </div>,
    {
      width: 1024,
      height: 576,
      fonts: [
        {
          name: "noto-sans",
          style: "normal",
          data: notoBold,
          weight: 800,
        },
        {
            name: "noto-sans",
            style: "normal",
            data: notoSans,
            weight: 500,
          },
      ],
    },
  );
}

export const config = {
  path: "/og/twitter",
};
