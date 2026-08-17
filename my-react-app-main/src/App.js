import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Welcome to My React App</h1>
      <p>This app is running on Nginx!</p>

      <h2>Deployed by: <strong>Sofia EL MAFTAH</strong></h2>
      <p>Date: <strong>13/04/2026</strong></p>

      <hr style={{ margin: "20px 0" }} />

      <p>
        P.S. This post is part of the FREE DevOps for Beginners Cohort run by
        <strong> Pravin Mishra</strong>.
      </p>
      <p>
        You can start your DevOps journey for free from his{" "}
        <a
          href="https://www.youtube.com/playlist?list=PLVOdqXbCs7bX88JeUZmK4fKTq2hJ5VS89"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube Playlist
        </a>.
      </p>
      <p>
        Connect with Pravin on{" "}
        <a
          href="https://www.linkedin.com/in/pravin-mishra-aws-trainer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>.
      </p>
    </div>
  );
}

export default App;

