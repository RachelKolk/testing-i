module.exports = {
 repair,
 item,
 success,
 fail,
};

function item(attributes) {
    this.type = attributes.type;
    this.name = attributes.name;
    this.durability = attributes.durability;
    this.enhancement = attributes.enhancement;
}

function repair(item) {
    item.durability = 100;
    return item;
}

function success(item) {
    if (item.enhancement >= 0 && item.enhancement <= 14) {
        item.enhancement = item.enhancement + 1;
    }   
   

    //must be stacked in reverse (biggest to smallest) to work or put in return statements
    if (item.enhancement === 'TET') {
        item.enhancement = 'PEN';
    }
    if (item.enhancement === 'TRI') {
        item.enhancement = 'TET';
    }
    if (item.enhancement === 'DUO') {
        item.enhancement = 'TRI';
    }
    if (item.enhancement === 'PRI') {
        item.enhancement = 'DUO';
    }   else if (item.enhancement === 15) {
            item.enhancement = 'PRI';
        }
    
    return item;
}

function fail(item) {
    if (item.enhancement < 15 && item.durability < 25) {
        return {...item};
    }
    
    const durability =
        item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
    const enhancement = 
        item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

    return {...item, durability, enhancement};
}