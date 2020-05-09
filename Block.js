const { Transaction } = require("./Transaction")

class Block {
    constructor(previousHash) {
        this.transactions = []
        this.hash = ""
        this.nonce = 0
        this.previousHash = previousHash
    }

    static reduce = (finalString, transaction) => [
        finalString,
        transaction.from,
        transaction.to,
        transaction.data.toString(),
        transaction.timestamp.toString()
    ].join()

    static genesisBlock(target, hashFunction, creator) {
        let block = new Block(null)
        block.add(new Transaction("0", creator, 1000000))
        block.hash = target
        return block
    }

    convertToString() {
        return this.transactions.reduce(Block.reduce)
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

module.exports = { Block }