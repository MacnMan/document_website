---
id: power-options
title: Power Options
---

# Power Options - MacSync-L-Power

## External Power Supply
The LoRaWAN Controller supports a direct external power supply ranging from 12V to 24V DC and 80V to 230V AC, ensuring reliable 
operation across various industrial and environmental applications.

For optimal performance and safety, ensure that all power connections follow the specifications provided by 
both the controller and the connected devices.

## Terminal Connections

![title image](./assets/power.webp)

## Procedure for connecting external power  

<!-- MacSync can also be powered through a **direct external DC** source within a **12–24 V** range. Ensure proper connection using a compatible terminal or jack, and always refer to both MacSync and sensor manufacturer specifications for safe operation. -->

## Terminal Connections

![title image](./assets/externalsensors.webp)

### Connecting External Sensors

- **Check Sensor Specifications**  
  Ensure compatibility with MacSync's input requirements.

- **Power Off the device**  
  Turn off MacSync before making any connections.

- **Attach Sensor Cables**  
  Connect cables to the appropriate inputs on MacSync, following the sensor manufacturer’s pin 
configuration and power on device.


- **Configure via Maya App**  
  Power on MacSync and configure it using the Maya app to adjust settings as per your needs.

### Connecting External Power Supply

- **Verify Power Supply**  
  Confirm the power supply matches MacSync's 12-24 V requirement. Turn off both MacSync and the 
power source before connecting.

- **Connect Power Cable , Insure safety**  
  Turn off MacSync before making any connections.


# Power Options - MacSync-L-Power

## External Power Supply
MacSync can also be powered through a **direct external DC** source within a **12–24 V** range. Ensure proper connection using a compatible terminal or jack, and always refer to both MacSync and sensor manufacturer specifications for safe operation.

## Led Status

![title image](./assets/ledtwo.webp)

<div className="reusable-feature-grid">
  <div className="reusable-feature-card">
    <strong>Blue</strong>
    <p>Device is connected with Maya app & Flashing Blue - OTA in progress. </p>
  </div>
  <div className="reusable-feature-card">
    <strong>Green</strong>
    <p>Slow green blink - attempting to connect to the LoRaWAN network.</p>
  </div>
  <div className="reusable-feature-card">
    <strong>Red blink</strong> 
    <p>Modifying any confirmed parameters of MacSync.</p>
  </div>
</div>



