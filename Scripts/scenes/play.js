var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        /**
         *
         */
        Play.prototype.Start = function () {
            // ground object
            this._ground = new objects.Ground("ground");
            this.addChild(this._ground);
            // gold array
            this._gold = new Array();
            for (var count = 0; count < 2; count++) {
                this._gold.push(new objects.Gold("gold"));
                this.addChild(this._gold[count]);
            }
            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;
            // dung array
            this._dung = new Array();
            for (var count = 0; count < 3; count++) {
                this._dung.push(new objects.Dung("dung"));
                this.addChild(this._dung[count]);
            }
            // include a collision managers
            this._collision = new managers.Collision();
            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FB791A", 230, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#1AFBF4", 500, 5, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._ground.update();
            this._player.update();
            // update each dung
            this._gold.forEach(function (gold) {
                gold.update();
                _this._collision.check(_this._player, gold);
            });
            // update each dung
            this._dung.forEach(function (dung) {
                dung.update();
                _this._collision.check(_this._player, dung);
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map