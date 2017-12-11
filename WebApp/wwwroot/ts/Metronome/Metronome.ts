class Metronome {
    private repeater: Repeater;
    private beats: Beat[];
    private codename: string;

    constructor(codename: string, repeater: Repeater, beats: Beat[]) {
        this.codename = codename;
        this.repeater = repeater;
        this.beats = beats;
    }

    private current: number = 0;
    private getCurrentBeat(): Beat {
        return this.beats[this.current];
    }

    private AdvanceBeat() {
        if (++this.current >= this.beats.length)
            this.current = 0;
    }

    public Start(bpm: number) {
        var duration = 60 / bpm * 1000;
        this.repeater.Start(
            () => {
                this.getCurrentBeat().Play(duration);
                this.AdvanceBeat();
            }, duration, this.codename);
    }

    public Stop() {
        this.repeater.Stop(this.codename);
    }
}