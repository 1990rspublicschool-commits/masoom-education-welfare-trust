import { ContentPage } from "@/components/site";
export const metadata = { title: "Our Programs" };
const programs = [
  ["🍲", "Food and ration support", "Helping families with meals and essential groceries during difficult times."],
  ["🧣", "Winter blankets", "Offering blankets and warm clothing to bring comfort through cold weather."],
  ["💍", "Marriage assistance", "Practical support for families preparing for a daughter’s wedding with dignity."],
  ["🩺", "Medical camps", "Bringing basic health check-ups and guidance closer to local communities."],
  ["💧", "Handpumps and clean water", "Working toward better access to water for villages and neighbourhoods."],
  ["📚", "Education support", "Encouraging and supporting children as they continue their learning."],
];
export default function Page() {
  return <ContentPage label="Our programs" title="A little support can help open the way forward." copy="Food, warmth, health, and clean water. We want to stand beside people through the everyday needs that matter most.">
    <section className="section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">Ways we hope to help</span><h2 className="section-title">Care that reaches people where they <em>need it.</em></h2></div><p>Each program should be shaped with care, respect, and clear information for the people it serves.</p></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>{programs.map(([icon, title, copy], index) => <article key={title} style={{ background: "white", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden" }}><div style={{ position: "relative", height: 190 }}><img src={["https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=85", "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=85", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85", "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=85", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=85"][index]} alt={`${title} (illustrative photo)`} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div><div style={{ padding: 24 }}><span style={{ fontSize: "1.8rem" }}>{icon}</span><h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--green-900)", fontSize: "1.3rem", margin: "8px 0" }}>{title}</h3><p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{copy}</p><p className="photo-caption" style={{ marginTop: 12 }}>Illustrative photo · India</p></div></article>)}</div>
      <div style={{ marginTop: 40, padding: 24, borderRadius: 16, background: "#fff7ed", color: "#7c2d12" }}><strong>Donation status:</strong> Online donations are not open yet. Verified payment, program, and fund-use details will be published before contributions begin.</div>
    </div></section>
  </ContentPage>;
}