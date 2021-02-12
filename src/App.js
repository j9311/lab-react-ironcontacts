import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

console.log(contacts);

function App() {
  const [stateCelebs, setstateCelebs] = useState(contacts.splice(0, 5));
  const [otherCelebs, setotherCelebs] = useState(contacts);
  const ShowFive = () => {
    return stateCelebs.map((eachContact, i) => {
      return (
        <li key={i}>
          {eachContact.name}
          <img src={eachContact.pictureUrl} alt="" />{' '}
          {eachContact.popularity.toFixed(3)}
          <button onClick={deleteThis}>delete</button>
        </li>
      );
    });
  };

  const deleteThis = () => {
    console.log('cheese');
  };

  const addRandom = () => {
    console.log('hello');
    let randomN = Math.floor(Math.random() * otherCelebs.length);
    let tempCelebs = [...stateCelebs];
    let tempAllCelebs = [...otherCelebs];
    tempCelebs.unshift(tempAllCelebs[randomN]);
    tempAllCelebs.splice(randomN, 1);
    setstateCelebs(tempCelebs);
    setotherCelebs(tempAllCelebs);
  };

  const sortByName = () => {
    let newestName = [...stateCelebs];
    newestName.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setstateCelebs(newestName);
  };

  const sortByPop = () => {
    let newCel = [...stateCelebs];
    newCel.sort((a, b) => b.popularity - a.popularity);
    console.log('jkawklerjbfgakjdk');
    setstateCelebs(newCel);
  };

  return (
    <div>
      <div>
        <h1>IRON CONTACTS</h1>
      </div>
      <button onClick={addRandom}>Add Random Actor</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPop}>Sort by Popularity</button>
      {ShowFive()}
    </div>
  );
}

export default App;
