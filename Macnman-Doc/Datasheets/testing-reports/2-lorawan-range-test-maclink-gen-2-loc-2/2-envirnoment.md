---
id: testing_envirnoment
title: Testing Environment
---

# Testing Environment

## General Specifications

This testing environment was designed to represent **real-world LoRaWAN deployments in India**, covering indoor, urban, rooftop, and open outdoor scenarios under varying environmental and structural conditions. The selected locations and deployment methods reflect practical installation challenges commonly encountered in **smart buildings, industrial facilities, and urban infrastructure**.

As most **LoRaWAN gateway and device deployments** take place in **urban environments, industrial facilities, and multi-storey buildings**, extensive field testing was conducted to closely simulate real-world installation scenarios.

The testing campaign began with the **MacLink Gen-2 LoRaWAN Outdoor Gateway** deployed inside a **four-storey office building**, representing a typical indoor environment with concrete structures, metallic elements, elevators, and electrical interference. This phase focused on evaluating **indoor LoRaWAN coverage, vertical signal penetration, RSSI, SNR, and packet delivery reliability** across multiple floors.

In the second phase of testing, the gateway was mounted on the **building rooftop** to assess **horizontal and radial LoRaWAN range** in three different directions. This setup accounted for **varying geographic conditions, partial obstructions, and non-uniform terrain**, which are common in real deployments and directly influence LoRaWAN performance.

The gateway was further evaluated under **near line-of-sight (LOS) and non-LOS conditions**, reflecting practical deployment constraints where perfectly clear LOS is rarely achievable in urban and industrial environments. This approach ensured that the results accurately represent **realistic LoRaWAN network behavior rather than ideal laboratory conditions**.

### Environmental and Deployment Conditions Considered

The testing environment also accounted for **seasonal and environmental variations** observed during repeated test cycles, including:

- High ambient temperatures during summer conditions
- Elevated humidity and rainfall during monsoon periods
- Dust-prone outdoor conditions affecting antenna exposure
- Partial obstructions and non-line-of-sight (NLOS) scenarios common in urban deployments

These factors were intentionally included to ensure the test results reflect **year-round operational conditions** rather than short-term or idealized scenarios.

Detailed performance metrics, observations, and corresponding graphs are presented below to support **deployment planning, gateway placement decisions, and network design optimization**.

<table className="parameter-table">
  <thead>
    <tr>
      <th>Test Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Location 1</strong></td>
      <td>Office building with 4 floors, with the LoRaWAN gateway installed at the basement level</td>
    </tr>
    <tr>
      <td><strong>Location 2</strong></td>
      <td>Office building with the LoRaWAN gateway mounted at the rooftop to evaluate horizontal and radial coverage</td>
    </tr>
    <tr>
      <td><strong>Location 3</strong></td>
      <td>Open outdoor environment at Sinhagad Ghat Road, Maharashtra 411025, to evaluate long-range LoRaWAN performance</td>
    </tr>
    <tr>
      <td><strong>Sensor Placement (Location 1)</strong></td>
      <td>LoRaWAN sensor nodes installed on basement and floors 1, 2, 3, and 4 to measure signal strength and packet delivery across vertical building levels</td>
    </tr>
    <tr>
      <td><strong>Sensor Placement (Outdoor)</strong></td>
      <td>Sensors strategically positioned at varying distances from the gateway to evaluate RSSI, SNR, and packet loss over distance</td>
    </tr>
  </tbody>
</table>
