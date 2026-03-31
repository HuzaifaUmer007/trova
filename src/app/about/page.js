import React from 'react';
import Card from '../../components/ui/Card/Card';
import { Search, Lightbulb, Cog, Rocket, Wrench, TrendingUp } from 'lucide-react';
import styles from './page.module.css';

const AboutPage = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Consult & Assess',
      description: 'We conduct in-depth assessments of existing systems, operational workflows, and infrastructure to identify inefficiencies and opportunities for improvement.',
      details: 'Comprehensive analysis of current technology landscape and operational requirements.'
    },
    {
      icon: Lightbulb,
      title: 'Architect & Design',
      description: 'Solutions are carefully designed to ensure scalability, performance, and alignment with long-term business objectives.',
      details: 'Custom architecture planning with future growth and integration in mind.'
    },
    {
      icon: Cog,
      title: 'Engineer & Integrate',
      description: 'We build and integrate systems using industry best practices, ensuring seamless interoperability between technologies.',
      details: 'End-to-end system development with rigorous testing and validation.'
    },
    {
      icon: Rocket,
      title: 'Deploy & Commission',
      description: 'Deployment is executed with precision, followed by rigorous testing to ensure system reliability and performance.',
      details: 'Phased deployment approach with minimal operational disruption.'
    },
    {
      icon: Wrench,
      title: 'Support & Optimize',
      description: 'Continuous monitoring, maintenance, and optimization ensure systems remain efficient, secure, and up-to-date.',
      details: 'Ongoing support with performance monitoring and system enhancements.'
    }
  ];

  const capabilities = [
    'AI system design and deployment',
    'Large-scale security system integration',
    'Command and control center development',
    'Smart infrastructure engineering',
    'End-to-end technology lifecycle management'
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles['section--hero']}`}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>About TROVA</h1>
            <p className={styles.hero__subtitle}>
              TROVA delivers integrated AI, security, and infrastructure solutions 
              engineered for high-demand and mission-critical environments. We design 
              unified technology ecosystems where systems, data, and operations work 
              seamlessly together.
            </p>
            <p className={styles.hero__mission}>
              Our mission is to transform complex operational challenges into 
              intelligent, scalable, and future-ready performance environments.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className={`${styles.section} ${styles['section--background']}`}>
        <div className="container">
          <div className={styles.background__content}>
            <h2 className="section-title">Our Story</h2>
            <div className={styles.background__text}>
              <p className={styles.background__description}>
                TROVA was established with the vision of redefining how organizations 
                interact with technology. Instead of deploying isolated systems, we 
                focus on creating unified ecosystems where all components work together 
                cohesively.
              </p>
              <p className={styles.background__extended}>
                Our team brings together expertise in artificial intelligence, system 
                integration, cybersecurity, and infrastructure engineering—allowing us 
                to deliver comprehensive solutions tailored to complex operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className={`${styles.section} ${styles['section--process']}`}>
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className={styles.process__timeline}>
            {processSteps.map((step, index) => (
              <Card key={index} variant="elevated" className={styles.process__card}>
                <div className={styles.process__icon}>
                  <step.icon size={48} />
                </div>
                <div className={styles.process__content}>
                  <h3 className={styles.process__title}>{step.title}</h3>
                  <p className={styles.process__description}>{step.description}</p>
                  <p className={styles.process__details}>{step.details}</p>
                </div>
                <div className={styles.process__number}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className={`${styles.section} ${styles['section--capabilities']}`}>
        <div className="container">
          <h2 className="section-title">Core Capabilities</h2>
          <div className={styles.capabilities__grid}>
            {capabilities.map((capability, index) => (
              <Card key={index} variant="gradient" className={styles.capability__card}>
                <div className={styles.capability__number}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className={styles.capability__text}>{capability}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${styles.section} ${styles['section--values']}`}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className={styles.values__grid}>
            <Card variant="default" className={styles.value__card}>
              <div className={styles.value__icon}>
                <TrendingUp size={32} />
              </div>
              <h3 className={styles.value__title}>Innovation</h3>
              <p className={styles.value__description}>
                We push the boundaries of what's possible with AI and integrated systems.
              </p>
            </Card>
            
            <Card variant="default" className={styles.value__card}>
              <div className={styles.value__icon}>
                <Search size={32} />
              </div>
              <h3 className={styles.value__title}>Excellence</h3>
              <p className={styles.value__description}>
                We deliver exceptional quality and performance in every solution we create.
              </p>
            </Card>
            
            <Card variant="default" className={styles.value__card}>
              <div className={styles.value__icon}>
                <Lightbulb size={32} />
              </div>
              <h3 className={styles.value__title}>Integrity</h3>
              <p className={styles.value__description}>
                We build trust through transparent processes and reliable deliverables.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
