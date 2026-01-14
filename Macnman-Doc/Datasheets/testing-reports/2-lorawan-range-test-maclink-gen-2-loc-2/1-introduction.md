---
id: lorawan_range_test-report_maclink_gen_2
title: Introduction
---

# LoRaWAN Range & Coverage Test

<br/>
![lorawan architecutre](/img/tech-reports/lorawan/lorawan-gateway-range-coverage-test.webp)

## Scope

This report defines the scope of **real-world field testing and performance validation** of the **MacLink Gen-2 LoRaWAN Outdoor Gateway**, conducted to evaluate its coverage capability, signal reliability, and data integrity in complex deployment environments.

The primary objective of this testing is to **assess LoRaWAN gateway performance across multi-floor buildings, rooftops, and open outdoor spaces**, using production-grade LoRaWAN end nodes. The study focuses on understanding how signal strength, noise levels, packet delivery, and environmental factors affect gateway performance under realistic operating conditions.

The scope of this report includes:

- Evaluation of indoor **vertical and horizontal coverage** across multiple floors in a high-rise office building
- Measurement of **packet loss rates** under varying distance and obstruction conditions
- Analysis of **Received Signal Strength Indicator (RSSI)** trends across floors and long-range paths
- Analysis of **Signal-to-Noise Ratio (SNR)** behavior in EMI- and metal-dense environments
- Validation of gateway performance with **OTAA-enabled LoRaWAN nodes** and fixed spreading factors
- Assessment of consistent data transmission using **30-second uplink intervals**
- Impact study of **antenna placement and orientation** on coverage and reliability
- Verification of performance compliance with the **IN865 regional LoRaWAN standard**

The testing was carried out using **Macnman MacSync Series LoRaWAN sensor nodes** equipped with temperature, humidity, air pressure, and IAQ sensors, communicating with the MacLink Gen-2 gateway at a fixed transmission power of **26 dBm** via a **3 dBi omnidirectional outdoor antenna**.

This report is intended to support:

- System integrators and network designers planning LoRaWAN deployments
- Enterprises evaluating indoor and campus-wide IoT coverage
- Consultants and EPC partners designing smart building and industrial IoT networks
- Customers seeking transparent, field-validated gateway performance data

The findings from this report provide practical guidance for **optimal gateway placement, antenna strategy, and network design**, enabling reliable LoRaWAN deployments in multi-story buildings, urban environments, and open outdoor areas.

## Equipment and Setup

| **Item** | **Details** |
|---------|-------------|
| **Gateway Model** | MacLink Gen-2 LoRaWAN Outdoor Gateway |
| **Node Devices** | Macnman MacSync Series LoRaWAN Nodes |
| **Node Sensors** | Temperature, Humidity, Air Pressure, IAQ |
| **Network Configuration** | OTAA enabled, ADR disabled, fixed Spreading Factor per device |
| **Data Transmission Interval** | Each node transmits uplink data every **30 seconds** |
| **Frequency Band** | IN865 (India LoRaWAN Regional Standard) |
| **Transmission Power** | **26 dBm** (fixed for consistent packet transmission) |
| **Antenna** | 3 dBi Omnidirectional Outdoor Antenna |
| **Backhaul & Power** | Ethernet with PoE Adapter |
| **Other Equipment** | Ethernet cables, power adapters, mounting accessories |

This equipment and configuration setup was selected to ensure **repeatable, controlled, and real-world representative testing**, enabling accurate evaluation of gateway range, coverage behavior, packet loss, RSSI, and SNR under practical deployment conditions.

---
