# Device Store

This is a convenient and intuitive page for choosing Apple devices: iPhones, iPads, and various accessories. The interface is designed to help users easily find the right product, compare different models, and quickly switch between categories.

## Project Description
This is a high‑performance React/Vite application that displays a product catalog with filtering, sorting, and search capabilities. Its architecture follows a clean, component‑based structure with a clear separation between UI and business logic. The project uses modern frontend tools, including React Hooks, modular SCSS architecture, optimized Vite builds, and a fully responsive grid layout.

## Technical Requirements
To run this project, you will need:

Node.js (version 14.x or newer) — A JavaScript runtime required to install dependencies and run the development server.

NPM (version 6.x or newer) — The package manager used to install and manage project dependencies.

A modern browser (Chrome, Safari, Firefox, Edge) — Required to view and interact with the catalog interface.

Stable internet connection — Needed to load product data and assets from the API.

## Installation and Setup

To install the project and run it locally, follow these steps:
  1. **Clone the repository:**
      git clone  https://github.com/Mariiaantoniv/DeviceStore.git

  2. **Navigate to the project directory:**
      cd DeviceStore

  3. **Install dependencies:**
      npm install

  4. **Start the local development server:**
      npm start

## Usage

After starting the project, it will be available at http://localhost:8080.
You can use this URL to preview the catalog and ensure that all pages, categories, and product cards display correctly. Any changes you make to the project files will update in real time thanks to the development server.

## Features:

- **Phone catalogue** — displays a complete list of available phone models loaded from the API, with images, prices, and basic specifications.

- **Sorting & filtering** — allows users to sort phones by price, age, or popularity, and filter them to quickly find the needed model.

- **Pagination** — divides the phone list into pages for better performance and a cleaner browsing experience.

- **Phone details page** — provides full information about a selected phone, including specifications, gallery, description, and related models.

- **Responsive design** — ensures the catalogue looks and works correctly on desktops, tablets, and mobile devices.

- **SCSS architecture** — modular and maintainable styling structure using variables, mixins, and reusable components.

## Example

You can view a live demo of the project here: [DEMO LINK](https://mariiaantoniv.github.io/DeviceStore/)

## Technologies Used:

- **HTML5** — defines the structure of the phone catalogue pages, including layout, semantic blocks, and content organization.

- **SCSS** — used to style the application with variables, nesting, and modular structure, making the UI consistent and easy to maintain.

- **JavaScript** — handles application logic, dynamic rendering of phone lists, sorting, filtering, and interaction with the API.

- **React** — manages the component structure of the catalogue, routing between pages, state management, and efficient UI updates.

- **TypeScript** — adds static typing to improve reliability when working with phone data, API responses, and component props.

- **API Integration** — fetches phone data (list, details, images) from an external API, enabling dynamic content instead of hardcoded data.
