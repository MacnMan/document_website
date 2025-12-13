---
id: specifications
title: Specifications
---

# Product Specifications
## Weather Parameters

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Range</th>
      <th>Accuracy</th>
      <th>Resolution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ambient Temperature</td>
      <td>-40°C to +85°C</td>
      <td>±0.3°C @ 25°C</td>
      <td>0.01°C</td>
    </tr>
    <tr>
      <td>Relative Humidity</td>
      <td>0% to 100% RH</td>
      <td>±3% RH (@90% RH)</td>
      <td>0.01% RH</td>
    </tr>
    <tr>
      <td>Wind Speed</td>
      <td>0–60 m/s</td>
      <td>±(0.3 + 0.03V) m/s</td>
      <td>0.01 m/s</td>
    </tr>
    <tr>
      <td>Wind Direction</td>
      <td>0°–359.9°</td>
      <td>±3° (Speed &lt; 10 m/s)</td>
      <td>0.1°</td>
    </tr>
    <tr>
      <td>Atmospheric Pressure</td>
      <td>500–1100 hPa</td>
      <td>±0.5 hPa (25°C)</td>
      <td>0.1 hPa</td>
    </tr>
    <tr>
      <td>Rainfall</td>
      <td>0–200 mm/h</td>
      <td>-</td>
      <td>0.2 mm</td>
    </tr>
  </tbody>
</table>

## LoRaWAN Wireless Transmission

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>Technology</td>
      <td>LoRaWAN® ( v1.0.4), Macnman Beam Protocol</td>
    </tr>
    <tr>
      <td>Antenna</td>
      <td>Internal high- efficiency antenna</td>
    </tr>
    <tr>
      <td>Sensitivity</td>
      <td>-137 dBm @ 300 bps</td>
    </tr>
     <tr>
      <td>Tx Power</td>
      <td>`16 dBm @868 MHz` `20 dBm @915 MHz` `19 dBm @470 MHz`</td>
    </tr>
    <tr>
      <td>LoRaWAN Class</td>
      <td>Class A (default), Configurable to Class C via Maya</td>
    </tr>
    <tr>
      <td>Frequency</td>
      <td>`IN865` , `US915` , `EU868` , `AU915` </td>
    </tr>
    <tr>
      <td>Activation Type</td>
      <td>`OTAA`</td>
    </tr>
    
  </tbody>
</table>

## Power Specifications

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Operating Voltage</td>
      <td>12-24 DC</td>
    </tr>
    <tr>
      <td>Power consumption</td>
      <td> < 0.2 W (Typical) </td>
    </tr>
    <tr>
      <td>Power Input Type</td>
      <td>Terminal (Internal)</td>
    </tr>
     <tr>
      <td>Reverse Protection</td>
      <td>Yes</td>
    </tr>
     <tr>
      <td>Battery Option</td>
      <td>Optional</td>
    </tr>
  </tbody>
</table>

## Physical Characteristics

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Power Supply</td>
      <td>1 × 19,000 mAh Li-SOCl₂ battery (field-replaceable)</td>
    </tr>
    <tr>
      <td>Battery Life*</td>
      <td>Up to 10+ years (SF7, 10-minute interval) & ~5.8 years (SF10, I N865)</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>460 gms (with battery)</td>
    </tr>
    <tr>
      <td>Ingress Protection</td>
      <td>IP 65 standard (IP 6 7 optional variant)</td>
    </tr>
    <tr>
      <td>Housing Material</td>
      <td>Glass Field Nylon</td>
    </tr>
     <tr>
      <td>Color</td>
      <td>Matte W hite</td>
    </tr>
      <tr>
      <td>Probe Material</td>
      <td>Steel & Plastic</td>
    </tr>
  </tbody>
</table>

## Operating Conditions

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Operating temperature</td>
      <td> - 35 °C , + 60 °C</td>
    </tr>
    <tr>
      <td>Storage temperature</td>
      <td> - 40 °C , + 70 °C</td>
    </tr>
    <tr>
      <td>Relative Humidity</td>
      <td>95% (non-condensing) </td>
    </tr>
    <tr>
      <td>Casing Built</td>
      <td>Suitable for the indoor & outdoor harsh environements</td>
    </tr>
  </tbody>
</table>

## Default Paramters 

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Frequency Plan</td>
      <td>IN868</td>
    </tr>
    <tr>
      <td>Adaptive data rate</td>
      <td>On</td>
    </tr>
    <tr>
      <td>Confirmed Uplinks</td>
      <td>Off </td>
    </tr>
    <tr>
      <td>Update Interval</td>
      <td>10 Mins</td>
    </tr>
  </tbody>
</table>


## Certifications

<table className="parameter-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Regulatory</td>
      <td>WPC</td>
    </tr>
    <tr>
      <td>Environmental</td>
      <td>RoHS compliant</td>
    </tr>
  </tbody>
</table>
