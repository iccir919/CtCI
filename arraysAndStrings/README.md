# Arrays and Strings

## Hash Tables
A hash table is a data structure that maps keys to values for highly efficient lookup. Here is a simple but common implementation.

1. First, compute the key's hash code. Note that two different keys could have the same hash code.
2. Then, map the hash code to an index in the array. This could be done with something like hash(key) % array_length. Two different hash codes could, of course, map to the same index.
3. At this index, there is a linked list of keys and values. Store they key and value in this index. We must use a linked list because of collisions: you could have two different keys with the same hash code, or two different has codes that map to the same index. 

For more information on implementing a hash table with JavaScript, [click here](https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997).