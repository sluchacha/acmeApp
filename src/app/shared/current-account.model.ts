import { BankAccount } from "./bank-account.model";

export class CurrentAccount extends BankAccount {
    overdraft_limit:number;

    constructor(payload: Partial<CurrentAccount>){
        super(payload);
        Object.assign(this, payload);
        this.overdraft_limit = 500;
    }

    withdraw(amount:number):boolean{
        if(Math.abs(this.balance - amount) > this.overdraft_limit)
            return false;

        this.balance-=amount;
        return true;
    }

    canWithdrawAmount(amount:number):boolean{
        if(Math.abs(this.balance - amount) > this.overdraft_limit)
            return false;
        return true;
    }

    hasSufficientFunds(): boolean {
        return this.balance > -(this.overdraft_limit);
    }

}
