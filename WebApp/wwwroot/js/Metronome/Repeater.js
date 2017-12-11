var IntervalRepeater = /** @class */ (function () {
    function IntervalRepeater() {
        this.map = {};
    }
    IntervalRepeater.prototype.Start = function (task, ms, code) {
        if (this.map[code]) {
            console.log("IntervalRepeater: Code " + code + " is already in use.");
            return;
        }
        this.map[code] = setInterval(task, ms);
    };
    IntervalRepeater.prototype.Stop = function (code) {
        if (!this.map[code]) {
            console.log("IntervalRepeater: Code " + code + " is not being used.");
            return;
        }
        clearInterval(this.map[code]);
        delete this.map[code];
    };
    return IntervalRepeater;
}());
//# sourceMappingURL=Repeater.js.map