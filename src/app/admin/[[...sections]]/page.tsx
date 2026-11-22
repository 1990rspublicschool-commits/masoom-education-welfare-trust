import Link from "next/link";

const links = ["donations", "projects", "beneficiaries", "stories", "impact", "expenses", "reports", "volunteers", "messages", "settings"];

/** Admin data stays unavailable until Firebase Auth and trusted role verification are configured. */
export default async function AdminPage({ params }: { params: Promise<{ sections?: string[] }> }) {
  const { sections = [] } = await params;
  const title = sections.length ? sections.map((part) => part.replaceAll("-", " ")).join(" / ") : "Admin overview";
  return <main className="container section admin-shell"><span className="eyebrow">Administration</span><h1 className="section-title">{title}</h1><div className="admin-notice"><h2>Admin access is not configured yet.</h2><p>Private records are not available through this page. Firebase Authentication, verified server-side role checks and an assigned administrator account must be configured before the dashboard can be enabled.</p><p>Do not enter personal, beneficiary or financial information here.</p></div><nav className="admin-links" aria-label="Admin sections">{links.map((item) => <Link key={item} href={`/admin/${item}`}>{item.replaceAll("-", " ")}</Link>)}</nav></main>;
}
