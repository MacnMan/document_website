---
id: macsyncls_introduction
title: Introduciton
---

# MacRay-LToF-Gen1

## Product Overview

**MacRay-LToF Gen1** is an industrial-grade Time-of-Flight (ToF) LoRaWAN® distance sensor designed for high-precision level measurement in demanding environments. It utilizes laser-based ToF technology to deliver accurate non-contact distance measurements, ideal for tank monitoring, bin fill-level detection, solid waste management, and smart infrastructure.

Built with a rugged IP67-rated enclosure and high-performance optics, MacRay-LToF supports long-range, high-accuracy sensing up to 6 meters. With LoRaWAN® Class A & C communication, BLE for configuration, and Macnman Beam protocol for P2P control, it’s engineered for low-power, reliable operation. Configuration and diagnostics are made seamless with the Maya mobile app via Bluetooth.

Configuration is simple and wireless using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share) over Bluetooth Low Energy (BLE). Users can quickly adjust thresholds, intervals, and review device data from their mobile phone—no technical expertise required.


![ToF sensor](/img/lorawan/sensors/temperaturehumi/macraytof-gen1.webp)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://drive.google.com/file/d/160C4s1MZkL_QHsDzzE9iVL3f-D2RmYdn/view?usp=sharing" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>Download Datasheet</strong>
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

## Key Features of MacRay-LToF-Gen1

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>True Distance Measurement</strong>
    Distance sensing with millimeter-level precision—independent of target size, color, or reflectivity.
  </div>
  <div className="reusable-feature-card">
    <strong>Invisible IR Beam</strong>
    Utilizes 940nm wavelength for safe and undetectable sensing, ideal for industrial applications.
  </div>
  <div className="reusable-feature-card">
    <strong>LoRaWAN® Class A & C Communication</strong>
    Enables low-power, long-range communication with flexible uplink strategies.
  </div>
  <div className="reusable-feature-card">
    <strong>IP66-Rated Enclosure</strong>
    Dust-tight and water-resistant for robust operation in harsh environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Battery Powered & Low Power Operation</strong>
    Optimized for ultra-low power consumption, supporting long-term battery-based deployments.
  </div>
  <div className="reusable-feature-card">
    <strong>Macnman Beam Protocol</strong>
    Supports peer-to-peer device control and fallback behavior during connectivity issues.
  </div>
  <div className="reusable-feature-card">
    <strong>Secure Onboarding</strong>
    Preloaded DevEUI, AppEUI, and AppKey credentials for plug-and-play network integration.
  </div>
  <div className="reusable-feature-card">
    <strong>Flexible Uplink Modes</strong>
    Includes periodic, threshold-based, and event-driven uplinks to match application needs.
  </div>
  <div className="reusable-feature-card">
    <strong>BLE Support for Local Configuration</strong>
    Configure and monitor the device via the Maya mobile app over Bluetooth.
  </div>
  <div className="reusable-feature-card">
    <strong>Full LoRaWAN® Compatibility</strong>
    Seamlessly integrates with TTN, ChirpStack, Loriot, Helium, and other LoRaWAN® platforms.
  </div>
</div>

## Where You Can Use MacRay-LToF-Gen1?

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Smart Waste Management 🗑️</strong>
    Monitor fill-levels in public waste bins and dumpsters to optimize waste collection routes and schedules.
  </div>
  <div className="reusable-feature-card">
    <strong>Industrial Tank Monitoring 🛢️</strong>
    Measure fluid or material levels in sealed or open tanks for industries such as oil, chemicals, and water treatment.
  </div>
  <div className="reusable-feature-card">
    <strong>Flood Level Detection 🌊</strong>
    Deploy in flood-prone zones to detect rising water levels in real-time and trigger early alerts for disaster mitigation.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Parking Occupancy 🅿️</strong>
    Detect vehicle presence or absence using accurate distance measurements for smart city parking solutions.
  </div>
  <div className="reusable-feature-card">
    <strong>Grain & Feed Silo Monitoring 🌾</strong>
    Ensure efficient storage and inventory tracking by monitoring the level of grains or animal feed in silos.
  </div>
  <div className="reusable-feature-card">
    <strong>Logistics & Container Yard Management 🚛</strong>
    Track container presence and stacking height for efficient space usage and real-time logistics tracking.
  </div>
  <div className="reusable-feature-card">
    <strong>Utility & Water Tank Levels 💧</strong>
    Monitor water levels in utility tanks to automate refilling, conserve resources, and ensure uninterrupted supply.
  </div>
  <div className="reusable-feature-card">
    <strong>Infrastructure & Construction Sites 🏗️</strong>
    Measure and monitor distances in restricted or hard-to-reach construction zones for real-time insights.
  </div>
</div>

## MacRay-LToF-Gen1 LoRaWAN Variants

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
