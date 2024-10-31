+++
title = '01. broken access control'
date = 2024-10-10T11:16:31+11:00
draft = true
+++

## what is it?

before we talk about what **_“broken”_** access control is, we need to understand what access control is itself. access control is the restrictions put upon a user that determines what actions they can do and resources they can access

for web applications, action control involves:

- **_authentication_**: checking if the user is who they say they are
- **_session management_**: retaining the user's authenticated state across their multiple interactions with a website
- **_access control_**: verifying whether users can and are allowed do what they are trying to do

with that, **_“broken”_** access control is when these restrictions are bypassed by the user. when this happens, it can give an attacker elevated privileges and lead to sensitive data such as many users’ personal information being leaked, modified or destroyed

it is therefore important that necessary restrictions are properly implemented and that the principle of least principle is enforced to ensure that users are limited to what they are supposed to see and access

## how it occurs

broken access control occurs when a website fails to maintain restrictions on what a user can do. these are due to vulnerabilities such as:

- **_the violation of the 'principle of least privilege':_** this vulnerability occurs when users within an organisation are given more permissions than what is necessary for their role. for example, a junior accountant has admin access to the company’s financial system despite their role only requiring them to make basic reports

- **_insecure direct object references (idor):_** this happens if a user’s unique identifier is present in the url of a website when they are logged in. without proper authentication, attackers can change the id to someone else’s giving them access to their account

- **_bypassing access control checks:_** similar to 'idor', this happens if proper authentication is not implemented such that users are able to access certain pages of a website they are not supposed to see. this allows an attacker to modify the url by adding the route to the page they want

- **_session management flaws_**: instead of modifying ids present in the url of a site, session management flaws involve attackers modifying the tokens every user has on a site that verifies who they are

- **_elevation of privilege:_** occurs when there are vulnerabilities in the system which allows a user with lower level privileges to perform actions that require higher level privileges. for instance, someone acting as a user without being logged in or someone acting as an admin despite only being a user

## how it is prevented

access control is effective only if it is performed server-side rather than on the user’s machine. this stops attackers from changing verification code and metadata. also the system should not rely on security through obscurity

other ways to prevent include:

- disabling the ability for users to view the list of directories and hidden files of a website
- ensuring users can only work with their own data not anybody else’s
- logging and notifying admins on recurring failed access attempts
- making sure session ids are made invalid when a user logs out. if tokens are used, make them expire faster to minimise the window of attack
- limiting the the number of api requests to protect against attackers or bots
- denying access to private pages of a website by default to prevent elevation of privileges

## real-life example

in 2018 cambridge analytica, a consulting firm gained unauthorised access to the personal data of 87 million facebook users. under the guise of academic research, they gained access to facebook’s api which allowed the access to user data for those who installed their “this is your digital life” app. however, facebook's api had a broken access control vulnerability that enabled third-party developers to also access the data of user’s friends as well. following the breach, facebook was fined billion usd by the u.s. federal trade commission for the violation of user privacy.

## example attack

below is an attack exploiting 'idor'. the attacker is able to change the id in the url to access someone else's account

<img src="/examples/owasp1.gif" alt="owasp1_example.gif"/>
