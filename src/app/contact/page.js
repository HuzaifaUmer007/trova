'use client';

import React, { useState } from 'react';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import { Mail, Phone, Globe, MapPin, Send, Clock, Users, Handshake } from 'lucide-react';
import styles from './page.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Globe,
      title: 'Website',
      value: 'www.trova.sa',
      href: 'https://www.trova.sa'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@trova.sa',
      href: 'mailto:info@trova.sa'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+966-XXXX-XXXX',
      href: 'tel:+966-XXXX-XXXX'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kingdom of Saudi Arabia',
      href: null
    }
  ];

  const services = [
    {
      icon: Users,
      title: 'General Inquiries',
      description: 'Information about our services and solutions'
    },
    {
      icon: Clock,
      title: 'Project Consultations',
      description: 'Technical discussions and project planning'
    },
    {
      icon: Handshake,
      title: 'Partnership Opportunities',
      description: 'Collaboration and partnership discussions'
    }
  ];

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles['section--hero']}`}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Contact Us</h1>
            <p className={styles.hero__subtitle}>
              Whether you are planning a new deployment or upgrading existing systems, 
              TROVA provides the expertise and technology required to deliver results.
            </p>
            <p className={styles.hero__description}>
              Our team is available to support consultations, technical discussions, 
              and project planning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className={`${styles.section} ${styles['section--info']}`}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className={styles.contact__grid}>
            {contactInfo.map((info, index) => (
              <Card key={index} variant="elevated" className={styles.contact__card}>
                <div className={styles.contact__icon}>
                  <info.icon size={32} />
                </div>
                <h3 className={styles.contact__title}>{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className={styles.contact__value}>
                    {info.value}
                  </a>
                ) : (
                  <div className={styles.contact__value}>{info.value}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`${styles.section} ${styles['section--form']}`}>
        <div className="container">
          <div className={styles.form__content}>
            <div className={styles.form__info}>
              <h2 className={styles.form__title}>Let's Discuss Your Project</h2>
              <p className={styles.form__subtitle}>
                Tell us about your requirements and we'll get back to you with 
                a tailored solution approach.
              </p>
              
              <div className={styles.services__list}>
                <h3 className={styles.services__title}>How We Can Help</h3>
                {services.map((service, index) => (
                  <div key={index} className={styles.service__item}>
                    <div className={styles.service__icon}>
                      <service.icon size={20} />
                    </div>
                    <div className={styles.service__content}>
                      <h4 className={styles.service__title}>{service.title}</h4>
                      <p className={styles.service__description}>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.form__wrapper}>
              <Card variant="gradient" className={styles.form__card}>
                <h3 className={styles.form__cardTitle}>Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className={styles.success__message}>
                    <Send size={20} />
                    <span>Thank you for your message. We'll get back to you soon!</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className={styles.contact__form}>
                  <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className={styles.form__group}>
                    <label htmlFor="email" className={styles.form__label}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className={styles.form__group}>
                    <label htmlFor="message" className={styles.form__label}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.form__textarea}
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large"
                    disabled={isSubmitting}
                    className={styles.form__button}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`${styles.section} ${styles['section--map']}`}>
        <div className="container">
          <div className={styles.map__content}>
            <h2 className="section-title">Our Location</h2>
            <Card variant="default" className={styles.map__card}>
              <div className={styles.map__placeholder}>
                <MapPin size={48} />
                <h3>Kingdom of Saudi Arabia</h3>
                <p>Serving clients across the Kingdom with comprehensive technology solutions</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className={`${styles.section} ${styles['section--response']}`}>
        <div className="container">
          <div className={styles.response__content}>
            <h2 className="section-title">Response Times</h2>
            <div className={styles.response__grid}>
              <Card variant="elevated" className={styles.response__card}>
                <div className={styles.response__header}>
                  <Mail size={24} />
                  <h3>Email Inquiries</h3>
                </div>
                <p className={styles.response__time}>Within 24 hours</p>
                <p className={styles.response__description}>We respond to all email inquiries within one business day.</p>
              </Card>
              
              <Card variant="elevated" className={styles.response__card}>
                <div className={styles.response__header}>
                  <Phone size={24} />
                  <h3>Phone Support</h3>
                </div>
                <p className={styles.response__time}>Business Hours</p>
                <p className={styles.response__description}>Sunday - Thursday, 9:00 AM - 6:00 PM KSA.</p>
              </Card>
              
              <Card variant="elevated" className={styles.response__card}>
                <div className={styles.response__header}>
                  <Users size={24} />
                  <h3>Project Consultations</h3>
                </div>
                <p className={styles.response__time}>Within 48 hours</p>
                <p className={styles.response__description}>Technical consultations scheduled within two business days.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
