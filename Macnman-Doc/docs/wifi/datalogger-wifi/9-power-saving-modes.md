---
id: macsync_wifi_power_saving_modes
title: Power Saving Modes
---
# Power Saving Modes

The **MacSync Wi-Fi series** is engineered for performance and power efficiency. To optimize battery life while maintaining wireless connectivity, MacSync supports two advanced Wi-Fi power-saving features: **Power Save Mode (PSM)** and **Target Wake Time (TWT)**.

## Power Save Mode (PSM)

![psm mode](/img/wifi/wifi_power_saving_mode.svg)

- **Turn ON-OFF PSM mode** using toggle button.

## How PSM Works in MacSync

- MacSync notifies the Wi-Fi access point that it's entering **PSM**.
- Incoming data is **buffered by the AP** while MacSync sleeps.
- The MacSync periodically **wakes up to fetch buffered packets**.
- Ideal for reducing idle power consumption in applications where real-time data isn't critical.

## Best Use Cases
- Periodic monitoring (e.g., temperature, humidity, or equipment status).
- When power consumption is more critical than latency.

## Target Wake Time (TWT)

![twt mode](/img/wifi/twt_wifi_masync.svg)

- **Turn ON-OFF TWT mode** using toggle button.

## How TWT Works in MacSync
- MacSync negotiates a wake-up schedule with the AP using **TWT**.
- Both device and AP agree on **specific wake intervals** (e.g., every 60s, 5 min, etc.).
- Between those intervals, the Wi-Fi radio stays off, saving maximum power.
- TWT support is optimized for **Wi-Fi 6 (802.11ax)** access points.


## Best Use Cases
- Battery-operated MacSync devices where scheduled reporting is sufficient.
- Ideal for applications with predictable communication patterns, like environmental logging, energy metering, or periodic system updates.

## PSM vs TWT - 

| Feature             | PSM in MacSync             | TWT in MacSync               |
|---------------------|----------------------------|------------------------------|
| Power Consumption   | Low                        | Ultra-low                    |
| Downlink Support    | Buffered via AP            | Buffered till next wake slot |
| Latency             | Medium                     | Low to Medium                |
| AP Compatibility    | All APs supported          | Wi-Fi 6 recommended          |
| Custom Scheduling   | Fixed wake periods         | Negotiated flexible timing   |
| User Control        | Toggle Button              | Toggle Button                |


## Developer Notes - 

- Use **PSM** when compatibility with legacy routers and moderate battery saving is sufficient.
- Switch to **TWT** when using Wi-Fi 6 infrastructure and aiming for **maximum battery life**.
- Both modes are available as **toggle switches** in the MacSync configuration panel, allowing easy adaptation per deployment scenario.
