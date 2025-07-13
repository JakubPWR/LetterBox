# You can check the working site here
https://letterboxfront.netlify.app


https://github.com/user-attachments/assets/14bc2020-6332-4e87-a7b5-42cb6ec28f8a


# 🎬 LetterBox – Movie Recommendation App

**LetterBox** is a movie recommendation application that suggests similar films based on a selected title. The project was developed primarily as an algorithmic experiment, with the frontend built mostly for fun and demonstration purposes.

---

## 📌 Technologies Used

- **Backend**:
  - Java (Spring Boot)
  - TypeScript (auxiliary services and logic)
- **Frontend**:
  - Angular

---

## 🧠 Recommendation Algorithm

The core of the application is a custom-built recommendation algorithm implemented in Java (`RecommendationServiceImpl` class). It combines multiple heuristic features and cosine similarity to score and rank similar movies.

### 🔍 How It Works

1. **Title Lookup**  
   The system searches for the base movie based on the given title (case-insensitive, partial matches allowed).

2. **Fetching All Movies**  
   All movies from the database are fetched asynchronously.

3. **Similarity Scoring**  
   Each movie is scored based on a combination of:
   - **Genre overlap**: Shared genres add to the score.
   - **Year difference**: Smaller difference in release year increases the score.
   - **Same director**: Adds a bonus.
   - **Shared cast members**: Up to 4 top-billed actors compared; each match increases the score.
   - **IMDB rating**: Higher ratings contribute positively.
   - **Textual similarity**: Cosine similarity is computed using word frequency vectors from the plot overviews.

4. **Ranking and Filtering**  
   Movies are ranked by their combined heuristic and cosine similarity score. The top results (based on a specified limit) are returned as recommendations.

### 📊 Example Scoring Logic

| Feature                | Score Contribution     |
|------------------------|------------------------|
| Matching genre         | +1.0 per genre         |
| Same release year      | +0.5                   |
| Within 3 years         | +0.25                  |
| Same director          | +0.5                   |
| Shared actor           | +0.25 per match        |
| IMDB rating ≥ 8.0      | +1.0                   |
| IMDB rating 7.0 - 7.9  | +0.5                   |
| Cosine similarity      | Added as-is            |

---
## 🎯 Purpose

The backend and algorithm were the primary focus of this project, aiming to experiment with hybrid content-based recommendation techniques. The Angular frontend was created mainly for visualization and exploration of the algorithm’s results in a user-friendly interface.

---

## 🛠 Future Improvements

- Incorporate collaborative filtering or hybrid models
- Use NLP for better understanding of movie plots
- Add pagination and user history in the frontend
- Improve performance for large datasets


## 🚀 Running the App

**Backend and frontend run independently.**

### Backend (Spring Boot)

```bash
./mvnw spring-boot:run
```

### Frontend
cd frontend
npm install
ng serve

###Change csv file path
cd LetterBox/src/main/resources
open application.properties
change csv.file.path to current location of imdb_top_1000.csv ( it should be in resources/data)


