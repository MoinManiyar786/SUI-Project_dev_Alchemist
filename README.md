
# Water Drop Tracker

Water Drop Tracker is a web-based application that helps track and optimize water usage. The project utilizes modern web technologies such as Tailwind CSS, React, and Node.js. This README will guide you through setting up and running the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager) – comes with Node.js
- [Git](https://git-scm.com/)

## Setting Up the Project

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/H2Optimisers.git
cd H2Optimisers
```

### Step 2: Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Step 3: Running the Server

You can start the server using the following command:
### Step 1:
```bash
cd Server
```
### Step 2:
```bash
node app.js
```

This will start the application at `http://localhost:5173`. Open this URL in your web browser to view the application.

### Step 4: To run the project open a new terminal and run this command:
```bash
npm run dev
```

This will create an optimized version of the app in the `build` folder, ready to be deployed.

## Folder Structure

- `public/`: Contains the images of the application.
- `src/`: The source code for the application.
- `Server/`: Backend server files.
- `package.json`: Contains project metadata and npm scripts.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `postcss.config.js`: Configuration for PostCSS.