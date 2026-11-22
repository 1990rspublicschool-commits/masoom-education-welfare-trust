import Link from "next/link";
import { ContentPage } from "@/components/site";

export const metadata = { title: "Donate" };

export default function DonatePage() {
  return <ContentPage label="Donations" title="We are getting the foundations right first." copy="Masoom Education & Welfare Trust is not accepting donations at this time. We will open contributions only after our payment, governance and reporting arrangements are ready.">
    <section className="section"><div className="container" style={{ maxWidth: 820 }}>
      <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: 20, padding: 36, boxShadow: "var(--shadow-sm)" }}>
        <span className="eyebrow">For your safety</span>
        <h2 className="section-title" style={{ fontSize: "2rem" }}>Please donâ€™t send money yet.</h2>
        <p className="section-copy">There is no active payment link or verified donation account on this website. We will publish the official payment methods, what contributions can support, and how we will report their use before inviting donations.</p>
        <p className="section-copy" style={{ marginTop: 16 }}>We appreciate your interest and want to earn your trust with clear information and verifiable updates.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <Link className="button" href="/transparency">Read our transparency page</Link>
          <Link className="button button-outline" href="/contact">Contact us</Link>
        </div>
      </div>
    </div></section>
  </ContentPage>;
}
