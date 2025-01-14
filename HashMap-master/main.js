import HashMap from "./hash.js";

const test = new HashMap();

 test.set("apple", "red");
 test.set("banana", "yellow");
 test.set("carrot", "orange");
 test.set("carrot", "ora");
 test.set("dog", "brown");
 test.set("elephant", "gray");
 test.set("frog", "green");
 test.set("grape", "purple");
 test.set("hat", "black");
 test.set("hat", "me");
 test.set("ice cream", "white");
 test.set("jacket", "blue");
 test.set("kite", "pink");
 test.set("lion", "golden");
 test.set("lion", "golf");
 test.set("lion", "leon");
 test.set("moon", "silver");
 test.set("mon", "lver");


 console.log(test.keys());
 console.log(test.values());
 console.log(test.has("lion"));
 console.log(test.keys());
 // test.remove("dog");
 // test.clear();
 console.log(test.get("hat"));
 console.log(test.entries());
 console.log(test.length());
 console.log(test.buckets.length);

