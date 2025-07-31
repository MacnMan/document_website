---
id: books_inside_lorawan_device_activation
title: End Device Activation
---
## LoRaWAN Device Activation Methods Explained

Before any guest (end device) can join the LoRaWAN network (the party) and start exchanging messages (data), they must complete an **activation process**, similar to receiving an official party invitation. There are two methods for activating devices:

## Over-The-Air Activation (OTAA)

OTAA is the **most secure and widely recommended** activation method. In this approach:

- Guests (devices) go through a **join procedure** with the network.
- They receive a **dynamic device address** and negotiate **security keys**.
- This process is ideal for flexible and secure network access.

#### How OTAA Works in LoRaWAN 1.1

In LoRaWAN 1.1, the join process includes interaction with a **Join Server**:

- **JoinEUI**: Identifies the Join Server
- **DevEUI**: The unique ID of the device
- **DevNonce**: A counter value to prevent replay attacks

The device sends a **Join-request message** in plaintext to the Network Server, which forwards it to the Join Server.

**Steps for Join Acceptance:**

1. The **Network Server** forwards the Join-request.
2. The **Join Server** verifies the request and generates all session keys.
3. The **Network Server** sends back an **encrypted Join-accept** message.
4. The end device **decrypts** the message, generates the session keys, and completes the activation.

This dynamic and secure process makes OTAA the best choice for scalable and secure LoRaWAN deployments.

## Activation By Personalization (ABP)

ABP is like giving guests **hardcoded invitations** to the party:

- Devices are **pre-loaded with static keys and addresses**.
- It's faster but **less secure** and offers **less flexibility** than OTAA.
- Devices cannot easily switch to another network without reprogramming.

#### ABP in LoRaWAN Versions:

- **LoRaWAN 1.0.x**: The device stores `DevAddr`, `NwkSKey`, and `AppSKey`.
- **LoRaWAN 1.1**: The device stores `DevAddr`, `FNwkSIntKey`, `SNwkSIntKey`, `NwkSEncKey`, and `AppSKey`, skipping the Join Server entirely.

## ✅ Summary

| Activation Method | Security Level | Flexibility | Best For                                  |
|------------------|----------------|-------------|-------------------------------------------|
| **OTAA**          | 🔒 High         | ✅ Dynamic    | Secure, scalable deployments              |
| **ABP**           | ⚠️ Lower        | ❌ Static     | Fixed, offline, or rapid testing scenarios |

Whether using **OTAA** or **ABP**, the goal is the same: **secure, seamless, and reliable communication** for all devices on the LoRaWAN network.s