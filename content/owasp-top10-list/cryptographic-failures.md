+++
title = '02. cryptographic failures'
date = 2024-10-15T17:39:30+11:00
+++

## what is it?

cryptographic failures are when sensitive data such as personal information, passwords, credit card numbers, etc, are not well protected by their cryptography mechanisms. this is due to the cryptography mechanisms being poorly implemented or missing entirely which provides attackers easy access to modify and steal sensitive data

## how it occurs

there are lots of different reasons why cryptographic failures occur. Below are some common issues:

- **weak encryption algorithms:** the encryption algorithm used may be weak or outdated making it vulnerable to attacks. for example, a weak encryption algorithm may use a key that is easily guessable by brute force, where the attacker uses trial and error to guess the correct key.

- **poor key management:** the keys that are used to encrypt and decrypt and data must be adequately managed to ensure security. poor key management involves generating weak or predictable keys, storing keys in insecure locations, not rotating to new keys, sending keys over an insecure connection, etc

- **transmitting over insecure protocols:** data that is transmitted in plaintext over protocols such as http, smtp and ftp can be easily intercepted by attackers. when the data is transmitted over the public internet, it is very susceptible to man-in-the-middle (mitm) attacks.

- **vulnerable to side-channel attacks:** attackers can observe how the system behaves when encrypting such as its execution time, power utilisation, electromagnetic signals, etc. with this, attackers can infer cryptographic keys that will decrypt data

## how it is prevented

- classify data that is used by the application and those that are sensitive based on privacy laws and business needs
- do not keep sensitive data stored for longer than necessary. if data is not stored, it can not be stolen
- any sensitive data that is saved on the disk or databases must be encrypted
- make sure that standard algorithms, protocols and keys are up to date and strong and use proper key management
- encrypt data that is transmitted over networks with protocols that encrypt the data
- use cryptographically secure random number generators where necessary to avoid predictability
- regularly testing and auditing the security configurations to ensure its effectiveness

## real-life case

in 2013, yahoo was data breached which led to the data theft of all 3 billion yahoo users. following investigation, it was found that yahoo was using outdated encryption that was easy to crack. this included the use of the insecure md5 hashing algorithm. the breach led to a $117.5 million class-action settlement and a $35 million fine from the us securities and exchange commission.

## example attack

once an attacker has gained access to a database (sqlite webapp.db file in this case) they will be met with hashed data. for this example the password for the admin was hashed

<img src="/examples/owasp2-1.gif" alt="owasp2-1_example.gif"/>

once a hash is obtained, hash identifying tools (nth used below) could be used to easily identify hashing algorithms that are vulnerable. in the example below, it was quickly found that the hash used md5, whose function is considered severely compromised

<img src="/examples/owasp2-2.gif" alt="owasp2-2_example.gif"/>

by knowing the hashing algorithm for a hash, they could be easily cracked with tools such as hashcat. the below shows hashcat being used on the admin password hash where "-m 0" refers to the md5 algorithm. this found the password to be "qwertyuiop"

<img src="/examples/owasp2-3.gif" alt="owasp2-3_example.gif"/>
