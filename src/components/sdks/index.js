import React from "react";
import styles from "./sdks.module.css";

function Sdks() {
  return (
    <section className={styles.sdksContainer}>
      <div className={styles.sdksTextContainer}>
        <h3>Build with Ease</h3>
        <p>
          Unlock Sarufi's potential with our robust SDKs for Python, Node.js,
          and Go. Craft dynamic chatbots effortlessly, leveraging the power of
          your preferred programming language. Elevate your conversational AI
          experience.
        </p>
      </div>
      <div
        className={styles.sdksImageContainer}
      >
        <img
          src="img/homepage/python.png"
          alt="python"
          style={{
            width: "200px",
          }}
        />
        <img
          src="img/homepage/php.png"
          alt="php"
          style={{
            width: "200px",
          }}
        />
        <img
          src="img/homepage/GO.png"
          alt="GO"
          style={{
            width: "200px",
          }}
        />
      </div>
    </section>
  );
}

export default Sdks;
