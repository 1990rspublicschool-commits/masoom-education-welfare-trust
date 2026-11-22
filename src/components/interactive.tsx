import Link from "next/link";

export function EmergencyBanner() {
  return (
    <div className="top-emergency-banner" style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}>
      <span>Masoom Education &amp; Welfare Trust is preparing its community work. <strong>Donations are not open yet.</strong></span>
      <Link href="/our-story" style={{ textDecoration: "underline", fontWeight: 700, marginLeft: 8, color: "#fef08a" }}>Read our story →</Link>
    </div>
  );
}
