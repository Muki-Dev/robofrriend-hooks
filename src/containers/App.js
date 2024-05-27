import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { useEffect, useState } from 'react';

function App() {
  const [robots,setRobots] = useState([]);
  const [searchField,setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => setRobots(users))
  },[]);

  const onSearchChange = (event) => {
      setSearchField(event.target.value);
  }
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  })
  return (
    
    <div className='tc'>
       <h1 className='f1'>Robofriend</h1>
       <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
