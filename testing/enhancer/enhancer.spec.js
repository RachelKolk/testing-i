const {repair, item, success } = require('./enhancer.js');

it('repairs to full durability', () => {

  expect(repair({ durability: 43 }).durability).toBe(100);
});


it('enhancement is successful', () => {
    expect(success({enhancement: 0}).enhancement).toBe(1);
}); 