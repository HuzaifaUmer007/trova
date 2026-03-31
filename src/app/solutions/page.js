import React from 'react';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import { Brain, Eye, Bot, BarChart, Shield, Camera, Lock, Command, Wifi, Server, Building, Monitor } from 'lucide-react';
import styles from './page.module.css';

const SolutionsPage = () => {
  const aiSolutions = [
    {
      icon: Eye,
      title: 'AI Video Analytics',
      description: 'Transforming visual data into actionable operational intelligence through advanced computer vision and real-time analysis.',
      features: ['Real-time object detection', 'Behavioral analysis', 'Crowd density monitoring', 'Anomaly detection'],
      applications: ['Public spaces', 'Transportation hubs', 'Retail environments', 'Industrial facilities']
    },
    {
      icon: Bot,
      title: 'AI Agents & Automation',
      description: 'Intelligent agents automating workflows and interactions across systems for enhanced operational efficiency.',
      features: ['Process automation', 'Intelligent decision support', 'Predictive maintenance', 'Workflow optimization'],
      applications: ['Customer service', 'Operations management', 'System monitoring', 'Data processing']
    },
    {
      icon: BarChart,
      title: 'Operational Intelligence Platforms',
      description: 'Predictive dashboards and data-driven performance monitoring providing real-time insights for informed decision-making.',
      features: ['Real-time analytics', 'Predictive modeling', 'Performance metrics', 'Custom dashboards'],
      applications: ['Command centers', 'Management offices', 'Operations control', 'Strategic planning']
    }
  ];

  const securitySolutions = [
    {
      icon: Camera,
      title: 'Integrated Surveillance Systems',
      description: 'Comprehensive monitoring solutions combining multiple technologies for complete situational awareness.',
      features: ['Multi-camera integration', 'Advanced video analytics', 'Centralized monitoring', 'Alert management'],
      applications: ['Critical infrastructure', 'Public venues', 'Transportation', 'Commercial properties']
    },
    {
      icon: Lock,
      title: 'Access Control & Identity Management',
      description: 'Sophisticated access management systems ensuring secure entry and movement within facilities.',
      features: ['Biometric authentication', 'Multi-factor verification', 'Visitor management', 'Access analytics'],
      applications: ['Corporate offices', 'Government facilities', 'Educational institutions', 'Healthcare']
    },
    {
      icon: Command,
      title: 'Command & Control Centers',
      description: 'Centralized control rooms providing unified oversight and rapid response capabilities.',
      features: ['Integrated monitoring', 'Real-time communication', 'Emergency response', 'Resource coordination'],
      applications: ['Emergency services', 'Security operations', 'Event management', 'Transportation control']
    },
    {
      icon: Shield,
      title: 'Perimeter & Threat Detection Systems',
      description: 'Advanced perimeter security with intelligent threat detection and immediate response capabilities.',
      features: ['Intrusion detection', 'Threat assessment', 'Automated response', 'Perimeter analytics'],
      applications: ['Critical infrastructure', 'Border security', 'Industrial sites', 'Government facilities']
    }
  ];

  const infrastructureSolutions = [
    {
      icon: Wifi,
      title: 'Network & Connectivity Architecture',
      description: 'Robust network infrastructure ensuring seamless communication between systems and devices.',
      features: ['High-speed connectivity', 'Network redundancy', 'Secure communications', 'Scalable architecture'],
      applications: ['Smart cities', 'Industrial complexes', 'Transportation networks', 'Enterprise campuses']
    },
    {
      icon: Server,
      title: 'Data Center & Server Room Infrastructure',
      description: 'Mission-critical data infrastructure designed for maximum reliability and performance.',
      features: ['Redundant systems', 'Climate control', 'Power management', 'Security integration'],
      applications: ['Enterprise data centers', 'Cloud infrastructure', 'Edge computing', 'Backup facilities']
    },
    {
      icon: Building,
      title: 'Smart Home & Smart Building Systems',
      description: 'Intelligent building automation creating connected, efficient, and responsive environments.',
      features: ['Building automation', 'Energy management', 'Environmental control', 'Occupant services'],
      applications: ['Residential complexes', 'Commercial buildings', 'Hospitality venues', 'Mixed-use developments']
    },
    {
      icon: Monitor,
      title: 'Smart Office & Hospitality Technology',
      description: 'Advanced technology solutions enhancing productivity and experience in office and hospitality environments.',
      features: ['Workspace automation', 'Meeting room technology', 'Guest services', 'Experience enhancement'],
      applications: ['Corporate offices', 'Co-working spaces', 'Hotels', 'Conference centers']
    }
  ];

  return (
    <div className={styles.solutions}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles['section--hero']}`}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Solutions</h1>
            <p className={styles.hero__subtitle}>
              Comprehensive technology solutions engineered for mission-critical operations, 
      integrating artificial intelligence, smart security, and intelligent infrastructure.
            </p>
            <div className={styles.hero__icons}>
              <div className={styles.hero__icon}>
                <Brain size={48} />
                <span>AI & Automation</span>
              </div>
              <div className={styles.hero__icon}>
                <Shield size={48} />
                <span>Smart Security</span>
              </div>
              <div className={styles.hero__icon}>
                <Wifi size={48} />
                <span>Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation Section */}
      <section id="ai" className={`${styles.section} ${styles['section--ai']}`}>
        <div className="container">
          <div className={styles.section__header}>
            <h2 className="section-title">Artificial Intelligence & Automation</h2>
            <p className="section-subtitle">
              TROVA's AI solutions utilize advanced algorithms and real-time data processing 
              to deliver insights that were previously unattainable. These systems enable 
              organizations to monitor environments, detect patterns, and respond proactively 
              to operational changes.
            </p>
          </div>
          
          <div className={styles.solutions__grid}>
            {aiSolutions.map((solution, index) => (
              <Card key={index} variant="gradient" className={styles.solution__card}>
                <div className={styles.solution__icon}>
                  <solution.icon size={48} />
                </div>
                <h3 className={styles.solution__title}>{solution.title}</h3>
                <p className={styles.solution__description}>{solution.description}</p>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Key Features</h4>
                  <ul className={styles.solution__list}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Applications</h4>
                  <div className={styles.solution__tags}>
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className={styles.solution__tag}>{app}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Security Section */}
      <section id="security" className={`${styles.section} ${styles['section--security']}`}>
        <div className="container">
          <div className={styles.section__header}>
            <h2 className="section-title">Smart Security & Command Platforms</h2>
            <p className="section-subtitle">
              Our security platforms are designed to operate in complex, high-risk environments 
              where reliability and responsiveness are critical. By integrating surveillance, 
              access control, and command systems, TROVA provides centralized visibility 
              and control.
            </p>
          </div>
          
          <div className={styles.solutions__grid}>
            {securitySolutions.map((solution, index) => (
              <Card key={index} variant="elevated" className={styles.solution__card}>
                <div className={styles.solution__icon}>
                  <solution.icon size={48} />
                </div>
                <h3 className={styles.solution__title}>{solution.title}</h3>
                <p className={styles.solution__description}>{solution.description}</p>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Key Features</h4>
                  <ul className={styles.solution__list}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Applications</h4>
                  <div className={styles.solution__tags}>
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className={styles.solution__tag}>{app}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className={`${styles.section} ${styles['section--infrastructure']}`}>
        <div className="container">
          <div className={styles.section__header}>
            <h2 className="section-title">Technology Infrastructure & Smart Spaces</h2>
            <p className="section-subtitle">
              TROVA builds robust infrastructure that forms the backbone of intelligent systems. 
              Our solutions ensure high availability, secure data transmission, and scalable 
              performance across environments.
            </p>
          </div>
          
          <div className={styles.solutions__grid}>
            {infrastructureSolutions.map((solution, index) => (
              <Card key={index} variant="default" className={styles.solution__card}>
                <div className={styles.solution__icon}>
                  <solution.icon size={48} />
                </div>
                <h3 className={styles.solution__title}>{solution.title}</h3>
                <p className={styles.solution__description}>{solution.description}</p>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Key Features</h4>
                  <ul className={styles.solution__list}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.solution__section}>
                  <h4 className={styles.solution__subtitle}>Applications</h4>
                  <div className={styles.solution__tags}>
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className={styles.solution__tag}>{app}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles['section--cta']}`}>
        <div className="container">
          <div className={styles.cta__content}>
            <h2 className={styles.cta__title}>Ready to Transform Your Operations?</h2>
            <p className={styles.cta__subtitle}>
              Let's discuss how our integrated solutions can address your specific challenges 
              and drive measurable operational improvements.
            </p>
            <div className={styles.cta__actions}>
              <Button href="/contact" variant="primary" size="large">
                Get Started
              </Button>
              <Button href="/projects" variant="secondary" size="large">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
