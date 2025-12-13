---
id: books_inside_lorawan_how_messages_are_travelled
title: How Messages Travel
---

## How LoRaWAN Handles Communication 🧐

In **LoRaWAN's communication system**, end devices don’t need to connect or pair with a specific gateway. Instead, they broadcast their data to **any nearby LoRaWAN gateway** that can receive it—ensuring **redundancy, reliability**, and **network flexibility**.

#### The Citywide Mail Analogy

Imagine living in a city where, when you send a letter, it doesn’t matter which post office it goes to—all messages end up at the **central post office** (the **Network Server**). That’s exactly how **LoRaWAN communication works**.

- An **end device** (e.g., a temperature sensor) sends a data packet
- Any **nearby gateways** that receive the message forward it to the **Network Server**
- The Network Server keeps **only one copy**, discarding duplicates—this is called **message deduplication**

> This system boosts **message reliability**, ensures **efficient network traffic**, and supports **scalability**, especially in dense IoT environments.

## LoRaWAN Frequency Regions

Just like **international postal systems** have different rules for sending mail, **LoRaWAN operates in regional bands**, each with its own set of **frequency plans** and regulations.

#### LoRaWAN Regional Operation Explained

LoRaWAN uses **license-free ISM radio frequencies**, meaning anyone can deploy a network **without paying license fees**—just like setting up Wi-Fi at home. However, **each region has unique requirements**:

- **Duty cycle restrictions**
- **Frequency ranges**
- **Maximum transmission power**
- **Channel spacing and bandwidth limits**

These rules ensure fair use and minimal interference between devices in **crowded radio environments**.

## What Are LoRaWAN Frequency Plans?

A **LoRaWAN frequency plan** is like a country’s mailing rules: it defines which **radio frequencies** a device can use, how often it can send data, and how much power it can use.

Here are a few examples of regional plans:
- **EU868 (Europe)**: 868 MHz ISM band, with duty cycle limits
- **US915 (North America)**: 902–928 MHz with frequency hopping
- **IN865 (India)**: 865–867 MHz with 1% duty cycle
- **AU915 (Australia)** and **AS923 (Asia)** also have their own unique plans

> Devices must comply with **regional frequency plans** to ensure **legal operation**, **interoperability**, and **optimal performance** in their respective regions.

By understanding **LoRaWAN’s communication model and regional frequency differences**, developers and businesses can confidently **build scalable, long-range IoT networks** that are both **reliable** and **compliant** with global standards.

#### LoRaWAN Regional Frequency Plans

<table className="parameter-table">
  <thead>
    <tr>
      <th>Frequency Plan</th>
      <th>Common Name</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>EU863–870</td><td>EU868</td></tr>
    <tr><td>US902–928</td><td>US915</td></tr>
    <tr><td>CN779–787</td><td>CN779</td></tr>
    <tr><td>EU433</td><td>EU433</td></tr>
    <tr><td>AU915–928</td><td>AU915</td></tr>
    <tr><td>IN865–867</td><td>IN865</td></tr>
    <tr><td>RU864–870</td><td>RU864</td></tr>
    <tr><td>AS923-4</td><td>AS923-4</td></tr>
    <tr><td>CN470–510</td><td>CN470</td></tr>
    <tr><td>AS923-1</td><td>AS923</td></tr>
    <tr><td>AS923-2</td><td>AS923-2</td></tr>
    <tr><td>AS923-3</td><td>AS923-3</td></tr>
    <tr><td>KR920–923</td><td>KR920</td></tr>
  </tbody>
</table>


#### Understanding LoRaWAN Frequency Plans by Region

Just like you can’t mail a package internationally without following each country’s customs rules, you can’t deploy **LoRaWAN devices globally** without understanding **regional frequency regulations**.

Each country or region uses its own **LoRaWAN frequency plan**, which defines:
- What frequency ranges are allowed
- How much power a device can use
- How often it can send data (duty cycle limits)
- Other radio communication constraints

