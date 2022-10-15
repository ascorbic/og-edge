/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from '../../mod.ts'

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          width="256"
          src={`https://github.com/${username || 'netlify'}.png`}
          style={{
            borderRadius: 128,
          }}
        />
        {username ?  <p>github.com/{username}</p> : <p>try /?username=ascorbic</p>}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
