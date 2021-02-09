import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankAccount } from 'src/app/shared/bank-account.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrls: ['./withdraw-form.component.css']
})
export class WithdrawFormComponent implements OnInit {

  item:any;
  itemform: FormGroup;
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private fb:FormBuilder, public bsModalRef:BsModalRef) {
    this.itemform = this.fb.group({
      amount: null
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.triggerEvent(this.itemform.value.amount);
    this.onCancel();
  }

  triggerEvent(amount: number) {
    this.event.emit({ data: amount , res:200 });
  }

  onCancel(){
    this.bsModalRef.hide();
  }

}
