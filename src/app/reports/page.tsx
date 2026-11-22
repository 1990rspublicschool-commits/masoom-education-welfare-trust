import { ContentPage, EmptyState } from "@/components/site";
export const metadata = { title: "Reports" };
export default function Page() { return <ContentPage label="Reports" title="Reports and documents." copy="We will make approved organizational reports available here as they are produced."><section className="section"><div className="container"><EmptyState title="No reports are published yet." copy="Please check again later for verified reports and documents." /></div></section></ContentPage>; }
