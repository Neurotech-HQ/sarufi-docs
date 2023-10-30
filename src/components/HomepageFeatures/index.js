import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Supported languages",
    Svg: require("@site/static/img/built.svg").default,
    button: {
      text: "Learn more",
      link: "/docs/Getting started /create-a-simple-chatbot",
    },
    description: (
      <>
        Sarufi supports Python, Node.js, and Go, providing flexibility and ease
        for developers in crafting powerful chatbot solutions.
      </>
    ),
  },
  {
    title: "Supported platforms",
    Svg: require("@site/static/img/simple-chatbot.svg").default,
    button: {
      text: "See Integrations",
      link: "/docs/category/integrations",
    },
    description: (
      <>
        Sarufi bots are compatible with platforms like Telegram, WhatsApp, and
        Messenger, ensuring wide-reaching engagement possibilities for your
        chatbots.
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
    <div
      style={{
        color: "white",
        border: "2px solid #2776ea",
        borderRadius: "1rem",
        padding: "1rem 0",
      }}
    >
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
        }}
      >
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
