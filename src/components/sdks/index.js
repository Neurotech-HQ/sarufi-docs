import React from "react";

function Sdks() {
  return (
    <section
      className="text-black bg-white"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4rem 4rem 6rem 4rem",
      }}
    >
      <div style={{ width: "50%" }}>
        <h3>Build with Ease</h3>
        <p>
          Unlock Sarufi's potential with our robust SDKs for Python, Node.js,
          and Go. Craft dynamic chatbots effortlessly, leveraging the power of
          your preferred programming language. Elevate your conversational AI
          experience.
        </p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
      }}>
        <img src="img/homepage/python.png" alt="python"
        style={{
            width: "200px",
        }}
        />
        <img src="img/homepage/php.png" alt="php" style={{
            width: "200px",
        }} />
        <img src="img/homepage/GO.png" alt="GO" style={{
            width: "200px",
        }} />
      </div>
    </section>
  );
}

export default Sdks;
