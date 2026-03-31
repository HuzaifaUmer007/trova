import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'AI & Automation', href: '/solutions#ai' },
      { name: 'Smart Security', href: '/solutions#security' },
      { name: 'Infrastructure', href: '/solutions#infrastructure' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Why TROVA', href: '/why-trova' },
    ],
    contact: [
      { name: 'Website: www.trova.sa', href: 'https://www.trova.sa' },
      { name: 'Email: info@trova.sa', href: 'mailto:info@trova.sa' },
      { name: 'Phone: +966-XXXX-XXXX', href: 'tel:+966-XXXX-XXXX' },
      { name: 'Address: Kingdom of Saudi Arabia', href: '/contact' },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          {/* Main Content */}
          <div className={styles.footer__main}>
            {/* Brand Section */}
            <div className={styles.footer__brand}>
              <div className={styles.footer__logo}>
                <Image 
                  src="/images/logo.png" 
                  alt="TROVA Logo"
                  width={48}
                  height={48}
                  className={styles.footer__logoImage}
                />
              </div>
              <h3 className={styles.footer__brandName}>TROVA</h3>
              <p className={styles.footer__tagline}>FUTURE INTELLIGENCE</p>
              <p className={styles.footer__description}>
                Integrated artificial intelligence, smart security, and intelligent infrastructure 
                systems engineered for mission-critical operations.
              </p>
            </div>

            {/* Links Sections */}
            <div className={styles.footer__links}>
              {/* Solutions */}
              <div className={styles.footer__section}>
                <h4 className={styles.footer__sectionTitle}>Solutions</h4>
                <ul className={styles.footer__linkList}>
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className={styles.footer__link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className={styles.footer__section}>
                <h4 className={styles.footer__sectionTitle}>Company</h4>
                <ul className={styles.footer__linkList}>
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className={styles.footer__link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className={styles.footer__section}>
                <h4 className={styles.footer__sectionTitle}>Contact</h4>
                <ul className={styles.footer__linkList}>
                  {footerLinks.contact.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className={styles.footer__link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

         
        </div>

        {/* Bottom Bar */}
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottomContent}>
            <p className={styles.footer__copyright}>
              © {currentYear} TROVA. All rights reserved.
            </p>
            <div className={styles.footer__legal}>
              <a href="/privacy" className={styles.footer__legalLink}>
                Privacy Policy
              </a>
              <a href="/terms" className={styles.footer__legalLink}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
