
# React JavaScript Essentials Demo

Project Overview

This project is a React application that demonstrates essential JavaScript concepts that are important to master before diving into React. The app fetches real data from the public API JSONPlaceholder and provides examples of core JavaScript concepts such as:

Array Destructuring
Array Methods (filter, map, and reduce)
Promises and Async/Await
API Fetching with error handling
Component-based design in React
The application displays a list of posts, allows users to filter the list by title, and fetches additional details about a post when selected.

Project Structure

graphql
Copy code
src/
│
├── components/
│   └── PostDetalhes.js          # Component to display post details
│
├── services/
│   └── api.js                   # Functions for API calls (fetch posts and post details)
│
├── App.js                        # Main React component
└── index.js                      # Entry point for the React app
Live Features

Fetches posts from the JSONPlaceholder API.
Displays a list of posts with a filter input to search posts by title.
Allows users to view details of a selected post.
Shows dynamic calculations (e.g., sum of post IDs) using reduce.
Core JavaScript Concepts Covered

1. Array Destructuring
Used to extract data from objects and arrays in a clean, concise manner.
Example: Extracting title and body from post objects.
2. Array Methods
map: Used to render the list of posts.
filter: Applied to filter the posts based on user input in a search box.
reduce: Used to calculate the sum of post IDs.
3. Promises and Async/Await
All API calls are handled using fetch(), which returns Promises.
async/await is used to manage asynchronous data fetching and handling of success and error states.
4. Error Handling
Implemented using try/catch blocks to handle errors during API requests.
5. Component-based Design in React
The application is split into components to handle different pieces of functionality (e.g., list of posts, post details).
Getting Started

Prerequisites
Node.js and npm installed on your machine.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/YOUR-USERNAME/js-react-essentials.git
Navigate to the project directory:
bash
Copy code
cd js-react-essentials
Install the dependencies:
bash
Copy code
npm install
Running the Project
Start the development server:
bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.
Project Usage

View All Posts: The app will automatically fetch and display all posts from the API when loaded.
Filter Posts: You can filter the list of posts by typing a keyword into the filter input field.
View Post Details: Click the "View Details" button next to any post to fetch and display additional information about the post.
Check the Sum of Post IDs: Below the list of posts, the sum of all post IDs is displayed using reduce.
API Reference

This project uses the JSONPlaceholder API, a free fake API for testing and prototyping.

GET /posts: Fetches all posts.
GET /posts/
: Fetches details for a specific post.
Contributing

If you'd like to contribute to this project, feel free to open a pull request or submit issues.

Fork the repository
Create a new branch (git checkout -b feature/new-feature)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Open a Pull Request
License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

JSONPlaceholder for providing a free API for testing purposes.
Inspiration from various JavaScript and React learning resources.


