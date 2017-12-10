class Metronome {
    private _audio : HTMLAudioElement;

    public Metronome(audioId : string) {
        _audio = <HTMLAudioElement> document.getElementById(audioId);
    }

    public Play() {
        _audio.play();
    }
}