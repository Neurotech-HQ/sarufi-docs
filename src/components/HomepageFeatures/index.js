import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Build chatbots visually",
    Svg: require("@site/static/img/built.svg").default,
    button: {
      text: "User Guide",
      link: "/docs/category/user-guide",
    },
    description: (
      <>
        Design conversation flows, connect knowledge bases, and deploy to
        WhatsApp and your website - no code required.
      </>
    ),
  },
  {
    title: "Powerful REST API",
    Svg: require("@site/static/img/simple-chatbot.svg").default,
    button: {
      text: "Developer API",
      link: "/docs/category/developer-api",
    },
    description: (
      <>
        Manage chatbots, flows, integrations, and analytics programmatically
        with the Sarufi REST API.
      </>
    ),
  },
  {
    title: "Need help",
    Svg: require("@site/static/img/language.svg").default,
    button: {
      text: "Contact Support",
      link: "https://sarufi.io/contact",
    },
    description: (
      <>
        Our dedicated support team is ready to assist you with any queries,
        ensuring a smooth chatbot development experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description, button }) {
  return (
    <div className={styles.featureContainer}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <h4>{title}</h4>
        <p
          style={{
            color: "#a3a3a3",
            fontSize: ".8rem",
          }}
        >
          {description}
        </p>
        <Link
          to={button.link}
          className="button"
          style={{ background: "#2776ea" }}
        >
          {button.text}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
