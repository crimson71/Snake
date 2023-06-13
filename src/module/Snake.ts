
class Snake {
  element:HTMLElement;
  head:HTMLElement;
  bodies:HTMLCollection ;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
    
  }
  get X() {   
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
    
  }
  set X(value:number) {
    if(this.X === value) {
      return;
    }
    if( value < 0|| value > 290) {
      throw new Error('蛇死了');

    }

    //发生掉头的情况
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if(value > this.X) {
        //蛇向右走的情况下发生掉头，继续向右走
        value = this.X - 10;
      }else {
        //向左的走情况
        value = this.X + 10;
      }
    }
    this.head.style.left = value + 'px';
    this.moveBody();
    this.checkHeadBody();
    

  }
  set Y(value:number) {
    if(this.Y === value) {
      return;
    }
    if( value < 0|| value > 290) {
      throw new Error('蛇死了');
 
     }
      //发生掉头的情况
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if(value > this.Y) {
      
        value = this.Y - 10;
      }else {
       
        value = this.Y + 10;
      }
    }
    
      this.head.style.top = value + 'px';
      this.moveBody();
      this.checkHeadBody();

    
  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend','<div></div>')

  }

  //身体的移动
  moveBody() {
    //从最后一节身体开始，当前身体的位置等于前一节身体的位置,第0节是蛇的头部
    for(let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }

  }
  //检测蛇头是否与身体相碰
  checkHeadBody() {
    //蛇头坐标是否与身体坐标相重叠
    for(let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了！');

      }

    }
    
  }
}
export default Snake;