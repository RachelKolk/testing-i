const {repair, item, success, fail } = require('./enhancer.js');

it('repairs to full durability', () => {

  expect(repair({ durability: 43 }).durability).toBe(100);
});


it('enhancement is successful', () => {
    expect(success({enhancement: 0}).enhancement).toBe(1);
    expect(success({enhancement: 1}).enhancement).toBe(2);
    expect(success({enhancement: 1, type: 'armor'}).enhancement).toBe(2);
    expect(success({enhancement: 'PEN'}).enhancement).toBe('PEN');
    expect(success({enhancement: 'PRI'}).enhancement).toBe('DUO');
    expect(success({enhancement: 'DUO'}).enhancement).toBe('TRI');
    expect(success({enhancement: 'TRI'}).enhancement).toBe('TET');
    expect(success({enhancement: 'TET'}).enhancement).toBe('PEN');
    expect(success({enhancement: 15}).enhancement).toBe('PRI');
}); 


