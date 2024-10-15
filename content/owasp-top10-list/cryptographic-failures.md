+++
title = '02. cryptographic failures'
date = 2024-10-15T17:39:30+11:00
draft = true
+++

## what is it?

cryptographic failures are when sensitive data such as personal information, passwords, credit card numbers, etc, are not well protected by their cryptography mechanisms. this is due to the cryptography mechanisms being poorly implemented or missing entirely which provides attackers easy access to modify and steal sensitive data 

## how does it occur?

there are lots of different reasons why cryptographic failures occur. Below are some common issues:

- **weak encryption algorithms:** the encryption algorithm used may be weak or outdated making it vulnerable to attacks. for example, a weak encryption algorithm may use a key that is easily guessable by brute force, where the attacker uses trial and error to guess the correct key. 

- **poor key management:** the keys that are used to encrypt and decrypt and data must be adequately managed to ensure security. poor key management involves generating weak or predictable keys, storing keys in insecure locations, not rotating to new keys, sending keys over an insecure connection, etc


