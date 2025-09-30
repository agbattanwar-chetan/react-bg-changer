# React Background Changer

This is a simple React application that allows users to change the background color of the page by clicking on color buttons. Built with Vite for fast development and React 19 for modern UI.

## Features

- Instantly change the background color by clicking a button
- Clean, minimal UI
- Built with React 19 and Vite

## Demo

![Demo Screenshot](public/vite.svg)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/agbattanwar-chetan/react-bg-changer.git
   cd react-bg-changer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app in action.

### Building for Production

To build the app for production:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

## Project Structure

- `src/` - Source code
  - `App.jsx` - Main app component
  - `main.jsx` - Entry point
  - `assets/` - Static assets
- `public/` - Public files
- `index.html` - HTML template
- `package.json` - Project metadata and scripts

## Customization

To add or remove background colors, edit the `bgColors` array in `src/App.jsx`.

## License

This project is licensed under the MIT License.
