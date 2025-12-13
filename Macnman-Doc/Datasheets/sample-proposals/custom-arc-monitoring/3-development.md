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
      <td>Optimized signal routing for low‑noise current measurement</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Low‑Power Component Selection</td>
      <td>Use of ultra‑low‑power ICs to extend battery life</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Unique Serial Code Marking</td>
      <td>Printed on PCB and/or external sticker for mapping & tracking</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Magnetic Switch Integration</td>
      <td>Built‑in reed sensor for power activation & maintenance mode</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>LoRa (Mesh) Hardware Support</td>
      <td>RF‑optimized layout for stable Mesh communication</td>
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
      <td>Low‑power optimized firmware for arc‑time detection</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>LoRa (Mesh) Stack Integration</td>
      <td>ADR support, AES security, uplink/downlink, duty‑cycle control</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Current Sensor Processing</td>
      <td>Filtering algorithms + auto‑calibration for environment variations</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>OTA Support</td>
      <td>Remote configuration updates over LoRa (Mesh)</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Event‑Driven Architecture</td>
      <td>Real‑time arc event detection & packet generation</td>
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
      <td>Ultra‑low‑power state with wake‑up via magnetic switch or sensor event</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Battery Life Optimization</td>
      <td>System engineered to exceed 5 months of operation under typical usage</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Low‑Quiescent Power Circuit</td>
      <td>Efficient power supply design using low‑Iq components</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>
