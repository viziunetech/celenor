import React from "react";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #4c51bf, #2a2a72, #000000)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", fontFamily: "serif", letterSpacing: "0.05em" }}>CELENOR</h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "300" }}>Something Stellar is coming...</h2>
        <p style={{ fontSize: "1.125rem", maxWidth: "40rem", margin: "1rem auto" }}>
          Introducing <strong>Celenor</strong> – of luxury skincare, inspired by the stars.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <input
            type="text"
            placeholder="Enter to join Celenor Skincare Constellation"
            style={{
              width: "20rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px 0 0 9999px",
              border: "none",
              outline: "none",
              color: "black"
            }}
          />
          <button
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0 9999px 9999px 0",
              backgroundColor: "white",
              color: "#4c51bf",
              border: "none",
              cursor: "pointer"
            }}
          >
            🔍
          </button>
        </div>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            borderRadius: "9999px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer"
          }}
        >
          JOIN THE CONSTELLATION
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginTop: "4rem" }}>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "1rem", padding: "1rem" }}>
          <div style={{ height: "12rem", width: "5rem", background: "linear-gradient(to top, #5a67d8, #bee3f8)", borderRadius: "0.5rem" }}></div>
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "1rem", padding: "1rem" }}>
          <div style={{ height: "12rem", width: "3rem", background: "linear-gradient(to top, #5a67d8, #bee3f8)", borderRadius: "0.5rem" }}></div>
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "1rem", padding: "1rem" }}>
          <div style={{ height: "6rem", width: "6rem", background: "linear-gradient(to top, #5a67d8, #bee3f8)", borderRadius: "50%" }}></div>
        </div>
      </div>

      <footer style={{ fontSize: "0.875rem", marginTop: "4rem", color: "white" }}>
        © Full HD20. Celighar reserved. Made with love among the stars.
      </footer>
    </div>
  );
}

export default Home;
