import React from 'react';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import { CheckCircle, Award, TrendingUp, Shield, Users, Globe, Target, Zap } from 'lucide-react';
import styles from './page.module.css';

const WhyTrovaPage = () => {
  const differentiators = [
    {
      icon: Globe,
      title: 'Strong Local Understanding',
      description: 'Deep knowledge of regional requirements combined with global technology standards.',
      details: 'We understand the unique challenges and opportunities in the Saudi market while implementing world-class technology solutions.'
    },
    {
      icon: Target,
      title: 'Integrated Ecosystems',
      description: 'Not fragmented deployments, but fully unified systems that work together seamlessly.',
      details: 'Our approach ensures all components communicate effectively, creating a cohesive technology environment.'
    },
    {
      icon: Award,
      title: 'Proven Delivery Record',
      description: 'Consistent success across large-scale and mission-critical environments.',
      details: 'Track record of delivering complex projects on time and to specification, with measurable results.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Operational Value',
      description: 'Focused on delivering tangible business outcomes and long-term partnership.',
      details: 'Every solution is designed to provide clear ROI and operational improvements that can be measured and tracked.'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'End-to-End Solution Delivery',
      description: 'Complete project lifecycle from initial design through ongoing support and optimization.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Systems',
      description: 'Future-ready infrastructure designed to grow with your organization\'s evolving needs.'
    },
    {
      icon: Zap,
      title: 'High Reliability',
      description: 'Mission-critical systems engineered for maximum uptime and performance in demanding environments.'
    },
    {
      icon: Users,
      title: 'Data-Driven Decision Making',
      description: 'Advanced analytics and insights that enable informed strategic decisions.'
    }
  ];

  const testimonials = [
    {
      quote: 'TROVA delivered exactly what they promised - a comprehensive system that transformed our operations.',
      author: 'Government Sector Client',
      organization: 'Ministry Level'
    },
    {
      quote: 'The integration capabilities and attention to detail exceeded our expectations.',
      author: 'Event Management Director',
      organization: 'International Sports Event'
    },
    {
      quote: 'Their understanding of complex requirements and ability to deliver scalable solutions is unmatched.',
      author: 'Technology Director',
      organization: 'Educational Institution'
    }
  ];

  return (
    <div className={styles.whyTrova}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles['section--hero']}`}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Why TROVA</h1>
            <p className={styles.hero__subtitle}>
              TROVA differentiates itself through its ability to combine advanced technology 
              with practical implementation. Rather than offering standalone solutions, we 
              deliver fully integrated systems that work together seamlessly.
            </p>
            <p className={styles.hero__description}>
              Our focus on long-term partnerships ensures continuous improvement, system 
              optimization, and sustained operational success.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className={`${styles.section} ${styles['section--differentiators']}`}>
        <div className="container">
          <h2 className="section-title">What Sets Us Apart</h2>
          <div className={styles.differentiators__grid}>
            {differentiators.map((item, index) => (
              <Card key={index} variant="gradient" className={styles.differentiator__card}>
                <div className={styles.differentiator__icon}>
                  <item.icon size={48} />
                </div>
                <h3 className={styles.differentiator__title}>{item.title}</h3>
                <p className={styles.differentiator__description}>{item.description}</p>
                <p className={styles.differentiator__details}>{item.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className={`${styles.section} ${styles['section--advantages']}`}>
        <div className="container">
          <h2 className="section-title">Key Advantages</h2>
          <div className={styles.advantages__grid}>
            {advantages.map((advantage, index) => (
              <Card key={index} variant="elevated" className={styles.advantage__card}>
                <div className={styles.advantage__icon}>
                  <advantage.icon size={40} />
                </div>
                <h3 className={styles.advantage__title}>{advantage.title}</h3>
                <p className={styles.advantage__description}>{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={`${styles.section} ${styles['section--trust']}`}>
        <div className="container">
          <div className={styles.trust__content}>
            <h2 className="section-title">Built on Trust</h2>
            <p className="section-subtitle">
              Our commitment to excellence and reliability has earned us the trust of 
              leading organizations across multiple sectors.
            </p>
            <div className={styles.trust__metrics}>
              <div className={styles.trust__metric}>
                <div className={styles.trust__number}>100%</div>
                <div className={styles.trust__label}>Project Success Rate</div>
              </div>
              <div className={styles.trust__metric}>
                <div className={styles.trust__number}>15+</div>
                <div className={styles.trust__label}>Years Combined Experience</div>
              </div>
              <div className={styles.trust__metric}>
                <div className={styles.trust__number}>300+</div>
                <div className={styles.trust__label}>Facilities Enhanced</div>
              </div>
              <div className={styles.trust__metric}>
                <div className={styles.trust__number}>50+</div>
                <div className={styles.trust__label}>AI Solutions Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles['section--testimonials']}`}>
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <div className={styles.testimonials__grid}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="default" className={styles.testimonial__card}>
                <div className={styles.testimonial__quote}>
                  <CheckCircle size={32} className={styles.testimonial__icon} />
                  <p className={styles.testimonial__text}>"{testimonial.quote}"</p>
                </div>
                <div className={styles.testimonial__author}>
                  <div className={styles.author__name}>{testimonial.author}</div>
                  <div className={styles.author__organization}>{testimonial.organization}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className={`${styles.section} ${styles['section--partnership']}`}>
        <div className="container">
          <div className={styles.partnership__content}>
            <h2 className={styles.partnership__title}>Long-Term Partnership Approach</h2>
            <p className={styles.partnership__subtitle}>
              We believe in building lasting relationships that go beyond project delivery. 
              Our partnership approach ensures continuous value creation and system evolution.
            </p>
            
            <div className={styles.partnership__stages}>
              <div className={styles.stage}>
                <div className={styles.stage__number}>1</div>
                <h3 className={styles.stage__title}>Understanding</h3>
                <p className={styles.stage__description}>Deep dive into your operational challenges and goals</p>
              </div>
              
              <div className={styles.stage}>
                <div className={styles.stage__number}>2</div>
                <h3 className={styles.stage__title}>Collaboration</h3>
                <p className={styles.stage__description}>Working together to design the optimal solution</p>
              </div>
              
              <div className={styles.stage}>
                <div className={styles.stage__number}>3</div>
                <h3 className={styles.stage__title}>Implementation</h3>
                <p className={styles.stage__description}>Expert execution with minimal disruption</p>
              </div>
              
              <div className={styles.stage}>
                <div className={styles.stage__number}>4</div>
                <h3 className={styles.stage__title}>Evolution</h3>
                <p className={styles.stage__description}>Continuous optimization and system enhancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles['section--cta']}`}>
        <div className="container">
          <div className={styles.cta__content}>
            <h2 className={styles.cta__title}>Ready to Experience the TROVA Difference?</h2>
            <p className={styles.cta__subtitle}>
              Let's discuss how our unique approach can transform your operations 
              and deliver exceptional results for your organization.
            </p>
            <div className={styles.cta__actions}>
              <Button href="/contact" variant="primary" size="large">
                Start the Conversation
              </Button>
              <Button href="/projects" variant="secondary" size="large">
                View Our Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyTrovaPage;
