# HASHMAP
This Project Implements a HashMap as instructed in the Odin Project's Curriculum. The Project utilizes the LinkedList Project from the previous lesson to implement this multi-dimensional data structure.

## Details

The HashMap implements a total of 10 member functions(Methods).

The functions are as follows:

* hash(key): This functions takes a key as argument and produces its hash code.

* set(key, value): This function adds a node containing "Value" as its data to the HashMap. If the key already exists, the value of the node is updated with "value" instead.

* get(key): This takes a key as argument and returns the value stored using that key. It returns null if the key isn't found.

* has(key): Takes a key argument and returns true if the key exists in the HashMap. If not, false is returned.

* remove(key): This function takes a key argument and removes the provided key from the HashMap.

* length(): This returns the total count of keys in the HashMap.

* clear(): This function clears all entries in the HashMap.

* keys(): Returns an array of all keys in the HashMap.

* values(): Returns an array of all values in the HashMap.

* entries(): Returns an array of all key-value pairs in the HashMap in the format: [[key, value], [key, value], [key, value]].