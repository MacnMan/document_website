---
id: books_inside_lorawan_security
title: Security
---


## LoRaWAN 1.0 Security Keys & AES-128 Encryption

To ensure all communication within the LoRaWAN network remains private and protected, **LoRaWAN 1.0** introduces powerful security mechanisms using three essential keys. These keys safeguard every message sent between devices, network servers, and application servers using industry-standard **AES-128 encryption**.

## NwkSKey (Network Session Key)
This key is like the guest’s passcode for securely talking to the party organizers (network server). It ensures that messages sent between the guest and the organizer stay private.

## AppSKey (Application Session Key)
This key secures the guest’s personal conversations with the app running at the party (Application Server). It makes sure that sensitive personal data is kept confidential.

## AppKey
The initial key used to join the party (through the Join-request). Think of it as the guest’s invitation code that lets them get in and start the fun. Once they’ve joined, the AppKey is used to generate other keys.

## AES-128 Encryption in LoRaWAN

To make sure the locks (keys) are strong enough, the network uses a powerful encryption algorithm: **AES-128**, also used in standards like IEEE 802.15.4.

- **128-bit Keys**  
  Each security key (NwkSKey, AppSKey, and AppKey) is 128 bits long. This provides a strong, reliable lock on every message.

- **AES Algorithm**  
  This algorithm applies complex mathematical transformations to encrypt messages. Even if intercepted, they cannot be understood without the correct key.

In simple terms, **AES-128 encryption** is like having a secure combination lock on every note. Even if someone intercepts it, unlocking it is next to impossible without the right key.

---

## Summary of Security Keys and Encryption

| Key        | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| **NwkSKey** | Secures messages between the guest (device) and the organizer (network server) |
| **AppSKey** | Protects personal data exchanged with the application (Application Server)     |
| **AppKey**  | The initial invitation code; used to generate the other session keys           |

All of these keys are **128 bits** long and use **AES-128 encryption** for secure, private communication within the LoRaWAN network.