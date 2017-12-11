abstract class Beat {
    protected audio: HTMLAudioElement;
    protected playAudio: Function;
    abstract Play(totalDurationMs: number);

    constructor(soundSrc: string) {
        this.audio = new Audio(soundSrc);
        this.playAudio = this.audio.play.bind(this.audio);

        //document.body.appendChild(this.audio);
    }
}

class BaseBeat extends Beat {
    constructor(soundSrc: string) {
        super(soundSrc);
    }
    
    Play(totalDurationMs: number) {
        this.audio.play();
    }
}

abstract class SubdividedBeat extends Beat {
    protected baseBeat: Beat;
    constructor(baseBeat: Beat, soundSrc: string) {
        super(soundSrc);
        this.baseBeat = baseBeat;
    }
}

class TripletDividedBeat extends SubdividedBeat {
    playSecond: boolean;
    playThird: boolean;
    constructor(baseBeat: Beat, soundSrc: string) {
        super(baseBeat, soundSrc);
    }

    Play(totalDurationMs: number) {
        this.baseBeat.Play(totalDurationMs);
        setTimeout(this.playAudio, totalDurationMs / 3);
        setTimeout(this.playAudio, totalDurationMs / 3 * 2);
    }
}

class PreciceSubdivision extends SubdividedBeat {
    place: number;

    constructor(baseBeat: Beat, soundSrc: string, place: number) {
        super(baseBeat, soundSrc);
        this.place = place;
    }

    Play(totalDurationMs: number) {
        this.baseBeat.Play(totalDurationMs);
        setTimeout(this.playAudio, totalDurationMs * this.place);
    }
}