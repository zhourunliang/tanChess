class Chess extends MyImage{
  constructor(game) {
    super(game, 'chess')
    this.game = game
    this.speedX = 0
    this.speedY = 0
    this.fired = false
    this.speedVector = {
      x1:0,
      y1:0,
      x2:0,
      y2:0,
    }
    // var c = MyImage.new(game,'chess')
    // this.c = c
    // return c
  }
  static new(game){
    return new this(game)
  }

  debug(){

  }
  update(){
    this.shot()
  }
  hasPoint(x, y) {
    var xIn = x >= this.x && x <= this.x + this.w
    var yIn = y >= this.y && y <= this.y + this.h
    return xIn && yIn
  }
  drag(game){
    // mouse event
      self = this
      var enableDrag = false
      game.canvas.addEventListener('mousedown', function(event) {
          var x = event.offsetX
          var y = event.offsetY
          log(x, y, event)
          // 检查是否点中了 ball
          if (self.hasPoint(x, y)) {
              self.fired = false
              // 设置拖拽状态
              enableDrag = true
              self.speedVector.x1 = x
              self.speedVector.y1 = y
          }
      })
      game.canvas.addEventListener('mousemove', function(event) {
          var x = event.offsetX
          var y = event.offsetY
          // log(x, y, 'move')
          if (enableDrag) {
              // log(x, y, 'drag')
              self.x = x - (self.w / 2)
              self.y = y - (self.h / 2)
              self.drawArc(self.speedVector.x1,self.speedVector.y1,self.x,self.y)
          }
      })
      game.canvas.addEventListener('mouseup', function(event) {
          var x = event.offsetX
          var y = event.offsetY
          log(x, y, 'up')
          self.fired = true
          enableDrag = false
          self.speedVector.x2 = x
          self.speedVector.y2 = y
      })
  }
  shot(){
    self = this
    if (self.fired) {
        if((self.speedX == 0) && (self.speedY == 0) ){
          self.speedX = (self.speedVector.x1 - self.speedVector.x2)/10
          self.speedY = (self.speedVector.y1 - self.speedVector.y2)/10
          log('speedX',self.speedX)
          log('speedY',self.speedY)
        }
        // log('move')
        if (self.x < 0 || self.x > 480 - self.w) {
            self.speedX = -self.speedX
        }
        if (self.y < 0 || self.y > 853 - self.h) {
            self.speedY = -self.speedY
        }
        // move
        // log('speedX',self.speedX)
        // log('speedY',self.speedY)
        self.x += self.speedX
        self.y += self.speedY
    }
  }
  drawArc(x1,y1,x2,y2){
    //求中点
    let x=(x2-x1)/2+x1
    let y=(y2-y1)/2+y1
    var deg=Math.atan((x2-x1)/(y2-y1))
    log('x',x,'y',y,'deg',deg)
    let context =this.game.context
    context.beginPath();
    context.strokeStyle = "yellow";
    let circle = {
        x : x,    //圆心的x轴坐标值
        y : y,    //圆心的y轴坐标值
        r : 50      //圆的半径
    };
    //沿着坐标点(100,100)为圆心、半径为50px的圆的逆时针方向绘制弧线
    context.arc(circle.x, circle.y, circle.r, deg, Math.PI);
    //按照指定的路径绘制弧线
    context.stroke();
  }
}
