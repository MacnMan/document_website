---
id: mactalk_lora_door_sensor_configuration
title: LoRa Door Sensor
---
# LoRa Door Sensor Configuration Guide

## 1. Device Naming

- Open **Name field**
- Enter new name
- Save

![title image](/img/mayascreens/name.svg)


**Recommendation:**  
Use location-based naming (e.g., `Warehouse-Door-01`) for clarity.

---

## 2. LoRa Communication Settings

Navigate to **LoRa Settings** and verify parameters.

All values must match between:
👉 Door Sensor ↔ Gateway

### Required Parameters

- **Class** → Must match  
- **Frequency (IN865)** → Standard in India  
- **Spreading Factor (SF)**  
  - Lower SF → Faster, shorter range  
  - Higher SF → Slower, longer range  

- **Channel** → Must be identical  
- **Slave ID** → Unique per device  
- **Encryption Key** → Required for secure communication  

**Purpose:**  
Ensures reliable and secure LoRaWAN communication.

---

## 3. Network Capacity

- Up to **20 devices per gateway**
- Recommended at **5-minute uplink interval**

**Note:**  
Higher transmission frequency can reduce supported device count.

---

## 4. Viewing Sensor Data

Go to: **Device Data**

You can monitor:
- **Door Status**
- **Door Cycle Count**
- **Battery Status**

### Status Values
- `0` → Door Closed  
- `1` → Door Open  

![title image](/img/mayascreens/door-sensor-data-mactalk.svg)

**Purpose:**  
Provides real-time monitoring of door activity.

---

## 5. Modbus Data Reading (Advanced)

To read data via Modbus:

- Connect gateway to PC using **RS485 converter**
- Use the following parameters:

| Parameter       | Value |
|----------------|------|
| Slave ID       | 6    |
| Function Code  | 4    |
| Address        | 0    |

![title image](/img/mayascreens/register-info-for-door-sensor-mactalk.png)

**Purpose:**  
Allows integration with external systems or software for data logging.

---
