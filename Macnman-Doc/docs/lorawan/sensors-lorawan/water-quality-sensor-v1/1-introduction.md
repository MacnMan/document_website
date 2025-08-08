---
id: macsyncls_introduction
title: Introduciton
---

# MacSync-LWQS8

## Product Overview

**MacSync-LWQS8** is a multi-parameter water quality monitoring sensor designed for accurate, real-time environmental and industrial applications. It integrates up to 7 sensor probes—including **Dissolved Oxygen, pH, ORP, Conductivity, Turbidity, Ammonia Nitrogen, & Temperature** —within a compact and rugged enclosure.

With LoRaWAN® Class A & C communication, MacSync-LWQS8 enables remote monitoring in rivers, lakes, reservoirs, wastewater treatment plants, and aquaculture environments. Equipped with an automatic cleaning system, modular RS-485 digital sensors, and IP68 waterproof protection, it delivers reliable performance in long-term deployments.

Housed in a weatherproof IP68-rated enclosure and powered by a long-life battery, MacSync-LWQS8 is ideal for both remote and fixed installations. With support for LoRaWAN® Class A & C, the sensor ensures efficient wireless transmission and flexible uplink options for seamless integration into any monitoring system.

Configuration is simple and wireless using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share) over Bluetooth Low Energy (BLE). Users can quickly adjust thresholds, intervals, and review device data from their mobile phone—no technical expertise required.


![water quality sensor](/img/lorawan/sensors/temperaturehumi/water-quality-v1-hero.webp)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://macnman.com/downloads/MacSync-LWQS8.pdf" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>[Download Datasheet](https://macnman.com/downloads/MacSync-LWQS8.pdf)</strong>
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

## Key Features of MacSync-LWQS8

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>High-Precision Multi-Parameter Sensors</strong>
    Integrates up to 7 probes to monitor parameters like DO, pH, ORP, EC, turbidity, ammonia nitrogen, and temperature.
  </div>
  <div className="reusable-feature-card">
    <strong>Automatic Self-Cleaning</strong>
    Built-in cleaning brush ensures sensor probes stay clean—ideal for long-term deployments.
  </div>
  <div className="reusable-feature-card">
    <strong>LoRaWAN® Class A & C Communication</strong>
    Enables low-power, long-range communication with flexible uplink modes.
  </div>
  <div className="reusable-feature-card">
    <strong>IP68-Rated Enclosure</strong>
    Fully waterproof and designed to withstand harsh environmental conditions.
  </div>
  <div className="reusable-feature-card">
    <strong>Battery Powered + Optional Solar</strong>
    Supports both high-capacity battery and solar panel for remote, off-grid operation.
  </div>
  <div className="reusable-feature-card">
    <strong>Macnman Beam Protocol</strong>
    Allows P2P device-to-device control and fallback logic during network outages.
  </div>
  <div className="reusable-feature-card">
    <strong>Secure Onboarding</strong>
    Ships with pre-flashed DevEUI / AppEUI / AppKey credentials for easy activation.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Uplink Modes</strong>
    Offers periodic, threshold-based, and event-driven transmissions for optimized data usage.
  </div>
  <div className="reusable-feature-card">
    <strong>BLE Support for Local Configuration</strong>
    Use Maya mobile app to configure and view live sensor data via Bluetooth.
  </div>
  <div className="reusable-feature-card">
    <strong>Fully LoRaWAN® Compatible</strong>
    Works with TTN, ChirpStack, Helium, Loriot, and all major LoRaWAN® gateways and servers.
  </div>
</div>

## Where You Can Use MacSync-LWQS8?

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

## MacSync-LWQS8 LoRaWAN Variants

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
