+++
title = '05. security misconfiguration'
date = 2024-10-31T21:05:24+11:00
draft = true
+++

## what is it?

security misconfiguration refers to when security frameworks and components are put in place but were not configured appropriately to maintain and maximise security. when misconfigured, it leaves gaps within an application which an attacker can exploit. for example, an application may contain default login information such as the “admin” username which is not changed. as these login credentials are widely used, they can be easily guessed, allowing attackers to easily gain access to such accounts

## how it occurs

- **_unchanged default passwords and configurations:_** when default accounts such as “admin” or “guest” and default passwords have not been changed, attackers can easily exploit them by guessing to gain access

- **_enabling unnecessary features:_** when an application has extra features such as services, ports or pages that are not used but still enabled, it expands an attacker’s attack surface by providing additional entry points for attackers

- **_overly informative error handling:_** when an error is encountered, it can reveal additional technical information such as its code or database structure to users. with this, attackers can understand how a system works to find vulnerabilities

- **_new security features not enabled:_** when a system is upgraded, it might introduce new security features, however, they may be disabled by default which leaves the system vulnerable

- **_outdated software:_** a system or its components may be outdated with known vulnerabilities. as these vulnerabilities are known, it makes it very easy for attackers to exploit those vulnerabilities

## how it is prevented

- **_implementing a repeatable process:_** by creating a standardised method that is used when configuring a new environment such as for the development, quality assurance and production stages of software development, it ensures each environment follows a consistent standard of security. this method should also be automated such as using a script that configures the necessary ports and disables unused services in order for new environments to be set up efficiently

- **_using a minimal platform:_** reduce the attack surface of an attacker by disabling or not installing any unused features or components. as attackers have less components to exploit, it reduces the likelihood of an attack

- **_review and update configurations:_** having regular checks and updating configurations to fix any vulnerabilities and ensure that its security is upheld and maintained. for instance, scheduling monthly security reviews to ensure the application has the latest security features

- **_using automated verification tools:_** rather than manually reviewing security configurations, an automated tool can be used to regularly check if configurations are correctly applied across all environments

- **_segmenting different parts of the application:_** by isolating different components of an application into their own independent section, it limits what an attacker has access to if they breach one area. common techniques such as network segmentation, containerisation and access control lists (acl) are generally used

## real-life example

citrix, which provides virtual apps for users, was targeted for an attack in 2019 where legacy protocols it used were exploited. the legacy protocols imap and pop which were used made it difficult for system administrators to establish and activate mfa for all users. this made their system vulnerable to brute force attacks

## example attack

here the developers forgot to remove the debug console feature from their web application. this could be access by adding "/console" at the end of the url. the failure to remove this feature allows attackers to execute commands

<img src="/examples/owasp5.gif" alt="owasp5_example.gif"/>
