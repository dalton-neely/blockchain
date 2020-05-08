const Hashes = require('jshashes')
const sha256 = new Hashes.SHA256

class Transaction {
    constructor(from, to, data) {
        this.from = from
        this.to = to
        this.data = data
        this.timestamp = Date.now()
    }
}

class Block {
    constructor() {
        this.transactions = []
        this.hash = ""
    }

    static reduce = (finalString, transaction) => [
        finalString,
        transaction.from,
        transaction.to,
        transaction.data.toString(),
        transaction.timestamp.toString()
    ].join()

    convertToString() {
        return this.transactions.reduce(Block.reduce)
    }

    generateHash(hashFunction) {
        this.hash = hashFunction.hex(this.convertToString())
    }

    add(transaction) {
        this.transactions.push(transaction)
    }


}


const transactionOne = new Transaction("foo", "bar", 1000.00)
const transactionTwo = new Transaction("bar", "foo", 1000.00)
const block = new Block()
block.add(transactionOne)
block.add(transactionTwo)
block.generateHash(sha256)

console.log(block)