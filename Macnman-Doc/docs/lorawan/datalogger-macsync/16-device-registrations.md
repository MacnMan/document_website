---
id: macsync-lns-registration
title: LNS Registration
---

# LNS Registration 

## Public Servers

![public server](/img/lorawan/ttn_registration.webp)

### Registering MacSync on TTN / Public LNS

You can register your device using either **manual entry** or **QR scan**.

#### Option 1: QR Code Registration

1. Click **“Scan End Device QR Code”** on your LNS.
2. In the **Maya App**, open **Key & Identity** and display the QR code.
3. Scan the QR code using your LNS.
4. The device will be automatically registered with all credentials filled in.  

#### Option 2: Manual Registration

1. Open your LNS (e.g., [The Things Network](https://www.thethingsnetwork.org/)).
2. Click **“Enter End Device Details Manually.”**
3. In the **Macnman Maya App**, go to the **Key & Identity** section.
4. Copy the following:
   - **DevEUI**
   - **AppEUI**
   - **AppKey**
5. Paste these into the corresponding fields on your LNS.
6. Select the correct **LoRaWAN frequency plan** (e.g., IN865, EU868, etc.).
7. Complete the registration process.

> Tip: For advanced security or re-onboarding, you can regenerate keys anytime from the **Maya App** under **Key & Identity > Advanced Options**.

<div class="faint-line"></div>

## Private Servers - Chirpstack

![chirpstack on](/img/lorawan/private_chirpstack_one.webp)

### Registering MacSync Device on ChirpStack (Private LNS)

Follow these steps to onboard your device into your ChirpStack application:

#### Step-by-Step Instructions

1. **Log in** to your ChirpStack dashboard.
2. Click on **“Applications”** from the sidebar.
3. Select your existing application or create a new one.
4. Click **“Add Device”** (top-right corner).
5. Open the **Maya App** and go to the **Key & Identity** section.
6. Copy the following values:
   - **DevEUI**
   - **JoinEUI** (AppEUI)
   - **AppKey**
7. Paste these into the corresponding fields in ChirpStack.
8. Click **Submit** to register the device.

> For enhanced security, you can regenerate the keys directly from the Maya app before registration.

## Testing Uplink on ChirpStack with MacSync

![public server](/img/lorawan/chipstacktwopchipstacktwo.webp)

After registering your device on ChirpStack, you can test the uplink using the Maya app:

#### Steps:

1. **Log in** to your **ChirpStack dashboard**.
2. Click on **Applications** and select your application.
3. Click on the **device you registered** (MacSync).
4. Navigate to the **Live LoRaWAN Frames** or **Device Data** tab to monitor uplinks.
5. On your mobile device, open the **Maya App**.
6. Connect to the MacSync device via **Bluetooth (BLE)**.
7. Navigate to the **Ping / Send Uplink** section.
8. Tap the **“Send Uplink”** or **Ping** button.

#### Result:

- The device will immediately send a **confirmed uplink** to the server.
- You should see the uplink appear in real-time on ChirpStack under **Device Data** or **Live Frames**.

> Tip: The uplink also includes signal quality metrics such as **RSSI**, **SNR**, and **Spreading Factor**, which can help with diagnostics.


## Sending Downlink from ChirpStack to MacSync

![downlinks](/img/lorawan/downlinks.webp)

Once your MacSync device is registered and active, you can send downlink commands using ChirpStack’s Queue interface.

#### Steps to Send Downlink

1. **Log in** to your **ChirpStack dashboard**.
2. Click on **Applications** from the left sidebar.
3. Select your specific application.
4. Choose the **registered device** you want to send the command to.
5. Navigate to the **“Queue”** tab.
6. In the Queue section:
   - Enter the **downlink payload** (in hexadecimal).
   - Set the **FPort** (usually defined by your device's firmware).
   - Choose whether it is a **confirmed or unconfirmed** message.
7. Click **Enqueue** to send the message.


#### Notes

- The downlink will be sent on the **next uplink** from the device (as per LoRaWAN Class A).
- Ensure your MacSync device is configured to support the downlink functionality.

> If using Class C, the downlink will be sent immediately since the receiver is always listening (for power-operated versions).