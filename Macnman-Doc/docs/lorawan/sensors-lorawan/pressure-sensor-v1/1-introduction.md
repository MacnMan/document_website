---
id: macsyncls_introduction
title: Introduciton
---

# MacSync-LPS1

## Product Overview

**MacSync-LPS1** is a compact and rugged LoRaWAN® pressure sensor designed for accurate, real-time monitoring of liquid and gas pressure across industrial, smart infrastructure, and utility applications. Utilizing a high-precision Hall Effect sensing mechanism, it delivers reliable data even under fluctuating environmental conditions or long-distance deployments.

Housed in a weatherproof IP65-rated enclosure and powered by a long-life battery, MacSync-LPS1 is ideal for both remote and fixed installations. With support for LoRaWAN® Class A & C, the sensor ensures efficient wireless transmission and flexible uplink options for seamless integration into any monitoring system.

Configuration is simple and wireless using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share) over Bluetooth Low Energy (BLE). Users can quickly adjust thresholds, intervals, and review device data from their mobile phone—no technical expertise required.


![pressure sensor](/img/lorawan/sensors/temperaturehumi/pressure-sensor-lora-hero.webp)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://macnman.com/downloads/MacSync-LPS1.pdf" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>[Download Datasheet](https://macnman.com/downloads/MacSync-LPS1.pdf)</strong>
      <p>Click here to download the full MacSync-LT1 technical datasheet
.</p>
    </div>
  </a>
  <a href="https://github.com/MacnMan/LoRa_Module_SDK/tree/main/SDK/LoRaWAN_AT_Slave" 
  className="icon-card">
    <div className="icon">📝</div>
    <div>
      <strong>Decoders</strong>
      <p>Click here to view the decoders for MacSync-LWS6</p>
    </div>
  </a>
</div>

<div style={{ margin: "2rem 0" }}></div>


## Key Features of MacSync-LPS1

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>High-Quality Hall Effect Sensor</strong>
    Offers reliable and accurate pressure measurements even in challenging environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Wide Pressure Range</strong>
    Measures pressure from 0 to 1.2 MPa and can withstand up to 2.4 MPa.
  </div>
  <div className="reusable-feature-card">
    <strong>High Accuracy & Fast Response</strong>
    Ensures ±1.5%FS measurement accuracy with rapid response time.
  </div>
  <div className="reusable-feature-card">
    <strong>LoRaWAN® Class A & C Communication</strong>
    Flexible uplink strategies for low-latency and low-power wireless transmission.
  </div>
  <div className="reusable-feature-card">
    <strong>Low Power Consumption</strong>
    Ideal for long-term deployments with minimal maintenance needs.
  </div>
  <div className="reusable-feature-card">
    <strong>Extended Cycle Life</strong>
    Over 1,000,000 operational cycles for dependable long-term performance.
  </div>
  <div className="reusable-feature-card">
    <strong>Macnman Beam Protocol Support</strong>
    Allows local device-to-device LoRa communication without a gateway.
  </div>
  <div className="reusable-feature-card">
    <strong>Secure Onboarding</strong>
    Pre-flashed with unique DevEUI / AppEUI / AppKey credentials for secure provisioning.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Uplink Modes</strong>
    Supports periodic, threshold-based, and event-driven data reporting.
  </div>
  <div className="reusable-feature-card">
    <strong>Full LoRaWAN® Compatibility</strong>
    Seamless integration with all major LoRaWAN® network servers and gateways.
  </div>
</div>

## Where You Can Use MacSync-LPS1?

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Smart Water Systems 💧</strong>
    Monitor water pressure in pipelines and pumps for efficient municipal water management and early leak detection.
  </div>
  <div className="reusable-feature-card">
    <strong>Industrial Process Control 🏭</strong>
    Maintain optimal pressure in chemical, food processing, and manufacturing systems to ensure safety and product quality.
  </div>
  <div className="reusable-feature-card">
    <strong>Oil & Gas Pipelines 🛢️</strong>
    Measure pressure in gas or liquid pipelines to prevent overpressure events and maintain system integrity.
  </div>
  <div className="reusable-feature-card">
    <strong>HVAC & Building Automation 🌬️</strong>
    Control and monitor fluid and air pressure in heating, ventilation, and cooling systems for optimized performance.
  </div>
  <div className="reusable-feature-card">
    <strong>Remote Pump Stations 🚰</strong>
    Monitor real-time pump outlet/inlet pressure and prevent failures in remote or unmanned pump stations.
  </div>
  <div className="reusable-feature-card">
    <strong>Agricultural Irrigation Systems 🌾</strong>
    Track pressure in irrigation networks to ensure proper distribution of water across fields and minimize waste.
  </div>
  <div className="reusable-feature-card">
    <strong>Environmental Monitoring 🌎</strong>
    Collect fluid pressure data from groundwater wells, reservoirs, and environmental research setups.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Infrastructure Projects 🏗️</strong>
    Integrate into IoT-based pressure monitoring in smart cities and infrastructure developments.
  </div>
</div>

## MacSync-LPS1 LoRaWAN Variants

<table className="parameter-table">
  <thead>
    <tr>
      <th>Variant Name</th>
      <th>Power Source</th>
      <th>Battery Capacity</th>
      <th>Solar Support</th>
      <th>External Flash</th>
      <th>Ideal For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MacSync Power Operated (Standard)</td>
      <td>12–24 V (DC Power)</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Industrial automation systems with constant power supply</td>
    </tr>
    <tr>
      <td>MacSync Battery Operated</td>
      <td>Battery</td>
      <td>19 Ah</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Remote installations with limited power availability</td>
    </tr>
    <tr>
      <td>MacSync Solar + Battery</td>
      <td>Solar + Battery</td>
      <td>12 Ah</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Off-grid field deployments for infrastructure and environment</td>
    </tr>
  </tbody>
</table>
