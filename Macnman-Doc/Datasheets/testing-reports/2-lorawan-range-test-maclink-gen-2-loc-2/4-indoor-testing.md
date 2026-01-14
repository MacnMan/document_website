---
id: testing-scope
title: Indoor Coverage Testing
---

## Analysis of Data Trends Under Harsh Indian Environmental Conditions

Indoor testing at Location 1 was conducted across **multiple Indian environmental conditions**, including **monsoon rainfall, high ambient summer temperatures, and periods of elevated humidity**. This enabled a realistic evaluation of **LoRaWAN indoor coverage, signal stability, and packet delivery performance** under conditions commonly encountered in Indian buildings.

### Signal Degradation with Distance and Weather Impact

<br/>
![LoRaWAN gateway RSSI variation across building floors during indoor testing](/img/tech-reports/lorawan/lorawan-gateway-deployment-environment.webp)

As expected in real-world **LoRaWAN indoor deployments**, both **RSSI (Received Signal Strength Indicator)** and **SNR (Signal-to-Noise Ratio)** declined progressively with increasing vertical distance from the gateway.

During **monsoon and high-humidity conditions**, a **marginal reduction in RSSI and SNR** was observed on upper floors, with the most pronounced impact on the **4th floor**, where packet loss increased to approximately **8%**. This behavior is primarily attributed to:
- Increased atmospheric moisture
- Wet building surfaces
- Enhanced multipath reflections from damp concrete and metallic structures

Under **high-temperature summer conditions**, signal levels remained comparatively more stable across floors, indicating improved link consistency compared to monsoon periods.

---

### Impact of Weather Conditions on RSSI and SNR Across Floors

To further understand the influence of **harsh Indian weather conditions** on indoor LoRaWAN performance, a comparative analysis of **RSSI and SNR variations across building floors** was performed under different environmental conditions.

<br/>
![LoRaWAN gateway RSSI variation across floors under different weather conditions](/img/tech-reports/lorawan/lorawan-gateway-floor-vs-rssi-indoor-testing.svg)

<br/>
![LoRaWAN gateway SNR variation across floors under different weather conditions](/img/tech-reports/lorawan/lorawan-gateway-floor-vs-snr-indoor-testing.svg)

The RSSI versus floor analysis indicates that **signal strength degradation becomes more pronounced under monsoon and high-humidity conditions**, particularly on upper floors. Increased atmospheric moisture and wet building surfaces contribute to additional signal absorption and multipath reflections, resulting in lower average RSSI values compared to dry and summer conditions.

Similarly, the SNR versus floor analysis shows that **noise margins are slightly reduced during monsoon and high-humidity periods**, especially at greater vertical distances from the gateway. While the degradation remains within acceptable operational limits, these variations highlight the indirect influence of weather on indoor wireless signal behavior.

Under **high-temperature summer conditions**, both RSSI and SNR trends across floors remained comparatively stable, demonstrating that temperature alone has a minimal impact on link quality when humidity levels are low.

These observations confirm that **weather conditions primarily affect indoor LoRaWAN performance indirectly**, by amplifying structural attenuation and multipath effects rather than causing direct signal loss. With appropriate gateway placement and antenna orientation, reliable indoor coverage can be maintained even under adverse environmental conditions.

---

### Impact of Building Structure Under and High-Humidity Conditions

Structural elements such as **metallic walls, elevator shafts, reinforced concrete, and electrical infrastructure** consistently contributed to signal attenuation across all test cycles.

However, their impact was **more pronounced during monsoon and high-humidity conditions**, where moisture increased signal absorption and reflection. Floors located closer to **elevator shafts and metal-dense zones** exhibited lower RSSI and SNR values during wet conditions compared to dry weather, confirming that **structural attenuation and environmental factors compound each other** in dense indoor deployments.

---

### Floor Coverage Performance Across Seasonal Conditions

#### Horizontal Coverage

The gateway demonstrated **reliable horizontal coverage** on its installation floor and adjacent levels across all environmental conditions. The **basement, 1st floor, and 2nd floor** consistently maintained stable communication with minimal packet loss, even during periods of high humidity.

#### Vertical Coverage

Vertical signal propagation remained effective up to the **3rd floor** across all seasons. During **monsoon and high-humidity conditions**, a slight increase in packet loss was observed on the **4th floor**, while performance during summer conditions remained comparatively stable.

In addition to weather effects, **external RF influences**, including nearby cellular infrastructure, also contributed to performance variations observed at higher floors.

---

### Antenna Orientation Analysis Under Harsh Indoor Conditions

Antenna orientation played a **significant role in mitigating performance variations under adverse environmental conditions**.

**Upward Orientation (Towards Ceiling)**  
This configuration delivered consistent baseline performance for mid- and upper-floor coverage across all seasons and was particularly effective during dry and high-temperature conditions.

**Downward Orientation (Towards Floor)**  
A downward antenna tilt proved beneficial during **monsoon and high-humidity conditions**, reducing packet loss on lower floors by minimizing signal reflections from wet surfaces and metallic structures.

These observations highlight that **antenna orientation optimization becomes increasingly important in harsh Indian indoor environments**, offering a practical and low-cost method to maintain reliable LoRaWAN performance year-round.


Macnman-Doc/static
Macnman-Doc/static
Macnman-Doc/static