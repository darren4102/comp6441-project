+++
title = '09. security logging and monitoring failures'
date = 2024-10-31T21:06:33+11:00
draft = true
+++

## what is it?

logging and monitoring is needed to effectively detect and respond to any active breaches. logging involves recording any events that occur within an application such as user logins, transactions or errors to be used for security analysis. monitoring then refers to continuously observing the logs to detect any suspicious events. this helps in identifying security breaches in real-time. failure to incorporate logging and monitoring can lead to breaches that are missed

## how it occurs

- **_auditable events are not logged:_** when critical events such as logins or transactions are not logged, there will be no records to investigate if a breach does occur. this makes it difficult to identify the source of the breach

- **_poor log messages from errors:_** warnings or errors that produce unclear or vague log messages do not provide adequate information for defenders to understand exactly what is happening during an incident

- **_insufficient monitoring:_** if logs are not monitored for suspicious activities, threats can go unnoticed which allows attackers to exploit a system without being detected

- **_logs only stored locally:_** if logs are only stored locally on the host machine and not backed up anywhere else, they cannot be accessed in the case of failure

- **_poor alerting mechanisms:_** if alerting systems are not in place or are ineffective, alerts will not be triggered for any critical events or issues. this can result in delayed responses to attacks.
  inability to handle real-time breaches: when an application cannot detect any active attacks in real-time or near real-time, it can lead to extended delays which gives attackers more time to cause damage

## how it is prevented

- **_logging failures with sufficient user context:_** any errors caused by login, access control and input failures should be logged with enough detail about the user involved. this helps identify any suspicious accounts that will need to be investigated

- **_ensuring logs follow a consistent format:_** logs should be formatted in a consistent way that is understood by log management tools. standard formats such as json and xml are widely used by various systems. this allows log management tools to effectively collect, analyse and store logs

- **_encoding log data:_** encoding log data is essential for preventing injection attacks. if for example an attacker attempts to add malicious data in terms of a sql command, encoding would convert any special characters to text so that it is not interpreted as a command. (see injection)

- **_having audit trails for high-value transactions:_** by having a record of financial transactions or changes to critical data and alteration or deletion of such data can be tracked. an important protection method of these logs is making it append only so that any past logs cannot be modified or deleted. this prevents attackers from covering up their tracks and as such making them more identifiable

- **_establishing effective monitoring and alerting:_** effective monitoring and alerting processes or systems should be established in order for any suspicious activities to be detected and responded to quickly. quick detection and response enables teams to take action before attackers can cause any significant damage

- **_adopt incident response and recovery plans:_** incident response and recovery plans such as nist provides a guide on how to deal with security incidents which helps minimise the impact of attacks. this includes helping teams to respond more effectively and recover faster

## real-life example

during the 2013 holiday season, target, the second largest discount store chain in the usa had a data breach which affected 70 million customers. it resulted in the theft of a large amount of customer data which included 40 million credit and debit card accounts. this was due to their failure to log failed login attempts which allowed attackers to attempt various usernames and passwords from the same ip address. this attack led to target losing $200 million and their customer trust

## example attack

below shows some sample logs. we can see that a user from ip address 49.99.13.16 is attempting a brute force attack on this system. they are testing various usernames to gain unauthorised access to the system

<img src="/examples/owasp9.png" alt="owasp9_example.png"/>
