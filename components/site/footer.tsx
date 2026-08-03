import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer dark">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/logo/CCW-logo-white.png" alt="Central Civil Works" width={128} height={32} style={{ height: 32, width: "auto" }} />
          <p>
            100% Namibian-owned civil engineering, construction and fibre-optic contractor, serving clients from
            Swakopmund and Windhoek since 2016.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Civil Works</Link></li>
            <li><Link href="/services">Construction</Link></li>
            <li><Link href="/services">Fibre-Optic Networks</Link></li>
            <li><Link href="/services">Network As A Whole</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><span>Swakopmund (HQ): Unit 5 Coastal Courtyard</span></li>
            <li><span>Windhoek (Branch): Address to be confirmed</span></li>
            <li><span>+264 81 645 1909</span></li>
            <li><span>Info@ccw.com.na</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Central Civil Works (Pty) Ltd. Reg No. 20231281.</span>
        <span>Built with integrity, safety &amp; accountability.</span>
      </div>
    </footer>
  );
}
