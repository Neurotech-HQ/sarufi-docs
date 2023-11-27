import React from "react";
import styles from "./trustpilot.module.css";

function TrustPilot() {
  const trustPilotData = [
    {
      name: "Micheal Wekesa",
      userNameUrl: "https://sarufi.io/images/testimonials/micheal.jpg",
      review:
        "Sarufi made building a chatbot easy and quick. Its user-friendly interface and Swahili support are perfect for businesses in East Africa. Thanks to Sarufi, my computer science learning resource chatbot was up and running in no time and integrated smoothly with Twilio.",
      rating: 5,
    },
    {
      name: "Fuad Habib",
      userNameUrl: "https://sarufi.io/images/testimonials/fuad.jpg",
      review:
        "As a software developer, I was impressed with the user-friendliness and ease of integration of Sarufi's conversational AI platform. The API was straightforward and well-documented, making my development process a breeze. I highly recommend it to fellow developers looking to enhance their user interfaces with a real-time, intelligent AI that can respond to user inquiries in real-time.",
      rating: 5,
    },
    {
      name: "Nyanda Freddy",
      userNameUrl: "https://sarufi.io/images/testimonials/nyanda.jpg",
      review:
        "My 'aha' moment was the natural language processing capabilities of Sarufi's conversational AI platform, which was able to understand and respond to complex sentences. The platform can be easily integrated into social media platforms and has a no-code option, saving a lot of time. I highly recommend it to other developers.",
      rating: 5,
    },
  ];

  return (
    <section className={styles.trustPilotContainer}>
      {trustPilotData.map((review, index) => {
        return (
          <TrustPilotCard
            key={index}
            name={review.name}
            review={review.review}
            rating={review.rating}
            userNameUrl={review.userNameUrl}
          />
        );
      })}
    </section>
  );
}

function TrustPilotCard({ userNameUrl, name, review, rating }) {
  return (
    <div
      className="text-black"
      style={{
        padding: "1rem",
        backgroundColor: "#00B67A",
        borderRadius: "10px",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        marginBottom: "1rem",
      }}>
        <div style={{
            width: "50px",
            height: "50px"
        }}>
          <img src={userNameUrl} alt={name} style={{
            borderRadius: "50%",
            width: "100%"
          }} />
        </div>
        <h3 style={{
          marginBottom: 0,
        }}>{name}</h3>
      </div>
      <p>{review}</p>
    </div>
  );
}

export default TrustPilot;
