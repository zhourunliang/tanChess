class Chess extends MyImage{
  constructor(game) {
    // this.game = game
    super(game, 'chess')
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
              // 设置拖拽状态
              enableDrag = true
          }
      })
      game.canvas.addEventListener('mousemove', function(event) {
          var x = event.offsetX
          var y = event.offsetY
          // log(x, y, 'move')
          if (enableDrag) {
              log(x, y, 'drag')
              self.x = x
              self.y = y
          }
      })
      game.canvas.addEventListener('mouseup', function(event) {
          var x = event.offsetX
          var y = event.offsetY
          log(x, y, 'up')
          enableDrag = false
      })
  }
}
