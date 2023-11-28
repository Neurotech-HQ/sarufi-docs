import React from "react";
import blogStyles from "./blogStyles.module.css";

function Blog() {
  const blogPosts = [
    {
      title:
        "Neurotech Africa's Sarufi AI Workshops Empowering University Students.",
      date: "2023-11-27",
      author: "Omega Seyongwe",
      description:
        "Neurotech Africa,  through its comprehensive Sarufi ambassador program,  has forged partnerships with universities across the Tanzanian country, providing students with hands-on experience with Sarufi AI.",
      link: "https://blog.neurotech.africa/sarufi-ai-worshops/",
    },
    {
      title: "Sarufi New Features & Updates",
      date: "2023-11-09",
      author: "Jovine Mutelani",
      description:
        "Sarufi team is happy to keep you updated with new features. I hope you are so excited to see what new feature came to sarufi in the last few days.",
      link: "https://blog.neurotech.africa/sarufi-october-release/",
    },
    {
      title: "MVC Kiswahili Hackathon Series",
      date: "2023-10-30",
      author: "Avicenna",
      description:
        "Have you heard?! Mozilla, in partnership with Sarufi AI and Africas Talking, are hosting a four part hackathon series focusing on the potentials of voice",
      link: "https://blog.neurotech.africa/mvc-kiswahili-hackathon-series/",
    },
    {
      title: "HEY YOO!",
      date: "2023-10-10",
      author: "Avicenna",
      description:
        "It's hacktoberfest and in light of this month I'd like to write about a prominent open source package, here are its stats: 8000+ downloads",
      link: "https://blog.neurotech.africa/hey-yoo/",
    },
    {
      title:
        "4 Ways AI chatbots improve your customer service as we celebrate Customer Service Week",
      date: "2023-10-08",
      author: "Chisomo Mutale",
      description:
        "This week, the first week of October, as we celebrate Customer Service Week, businesses across the globe are focusing on recognizing the vital role customer",
      link: "https://blog.neurotech.africa/how-ai-chatbots-improve-your-customer-service-celebrating-customer-service-week/",
    },
  ];

  function ActionCircle({ withWhiteCircle }) {
    return (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {withWhiteCircle && (
          <div
            style={{
              width: "50%",
              height: "50%",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#222222",
          padding: "1rem 1.8rem",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <ActionCircle />
        <h4
          className="text-white"
          style={{
            marginBottom: 0,
          }}
        >
          Blog
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "1rem",
          }}
        >
          <ActionCircle withWhiteCircle />
          <ActionCircle withWhiteCircle />
          <ActionCircle withWhiteCircle />
        </div>
      </div>
      <div className={blogStyles.blogMain}>
        {blogPosts.map((blogPost, index) => (
          <div key={index}>
            <a
              href={blogPost.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#2EA56F",
                fontSize: "1.3rem",
                lineHeight: "1.5rem",
              }}
            >
              {blogPost.title}
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: ".9rem",
                margin: ".4rem 0",
              }}
            >
              <p
                className="text-white"
                style={{
                  marginRight: "1rem",
                  marginBottom: 0,
                }}
              >
                {new Date(blogPost.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p
                style={{
                  color: "#2EA56F",
                  marginBottom: 0,
                }}
              >
                {blogPost.author}
              </p>
            </div>
            <p
              className="text-white"
              style={{
                fontSize: ".8rem",
              }}
            >
              {blogPost.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
