var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');
describe('generatemessage', () => {
    it('should generate correct message object', () => {
        var from = 'pavan';
        var text = 'Testing module';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'Pavan';
        var latitude = 15;
        var longitude = 20;
        var url = 'https://www.google.com/maps?q=15,20';
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe(from);
        expect(message).toInclude({ from, url })
    });
});