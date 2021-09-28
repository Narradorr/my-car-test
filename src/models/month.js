import { uuidv4 } from '@/helpers'

export class Month {
    constructor(name, order) {
        this.name = name;
        this.monthNumber = order;
        this.id = uuidv4();
        this.todos = [];
    }
}