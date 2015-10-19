title: "Learning Cryptography - 03"
date: 2015-10-02 13:59:00
tags: [Computer_Science,Cryptography]
---
#III. Substitution Ciphers Part1

A substitution cipher is a method to replace units of the plaintext with parts of the ciphertext. For simplicity, we will for now assume that the units of our plaintext are always the 26 letters of the alphabet only, without spaces, punctuation, etc.

##Shift Cipher and Caesar’s Cipher
The oldest form of substitution ciphers is the shift cipher. Its idea is to shift every letter in the message by a set number of places in the alphabet. For example a shift cipher with a shift of 1 simply replaces every letter by its successor and Z by A.

More mathematically, if we enumerate all letters of the alphabet from 0 to 25 then we can express the shift cipher as an operation in modular arithmetic as c ≡ p + s(mod 26), where p is the plaintext letter, s is the shift, and c is the enciphered letter. Decryption can be performed similarly with the reverse operation: p ≡ c − s(mod 26).

Julius Caesar used this Cipher with a fixed shift of s = 3, which is nowadays known as Caesar Cipher. Since there are only 26 possible shift ciphers they make for very weak security.

##Using Keys
Obviously all the ciphers we have encountered so far are relatively easy to break. In fact their security hinges on the fact that a potential cryptanalyst does not know the method of encryption, i.e. the particular rail fence or shift, etc. Once broken the encryption method has to be changed.

An invention that avoided having to come up constantly with new encryption techniques, was the introduction of keys into cryptography. A key is some auxiliary information that is used to vary the encryption procedure and its knowledge is crucial to successfully decrypt a message. The advantage of using a key is, that even if the algorithm for encryption is known, a cryptanalyst can nevertheless not decrypt the message without knowing the key.

One additional complication is that sender and intended receiver have to agree on a common, secret key and have to exchange this key at some point before the actual communication. The secret communication would then look something like this.
![CommUseKeys](/images/Cryptography/CommUseKeys.png)

##[Monoalphabetic Substitution Ciphers](http://crypto.interactive-maths.com/monoalphabetic-substitution-ciphers.html)
Instead of just shifting the letters of the alphabet we can define a substitution by explicitly assigning each plaintext letter a corresponding cipher letter. In other words we define a substitution by giving a  mapping from a plaintext-alphabet(i.e.,the normal 26 letters)to a cipher-alphabet.
This mapping could be arbitrary, giving us <span class="hint" id="26!">26! ≈ 2^86</span> different ways of encrypting a message. However, in order to make it easier to memorise the cipher-alphabet one generally constructs it by:
<div class="toHint" target="26!">26! = 26 × 25 × 24 × 23 ...... = 4.0329146e+26</div>

1. choosing a keyword,
2. removing all duplicate letters from the keyword
3. start the cipher-alphabet with the letters from duplicate-free keyword
4. at the end of the codeword continue with the next unused letter of the alphabet that follows the last letter in the codeword
5. continue filling in letters in alphabetical order leaving out those letters already used; if necessary, start from the beginning of the alphabet again similar to a shift cipher

Example: Taking my own name as keyword, I can construct the following substitution cipher:
Plaintext-alphabet: 	ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher-alphabet: 		VOLKERSGHIJMNPQTUWXYZABCDF

A monoalphabetic substitution cipher can be expressed as a single permutation on the letters of the alphabet or the first 26 integers. I.e. the cipher is essentially equivalent to some permutation s ∈ S26.
In our example we get:

|                    Monoalphabetic Substitution Cipher                    |
|:------------------------------------------------------------------------:|
|1 |2 |3 |4 |5|6 |7|8|9 |10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|
|22|23|24|25|5|26|8|9|10|11|4 |3 |12|13|2 |14|15|6 |7 |16|17|1 |18|19|20|21|
<script>
document.getElementsByTagName("th")[0].setAttribute("colspan","26");
</script>


(1 22)(2 23 18 6 26 21 17 15)(3 24 19 7 8 9 10 11 4 25 20 16 14 13 12)(5) ∈ S26 We now want to encrypt the message Attack at dawn.
Plaintext: ATTACKATDAWN
Ciphertext: VYYVLJVYKVBP
One weakness of the chosen key is that the letter E encoded by itself. While this does not have much effect in the message above, if we consider the
Ciphertext: BENEEYVYYGWEE
it is quite obvious that the plaintext means We meet at three.

#IV. Substitution Ciphers Part2
##_To Be Continued~_