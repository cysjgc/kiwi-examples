var state = new Kiwi.State('Play');

state.preload = function () {
    this.addImage('blueBar', './assets/img/sliders/blueBar.png');
    this.addImage('blueBox', './assets/img/sliders/blueBox.png');

    this.addImage('greenBar', './assets/img/sliders/greenBar.png');
    this.addImage('greenBox', './assets/img/sliders/greenBox.png');

    this.addImage('pinkBar', './assets/img/sliders/pinkBar.png');
    this.addImage('pinkBox', './assets/img/sliders/pinkBox.png');

    this.addImage('redBar', './assets/img/sliders/redBar.png');
    this.addImage('redBox', './assets/img/sliders/redBox.png');

    this.addImage('yellowBar', 'assets/img/sliders/yellowBar.png');
    this.addImage('yellowBox', 'assets/img/sliders/yellowBox.png');


};

state.create = function () {

this.game.input.onDown.add(this.tweenBall, this);
	this.mouse = this.game.input.mouse;
	this.endX = 535;
	this.startX = 287;
    
    game.stage.color = 'eeeeee';
    

    this.blueBar = new Kiwi.GameObjects.Sprite(this, this.textures.blueBar, -5, 30);
    this.addChild(this.blueBar);

    this.greenBar = new Kiwi.GameObjects.Sprite(this, this.textures.greenBar, -5, 80);
    this.addChild(this.greenBar);

    this.pinkBar = new Kiwi.GameObjects.Sprite(this, this.textures.pinkBar, -5, 130);
    this.addChild(this.pinkBar);

    this.redBar = new Kiwi.GameObjects.Sprite(this, this.textures.redBar, -5, 180);
    this.addChild(this.redBar);


    this.yellowBar = new Kiwi.GameObjects.Sprite(this, this.textures.yellowBar, -5, 230);
    this.addChild(this.yellowBar);




	this.ballSin = new Kiwi.GameObjects.Sprite(this, this.textures.blueBox, this.startX, 25);
	this.addChild(this.ballSin);

	this.ballBounce = new Kiwi.GameObjects.Sprite(this, this.textures.greenBox, this.startX, 75);
	this.addChild(this.ballBounce);

	this.ballLinear = new Kiwi.GameObjects.Sprite(this, this.textures.pinkBox, this.startX, 125);
	this.addChild(this.ballLinear);

	this.ballCubic = new Kiwi.GameObjects.Sprite(this, this.textures.redBox, this.startX, 175);
	this.addChild(this.ballCubic);

	this.ballChain = new Kiwi.GameObjects.Sprite(this, this.textures.yellowBox, this.startX, 225);
	this.addChild(this.ballChain);
};

state.tweenBall = function(){

    // When mouse is click it creates a tween for every bar and then starts them.
    // The only difference is the way the tween is tweened. 

	this.sinX = this.game.tweens.create(this.ballSin);
    this.sinX.to({x: this.mouse.x - 17}, 1000, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true);
    
    this.bounceX = this.game.tweens.create(this.ballBounce);
    this.bounceX.to({x: this.mouse.x - 17}, 1000, Kiwi.Animations.Tweens.Easing.Bounce.Out, false);
    this.bounceX.start();

    this.linearX = this.game.tweens.create(this.ballLinear);
    this.linearX.to({x: this.mouse.x - 17}, 1000, Kiwi.Animations.Tweens.Easing.Linear.Out, true);

    this.cubicX = this.game.tweens.create(this.ballCubic);
    this.cubicX.to({x: this.mouse.x - 17}, 1000, Kiwi.Animations.Tweens.Easing.Cubic.Out, true);

    this.chainTo = this.game.tweens.create(this.ballChain);
    this.chainTo.to({x: this.mouse.x - 17}, 500, Kiwi.Animations.Tweens.Easing.Quartic.Out, false);

    this.chainBack = this.game.tweens.create(this.ballChain);
    this.chainBack.to({x: this.startX - 17}, 1000, Kiwi.Animations.Tweens.Easing.Elastic.Out, false);
    this.chainTo.chain(this.chainBack);
    this.chainTo.start();


}




var gameOptions = {
	width: 768,
	height: 512
};

var game = new Kiwi.Game('game-container', 'Basic-Tweens', state, gameOptions);


