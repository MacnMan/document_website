---
id: proposal_introduction_welding_data_collection_&_monitoring_system_proposal
title: Scope
---

# Welding Data Collection & Monitoring System Proposal

## Proposal Introduction
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-system-introduction.webp)

## Concept Design of Node Device
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-lorawan-node-design.webp)

## Concept Design of Hub Device
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-product-visualization.webp)

## How to Use It
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-gateway-hub-design.webp)

## System Architecture
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-network-architecture.webp)

## LoRa Central Gateway Block Diagram
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-component-block-diagram-node.svg)

## LoRa Welding Node Block Diagram
<br/>
![lorawan architecutre](/img/custom-products/macnman-welding-monitoring-component-block-diagram-gateway.svg)


## Scope
To design and deploy an industrial-grade, accurate, and reliable Welding Data Collection & Monitoring System that captures, logs, and transmits real-time welding activity parameters—primarily Arc-On Time—from multiple welding machines across the site. The solution will use wireless tracker nodes mounted on the welding ground cable and a central gateway/server to aggregate, process, and display actionable insights.

This system shall enable the Customer to:
- Monitor welding activity and machine utilization in real-time
- Track welder performance through precise Arc-On Time measurement
- Improve operational efficiency, quality, and project cost accuracy
- Enable data-driven decision making for manpower planning and job allocation
- Establish a digital proof of work for every weld cycle

## Product Definitions

## 1. Tracker Node (Welding Monitor)

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Arc Time Detection** | - Detects welding current: **10A – 1500A (AC/DC)**  <br/> - High-accuracy arc-on time measurement |
| **Wireless Communication** | - Long-range LoRa (Mesh) communication <br/> - AES-encrypted secure data transfer <br/> - Configurable reporting intervals & parameters |
| **Inductive Charging** | - Rechargeable battery with **~3 months runtime** per charge <br/> - Inductive charging activated only when welding current flows |
| **Integrated Display** | - Shows device battery level <br/> - Displays station ID / operator ID <br/> - Pairing & connectivity status |
| **Rugged Design** | - Compact size: **~6” × 3” × 2”** <br/> - IP55/IP65 enclosure with enclosed antenna |
| **Mounting Method** | - Mounted on welding ground cable |

---

## 2. Central Hub

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Display & Control** | - Integrated **7” touchscreen display** <br/> - Local welding activity dashboard <br/> - HDMI output for external display |
| **Connectivity** | - Collects data from multiple nodes via LoRa (Mesh) <br/> - USB port for local data storage/export |
| **Data Processing** | - Aggregates node packets <br/> - Displays machine/welder activity in real-time |

---

## 3. Communication & Data Flow

| **Stage** | **Details** |
|----------|-------------|
| **Node Data Collection** | - Detects welding arc-on activity <br/> - Logs arc time locally |
| **Node → Hub Data Transmission** | - Transmits arc-time events periodically or on-event <br/> - Uses LoRa (Mesh) <br/> - Packets include: **timestamp, node ID, operator ID, battery status** |
| **Hub Data Handling** | - Receives & aggregates all node data <br/> - Displays on touchscreen / HDMI activity board <br/> - Stores data on USB or exports for advanced analytics |

---

![lorawan architecutre](/img/lorawan/lorawan_macsync_archi.svg)

## Core Features

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Multi-Sensor Compatibility</strong>
    <p>Supports a wide range of environmental and industrial sensors including CO₂, temperature, humidity, and soil sensors.</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Universal Sensor Integration</strong>
    <p>Works seamlessly with RS485 and analog sensors (4–20 mA / 0–10 V) for broad system compatibility.</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Secure by Design</strong>
    <p>Features an STSAFE chip for encrypted storage and secure device authentication*</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Onboard Data Storage</strong>
    <p>Stores up to 3 years of data locally for uninterrupted logging.</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Rugged & Reliable</strong>
    <p>Built to withstand extreme conditions in industrial and outdoor environments.</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Simple Configuration via Maya App</strong>
    <p>Enables fast and easy setup through the BLE-powered Maya mobile app.</p>
  </div>
</div>

## MacSync Dataloggers LoRaWAN Variants

