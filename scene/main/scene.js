class Scene extends MyScene {
  constructor(game) {
      super(game)
      // bg
      var bg = MyImage.new(game,'bg')
      this.addElement(bg)
      // chess
      this.chess = Chess.new(game)
      // log(this.chess)
      this.addElement(this.chess)

      // //加入水管
      // this.pipe = Pipes.new(game)
      // this.addElement(this.pipe)
      // //循环移动地面
      // this.grounds = []
      // for (var i = 0; i < 30; i++) {
      //     var g = MyImage.new(game,'ground')
      //     g.x = i * 19
      //     g.y = 400
      //     this.addElement(g)
      //     this.grounds.push(g)
      // }
      // this.skipCount = 4
      // //bird
      // this.birdSpeed = 2
      // var b = MyAnimation.new(game)
      // b.x = 100
      // b.y = 200
      // this.bird = b
      // this.addElement(b)
      this.setupInputs()
  }
  debug(){
    // this.birdSpeed = config.bird_speed.value
  }
  update(){
    super.update()
    // //地面移动
    // this.skipCount--
    // var offset = -5
    // if (this.skipCount == 0) {
    //     this.skipCount = 4
    //     offset = 15
    // }
    // for (var i = 0; i < 30; i++) {
    //     var g = this.grounds[i]
    //     g.x += offset
    // }
  }
  setupInputs(){
    var self = this
    var c = this.chess
    this.game.registerAction('mouse',function(event) {
      // log('event',event)
      log(c)
      // c.drag(event)
    })
    // this.game.registerAction('d',function(keyStatus) {
    //   b.move(self.birdSpeed, keyStatus)
    // })
    // this.game.registerAction('j',function(keyStatus) {
    //   b.jump()
    // })
  }
}
