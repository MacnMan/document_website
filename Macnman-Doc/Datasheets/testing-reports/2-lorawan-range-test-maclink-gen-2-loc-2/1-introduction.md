---
id: lorawan_range_test-report_maclink_gen_2
title: Introduction
---

# LoRaWAN Gateway Performance Testing Across Indian Weather Conditions

## Scope

This report defines the scope of **real-world, multi-season field testing and performance validation** of the **MacLink Gen-2 LoRaWAN Outdoor Gateway**, conducted across diverse Indian environmental and deployment conditions.

The primary objective of this testing is to **evaluate LoRaWAN gateway performance across changing weather conditions**, including monsoon rainfall, high ambient temperatures, extreme humidity, dust exposure, and seasonal climatic variations, while also validating coverage in **multi-floor buildings, rooftop installations, and open outdoor environments**.

The scope of this report includes:

- Evaluation of indoor **vertical and horizontal coverage** across multi-storey office buildings under varying environmental conditions
- Measurement of **packet loss rates** across distance, obstruction levels, and seasonal weather variations
- Analysis of **Received Signal Strength Indicator (RSSI)** behavior under different atmospheric and structural conditions
- Analysis of **Signal-to-Noise Ratio (SNR)** stability in EMI-, metal-dense, and weather-affected environments
- Validation of gateway performance using **OTAA-enabled LoRaWAN nodes** with fixed spreading factors
- Assessment of **data transmission consistency** using controlled uplink intervals
- Impact study of **antenna placement and orientation** on coverage reliability across seasons
- Verification of operational compliance with the **IN865 regional LoRaWAN standard**

The testing was carried out using the **same Macnman MacSync Series LoRaWAN sensor nodes** across multiple test cycles, equipped with temperature, humidity, air pressure, and IAQ sensors, to ensure consistent and comparable performance measurements across all weather conditions.

This report is intended to support:

- System integrators and network designers planning **year-round LoRaWAN deployments**
- Enterprises evaluating gateway reliability under **Indian climatic conditions**
- Consultants and EPC partners designing **urban, industrial, and smart building IoT networks**
- Customers seeking **transparent, field-validated gateway performance data**

The findings from this report provide practical guidance for **gateway placement, antenna strategy, and resilient network design**, enabling reliable LoRaWAN deployments that remain stable across **monsoon, summer, and seasonal weather variations**.

## Equipment and Setup

| **Item** | **Details** |
|---------|-------------|
| **Gateway Model** | MacLink Gen-2 LoRaWAN Outdoor Gateway |
| **Node Devices** | Macnman MacSync Series LoRaWAN Nodes |
| **Node Sensors** | Temperature, Humidity, Air Pressure, IAQ |
| **Network Configuration** | OTAA enabled, ADR disabled, fixed Spreading Factor per device |
| **Data Transmission Interval** | Each node transmits uplink data every **30 seconds** |
| **Frequency Band** | IN865 (India LoRaWAN Regional Standard) |
| **Transmission Power** | **14 dBm** (fixed for consistent packet transmission) |
| **Antenna** | 5 dBi Omnidirectional Outdoor Antenna |
| **Backhaul & Power** | Ethernet with PoE Adapter |
| **Other Equipment** | Ethernet cables, power adapters, mounting accessories |

This equipment and configuration setup was selected to ensure **repeatable, controlled, and real-world representative testing**, enabling accurate evaluation of gateway range, coverage behavior, packet loss, RSSI, and SNR under practical deployment conditions.

