import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div style={{width: "50%"}}>
          <h1 style={{
            fontSize: '2.5rem',
          }}>
            Get started with Sarufi
          </h1>
        <p style={{fontSize: '1.5rem'}}>{siteConfig.tagline}</p>
        </div>
        <img src="img/homepage/hero.png" alt="Sarufi Hero" className={styles.heroImage} />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sarufi is a Conversational AI platform tailored to excel at African languages"
      wrapperClassName='homepage'
      >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
