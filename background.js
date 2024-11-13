// Interval in minutes for how often to fetch live scores
const FETCH_INTERVAL_MINUTES = 1;

// Set up an alarm to trigger periodic fetches
chrome.alarms.create("fetchCricketScores", { periodInMinutes: FETCH_INTERVAL_MINUTES });

// Alarm listener for fetching scores
chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "fetchCricketScores") {
    fetchCricketScores();
  }
});

// Function to fetch live cricket scores from CricAPI
async function fetchCricketScores() {
  try {
    const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    // Store scores in local storage
    chrome.storage.local.set({ cricketScores: data.data });

  } catch (error) {
    console.error("Failed to fetch cricket scores:", error);
  }
}
