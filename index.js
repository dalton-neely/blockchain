const Hashes = require('jshashes')
const {Transaction} = require("./Transaction")
const {Block} = require("./Block")
const sha256 = new Hashes.SHA256

class BlockChain {
    constructor(target, hashFunction, creator) {
        this.target = target
        this.hasFunction = hashFunction
        this.blocks = [Block.genesisBlock(target, hashFunction, creator)]
        this.pending = []
    }

    transaction(transaction) {
        this.pending.push(transaction)
    }

    mine() {
        let block = new Block(this.target, this.blocks[this.blocks.length - 1].hash)
        this.pending.forEach(transaction => block.add(transaction))
        block.generateHash(this.hasFunction, this.target)
        this.blocks.push(block)
        this.pending = []
    }

    balance(id) {
        let sum = 0
        this.blocks.forEach(block => {
            block.transactions.forEach(transaction => {
                if (transaction.to === id) {
                    sum += transaction.data
                }
                if (transaction.from === id) {
                    sum -= transaction.data
                }
            })
        })
        return sum
    }
}

const blockChain = new BlockChain("0000", sha256, "dalton")

const transactionOne = new Transaction("dalton", "taylor", 1000)
const transactionTwo = new Transaction("taylor", "dalton", 500)

blockChain.transaction(transactionOne)
blockChain.transaction(transactionTwo)
blockChain.mine()

console.log(blockChain.balance("dalton"))
blockChain.transaction(new Transaction("dalton", "tom", 406))
blockChain.mine()
console.log(blockChain.balance("dalton"))