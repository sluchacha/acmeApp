import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BankAccount } from '../shared/bank-account.model';
import { CurrentAccount } from '../shared/current-account.model';
import { SavingsAccount } from '../shared/savings-account.model';

import { AccountDetailsComponent } from './account-details.component';

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsComponent ],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        ModalModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Table Row Items Tests',() => {
    it('should show no row item when no accounts are available', () => {
      const rowItem = fixture.debugElement.query(By.css('tbody')).queryAll(By.css('tr'));
      expect(rowItem.length).toBe(0);
    });
  
    it('should show one row item when I have one account', () => {
      component.service.list = <BankAccount[]>[new CurrentAccount({account_number: 6331103626640816, account_type: "cheque", balance: -296.65})];
      fixture.detectChanges();
      const rowItem = fixture.debugElement.query(By.css('tbody')).queryAll(By.css('tr'));
      expect(rowItem.length).toBe(1);
    });
  
    it('should show 10 row items when I have 10 accounts', () => {
      const accounts:BankAccount[] = [];
      for(let i=0; i < 5; i++){
        accounts.push(new CurrentAccount({account_number:i + 6331103626640816, account_type:'cheque', balance:283 * i}));
        accounts.push(new SavingsAccount({account_number:i + 5248117462997084, account_type:'savings', balance: 126 * i}));
      }
      component.service.list = accounts;
      fixture.detectChanges();
      const rowItem = fixture.debugElement.query(By.css('tbody')).queryAll(By.css('tr'));
      expect(rowItem.length).toBe(10);
    });
  });
  

  describe('#Business Rules', ()=>{

    it('should display alert(‘Success’) on withdraw button click', waitForAsync(()=> {
      component.service.list = <BankAccount[]>[
        new SavingsAccount({account_number: 5248117462997084, account_type: "savings", balance: 2000.00}),
      ];
      fixture.detectChanges();
      spyOn(component,'withdraw');
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      const btn:HTMLButtonElement = buttons[0].nativeElement;
      btn.click();
      expect(component.withdraw).toHaveBeenCalledTimes(1);
    }));

    it('should display inactive withdraw button e.g. saving account equals -R20.00', ()=> {
      component.service.list = <BankAccount[]>[
        new SavingsAccount({account_number: 5248117462997084, account_type: "savings", balance: -20.00}),
      ];
      fixture.detectChanges();
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      const btn:HTMLButtonElement = buttons[0].nativeElement;
      expect(btn.disabled).toBeTruthy();    
    });

    it('should calculate the balance for all accounts', () => {
      component.service.list = <BankAccount[]>[
        new CurrentAccount({account_number: 6331103626640816, account_type: "cheque", balance: -296.65}),
        new SavingsAccount({account_number: 5248117462997084, account_type: "savings", balance: -20.00}),
      ];
      fixture.detectChanges();
      const rowItem = fixture.debugElement.queryAll(By.css('tr'));
      const lastIndex = rowItem.length-1;
      const col = rowItem[lastIndex].queryAll(By.css('td'));
      const bal: HTMLTableColElement = col[1].nativeNode;
      expect(bal.textContent).toEqual('-ZAR 316.65');
    });

  });
  

});
