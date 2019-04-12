class Castle{
	constructor(img, x, y, w, h){
		this.img   = img
		this.x     = x
		this.y     = y
		this.w     = w
		this.h     = h
		this.speed = -2
	}
	draw() {
		image(this.img, this.x, this.y, this.w, this.h)
	}
	move() {
		this.x += this.speed
		if (this.x <= -this.w)
			this.x = this.w
	}
	inverseMove(){
		this.x -= this.speed
		if (this.x >= this.w)
			this.x = this.w
	}
	getX(){
		return this.x+15
	}
	getY(){
		return this.y
	}
}