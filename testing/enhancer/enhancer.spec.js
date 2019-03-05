const {repair, item, success, fail } = require('./enhancer.js');
describe('enhancer', () => {
  describe('repair()', () => {
    it('repairs to full durability', () => {

        expect(repair({ durability: 43 }).durability).toBe(100);
      });
  });


  describe('success', () => {
    it('enhancement is successful', () => {
        expect(success({enhancement: 0}).enhancement).toBe(1);
        expect(success({enhancement: 1}).enhancement).toBe(2);
    });

    it('type can be armor or weapon', () => {
        expect(success({enhancement: 1, type: 'armor'}).enhancement).toBe(2);
        expect(success({enhancement: 4, type: 'weapon'}).enhancement).toBe(5);
    });

    it('maximum enhancement is pen', () => {
        expect(success({enhancement: 'PEN'}).enhancement).toBe('PEN');
    })
    
    it('enhancement level of above 15 - 16 is equal to PRI', () => {
        expect(success({enhancement: 15}).enhancement).toBe('PRI');
    });

    it('enhancement level of above 15 - 17 is equal to DUO', () => {
        expect(success({enhancement: 'PRI'}).enhancement).toBe('DUO');
    })

    it('enhancement level of above 15 - 18 is equal to TRI', () => {
        expect(success({enhancement: 'DUO'}).enhancement).toBe('TRI');
    })
    
    it('enhancement level of above 15 - 19 is equal to TET', () => {
        expect(success({enhancement: 'TRI'}).enhancement).toBe('TET');
    })
    
    it('enhancement level of above 15 - 20 is equal to PEN', () => {
        expect(success({enhancement: 'TET'}).enhancement).toBe('PEN');
    })
    
    
    
}); 





 describe('fail()', () => {
   // The durability decreased by 5 if the item’s enhancement is between 0 and 14.
   it('durability decreases by 5 if enhancement is between 0 and 14', () => {
     // Arrange (setup)
     const item = {
       enhancement: 14,
       durability: 85,
     };

     // Act - execute the SUT
     const actual = fail(item);

     // Assert
     expect(actual.durability).toBe(80);
   });

   it('durability decreases by 10 if enhancement is greater than 14', () => {
     // Assert
     expect(
       fail({
         enhancement: 15,
         durability: 85,
       }).durability
     ).toBe(75);
   });

   it('should not affect item if enhancement is less than 15 and the durability is below 25', () => {
     const item = {
       enhancement: 14,
       durability: 24,
     };

     expect(fail(item)).toEqual(item);
   });

   // enhancement greater than 16 > enhancement decreases by 1
   it('should decrease enhancement if item is enhanced greater than 16', () => {
     const item = { enhancement: 18 };

     const actual = fail(item);

     expect(actual.enhancement).toBe(17);
   });
 });
});