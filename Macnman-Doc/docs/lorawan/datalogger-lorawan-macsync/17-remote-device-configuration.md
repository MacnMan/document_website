---
id: macsync_payload_structure
title: Configuration using Server
---

# Configure MacSync using Server

## Data Types

<table className="parameter-table">
  <thead>
    <tr>
      <th>Code</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>INT16</td>
      <td>16-bit signed integer</td>
    </tr>
    <tr>
      <td>01</td>
      <td>UINT16</td>
      <td>16-bit unsigned integer</td>
    </tr>
    <tr>
      <td>02</td>
      <td>INT32 [MSB]</td>
      <td>Most significant 32-bit signed integer</td>
    </tr>
    <tr>
      <td>03</td>
      <td>INT32 [LSB]</td>
      <td>Least significant 32-bit signed integer</td>
    </tr>
    <tr>
      <td>04</td>
      <td>FLOAT32 [MSB]</td>
      <td>Most significant 32-bit floating-point number</td>
    </tr>
    <tr>
      <td>05</td>
      <td>FLOAT32 [LSB]</td>
      <td>Least significant 32-bit floating-point number</td>
    </tr>
  </tbody>
</table>

## Payload Structure

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
      <th>Default</th>
      <th>Valid Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Field</td>
      <td>Integer</td>
      <td>Data field identifier</td>
      <td>1</td>
      <td>1–255</td>
    </tr>
    <tr>
      <td>slaveld</td>
      <td>Integer</td>
      <td>ID of the slave device</td>
      <td>1</td>
      <td>1–247</td>
    </tr>
    <tr>
      <td>functionCode</td>
      <td>Integer</td>
      <td>Function code for the operation (e.g., read, write)</td>
      <td>3</td>
      <td>1–6, 15, 16</td>
    </tr>
    <tr>
      <td>Enable</td>
      <td>Integer</td>
      <td>Enable flag (1 for enabled, 0 for disabled)</td>
      <td>1</td>
      <td>0 or 1</td>
    </tr>
    <tr>
      <td>datatype</td>
      <td>Integer</td>
      <td>Specifies the data type of the value to read</td>
      <td>01</td>
      <td>00–05</td>
    </tr>
    <tr>
      <td>groupParaNo</td>
      <td>Integer</td>
      <td>Number of registers in a single group</td>
      <td>1</td>
      <td>1–125</td>
    </tr>
    <tr>
      <td>Registeraddress</td>
      <td>Integer</td>
      <td>Address of the registers</td>
      <td>0</td>
      <td>0–65535</td>
    </tr>
  </tbody>
</table>

<div class="faint-line"></div>

## One-Time Modbus Register Read

#### Example payload (JSON): 

```json
{ 
"slaveId": 1, 
"functionCode": 3, 
"dataType": 1, 
"numberOfParameters": 1, 
"Registeraddress": 257
}
```
:::note
Use FPort = 13
:::

<div class="faint-line"></div>

## Modbus Register Update

#### Example payload (JSON): 

```json
{ 
"Field": 1,
"slaveld": 2,
"functionCode": 3,
"Enable": 1,
"datatype": 2,
"numberOfParameters": 1,
"Registeraddress": 3036
}
```
:::note
Use FPort = 10
:::

<div class="faint-line"></div>


## Updating Device Heartbeat

#### Example payload (JSON): 

```json
{ 
"txTime": 60
}
```
:::note
Use FPort = 06 & Times in seconds
:::

<div class="faint-line"></div>

## Modifying Slave Id & Registers/Coils

#### Example payload (JSON): 

```json
{ 
"slaveid": 4,
"value": 255 ,
"numberofreg": 1, 
"address": 0
}
```
:::note
Use FPort = 08 for registers & FPort = 09 for coils
:::

<div class="faint-line"></div>


## Verifying Modbus Registers

#### Example payload (JSON): 

```json
{ 
"index": 1 
}
```
:::note
Use FPort = 15
:::

<div class="faint-line"></div>


## Configuring Baud Rate & Parity

#### Example payload (JSON): 

```json
{ 
"baud": 9600, 
"parity": 1 
}
```
:::note
Use FPort = 12 for RS485 read operations.
:::

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parity</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>None</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Odd</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Even</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
