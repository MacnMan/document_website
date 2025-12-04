---
id: macnman-iot-device-security-practices-sd
title: Device Security & Practices sds
---

# Macnman Device Security Architecture & Practices

Macnman designs industrial-grade IoT hardware with multi-layered security integrated directly at the **device and firmware level**.  
Since Macnman does **not** operate a cloud platform or collect device data, all security responsibilities are strictly limited to **embedded systems**, **firmware integrity**, and **secure communication at the device side**.

This document outlines the complete hardware-level security architecture followed across Macnman devices.

---

# Device Identity & Authentication

Each Macnman device is manufactured with its own cryptographic and hardware identity.

## Unique Hardware Identifiers
Every device includes:
- MCU Unique ID (factory programmed)
- Serial Number
- MAC Address (WiFi/4G/BLE models)
- DevEUI (LoRaWAN models)

These identifiers:
- Cannot be altered without hardware access  
- Prevent spoofing and cloning  
- Ensure secure device registration in customer platforms  

## Optional Secure Element (Model Dependent)
Some advanced variants may include:
- STSafe-A110  
- ATECC608B  
- TPM-like cryptographic vaults  

These provide:
- Secure key generation  
- Hardware-isolated key storage  
- Tamper-resistant authentication  

---

# Firmware Security

Firmware is the most critical part of device security. Macnman enforces strong protections.

## Secure Boot (Supported Models)
Secure Boot ensures:
- Only authenticated firmware is allowed to run
- Malicious firmware is blocked at startup
- Firmware integrity is checked using cryptographic signatures

## Firmware Read-Out Protection
MCU protections include:
- RDP Level 1/2 read-out lock
- SWD/JTAG debug interface lockout
- Flash memory region protection

These prevent firmware extraction, modification, and cloning.

## OTA Firmware Security (If Supported)
- OTA firmware is cryptographically signed
- Device verifies signature before installation
- Hash/CRC integrity checks ensure no tampering
- Rollback protection prevents installation of outdated or compromised firmware

---

# Cryptographic Key Security

Macnman ensures strong device-side protection of all encryption keys.

## Secure Key Storage
Keys are stored in:
- Protected flash regions  
- Hardware secure elements (when available)  
- Memory zones with readout disabled  

Keys are **never readable** over any interface.

## LoRaWAN Security
LoRaWAN models follow:
- AES-128 encryption  
- MIC integrity checks  
- Replay protection via frame counters  
- Randomized join-request nonces  

## Zero Cloud Key Handling
Macnman:
- Does **not** store customer keys  
- Does **not** receive or process keys  
- Does **not** manage network server access  

Key ownership remains entirely with the customer.

---

# Communication Security

Security depends on connectivity type, but all device-side standards are followed.

## LoRaWAN Devices
Security includes:
- AES-128 encryption at network & application layers  
- Device authentication via join-accept cryptography  
- Replay protection through frame counters  

## WiFi / LTE / NB-IoT Devices
Device-side protections include:
- Support for TLS (via customer applications)
- LTE/NB-IoT modem encryption managed by the mobile operator
- WPA2/WPA3 compatibility for WiFi modules  
- Watchdog timers to prevent unauthorized network behavior  

Macnman does **not** operate a cloud platform; customers fully control uplink communication.

---

# Hardware Security

Macnman uses robust hardware design techniques for field safety and tamper resistance.

## Physical Protection
- Industrial-grade enclosures  
- Tamper-evident sealing (model dependent)
- Conformal-coated PCBs for corrosion and moisture protection  
- RF shielding where needed  

## Debug Interface Hardening
Before production release:
- SWD/JTAG interfaces are locked or fused  
- Bootloader permissions restricted  
- Debug access disabled  

This blocks unauthorized firmware read/write operations.

---

# Deployment & Operational Security

Operational security depends on customer infrastructure, but devices are built to support secure deployment.

## Customer Responsibilities
Customers must secure their:
- LoRaWAN Network Server  
- Gateways  
- Cloud/dashboard systems  
- SIM card APNs  
- WiFi credentials  
- API keys  

## Recommended Best Practices
- Rotate LoRaWAN keys regularly  
- Use WPA3 for WiFi  
- Use SIMs with private/locked APNs  
- Install devices in low-tamper locations  
- Keep firmware up-to-date  

---

# Vulnerability Handling & Reporting

Macnman maintains an internal security review and response process.  
Security concerns can be reported to:

📧 **support@macnman.com**

We investigate and issue firmware updates or advisories when required.

---

# Standards & Compliance

Macnman devices align with:

- LoRaWAN 1.0.4 / 1.1 security specifications  
- AES-128 encryption standards  
- MCU vendor hardware security guidelines  
- CE / FCC / WPC compliance  
- RoHS environmental standards  
- UN38.3 battery transport safety  

We also follow internal engineering practices inspired by:
- ISO 27001 development security  
- OWASP IoT Top 10 principles  

---
