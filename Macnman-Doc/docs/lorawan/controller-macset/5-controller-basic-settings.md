---
id: maya_configuration
title: Basic Settings
---

## Device Name

![Macnman Name Change](/img/controller/lora-controller-macset/controller_name_change.svg)

You can rename your device to something meaningful for easier identification — such as its location, function, or deployment area.

- **Example**  
  `SoilSensor_Greenhouse1` , `TempLogger_WarehouseB`

Device names can be **up to 20 characters long**. Use short, meaningful names for quick recognition during field operations.

## Change Heartbeat

![Macnman Change heartbeat](/img/controller/lora-controller-macset/heartbeat_controller.svg)

**What is Heartbeat?**  
Heartbeat defines how often the device sends a status update to the server, even when no sensor data has changed. It helps confirm that the device is active and communicating.

- **Example**  
  If the heartbeat is set to `15 minutes`, the device will send a signal to the server every 15 minutes, regardless of data changes

A lower heartbeat interval provides more frequent status checks but may increase power consumption on battery-powered devices.s
