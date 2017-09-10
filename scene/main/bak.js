class Bullet extends MyImage {
  constructor(game) {
      super(game,'bullet')
      this.setup()
  }
  setup(){
    this.speed = config.bullet_speed
      // this.speed = 2
  }
  update(){
    // this.speed = config.bullet_speed
    this.y -= this.speed
  }
}
class Player extends MyImage {
  constructor(game) {
      super(game, 'player')
      this.setup()
  }
  setup(){
    this.speed = 5
    this.cooldown = 0
  }
  update(){
    this.speed = config.player_speed
    if (this.cooldown > 0) {
      this.cooldown--
    }
  }
  fire(){
      if(this.cooldown == 0){
        this.cooldown = config.fire_cooldown
        var x = this.x + this.w / 2
        var y = this.y
        var b = Bullet.new(this.game)
        b.x = x
        b.y = y
        this.scene.addElement(b)
      }
  }
  moveLeft(){
    this.x -= this.speed
  }
  moveRight(){
    this.x += this.speed
  }
  moveUp(){
    this.y -= this.speed
  }
  moveDown(){
    this.y += this.speed
  }
}

class Enemy extends MyImage {
  constructor(game) {
      var type = randomBetween(0,4)
      var name = 'enemy' + type
      super(game, name)
      this.setup()
  }
  setup(){
    this.speed = randomBetween(2,5)
    this.x = randomBetween(0, 350)
    this.y = -randomBetween(0, 200)
  }
  update(){
    this.y += this.speed
    if (this.y > 600) {
      this.setup()
    }
  }
}

class Cloud extends MyImage {
  constructor(game) {
      super(game, 'cloud')
      this.setup()
  }
  setup(){
    this.speed = 1
    this.x = randomBetween(0, 350)
    this.y = -randomBetween(0, 200)
  }
  update(){
    this.y += this.speed
    if (this.y > 600) {
      this.setup()
    }
  }
  debug(){
    this.speed = config.cloud_speed
  }
}
