---
id: custom_product_web_dashboard
title: Web Dashboard
---

# Web Dashboard & Technical Architecture

## High‑Level Design

**Technology & Packages Finalization**  
Selection of frontend, backend, and database stack based on customer preference for easy internal maintenance.  
Recommended options:  
- **Backend:** Node.js, Python (FastAPI), Go  
- **Frontend:** React, Angular  
- **Database:** PostgreSQL / SQLite (Hub‑hosted)  
- **Visualization Libraries:** D3.js, Chart.js, ECharts  

**Communication Interface**  
Secure Hub ↔ Dashboard communication via:  
- MQTT (event streaming)  
- REST API (historical data, configs)  
- WebSocket (real‑time graphs)

**Internal Architecture**  
Modular system with independent layers:  
- Data Collection Layer  
- Processing & Computation Layer  
- Visualization & UI Layer  
- Storage & Logging Layer  

**Design Documentation**  
Includes API definitions, data flow diagrams, DB schema, and module‑wise breakdown.

---

## WebApp Server (Hub‑Hosted)

**Deployment**  
- WebApp runs directly on the Hub inside Docker containers for reliability.  
- No cloud dependency; full offline capability.

**Access**  
- Browser‑based access on LAN (PC/tablet/mobile).  

**Purpose**  
- Dashboard visualization  
- Node tracker management  
- Device configuration and diagnostics  

**Security**  
- Local authentication system  
- HTTPS support using self‑signed or local CA certificates  
- Role‑based access (Admin, Viewer in future upgrades)

---

## Configurable Dashboard

**Dashboard Customization**  
User‑defined layouts with draggable widgets.

**Visualization Types**  
- Line graph (Arc‑time trend)  
- Bar graph (Daily usage, operator performance)  
- Pie charts (Distribution)  
- Real‑time counters (Live active welders)  

**Filtering Options**  
- Arc Time  
- Date & Time range  
- Operator  
- Station / Machine  
- Weld Count  
- Node ID  

**UI/UX**  
- Fully responsive Web UI  
- Supports industrial tablets for shop‑floor use  

---

## Data Handling & Visualization

**Data Flow**  
Node Tracker → LoRa Mesh → Hub → Local API → WebApp → Dashboard  

**Data Storage**  
- SQLite / PostgreSQL  
- Indexed tables for fast filtering  
- Automatic log rotation  

**Visualization Engine**  
- D3.js / Chart.js  
- Support for zoom, pan, hover, drill‑down  
- Timeline scrubbing for arc‑time review  

**Export Features**  
- CSV  
- Excel  
- JSON  
For reporting & analysis.

---

## DevSecOps & CI/CD

**Version Control**  
Git‑based branching & code review workflow.

**CI/CD Pipeline**  
- Automated build  
- Automated testing  
- Deployment pipeline for Hub + Dashboard  

**Security Integration**  
- Static application security testing (SAST)  
- Dependency vulnerability scanning  
- API request throttling & rate‑limit protections  

**OTA Updates (Future Scope)**  
- Local update via USB  
- Secure signed update packages  
- WebApp upgrade from Hub management console

**Support Model**  
- Bug fix and patch releases as per SLA  
- Feature enhancement based on customer feedback  
- 3–6 months standard support, extendable

---
