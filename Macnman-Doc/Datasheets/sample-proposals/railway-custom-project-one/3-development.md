---
id: custom_product_development_scope
title: Development Scopes
---

# Development Scope

## PCB Design & Hardware Development

<table className="parameter-table">
  <thead>
    <tr>
      <th>Hardware Development Tasks</th>
      <th>Description</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4‑Layer PCB Design</td>
      <td>Optimized signal routing for LiDAR, camera interfaces, and high‑speed data acquisition</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Low‑Power Component Selection</td>
      <td>Selection of industrial‑grade components for outdoor, trackside operation</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Unique Serial Code Marking</td>
      <td>Printed on PCB and/or external sticker for mapping & tracking</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Magnetic Switch Integration</td>
      <td>Provision for service / maintenance mode activation during installation and commissioning</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Wi‑Fi / Edge Connectivity Hardware Support</td>
      <td>RF‑optimized layout for stable Wi‑Fi communication with outdoor access points</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Rugged Enclosure Compatibility</td>
      <td>Mechanical + thermal design alignment with enclosure</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

## Firmware Development

<table className="parameter-table">
  <thead>
    <tr>
      <th>Firmware Development Tasks</th>
      <th>Description</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Embedded Firmware (C/C++)</td>
      <td>Embedded firmware for multi‑sensor data acquisition, fusion, and real‑time processing</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Wi‑Fi Communication Stack Integration</td>
      <td>Secure uplink/downlink communication with cloud or on‑premise servers</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>LiDAR & Camera Data Processing</td>
      <td>Depth profiling, wagon segmentation, speed detection, and data correlation</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>OTA Support</td>
      <td>Remote configuration and firmware updates over wireless network</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Event‑Driven Architecture</td>
      <td>Event‑driven processing based on train movement, wagon detection, and sensor triggers</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Diagnostics & Watchdog</td>
      <td>Fault monitoring, self‑check, and watchdog timer handling</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

## Power Management

<table className="parameter-table">
  <thead>
    <tr>
      <th>Power Management Tasks</th>
      <th>Description</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Deep Sleep Mode</td>
      <td>Ultra‑low‑power state with wake‑up based on train movement detection or maintenance trigger</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Battery Life Optimization</td>
      <td>Power architecture designed for continuous outdoor operation with stable supply</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Low‑Quiescent Power Circuit</td>
      <td>Efficient power supply design using low‑Iq components</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>
