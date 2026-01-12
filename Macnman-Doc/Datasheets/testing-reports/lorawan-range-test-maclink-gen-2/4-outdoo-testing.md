---
id: testing-scope
title: Outdoor Coverage Testing
---

# Location 2 - Outdoor Testing

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-field-testing-environment.webp)

## Analysis of Data Trends

### Signal Degradation with Distance

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-floor-vs-rssi-indoor-testing.svg)

As expected in real-world **LoRaWAN indoor deployments**, both **RSSI (Received Signal Strength Indicator)** and **SNR (Signal-to-Noise Ratio)** values decreased progressively with increasing distance from the gateway. The most pronounced signal degradation was observed on the **4th floor**, where packet loss peaked at approximately **8%**.

This behavior aligns with LoRaWAN propagation characteristics in multi-storey buildings, where increased vertical separation and structural obstructions directly impact link quality.

---

### Impact of Building Structure on Signal Quality

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-floor-vs-snr-indoor-testing.svg)

The test environment included multiple **signal-attenuating elements** such as metallic walls, elevator shafts, reinforced concrete, and electrical infrastructure. These structural components caused signal absorption, reflection, and multipath interference, resulting in measurable variations in RSSI and packet delivery.

Floors located closer to **elevator shafts and metal-dense zones** exhibited noticeably lower RSSI values, confirming that building composition plays a critical role in indoor LoRaWAN network planning.

---

### Floor Coverage Performance

#### Horizontal Coverage

The ALWG-1638 / MacLink Gen-2 LoRaWAN gateway demonstrated **strong horizontal coverage** on its installation floor and adjacent levels. The **basement, 1st floor, and 2nd floor** achieved near-complete coverage with **minimal packet loss and stable RSSI/SNR values**, indicating reliable communication for typical indoor IoT deployments.

#### Vertical Coverage

Vertical signal propagation extended to **more than half the building height**, with consistent performance up to the **3rd floor**. Although connectivity on the **4th floor** remained operational and within acceptable limits, a slight increase in packet loss was observed.

This degradation is attributed to a combination of increased distance, structural attenuation, and **external RF interference**, including the presence of a nearby mobile communication tower on the upper floor.

---

### Antenna Orientation Analysis (Indoor Deployment)

Antenna orientation was found to have a **measurable impact on indoor LoRaWAN performance**.

**Upward Orientation (Towards Ceiling)**  
This configuration delivered stable baseline performance on the **3rd floor and surrounding levels**, making it suitable for deployments prioritizing mid- to upper-floor coverage.

**Downward Orientation (Towards Floor)**  
A downward antenna tilt resulted in **reduced packet loss on lower floors**, particularly in the basement and first-floor areas. This orientation proved effective in mitigating signal reflections caused by metallic structures, improving overall signal consistency in dense indoor environments.

These findings highlight the importance of **antenna orientation optimization** as a practical and low-cost method to enhance LoRaWAN gateway performance in complex indoor installations.
