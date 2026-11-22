import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/site";

export const metadata = { title: "Our Story" };

const storyCards = [
	{
		number: "01",
		label: "Established in 1990",
		title: "The Beginning of a Dream",
		icon: "📚",
		image: "/images/School 1.jpeg",
		text: [
			"The journey of Masoom Educational & Welfare Society began with a vision to bring positive change to the lives of poor and underprivileged people.",
			"The founder noticed that children from economically weaker families could not afford private-school fees, so many were deprived of quality education or forced to discontinue their studies.",
			"Believing every child deserves an opportunity to study and build a better future, R.S. Public School was established in 1990 in just one small room.",
			"With limited resources and many obstacles, the school has gradually expanded from that room into a three-storey educational institution that reflects years of dedication and hard work.",
		],
	},
	{
		number: "02",
		label: "Education",
		title: "Supporting Higher Education",
		icon: "🎓",
		image: "/images/school 2.jpeg",
		text: [
			"Education has never been limited to school-level learning. The organization supports students from poor families who complete high school but cannot continue their education due to financial difficulties.",
			"At present, Masoom Educational & Welfare Society supports approximately 10 financially disadvantaged students in their higher education journey.",
			"Limited funding has restricted the initiative, so the organization is currently focused on maintaining and strengthening R.S. Public School. The vision remains unchanged: no deserving student should abandon education because of poverty.",
		],
	},
	{
		number: "03",
		label: "Food & dignity",
		title: "Food Distribution for the Poor",
		icon: "🍲",
		image: "/images/galla_distribution.jpg",
		text: [
			"The organization observed that many poor families struggled to arrange even two meals a day. For several individuals and families, sufficient food was a daily challenge.",
			"Masoom Educational & Welfare Society began providing food assistance because food is one of our most basic human needs.",
			"Helping someone overcome hunger is considered one of the most meaningful expressions of humanity and dignity.",
		],
	},
	{
		number: "04",
		label: "Clean water",
		title: "Safe Drinking Water for Everyone",
		icon: "💧",
		image: "/images/handpump_water.jpg",
		text: [
			"The organization identified access to clean drinking water as a major problem, especially in economically weaker communities.",
			"It has supported the installation of more than 100 hand pumps at different locations and arranged RO water facilities in several places.",
			"Efforts are also made to provide cold drinking water during summer and warm drinking water during winter wherever possible.",
		],
	},
	{
		number: "05",
		label: "Women empowerment",
		title: "Skills for a Self-Reliant Future",
		icon: "✂️",
		image: "/images/women_empowerment.jpg",
		text: [
			"Many women want to become financially independent but lack access to training, employment opportunities and practical skills.",
			"The organization facilitates vocational training in tailoring and sewing, embroidery and computer education.",
			"The objective is to provide training, identify suitable employment opportunities and help women become financially independent—strengthening both themselves and their families.",
		],
	},
	{
		number: "06",
		label: "Family support",
		title: "Supporting the Marriages of Poor Daughters",
		icon: "💐",
		image: "/images/kanya_vivah.jpg",
		text: [
			"Arranging a daughter's marriage can become a major financial burden for economically disadvantaged families.",
			"Masoom Educational & Welfare Society supports poor and needy families by providing financial assistance and taking responsibility for necessary wedding expenses wherever possible.",
			"This support is about more than money: it brings dignity, relief and happiness to struggling families.",
		],
	},
	{
		number: "07",
		label: "Healthcare",
		title: "No Life Lost to the Cost of Treatment",
		icon: "🩺",
		image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
		text: [
			"A serious illness can become especially painful when a family cannot afford continued treatment.",
			"Whenever the organization learns that a seriously ill person is at risk because of financial problems, it tries to provide assistance using its own resources wherever possible.",
			"The belief is simple: no person's life should be put at risk merely because they cannot afford medical treatment.",
		],
	},
	{
		number: "08",
		label: "Winter relief",
		title: "Blankets and Warmth Every Winter",
		icon: "❄️",
		image: "/images/kambal 1.jpeg",
		text: [
			"Winter is extremely difficult for poor families, homeless individuals, elderly people and children who do not have adequate warm clothing.",
			"Every year, the organization conducts blanket and sweater distribution drives in different locations.",
			"Special efforts are made for poor families, underprivileged children and elderly people. Providing warmth in the cold reflects the organization's ongoing commitment to social responsibility.",
		],
	},
	{
		number: "09",
		label: "Our wider mission",
		title: "A Continuous Journey of Social Service",
		icon: "🤝",
		image: "/images/school 4.jpeg",
		text: [
			"What began in 1990 with a small school has expanded into a wider mission of education and social welfare.",
			"The organization provides affordable education, supports higher education, distributes food, installs hand pumps, arranges RO water, trains women, helps arrange marriages, assists patients and distributes winter relief.",
			"Behind every initiative is one belief: every human being deserves dignity, opportunity and hope.",
		],
	},
	{
		number: "10",
		label: "Challenges",
		title: "Determination Beyond Limited Resources",
		icon: "🌱",
		image: "/images/school 5.jpeg",
		text: [
			"Like many social welfare organizations, Masoom Educational & Welfare Society faces financial challenges that can limit expansion.",
			"The immediate focus remains maintaining R.S. Public School and continuing its educational mission. Support for higher education has had to be restricted due to limited resources.",
			"Financial challenges have never changed the organization's commitment. With the support of donors and well-wishers, it hopes to reach more people in need.",
		],
	},
	{
		number: "11",
		label: "The future",
		title: "Our Vision for a Better Tomorrow",
		icon: "🌅",
		image: "/images/school 5.jpeg",
		text: [
			"The dream is a society where no child is denied education by poverty, no family sleeps hungry and every person has clean drinking water.",
			"It is a future where women become financially independent, poor families receive support during important events and no patient is denied treatment because of money.",
			"The organization aims to strengthen R.S. Public School, support more higher-education students, empower women and expand social welfare activities.",
		],
	},
	{
		number: "12",
		label: "Join the mission",
		title: "Together, We Can Make a Difference",
		icon: "♥",
		image: "/images/together_community.jpg",
		text: [
			"The journey is not only the story of an organization. It is a continuing commitment to humanity, compassion and social responsibility.",
			"We invite individuals, donors, organizations and well-wishers to become part of this mission.",
			"Your support can educate more children, empower women, provide essential facilities and assist families facing difficult circumstances.",
		],
	},
];

