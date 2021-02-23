import { SavingsAccount } from "./savings-account.model";

describe('Class (model): SavingsAccount', () => {
    let obj:SavingsAccount;

    beforeEach(() => {
        obj = new SavingsAccount({account_number: 5248117462997084, account_type: "savings", balance: 200.00});
    });

    it('should create an instance', () => {
        expect(obj).toBeTruthy();
    });

    describe('#Business Rules', () => {
        it('should ensure one cannot withdraw more than the balance on savings accounts', () => {
            let value = obj.withdraw(300);
            expect(value).toBe(false);
        });
    })

});
