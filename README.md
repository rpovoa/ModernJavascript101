# **React JavaScript Essentials Demo**

## **Project Overview**

This project is a React application that demonstrates essential JavaScript concepts that are important to master before diving into React. The app fetches real data from the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and provides examples of core JavaScript concepts such as:

- **Array Destructuring**
- **Array Methods** (`filter`, `map`, and `reduce`)
- **Promises** and **Async/Await**
- **API Fetching** with error handling
- **Component-based design** in React

The application displays a list of posts, allows users to filter the list by title, and fetches additional details about a post when selected.

---


---

## **Live Features**

- Fetches posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts/).
- Displays a list of posts with a filter input to search posts by title.
- Allows users to view details of a selected post.
- Shows dynamic calculations (e.g., sum of post IDs) using `reduce`.

---

## **Core JavaScript Concepts Covered**

### 1. **Array Destructuring**
   - Used to extract data from objects and arrays in a clean, concise manner.
   - Example: Extracting `title` and `body` from post objects.

### 2. **Array Methods**
   - **`map`**: Used to render the list of posts.
   - **`filter`**: Applied to filter the posts based on user input in a search box.
   - **`reduce`**: Used to calculate the sum of post IDs.

### 3. **Promises and Async/Await**
   - All API calls are handled using `fetch()`, which returns Promises.
   - `async/await` is used to manage asynchronous data fetching and handling of success and error states.

### 4. **Error Handling**
   - Implemented using `try/catch` blocks to handle errors during API requests.

### 5. **Component-based Design in React**
   - The application is split into components to handle different pieces of functionality (e.g., list of posts, post details).

---



