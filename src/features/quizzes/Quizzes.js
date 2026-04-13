import { useSelector } from 'react-redux';
import { selectQuizzes } from './quizzesSlice';
import { Link } from 'react-router-dom';

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);

  return (
    <section>
      <h1>Quizzes</h1>

      <div>
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={`/quizzes/${quiz.id}`}>
            <div>
              <h3>{quiz.name}</h3>
              <p>Cards: {quiz.cardIds.length}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
