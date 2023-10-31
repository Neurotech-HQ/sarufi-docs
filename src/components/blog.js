import React from "react";

function Blog() {
  const blogPosts = [
    {
      title: "Telegram webhooks vs polling",
      date: "2021-08-07",
      author: "Jovine Mutelani",
      description:
        "After building your chatbot with sarufi, you might need to integrate it with other popular messaging platforms.",
      link: "/blog/2021/08/07/sarufi-v0.1.0-is-out",
    },
    {
      title: "Sarufi v0.1.0 is out!",
      date: "2022-08-07",
      author: "Jovine Mutelani",
      description:
        "We are excited to announce the release of Sarufi v0.1.0. This is a major release with a lot of improvements and new features. Read more about it in this blog post.",
      link: "/blog/2021/08/07/sarufi-v0.1.0-is-out",
    },
    {
      title: "Sarufi v0.1.0 is out!",
      date: "2022-09-04",
      author: "Jovine Mutelani",
      description:
        "We are excited to announce the release of Sarufi v0.1.0. This is a major release with a lot of improvements and new features. Read more about it in this blog post.",
      link: "/blog/2021/08/07/sarufi-v0.1.0-is-out",
    },
    {
      title: "Sarufi v0.1.0 is out!",
      date: "2022-12-27",
      author: "Jovine Mutelani",
      description:
        "We are excited to announce the release of Sarufi v0.1.0. This is a major release with a lot of improvements and new features. Read more about it in this blog post.",
      link: "/blog/2021/08/07/sarufi-v0.1.0-is-out",
    },
    {
      title: "Sarufi v0.1.0 is out!",
      date: "2023-04-17",
      author: "Jovine Mutelani",
      description:
        "We are excited to announce the release of Sarufi v0.1.0. This is a major release with a lot of improvements and new features. Read more about it in this blog post.",
      link: "/blog/2021/08/07/sarufi-v0.1.0-is-out",
    },
  ];

  function ActionCircle({ withWhiteCircle }) {
    return (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
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
              backgroundColor: "#fff",
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
          padding: "5px 10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <ActionCircle />
        <h3
          className="text-white"
          //   style={{
          //     fontSize: "1.5rem",
          //   }}
        >
          Blog
        </h3>
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
      <div
        style={{
          backgroundColor: "#300924",
          padding: "2rem",
          borderTop: "1px solid #222222",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "1rem",
        }}
      >
        {blogPosts.map((blogPost, index) => (
          <div key={index}>
            <h4
              style={{
                color: "#2EA56F",
                fontSize: "1.5rem",
              }}
            >
              {blogPost.title}
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: "1rem",
                  marginRight: "1rem",
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
                  fontSize: "1rem",
                  color: "#2EA56F",
                }}
              >
                {blogPost.author}
              </p>
            </div>
            <p
              className="text-white"
              style={{
                fontSize: ".9rem",
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
