---
id: custom_product_gateway_technical_specifications
title: Gateway Technical Specifications
---

# LoRaWAN Hub – Technical Specifications

## System-on-Module (SoM)
**Requirement:** Industrial-grade computing with touchscreen support, wired/wireless connectivity, secure operation.

**Options:**  
- **NXP i.MX8M Mini / Plus SoM** (Toradex Verdin / Variscite DART) – Industrial-grade, 4/8GB RAM, Linux, HDMI/MIPI DSI, USB, Gigabit Ethernet  
- **NXP i.MX8M Nano / i.MX6UL SoM** – Low power, compact, suitable for simpler dashboards  
- **TechNexion PICO‑iMX8M / Variscite DART‑MX8M** – Long‑term availability, industrial reliability

**Recommendation:** **NXP i.MX8M Plus SoM** for industrial robustness, Linux support, and scalability.

---

## Display Interface
**Requirement:** Integrated ≥7” touchscreen, industrial visibility, low EMI.

**Options:**  
- **7” Industrial Capacitive Touchscreen (MIPI‑DSI)** – Bright, long lifespan, glove‑touch capable  
- **7” HDMI TFT Touchscreen** – Easy integration via HDMI, separate I²C/USB for touch  
- **10” Industrial Panel (Optional)** – Larger display, higher power consumption

**Recommendation:** **7” industrial‑grade capacitive touchscreen** (MIPI‑DSI or HDMI).

---

## Wireless Communication (LoRa)
**Requirement:** Secure, long‑range communication with Node Trackers.

**Option:**  
- **STM32WL** (single/dual‑channel Mesh gateway architecture)

**Recommendation:** STM32WL for reliable Mesh‑based node communication.

---

## Power Supply & Protection
**Requirement:** Industrial‑grade reliability with optional backup.

**Options:**  
- **Industrial AC‑DC Module (Mean Well / XP Power)** – 115/230 VAC → 12V/5V  
- **DC‑DC Step‑down / LDO Modules** – 3.3V for logic  
- **Protection:** EMI filters, surge protectors, TVS diodes, reverse polarity, fuses  
- **Optional Backup:** Supercapacitor or small Li‑ion UPS

**Recommendation:** Certified AC‑DC 12V/5V module + TVS/EMI protection + optional supercap backup.

---

## Storage & Data Interfaces
**Requirement:** Local storage for dashboard, logs, backups.

**Options:**  
- **eMMC (on SoM)** – OS + system storage  
- **NVMe/SSD via PCIe or USB 3.0** – High‑speed local logging  
- **MicroSD Slot (Optional)** – Field export/recovery  
- **USB Ports** – External storage or peripherals

**Recommendation:** **eMMC + USB3.0 SSD**, optional MicroSD for field users.

---

## Ethernet & Connectivity
**Requirement:** Stable network for dashboard and data sync.

**Options:**  
- **Gigabit Ethernet (RJ45)** – Primary communication  
- **Optional Wi‑Fi** – If wireless fallback needed  
- **Optional LTE/4G Module** – For sites without LAN

**Recommendation:** Gigabit Ethernet as primary; LTE as optional add‑on.

---

## MCU / Control & Peripherals
**Requirement:** Real‑time handling of LoRa, touchscreen, indicators.

**Options:**  
- **i.MX8M Plus SoM** handles all control tasks  
- **Auxiliary STM32 MCU (Optional)** – For strict real‑time LoRa ops or watchdog logic

**Recommendation:** SoM‑only architecture unless advanced real‑time control is required.

---

## Enclosure & Environmental Protection
**Requirement:** Rugged, industrial‑grade, IP51.

**Options:**  
- **Metal enclosure (powder‑coated)** – Strong EMI shielding  
- **ABS/Polycarbonate IP51** – Lightweight, chemical resistant  
- **Custom enclosure** with internal mounting rails for touchscreen, AC inlet, SMA antenna

**Recommendation:** **Metal IP51 enclosure** with cutouts for touchscreen, AC inlet, SMA, HDMI, USB, Ethernet.

---

## Status Indicators & Controls
**Requirement:** System health and diagnostics.

**Options:**  
- **LED Indicators:** Power, LoRa, Node count, Error  
- **Push Buttons:** Reset, pairing, firmware update  
- **Optional Buzzer:** Audible critical alerts

**Recommendation:** LEDs + reset/pairing button; buzzer optional.

---

## Optional Security & Management
**Requirement:** Secure, future‑proof operation.

**Options:**  
- **TPM (Trusted Platform Module)** – Secure key storage  
- **RTC with Backup** – Accurate timestamps  
- **Hardware Watchdog** – Auto‑recover from system hang

**Recommendation:** TPM + RTC + watchdog for long‑term reliability.
