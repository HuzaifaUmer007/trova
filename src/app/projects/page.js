'use client';

import React from 'react';
import Card from '../../components/ui/Card/Card';
import { Users, MapPin, Award, TrendingUp, Calendar, Target } from 'lucide-react';
import styles from './page.module.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Ministry of Hajj & Umrah',
      organization: 'Government Sector',
      description: 'AI-driven crowd intelligence supporting over 1.6M+ individuals through real-time density analytics and centralized monitoring dashboards.',
      impact: 'Enhanced situational awareness and proactive crowd management across high-volume environments.',
      metrics: [
        { value: '1.6M+', label: 'People Supported' },
        { value: 'Real-time', label: 'Analytics' },
        { value: 'Centralized', label: 'Monitoring' }
      ],
      technologies: ['AI Analytics', 'Computer Vision', 'Real-time Processing', 'Dashboard Systems'],
      category: 'Government',
      year: '2023'
    },
    {
      title: 'FIFA Club World Cup',
      organization: 'International Sports',
      description: 'Delivered integrated security, accreditation, and communication systems across multiple international stadium venues.',
      impact: 'Centralized oversight and secure access management for event-scale operations.',
      metrics: [
        { value: 'Multiple', label: 'Stadiums' },
        { value: 'Integrated', label: 'Security' },
        { value: 'Event-scale', label: 'Operations' }
      ],
      technologies: ['Security Systems', 'Access Control', 'Communications', 'Event Management'],
      category: 'Sports',
      year: '2023'
    },
    {
      title: 'Saudi Games',
      organization: 'National Sports Event',
      description: 'Implemented surveillance and accreditation systems across 16+ venues, managing 20,000+ credentials.',
      impact: 'Standardized multi-venue security architecture and improved operational coordination.',
      metrics: [
        { value: '16+', label: 'Venues' },
        { value: '20K+', label: 'Credentials' },
        { value: 'Standardized', label: 'Architecture' }
      ],
      technologies: ['Surveillance Systems', 'Accreditation', 'Multi-venue Management', 'Security Integration'],
      category: 'Sports',
      year: '2023'
    },
    {
      title: 'Longines Global Championship Tour',
      organization: 'International Equestrian',
      description: 'Deployed complete event technology ecosystem including surveillance, connectivity, and digital accreditation systems.',
      impact: 'Unified operational monitoring and secure infrastructure for international event delivery.',
      metrics: [
        { value: 'Complete', label: 'Ecosystem' },
        { value: 'Unified', label: 'Monitoring' },
        { value: 'International', label: 'Event' }
      ],
      technologies: ['Event Technology', 'Surveillance', 'Connectivity', 'Digital Systems'],
      category: 'Sports',
      year: '2022'
    },
    {
      title: 'Dar Al-Hekma University',
      organization: 'Education Sector',
      description: 'Delivered smart campus surveillance and centralized monitoring platform with AI-ready infrastructure foundation.',
      impact: 'Strengthened campus-wide security oversight and operational control.',
      metrics: [
        { value: 'Smart', label: 'Campus' },
        { value: 'Centralized', label: 'Monitoring' },
        { value: 'AI-ready', label: 'Infrastructure' }
      ],
      technologies: ['Smart Surveillance', 'Campus Security', 'AI Infrastructure', 'Monitoring Platform'],
      category: 'Education',
      year: '2022'
    }
  ];

  const categories = ['All', 'Government', 'Sports', 'Education'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles['section--hero']}`}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Projects</h1>
            <p className={styles.hero__subtitle}>
              TROVA's project portfolio demonstrates consistent delivery across diverse environments, 
              including government sectors, international events, and educational institutions.
            </p>
            <p className={styles.hero__description}>
              Each project reflects a tailored approach, ensuring that solutions meet specific 
              operational requirements while maintaining scalability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`${styles.section} ${styles['section--filter']}`}>
        <div className="container">
          <div className={styles.filter__content}>
            <h2 className={styles.filter__title}>Project Portfolio</h2>
            <div className={styles.filter__categories}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filter__button} ${activeCategory === category ? styles['filter__button--active'] : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`${styles.section} ${styles['section--projects']}`}>
        <div className="container">
          <div className={styles.projects__grid}>
            {filteredProjects.map((project, index) => (
              <Card key={index} variant="elevated" className={styles.project__card}>
                {/* Project Header */}
                <div className={styles.project__header}>
                  <div className={styles.project__meta}>
                    <span className={styles.project__category}>{project.category}</span>
                    <span className={styles.project__year}>{project.year}</span>
                  </div>
                  <h3 className={styles.project__title}>{project.title}</h3>
                  <p className={styles.project__organization}>{project.organization}</p>
                </div>

                {/* Project Description */}
                <div className={styles.project__content}>
                  <p className={styles.project__description}>{project.description}</p>
                  
                  {/* Impact */}
                  <div className={styles.project__impact}>
                    <h4 className={styles.project__impactTitle}>Impact</h4>
                    <p className={styles.project__impactText}>{project.impact}</p>
                  </div>

                  {/* Metrics */}
                  <div className={styles.project__metrics}>
                    <h4 className={styles.project__metricsTitle}>Key Metrics</h4>
                    <div className={styles.metrics__grid}>
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className={styles.metric}>
                          <div className={styles.metric__value}>{metric.value}</div>
                          <div className={styles.metric__label}>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className={styles.project__technologies}>
                    <h4 className={styles.project__technologiesTitle}>Technologies</h4>
                    <div className={styles.technologies__list}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.technology__tag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.section} ${styles['section--stats']}`}>
        <div className="container">
          <div className={styles.stats__content}>
            <h2 className="section-title">Project Impact</h2>
            <div className={styles.stats__grid}>
              <div className={styles.stat__card}>
                <div className={styles.stat__icon}>
                  <Users size={32} />
                </div>
                <div className={styles.stat__number}>1.6M+</div>
                <div className={styles.stat__label}>People Managed</div>
              </div>
              
              <div className={styles.stat__card}>
                <div className={styles.stat__icon}>
                  <MapPin size={32} />
                </div>
                <div className={styles.stat__number}>30+</div>
                <div className={styles.stat__label}>Projects Delivered</div>
              </div>
              
              <div className={styles.stat__card}>
                <div className={styles.stat__icon}>
                  <Award size={32} />
                </div>
                <div className={styles.stat__number}>100%</div>
                <div className={styles.stat__label}>Success Rate</div>
              </div>
              
              <div className={styles.stat__card}>
                <div className={styles.stat__icon}>
                  <TrendingUp size={32} />
                </div>
                <div className={styles.stat__number}>300+</div>
                <div className={styles.stat__label}>Facilities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles['section--cta']}`}>
        <div className="container">
          <div className={styles.cta__content}>
            <h2 className={styles.cta__title}>Ready to Start Your Project?</h2>
            <p className={styles.cta__subtitle}>
              Let's discuss how we can deliver exceptional results for your organization 
              with our proven approach and cutting-edge technology solutions.
            </p>
            <div className={styles.cta__actions}>
              <button className={styles.cta__button}>Contact Us</button>
              <button className={`${styles.cta__button} ${styles['cta__button--secondary']}`}>Why TROVA</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
