---
id: testing-scope
title: Indoor Coverage Testing
---

# Location 1 - Indoor Testing

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-deployment-environment.webp)

## Analysis of Data Trends Across Weather Conditions

The indoor testing at Location 1 was carried out across **multiple weather and seasonal conditions**, including **monsoon rainfall, high summer temperatures, and periods of elevated humidity**. This allowed a comparative evaluation of how environmental factors influence **LoRaWAN indoor coverage, signal stability, and packet delivery** under realistic deployment conditions.

<br/>
![LoRaWAN gateway RSSI variation across building floors during indoor testing](/img/tech-reports/lorawan/lorawan-gateway-rssi-vs-floor-indoor-testing.webp)

<br/>
![LoRaWAN gateway SNR variation across building floors during indoor testing](/img/tech-reports/lorawan/lorawan-gateway-snr-vs-floor-indoor-testing.webp)

---

### Signal Degradation with Distance and Weather Impact

Across all test cycles, both **RSSI (Received Signal Strength Indicator)** and **SNR (Signal-to-Noise Ratio)** showed a progressive decline with increasing vertical distance from the gateway, which is expected in multi-storey indoor environments.

During **monsoon and high-humidity conditions**, a **marginal reduction in RSSI and SNR** was observed on upper floors, most notably on the **4th floor**, where packet loss increased to approximately **8%**. This behavior is attributed to:
- Increased atmospheric moisture
- Wet building surfaces
- Enhanced multipath reflections from damp metallic and concrete structures

Under **summer conditions**, with higher ambient temperatures and relatively lower humidity, RSSI and SNR values remained **more stable across floors**, resulting in improved packet consistency compared to monsoon periods.

These trends align with real-world LoRaWAN propagation characteristics, where **weather conditions indirectly influence link quality** rather than causing abrupt connectivity loss.

---

### Impact of Building Structure Under Different Weather Conditions

<br/>
![LoRaWAN gateway SNR impact due to building structure during indoor testing](/img/tech-reports/lorawan/lorawan-gateway-floor-vs-snr-indoor-testing.webp)

Structural elements such as **metallic walls, elevator shafts, reinforced concrete, and electrical infrastructure** consistently contributed to signal attenuation across all seasons.

However, their impact was **more pronounced during humid and rainy conditions**, where moisture increased signal absorption and reflection. Floors located near **elevator shafts and metal-dense zones** exhibited lower RSSI and SNR during monsoon conditions compared to dry weather, confirming that **structural attenuation and weather effects compound each other** in dense indoor environments.

---

### Floor Coverage Performance Across Seasons

#### Horizontal Coverage

The gateway demonstrated **reliable horizontal coverage** on its installation floor and adjacent levels across all weather conditions. The **basement, 1st floor, and 2nd floor** consistently maintained stable communication with minimal packet loss, even during periods of high humidity.

#### Vertical Coverage

Vertical signal propagation remained effective up to the **3rd floor** across all seasons. During **monsoon and high-humidity conditions**, a slight increase in packet loss was observed on the **4th floor**, while performance during summer conditions remained comparatively stable.

In addition to weather effects, **external RF influences**, including nearby cellular infrastructure, contributed to performance variations observed at higher floors.

---

### Antenna Orientation Analysis Under Varying Weather Conditions

Antenna orientation played a **significant role in mitigating weather-related performance variations** during indoor deployments.

**Upward Orientation (Towards Ceiling)**  
This configuration delivered consistent baseline performance for mid- and upper-floor coverage across all weather conditions and was particularly effective during dry and summer periods.

**Downward Orientation (Towards Floor)**  
A downward antenna tilt proved beneficial during **monsoon and high-humidity conditions**, reducing packet loss on lower floors by minimizing signal reflections from wet surfaces and metallic structures.

These observations demonstrate that **antenna orientation optimization becomes increasingly important under adverse weather conditions**, offering a practical and low-cost method to maintain stable indoor LoRaWAN performance.

---

### Summary of Weather Impact on Indoor LoRaWAN Performance

Overall, the indoor test results indicate that **LoRaWAN networks remain robust across seasonal and weather variations**. Environmental factors such as **rainfall and humidity introduce only marginal signal degradation**, primarily at greater vertical distances.

With appropriate **gateway placement, antenna orientation, and network design**, reliable indoor LoRaWAN performance can be maintained **year-round**, even under **harsh Indian weather conditions**.

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
