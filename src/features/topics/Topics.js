import { useSelector } from 'react-redux';
import { selectTopics } from './topicsSlice';
import { Link } from 'react-router-dom';

export default function Topics() {
  const topics = useSelector(selectTopics);

  return (
    <section>
      <h1>Topics</h1>

      <div>
        {Object.values(topics).map((topic) => (
          <Link key={topic.id} to={`/topics/${topic.id}`}>
            <div>
              <h3>{topic.name}</h3>
              <img src={topic.icon} alt={topic.name} width="50" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
