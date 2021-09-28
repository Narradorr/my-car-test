import { uuidv4 } from '@/helpers'

export class Todo {
    constructor() {
        this.id = uuidv4();
    }
}