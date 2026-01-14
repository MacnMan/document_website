---
id: testing_envirnoment
title: Testing Environment
---

# Testing Environment

## General Specifications

This testing environment was designed to represent **real-world MacTalk LoRa device-to-device (D2D) communication deployments**, covering **indoor building environments, dense urban areas, and near line-of-sight (LoS) outdoor scenarios along highway corridors**.

The selected test locations and deployment methods reflect practical installation and operating conditions commonly encountered in **industrial facilities, urban infrastructure, and field deployments**, where **direct device-to-device communication** is required without continuous reliance on gateways or backhaul connectivity.

The testing campaign was conducted across three primary environments:

- **Indoor Building Environment** – MacTalk-enabled LoRa devices were deployed across multiple floors inside a reinforced concrete office building to evaluate device-to-device communication stability, vertical signal penetration, RSSI, SNR, and packet delivery performance. During testing, reliable D2D communication was successfully achieved up to the **6th floor**, demonstrating strong vertical penetration capability in dense indoor environments.

- **Urban Deployment Environment** – Devices installed within a dense urban area to assess the impact of surrounding buildings, electrical noise, and partial obstructions on direct device-to-device LoRa communication.

- **Near Line-of-Sight (LoS) Highway Environment** – Devices deployed along a highway corridor under near LoS conditions to evaluate communication range, link reliability, and performance over distance in open yet non-ideal outdoor scenarios.

These environments were intentionally selected to ensure the test results accurately represent **real-world MacTalk device-to-device communication behavior**, rather than controlled or laboratory-based conditions.

### Environmental and Deployment Conditions Considered

The testing environment also accounted for **environmental and operational variations** observed during repeated test cycles, including:

- High ambient temperatures during summer conditions
- Elevated humidity and rainfall during monsoon periods
- Urban RF noise and interference
- Vehicular movement and dynamic surroundings in highway deployments
- Partial obstructions and near line-of-sight (LoS) conditions common in field installations

These factors were intentionally included to ensure the results reflect **practical, real-world operating conditions** for MacTalk device-to-device communication.

Detailed performance metrics, observations, and corresponding graphs are presented below to support **deployment planning, device placement decisions, and network design optimization**.

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
      <td>Indoor office building with multiple floors, where MacTalk-enabled LoRa devices were deployed across building levels to evaluate vertical penetration and device-to-device communication reliability up to the 6th floor</td>
    </tr>
    <tr>
      <td><strong>Location 2</strong></td>
      <td>Dense urban area with MacTalk-enabled LoRa devices deployed to evaluate device-to-device communication under urban interference and obstruction conditions</td>
    </tr>
    <tr>
      <td><strong>Location 3</strong></td>
      <td>Near line-of-sight outdoor environment along a highway corridor to evaluate long-range MacTalk device-to-device communication</td>
    </tr>
    <tr>
      <td><strong>Device Placement (Location 1)</strong></td>
      <td>MacTalk-enabled LoRa devices deployed from the basement through upper floors, including successful communication testing up to the 6th floor, to evaluate RSSI, SNR, packet delivery, and vertical penetration performance in a multi-storey building</td>
    </tr>
    <tr>
      <td><strong>Device Placement (Outdoor)</strong></td>
      <td>Devices strategically positioned at varying distances to evaluate RSSI, SNR, and packet loss over distance in device-to-device communication scenarios</td>
    </tr>
  </tbody>
</table>
