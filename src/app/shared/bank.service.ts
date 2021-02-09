import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankAccount } from './bank-account.model';
import { CurrentAccount } from './current-account.model';
import { SavingsAccount } from './savings-account.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  list:BankAccount[] = [];
  readonly baseUrl = 'http://localhost:8080/api/accounts';// The first part of the url including the port would be placed in a configuration file in a live environment

  getAccounts(){
    this.http.get<BankAccount[]>(`${this.baseUrl}`)
    .toPromise()
    .then(res=> this.list = res.map(item=> {
      if(item.account_type === 'cheque'){
        return new CurrentAccount(item);
      }else{
        return new SavingsAccount(item);
      }
    }))
  }

  withdraw(ba:BankAccount, amount:number):Observable<boolean>{
    //In a real world scenario their would be an api call to the server to perform withdrawal requests
    return of(ba.withdraw(amount));
  }
}
