---
id: mactalk_dm_document
title: LoRa Gateway Node 
---
# Gateway Configuration Guide

## 1. App Setup & Device Connection

Use the **Macnman Maya** mobile application to configure the gateway.

**Steps:**
- Install the app from Play Store
- Login using your Gmail ID
- Scan for nearby devices
- Connect via:
  - Device selection, or
  - QR code scan

**What this does:**  
Establishes initial communication between your phone and the gateway for configuration.

---

## 2. Device Overview & Basic Controls

Once connected, the home screen allows:

- **Device Naming** → Assign a unique identifier for easier management  
- **Heartbeat Setting** → Defines how frequently the device communicates  
- **Data Read** → View live device data  

**Why it matters:**  
Helps in organizing multiple devices and controlling communication intervals.

---

## 3. Device Naming

To rename:
- Open **Name field**
- Enter new name
- Save

![title image](/img/mayascreens/name.svg)

**Best Practice:**  
Use structured naming (e.g., `Site-Floor-DeviceType`) for scalability.

---

## 4. LoRa Communication Setup

Navigate to **LoRa Settings** and ensure all parameters match between:
👉 Gateway ↔ Sensor Device

### Key Parameters

- **Class**  
  Must be identical on both ends (defines communication behavior)

- **Frequency (IN865)**  
  Standard LoRa band for India

- **Spreading Factor (SF)**  
  - Lower SF → faster, shorter range  
  - Higher SF → slower, longer range  

- **Channel**  
  Must be the same for successful communication

- **Slave ID**  
  Unique ID for each connected device

- **Encryption Key**  
  Required for secure data transmission

![title image](/img/mayascreens/mactalk-lora-setting.svg)


**What this does:**  
Ensures reliable and secure wireless communication between devices.

---

## 5. Network Capacity

- Supports up to **20 devices per gateway**
- Recommended with **5-minute uplink interval**

**Note:**  
Higher frequency of data transmission may reduce capacity.

---

## 6. RS485 Communication Setup

Used when connecting external sensors via RS485.

Navigate to **RS485 Settings**

### Parameters

- **Baud Rate**  
  Must match sensor specification (e.g., 9600, 19200)

- **Parity**  
  Options:
  - None  
  - Even  
  - Odd  

**What this does:**  
Ensures correct serial communication and accurate data acquisition.

---
