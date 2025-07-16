---
sidebar_position: 1
---

# Product Overview

import React from 'react';

# Create a Custom Page in Docusaurus

<div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  {/* Video */}
  <div style={{ flex: 1, minWidth: '300px' }}>
    <video width="100%" height="300" controls style={{ objectFit: 'cover' }}>
      <source src="/videos/sample.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Text */}
  <div style={{ flex: 1, minWidth: '300px' }}>
    <h2>Connect your sensor</h2>
    <p>
      Macnman sensors operate in always-on mode. Navigate to the BLE search tab to see a list of nearby Macnman devices.
    </p>
    <p>Select the sensor you wish to connect to.</p>
    <p>After connecting, you will be directed to the configuration page.</p>
    <p><strong>Note:</strong> The sensor offers security options for configuration. To prevent other users from connecting to your device, set the sensor to a higher security level.</p>
  </div>
</div>

