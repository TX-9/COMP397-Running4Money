module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _ground: objects.Ground;
        private _gold: objects.Gold[];
        private _player: objects.Player;
        private _dung: objects.Dung[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _engineSound: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        /**
         * 
         */
        public Start(): void {
            // ground object
            this._ground = new objects.Ground("ground");
            this.addChild(this._ground);

            
            // gold array
            this._gold = new Array<objects.Gold>();
            for (let count = 0; count < 2; count++) {
                this._gold.push(new objects.Gold("gold"));
                this.addChild(this._gold[count]);
            }

            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;

            // dung array
            this._dung = new Array<objects.Dung>();
            for (let count = 0; count < 3; count++) {
                this._dung.push(new objects.Dung("dung"));
                this.addChild(this._dung[count]);
            }

            // include a collision managers
            this._collision = new managers.Collision();

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._ground.update();
           
            this._player.update();
            

            // update each dung
            this._gold.forEach(gold => {
                 gold.update();
                this._collision.check(this._player, gold);
            });

            // update each dung
            this._dung.forEach(dung => {
                dung.update();
                this._collision.check(this._player, dung);
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}