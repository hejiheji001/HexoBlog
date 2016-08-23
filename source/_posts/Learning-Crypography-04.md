title: "Learning Crypography 04"
date: 2016-08-19 19:09:51
tags: [Computer_Science,Cryptography]
---
#VI. Symmetric Ciphers: Block Cipher

Symmetric cipher is the oldest and best-known technique. A secret key, which can be a number, a word, or just a string of random letters, is applied to the text of a message to change the content in a particular way. This might be as simple as shifting each letter by a number of places in the alphabet. As long as both sender and recipient know the secret key, they can encrypt and decrypt all messages that use this key.

Block cipher is one kind of symmetric cipher which operating on fixed-length groups of bits, called blocks. [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) and [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) are two of the most famous and widely used block ciphers. The main process of block cipher works as follows:

1. Alice: sender of an encrypted message.

2. Bob: intended receiver of encrypted message. Assumed to the key.

3. Eve: (Passive) attacker intercepting messages and trying to identify plaintexts or keys.

4. Mallory: (Active) attacker intercepting and <span class="redWord">modifying</span> messages to identify plaintexts or keys.

![Block Cipher](/images/Cryptography/Blockcipher1.png)

###1. Data Encryption Standard(DES)
DES was adopted in 1976 but the key size is too small for today’s computers (can be broken within 10 hours) so don't use DES to encrypt your WI-FI password. Some DES variants still provide good security.


