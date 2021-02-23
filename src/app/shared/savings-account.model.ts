import { BankAccount } from "./bank-account.model";

export class SavingsAccount extends BankAccount {
    constructor(payload: Partial<SavingsAccount>){
        super(payload);
        Object.assign(this, payload);
    }

    withdraw(amount:number):boolean{
        if(amount > this.balance)
            return false;

        this.balance-=amount;
        return super.withdraw(amount);
    }

}

