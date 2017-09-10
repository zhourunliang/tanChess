class Chess {
  constructor(game) {
    this.game = game
    var c = MyImage.new(game,'chess')
    c.x = 215
    c.y = 405
    return c
  }
  static new(game){
    return new this(game)
  }

  debug(){

  }
  update(){
  }
  draw(){

  }

  drag(event){
    let enableDrag = false
    let x = event.offsetX
    let y = event.offsetY
    if(event.type='mousedown'){
        log(x, y, event)
        // 检查是否点中了 ball
        if (this.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    }
    if(enableDrag){
        log(x, y, 'drag')
        this.x = x
        this.y = y
    }
    if(event.type='mouseup'){
        log(x, y, 'up')
        enableDrag = false
    }
  }



  hasPoint(x, y) {
    var xIn = x >= c.x && x <= c.x + c.w
    var yIn = y >= c.y && y <= c.y + c.h
    return xIn && yIn
}
}
