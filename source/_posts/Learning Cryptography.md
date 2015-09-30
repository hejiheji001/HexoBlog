title: "Learning Cryptography - 01"
date: 2015-09-30 00:59:00
tags: [Computer_Science,Cryptography]
---
#I. Overview
Communicating secretly in writing is probably as old as writing itself. Already the Egyptians are known to have included secret hieroglyphs in their writing. In ancient times secret writing has mainly been used for religious purposes and mysticism. In the classical antiquity are the first accounts of secret writing being used for military purposes by the ancient Greeks. From there on the ability to secretly pass messages was a major factor for military and diplomatic communication. It is therefore little surprising that many of the techniques for secret communication known today have been developed by government agencies and often only made known to the public long after their invention. Since the ancient Greeks many methods of exchanging secret messages have been developed (and successfully broken).
The Science of Secret Writing can be roughly divided into the following branches:
<table><tr><td rowspan="4">Secret Writing</td><td colspan="3">Steganography(Hiding Messages)</td></tr><tr><td rowspan="3">Cryptography(Scrambling Messages)</td><td rowspan="2">Substitution#1</td><td>Code#3</td></tr><tr><td>Cipher#4</td></tr><tr><td colspan="2">Transposition#2</td></tr></table>
\#1:encrypt messages by replacing the components of a message.
\#2:encrypt messages by permuting the components of a message within itself.
\#3:algorithms that substitute entire words or phrases of a message.
\#4:algorithms that substitute the single letters or characters of a message.

We can describe the process of sending encrypted messages with the following schematic view:
Plaintext ——> Cipher-/Codetext ——> Decryption ——> Orig. Plaintext

From a practical point of view, codes are relatively useless as they require far too much overhead to be effective. In theory, one would have to design an entire dictionary of code words before commencing communication. Obviously, this makes it not only difficult to work with a code, but also insecure as a code book can not easily be hidden or memorised, as well as very costly to change a code. While codes have a certain usefulness for __ad hoc communication__, they are not relevant for the type of efficient cryptography we are interested in.
With ciphers on the other hand one only has to know how to encipher and decipher the basic set of symbols, for example the 26 letters of the alphabet. Therefore, ciphers are far easier to apply, to keep secret and to change in order to guarantee prolonged secure communication.

#II. Transposition Ciphers
##__To Be Continued__




