title: "Learning Cryptography - 02"
date: 2015-09-30 12:59:00
tags: [Computer_Science,Cryptography]
---
#II. [Transposition Ciphers](https://en.wikipedia.org/wiki/Transposition_cipher)
In cryptography, a transposition cipher is a method of encryption by which the positions held by units of plaintext (which are commonly characters or groups of characters) are shifted according to a regular system, so that the ciphertext constitutes a permutation of the plaintext. That is, the order of the units is changed (the plaintext is reordered). Mathematically a bijective function is used on the characters' positions to encrypt and an inverse function to decrypt.

In a word, the basic idea of a transposition cipher is to scramble a message by transposing the single letters of a message in a particular order that is only known to the sender and receiver.

Here are some examples of _Transposition Ciphers_:

##1. [Rail Fence Cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher)
We write the plain text message in columns of a particular height and then compose the ciphertext from the resulting rows. To decipher we divide the length of the overall message by the height of the columns and break the ciphertext into rows whose length corresponds to the quotient. Writing the rows again one upon the other, we can read off the original plaintext.
Example: _When shall we three meet again in thunder lightning or in rain_
We then write it as a rail fence of height 5:

|  Rail Fence Cipher  |
|:-------------------:|
|W|H|E|E|A|I|N|I|I|I|N|
|H|A|T|M|G|N|D|G|N|N|E|
|E|L|H|E|A|T|E|H|G|R|U|
|N|L|R|E|I|H|R|T|O|A|K|
|S|W|E|T|N|U|L|N|R|I|E|
<script>
document.getElementsByTagName("th")[0].setAttribute("colspan","11");
</script>

Observe that the original message had 51 characters. In order to complete the rail fence I added four nonsense characters. These characters are meaningless and can be discarded after deciphering. We call meaningless characters added to the ciphertext nulls.

Reading off row by row gives the following ciphertext: WHEEAINIIINHATMGNDGNNEELHEAREHGRUNLREIHRTOAKSWETNULNRIE

In order to decrypt the message the receiver, who knows the height of the rail fence, divides the length of the message by the height and thus gets the length of the single rows.

In our case we get 55/5 = 11: WHEEAINIIIN HATMGNDGNNE ELHEAREHGRU NLREIHRTOAK SWETNULNRIE

Adding nulls is not strictly necessary, we could have just combined the rows of different lengths and nevertheless could have decrypted the message without problems.

In fact not adding nulls can make the work for a cryptanalyst more difficult. But in either case the rail fence cipher is very easy to break as we only have to test all possible divisors up to half the length of the text.

##2. [Permutation Cipher](http://peace.lakeheadu.ca/cs4476/slides/chap2-2.pdf)
We can obtain a more elaborate cipher by transposing the characters in the plaintext in a less regular fashion using permutations. Suppose we take a permutation s ∈ Sn, we then divide the plaintext into chunks of length n and permute the letters in each chunk according to our chosen s, which results in the ciphertext. To decipher the text we simply take the inverse of s, s−1 ∈ Sn and apply it to the ciphertext divided into chunks of length n.

Example: _When shall we three meet again in thunder lightning or in rain_.
We divide our plaintext from above into chunks of length 6.
WHENSH ALLWET HREEME ETAGAI NINTHU NDERLI GHTNIN GORINR AINEUK
We use the following permutation

|   Permutation Cipher  |
|:---------------------:|
| 1 | 2 | 3 | 4 | 5 | 6 |
| 3 | 4 | 2 | 6 | 1 | 5 |
<script>
document.getElementsByTagName("th")[1].setAttribute("colspan","6");
</script>

We can find out that number 1 truns to 3, 2 turns to 4.....
So the letter W(which is the 1st letter) will take place of position 3 then we get WHENSH -> ??W???
and then the letter H should take place of position 4, so we get WHENSH -> ??WH??
......
the ciphertext of first block is <span class="hint" id="PermutationCipher">WHENSH -> SEWHHN</span>
<div class="toHint" target="PermutationCipher">![PermutationCipher](/images/Cryptography/PermutationCipher.png)</div>
and the final ciphertext is SEWHHN ELALTW MEHREE AAETIG HNNIUT LENDIR ITGHNN NRGORI UNAIKE
In order to decrypt the message we use the inverse of s, which is s−1=(5 3 1 2 6 4).

#III. Substitution Ciphers
##_To Be Continued~_