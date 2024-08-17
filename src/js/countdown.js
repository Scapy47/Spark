export default class Timer {
    constructor() {
        this.intervalId = null;
        this.isRunning = false;
    }

    start(callback, interval = 1000) {
        if (!this.isRunning) {
            this.callback = callback;
            this.intervalId = setInterval(callback, interval);
            this.isRunning = true;
        }
    }

    stop() {
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.isRunning = false;
        }
    }

    resume() {
        this.start(this.callback);
    }
}