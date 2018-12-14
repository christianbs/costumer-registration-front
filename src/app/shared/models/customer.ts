import { Risk } from '../enums/risk.enum';

export class Customer {
    constructor(
        public id: number,
        public name: string,
        public creditLimit: number,
        public risk: Risk,
        public interestRate: number
    ) { }
}
