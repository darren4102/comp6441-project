+++
title = '07. identification and authentication failures'
date = 2024-10-31T21:06:04+11:00
draft = false
+++

## what is it?

identification and authentication failures are when a system does not properly verify the identity of a user and determine what they can and cannot do. this failure can lead to attackers gaining unauthorised access to accounts and sensitive data

## how it occurs

- **_permits credential stuffing:_** the system permits credential stuffing which is an attack where attackers attempt to log in using a list of stolen usernames and passwords

- **_weak usernames and passwords:_** users may enter weak passwords such as “password123” which the system allows for. as these are easily guessable, attackers can bypass them easily

- **_allows brute force attacks:_** the system may let attackers have unlimited attempts at guessing a password. without a limit, a password can eventually be found

- **_weak password recovery method:_** some password recovery methods may be too easy for attackers to use to reset an account’s password. for example, a system can ask a security question such as “what is your favourite colour?” which can be easily guessed

- **_poor password storage:_** if a system stores its passwords in a database without encryption and in plain text, it reduces the effort needed for attackers to obtain them once they have compromised a database

- **_missing or ineffective multi-factor authentication (mfa):_** with mfa, even if an attacker obtains a password, they will still need to obtain a second code sent to the account owner’s device to gain access to the account. without mfa, there isn’t this second layer of defence, allowing attackers to access the account with just the password

- **_bad session management:_** bad session management involves exposing user ids in the url or reusing session ids and not invalidating them after a logout. this allows attackers to manipulate such ids to gain unauthorised access to accounts

## how it is prevented

- **_implement mfa:_** the use of mfa adds an additional layer to account security by introducing a one-time code that is needed to login and can only be accessed on an account owner’s device

- **_avoiding default credentials:_** ensure that when an application is deployed, any default login information such as the “admin” username which is widely used are removed

- **_check for weak passwords:_** when a password is entered while registering, the system should check if the password is common or easy to guess. e.g. comparing the password to a list of common passwords such as the “rockyou” wordlist. if it is common, registration with such a password should not be allowed

- **_follow nist guidelines for passwords:_** the national institute of standards and technology (nist) guidelines provides a guide on how passwords should be formatted as well as how they should be handled after it has been set. for example, the guidelines recommend a password to be a minimum of 8 characters and also expire after it has been compromised or after 365 days

- **_limit failed login attempts:_** by limiting the number of password attempts, an attacker has less of a chance to guess the password through methods such as brute force

- **_having secure session management:_** session ids should be managed properly so that attackers cannot hijack sessions from an active user. this includes generating a new random session id upon login, not adding session ids in urls, storing session ids securely such as hashing and invalidating a session id after logout or inactivity

- **_using the same output messages:_** during registration and account recovery, error messages for incorrect login should not provide too much information. information such as whether a username is correct gives attackers hints for guessing an account’s login credentials. error messages should therefore be vague and the same for all cases

## real-life case

in 2015, ashley madison, an online dating service had a data breach which affected 36 million of its users. some of these users included government and military employees. from the data collected, 11 million passwords that were hashed were cracked due to them being generic. passwords such as “password” or “123456” were commonly used

## example attack

the below shows a flaw in the authentication mechanism where the re-registration of an account is allowed. instead of registering with "admin" which will not work as it already exists, we register with " admin" which contains a space prefix. this comes off as a differnet username when registering but once registered, is treated as the admin account

<img src="/examples/owasp7.gif" alt="owasp7_example.gif"/>
