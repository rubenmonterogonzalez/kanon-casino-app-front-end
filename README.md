# Casino App - React + TypeScript + Vite

### Description

This project is a casino web application built using React, TypeScript, and Vite. It features state management with Redux, routing with React Router, and styling with Tailwind CSS.

## Table of Contents

1.  [Features](#features)
2.  [Tech Stack](#tech-stack)
3.  [Installation](#installation)
4.  [Development](#development)
5.  [Build and Deployment](#build-and-deployment)
6.  [Folder Structure](#folder-structure)
7.  [Environment Variables](#environment-variables)
8.  [Testing](#testing)
9.  [ESLint and Prettier Configuration](#eslint-and-prettier-configuration)
10. [Useful Commands](#useful-commands)

## Features

- Slot machine game simulation.
- User authentication and coin persistence.
- Responsive design using Tailwind CSS.
- State management with Redux Toolkit.
- Routing with React Router.
- API communication with a Node.js backend.

## Tech Stack

### Frontend

- **React 18.3**
- **TypeScript 5.5**
- **Redux Toolkit 2.2**
- **React Router Dom 6.26**
- **Tailwind CSS 3.4**
- **Vite 5.4**

### Development Tools

- **ESLint 9.9**
- **Prettier 3.3**
- **Jest 29.7**
- **Testing Library**

## Installation

1. Clone the respository:
    ```
    git clone https://github.com/rubenmonterogonzalez/kanon-casino-app-front-end.git
    cd kanon-casino-app-front-end
    ```
2. Install dependencies:
    `npm install`
3. Create a .env file in the root directory and add the following:
    `VITE\_API\_URL=http://localhost:3001`
  Replace VITE_API_URL with your backend API URL.

## Development

To start the development server with hot reloading, run:

`npm run dev`

This will start the Vite development server at http://localhost:3000.

### Available Scripts

- **npm run dev**: Start the development server.
- **npm run build**: Create a production build.
- **npm run preview**: Preview the production build.
- **npm run lint**: Run ESLint to check for code quality.
- **npm run format**: Format code with Prettier.
- **npm run test**: Run unit tests with Jest.

## Build and Deployment

To create a production build, run:

`npm run build`

This will generate a dist folder with the production build of your app. You can deploy this folder to any static hosting service like Vercel, Netlify, or AWS S3.

## Folder Structure

```
  ├── public                # Public assets
  ├── src
  ├── assets                # Static assets (images, icons, etc.) & QUESTION 4 & 5
  │   ├── components        # Reusable components
  │   ├── helpers           # Helper components
  │   ├── hooks             # Custom hooks
  │   ├── layouts           # Layouts
  │   ├── pages             # Page components (e.g., Home, Login, Slots)
  │   ├── routers           # Routers
  │   ├── store             # Redux store, slices
  │   ├── styles            # Global styles, Tailwind configurations
  │   ├── tests             # Tests
  │   ├── types             # TypeScript types
  │   ├── App.tsx           # Main app component
  │   ├── main.tsx          # Entry point for React
  │   └── index.css         # Global CSS, includes Tailwind base styles
  ├── eslint.config.js      # ESLint configuration
  ├── .prettierrc           # Prettier configuration
  ├── tailwind.config.js    # Tailwind CSS configuration
  ├── tsconfig.json         # TypeScript configuration
  ├── vite.config.ts        # Vite configuration
  └── README.md             # This file
```

## Environment Variables

The following environment variables are used in this project:

- VITE_API_URL: The base URL for the backend API.

You can add more environment variables as needed in your .env file.

## Testing

To run unit tests using Jest and React Testing Library, use:

`npm run test `

Jest and React Testing Library are used for testing components and hooks.

## ESLint and Prettier Configuration

The project is configured with ESLint and Prettier for code quality and formatting. The configuration includes recommended rules for React, TypeScript, and more.

### ESLint Configuration (eslintrc.config.js):

```
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

### Prettier Configuration (.prettierrc):

```
{
  "endOfLine": "lf",
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Useful Commands

- **Start Development Server**: npm run dev
- **Build for Production**: npm run build
- **Lint and Format Code**: npm run lint and npm run format
- **Run Tests**: npm run test

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://es.react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
