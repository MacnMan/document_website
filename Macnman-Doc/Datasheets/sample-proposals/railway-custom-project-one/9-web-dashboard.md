---
id: custom_product_web_dashboard
title: Web Dashboard
---

# Web Dashboard & Technical Architecture

## High‑Level Design

**Technology & Packages Finalization**  
Selection of frontend, backend, and database stack based on customer preference for ease of maintenance and long-term scalability.  
Recommended options:  
- **Backend:** Node.js, Python (FastAPI), Go  
- **Frontend:** React, Angular  
- **Database:** PostgreSQL / SQLite (Hub‑hosted or server‑hosted)  
- **Visualization Libraries:** D3.js, Chart.js, ECharts  

**Communication Interface**  
Secure Edge ↔ Dashboard communication via:  
- MQTT (event streaming from trackside systems)  
- REST API (historical data, reports, configuration)  
- WebSocket (real‑time train movement and wagon status updates)

**Internal Architecture**  
Modular system with independent layers:  
- Sensor & Edge Data Ingestion Layer  
- Processing & Analytics Layer  
- Visualization & UI Layer  
- Storage, Logging & Audit Layer  

**Design Documentation**  
Includes API definitions, data flow diagrams, DB schema, event models, and module‑wise technical breakdown.

---

## WebApp Server (Hub‑Hosted / Control‑Room Hosted)

**Deployment**  
- WebApp runs on on‑premise server or control‑room PC; can also be containerized (Docker) if required.  
- No mandatory cloud dependency; supports offline / local operation.

**Access**  
- Browser‑based access on LAN (PC / tablet / control‑room systems).

**Purpose**  
- Real‑time train and wagon monitoring  
- Wagon count and load status visualization  
- Train ID (LPR) association review  
- Device health, diagnostics, and configuration  

**Security**  
- Local authentication and user management  
- HTTPS support using self‑signed or enterprise CA certificates  
- Role‑based access (Admin, Operations, Viewer)

---

## Configurable Dashboard

**Dashboard Customization**  
User‑defined layouts with configurable widgets based on operational roles.

**Visualization Types**  
- Line graphs (train movement, speed trends)  
- Bar graphs (wagon count per train, loaded vs empty distribution)  
- Pie charts (load classification summary)  
- Real‑time counters (active train, total wagons detected)

**Filtering Options**  
- Train Number / ID  
- Date & Time range  
- Track / Location  
- Wagon Load Status (Loaded / Partially Loaded / Empty)  
- Direction of movement  
- Event ID  

**UI/UX**  
- Fully responsive web interface  
- Optimized for control‑room displays and industrial tablets  

---

## Data Handling & Visualization

**Data Flow**  
Trackside Sensors → MacSync W Series (Edge Processing) → Local API / Server → WebApp → Dashboard  

**Data Storage**  
- SQLite / PostgreSQL  
- Indexed tables for fast search and filtering  
- Automatic log rotation and archival  

**Visualization Engine**  
- D3.js / Chart.js / ECharts  
- Supports zoom, pan, hover, and drill‑down  
- Timeline scrubbing for train pass‑by analysis  

**Export Features**  
- CSV  
- Excel  
- JSON  
For reporting, audits, and operational analysis.

---

## DevSecOps & CI/CD

**Version Control**  
Git‑based branching, review, and release workflow.

**CI/CD Pipeline**  
- Automated build and packaging  
- Automated testing  
- Controlled deployment for dashboard and backend services  

**Security Integration**  
- Static application security testing (SAST)  
- Dependency vulnerability scanning  
- API authentication, authorization, and rate‑limiting  

**OTA & Updates (Future Scope)**  
- Controlled local updates via secure packages  
- Versioned deployment from control‑room systems  

**Support Model**  
- Bug fixes and patch releases as per agreed SLA  
- Feature enhancements based on operational feedback  
- Standard support period with extendable maintenance contracts

---
