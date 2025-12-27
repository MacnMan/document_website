---
id: proposal_introduction_coal_wagon_monitoring_system
title: Scope
---

# Automated Coal Wagon Counting & Load Assessment System Proposal

## Scope

To design and deploy an automated, non-contact, and industrial-grade Coal Wagon Counting & Load Assessment System capable of accurately identifying the number of wagons, coal load status per wagon, empty wagons, and associated train details in real-time.

The system uses a fusion of 3D LiDAR, distance LiDAR, and AI-based LPR cameras combined with edge-level IoT processing to operate reliably in harsh railway environments such as dust, vibration, rain, and variable lighting conditions.

This system shall enable the Customer to:
- Automatically count the total number of wagons in each train
- Identify loaded, partially loaded, and empty coal wagons
- Estimate coal fill level on a per-wagon basis using 3D profiling
- Detect train speed, direction, current position, and ETA
- Capture and associate train / locomotive number with wagon data
- Eliminate manual inspection and reduce operational errors
- Maintain a time-stamped digital record for audits and analytics

## System Components & Definitions

## 3D LiDAR – Wagon Load Profiling Unit

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Measurement Principle** | - Time of Flight (ToF) based 3D depth measurement |
| **Coverage** | - Wide Field of View for full open-wagon scanning |
| **Function** | - Detects coal presence <br/> - Determines loaded / empty wagons <br/> - Estimates relative coal fill level |
| **Environmental Resilience** | - Weather resistant (rain, dust, fog tolerant) <br/> - High immunity to industrial noise |
| **Installation** | - Fixed trackside or overhead mounting |

---

## Distance LiDAR – Speed & Wagon Detection Unit (TF02-Pro)

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Ranging Type** | - Single-point distance ranging |
| **Functions** | - Detects train speed <br/> - Determines direction of movement <br/> - Counts wagons accurately |
| **Analytics Support** | - Current train position <br/> - Estimated Time of Arrival (ETA) |
| **Reliability** | - Stable performance at varying train speeds |

---

## AI LPR Camera – Train Identification

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Recognition** | - AI-based locomotive / train number detection |
| **Intelligence** | - Black & White list support <br/> - No-plate detection |
| **Imaging** | - 140dB Super WDR for extreme lighting |
| **Protection** | - IP67 & IK10 industrial-grade enclosure |

---

## Edge Controller – MacSync W Series

| **Category** | **Specifications / Details** |
|--------------|------------------------------|
| **Data Acquisition** | - Collects data from LiDARs & AI camera |
| **Processing** | - Wagon segmentation & data correlation |
| **Connectivity** | - Wi-Fi uplink to cloud or on-premise server |
| **Reliability** | - Local buffering during network outages |

---

## Communication & Data Flow

| **Stage** | **Details** |
|----------|-------------|
| **Sensor Data Capture** | - 3D LiDAR scans wagon profile <br/> - Distance LiDAR detects speed & wagon count <br/> - LPR camera captures train number |
| **Edge Processing** | - MacSync-W correlates wagon, load, and train data |
| **Data Transmission** | - Data uploaded via industrial Wi-Fi using TP-Link EAP225 |
| **Data Availability** | - Real-time dashboard <br/> - Historical records for reporting & analytics |
