import './style/index.less';
// import Food from './module/Food';
// import ScorePanel from './module/ScorePanel'

import GameControl from './module/GameControl'

const gc = new GameControl()
 setInterval(() => {
  console.log(gc.direction);
  
 },1000);

// const food = new Food()
// food.change()
// console.log(food.X,food.Y);


