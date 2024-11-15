# Cricket Scores Extension

This is a Chrome extension that displays live cricket match scores for specific teams like India, Sri Lanka, Australia, England, New Zealand, South Africa, West Indies, and Pakistan. The extension fetches live match data from CricAPI and displays it in a simple, easy-to-read interface. Each match has an arrow button that redirects to a Google search for the respective match.

---

## Screenshots

<img src="https://github.com/user-attachments/assets/5ca0b09b-af8d-4121-9bc6-4ea6fa506d85" alt="Img1" width="200" height="200">

<img src="https://github.com/user-attachments/assets/cc99c656-b70d-4401-ab26-dc416eb28b76" alt="Img2" width="200" height="200">



---


## Features

- Displays live cricket scores for selected teams (India, Sri Lanka, Australia, England, New Zealand, South Africa, West Indies, Pakistan).
- Filters matches based on specific teams.
- Shows the current status of the match, venue, and teams.
- Provides a clickable arrow button for quick Google search of the match.
- Supports Dark Mode theme with toggle for light and dark modes.

---

## Installation

### Prerequisites

- Google Chrome browser (or any Chromium-based browser).
- A CricAPI API key (you can get one from [CricAPI](https://www.cricapi.com/)).

---

### Steps

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/live-cricket-scores-extension.git
   ```
2. Go to the Chrome Extensions page:
  - In the Chrome browser, go to `chrome://extensions/`.
  - Enable "Developer Mode" at the top right.
  - Click on "Load unpacked" and select the folder where you cloned the repository.
3. The extension will be loaded, and you can start seeing live cricket scores for the selected teams!

---

## Files in the Project

- `popup.html`: The HTML structure for the extension popup.
- `styles.css`: The CSS for styling the extension with dark mode and light mode toggle.
- `popup.js`: The JavaScript that fetches live scores from CricAPI and handles the user interface.
- `background.js`: Background script to handle the dark mode toggle functionality.
- `manifest.json`: The configuration file for the Chrome extension.

---

## Dark Mode / Light Mode Toggle

The extension features a toggle to switch between dark mode and light mode. By default, the extension will open in dark mode, but you can switch it to light mode by clicking the toggle button in the top-right corner of the popup.

---

## API Key

This extension uses the CricAPI to fetch live cricket scores. To use this extension, you need to sign up for an API key at [CricAPI](https://www.cricapi.com/). Once you have the key, add it in the appropriate section of the JavaScript code.

```javascript
const apiKey = 'YOUR_API_KEY';  // Replace with your CricAPI key
```

## Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Media Queries, Transitions)
- **JavaScript** (ES6+)
- **CricAPI** for live cricket data
- **Google Chrome Extension APIs**

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are always welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **CricAPI** for providing live cricket data.

