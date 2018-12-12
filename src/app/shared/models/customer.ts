import { Risk } from '../enums/risk.enum';

export class Customer {
    constructor(
        public name: string,
        public creditLimit: number,
        public risk: Risk
    ) { }
}
