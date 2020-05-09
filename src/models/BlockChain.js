import { Block } from "./Block";
import { Transaction } from "./Transaction";

export class BlockChain {
    constructor(target, hashFunction, creator) {
        this.target = target
        this.hasFunction = hashFunction
        this.blocks = [this.genesisBlock(creator)]
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

    genesisBlock(creator) {
        let block = new Block(null)
        block.add(new Transaction("0", creator, 10000000))
        block.hash = this.target
        return block
    }
}