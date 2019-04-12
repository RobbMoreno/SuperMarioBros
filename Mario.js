class Mario{
	constructor (animation, x, y,w, h){
		this.animation = animation
		this.x         = x
		this.y         = y
		this.w         = w
		this.h         = h
		this.index     = 0
		this.speed     = 0.3
		this.g         = 2
		this.playerY = 100
		this.playerSpeedY =0
		this.playerHeight=50
		this.jumping=false
		this.salto = 15
		this.caida = 10
		this.groundY=562
		this.limite = 500

	}

	draw(){
		image(this.animation[floor(this.index) % 5], this.x, this.y, this.w, this.h)
		this.index += this.speed

	}
	drawInverse(){
		image(this.animation[floor(this.index) % 3], this.x, this.y, this.w, this.h)
		this.index += this.speed
	}

	move(){
		this.x += this.speed
	}

	jump(){
		playerY += playerSpeedY;
		if (playerY + playerHeight > y) {

		    playerY = y - playerHeight;
		    playerSpeedY = 0;
		    jumping = false;
	  	}else {

	    	playerSpeedY ++;
	  	}

	}
	pega(){
		if (this.x - this.w <= 0 || this.x + this.w >= width)
			//noLoop()
			this.speed = -this.speed

	}
	getW(){

		return this.w 
	}

	stop(){
		image(this.animation[floor(this.index) % 5], this.x, this.y, this.w, this.h)

	}
}