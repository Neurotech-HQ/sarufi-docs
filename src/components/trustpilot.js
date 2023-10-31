import React from "react";
import styles from "./trustpilot.module.css";

function TrustPilot() {
  const trustPilotData = [
    {
      name: "John Doe",
      title: "Exceptional chatbot solution",
      review:
        "Sarufi has revolutionized our customer interactions. Its multilingual support and integration with diverse platforms transformed our user engagement. A game-changer for sure!",
      rating: 5,
    },
    {
      name: "Chisomo Mutale",
      title: "I just really loved easy it was to use",
      review: "I just really loved easy it was to use and integrate.",
      rating: 5,
    },
    {
      name: "John Doe",
      title: "Exceptional chatbot solution",
      review:
        "Sarufi has revolutionized our customer interactions. Its multilingual support and integration with diverse platforms transformed our user engagement. A game-changer for sure!",
      rating: 5,
    },
  ];

  return (
    <section className={styles.trustPilotContainer}>
      {trustPilotData.map((review, index) => {
        return (
          <TrustPilotCard
            key={index}
            title={review.title}
            review={review.review}
            rating={review.rating}
          />
        );
      })}
    </section>
  );
}

function TrustPilotCard({ title, review, rating }) {
  return (
    <div
      className="text-black"
      style={{
        padding: "1rem",
        backgroundColor: "#00B67A",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{review}</p>
    </div>
  );
}

export default TrustPilot;
