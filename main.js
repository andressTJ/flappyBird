// Initialize Phaser, and create a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

// Create our 'main' state that will contain the game
var mainState = {

    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the game's assets  
        game.stage.backgroundColor = '#71c5cf';
        game.load.image('bird, 'assets/bird.png');
    },

    create: function() { 
        // This function is called after the preload function     
        // Here we set up the game, display sprites, etc.  
            game.physics.startSystem(Phaser.Physics.ARCADE);
            this.bird = this.game.add.sprite(100, 245, 'bird');
            game.physics.arcade.enable(this.bird);
            this.bird.body.gravity.y = 1000;
            var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spacekey.onDown.add(this.jump, this);
    },

    update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic   
        if(this.bird.inWorld == false)
            this.restartGamr();
    },
        
    jump: function() {
        this.bird.body.velocity.y = -350;
    },
        
    restartGame: function() {
        game.state.start('main');
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main');  