<table className="parameter-table">
  <thead>
    <tr>
      <th>Variant Name</th>
      <th>Power Source</th>
      <th>Battery Capacity</th>
      <th>Solar Support</th>
      <th>External Flash</th>
      <th>RS485/Analog</th>
      <th>Ideal For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MacSync Power Operated (Cost)</td>
      <td>12–24 V (Power)</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Low-cost industrial applications with stable power</td>
    </tr>
    <tr>
      <td>MacSync Power Operated (Standard)</td>
      <td>12–24 V (Power)</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Industrial or commercial sites with enhanced features</td>
    </tr>
    <tr>
      <td>MacSync Battery Operated</td>
      <td>Battery</td>
      <td>19 Ah</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Remote or portable deployments with low power</td>
    </tr>
    <tr>
      <td>MacSync Solar + Battery</td>
      <td>Solar + Battery</td>
      <td>Configurable</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Outdoor, off-grid, and energy-autonomous environments</td>
    </tr>
  </tbody>
</table>

## Applications

- **Agricultural Automation**  
  Use LoRaWAN-based MacSync devices for automating irrigation systems, monitoring soil moisture, and controlling pumps in remote farmlands without constant power or internet.

- **Water Level & Pump Monitoring**  
  Ideal for monitoring water tanks, borewells, and reservoirs using RS485/analog level sensors with real-time alerts and scheduled pump control via LoRaWAN.

- **Smart Cities & Municipal Infrastructure**  
  Enable remote monitoring of streetlights, water flow meters, and manhole gas levels through long-range LoRaWAN communication.

- **Industrial Asset Monitoring**  
  Track machine status, motor health, and remote asset condition in factories or substations using MacSync's rugged design and reliable LoRaWAN communication.

- **Cold Storage & Environmental Monitoring**  
  Monitor temperature, humidity, and air quality inside warehouses and storage units where long battery life and signal penetration are essential.


## Ideal For

- **Businesses**  
  Implement IoT-driven solutions to streamline operations, reduce costs, and improve real-time decision-making.

- **Researchers**  
  Collect precise environmental and scientific data using reliable, field-ready sensing and logging tools.

- **Facility Managers**  
  Enhance building performance with intelligent monitoring of energy use, air quality, and equipment status.



## Why do you need this user manual ?

Following are the several reasons you need this manual.

- **Effective Product Utilization** 

- **Troubleshooting Assistance** 

- **Maintenance & Care** 

- **Warranty & Service Information** 

- **Regulatory Compliance** 

- **Enhanced User Experience** 

- **Resource for Training** 



## Key Parameter Definitions

Below are key technical terms and identifiers relevant for configuring and operating your MacSync LoRaWAN® device:

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DevEUI</td>
      <td>Device EUI – a globally unique 64-bit identifier for the LoRaWAN end device, typically assigned by the manufacturer.</td>
    </tr>
    <tr>
      <td>AppEUI / JoinEUI</td>
      <td>Application/Join EUI used during the OTAA join process to identify the target application or network.</td>
    </tr>
    <tr>
      <td>AppKey</td>
      <td>Application Key used for end-to-end encryption during the join procedure in OTAA (Over-The-Air Activation).</td>
    </tr>
    <tr>
      <td>DevAddr</td>
      <td>Device Address assigned by the network server during OTAA or manually configured in ABP mode.</td>
    </tr>
    <tr>
      <td>NwkSKey</td>
      <td>Network Session Key used to secure communication between the device and the network server in ABP mode.</td>
    </tr>
    <tr>
      <td>AppSKey</td>
      <td>Application Session Key used to secure the payload data in ABP mode.</td>
    </tr>
    <tr>
      <td>Join Mode</td>
      <td>Specifies the activation method: OTAA (Over-The-Air Activation) or ABP (Activation By Personalization).</td>
    </tr>
    <tr>
      <td>LoRaWAN Class</td>
      <td>Specifies device class: Class A (default, low power), Class B (scheduled), or Class C (always listening).</td>
    </tr>
    <tr>
      <td>Spreading Factor (SF)</td>
      <td>Defines the data rate and range trade-off. Higher SF means longer range but lower data rate.</td>
    </tr>
    <tr>
      <td>RSSI</td>
      <td>Received Signal Strength Indicator – helps assess the LoRa signal quality received by the gateway.</td>
    </tr>
    <tr>
      <td>SNR</td>
      <td>Signal-to-Noise Ratio – helps evaluate the signal clarity and link reliability.</td>
    </tr>
    <tr>
      <td>Network Server</td>
      <td>The platform managing device connections, routing messages, and handling security (e.g., ChirpStack, TTS, Helium, etc.).</td>
    </tr>
  </tbody>
</table>
