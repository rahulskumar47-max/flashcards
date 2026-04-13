# 🧠 Flashcards App (Redux Toolkit)

A fully interactive flashcards web app built with **React** and **Redux Toolkit**, allowing users to create topics, quizzes, and flashcards, then test themselves using flip-style cards.

---



---

## ✨ Features

- Create and manage **topics**
- Build quizzes under each topic
- Add multiple flashcards per quiz
- Flip cards to reveal answers
- Dynamic routing with React Router
- Centralized state management using Redux Toolkit

---

## 🧱 Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router DOM
- UUID

---

## 🧠 How It Works

The app uses a normalized Redux state structure:

- **Topics** contain `quizIds`
- **Quizzes** contain `cardIds`
- **Cards** store front/back content

Everything is connected using unique IDs.

---

## 📦 State Structure

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
