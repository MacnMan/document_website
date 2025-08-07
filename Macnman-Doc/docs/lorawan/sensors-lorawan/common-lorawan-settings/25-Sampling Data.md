---
id: maya_sampling_and_uploading_lorawan_common_sensors
title: Data Sampling & Uploading
---

## Data Sampling & Upload Timings

![Device sampling](/img/lorawan/sensors/temperaturehumi/sampling_lora_sensor_data.svg)

## Data Sampling Frequency

**Sampling** allows the device to collect multiple sensor readings at user-defined intervals **without immediately sending them to the server**.

## How does Sampling & Upload works:
- **Set the sample count** (e.g., 12 samples).
- **Define the time gap** between each sample (e.g., every 5 minutes).
- The device will collect the specified number of samples locally.
- Once all samples are collected, the device will **send a single uplink** containing the aggregated data.

> This helps reduce network usage and power consumption while preserving detailed sensor trends.


