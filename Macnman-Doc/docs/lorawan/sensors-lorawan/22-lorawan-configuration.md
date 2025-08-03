---
id: maya_lorawan_basic_sensors_common
title: LoRaWAN Settings
---

## Keys & Identities

![lorawan keys](/img/lorawan/keys.svg)

- Scan the **QR code** to quickly register your device on most LoRaWAN Network Servers (LNS) that support QR-based onboarding.
- If you need to view the device credentials manually, tap the **“Keys”** button below the QR code to display information such as **DevEUI, AppEUI, & AppKey**.


## Keys Regeneration

![lorawan keys regenration](/img/lorawan/regenerationkeys.svg)

**Advanced Options – Key Regeneration**  
Inside the **Advanced** section of the **Keys & Identity** tab, users can **regenerate the LoRaWAN keys** (such as AppKey, NwkKey, etc.) to enhance device security.  
This is recommended when transferring device ownership or securing deployments in sensitive environments.


## LoRaWAN Class

![lorawan classes](/img/lorawan/class.svg)

**LoRaWAN Class**  
Select the appropriate **LoRaWAN Class** based on your device’s power source and application needs:

- **Class A**  
  Recommended for **battery-powered** devices. It offers the **lowest power consumption** and is suitable for sensors that transmit data occasionally.
  
- **Class C**  
  Designed for **mains-powered devices**.
  It keeps the receiver **always on**, allowing near-instant downlink communication from the server.  

Choosing the correct class helps optimize battery life and network responsiveness based on your deployment.

:::note

Controller are available in the Class C mode only
:::

  
s
## LoRaWAN Frequency

![lorawan frequency](/img/lorawan/freq.svg)

Select the appropriate LoRaWAN frequency band **based on your deployment region** and **local regulatory** standards.

- **Example**  
  `IN865(India)` , `IN868(Europe)` ,`US915(North America)`


## Adaptive Data Rate

![lorawan adr](/img/lorawan/adr.svg)

- **Adaptive Data Rate (ADR)**  

  Toggle **ON** to **enable ADR**, allowing the device to automatically adjust transmission settings for optimal power efficiency and network performance.s

- **Custom Spreading Factor (SF)**  
  - **Toggle OFF** to manually configure the **Spreading Factor**.
  - Use the **“+” & “–”** buttons to adjust the SF based on your desired **range** vs. **data rate** trade-off.

:::note

  Lower SF = faster data, shorter range &
  Higher SF = slower data, longer range

:::

## Confirmed Messages

![lorawan confirmed messages](/img/lorawan/confirm_messages.svg)

- **Confirmed Messages**  
  Toggle **ON** to enable **Confirmed Messages**, where each uplink requires an acknowledgment from the server.
  
- **Airtime Impact**  
  While this **improves delivery** reliability, it may **lead to higher power consumption** and **longer airtime**, especially in high-frequency transmissions.

<div class="alert alert--info custom-alert" role="alert">
  Use only for  <strong>critical data</strong>  that must be confirmed by the network.
</div>

