import { CurrentAccount } from './current-account.model';

describe('Class (model): CurrentAccount', () => {
    let obj: CurrentAccount;

    beforeEach(() => {
        obj = new CurrentAccount({});
    });

    it('should create an instance', () => {
        expect(obj).toBeTruthy();
    });

    describe('#Business Rules', () => {
        it('The maximum overdraft limit allowed on current account is R500', () => {
            obj.overdraftLimit = 600;
            expect(obj.overdraftLimit).toBe(500);
        });
    });
});
