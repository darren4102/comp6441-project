+++
title = '08. software and data integrity failures'
date = 2024-10-31T21:06:20+11:00
+++

## what is it?

integrity in cyber security refers to ensuring that any data within a system has not been tampered with. this is essential as data should remain accurate and correct at all times to ensure the trust of users and compliance with regulations. software and data integrity failures are hence when systems do not properly protect their code and infrastructure against integrity violations such as being modified and deleted

## how it occurs

- **_using untrusted sources:_** when an application relies on components such as plugins, libraries and modules from unknown or untrusted sources, it can introduce vulnerabilities. as we don’t know much about these third-party components, they could contain malicious code or have a weak security infrastructure

- **_auto-updating without verification:_** some applications have auto-update enabled but they do not verify whether the updates are legitimate. this provides attackers with the opportunity to add fake updates that can compromise or corrupt the system

- **_insecure ci/cd pipelines:_** ci/cd pipelines are an automated process and workflow that assists developers with the development of new versions for software. if this process is not secure, attackers can inject harmful code during the software’s development or deployment

- **_insecure serialisation:_** serialisation refers to the process of converting code and data into a more transmittable form to be used later or elsewhere. serialisation can be insecure if the data is serialised into a structure that attackers can see and modify

## how it is prevented

- **_using digital signatures:_** using a digital signature will verify that any software or data is authentic and hasn’t been altered. when software or data is distributed, it comes with a digital signature. when we receive it, we can verify if that signature matches the official signature to determine whether it has been altered with

- **_using trusted libraries and dependencies:_** ensure that any libraries or pre-built code is obtained from known sources. this involves getting them from verified and trusted repositories for better securit

- **_using security tools:_** several tools such as owasp dependency check or owasp cyclonedx can be used to scan and flag any known vulnerabilities in the components you are using

- **_implement code review:_** having regular reviews for any code or configuration changes helps ensure there are no unauthorised or malicious input that may have been added during the software pipeline

- **_securing ci/cd pipelines:_** set up rules on who can access and change ci/cd pipelines and ensuring the segregation of different roles and permissions are implemented. this prevents unauthorised access to different parts of the software during development

- **_protecting serialised data:_** ensure serialised data is signed, encrypted or has integrity checks in place before they are sent to untrusted clients. this allows for any modifications or unauthorised retransmission of the serialised data to be detected

## real-life case

in 2020, hackers used a third-party provider that had access to the solarwind's orion platform to insert malicious code into their new batch of updates. without the verification of this update, the code led to thousands of data, networks and systems to be compromised. it allowed attackers to access solarwind’s customer information technology systems where they could install even more malware to spy on other companies

## example attack

once logged in as a regular user below, we can open up the developer window and view the json web token (jwt) which is used to authenticate the user.

<img src="/comp6441-project/examples/owasp8-1.gif" alt="owasp8-1_example.gif"/>

the jwt are in the "header.payload.signature" format and is encoded as base64. we can decode this by using dedicated base64 decoder websites. by ignoring the signature part, the jwt is decoded as

{"typ":"JWT","alg":"HS256"}.{"username":"guest","exp":1730361269}.

we can then alter it by changing "HS256" which is the signing algorithm for the signature to "None" and changing "guest" to "admin". as "HS256" is removed, the signature will not be checked and can be dropped (fullstop is still kept). the changes can be seen below

{"typ":"JWT","alg":"none"}.{"username":"admin","exp":1730361269}.

we then encode this altered jwt and replace our current jwt session and refresh the site to see our new permissions

<img src="/comp6441-project/examples/owasp8-2.gif" alt="owasp8-2_example.gif"/>
