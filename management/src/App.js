import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '뿌앵귄1',
    'birthday' : '910905',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '뿌앵귄2',
    'birthday' : '910905',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '뿌앵귄3',
    'birthday' : '910905',
    'gender' : '남자',
    'job' : '프로그래머'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
       </div>
    );
  }
}

export default App;
