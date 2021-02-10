import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BankService } from '../shared/bank.service';
import { BankAccount } from '../shared/bank-account.model';
import { WithdrawFormComponent } from './withdraw-form/withdraw-form.component';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  bsModalRef:BsModalRef = new BsModalRef();

  constructor(public service:BankService, private toastr:ToastrService, private modalService:BsModalService){}

  ngOnInit(): void {
    this.service.getAccounts();
  }

  withdraw(ba:BankAccount){
    const initialState = {
      item: Object.assign({},ba), //Make a copy
      class: 'modal-md'
    };

    this.bsModalRef = this.modalService.show(WithdrawFormComponent, {initialState});

    this.bsModalRef.content.event.subscribe((res:any)=>{
      let amount:number = res.data;
      if(!ba.canWithdrawAmount(amount))
        this.toastr.info('Insufficient funds to withdraw','Account Withrawal');
      else
        this.service.withdraw(ba, amount).subscribe(
          res =>{
            if(res){
              //Simulate that
              this.toastr.success('Successful withdrawal','Account Withrawal');
            }else{
              this.toastr.info('Please try again', 'Account Withdrawal');
            }
          },
          error => this.toastr.error(error.toString(),'Error Withdrawing Funds')
          )
        ;
    });

    
      
  }

  total():number{
    let accounts:BankAccount[] = this.service.list;

    let totalAmount:number = 0;
    for(let i=0;i<accounts.length;i++){
      let x:number = Number(accounts[i].getBalance());// parseFloat(accounts[i].getBalance().toString());
      totalAmount += x;
    }
    return totalAmount;
  }

}
