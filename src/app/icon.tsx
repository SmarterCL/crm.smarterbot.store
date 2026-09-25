import { ImageResponse } from "next/og";

// Favicon: Tuhaus house mark on a white rounded square, so it stays
// visible on both light and dark browser tabs. The mark is embedded as
// a base64 SVG (same file as public/brand/tuhaus-isotipo.svg) because
// this route runs on the edge and can't read from disk.

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const MARK =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjYyIDQyIDEwOCAxMDgiPjxyZWN0IGZpbGw9IiMxZDFlMWIiIHg9IjExNC43OSIgeT0iNjYuMjciIHdpZHRoPSIzNy40MiIgaGVpZ2h0PSI1MS44NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjEgMTIxLjQpIHJvdGF0ZSgtNDUpIi8+PHBhdGggZmlsbD0iIzFkMWUxYiIgZD0iTTc4LjYxLDExMi43OGwzMC45LDMwLjlhOC45NCw4Ljk0LDAsMCwwLDExLjQ3LDFMODMuODYsMTA3LjUyWiIvPjxwYXRoIGZpbGw9IiNlYWE2NTQiIGQ9Ik0xMzMuMjMsODMuOTMsMTExLjQsMTA1Ljc3LDkyLjQ2LDg2LjgzbDIxLTIxLC44LS44LDEyLTEyLTQuMTMtNC4xM2E4LjkxLDguOTEsMCwwLDAtMTIuNjIsMEw2OC40Myw5MGE4LjkxLDguOTEsMCwwLDAsMCwxMi42Mmw3Ljg2LDcuODYsNy41OC03LjU5LDIuMzIsMi4zMmgwbDM3LjIxLDM3LjIxLDEyLjMzLTEyLjMyLTE1LTE1LDIxLjgzLTIxLjgzLDE1LDE1LDUuNjYtNS42NmE4LjkzLDguOTMsMCwwLDAsMC0xMi42MkwxMzMuNjksNjAuNDZsLTEyLDEyWiIvPjwvc3ZnPgo=";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 7,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={MARK} width={28} height={28} alt="" />
      </div>
    ),
    { ...size },
  );
}
