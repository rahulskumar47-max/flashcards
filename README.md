Flashcards App (Redux Toolkit)

A React-based flashcards application that helps users learn through interactive quizzes. Users can create topics, build quizzes, and study using flip-style flashcards.

Features
Create and manage different study topics
Build quizzes under each topic
Add multiple flashcards to each quiz
Flip cards to reveal answers and test knowledge
Smooth navigation using React Router
Centralized state management with Redux Toolkit
Tech Stack
React
Redux Toolkit
React Redux
React Router DOM
UUID
How It Works

The app is built around a normalized Redux state structure to keep data organized and scalable.

Topics store references to quizzes via quizIds
Quizzes store references to cards via cardIds
Cards store the actual flashcard content (front and back)

This structure makes it easy to manage relationships between topics, quizzes, and cards without duplication.

State Structure

```js
{
  topics: {
    topics: {
      [id]: {
        id,
        name,
        icon,
        quizIds: []
      }
    }
  },
  quizzes: {
    quizzes: {
      [id]: {
        id,
        name,
        topicId,
        cardIds: []
      }
    }
  },
  cards: {
    cards: {
      [id]: {
        id,
        front,
        back
      }
    }
  }
}
