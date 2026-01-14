---
id: lorawan-gateway-outdoor-testing-maclink-gen-2
title: Outdoor Testing
---

# Location 3 - Near Line of Sight (LoS)

This section evaluates the **impact of harsh Indian weather conditions** on LoRaWAN gateway performance under **near line-of-sight (LoS) outdoor deployment scenarios**. Testing was conducted across different seasons, including **monsoon rainfall, high ambient temperatures, and elevated humidity**, to assess real-world outdoor network behavior beyond ideal laboratory conditions.

Near LoS conditions represent common outdoor deployments where partial obstructions, terrain variations, vegetation, and atmospheric factors influence signal propagation. These scenarios are particularly relevant for **urban perimeters, highways, campuses, utilities, and semi-open industrial environments**.

Macnman-Doc/static/img/tech-reports/lorawan/lorawan-gateway-near-los-outdoor-deployment.webp

## Location - Outdoor

Location : Sinhagad Ghat Road, Maharashtra 411025

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-near-los-outdoor-deployment.webp)

### RSSI & SNR vs Distance


### Impact of Weather Conditions Under Near LoS Outdoor Deployment

Near line-of-sight (LoS) outdoor testing demonstrates that **LoRaWAN gateway performance remains highly resilient under harsh Indian weather conditions**, with environmental factors influencing link behavior gradually rather than causing sudden degradation.

During **monsoon and high-humidity conditions**, a modest reduction in RSSI was observed at longer distances. This effect is primarily due to increased atmospheric moisture, wet ground surfaces, and surrounding vegetation, which introduce additional signal absorption and scattering. Despite these conditions, **SNR levels remained within stable operational margins**, ensuring consistent packet delivery and reliable uplink performance.

Under **high-temperature summer conditions**, RSSI and SNR trends across distance remained largely stable. Elevated temperatures alone did not result in noticeable degradation of link quality, confirming that LoRaWAN outdoor propagation is minimally impacted by temperature when humidity levels are low.

Overall, the near LoS deployment results indicate that **weather conditions affect outdoor LoRaWAN performance indirectly**, mainly by amplifying environmental absorption and multipath effects rather than disrupting connectivity. Compared to dense indoor environments, near LoS outdoor deployments exhibit **superior weather tolerance**, making them well-suited for long-range monitoring applications across urban perimeters, campuses, highways, and utility corridors throughout the year.
