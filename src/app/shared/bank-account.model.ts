import { IBankAccount } from "./ibank-account.interface";

export class BankAccount implements IBankAccount {
    account_number:number = 0;
    account_type:string = '';
    balance:number = 0;

    constructor(payload: Partial<BankAccount>){}
        
    withdraw(amount:number):boolean{
        if(amount > this.balance)
            return false;

        this.balance-=amount;
        return true;
    }

    getBalance():number{
        return this.balance;
    }

    canWithdrawAmount(amount:number):boolean{
        if(amount > this.balance)
            return false;
        return true;
    }
    
    hasSufficientFunds(): boolean {
        if(Math.round(this.balance) > 0)
            return true;
        return false;
    }

}
