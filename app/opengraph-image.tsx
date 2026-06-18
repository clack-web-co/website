import { ImageResponse } from "next/og";

export const alt = "Clack Web Co. - professional websites for North East businesses";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f0e7",
          color: "#19231f",
          padding: "72px 84px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              background: "#19231f",
              color: "#ffffff",
              fontSize: 42,
              fontWeight: 800
            }}
          >
            C
          </div>
          <div style={{ fontSize: 34, fontWeight: 800 }}>Clack Web Co.</div>
        </div>
        <div
          style={{
            maxWidth: 940,
            display: "flex",
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 1.08
          }}
        >
          Professional websites for North East businesses.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#53665d" }}>
          Clear, credible and built to win enquiries.
        </div>
      </div>
    ),
    size
  );
}
