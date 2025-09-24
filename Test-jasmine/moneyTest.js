import { moneyConversion } from "../scripts/utils/money.js";

describe('test suite: formatCurrency',()=>{
    it('converts cents into dollar',()=>{
        expect(moneyConversion(2095)).toEqual('20.95');
    });

    it('Work with zero',()=>{
        expect(moneyConversion(0)).toEqual('0.00');
    });

    it('checking the round off',()=>{
        expect(moneyConversion(2000.5)).toEqual('20.01');
    });
})