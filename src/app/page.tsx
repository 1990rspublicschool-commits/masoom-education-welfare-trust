"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/site";

const impacts = {
	200: {
		title: "1 Winter Blanket",
		desc: "Provides heavy-duty warmth for one person sleeping on the streets.",
		icon: "❄️",
	},
	500: {
		title: "1 Family’s Ration (1 Week)",
		desc: "Essential groceries like rice, lentils, and oil for a struggling family.",
		icon: "🍲",
	},
	1000: {
		title: "1 Child’s Education",
		desc: "Covers school fees, books, and stationery for an underprivileged child.",
		icon: "📚",
	},
	2500: {
		title: "Medical Camp Support",
		desc: "Helps cover doctors’ fees and medicines for a village health camp.",
		icon: "🩺",
	},
};
const initiatives = [
	{
		tag: "School Education",
		title: "R.S. Public School",
		desc: "Established in 1990 in a single room to educate children from needy families. Today it has grown into a 3-storey institution.",
		image: "/images/School 1.jpeg",
		icon: "📚",
	},
	{
		tag: "Clean Water",
		title: "100+ Hand Pumps & RO Facilities",
		desc: "Installed over 100 hand pumps and safe drinking water units in rural, water-scarce communities across Bihar.",
		image: "/images/pump 1.jpeg",
		icon: "💧",
	},
	{
		tag: "Winter Relief",
		title: "Annual Blanket Distribution",
		desc: "Conducting annual distribution drives of thick blankets and warm clothes for the homeless, elderly, and vulnerable families.",
		image: "/images/kambal 1.jpeg",
		icon: "❄️",
	},
	{
		tag: "Family Support",
		title: "Support for Daughters' Marriages",
		desc: "Providing essential financial aid and wedding expenses to economically disadvantaged families with dignity and respect.",
		image: "/images/kanya_vivah.jpg",
		icon: "💐",
	},
	{
		tag: "Food & Ration",
		title: "Food Assistance for the Needy",
		desc: "Distributing food packets and essential ration kits to elderly, widows, and struggling families so no one sleeps hungry.",
		image: "/images/galla_distribution.jpg",
		icon: "🍲",
	},
	{
		tag: "Women Empowerment",
		title: "Vocational & Skill Training",
		desc: "Facilitating free vocational training in tailoring, sewing, embroidery, and computer skills to make women self-reliant.",
		image: "/images/women_empowerment.jpg",
		icon: "✂️",
	},
];

