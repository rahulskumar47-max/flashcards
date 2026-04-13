import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addQuiz } from '../features/quizzes/quizzesSlice';
import { addQuizId, selectTopics } from '../features/topics/topicsSlice';
import { addCard } from '../features/cards/cardsSlice';

export default function NewQuizForm() {
  const dispatch = useDispatch();
  const topics = useSelector(selectTopics);

  const [name, setName] = useState('');
  const [topicId, setTopicId] = useState('');
  const [cards, setCards] = useState([
    { front: '', back: '' },
  ]);

  const handleCardChange = (i, side, value) => {
    const updated = [...cards];
    updated[i][side] = value;
    setCards(updated);
  };

  const addCardField = () => {
    setCards([...cards, { front: '', back: '' }]);
  };

  const removeCardField = (i) => {
    setCards(cards.filter((_, index) => index !== i));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardIds = [];

    // 🃏 Create cards first
    cards.forEach(({ front, back }) => {
      const id = uuidv4();

      dispatch(
        addCard({
          id,
          front,
          back,
        })
      );

      cardIds.push(id);
    });

    // 📚 Create quiz
    const quizId = uuidv4();

    dispatch(
      addQuiz({
        id: quizId,
        name,
        topicId,
        cardIds,
      })
    );

    // 🔗 Link quiz to topic
    dispatch(
      addQuizId({
        id: quizId,
        topicId,
      })
    );

    // reset form
    setName('');
    setTopicId('');
    setCards([{ front: '', back: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Quiz name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={topicId}
        onChange={(e) => setTopicId(e.target.value)}
      >
        <option value="">Select topic</option>
        {Object.values(topics).map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      {cards.map((card, i) => (
        <div key={i}>
          <input
            placeholder="Front"
            value={card.front}
            onChange={(e) =>
              handleCardChange(i, 'front', e.target.value)
            }
          />

          <input
            placeholder="Back"
            value={card.back}
            onChange={(e) =>
              handleCardChange(i, 'back', e.target.value)
            }
          />

          <button type="button" onClick={() => removeCardField(i)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addCardField}>
        Add Card
      </button>

      <button type="submit">Create Quiz</button>
    </form>
  );
}
