---
id: macset_lora_Schedule_regular
title: Regular Relay Schedulings
---

# Relay Scheduling in MacSet

## What is Regular Scheduling?

The **Regular Schedule** allows users to schedule specific relays to turn ON and OFF at defined times, on selected days. This is ideal for automating lights, pumps, ventilation, and other time-based operations.

![regular schedule](/img/controller/regular_Schedule_lorawan_controller.svg)

## Regular Schedule Setup Flow

#### Steps to Configure

1. **Toggle ON the Schedule**  
   Enable the Schedule slot to begin configuration.

2. **Assign a Label**  
   Give your Schedule a name (e.g., `Daily Pump Cycle`) to easily identify it later.

3. **Select Schedule Type**  
   Choose **Regular** or **Scheduled** as the Schedule type.

4. **Choose Active Days**  
   Select which day(s) of the week the schedule should be applied to.

5. **Select Relay and Define Action**  
   Choose the relay you want to control. Use the toggle switch to specify whether the relay should be enabled or disabled according to the scheduled times.

6. **Set Relay ON Time and OFF Time**  
   - **Relay ON Time**: The time at which the relay will turn ON  
   - **Relay OFF Time**: The time at which the relay will turn OFF

7. **Save the Schedule**  
   Tap **Set** to save and activate the schedule.

## Regular Scheduling Relay Action Logic

Once configured, the selected relay will:

- Turn **ON** at the specified ON Time  
- Turn **OFF** at the specified OFF Time  
- This ON/OFF cycle will repeat on the chosen days  
- No parameter monitoring is involved — this is a fixed, time-based schedule

## Regular Scheduling  Example

#### Overheating Protection in Machinery

*I want the office **lights to turn ON automatically at 6:30 PM and turn OFF at 11:00 PM** from Monday to Friday. This helps ensure proper lighting during late working hours without needing manual operation every day.*

#### Evening Lights Automation in Office Premises

**Label:** `Evening Lights`  
**Days Active:** Monday to Friday  
**Relay:** Relay 2  
**Relay ON Time:** 6:30 PM  
**Relay OFF Time:** 11:00 PM  
  
**Result:** Relay 2 will turn ON at 6:30 PM and turn OFF at 11:00 PM every weekday automatically.
