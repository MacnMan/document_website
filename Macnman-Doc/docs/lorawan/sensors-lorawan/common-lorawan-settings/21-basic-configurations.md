---
id: maya_configuration_sensors_common
title: Basic Settings
---

----
## Device Name

#### How to change the device name (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/CCfK_WsLU8M?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 

![Device Name](/img/lorawan/sensors/temperaturehumi/name_sensor_lorawan.svg)

You can rename your device to something meaningful for easier identification — such as its location, function, or deployment area.

- **Example**  
  `SoilSensor_Greenhouse1` , `TempLogger_WarehouseB`

Device names can be **up to 20 characters long**. Use short, meaningful names for quick recognition during field operations.

---

## Change Heartbeat

#### How to change the device Heartbeat (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/Nvs9ieDLXJQ?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 

![Device heartbeat](/img/lorawan/sensors/temperaturehumi/device_heartbeat_sensor_lora.svg)

**What is Heartbeat?**  
Heartbeat defines how often the device sends a status update to the server, even when no sensor data has changed. It helps confirm that the device is active and communicating.

- **Example**  
  If the heartbeat is set to `15 minutes`, the device will send a signal to the server every 15 minutes, regardless of data changes

A lower heartbeat interval provides more frequent status checks but may increase power consumption on battery-powered devices.

--- 
## Reminisce – Data Export

#### How to download the historical data (Video Demo) :

<div class="youtube-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/YqeQXAaq8ww?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br/>

#### Step-by-Step Configuration Guide : 


![Device histroy data](/img/lorawan/sensors/temperaturehumi/device_data_history_sen_lora.svg)

The Reminisce feature allows you to retrieve and export historical data stored locally on the device.

**How to Use**  
  - **Select a date range** to define the time period for which you want to export data.
  - **Choose the export format** — either **JSON** (structured) or **TXT** (plain text).
  - Click **“Okay”** to begin the export. You’ll receive a notification once the data has been successfully downloaded to your device.

Useful for offline analysis, compliance, or record-keeping in field deployments.

>Note: External flash memory is optional. Please verify whether your selected variant includes flash memory before placing your order