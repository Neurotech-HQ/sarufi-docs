import React from "react";
import styles from "./playground.module.css";

function SarufiPlayground() {
  return (
    <section className={styles.playgroundContainer}>
      <div className={styles.playgroundTextContainer}>
        <img
          src="img/playground/playground_logo.png"
          alt="Sarufi playground logo"
          style={{
            width: "150px",
          }}
        />
        <h2>Join sarufi's community today!</h2>
        <p className="margin-vert-md">
          Ready to revolutionize your chatbot game? Dive into Sarufi now and
          elevate your user interactions to the next level.
        </p>
        <a
          href="https://sarufi.io"
          style={{
            backgroundColor: "#a855f7",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "1rem",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Join Now
        </a>
      </div>
      <div className={styles.playgroundImagesContainer}>
        {[...Array(15).keys()].map((i) => {
          return (
            <img
              key={i}
              src="img/playground/sarufi_preview.jpg"
              alt="Sarufi Preview"
              style={{
                width: "80px",
                // height: "auto",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SarufiPlayground;
