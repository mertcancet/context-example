import { useContext } from 'react';
import { TodosContext } from 'context/TodosContext';

const useTodos = () => useContext(TodosContext);

export default useTodos;
