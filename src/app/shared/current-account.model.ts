import { BankAccount } from "./bank-account.model";

export class CurrentAccount extends BankAccount {
    private overdraft_limit:number=0;

    constructor(payload: Partial<CurrentAccount>){
        super(payload);
        Object.assign(this, payload);
        this.overdraft_limit = 500;
    }

    get overdraftLimit() {
        return this.overdraft_limit;
    }

    set overdraftLimit(value:number){
        if(value > 500) value = 500;
        this.overdraft_limit = value;
    }

    withdraw(amount:number):boolean{
        if(Math.abs(this.balance - amount) > this.overdraft_limit)
            return false;

        return super.withdraw(amount);
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
