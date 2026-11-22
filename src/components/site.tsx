"use client";

import Image from "next/image";
import Link from "next/link";

export const photos = {
  hero: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1600&q=85",
  community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
  children: "https://miro.medium.com/1%2AdLRgpjOeAnhxIGtxLKAK5g.jpeg",
  hands: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
  volunteersFood: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85",
  volunteersEdu: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
  volunteersHealth: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
  volunteersShelter: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=85",
  causeImages: [
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=85",
  ],
};

export function Header({ onDonate }: { onDonate?: () => void }) {
  const closeDetails = (e: React.MouseEvent) => {
    const details = e.currentTarget.closest("details");
    if (details) details.removeAttribute("open");
  };

  return (
    <>
      <div className="ref-topbar">
        <span className="ref-shield">✓</span>{" "}
        <span>Masoom Education &amp; Welfare Trust is preparing its community programs. Donations are not open yet.</span>
      </div>
      <nav className="ref-nav">
        <div className="ref-container ref-nav-inner">
          <Link className="ref-logo" href="/" aria-label="Masoom Education & Welfare Trust home">
            <Image
              src="/images/logo new.jpg"
              alt="Masoom Education & Welfare Trust"
              width={42}
              height={42}
              className="ref-logo-img"
              priority
            />
            <span className="ref-logo-text">
              <span className="ref-logo-main">Masoom Education</span>
              <span className="ref-logo-sub">&amp; Welfare Trust</span>
            </span>
          </Link>

          <div className="ref-nav-links">
            <Link href="/our-story">Our Story</Link>
            <Link href="/#initiatives">Initiatives</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/#impact">Impact Calculator</Link>
            {onDonate ? (
              <button type="button" className="ref-donate-button" onClick={onDonate}>
                Donate Now
              </button>
            ) : (
              <Link className="ref-donate-button" href="/donate">
                Donate Now
              </Link>
            )}
          </div>

          <details className="ref-mobile-nav">
            <summary className="ref-hamburger" aria-label="Toggle navigation menu">
              <span className="ref-hamburger-icon" />
            </summary>
            <div className="ref-mobile-menu">
              <Link href="/our-story" onClick={closeDetails}>
                Our Story
              </Link>
              <Link href="/#initiatives" onClick={closeDetails}>
                Initiatives
              </Link>
              <Link href="/gallery" onClick={closeDetails}>
                Gallery
              </Link>
              <Link href="/#impact" onClick={closeDetails}>
                Impact Calculator
              </Link>
              {onDonate ? (
                <button
                  type="button"
                  className="ref-mobile-menu-donate"
                  onClick={(e) => {
                    closeDetails(e);
                    onDonate();
                  }}
                >
                  Donate Now
                </button>
              ) : (
                <Link
                  className="ref-mobile-menu-donate"
                  href="/donate"
                  onClick={closeDetails}
                >
                  Donate Now
                </Link>
              )}
            </div>
          </details>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="ref-footer">
      <div className="ref-container ref-footer-inner">
        <div>
          <Link className="ref-footer-brand" href="/">
            <Image
              src="/images/logo new.jpg"
              alt="Logo"
              width={34}
              height={34}
              style={{ borderRadius: 6, marginRight: 10, objectFit: "cover" }}
            />
            <span>Masoom Education &amp; Welfare Trust</span>
          </Link>
          <p>Bihar, India</p>
        </div>
        <p className="ref-copyright">© {new Date().getFullYear()} Masoom Education &amp; Welfare Trust. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function Photo({ src, alt, className = "photo" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 60vw" className="photo-img" priority={className.includes("hero-photo")} />
    </div>
  );
}

export function PageHero({ label, title, copy, image = photos.community }: { label: string; title: string; copy: string; image?: string }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{label}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <Photo src={image} alt="Community members working together" className="hero-photo" />
      </div>
    </section>
  );
}

export function Callout({ title = "A kinder future takes all of us.", copy = "Share your time, your ideas, or simply start a conversation with our team." }: { title?: string; copy?: string }) {
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">Get to know us</span>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
          <Link className="button" href="/programs">Explore our work</Link>
          <Link className="button button-outline" href="/contact">Get in touch ↗</Link>
        </div>
      </div>
    </section>
  );
}

export function EmptyState({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="empty-state">
      <span className="empty-icon" aria-hidden="true">🌿</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function ContentPage({ label, title, copy, children, image }: { label: string; title: string; copy: string; children?: React.ReactNode; image?: string }) {
  return (
    <>
      <PageHero label={label} title={title} copy={copy} image={image} />
      {children}
      <Callout />
    </>
  );
}

