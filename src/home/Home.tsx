import React from 'react';
import './Home.css';

function Home(){

    return (
        
        <>
            <h1>Home</h1>
        
            <div className="container">
      <div className="content">
       <div className="image card" >
        <a href="a"><img src="./img/Turma1.png"/></a>
         </div>
      </div>
      <div className="content">
        <div className="image card" >
        <a href="a"><img src="./img/Turma2.png"/></a>
          </div>
       </div>
       <div className="content">
        <div className="image card" >
        <a href="a"><img src="./img/Turma3.png"/></a>
          </div>
       </div>
    </div>
        </>
    );
}

export default Home;