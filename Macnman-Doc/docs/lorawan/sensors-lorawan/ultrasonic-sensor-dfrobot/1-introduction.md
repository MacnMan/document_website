---
id: macsyncls_introduction
title: Introduciton
---

# MacSync-LU7

## Product Overview

MacSync-LU4 is a compact, LoRaWAN®-enabled ultrasonic distance and level sensor optimized for medium-range, non-contact measurement up to 4 meters. It is ideal for smart waste bin monitoring, tank level sensing, urban infrastructure applications, and smart city deployments where space efficiency and reliable wireless communication are crucial.

Despite its smaller footprint, MacSync-LU4 features high accuracy, real-time noise rejection, and auto-calibration to ensure precise measurements in dynamic environments. The device is enclosed in a weatherproof IP65-rated casing, making it suitable for both indoor and outdoor use.

Configuration is simple and wireless using the [**Macnman Maya App**](https://play.google.com/store/apps/details?id=com.macnman.app&pcampaignid=web_share) over Bluetooth Low Energy (BLE). Users can quickly adjust thresholds, intervals, and review device data from their mobile phone—no technical expertise required.

Fully compatible with Macnman gateways and platforms, MacSync-LU4 enables smarter noise compliance, proactive alerts, and data-driven urban planning initiatives.

![ultrasonic sensor](/img/lorawan/sensors/temperaturehumi/macsync_sub_four_hero_ultrasonic.webp)

## Product Architecture
<br/>

![lorawan architecture](/img/lorawan/lorawan_macsync_archi.svg)

## Download Center

<div className="icon-card-grid">
  <a href="https://drive.google.com/file/d/160C4s1MZkL_QHsDzzE9iVL3f-D2RmYdn/view?usp=sharing" 
  className="icon-card">
    <div className="icon">📂</div>  
    <div>
      <strong>[Download Datasheet](https://macnman.com/downloads/MacSync-LU4.pdf)</strong>
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


## Key Features of MacSync-LU7

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>High-Precision Ultrasonic Sensing</strong>
    Delivers accurate, real-time distance measurements with minimal interference even in challenging conditions.
  </div>
  <div className="reusable-feature-card">
    <strong>LoRaWAN® Class A & C Communication</strong>
    Supports both Class A and C modes for long-range, low-power, and latency-sensitive applications.
  </div>
  <div className="reusable-feature-card">
    <strong>High Accuracy & Low Interference</strong>
    Designed to ensure consistent measurements with excellent noise immunity.
  </div>
  <div className="reusable-feature-card">
    <strong>Flexible Uplink Strategies</strong>
    Choose from periodic, threshold-triggered, or event-driven reporting modes.
  </div>
  <div className="reusable-feature-card">
    <strong>IP66-Rated Weatherproof Enclosure</strong>
    Rugged and sealed housing for industrial and outdoor installations in harsh environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Smaller Blind Zone</strong>
    Optimized sensing design ensures more precise detection even at close range.
  </div>
  <div className="reusable-feature-card">
    <strong>Strong Environmental Resistance</strong>
    Anti-static and corrosion-resistant build enhances long-term reliability in field deployments.
  </div>
  <div className="reusable-feature-card">
    <strong>Supports Macnman Beam Protocol</strong>
    Enables device-to-device LoRa communication without needing a network gateway.
  </div>
  <div className="reusable-feature-card">
    <strong>Secure Device Provisioning</strong>
    Ships with pre-flashed DevEUI, AppEUI, and AppKey for hassle-free and secure onboarding.
  </div>
  <div className="reusable-feature-card">
    <strong>Full LoRaWAN® Compatibility</strong>
    Works seamlessly with all major LoRaWAN® servers and gateways like TTN, ChirpStack, Loriot, and Helium.
  </div>
</div>

## Where You Can Use MacSync-LU7?

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Flood Monitoring & Stormwater Management 🌊</strong>
    Measure rising water levels in drains, culverts, and rivers for early flood alerts and disaster response systems.
  </div>
  <div className="reusable-feature-card">
    <strong>Industrial Automation & Clearance Detection 🏭</strong>
    Monitor machine clearance, conveyor alignment, and safety zones in automated industrial environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Agriculture 🚜</strong>
    Detect liquid levels in tanks and reservoirs for irrigation control and fertilizer automation.
  </div>
  <div className="reusable-feature-card">
    <strong>Tank & Silo Level Monitoring 🛢️</strong>
    Accurately monitor the fill levels of water, oil, or granular materials in storage units.
  </div>
  <div className="reusable-feature-card">
    <strong>Smart Waste & Bin Monitoring 🗑️</strong>
    Detect fill levels in public or industrial waste bins for optimized collection schedules.
  </div>
  <div className="reusable-feature-card">
    <strong>Logistics & Material Handling 📦</strong>
    Track object positioning, pallet detection, and dock occupancy in logistics and warehouse environments.
  </div>
  <div className="reusable-feature-card">
    <strong>Infrastructure Safety & Bridge Monitoring 🌉</strong>
    Evaluate object clearance and detect debris or water build-up under bridges and viaducts.
  </div>
  <div className="reusable-feature-card">
    <strong>Mining & Quarry Applications ⛏️</strong>
    Monitor ore levels, conveyor troughs, and detect hazardous blockages in extraction zones.
  </div>
</div>


## MacSync-LU7 LoRaWAN Variants

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
