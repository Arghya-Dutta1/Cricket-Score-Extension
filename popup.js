async function fetchCricketScores() {
    try {
      const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=1dca58b0-e85e-493c-ae6f-4a0b29ae0ace&offset=0`);
      const data = await response.json();
      const scoresDiv = document.getElementById("scores");
      scoresDiv.innerHTML = "";
  
      // Define the list of teams to filter
      const specificTeams = ["India", "Sri Lanka", "Australia", "England", "New Zealand", "South Africa", "West Indies", "Pakistan"];
  
      // Parse and display each match's live score for specific teams
      if (data && data.data) {
        const filteredMatches = data.data.filter(match =>
          specificTeams.some(team => match.teams.includes(team))
        );
  
        // Display only the top 5 filtered matches
        filteredMatches.slice(0, 5).forEach(match => {
          // Create the match card div
          const matchDiv = document.createElement("div");
  
          // Set match name, status, and venue
          matchDiv.innerText = `${match.name}: ${match.status} \nVenue: ${match.venue}`;
  
          // Create the arrow button
          const arrowBtn = document.createElement("button");
          arrowBtn.innerText = "🏹"; // Arrow symbol
          arrowBtn.classList.add("arrow-btn");
  
          // Add event listener to open the Google search on click
          arrowBtn.addEventListener("click", () => {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(match.name)}`, "_blank");
          });
  
          // Append the arrow button to the match div
          matchDiv.appendChild(arrowBtn);
  
          // Append matchDiv to scoresDiv
          scoresDiv.appendChild(matchDiv);
        });
  
        // Show message if no matches are found
        if (filteredMatches.length === 0) {
          scoresDiv.innerText = "No live scores available for the specified teams.";
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
  