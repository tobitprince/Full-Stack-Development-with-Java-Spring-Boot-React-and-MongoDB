# Tobittube

![Tobittube Logo](https://via.placeholder.com/150)

Tobittube is a **Movie Review Application** that allows users to browse movies, watch trailers, and write reviews. It leverages **MongoDB** for the database, **Java and Spring Boot** for the backend, and **React** for the frontend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Browse Movies:** View a list of available movies with details.
- **Watch Trailers:** Watch trailers directly within the app.
- **Write Reviews:** Submit reviews for your favorite movies.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **User-Friendly Interface:** Intuitive navigation and design.

## Technologies Used

### Frontend

- **React:** JavaScript library for building user interfaces.
- **React Router DOM:** Declarative routing for React applications.
- **Bootstrap & React-Bootstrap:** Styling and responsive design components.
- **Material-UI Carousel:** For creating responsive carousels.
- **Axios:** Promise-based HTTP client for the browser.
- **FontAwesome:** Icon library for React.

### Backend

- **Java:** Programming language for backend development.
- **Spring Boot:** Framework for building scalable web applications.
- **MongoDB:** NoSQL database for storing movie and review data.
- **Spring Data MongoDB:** Integration of Spring Data with MongoDB.

## Installation

### Prerequisites

- **Node.js & npm:** [Download and install](https://nodejs.org/)
- **Java JDK:** [Download and install JDK 21](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html)
- **MongoDB:** [Download and install](https://www.mongodb.com/try/download/community)
- **Git:** [Download and install](https://git-scm.com/downloads)

### Backend Setup

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/tobitprince/Full-Stack-Development-with-Java-Spring-Boot-React-and-MongoDB.git
    cd Full-Stack-Development-with-Java-Spring-Boot-React-and-MongoDB/backend
    ```

2. **Configure Environment Variables:**
    - Create a `.env` file in the [resources](http://_vscodecontentref_/0) directory.
    - Add the following variables:
        ```properties
        MONGO_DATABASE=movies_api_db
        MONGO_USER=yourMongoUsername
        MONGO_PASSWORD=yourMongoPassword
        MONGO_CLUSTER=yourMongoCluster
        ```

3. **Update Application Properties:**
    - Ensure `application.properties` references the environment variables:
        ```properties
        spring.application.name=movies
        spring.data.mongodb.database=${MONGO_DATABASE}
        spring.data.mongodb.uri=mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net
        ```

4. **Build and Run the Backend:**
    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1. **Navigate to Frontend Directory:**
    ```bash
    cd ../frontend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
    - Create a `.env` file in the [frontend](http://_vscodecontentref_/1) directory.
    - Add the following variable:
        ```env
        REACT_APP_API_BASE_URL=http://localhost:8080/api/v1
        ```

4. **Create Axios Configuration:**
    - Ensure you have an `axiosConfig.js` file in the `src/api` directory with the following content:
        ```javascript
        import axios from 'axios';

        const api = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        export default api;

5. **Run the Frontend:**
    ```bash
    npm start
    ```

## Usage

1. **Access the Application:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

2. **Browse Movies:**
   - View the carousel of movies on the homepage.

3. **Watch Trailers:**
   - Click the play button on a movie to watch its trailer.

4. **Write Reviews:**
   - Navigate to the Reviews page of a movie to submit your review.

## API Endpoints

### Movies

- **GET /api/v1/movies**
  - Fetch all movies.

- **GET /api/v1/movies/{imdbId}**
  - Fetch a single movie by IMDb ID.

### Reviews

- **POST /api/v1/reviews**
  - Add a new review.
  - **Body:**
    ```json
    {
      "reviewBody": "Your review text",
      "imdbId": "movie-imdb-id"
    }
    ```



## License

This project is licensed under the MIT License.

## Contact

- **Your Name:** [princekiptoo@gmail.com](mailto:princekiptoo@gmail.com)
- **GitHub:** [https://github.com/tobitprince](https://github.com/tobitprince)
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/)

---