**More details on specific LoRaWAN frequency plans** can be found on [Macnman’s website](https://macnman.com/).

#### Why Regional Frequency Plans Matter

When deploying a LoRaWAN network, it’s critical to **follow your country’s designated frequency plan** to:
- Ensure legal operation
- Avoid interference with other devices
- Maximize signal range and efficiency
- Guarantee compatibility with certified gateways and nodes

Think of these plans like **mailing guidelines**: just as each country has its own rules for sending and receiving letters, **LoRaWAN operates differently depending on location**.

#### EU863–870 (Commonly Known as EU868)

This is the **standard LoRaWAN frequency plan for Europe**. It’s used across many countries in the EU and follows well-defined rules for signal strength, bandwidth, and transmission intervals.

#### Key Features:
- Operates in the **868 MHz ISM band**
- Subject to **duty cycle restrictions**
- Supports **up to 8 channels** depending on the country
- Widely adopted for **smart agriculture, building automation, and environmental monitoring**


#### US902–928 (Commonly Known as US915)

This frequency plan is used in the **United States**, and also applies to parts of Latin America. While similar in purpose to EU868, it follows **different transmission rules** and **uses frequency hopping**.

#### Key Features:
- Operates in the **902–928 MHz band**
- Uses **frequency hopping spread spectrum (FHSS)**
- No duty cycle restrictions (but channel dwell time limits apply)
- Designed for **high-capacity networks** with better spectrum reuse

**Ideal for**: Large-scale U.S. deployments, including **smart city infrastructure**, **utilities**, and **logistics networks**.

By selecting the correct **LoRaWAN regional frequency plan**, developers and system integrators can build **reliable, legal, and future-proof IoT networks** tailored to the unique constraints of each country.

#### Challenges of Using LoRaWAN Across Regions

One of the biggest challenges with **LoRaWAN deployment** is that **radio frequency regulations vary by region**. You can’t simply deploy a “one-size-fits-all” setup worldwide. Each country or region has its own rules for **radio frequencies**, **duty cycles**, and **transmission power**—just like each country has its own postal system rules.

#### Mailing Analogy: Different Routes in Different Countries

Imagine sending letters internationally. Some countries allow multiple mailing options; others don’t. The same applies to **LoRaWAN frequency plans**:

- **Netherlands**: Allows both **EU868** and **EU433** frequency bands—like having access to two different postal services.
- **Asia**: Countries follow general LoRaWAN guidelines, but each has **its own channel subsets**, meaning frequency allocations differ slightly by country.

This variation makes it difficult to build a **universal LoRaWAN device**, but thanks to **regional frequency parameters**, devices can still function globally—**just by switching to the right frequency plan**.

#### LoRaWAN’s Recommended Default Settings

Just like post offices offer **standard delivery times** (1-day, 2-day, etc.), **LoRaWAN networks define default settings** to help maintain consistency across global deployments.

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RX1 Delay</td>
      <td>Standard delivery time after uplink—like a 1-day express mail window. Set at 1 second.</td>
    </tr>
    <tr>
      <td>RX2 Delay</td>
      <td>Additional wait time—like adding an extra day to delivery. Set at 2 seconds.</td>
    </tr>
  </tbody>
</table>

These defaults include:
- **Join request frequencies**
- **Default data rates**
- **Transmit power limits**
- **Duty cycle guidelines**

#### EU863–870 MHz Band: A Neighborhood of Frequencies

The **EU863–870 MHz frequency band** is like a **sprawling neighborhood** in Europe. It covers frequencies from **863 MHz to 870 MHz**, with some exceptions (e.g., **Albania allows up to 873 MHz**).

#### Default Channels: The Main Streets of Communication

Think of this neighborhood having **three main streets** that everyone uses to send messages:
- **868.10 MHz** (Channel Avenue)
- **868.30 MHz** (Frequency Street)
- **868.50 MHz** (Bandwidth Road)

When a **LoRaWAN end device** wants to send a **Join-Request message**, it picks one of these streets (frequencies) at random. Gateways—like post offices—are always listening on these streets.

## Data Rates: Choosing How Fast You Travel

LoRaWAN supports **multiple data rates (DR0 to DR5 in EU868)**. These can be imagined as:
- 🚶‍♂️ **Walking (low data rate, long range)**
- 🚲 **Biking (medium speed and distance)**
- 🚗 **Driving (high speed, short range)**

<table className="parameter-table">
  <thead>
    <tr>
      <th>Data Rate</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DR0 (Walking)</td>
      <td>You’re taking your time (slow data rate), but everyone in the neighborhood can see your message.</td>
    </tr>
    <tr>
      <td>DR5 (Driving)</td>
      <td>You’re speeding down the road, sending your message quickly, but only people nearby can get it.</td>
    </tr>
  </tbody>
</table>

The **slower the data rate**, the **longer the range**, but it takes more airtime to send data. The **higher the data rate**, the **shorter the range**, but it’s faster.

#### Power Limits: How Loud Can You Speak?

Each country sets a **maximum transmit power limit** to ensure radio signals don’t interfere with others. In **Europe**, the limit is **+16 dBm**—like setting a volume cap on your voice so you’re heard, but not yelling too loud.

## EIRP / ERP: Think of It Like a Flashlight

**EIRP (Effective Isotropic Radiated Power)** is a fancy way of describing how far your LoRa signal can reach—like a flashlight beam:

- A **stronger beam (higher EIRP)** means longer range
- A **weaker beam (lower EIRP)** means more localized communication

Each region enforces a **maximum EIRP**, and your device must stay within it to be compliant.

<table className="parameter-table">
  <thead>
    <tr>
      <th>Power Level</th>
      <th>Signal Strength</th>
      <th>EIRP Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Very Strong</td>
      <td>+16 dBm = 40 mW</td>
    </tr>
    <tr>
      <td>0</td>
      <td>Strong</td>
      <td>+14 dBm = 25 mW</td>
    </tr>
    <tr>
      <td>0</td>
      <td>Medium</td>
      <td>+12 dBm</td>
    </tr>
    <tr>
      <td>0</td>
      <td>Weaker</td>
      <td>+10 dBm</td>
    </tr>
    <tr>
      <td>0</td>
      <td>Very Weak</td>
      <td>+2 dBm</td>
    </tr>
  </tbody>
</table>

So, when your device transmits **at +16 dBm,** it’s like shining a very bright flashlight at full power.

## Maximum Payload Size in LoRaWAN: How Much Data Can Your IoT Device Transmit?

In LoRaWAN networks, **payload size** refers to the maximum amount of data (measured in bytes) that an IoT device can send in a single message. Think of it like sending a letter through the postal system: the **payload** is what you can fit inside the envelope.

Interestingly, the **faster the data rate (DR)**, the **larger the payload** you can send. This is due to how **spreading factors (SF)** affect bandwidth and transmission time. Lower data rates use higher spreading factors (like SF12), which are slower but reach longer distances—perfect for remote sensors. Higher data rates (like SF7) allow you to send more data quickly but at shorter ranges.

Understanding how **LoRaWAN payload capacity** works is essential for designing efficient IoT applications such as **smart agriculture**, **industrial monitoring**, or **cold chain logistics**, where bandwidth and power consumption are critical factors.

#### LoRaWAN Maximum Payload Size by Data Rate

<table className="parameter-table">
  <thead>
    <tr>
      <th>Data Rate (DR)</th>
      <th>Spreading Factor (SF)</th>
      <th>Maximum Payload Size (bytes)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DR0</td>
      <td>SF12</td>
      <td>51(small letter)</td>
    </tr>
    <tr>
      <td>DR1</td>
      <td>SF11</td>
      <td>51</td>
    </tr>
    <tr>
      <td>DR2</td>
      <td>SF10</td>
      <td>51</td>
    </tr>
    <tr>
      <td>DR3</td>
      <td>SF9</td>
      <td>115</td>
    </tr>
    <tr>
      <td>DR4</td>
      <td>SF8</td>
      <td>242</td>
    </tr>
    <tr>
      <td>DR5</td>
      <td>SF7</td>
      <td>242(big envelope)</td>
    </tr>
  </tbody>
</table>

#### Why Payload Size Matters in LoRaWAN

- **Optimizes battery life** for low-power IoT sensors  
- Reduces the need for frequent transmissions  
- Helps choose the right **data rate vs range trade-off**  
- Supports various IoT use cases like asset tracking, environmental sensing, and building automation

**Tip:** Always match your payload size to your use case, network capacity, and regional regulations to get the best performance from your LoRaWAN device.

## Duty Cycle in LoRaWAN: How Often Can Your Device Transmit?

In LoRaWAN communication, the **duty cycle** determines **how frequently a device can send data** over a given frequency band. Think of your LoRa device like having scheduled access to a public park—it can play (transmit) for a while, but then it has to step aside to let others use the space.

The duty cycle is typically expressed as a percentage of time a device is allowed to **transmit in a 1-hour window**.

#### Real-World Duty Cycle Examples:

- **1% Duty Cycle** → Your device can transmit for **36 seconds every hour** (~14 minutes/day)
- **0.1% Duty Cycle** → Your device can transmit for **3.6 seconds every hour** (~86 seconds/day)

This regulation ensures that **no single device monopolizes the frequency**, promoting fair usage and maintaining network health—especially in dense **IoT environments** with many sensors and actuators.

#### Why Duty Cycle Matters in IoT Deployments

- 📡 **Prevents interference** among thousands of LoRaWAN devices  
- 🔋 Encourages **ultra-low power consumption**  
- 🌐 Essential for operating in **license-free ISM bands** like 868 MHz (EU), 915 MHz (US), or 865 MHz (India)  
- 📈 Helps ensure **network scalability** in smart cities, agriculture, and industrial applications

<table className="parameter-table">
  <thead>
    <tr>
      <th>Duty Cycle</th>
      <th>Max Time on Air per Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0.1%</td><td>86 seconds</td></tr>
    <tr><td>1%</td><td>864 seconds</td></tr>
    <tr><td>10%</td><td>8640 seconds</td></tr>
  </tbody>
</table>

**Note:** The duty cycle makes sure no one device is hogging the airwaves, so everyone gets a chance to send their messages. Duty cycle restrictions vary by **country and frequency band**, and are defined by local telecom authorities (e.g., ETSI in Europe).
