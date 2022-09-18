import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/built.svg').default,
    description: (
      <>
      Sarufi is aiming to be the go to <strong>developer platform</strong> to build conversational
      experience in african languages.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/simple-chatbot.svg').default,
    description: (
      <>
        Sarufi abstract away the complexity of building a conversational experience,
        like <strong>intent detection</strong> and dialog management. so you can focus on what matters.
      </>
    ),
  },
  {
    title: 'Built for Africa',
    Svg: require('@site/static/img/language.svg').default,
    description: (
      <>
        Sarufi core priority is having a strong support for African languages like Swahili, Luganda,  Kinyarwanda, Yoruuba, etc.
        Perhaps, We also have a strong support for major languages like English, French, Spanish, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
