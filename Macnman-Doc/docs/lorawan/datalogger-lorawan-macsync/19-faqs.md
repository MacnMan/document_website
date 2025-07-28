---
id: macsync_faqs
title: FAQs
---

# FAQs & Troubleshooting Guide

## How Do I Replace the Battery?

1. **Power off** the device if active (recommended).
2. **Unscrew** the bottom casing using a precision screwdriver.
3. **Gently slide out** the PCBA (Printed Circuit Board Assembly).
4. **Unplug the battery** by disconnecting the JST connector.
5. **Remove the old battery** from the compartment — use non-metallic tools if needed.
6. **Insert a new battery** (matching voltage & size), ensuring correct polarity.
7. **Reconnect the JST** securely; ensure no pin misalignment.
8. **Reassemble** the unit and fasten the screws.

Important Tip: Double-Check Battery Polarity

## Device Not Connecting to LoRaWAN Server

#### Basic Checklist

- Sensor and gateway must operate on the **same frequency band** (e.g., IN865, EU868, US915).
- Confirm correct **LoRaWAN MAC version** and **regional parameters**.
- Ensure **antenna is connected properly** and gateway is online.
- Validate correct **Join mode**: OTAA or ABP.

#### Advanced Checks

- Check **gateway logs**:
  - Are **uplinks** visible?
  - Are **join requests** reaching the server?
- Ensure the **network server is sending downlink responses**.
- Check **firewall rules or NAT** if behind a restrictive network.

## Device Will Not Join

#### OTAA Join Fails

1. **Verify identifiers**:
   - DevEUI
   - JoinEUI / AppEUI
   - AppKey / NwkKey (for LoRaWAN 1.1+)

2. **Common Errors**:
   - `MIC mismatch` → Keys don’t match
   - `Join timeout` → No join accept response
   - `Uplink channel not found` → Device using invalid frequency

<details>
  <summary><strong>Expert Tip: Use Lower Spreading Factor</strong></summary>

  Avoid using SF12 during join attempts.  
  Higher SF increases airtime and join latency.  
  Use SF7–SF10 for better reliability and faster joins.
</details>

## No Downlinks Received by the Device

- Check **application server and gateway logs**.
- Verify the **antenna is intact and connected**.
- Confirm downlink queue is not full.
- Ensure:
  - **Duty cycle regulations** aren’t limiting transmission
  - **Correct RX1/RX2 timing**
  - Device is not sleeping through **receive windows**
  - There is **no clock drift**

## Errors When Registering the Device

<table className="parameter-table">
  <thead>
    <tr>
      <th>Error Message</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ID already taken</code></td>
      <td>DevEUI is already registered. Use a unique ID or remove the existing entry.</td>
    </tr>
    <tr>
      <td><code>Duplicate identifiers</code></td>
      <td>Conflicts in DevEUI, AppEUI, or JoinEUI. Make sure all IDs are unique.</td>
    </tr>
    <tr>
      <td><code>MIC mismatch</code></td>
      <td>AppKey or NwkKey is incorrect. Recheck your keys.</td>
    </tr>
    <tr>
      <td><code>Uplink channel invalid</code></td>
      <td>Device is using a channel not supported in this region. Check your LoRaWAN band settings.</td>
    </tr>
  </tbody>
</table>