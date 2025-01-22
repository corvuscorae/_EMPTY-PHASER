class Scene extends Phaser.Scene {
    constructor() {
        super("myScene");   // key that will be used to navigate to this scene from other scenes
    }

    preload(){ 
        // runs once. here is where you'll preload things like assets
    }

    init() {
        // you can get variables passed in from other scene here
    }
    create() {  
        // runs once at start of scene. here is where you will typically set up any scene variables
    }

    update() {
        // runs every tick. here is typically where you will handle things like movements or input
        //      or anything else that requires constant updating
    }

    // you can add additional functions that are called by any of the base phaser scene functions!
}