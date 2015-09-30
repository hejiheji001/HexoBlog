title: "Learning Cryptography - 01"
date: 2015-09-30 00:59:00
tags: [Computer_Science,Cryptography]
---
#I. Overview
Communicating secretly in writing(Secret Writing) is probably as old as writing itself. Already the Egyptians are known to have included secret hieroglyphs in their writing. In ancient times secret writing has mainly been used for religious purposes and mysticism. In the classical antiquity are the first accounts of secret writing being used for military purposes by the ancient Greeks. From there on the ability to secretly pass messages was a major factor for military and diplomatic communication. It is therefore little surprising that many of the techniques for secret communication known today have been developed by government agencies and often only made known to the public long after their invention. Since the ancient Greeks many methods of exchanging secret messages have been developed (and successfully broken).
The _Science of Secret Writing_ can be roughly divided into the following branches:
<table><tr><td rowspan="4">Secret Writing</td><td colspan="3"><span class="hint" id="Steganography">[Steganography](https://en.wikipedia.org/wiki/Steganography)</span>(Hiding Messages)</td></tr><tr><td rowspan="3"><span class="hint" id="Cryptography">[Cryptography](https://en.wikipedia.org/wiki/Cryptography)</span>(Scrambling Messages)</td><td rowspan="2">Substitution_#1_</td><td>Code_#3_</td></tr><tr><td>Cipher_#4_</td></tr><tr><td colspan="2">Transposition_#2_</td></tr></table>
_\#1:encrypt messages by replacing the components of a message._
_\#2:encrypt messages by permuting the components of a message within itself._
_\#3:algorithms that substitute entire words or phrases of a message._
_\#4:algorithms that substitute the single letters or characters of a message._
<div class="toHint" target="Steganography">The best form of sending a secret message is by concealing that a message has been sent. The study of how to effectively hide messages such that only the intended receiver can find them is called _Steganography_. Traditionally secret messages used to be hidden physically, for instance by using invisible ink, or within unobtrusive communications. Nowadays there are many more ways of sending concealed mes- sages, for instance by hiding them in unsuspicious file formats, such as pictures or sound files, or in propaganda videos. </div>
<div class="toHint" target="Cryptography">In many situations it is obvious that messages are sent. For instance, it is clear that during a phone conversation some information is communicated, thus “hiding the message” is essentially impossible. To guard against interception or eavesdropping, messages can be scrambled in a way that they only make sense to the receiver but not to an uninitiated eavesdropper. The scientific study of scrambling messages is the mathematical discipline of _Cryptography_.</div>
We can describe the process of sending encrypted messages with the following schematic view:
Plaintext ——> Cipher-/Codetext ——> Decryption ——> Orig. Plaintext

From a practical point of view, codes are relatively useless as they require far too much overhead to be effective. In theory, one would have to design an entire dictionary of code words before commencing communication. Obviously, this makes it not only difficult to work with a code, but also insecure as a code book can not easily be hidden or memorised, as well as very costly to change a code. While codes have a certain usefulness for _ad hoc communication_, they are not relevant for the type of efficient cryptography we are interested in.
With ciphers on the other hand one only has to know how to encipher and decipher the basic set of symbols, for example the 26 letters of the alphabet. Therefore, ciphers are far easier to apply, to keep secret and to change in order to guarantee prolonged secure communication.

#II. Transposition Ciphers
##_To Be Continued~_




