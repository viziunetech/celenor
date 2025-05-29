import React from "react";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #e0d0cb, #f2e4f0)",
      color: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "serif"
    }}>
      <header style={{
        width: "100%",
        textAlign: "center",
        paddingBottom: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "2rem"
      }}>
        <p style={{ fontSize: "0.875rem" }}>© 2025 ✧ CLIMBC. LUXURY LANDING PAGE</p>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>CELENOR <span style={{ fontSize: "1rem" }}>LUXURY SKINCARE</span></h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", fontSize: "0.875rem" }}>
          <span>CELENOR 4</span>
          <span>PHONO</span>
          <span>CAICATE</span>
        </nav>
      </header>

      <main style={{ textAlign: "center", maxWidth: "40rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something Stellar is coming....</h2>
        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          Introducing <strong>Celenor</strong> — <br />A new era of luxury skincare, inspired by the stars.
        </p>
        <button
          style={{
            backgroundColor: "#fff",
            border: "1px solid black",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            marginBottom: "1.5rem",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          EMAIL EMAIL CONSTELLATION
        </button>
        <p style={{ marginBottom: "1.5rem" }}>Be the first to know. <br />Join our Constellation.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <div style={{ height: "2rem", width: "2rem", backgroundColor: "#ccc", borderRadius: "4px" }}></div>
          <div style={{ height: "2rem", width: "2rem", backgroundColor: "#ccc", borderRadius: "4px" }}></div>
        </div>
        <p style={{ fontSize: "0.75rem", marginTop: "1rem" }}>CLENOR, GALAXY ✦ CELENOR WRLWAY</p>
      </main>

      <section style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
        <div style={{ height: "8rem", width: "8rem", backgroundColor: "#1a1a1a", borderRadius: "50%" }}></div>
        <div style={{ height: "10rem", width: "3rem", background: "linear-gradient(to top, #fff, #ddd)", borderRadius: "0.5rem" }}></div>
        <div style={{ height: "10rem", width: "3rem", background: "linear-gradient(to top, #2a2a72, #5a67d8)", borderRadius: "0.5rem" }}></div>
      </section>

      <footer style={{ fontSize: "0.875rem", marginTop: "3rem", color: "#333" }}>
        Background elements and stars are decorative. Inspired by cosmic beauty.
      </footer>
    </div>
  );
}

export default Home;
