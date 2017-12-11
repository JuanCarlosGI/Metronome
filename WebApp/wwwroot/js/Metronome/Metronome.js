var Metronome = /** @class */ (function () {
    function Metronome(codename, repeater, beats) {
        this.current = 0;
        this.codename = codename;
        this.repeater = repeater;
        this.beats = beats;
    }
    Metronome.prototype.getCurrentBeat = function () {
        return this.beats[this.current];
    };
    Metronome.prototype.AdvanceBeat = function () {
        if (++this.current >= this.beats.length)
            this.current = 0;
    };
    Metronome.prototype.Start = function (bpm) {
        var _this = this;
        var duration = 60 / bpm * 1000;
        this.repeater.Start(function () {
            _this.getCurrentBeat().Play(duration);
            _this.AdvanceBeat();
        }, duration, this.codename);
    };
    Metronome.prototype.Stop = function () {
        this.repeater.Stop(this.codename);
    };
    return Metronome;
}());
//# sourceMappingURL=Metronome.js.map