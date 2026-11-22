"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
	{ src: "/images/School 1.jpeg", category: "Education", title: "R.S. Public School", note: "A small room in 1990" },
	{ src: "/images/school 2.jpeg", category: "Education", title: "Learning Together", note: "Affordable education for every child" },
	{ src: "/images/school 3.jpeg", category: "Education", title: "Our Growing Campus", note: "Strengthening facilities and opportunities" },
	{ src: "/images/school 4.jpeg", category: "Education", title: "The School Building", note: "From one room to three storeys" },
	{ src: "/images/school 5.jpeg", category: "Education", title: "The Journey Continues", note: "Education with dignity and purpose" },
	{ src: "/images/handpump_water.jpg", category: "Clean Water", title: "Clean Drinking Water", note: "Safe water for underserved communities" },
	{ src: "/images/pump 1.jpeg", category: "Clean Water", title: "Hand Pump Initiative", note: "Community water access" },
	{ src: "/images/pump 2.jpeg", category: "Clean Water", title: "Water for Everyone", note: "Hand pump project" },
	{ src: "/images/pump 3.jpeg", category: "Clean Water", title: "Serving the Community", note: "Safe and nearby drinking water" },
	{ src: "/images/pump 4.jpeg", category: "Clean Water", title: "Field Installation", note: "One more accessible water point" },
	{ src: "/images/pump 5.jpeg", category: "Clean Water", title: "Village Support", note: "Clean water initiative" },
	{ src: "/images/pump 6.jpeg", category: "Clean Water", title: "Community Wellbeing", note: "Hand pump service" },
	{ src: "/images/pump 7.jpeg", category: "Clean Water", title: "Drinking Water Project", note: "A basic need within reach" },
	{ src: "/images/kambal 1.jpeg", category: "Winter Relief", title: "Winter Relief", note: "Blanket distribution drive" },
	{ src: "/images/kambal 2.jpeg", category: "Winter Relief", title: "Warmth for Families", note: "Annual blanket distribution" },
	{ src: "/images/kambal 4.jpeg", category: "Winter Relief", title: "Serving in Winter", note: "Support for needy people" },
	{ src: "/images/kambal 5.jpeg", category: "Winter Relief", title: "Blankets and Care", note: "Standing beside vulnerable families" },
	{ src: "/images/kambal 6.jpeg", category: "Winter Relief", title: "Winter Clothing", note: "Blankets and sweaters for the cold" },
	{ src: "/images/kambal 7.jpeg", category: "Winter Relief", title: "Warmth and Humanity", note: "Annual winter outreach" },
	{ src: "/images/kambal 8.jpeg", category: "Winter Relief", title: "Protection from Cold", note: "Relief for underprivileged communities" },
	{ src: "/images/kanya_vivah.jpg", category: "Family Support", title: "Supporting a Daughter's Marriage", note: "Helping families with dignity" },
	{ src: "/images/bihar_flood_hero.jpg", category: "Humanity", title: "Compassion in Difficult Times", note: "Standing with families in need" },
];

export default function GalleryClient() {
	const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
	const [zoom, setZoom] = useState(1);

	useEffect(() => {
		if (!activeImage) {
			document.body.style.overflow = "";
			return;
		}
		document.body.style.overflow = "hidden";
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActiveImage(null);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [activeImage]);

	const openImage = (image: (typeof galleryImages)[number]) => {
		setZoom(1);
		setActiveImage(image);
	};

	return (
		<>
			<div className="gallery-grid">
				{galleryImages.map((image, index) => (
					<button type="button" className="gallery-card" key={image.src} onClick={(event) => { event.preventDefault(); openImage(image); }} aria-label={`Open large view: ${image.title}`}>
						<Image src={image.src} alt={image.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
						<div className="gallery-overlay">
							<span>{String(index + 1).padStart(2, "0")}</span>
							<div><small>{image.category}</small><h3>{image.title}</h3><p>{image.note}</p></div>
						</div>
					</button>
				))}
			</div>

			{activeImage && (
				<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
					<div className="gallery-lightbox-toolbar">
						<button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out">−</button>
						<span>{Math.round(zoom * 100)}%</span>
						<button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} aria-label="Zoom in">+</button>
						<button type="button" className="gallery-lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image">×</button>
					</div>
					<div className="gallery-lightbox-scroll">
						<Image className="gallery-lightbox-image" src={activeImage.src} alt={activeImage.title} fill sizes="100vw" style={{ transform: `scale(${zoom})` }} />
					</div>
				</div>
			)}
		</>
	);
}
