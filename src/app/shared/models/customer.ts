import { Risk } from '../enums/risk.enum';

export class Customer {
    constructor(
        private name: string,
        private creditLimit: number,
        private risk: Risk
    ) { }
}
