class Snake {
  element:HTMLElement;
  head:HTMLElement;
  bodies:HTMLCollection;
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
    if(value < 300) {
      this.head.style.left = value + 'px';

    }
    

  }
  set Y(value:number) {
    if(this.Y === value) {
      return;
    }
    if(value < 300) {
      this.head.style.top = value + 'px';

    }
    
  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend','<div></div>')

  }
}
export default Snake;