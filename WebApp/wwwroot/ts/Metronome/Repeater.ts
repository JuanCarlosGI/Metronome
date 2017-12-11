interface Repeater {
    Start(task: Function, ms: number, code: string);
    Stop(code: string);
}

class IntervalRepeater implements Repeater {
    private map: Object;

    constructor() {
        this.map = {};
    }

    Start(task: Function, ms: number, code: string) {
        if (this.map[code]) {
            console.log("IntervalRepeater: Code " + code + " is already in use.");
            return;
        }

        this.map[code] = setInterval(task, ms);
    }

    Stop(code: string) {
        if (!this.map[code]) {
            console.log("IntervalRepeater: Code " + code + " is not being used.");
            return;
        }
        
        clearInterval(this.map[code]);
        delete this.map[code];
    }

}