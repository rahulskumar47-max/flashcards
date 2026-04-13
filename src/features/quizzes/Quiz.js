import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectQuizzes } from './quizzesSlice';
import { selectCard } from '../cards/cardsSlice';
import { useState } from 'react';

export default function Quiz() {
  const { quizId } = useParams();

  const quizzes = useSelector(selectQuizzes);
  const quiz = quizzes[quizId];

  const [flippedCardId, setFlippedCardId] = useState(null);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <section>
      <h1>{quiz.name}</h1>

      <div>
        {quiz.cardIds.map((id) => (
          <FlipCard
            key={id}
            id={id}
            flipped={flippedCardId === id}
            setFlippedCardId={setFlippedCardId}
          />
        ))}
      </div>
    </section>
  );
}
