import React from "react";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #2e1a47, #634f7f)",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "serif",
      position: "relative",
      overflow: "hidden"
    }}>
      <header style={{
        textAlign: "center",
        marginBottom: "2rem"
      }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "1px" }}>CELENOR</h1>
        <p style={{ fontSize: "1rem", fontStyle: "italic", marginTop: "0.25rem" }}>LUXURY SKINCARE</p>
      </header>

      <main style={{ textAlign: "center", maxWidth: "40rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something Stellar is coming....</h2>
        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          Introducing <strong>Celenor</strong> - new era of luxury skincare, inspired by the Stars.
        </p>
        <button
          style={{
            backgroundColor: "#ffffff",
            color: "#2e1a47",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            cursor: "pointer"
          }}
        >
          NOTIFY ME
        </button>
        <input 
          type="email" 
          placeholder="Email Signup Now" 
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: "1px solid #ccc",
            marginBottom: "2rem",
            width: "60%"
          }} 
        />
        <p style={{ fontSize: "0.875rem" }}>© 2025 CELENOR. ALL WITH LOVE ✧ AMONG THE STARS</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
          <div style={{ height: "2rem", width: "2rem", backgroundColor: "#fff", borderRadius: "50%" }}></div>
          <div style={{ height: "2rem", width: "2rem", backgroundColor: "#fff", borderRadius: "50%" }}></div>
          <div style={{ height: "2rem", width: "2rem", backgroundColor: "#fff", borderRadius: "50%" }}></div>
        </div>
      </main>

      <section style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
        <div style={{ height: "12rem", width: "4rem", background: "linear-gradient(to top, #1c1330, #7151a1)", borderRadius: "0.5rem" }}></div>
        <div style={{ height: "12rem", width: "4rem", background: "linear-gradient(to top, #40295e, #a084dc)", borderRadius: "0.5rem" }}></div>
      </section>

      <footer style={{ fontSize: "0.875rem", marginTop: "3rem", color: "#ddd" }}>
        ✦ Backgrounds and constellations are a visual tribute to celestial beauty.
      </footer>
    </div>
  );
}

export default Home;
