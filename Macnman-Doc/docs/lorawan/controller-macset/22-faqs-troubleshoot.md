---
title: FAQs & Troubleshooting
---

## FAQ – MacSet Controller

#### Q1. My controller was working fine, but now it’s not responding to scheduled alarms. What’s wrong?
**A:** This usually happens if the controller lost power and its internal clock reset. Reconfigure the time or re-sync with the app. Use a model with a battery-backed RTC if timekeeping is critical.

#### Q2. After firmware update via BLE, the controller is stuck on boot. What should I do?
**A:** Power cycle the controller. If it still doesn’t boot, enter recovery mode by holding the reset button (if available) for 5–10 seconds, then reflash using the app or debug cable.

#### Q3. I connected a 230V load to the relay but it failed. Is this supported?
**A:** No. The relay onboard MacSet is rated for low voltage (typically 30V DC or 250V AC resistive up to a certain ampere). Always check the relay specs. Use an external contactor for high-power loads.

#### Q4. Why does the controller keep disconnecting from Wi-Fi every few minutes?
**A:** Ensure your Wi-Fi signal is stable and the router is not set to auto-reboot. Also, avoid special characters in SSID or password. Disable “Wi-Fi Power Saving” if available in advanced settings.

#### Q5. BLE is visible on my phone but says "Connection Failed."
**A:** Make sure no other device is already connected. BLE allows only one connection at a time. Restart both phone and controller if the issue persists.

## Troubleshooting – MacSet Controller

#### Issue: Relay Triggers Late or at Wrong Time
- Confirm the controller time matches real time (especially after power loss).
- Check that the timezone and schedule configuration is correct.
- If using external RTC or NTP sync, ensure it's functional.

#### Issue: MQTT Uplink Not Reaching Cloud
- Verify broker URL and port (some firewalls block non-standard ports).
- Check if device is connected to Wi-Fi/4G.
- Use the debug console to confirm whether MQTT handshake is succeeding.
- Some SIM cards may block MQTT — try HTTP mode to verify network availability.

#### Issue: Controller Doesn’t Save Configuration After Power Cycle
- Ensure the "Save & Apply" option is used in the app before reboot.
- If issue persists, check if flash memory is full or corrupted.
- Flash firmware again using recovery mode.

#### Issue: Relays Randomly Switching
- Ensure debounce and delay logic is configured properly.
- Rule out noise from nearby high-power equipment.
- Check input filtering and grounding — especially for analog/digital inputs used for triggering.

#### Issue: Device Stuck in Boot Loop After Power Surge
- Disconnect all inputs/loads and power cycle.
- Connect to debug serial logs to check boot reason.
- Use a surge protector or optoisolator module for sensitive inputs.

#### Issue: Controller Doesn’t Show Up on App Dashboard
- Ensure correct UID or device ID is configured.
- Verify server endpoint (MQTT topic or HTTP URL) matches the backend system.
- Try reconnecting to the app via BLE and push logs to cloud manually.

## Recommended Practices

- Always use a **stable DC power supply** with voltage protection.
- For cloud use, prefer Wi-Fi models with **RSSI above -70dBm**.
- For cyclic schedules, set **clear on/off durations** to avoid overlap.
- Label alarms with meaningful names (e.g., "Evening Lights", "Motor Timer").
- Keep analog/digital input lines **shielded** if running near motors or relays.