export default function Home() {
	const [amount, setAmount] = useState<keyof typeof impacts>(200);
	const [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		if (!modalOpen) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setModalOpen(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [modalOpen]);
	const selectedImpact = impacts[amount];

	return (
		<main className="ref-site">
			<Header onDonate={() => setModalOpen(true)} />

			<section className="ref-hero" id="top">
				<Image
					src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
					alt="Children in a community setting"
					fill
					priority
					sizes="100vw"
				/>
				<div className="ref-hero-scrim" />
				<div className="ref-container ref-hero-inner">
					<div className="ref-hero-copy">
						<div className="ref-hero-badge">
							<span>✓</span> 100% of your donation goes directly to the cause.
						</div>
						<h1>
							Bringing Hope to the <em>Most Vulnerable</em>
						</h1>
						<p>
							We are dedicated to uplifting underserved communities in Bihar through
							practical, direct support. Your kindness can help build a brighter
							future for families.
						</p>
						<div className="ref-hero-actions">
							<button
								onClick={() => setModalOpen(true)}
								className="ref-donate-button"
							>
								Donate Now <span>→</span>
							</button>
							<a
								href="/our-story"
								className="ref-story-button"
							>
								Read Our Story
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="ref-stats-wrap">
				<div className="ref-stats">
					{[
						["❄️", "2,500+", "Blankets Distributed"],
						["🍲", "100K+", "Meals Served"],
						["📚", "2,000+", "Children Educated"],
						["🩺", "1,000+", "Medical Relief"],
						["💧", "100+", "Hand Pumps Installed"],
						["✂️", "500+", "Bridal Support"],
					].map(([icon, number, label]) => (
						<article className="ref-stat" key={label}>
							<span className="ref-stat-icon">{icon}</span>
							<strong>{number}</strong>
							<small>{label}</small>
						</article>
					))}
				</div>
				<p className="ref-stat-note">
					Impact figures shown in this reference design are illustrative and have not
					been verified for the Trust.
				</p>
			</section>

			<section className="ref-story-section" id="story">
				<div className="ref-container ref-story-layout">
					<div className="ref-story-image">
						<div className="ref-story-green" />
						<div className="ref-story-photo">
							<Image
								src="/images/School 1.jpeg"
								alt="R.S. Public School"
								fill
								sizes="(max-width: 900px) 100vw, 50vw"
							/>
						</div>
					</div>
					<div className="ref-story-content">
						<span className="ref-origin">
							<span>♥</span> Our Beginning · 1990
						</span>
						<h2>
							One room.<em> One big vision.</em>
						</h2>
						<div className="ref-story-text">
							<p>
								Masoom Educational &amp; Welfare Society began with a simple purpose:
								to bring positive change to poor and underprivileged families.
							</p>
							<p>
								The founder saw children leaving school because private fees were
								unaffordable. That concern led to the founding of{" "}
								<strong>R.S. Public School</strong>.
							</p>
							<div className="ref-quote">
								“Poverty should never become a barrier to a child’s education or
								future.”
							</div>
							<a
								href="/our-story"
								className="ref-donate-button"
								style={{
									marginTop: 14,
									minHeight: 46,
									width: "fit-content",
								}}
							>
								Read Full Story <span>→</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="ref-calculator-section" id="impact">
				<div className="ref-container">
					<div className="ref-calculator-heading">
						<h2>Interactive Impact Calculator</h2>
						<p>
							Explore how different areas of support can contribute to community
							wellbeing.
						</p>
						<small>
							Examples below are illustrative only; actual program costs and outcomes
							are not yet verified.
						</small>
					</div>
					<div className="ref-calculator">
						<div className="ref-amount-panel">
							<h3>Select Donation Amount</h3>
							<div className="ref-amount-list">
								{(Object.keys(impacts) as unknown as (keyof typeof impacts)[]).map(
									(key) => (
										<button
											key={key}
											onClick={() => setAmount(key)}
											className={`ref-amount-button ${amount === key ? "active" : ""
												}`}
										>
											<span>₹{Number(key).toLocaleString("en-IN")}</span>
											<span className="ref-amount-icon">
												{impacts[key].icon}
											</span>
										</button>
									)
								)}
							</div>
						</div>
						<div className="ref-impact-panel">
							<div className="ref-impact-icon">{selectedImpact.icon}</div>
							<span className="ref-your-impact">YOUR IMPACT</span>
							<h3>{selectedImpact.title}</h3>
							<p>{selectedImpact.desc}</p>
							<button
								onClick={() => setModalOpen(true)}
								className="ref-calculator-donate"
							>
								Donate Now
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="ref-initiatives-section" id="initiatives">
				<div className="ref-container">
					<div className="ref-initiatives-heading">
						<h2>Our Core Initiatives</h2>
						<p>
							Real, grassroots community programs run by Masoom Educational &amp; Welfare Society across Bihar.
						</p>
					</div>
					<div className="ref-initiative-grid">
						{initiatives.map((item) => (
							<article className="ref-initiative-card" key={item.title}>
								<div className="ref-initiative-image">
									<Image
										src={item.image}
										alt={item.title}
										fill
										sizes="(max-width: 700px) 100vw, 33vw"
									/>
									<span>{item.icon}</span>
								</div>
								<div className="ref-initiative-copy">
									<span className="ref-initiative-tag">{item.tag}</span>
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</article>
						))}
					</div>
					<div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
						<a href="/our-story" className="ref-donate-button">
							Read Our Full Story <span>→</span>
						</a>
					</div>
				</div>
			</section>

			<footer className="ref-footer">
				<div className="ref-container ref-footer-inner">
					<div>
						<div className="ref-footer-brand">
							<span>♥</span> Masoom Education &amp; Welfare Trust
						</div>
						<p>Bihar, India</p>
					</div>
					<div className="ref-footer-right">
						<p className="ref-copyright">
							© {new Date().getFullYear()} Masoom Education &amp; Welfare Trust. All
							rights reserved.
						</p>
						<p className="ref-dev-credit">
							Designed &amp; Developed by <strong>MKS Technology</strong>
						</p>
					</div>
				</div>
			</footer>

			{modalOpen && (
				<div
					className="ref-modal-overlay"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) setModalOpen(false);
					}}
				>
					<section
						className="ref-modal"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-heading"
					>
						<button
							className="ref-modal-x"
							onClick={() => setModalOpen(false)}
							aria-label="Close dialog"
						>
							×
						</button>
						<div className="ref-modal-warning">!</div>
						<h2 id="modal-heading">Donations are not open yet</h2>
						<p>
							Thank you for your generous intent. We are currently preparing our
							governance protocols and payment information. Contributions will open
							once these arrangements are ready.
						</p>
						<button
							className="ref-modal-ok"
							onClick={() => setModalOpen(false)}
						>
							Understood
						</button>
					</section>
				</div>
			)}
		</main>
	);
}
