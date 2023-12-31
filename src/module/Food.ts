class Food {
  // 食物对应元素
  element:HTMLElement;
  constructor() {
    //获取页面中food元素
    this.element = document.getElementById('food')!;

  }
  // 获取食物x轴坐标
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物y轴坐标
  get Y() {
    return this.element.offsetTop;
  }

  //修改食物位置
  change() {
    let top = Math.round(Math.random() * 29) *10;
    let left = Math.round(Math.random() * 29) *10;
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}
export default Food;