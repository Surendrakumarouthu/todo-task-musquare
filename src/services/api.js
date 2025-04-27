import axios from 'axios';

export async function fetchTasks() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(response.data)
  return response.data;
}
