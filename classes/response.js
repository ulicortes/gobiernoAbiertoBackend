class Response {
    #status;
    #return;
    constructor(status, returnData) {
        this.#status = status;
        this.#return = returnData;
    }
    getStatus() {
        return this.#status;
    }
    getReturn() {
        return this.#return;
    }
}

export { Response };