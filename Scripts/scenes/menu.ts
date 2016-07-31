module scenes {
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _ground: objects.Ground;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _ruleButton: objects.Button;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start(): void {
            // Add Ground Background
            this._ground = new objects.Ground("ground");
            this.addChild(this._ground);

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "Running4Money", "60px", "Consolas", "#FDFDFD",
                445, 280, true
            );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button("startButton", 400 , 515, true)
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

             // add the rule button
            // this._ruleButton = new objects.Button("ruleButton", 545, 515, true)
            // this.addChild(this._ruleButton);

            // // Start button event listener
            // this._ruleButton.on("click", this._ruleButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            // scene updates happen here...

        }

        // EVENT HANDLERS ++++++++++++++++
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }

        // EVENT HANDLERS ++++++++++++++++
        private _ruleButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.RULE;
            core.changeScene();
        }
    }
}