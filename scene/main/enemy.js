class Enemy extends MyImage{
  constructor(game) {
    super(game, 'enemy')
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
    let xIn = x >= this.x && x <= this.x + this.w
    let yIn = y >= this.y && y <= this.y + this.h
    return xIn && yIn
  }
  drag(game){
    // mouse event
      log('enemy')
      let self = this
      let enableDrag = false
      game.canvas.addEventListener('mousedown', function(event) {
          let x = event.offsetX
          let y = event.offsetY
          log('enemy',x, y, event)
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
          let x = event.offsetX
          let y = event.offsetY
          // log(x, y, 'move')
          if (enableDrag) {
              // log(x, y, 'drag')
              self.x = x - (self.w / 2)
              self.y = y - (self.h / 2)
          }
      })
      game.canvas.addEventListener('mouseup', function(event) {
          let x = event.offsetX
          let y = event.offsetY
          log('enemy',x, y, 'up')
          // self.fired = true
          enableDrag = false
          self.speedVector.x2 = x
          self.speedVector.y2 = y
      })
  }
  shot(speedX,speedY){
    let self = this
    if (self.fired) {
        if((self.speedX == 0) && (self.speedY == 0) ){
          self.speedX = speedX
          self.speedY = speedY
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
  rebound(){
    log('rebound')
    let self = this
    self.speedX *= -1
    self.speedY *= -1
  }


}
