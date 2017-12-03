const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should reject non string values',()=>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject strings with spaces',()=>{
        var res = isRealString('   ');
        expect(res).toBe(false);
    });
    it('should allow non-space characters',()=>{
        var res = isRealString('  pavan  ');
        expect(res).toBe(true);
    });
})