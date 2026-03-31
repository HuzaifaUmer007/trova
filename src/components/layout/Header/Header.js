'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from '../../ui/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Why TROVA', href: '/why-trova' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/" className={styles.logo__link}>
              <div className={styles.logo__symbol}>
                <Image 
                  src="/images/logo.png" 
                  alt="TROVA Logo"
                  width={40}
                  height={40}
                  className={styles.logo__image}
                />
              </div>
              <span className={styles.logo__text}>TROVA</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.nav__menu}>
            {navigation.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={styles.nav__link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className={styles.nav__cta}>
            <Button href="/contact" variant="primary" size="small">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobile__toggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`${styles.mobile__menu} ${isMobileMenuOpen ? styles['mobile__menu--open'] : ''}`}>
          <ul className={styles.mobile__nav}>
            {navigation.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={styles.mobile__link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobile__cta}>
            <Button href="/contact" variant="primary" size="medium">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
