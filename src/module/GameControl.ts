import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
//游戏控制器
class GameControl {
  snake:Snake;
  food:Food;
  scorePanel: ScorePanel;
  //存储蛇的移动方向
  direction:string = ''
  //判断是否游戏结束
  isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();

  }
  //游戏初始化方法
  init() {
    //绑定键盘按下事件,.bind方法让this指向gameControl实例对象
    document.addEventListener('keydown',this.keyDownHandler.bind(this));
    this.move();


  }
  keyDownHandler(event:KeyboardEvent) {
    this.direction = event.key;
    

  }
  move() {
    //获取蛇的当前坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch(this.direction) {
      case "ArrowUp":
        //向上移动top减少
        Y -= 10;
        break;
      case 'ArrowDown' :
        //向上移动top减少
        Y += 10;
        break;
      case 'ArrowRight' :
          //向右移动top减少
          X += 10;
          break;
      case 'ArrowLeft' :
            //向上移动top减少
            X -= 10;
            break;
    }

    // 判断是否吃到食物
    this.checkEat(X,Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;

    }catch(e:any) {
    alert(e.message);
    this.isLive = false;
      

    }
   
    //蛇还活着就继续活动
    this.isLive && setTimeout(this.move.bind(this),300 - (this.scorePanel.level - 1) * 30);


  }

  checkEat(X:number,Y:number) {

   if(X === this.food.X  && Y === this.food.Y) {
      //食物位置改变
      this.food.change();
      //加分
      this.scorePanel.addScore();
      //蛇的身体增加
      this.snake.addBody();

    }
      
  }

}

export default GameControl;