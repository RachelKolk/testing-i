module.exports = {
 repair,
 item, 
 success
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
    item.enhancement = 1;
    return item;
}