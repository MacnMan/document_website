---
id: macsynclco21_introduction
title: CO2 Sensor Introduction
---

# MacSync-LCO21

## Product Overview

The **MacSync-LCO21** is a compact and intelligent LoRaWAN® CO₂ sensor built for real-time indoor air quality monitoring in smart buildings, greenhouses, industrial environments, and HVAC systems. Powered by advanced photoacoustic NDIR (PASens®) technology, it delivers high-precision carbon dioxide measurements, along with integrated temperature and humidity sensing.

Designed for ultra-low power operation and long-term deployment, MacSync-LCO21 transmits environmental data over LoRaWAN® networks for **remote monitoring, automation, and alerts.** Its robust build, small form factor, and seamless compatibility with Macnman gateways and platforms make it ideal for scalable air quality solutions.

Configuration is quick and user-friendly using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share), which leverages Bluetooth Low Energy (BLE). Through the app, users can set parameters, adjust logging intervals, and manage data settings directly from their smartphone—no technical expertise required.

![co2 sensor](/img/lorawan/sensors/temperaturehumi/co_main_front_view.svg)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://www.macnman.com/downloads/MacSync-LCO21.pdf" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>[Download Datasheet](https://www.macnman.com/downloads/MacSync-LCO21.pdf)</strong>
      <p>Click here to download the full MacSync-LT1 technical datasheet
.</p>
    </div>
  </a>
  <a href="https://github.com/MacnMan/LoRa_Module_SDK/tree/main/SDK/LoRaWAN_AT_Slave" 
  className="icon-card">
    <div className="icon">📝</div>
    <div>
      <strong>SDK & Sample Code</strong>
      <p>Click here to view the decoders for MacSync-LT1</p>
    </div>
  </a>
</div>

<div style={{ margin: "2rem 0" }}></div>


## Key Features of MacSync-LT1

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>🌬️ High Accuracy CO₂ Sensing</strong>
    High precision with ±(40 ppm + 5%) accuracy for dependable CO₂ monitoring in real-world applications.
  </div>
  <div className="reusable-feature-card">
    <strong>📦 Compact & Industrial-Grade Design</strong>
    Engineered for long-term performance in commercial, industrial, and building environments.
  </div>
  <div className="reusable-feature-card">
    <strong>📈 Wide Measurement Range</strong>
    Measures from 0 – 40,000 ppm CO₂, ideal for varied environmental use cases.
  </div>
  <div className="reusable-feature-card">
    <strong>🔬 Photoacoustic NDIR (PASens®) Technology</strong>
    Advanced sensor design ensures reliable, noise-resistant CO₂ measurement performance.
  </div>
  <div className="reusable-feature-card">
    <strong>📡 LoRaWAN® Class A & C Communication</strong>
    Flexible wireless transmission with support for long-range, low-power network connectivity.
  </div>
  <div className="reusable-feature-card">
    <strong>⏱️ Flexible Uplink Strategies</strong>
    Supports periodic, threshold-based, and event-driven reporting modes.
  </div>
  <div className="reusable-feature-card">
    <strong>🌡️ Integrated Temperature & Humidity Sensor</strong>
    Combines multiple environmental metrics in a single, compact device.
  </div>
  <div className="reusable-feature-card">
    <strong>🔋 Low Power Consumption</strong>
    Optimized for battery-powered operation in remote or wireless installations.
  </div>
  <div className="reusable-feature-card">
    <strong>🛰️ Macnman Beam Protocol Support</strong>
    Enables device-to-device LoRa communication for fast, gateway-free control actions.
  </div>
  <div className="reusable-feature-card">
    <strong>🔐 Secure Onboarding</strong>
    Pre-configured with DevEUI, AppEUI, and AppKey for secure and rapid deployment.
  </div>
  <div className="reusable-feature-card">
    <strong>🌐 Fully LoRaWAN® Compatible</strong>
    Seamlessly integrates with TTN, ChirpStack, Loriot, Helium, and other network servers and gateways.
  </div>
</div>

## Where You Can Use MacSync-LT1?

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Cold Chain Logistics ❄️</strong>
    Ensure consistent temperature control for vaccines, medicines, and perishable goods during transport and storage.
  </div>
  <div className="reusable-feature-card">
    <strong>Data Centers & Server Rooms 🖥️</strong>
    Monitor temperature and humidity to prevent equipment overheating and maintain optimal uptime.
  </div>
  <div className="reusable-feature-card">
    <strong>Greenhouses & Agriculture 🌿</strong>
    Track climate conditions to optimize irrigation, crop growth, and resource usage.
  </div>
  <div className="reusable-feature-card">
    <strong>Warehouses & Storage Units 📦</strong>
    Maintain safe storage conditions for sensitive inventory such as food, chemicals, and electronics.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Buildings 🏢</strong>
    Enable intelligent HVAC control and indoor climate optimization based on real-time environment data.
  </div>
  <div className="reusable-feature-card">
    <strong>Remote Industrial Sites 🏭</strong>
    Deploy in unmanned locations to ensure environmental safety and monitor for threshold violations.
  </div>
  <div className="reusable-feature-card">
    <strong>Cold Storage & Refrigeration Units 🧊</strong>
    Track and log conditions continuously to meet compliance and quality control standards.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Cities 🌆</strong>
    Monitor public spaces, museums, or transportation hubs for climate-controlled operations.
  </div>
</div>


##  MacSync-LT1 LoRaWAN Variants

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
      <td>12–24 V (Power)</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Industrial or commercial sites with stable power supply</td>
    </tr>
    <tr>
      <td>MacSync Battery Operated</td>
      <td>Battery</td>
      <td>19 Ah</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Remote or portable deployments with low power</td>
    </tr>
    <tr>
      <td>MacSync Solar + Battery</td>
      <td>Solar + Battery</td>
      <td>12 Ah</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Outdoor, off-grid, and energy-autonomous environments</td>
    </tr>
  </tbody>
</table>
