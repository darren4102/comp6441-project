+++
title = '04. insecure design'
date = 2024-10-31T21:05:11+11:00
draft = true
+++

## what is it?

insecure design refers to a broad range of security issues related to how an application was designed and built from the start. an application’s design is considered insecure if security controls were neglected throughout its development cycle, leaving it vulnerable to attacks even if its code was written perfectly.

for example, a login page may be written perfectly, however, if it was designed such that there was no limit to failed login attempts, it will be vulnerable to brute force attacks. it is therefore essential that all the security requirements of an application are thoroughly thought out before its initial development to ensure security is not compromised

## how it occurs

- **_lack of security focus:_** when security is initially neglected and only added in the later stages of an application’s development, it results in fundamental design flaws that are difficult to fix later on. this can occur when a project is under budget or time constraints where the pressure leads to an application’s design to be rushed.

- **_inadequate risk assessment:_** when all risks are not properly evaluated and understood such as their likelihood and severity, the right level of protection can not be properly implemented

- **_not following best practices:_** when established practices and frameworks regarding security such as owasp are not followed, several key design elements may be missed such as proper session management and encryption.

## how it is prevented

- **_working with appsec professional:_** application security professionals can assist developers throughout the development cycle by evaluating and designing appropriate security controls at each stage of development

- **_using a library of secure design patterns:_** rather than developing your own components which may have security vulnerabilities, use “paved road” components, which are those that have been proven and are established as secure

- **_conducting threat modelling:_** identifying potential threats to security for areas such as authentication, access control, business logic and how data flows through the system. this allows for the system to be designed to defend against attacks regarding those critical areas

- **_multiple layers of validation:_** adding validation of data at every level of the application from the frontend user interface to the backend servers and databases. by creating multiple layers of protection, it stops malicious inputs before they cause any problems

- **_unit and integration testing:_** writing automated tests that validates critical individual components (unit testing) and the flow of data between different components (integration testing). this ensures all critical parts of an application are resistant to attacks

## real-life example

in 2018 ticketmaster experienced a data breach that led to the unauthorised access to customer data. it was caused by their poor design of third-party customer support provider inbenta technologies. rather than working with security professionals to embed a secure support system within their website, a third-party one was used which was vulnerable

## example attack
