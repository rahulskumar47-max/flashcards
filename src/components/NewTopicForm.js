import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTopic } from '../features/topics/topicsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function NewTopicForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTopic({
        id: uuidv4(),
        name,
        icon,
      })
    );

    setName('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Topic name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Icon URL"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />

      <button type="submit">Add Topic</button>
    </form>
  );
}
