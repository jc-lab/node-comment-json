const json = require('../')

const input = `{"foo1": "bar1"}{"foo2":"bar2"}`

let item = {
  next: 0
};
do {
  console.log("Parse at ", item.next)
  item = json.parse(input.substr(item.next));
  console.log("ITEM : ", item)
} while (item.next);
