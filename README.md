# iMessages App

A React demo that recreates a compact iMessage-style messaging interface. The app lets you browse conversations, search contacts and message text, open a chat, compose a new message, and start a new conversation from static sample data.

Live demo: https://message-app-pejda.netlify.app/

## Features

- Contact list sorted by latest message
- Search by contact name or message content
- Conversation view with sent and received message bubbles
- Time grouping for messages
- New-message flow for existing or new contacts
- Avatar images generated from contact ids
- Responsive phone-style app frame

## Tech Stack

- React 18
- Create React App / `react-scripts`
- CSS
- Ionicons loaded from CDN
- Static in-memory data

## Project Structure

```text
public/
  index.html        HTML template and external icon scripts
  manifest.json     PWA metadata
src/
  App.js            Main application, components, and state logic
  database.js       Static contact and message data
  index.css         Global styles
  index.js          React entry point
package.json        Scripts and dependencies
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

On Windows PowerShell, if `npm` is blocked by execution policy, run the command through `npm.cmd` instead:

```bash
npm.cmd start
```

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Creates an optimized production build in the `build/` folder.

### `npm test`

Runs the Create React App test runner.

No automated tests are currently included, so the test command exits with "No tests found" unless you pass `--passWithNoTests`.

## Data Model

Messages are stored in `src/database.js` as static JavaScript objects:

```js
{
  id: 130801,
  name: "Tom",
  image: "https://i.pravatar.cc/48?u=130801",
  messages: [
    {
      time: new Date("2024-06-18 10:25:10"),
      sent: false,
      text: "Hello, how is it going?"
    }
  ]
}
```

Messages sent in the UI are kept only in React state. They are not saved after refreshing the page.

## Development Notes

- The app is front-end only and does not use a backend or database.
- `node_modules/` and `build/` are ignored by Git.
- Icons depend on the Ionicons CDN configured in `public/index.html`.
- Avatars depend on the external `i.pravatar.cc` image service.
- The README and public metadata should be updated if the app name, deployment URL, or product direction changes.

## Future Improvements

- Add automated tests for search, message sending, and contact creation.
- Persist messages with `localStorage` or a backend service.
- Split `App.js` into smaller components and utility modules.
- Improve accessibility by using buttons and labels for interactive icons.
- Replace external runtime assets with local assets where reliability matters.
