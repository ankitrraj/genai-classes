import {get_encoding} from 'tiktoken'
// tokenizattion

const sherwithencode  = get_encoding("gpt2")

const encode = sherwithencode.encode("yogesh maderchod hai ");

const decode = sherwithencode.decode(encode)

console.log(encode);
console.log(new TextDecoder().decode(decode));

