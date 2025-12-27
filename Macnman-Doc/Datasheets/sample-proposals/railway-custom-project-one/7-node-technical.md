---
id: custom_product_node_technical_specifications
title: ToF Sensor Specifications
---

# 3D LiDAR Sensor Module

---

## 3D LiDAR Sensor Module (Wide FOV – Solid State)

**Measurement Principle:**  
- Time of Flight (ToF) based solid-state 3D depth sensing

**Field of View (Typical):**  
- Horizontal: Wide-angle (≥90°)  
- Vertical: Multi-layer depth capture suitable for open-wagon profiling

**Detection Capability:**  
- Continuous 3D surface profiling of open coal wagons  
- Detection of coal presence, absence, and relative fill level  
- Supports wagon-to-wagon segmentation during train movement

**Output Data:**  
- Depth map / point cloud (frame-based)  
- Distance, height profile, and surface variation metrics

**Performance Characteristics:**  
- High refresh rate suitable for moving trains  
- Stable depth accuracy across varying reflectivity surfaces (coal, metal)

**Environmental Robustness:**  
- Dust and rain tolerant sensing  
- Immune to ambient lighting variations  
- Resistant to industrial EMI and vibration

---

## Distance & Motion Correlation (Multi-Sensor Fusion)

**Supported Inputs:**  
- 3D LiDAR depth frames  
- External distance LiDAR (speed & direction reference)

**Derived Parameters:**  
- Wagon count  
- Wagon length estimation  
- Train speed and direction  
- Relative position tracking

**Processing Location:**  
- Edge-level processing on MacSync W Series controller

---

## Edge Controller – MacSync W Series Integration

**Processing Unit:**  
- Industrial-grade MCU / SoC with hardware floating-point support

**Functions:**  
- Real-time LiDAR frame acquisition  
- Depth filtering and noise suppression  
- Wagon segmentation and indexing  
- Load classification logic (Loaded / Partially Loaded / Empty)

**Data Handling:**  
- Timestamped data correlation across sensors  
- Local buffering during network interruptions

---

## Communication Interface

**Primary Uplink:**  
- Wi-Fi (802.11 b/g/n/ac)

**Function:**  
- Secure transmission of processed wagon data to cloud or on-premise server  
- Support for real-time dashboards and historical analytics

**Security:**  
- Encrypted communication channels  
- Device authentication using unique node identifiers

---

## Power & Electrical Interface

**Input Power:**  
- External regulated DC supply (industrial-grade)

**Protection:**  
- Surge protection  
- Reverse polarity protection  
- ESD protection on sensor and communication interfaces

---

## Mechanical Integration & Mounting

**Mounting Configuration:**  
- Fixed trackside or overhead mounting  
- Alignment support for accurate wagon profiling

**Cabling:**  
- Industrial connectors for LiDAR and power interfaces  
- Shielded cables to minimize EMI

---

## Identification & Diagnostics

**Device Identification:**  
- Unique serial number per MacSync W Series node

**Diagnostics:**  
- Health monitoring for LiDAR sensor  
- Communication status monitoring  
- Fault and data integrity flags

---

## Operating Conditions

**Operating Temperature:**  
- –20°C to +60°C (typical outdoor deployment)

**Ingress Protection:**  
- System-level protection dependent on enclosure (IP-rated enclosure recommended)

---
