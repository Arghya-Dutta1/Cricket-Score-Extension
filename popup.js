async function fetchCricketScores() {
    try {
      const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=YOUR_API_KEY`);
      const data = await response.json();
      const scoresDiv = document.getElementById("scores");
      scoresDiv.innerHTML = "";
  
      // Define the list of teams to filter
      const specificTeams = ["India", "Sri Lanka", "Australia", "England", "New Zealand", "South Africa", "West Indies", "Pakistan"];
  
      // Parse and display each match's live score for specific teams
      if (data && data.data) {
      const filteredMatches = data.data.filter((match) =>
        specificTeams.some(
          (team) => match.t1.includes(team) || match.t2.includes(team)
        )
      );

      // Display only the top 5 filtered matches
      filteredMatches.slice(0, 5).forEach((match) => {
        // Create the match card div
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match-card");

        // Set match details in the desired format
        matchDiv.innerHTML = `
  <strong>${match.series}, (${match.matchType.toUpperCase()})</strong>
  <div class="team-line">
    <img src="${match.t1img}" alt="${match.t1}">
    ${match.t1.match(/\[(.*?)\]/)?.[1] || match.t1}: ${match.t1s || "N/A"}
  </div>
  <em>VS</em>
  <div class="team-line">
    <img src="${match.t2img}" alt="${match.t2}">
    ${match.t2.match(/\[(.*?)\]/)?.[1] || match.t2}: ${match.t2s || "N/A"}
  </div>
  <em>${match.status}</em>
`;

        // Create the arrow button
        const arrowBtn = document.createElement("button");
        arrowBtn.innerHTML = '<i class="fas fa-arrow-right"></i>'; // Right arrow icon
        arrowBtn.classList.add("arrow-btn");

        // Add event listener to open the Google search on click
        arrowBtn.addEventListener("click", () => {
          window.open(
            `https://www.google.com/search?q=${encodeURIComponent(
              match.series + " " + match.t1 + " vs " + match.t2
            )}`,
            "_blank"
          );
        });

        // Append the arrow button to the match div
        matchDiv.appendChild(arrowBtn);

        // Append matchDiv to scoresDiv
        scoresDiv.appendChild(matchDiv);
      });

      // Show message if no matches are found
      if (filteredMatches.length === 0) {
        scoresDiv.innerText =
          "No live scores available for the specified teams.";
      }
    } else {
      scoresDiv.innerText = "No live scores available.";
    }
  } catch (error) {
    console.error("Error fetching cricket scores:", error);
    document.getElementById("scores").innerText = "Failed to load scores.";
  }
}

document.addEventListener("DOMContentLoaded", fetchCricketScores);
