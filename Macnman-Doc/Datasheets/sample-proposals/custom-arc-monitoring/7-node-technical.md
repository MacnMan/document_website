---
id: custom_product_node_technical_specifications
title: Node Technical Specifications
---

# Node Tracker – Technical Specifications

## Current Sensing Module
**Requirement:** 10A – 1500A, AC/DC, rugged, isolated.

**Options:**  
- **LEM HASS 200/300-S** – Hall‑effect, isolated, industrial grade  
- **Allegro ACS758 / ACS770 Series** – Hall‑effect, compact, high‑current sensing  
- **Rogowski Coil (Custom Integration)** – Flexible wide‑range sensing (AC only; requires rectifier + integrator)

**Recommendation:** Hall‑effect based (LEM or Allegro) for stable sensing across AC & DC welding currents.

---

## Wireless Communication (LoRa)
**Requirement:** Long‑range, low‑power, secure wireless communication.

**Options:**  
- **Semtech SX1276 / SX1278** – Proven industrial LoRa transceiver  
- **STM32WL55** – Integrated MCU + LoRa RF (space‑saving, lower BoM)

**Recommendation:** SX1276/78 or STM32WL depending on footprint and cost structure.

---

## Display Module
**Requirement:** Compact, low‑power, readable in industrial environments.

**Options:**  
- **OLED 0.96” / 1.3” (I²C)** – Battery %, node ID, pairing info  
- **Segmented Custom LCD** – Ultra‑low power, readable outdoors  
- **TFT 1.8”–2.0”** – High visibility, higher power consumption

**Recommendation:** Segmented Display or 0.96–1.3” OLED for optimal power efficiency and clarity.

---

## Battery & Power Management
**Requirement:** Rechargeable, supports 3‑month operation, induction charging.

**Battery Options:**  
- **Li‑Ion 18650 (2600–3400 mAh)** with BMS  
- **LiFePO4 14500 (1500 mAh)** – Safer, longer cycle life

**Induction Charging Options:**  
- **Qi‑based wireless charging modules (XKT412 / XKT515)**  
- **Custom induction coil around welding ground cable**

**Recommendation:** Li‑Ion + Qi‑standard wireless charging for best efficiency and flexibility.

---

## Enclosure & Protection
**Requirement:** IP55/IP65, rugged, antenna fully enclosed.

**Options:**  
- **ABS / Polycarbonate IP65 Enclosure** (off‑the‑shelf, gasket sealed)  
- **Custom‑molded enclosure** with isolated antenna chamber

**Recommendation:** Standard IP65 ABS housing + CNC modifications for induction coil or connectors.

---

## MCU & Control Unit
**Requirement:** Low‑power MCU capable of sensing + LoRa + display control.

**Options:**  
- **STM32L Series** – Ultra‑low‑power ARM Cortex‑M, industrial reliability  
- **nRF54L / nRF5340 + SX1276** – If BLE is needed in future  
- **STM32WL** – Integrated LoRa MCU for compact PCB design

**Recommendation:** STM32L series or STM32WL depending on BLE requirement and BoM constraints.
