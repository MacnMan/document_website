---
id: proposal_introduction_welding_data_collection_&_monitoring_system_proposal
title: Scope
---

# Welding Data Collection & Monitoring System Proposal

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

## Tracker Node (Welding Monitor)

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Arc Time Detection** | - Detects welding current: **10A – 1500A (AC/DC)**  <br/> - High-accuracy arc-on time measurement |
| **Wireless Communication** | - Long-range LoRa (Mesh) communication <br/> - AES-encrypted secure data transfer <br/> - Configurable reporting intervals & parameters |
| **Inductive Charging** | - Rechargeable battery with **~3 months runtime** per charge <br/> - Inductive charging activated only when welding current flows |
| **Integrated Display** | - Shows device battery level <br/> - Displays station ID / operator ID <br/> - Pairing & connectivity status |
| **Rugged Design** | - Compact size: **~6” × 3” × 2”** <br/> - IP55/IP65 enclosure with enclosed antenna |
| **Mounting Method** | - Mounted on welding ground cable |

---

## Central Hub

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Display & Control** | - Integrated **7” touchscreen display** <br/> - Local welding activity dashboard <br/> - HDMI output for external display |
| **Connectivity** | - Collects data from multiple nodes via LoRa (Mesh) <br/> - USB port for local data storage/export |
| **Data Processing** | - Aggregates node packets <br/> - Displays machine/welder activity in real-time |

---

## Communication & Data Flow

| **Stage** | **Details** |
|----------|-------------|
| **Node Data Collection** | - Detects welding arc-on activity <br/> - Logs arc time locally |
| **Node → Hub Data Transmission** | - Transmits arc-time events periodically or on-event <br/> - Uses LoRa (Mesh) <br/> - Packets include: **timestamp, node ID, operator ID, battery status** |
| **Hub Data Handling** | - Receives & aggregates all node data <br/> - Displays on touchscreen / HDMI activity board <br/> - Stores data on USB or exports for advanced analytics |

---
