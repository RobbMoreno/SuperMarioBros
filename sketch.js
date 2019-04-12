let fondo
const parallaxs     = []
const mario         = []
const mariom        = []
const marioReverse  = []
const marioReverse2 = []
const marioJump     = []
let index
let x               = 250
let y               = 562
let speed           = 0.3
let playerX         = 140;
let playerY         = 250;
let playerWidth     = 50;
let playerHeight    = 50;
let playerSpeedY    = 0;
let jumping         = false
let groundY         = 250;
var speedY          = 1
let bloque          = []
let bloquesImg 
let bloqueX         =700
let marioImg
let bloqueY         = 450
let marioRR
let hitBlock        =false
let bloqueEsc
let m
let bl,bl1, bl2, bl3
let w               =300
let bloqX, bloqY
let recorridoParaFinal = 0
let castlee = []
let castleImg
let flagImg
let castillo
function preload(){

	fondo = loadImage('image/nivel1.png');
	bloquesImg = loadImage('image/blocks/blocks003.png')
	bloquessig = loadImage('image/blocks/blocks25.png')
	bloqueEsc = loadImage('image/blocks/blocks19.png')
	castleImg = loadImage('image/Win/castle.png')
	flagImg = loadImage('image/Win/flag.png')

}
function setup() {
	createCanvas(windowWidth, windowHeight);
	index=0
	//bloque = new block(bloquesImg, bloqueX, 400, 50, 50)

	for(let i = 0; i <2; i++){
		parallaxs.push(new Parallax(fondo, i*width, 0, width, height));
	}
	for(let i = 0 ; i < 5; i++){

		marioImg = loadImage(`image/mario${i+1}.png`)
		mario.push(marioImg)
	}
		
	for(let i = 0; i < 3; i++){
		marioRR=loadImage(`image/Lmario${i+1}.png`)
		marioReverse.push(marioRR)
	}
	for(let i = 0; i<1; i++){
		bl = new block(bloquesImg, bloqueX, bloqueY - 50, w, 50)
		bl1 = new block(bloquesImg, bloqueX + 250, bloqueY - 190, w, 50)
		bl2 =new block(bloquessig, bloqueX += 50, bloqueY -50, 50,50)

		bloque.push(bl)
		bloque.push(bl1)
		bloque.push(bl2)
	}

	for(let i = 0; i<6;i++){
		let bY = 562
		bl3 = new block(bloqueEsc, bloqueX += 130, bY, 50,50)
		bloque.push(bl3)
	}
	//	bloque.push(new block(bloquesImg, bloqueX, bloqueY, 300,50))
	//	bloque.push(new block(bloquessig, bloqueX += 50, bloqueY, 50,50))

	

	//	bloque.push(new block(bloquesImg, bloqueX += 200, bloqueY -= 150, 400,50))

	//	bloque.push(new block(bloquessig, bloqueX += 280, bloqueY, 50,50))
	//et ypos=562
	castillo = new Castle(castleImg,900, 60, 400,600)
	castlee.push(castillo)

	//let fl= new Castle(flagImg, 700, 200, 100, 500)
	//castlee.push(flagImg)

 	m = new Mario(mario, playerX, y, 50, 50)
	mariom.push(m)

	let mmm = new Mario(marioReverse, playerX, y, 50, 50)
	marioReverse2.push(mmm)

	
}


function draw() {
	
	movimientos()
	/*for(let c of castlee)
		c.draw()*/
	
}


function movimientos(){
		
		if (keyIsDown(68)) {
			recorridoParaFinal++
			console.log(recorridoParaFinal)
			for(let p of parallaxs){
				p.draw();
				p.move();
			}
			for(let b of bloque){
				//b.draw();
				//b.move();
				
				if(playerX>bloqY){
        			y=390
        		
        		}
				if((playerX+60 <= b.getX()) || (y+30<=b.getY())){
					
					for(let b of bloque)
						b.draw()
						b.move()
				bloqX = b.getX()
				bloqY = b.getY()
				}else if(playerX+40 > b.getX()){
					for(let p of parallaxs){
					//p.draw();
						p.move();
					}
					for(let b of bloque){
						b.move();
					}
					for(let b of bloque){
						b.draw();
					}
				}
			
			}
			for(let mamamia of mariom){
		
				x+=3
				//console.log("playerX"+x)
				//console.log("bloque"+bloqueX)
				//mamamia.move()
				if (jumping == false){
					mamamia.draw()
				}else
					mamamia.jump()
				/*if (x >= b) {
					mamamia.stop()
				¨*/
				

			//console.log("b"+b)
				/*if (mamamia.pega(bloqueY)) {
					console.log("pega")
				}*/
				
				
			}
			if (recorridoParaFinal >= 1000) {
				for(let c of castlee){
					c.draw()
					c.move()
				}


			}
		
		//image(mario[floor(index % 3)],x, y, 50, 50)
		//index += speed

	}else if (keyIsDown(65)) {

		for(let p of parallaxs){
			p.draw();
			p.inverseMove();
		}
		for(let mammmma of marioReverse2){
			mammmma.drawInverse()
			//mammmma.move()
			mammmma.jump()
		}


		//scale(-1,1)
		//image(marioReverse[floor(index % marioReverse.length)],x, y, 50, 50)
	}else if(keyIsDown(87)){
		for(let mamario of mariom){
			if (jumping == true)
				mamario.jump()
		}

	}
	if (jumping==true) {
		index = 3
		image(mario[index],playerX, playerY + 50, playerWidth, playerHeight)
		//console.log(playerY)
	}
	if(index >= mario.length)
		index = 0
}
function pintaCastillo(){

}
function keyPressed(){

	if (keyCode  == 87){ 
		if (!jumping) {
    		
    		playerSpeedY = -15;

    		jumping = true;

  		}
	}	
}



