---
id: books_inside_lorawan_spreading_factor
title: Spreading Factor & ADR
---

## What Are LoRa Spreading Factors?

Imagine you're trying to talk to someone across a wide, open field.

- If you **shout quickly** (short, fast messages), your voice may not travel as far—but you can share more in less time.
- If you **speak slowly and clearly** (drawing out each word), your voice carries farther—but it takes longer to say the same thing.

This is exactly how **Spreading Factors (SF)** work in **LoRa communication**.

#### Understanding Spreading Factors

In LoRa, the **spreading factor** controls how fast data (also called “chirps”) is sent:

Choosing the right spreading factor is a balance between **range, power efficiency, and data speed**—just like choosing how loudly or slowly to speak depending on how far away your listener is.
<table className="parameter-table">
  <thead>
    <tr>
      <th>Spreading Factor</th>
      <th>Description</th>
      <th>Data Rate</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SF7 (Lower SF)</td>
      <td>Talking fast – sends more data quickly but covers shorter distances</td>
      <td>High</td>
      <td>Short</td>
    </tr>
    <tr>
      <td>SF12 (Higher SF)</td>
      <td>Speaking slowly – data travels farther but takes more time</td>
      <td>Low</td>
      <td>Long</td>
    </tr>
  </tbody>
</table>

## The Influence of Spreading Factors in LoRa

LoRa technology uses Spreading Factors (SF) ranging from SF7 to SF12, which determine how data is transmitted over long distances. These spreading factors influence several critical aspects of LoRa communication and play a key role in optimizing network performance based on your application needs.

### Data Rate
Using a **lower spreading factor** like SF7 allows devices to send **more information quickly**, increasing the **data rate** but reducing the **communication range**.

- **Example:** At SF7 and 125 kHz bandwidth, the bit rate is **5.5 kbit/s**. Increasing the bandwidth to 500 kHz boosts it to **21.9 kbit/s**.
- **Analogy:** It's like using a wider pipe to send water faster—higher bandwidth sends more data in less time, but range drops.

### Distance 
Higher spreading factors, like **SF12**, allow signals to **travel longer distances** but at slower speeds.

- **Analogy:** It's like **speaking slowly and clearly** across a canyon—your voice travels farther, but it takes more time to deliver the message.

### Time-on-Air
A **higher spreading factor** means the message takes **longer to transmit**, which increases **time-on-air**.

- Longer time-on-air consumes **more energy**, affecting battery life.
- You can use tools like **The Things Network’s LoRaWAN airtime calculator** to estimate airtime based on SF, payload size, and bandwidth.

### Receiver Sensitivity
Higher spreading factors improve **receiver sensitivity**, enabling the device to pick up **weaker signals** from far away.

- **Example:** At **SF12**, sensitivity can reach **-137 dBm**, which is excellent for long-range applications.
- **Analogy:** Like hearing a **slow, loud shout** from a distance.

### Battery Life 
Using a **higher spreading factor** drains the battery faster because the radio stays on longer.

- **Tip:** For battery-powered sensors, choosing the right SF is essential to balance **longevity** and **performance**.

### Why It Matters 
Spreading factors allow LoRaWAN networks to **balance data speed, range, and power consumption**, ensuring **reliable communication** across urban, rural, and remote environments. Selecting the correct SF is crucial for **IoT deployments** like smart agriculture, asset tracking, and environmental monitoring.


## How Adaptive Data Rate (ADR) Works in LoRaWAN

**Adaptive Data Rate (ADR)** is a key feature of LoRaWAN that helps optimize network performance by automatically adjusting a device’s communication settings for better efficiency.

### Key Parameters Managed by ADR

ADR intelligently manages the following transmission parameters:

- **Spreading Factor (SF)**:  
  Determines how “loud” your message is and how far it can travel. A higher SF increases range but reduces data rate.

- **Bandwidth**:  
  Think of this as the size of the road your message travels on — wider bandwidth allows more data to flow faster.

- **Transmission Power**:  
  Refers to the signal strength. Higher power means the signal can reach farther, but it consumes more battery.


### The Balancing Act of ADR

ADR dynamically adjusts settings based on the device’s **distance from the gateway**:

- **Close to Gateway**:  
  The device can communicate quickly using **lower spreading factor** and **higher data rate**, saving energy.

- **Far from Gateway**:  
  It will use **higher spreading factor** and **transmission power** to ensure reliable communication over long distances.

### When to Enable ADR

ADR is best used when **radio frequency (RF) conditions are stable**, making it ideal for:

- Static devices like **parking sensors**
- Environmental monitors placed in fixed locations

## ADR & Mobile Devices

Mobile LoRaWAN devices can benefit too:

- If a device detects that it has remained **stationary for a period**, it can **enable ADR** to conserve energy while maintaining optimal performance.


## Scheduling ADR Requests in LoRaWAN

**Adaptive Data Rate (ADR)** in LoRaWAN is not a one-time setup — it involves continuous monitoring and scheduling. Here's how ADR requests are managed over time:

### Initial ADR Request
- Triggered **right after a device joins the network**.
- Helps initiate the communication configuration.
- This initial setup may not be accurate due to **limited signal measurements**, so some flexibility is applied during early transmissions.

### Regular ADR Requests
- Once the network collects **enough signal and quality data**, it **schedules periodic ADR requests**.
- These requests are typically attached to **uplink messages**, minimizing overhead.

### Trigger-Based Requests
- ADR requests are also sent when:
  - A device is stuck at the **lowest data rate (DR0)**.
  - The device **hasn’t received any downlink messages** for a while.
- These help ensure the device adjusts to changing network conditions.

### Refusal to Adjust
- If a device **repeatedly ignores ADR requests**, it may signal:
  - A **misconfiguration** on the device
  - **Incompatibility** with the LoRaWAN Network Server
  - Or **firmware limitations** preventing ADR compliance

By managing ADR requests intelligently, LoRaWAN networks can ensure that devices maintain **optimal performance, coverage, and battery life** — even in changing environments.

## RSSI (Received Signal Strength Indicator)

Think of **RSSI** as how loud someone sounds at a noisy party.

- A **strong signal** (closer to 0 dBm) is like someone shouting — easy to hear.
- A **weak signal** (very negative dBm, e.g., -120 dBm) is like someone whispering from across the room — hard to understand.

In LoRaWAN:
- RSSI measures **signal strength** between a transmitter (end device) and a receiver (gateway).
- It’s affected by:
  - **Distance** (path loss)
  - **Antenna gain** (how strong the device can “speak”)
  - **Obstacles** (walls, cables, connectors)

> **Higher RSSI = better signal clarity**, but it's only part of the story.

## SNR (Signal-to-Noise Ratio)

Now imagine trying to talk in a noisy room. **SNR** measures how well your voice stands out from the background noise.

#### 📐 Formula:
```math
SNR (dB) = P_received_signal (dBm) - P_noise (dBm)
