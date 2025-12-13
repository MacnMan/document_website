---
id: MacRayls_introduction
title: Introduciton
---

# MacRay-LUltrasonic-Gen1

## Product Overview

**MacRay-Ultrasonic Gen1** is a rugged, industrial-grade LoRaWAN® ultrasonic distance sensor built for reliable and precise non-contact level measurements. Ideal for smart waste bins, tank level monitoring, and industrial fluid management, it delivers high accuracy in harsh environments.

Equipped with high acoustic power output, real-time auto calibration, and advanced noise rejection capabilities, MacRay-Ultrasonic ensures stable performance across variable surfaces and lighting conditions. It features an IP67 enclosure, supports LoRaWAN® Class A & C, and includes BLE support via the Maya app for easy configuration and diagnostics.

Configuration is simple and wireless using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share) over Bluetooth Low Energy (BLE). Users can quickly adjust thresholds, intervals, and review device data from their mobile phone—no technical expertise required.


![ultrasonic sensor](/img/lorawan/sensors/temperaturehumi/macray-ultrasonic-gen1.webp)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://macnman.com/downloads/MacRay-LU1.pdf" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>[Download Datasheet](https://macnman.com/downloads/MacRay-LU1.pdf)</strong>
      <p>Click here to download the full MacRay-LT1 technical datasheet
.</p>
    </div>
  </a>
  <a href="https://github.com/MacnMan/LoRa_Module_SDK/tree/main/SDK/LoRaWAN_AT_Slave" 
  className="icon-card">
    <div className="icon">📝</div>
    <div>
      <strong>Decoders</strong>
      <p>Click here to view the decoders for MacRay-LWS6</p>
    </div>
  </a>
</div>

<div style={{ margin: "2rem 0" }}></div>

## Key Features of MacRay-Ultrasonic-Gen1

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>High-Precision Ultrasonic Sensing</strong>
    Long-range and reliable ultrasonic measurement with minimal interference from environmental factors.
  </div>
  <div className="reusable-feature-card">
    <strong>LoRaWAN® Class A & C Communication</strong>
    Supports flexible uplink strategies with ultra-low power and long-range communication capabilities.
  </div>
  <div className="reusable-feature-card">
    <strong>High Accuracy & Low Interference</strong>
    Engineered for strong signal consistency even in noisy or reflective environments.
  </div>
  <div className="reusable-feature-card">
    <strong>IP66-Rated Enclosure</strong>
    Provides excellent protection against dust and water, ideal for rugged industrial deployments.
  </div>
  <div className="reusable-feature-card">
    <strong>Smaller Blind Zone</strong>
    Offers accurate sensing from closer distances, enabling precise measurements even in compact setups.
  </div>
  <div className="reusable-feature-card">
    <strong>Rugged, Precise, and Reliable</strong>
    Built for consistent performance across a wide range of industrial and outdoor environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Macnman Beam Protocol Support</strong>
    Enables direct peer-to-peer communication between devices for faster local responses.
  </div>
  <div className="reusable-feature-card">
    <strong>Secure Device Onboarding</strong>
    Ships with pre-flashed DevEUI / AppEUI / AppKey credentials for seamless LoRaWAN® integration.
  </div>
  <div className="reusable-feature-card">
    <strong>High Antistatic Performance</strong>
    Designed to resist electrostatic discharge, improving reliability in electrically noisy areas.
  </div>
  <div className="reusable-feature-card">
    <strong>Full LoRaWAN® Compatibility</strong>
    Easily integrates with leading platforms including TTN, ChirpStack, Helium, Loriot, and more.
  </div>
</div>

## Where You Can Use MacRay-LUltrasonic-Gen1?

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Surface Water Monitoring 🌊</strong>
    Monitor real-time water quality parameters in rivers, lakes, reservoirs, and catchment areas for environmental assessment and pollution tracking.
  </div>
  <div className="reusable-feature-card">
    <strong>Wastewater Treatment Plants ♻️</strong>
    Ensure compliance and process optimization in municipal and industrial wastewater systems by tracking ammonia, DO, turbidity, and pH levels.
  </div>
  <div className="reusable-feature-card">
    <strong>Aquaculture and Fisheries 🐟</strong>
    Monitor dissolved oxygen, temperature, and pH levels in aquaculture ponds or fish tanks to improve fish health and yield.
  </div>
  <div className="reusable-feature-card">
    <strong>Industrial Discharge Compliance 🏭</strong>
    Monitor effluent parameters before discharge into the environment to comply with environmental regulations.
  </div>
  <div className="reusable-feature-card">
    <strong>Agricultural Runoff Management 🌾</strong>
    Track nutrient levels and turbidity in agricultural drainage systems to prevent contamination of nearby water bodies.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Water Quality Networks 🌐</strong>
    Deploy across smart cities and IoT frameworks for centralized real-time tracking and predictive maintenance of water bodies.
  </div>
  <div className="reusable-feature-card">
    <strong>Groundwater Monitoring ⛏️</strong>
    Continuously assess groundwater health and potential contamination for early detection and resource management.
  </div>
  <div className="reusable-feature-card">
    <strong>Hydrology and Research Labs 🧪</strong>
    Ideal for researchers needing reliable, long-term water quality data in field deployments or controlled experiments.
  </div>
</div>

## MacRay-LUltrasonic-Gen1 LoRaWAN Variants

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
      <td>MacRay Power Operated (Standard)</td>
      <td>12–24 V (DC Power)</td>
      <td>✖️</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Industrial automation systems with constant power supply</td>
    </tr>
    <tr>
      <td>MacRay Battery Operated</td>
      <td>Battery</td>
      <td>19 Ah</td>
      <td>✖️</td>
      <td>✔️</td>
      <td>Remote installations with limited power availability</td>
    </tr>
    <tr>
      <td>MacRay Solar + Battery</td>
      <td>Solar + Battery</td>
      <td>12 Ah</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Off-grid field deployments for infrastructure and environment</td>
    </tr>
  </tbody>
</table>
