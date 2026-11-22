"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer, Header } from "@/components/site";

const galleryImages = [
	{ src: "/images/School 1.jpeg?v=20261122", category: "Education", title: "R.S. Public School", note: "A small room in 1990" },
	{ src: "/images/school 2.jpeg?v=20261122", category: "Education", title: "Learning Together", note: "Affordable education for every child" },
	{ src: "/images/school 3.jpeg?v=20261122", category: "Education", title: "Our Growing Campus", note: "Strengthening facilities and opportunities" },
	{ src: "/images/school 4.jpeg?v=20261122", category: "Education", title: "The School Building", note: "From one room to three storeys" },
	{ src: "/images/school 5.jpeg?v=20261122", category: "Education", title: "The Journey Continues", note: "Education with dignity and purpose" },
	{ src: "/images/school 6.jpg?v=20261122", category: "Education", title: "School Activities", note: "Learning beyond the classroom" },
	{ src: "/images/school 7.jpg?v=20261122", category: "Education", title: "Children at R.S. Public School", note: "Nurturing young minds" },
	{ src: "/images/school 8.jpg?v=20261122", category: "Education", title: "Our School Community", note: "Education, care and opportunity" },
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

export default function GalleryPage() {
	const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
	const [zoom, setZoom] = useState(1);

	useEffect(() => {
		if (!activeImage) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActiveImage(null);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [activeImage]);

	const openImage = (image: (typeof galleryImages)[number]) => {
		setZoom(1);
		setActiveImage(image);
	};

	return (
		<>
			<Header />
			<main>
				<section className="gallery-hero">
					<div className="container gallery-hero-inner">
						<h1>Our Journey in Images</h1>
					</div>
				</section>

				<section className="gallery-section">
					<div className="container">
						<div className="gallery-grid">
							{galleryImages.map((image, index) => (
								<button type="button" className="gallery-card" key={image.src} onClick={() => openImage(image)} aria-label={`View larger image: ${image.title}`}>
									<img src={image.src} alt={image.title} loading="lazy" className="gallery-card-img" />
									<div className="gallery-overlay">
										<span>{String(index + 1).padStart(2, "0")}</span>
										<div><small>{image.category}</small><h3>{image.title}</h3><p>{image.note}</p></div>
									</div>
								</button>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />

			{activeImage && (
				<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
					<div className="gallery-lightbox-toolbar">
						<button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out">−</button>
						<span>{Math.round(zoom * 100)}%</span>
						<button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} aria-label="Zoom in">+</button>
						<button className="gallery-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close image">×</button>
					</div>
					<div className="gallery-lightbox-scroll"><Image className="gallery-lightbox-image" src={activeImage.src} alt={activeImage.title} fill sizes="100vw" style={{ transform: `scale(${zoom})` }} /></div>
				</div>
			)}
			<style jsx global>{`
				.gallery-hero{height:54px!important;min-height:54px!important;margin:0!important;padding:0!important;background:#020617!important;border:0!important}
				.gallery-hero-inner{height:54px!important;min-height:54px!important;margin:0 auto!important;padding:0!important;display:flex!important;align-items:center!important;justify-content:center!important}
				.gallery-hero h1{margin:0!important;padding:0!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important;font-size:24px!important;font-weight:800!important;line-height:54px!important;letter-spacing:-.35px!important;text-align:center!important}
				.gallery-section{margin:0!important;padding:22px 0 64px!important;background:#f8fafc!important}
				.gallery-section>.container{width:min(100% - 32px,1200px)!important;margin-inline:auto!important}
				.gallery-grid{columns:3!important;column-gap:16px!important;width:100%!important;margin:0!important}
				.gallery-card{break-inside:avoid!important;position:relative!important;display:block!important;width:100%!important;height:auto!important;min-height:unset!important;margin:0 0 16px 0!important;padding:0!important;overflow:hidden!important;border:1px solid #e2e8f0!important;border-radius:12px!important;background:#f1f5f9!important;text-align:left!important;cursor:zoom-in!important;box-shadow:0 4px 14px #0206170d!important}
				.gallery-card-img{display:block!important;width:100%!important;height:auto!important;max-width:100%!important;object-fit:cover!important;object-position:center!important;transition:transform .35s ease!important}
				.gallery-card:hover .gallery-card-img{transform:scale(1.025)!important}
				.gallery-overlay{position:absolute!important;inset:auto 0 0!important;z-index:2!important;min-height:76px!important;padding:12px 14px!important;display:flex!important;align-items:flex-end!important;gap:10px!important;background:linear-gradient(180deg,transparent 0%,#020617e6 100%)!important;color:#fff!important}
				.gallery-overlay>span{color:#fff!important;font-size:11px!important;font-weight:800!important}.gallery-overlay small{display:block!important;color:#cbd5e1!important;font-size:10px!important;font-weight:800!important;text-transform:uppercase!important}.gallery-overlay h3{margin:2px 0 0!important;color:#fff!important;font-size:16px!important;line-height:1.2!important}.gallery-overlay p{margin:2px 0 0!important;color:#e2e8f0!important;font-size:12px!important;line-height:1.35!important}
				.gallery-lightbox{position:fixed!important;inset:0!important;z-index:100!important;display:flex!important;flex-direction:column!important;background:#020617f2!important;backdrop-filter:blur(8px)!important}
				.gallery-lightbox-toolbar{height:64px!important;min-height:64px!important;padding:0 18px!important;display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:10px!important;background:#020617!important;color:#fff!important}
				.gallery-lightbox-toolbar button{width:42px!important;height:42px!important;padding:0!important;display:grid!important;place-items:center!important;border:1px solid #334155!important;border-radius:50%!important;background:#0f172a!important;color:#fff!important;font-size:22px!important}.gallery-lightbox-toolbar span{min-width:58px!important;text-align:center!important;font-size:14px!important;font-weight:700!important}.gallery-lightbox-toolbar .gallery-lightbox-close{font-size:28px!important}
				.gallery-lightbox-scroll{position:relative!important;flex:1!important;overflow:auto!important}.gallery-lightbox-image{object-fit:contain!important;transform-origin:center!important;transition:transform .18s ease!important}
				@media(max-width:900px){.gallery-grid{columns:2!important;column-gap:14px!important}.gallery-card{margin-bottom:14px!important}}
				@media(max-width:560px){.gallery-hero{height:46px!important;min-height:46px!important}.gallery-hero-inner{height:46px!important;min-height:46px!important}.gallery-hero h1{font-size:20px!important;line-height:46px!important}.gallery-section{padding:10px 0 36px!important}.gallery-grid{columns:1!important;column-gap:0!important}.gallery-card{margin-bottom:12px!important}.gallery-lightbox-toolbar{height:56px!important;min-height:56px!important}}
			`}</style>
		</>
	);
}
