import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { WithdrawFormComponent } from './withdraw-form.component';

describe('WithdrawFormComponent', () => {
  let component: WithdrawFormComponent;
  let fixture: ComponentFixture<WithdrawFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawFormComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        BsModalRef
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
