---
id: lorawan_gateway_placement_recommendation_maclink_gen_2
title: Deployment Recommendation
---

# Recommendations Based on Test Results

Based on the comprehensive **field testing and performance evaluation** of the LoRaWAN gateway across **multi-floor indoor environments, urban directional scenarios, rooftop installations, and open outdoor spaces**, the following recommendations are proposed to ensure **optimal coverage, reliability, and scalability** in real-world deployments.

---

## Gateway Placement Strategy

### Indoor and Multi-Floor Buildings
- For buildings with **up to four to six floors**, a gateway installed at the **basement or lower floors** can still provide effective vertical coverage.
- For taller buildings or higher node density, a **mid-height gateway placement** is recommended to balance vertical and horizontal signal propagation.
- Avoid installing gateways near **elevator shafts, dense metallic structures, electrical rooms, or heavy machinery**, as these were observed to cause increased signal attenuation and packet loss.

### Rooftop Deployments
- Rooftop installation is strongly recommended for **urban, campus-wide, and industrial deployments**, as it enables superior horizontal and radial coverage.
- Gateways should be mounted with sufficient clearance from parapets, walls, and nearby structures to minimize obstruction and multipath interference.

---

## Antenna Orientation and Placement

- Antenna orientation has a **direct and measurable impact** on indoor LoRaWAN performance.
- A **slight downward antenna tilt** is recommended when prioritizing coverage for lower floors, particularly in metal-dense buildings.
- A **neutral or upward antenna orientation** is suitable when coverage is required for mid-to-upper floors.
- Minor antenna adjustments during installation were observed to significantly improve **RSSI stability and packet delivery reliability**.

---

## Network Design and Redundancy

- In environments with **high EMI, dense structures, or critical monitoring requirements**, deploying **multiple gateways** is preferred over relying on a single installation.
- Overlapping gateway coverage improves network resilience, reduces packet loss, and enhances overall reliability.
- Directional testing results show that **geographic variations and urban obstructions** can significantly affect coverage, making **site surveys recommended prior to large-scale deployments**.

---

## Indoor vs Outdoor Deployment Considerations

- Indoor deployments should prioritize **consistent RSSI and SNR stability** rather than maximum communication distance.
- Outdoor and near line-of-sight (LOS) deployments demonstrated **significantly extended communication range** and are ideal for open spaces, campuses, and industrial perimeters.
- For mixed indoor–outdoor networks, a combination of **rooftop gateways and strategically placed indoor gateways** delivers the most reliable performance.

---

## Configuration and Operational Best Practices

- Fixed transmission power and controlled uplink intervals provide **predictable and repeatable network behavior**.
- Adaptive Data Rate (ADR) may be enabled after initial deployment validation to optimize network efficiency in stable environments.
- Continuous monitoring of **RSSI, SNR, and packet loss trends** is recommended to proactively identify coverage gaps or interference issues.

---

## Scalability and Future Expansion

- The validated gateway configuration supports **scalable deployments** across buildings, campuses, and urban areas.
- As node density increases, gateway placement and density should be adjusted to maintain consistent performance.
- The results of this test report can be used as a **baseline reference** for future expansions, network optimization, and additional site deployments.

---

## Summary

The field test results confirm that **strategic gateway placement, proper antenna orientation, and thoughtful network design** are critical to achieving reliable LoRaWAN performance in real-world environments.  
Following these recommendations will help ensure **stable connectivity, low packet loss, and predictable network behavior** across indoor, urban, and outdoor deployments.
