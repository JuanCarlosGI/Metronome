var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beat = /** @class */ (function () {
    function Beat(soundSrc) {
        this.audio = new Audio(soundSrc);
        this.playAudio = this.audio.play.bind(this.audio);
        //document.body.appendChild(this.audio);
    }
    return Beat;
}());
var BaseBeat = /** @class */ (function (_super) {
    __extends(BaseBeat, _super);
    function BaseBeat(soundSrc) {
        return _super.call(this, soundSrc) || this;
    }
    BaseBeat.prototype.Play = function (totalDurationMs) {
        this.audio.play();
    };
    return BaseBeat;
}(Beat));
var SubdividedBeat = /** @class */ (function (_super) {
    __extends(SubdividedBeat, _super);
    function SubdividedBeat(baseBeat, soundSrc) {
        var _this = _super.call(this, soundSrc) || this;
        _this.baseBeat = baseBeat;
        return _this;
    }
    return SubdividedBeat;
}(Beat));
var TripletDividedBeat = /** @class */ (function (_super) {
    __extends(TripletDividedBeat, _super);
    function TripletDividedBeat(baseBeat, soundSrc) {
        return _super.call(this, baseBeat, soundSrc) || this;
    }
    TripletDividedBeat.prototype.Play = function (totalDurationMs) {
        this.baseBeat.Play(totalDurationMs);
        setTimeout(this.playAudio, totalDurationMs / 3);
        setTimeout(this.playAudio, totalDurationMs / 3 * 2);
    };
    return TripletDividedBeat;
}(SubdividedBeat));
var PreciceSubdivision = /** @class */ (function (_super) {
    __extends(PreciceSubdivision, _super);
    function PreciceSubdivision(baseBeat, soundSrc, place) {
        var _this = _super.call(this, baseBeat, soundSrc) || this;
        _this.place = place;
        return _this;
    }
    PreciceSubdivision.prototype.Play = function (totalDurationMs) {
        this.baseBeat.Play(totalDurationMs);
        setTimeout(this.playAudio, totalDurationMs * this.place);
    };
    return PreciceSubdivision;
}(SubdividedBeat));
//# sourceMappingURL=Beat.js.map