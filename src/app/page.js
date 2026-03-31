import React from 'react';
import Hero from '../components/sections/Hero/Hero';
import Card from '../components/ui/Card/Card';
import Button from '../components/ui/Button/Button';
import { Brain, Shield, Network, Users, Cpu, Globe, Award, TrendingUp } from 'lucide-react';
import styles from './page.module.scss';

const HomePage = () => {
  const coreSolutions = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Automation',
      description: 'AI Video Analytics, AI Agents & Automation, Operational Intelligence Platforms',
      features: ['Computer Vision', 'Predictive Analytics', 'Workflow Automation']
    },
    {
      icon: Shield,
      title: 'Smart Security & Command Platforms',
      description: 'Integrated Surveillance, Access Control, Command Centers, Perimeter Detection',
      features: ['Real-time Monitoring', 'Centralized Control', 'Threat Detection']
    }, 
    {
      icon: Network,
      title: 'Technology Infrastructure & Smart Spaces',
      description: 'Network Architecture, Data Centers, Smart Buildings, Office Technology',
      features: ['Scalable Networks', 'Smart Integration', 'Future-ready Systems']
    }
  ];

  const stats = [
    { number: '40M+', label: 'People & Events Analyzed Using AI', icon: Users },
    { number: '50+', label: 'AI Solutions & Automation Systems Delivered', icon: Cpu },
    { number: '30+', label: 'Projects Implemented', icon: Globe },
    { number: '300+', label: 'Facilities & Environments Covered', icon: Shield },
    { number: '15+', label: 'Years of Combined Experience', icon: Award }
  ];

  const valueProps = [
    {
      title: 'Improve Decision-Making',
      description: 'Real-time data insights enable faster, more informed operational decisions.',
      icon: TrendingUp
    },
    {
      title: 'Enhance Safety & Security',
      description: 'Comprehensive monitoring and response systems protect people and assets.',
      icon: Shield
    },
    {
      title: 'Automate Complex Workflows',
      description: 'Reduce manual processes and operational overhead through intelligent automation.',
      icon: Brain
    },
    {
      title: 'Scale Systems Efficiently',
      description: 'Future-ready infrastructure grows with organizational needs and demands.',
      icon: Network
    }
  ];

  return (
    <div className={styles.home}>
      <Hero />
      
      {/* About Section */}
      <section className={`${styles.section} ${styles['section--about']}`}>
        <div className="container">
          <div className={styles.about__content}>
            <h2 className="section-title">About TROVA</h2>
            <div className={styles.about__text}>
              <p className={styles.about__description}>
                TROVA is a Saudi technology company specializing in artificial intelligence, 
                smart security, and intelligent infrastructure systems. We architect and integrate 
                connected ecosystems that enhance operational visibility, automate workflows, 
                strengthen security, and support scalable growth.
              </p>
              <p className={styles.about__extended}>
                With a strong focus on innovation and performance, TROVA combines deep technical 
                expertise with practical implementation strategies. Our approach ensures that every 
                solution is aligned with operational goals, delivering measurable results in 
                efficiency, safety, and system intelligence.
              </p>
              <p className={styles.about__industries}>
                We work across multiple industries including government, large-scale events, 
                education, and enterprise environments—delivering systems that are reliable, 
                scalable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className={`${styles.section} ${styles['section--solutions']}`}>
        <div className="container">
          <h2 className="section-title">Core Solution Domains</h2>
          <div className={styles.solutions__grid}>
            {coreSolutions.map((solution, index) => (
              <Card key={index} variant="gradient" hover className={styles.solution__card}>
                <div className={styles.solution__icon}>
                  <solution.icon size={48} />
                </div>
                <h3 className={styles.solution__title}>{solution.title}</h3>
                <p className={styles.solution__description}>{solution.description}</p>
                <ul className={styles.solution__features}>
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.section} ${styles['section--stats']}`}>
        <div className="container">
          <h2 className="section-title">By The Numbers</h2>
          <div className={styles.stats__grid}>
            {stats.map((stat, index) => (
              <Card key={index} variant="elevated" className={styles.stat__card}>
                <div className={styles.stat__icon}>
                  <stat.icon size={32} />
                </div>
                <div className={styles.stat__number}>{stat.number}</div>
                <div className={styles.stat__label}>{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={`${styles.section} ${styles['section--value']}`}>
        <div className="container">
          <h2 className="section-title">Driving Intelligent Operations</h2>
          <p className="section-subtitle" style={{marginBottom:'20px'}}>
            TROVA focuses on delivering technology that creates real operational impact. 
            By combining AI, security, and infrastructure, we enable organizations to:
          </p>
          <div className={styles.value__grid}>
            {valueProps.map((prop, index) => (
              <Card key={index} variant="default" hover className={styles.value__card}>
                <div className={styles.value__icon}>
                  <prop.icon size={32} />
                </div>
                <h3 className={styles.value__title}>{prop.title}</h3>
                <p className={styles.value__description}>{prop.description}</p>
              </Card>
            ))}
          </div>
          <div className={styles.value__cta}>
            <Button href="/solutions" variant="primary" size="large">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
