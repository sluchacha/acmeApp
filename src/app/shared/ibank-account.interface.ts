export interface IBankAccount {
    account_number:number;
    account_type:string;
    balance:number;
    withdraw(amount:number):boolean;
    getBalance():number;
    canWithdrawAmount(amount:number):boolean;
    hasSufficientFunds():boolean;
}


