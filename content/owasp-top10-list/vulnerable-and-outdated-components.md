+++
title = '06. vulnerable and outdated components'
date = 2024-10-31T21:05:41+11:00
draft = false
+++

## what is it?

vulnerable and outdated components are just what they say they are, they are components that are no longer supported or not updated to the latest version and as a result have known security flaws. as these flaws are well known, it makes it very easy for attackers to exploit the system. some common components that are susceptible to this are libraries, frameworks, operating systems and applications

## how it occurs

- **_not knowing versions of components:_** when you are not keeping track of what version your components are using you may not know of the latest version with improved security or how secure your current system is.
  using unsupported or outdated software: software that is outdated or no longer supported may have known security vulnerabilities which attackers can easily exploit

- **_not regularly scanning for vulnerabilities:_** if you do not check your system’s security regularly, you could miss out on important security issues and alerts that indicate vulnerabilities in your system

- **_delaying updates:_** when updates are delayed or updates are run on a slow schedule, it creates a gap in time for which attackers can exploit your system

- **_not testing updates for compatibility:_** when software is updated, it can introduce new issues due to their incompatibility with current systems. these issues can include new bugs or breaking dependences where one component cannot handle the new changes and consequently breaking. this can lead to several unpredictable vulnerabilities on the security of the system

- **_misconfigured components:_** up to date components that are not configured properly still have security vulnerabilities. this includes having default settings or having unused features active

## how it is prevented

it is important to establish an ongoing plan that involves monitoring and applying any new updates to a system throughout its lifespan. this ensures that your system always has the latest security features and configurations. some common processes involved in the plan include:

- **_removing unused components:_** any unused components should be removed as keeping them increases the likelihood of updates being missed for them and consequently creating additional security vulnerabilities in your system

- **_keeping track of component versions:_** keeping track of which version of each component such as frameworks and libraries for all areas of the system is essential for ensuring they are up to date with the latest security features. tools such as owasp dependency check can be used to scan and detect vulnerabilities

- **_using components from official sources:_** software components should only be downloaded from official sources over secure connections such as https. additionally, packages that have been digitally signed to verify its integrity should be preferred to minimise the chances of them being tampered with

- **_checking if current components are still maintained:_** some components or packages stop support and are no longer maintained which makes them vulnerable to security issues. if these components cannot be updated, a virtual patch which blocks potential attacks from reaching the vulnerable component is used. this doesn’t modify the component’s code but rather another layer used above the component

## real-life case

equifax, a company that reports consumer credit experienced a data breach in 2017 due to the use of the apache struts development framework for java applications. the apache struts framework which was a popular open-source framework at the time was vulnerable to remote code execution (rce) which gave attackers access to the system. attackers were able to hide malicious code within their http requests to the server for such an attack

## example attack

below is an online book store site that will be attacked

<img src="/examples/owasp6-web.png" alt="owasp6-web_example.png"/>

websites such as "exploit database" provide scripts that exploit common and well-known vulnerabilities of a web application. in the below, the unauthenticated remote code execution script for online book stores will be downloaded

<img src="/examples/owasp6-db.png" alt="owasp6-db_example.png"/>
