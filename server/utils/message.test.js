var expect = require('expect');
var { generateMessage } = require('./message');
describe('generatemessage', () => {
    it('should generate correct message object', () => {
        var from = 'pavan';
        var text = 'Testing module';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message).toInclude({ from, text });
    });
});