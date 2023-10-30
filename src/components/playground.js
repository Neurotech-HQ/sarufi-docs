import React from "react";

function SarufiPlayground() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        columnGap: "2rem",
        padding: "2rem",
        backgroundImage: "url('img/playground/playground_bg.png')",
        backgroundPosition: "center",
        backdropFilter: "blur(16px)"
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
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
        <button
          style={{
            backgroundColor: "#a855f7",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          Join Now
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: ".5rem",
          width: "50%",
        }}
      >
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