export default function Page() {
	return (
		<>
			<Header />
			<section className="gallery-hero story-hero">
				<div className="container gallery-hero-inner story-hero-inner">
					<h1>Our Story</h1>
				</div>
			</section>

			<section className="story-narrative">
				<div className="container">
					<div className="story-intro">
						<div className="story-year">
							<span>Since</span>
							<strong>1990</strong>
						</div>
						<div className="story-intro-copy">
							<span className="chapter-label">Established in 1990</span>
							<h2>
								A journey that began with <em>one small room</em>
							</h2>
							<p>
								The story of Masoom Educational &amp; Welfare Society began with a simple belief:
								no child should be denied an education, and no human being should be left without
								dignity and care.
							</p>
						</div>
					</div>

					<div className="story-timeline">
						{storyCards.map((card, index) => (
							<article
								className={`story-chapter ${index % 2 === 1 ? "story-chapter-reverse" : ""}`}
								key={card.number}
							>
								<div className="chapter-image">
									<Image
										src={card.image}
										alt={card.title}
										fill
										sizes="(max-width: 800px) 100vw, 50vw"
									/>
									<span className="chapter-number">{card.number}</span>
								</div>
								<div className="chapter-copy">
									<span className="chapter-label">{card.label}</span>
									<h3>{card.title}</h3>
									{card.text.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</div>
							</article>
						))}
					</div>

					<article className="story-legacy">
						<div className="legacy-image">
							<Image
								src="/images/school 5.jpeg"
								alt="R.S. Public School today"
								fill
								sizes="(max-width: 800px) 100vw, 42vw"
							/>
						</div>
						<div className="legacy-copy">
							<span className="eyebrow">The journey continues</span>
							<h2>
								From a room in 1990 to a future full of possibility.
							</h2>
							<p>
								Today, R.S. Public School continues to represent the
								educational mission of Masoom Educational &amp; Welfare
								Society—providing education to children who need it the
								most.
							</p>
							<blockquote>
								“Every child deserves the chance to learn, grow and
								dream.”
							</blockquote>
							<Link
								className="story-gallery-link"
								href="/gallery"
							>
								Explore our school gallery{" "}
								<span>→</span>
							</Link>
						</div>
					</article>
				</div>
			</section>
			<Footer />
		</>
	);
}