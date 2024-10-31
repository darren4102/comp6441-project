+++
title = '02. cryptographic failures'
date = 2024-10-15T17:39:30+11:00
draft = true
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

## real-life example

## example attack
