import { BankAccount } from "./bank-account.model";

export class SavingsAccount extends BankAccount {
    constructor(payload: Partial<SavingsAccount>){
        super(payload);
        Object.assign(this, payload);
    }

}

