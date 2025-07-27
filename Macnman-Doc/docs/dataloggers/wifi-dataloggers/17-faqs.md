---
title: FAQs
---

# MacSync-WiFi FAQs & Troubleshooting

## Cannot connect to Wi-Fi

- Ensure the **SSID** and **password** are correct.
- Verify that the selected **frequency band** (2.4 GHz or 5 GHz) matches your router’s settings.
- Check if the router is using **MAC address filtering**.
- Move the device closer to the router to improve signal strength.
- Restart the router and the MacSync device and try again.

## Wi-Fi network not appearing in scan

- Wait 10–15 seconds after tapping the **Scan** icon for networks to populate.
- Ensure the Wi-Fi network is **not hidden**. If it is, use **Add Network** to enter SSID and password manually.
- Confirm that your router is powered on and **broadcasting the SSID**.

## Device keeps disconnecting from Wi-Fi

- Weak signal strength — move device closer to the router.
- Check if the router is restarting or facing DHCP issues.
- Assign a **static IP address** to the MacSync device.
- Disable **TWT (Target Wake Time)** if it's causing instability.

## MQTT uplinks not received

- Double-check all MQTT configuration fields:
  - **Host**, **Port**, **Username**, **Password**
  - **Publish** and **Subscribe** topics
- Ensure the device is **connected to Wi-Fi**.
- Confirm if **TLS** or **certificate validation** is required and correctly enabled.
- Test the broker with tools like **MQTT Explorer** or **Postman**.
- Check if the broker supports the protocol version being used.

##  MQTT connection test fails

- Make sure the MQTT broker is reachable from external devices.
- Check for **firewall/NAT rules** blocking ports (1883 for unsecure, 8883 for TLS).
- Confirm MQTT **username/password** and topic names.
- If using TLS, ensure **device time is accurate** and certificates are not expired.

## Still not working?

- Reboot the MacSync device and try reconnecting.
- Reconfigure MQTT and Wi-Fi settings using the Maya app.
- Temporarily try a public broker like `test.mosquitto.org`.
- Reach out to **support@macnman.com** with configuration screenshots or logs.