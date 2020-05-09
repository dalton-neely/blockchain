class Transaction {
    constructor(from, to, data) {
        this.from = from
        this.to = to
        this.data = data
        this.timestamp = Date.now()
    }
}

module.exports = { Transaction }