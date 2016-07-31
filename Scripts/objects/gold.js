var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Gold object used in the game
     *
     * @export
     * @class Gold
     * @extends {objects.GameObject}
     */
    var Gold = (function (_super) {
        __extends(Gold, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Gold.
         *
         * @constructor
         * @param {string} imageString
         */
        function Gold(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Gold.prototype._reset = function () {
            this._dx = Math.floor((Math.random() * 3) + 5); // horizontal drift
            console.log("dx:" + this._dx);
            this.y = 575;
            this.x = 890;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Gold.prototype._checkBounds = function () {
            if (this.x <= (0 + (this.width * 0.5))) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Gold.prototype.start = function () {
            this._reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Gold.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this._checkBounds();
        };
        return Gold;
    }(objects.GameObject));
    objects.Gold = Gold;
})(objects || (objects = {}));
//# sourceMappingURL=gold.js.map