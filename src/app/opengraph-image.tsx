import { ImageResponse } from "next/og";
export const alt = "Vipin Gautam — Software Engineer & Freelance Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", padding: 72, background: "#eef5ef", color: "#18261c", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><span>VG</span><span>vipingautam.in</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 76, fontWeight: 700 }}>Vipin Gautam</div>
        <div style={{ fontSize: 32 }}>Software Engineer & Freelance Full Stack Developer</div>
        <div style={{ fontSize: 26, color: "#4a5c4f" }}>Web apps · SaaS · Automation · From idea to launch</div>
      </div>
      <div style={{ display: "flex", gap: 48, fontSize: 28 }}><span>10+ freelance applications</span><span>500+ production users</span></div>
    </div>,
    size,
  );
}
