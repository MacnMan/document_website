---
id: maya_lorawan_basic_sensors_common
title: LoRaWAN Settings
---

## Keys & Identities

#### How to get the keys & identity of your device (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/hsxO_2o8zgM?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 

![lorawan keys](/img/lorawan/keys.svg)

- Scan the **QR code** to quickly register your device on most LoRaWAN Network Servers (LNS) that support QR-based onboarding.
- If you need to view the device credentials manually, tap the **“Keys”** button below the QR code to display information such as **DevEUI, AppEUI, & AppKey**.

---

## Keys Regeneration

#### How to regenerate the LoRaWAN keys (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/GsWdPMb0IAI?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


![lorawan keys regenration](/img/lorawan/regenerationkeys.svg)

**Advanced Options – Key Regeneration**  
Inside the **Advanced** section of the **Keys & Identity** tab, users can **regenerate the LoRaWAN keys** (such as AppKey, NwkKey, etc.) to enhance device security.  
This is recommended when transferring device ownership or securing deployments in sensitive environments.

---

## LoRaWAN Class

#### How to change the LoRaWAN Class (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/GsWdPMb0IAI?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


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

--- 

## LoRaWAN Frequency

#### How to change the LoRaWAN Regions (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/NSeZauWw7OI?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


![lorawan frequency](/img/lorawan/freq.svg)

Select the appropriate LoRaWAN frequency band **based on your deployment region** and **local regulatory** standards.

- **Example**  
  `IN865(India)` , `IN868(Europe)` ,`US915(North America)`

--- 

## Adaptive Data Rate

#### How to change the LoRaWAN Regions (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/KFODqRhkdAM?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


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

---

## Confirmed Messages


#### How to change the LoRaWAN Regions (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/KFODqRhkdAM?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


![lorawan confirmed messages](/img/lorawan/confirm_messages.svg)

- **Confirmed Messages**  
  Toggle **ON** to enable **Confirmed Messages**, where each uplink requires an acknowledgment from the server.
  
- **Airtime Impact**  
  While this **improves delivery** reliability, it may **lead to higher power consumption** and **longer airtime**, especially in high-frequency transmissions.

<div class="alert alert--info custom-alert" role="alert">
  Use only for  <strong>critical data</strong>  that must be confirmed by the network.
</div>

