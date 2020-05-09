export class Block {
    constructor(previousHash) {
        this.transactions = []
        this.hash = ""
        this.nonce = 0
        this.previousHash = previousHash
    }

    reduce(finalString, transaction) {
        return [
            finalString,
            transaction.from,
            transaction.to,
            transaction.data.toString(),
            transaction.timestamp.toString()
        ].join()
    }

    convertToString() {
        return this.transactions.reduce(this.reduce)
    }

    generateHash(hashFunction, target) {
        while (!this.hash.startsWith(target)) {
            this.nonce++
            this.hash = hashFunction.hex(this.convertToString() + this.nonce)
        }
    }

    add(transaction) {
        this.transactions.push(transaction)
    }

}