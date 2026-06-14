import Link from "@docusaurus/Link";
import { useState, useEffect, useRef } from "react";
import { ROUTES } from "../../lib/routes";
import {
  FiShoppingBag,
  FiHeadphones,
  FiChevronLeft,
  FiChevronRight,
  FiSmartphone,
  FiHome,
  FiWifi,
  FiBluetooth,
  FiPackage,
  FiSettings,
  FiGrid
} from "react-icons/fi";

const data = {
  products: [
    {
      id: 1,
      name: "RS485 to LoRaWAN® Datalogger",
      description: "MacSync-LX-PO/BO",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/macsync-std-img.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Dataloggers",
      learnMore: ROUTES.analog_to_lorawan_converter_macsync_std,
    },
    {
      id: 2,
      name: "LoRaWAN Relay Controller",
      description: "MacSet-LX1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/macset-logo-gen-two.webp",
      category: "Controllers",
      technology: "LoRaWAN",
      subCategory: "Relay Controllers",
      learnMore: ROUTES.lorawan_remote_automation_controller_macset_x_one,
    },
    {
      id: 3,
      name: "LoRaWAN Ultrasonic Sensor",
      description: "MacRay-LU4",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/lorawan-ultrasonic-sensor-logo-flat.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Ultrasonic Sensors",
      learnMore: ROUTES.lorawan_ultrasonic_sensor_macray_lufour,
    },
    {
      id: 18,
      name: "LoRaWAN Outdoor Gateway",
      description: "MacLink Gen-2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/lorawan-outdoor-gateway-logo.webp",
      category: "Gateways",
      technology: "LoRaWAN",
      subCategory: "Outdoor Gateways",
      learnMore: ROUTES.outdoor_lorawan_gateway_maclink_gen_two,
    },
    {
      id: 19,
      name: "Indoor LoRaWAN Gateway",
      description: "Setu-X1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/lorawan-indoor-gateway-setu-logo.webp",
      category: "Gateways",
      technology: "LoRaWAN",
      subCategory: "Indoor Gateways",
      learnMore: ROUTES.indoor_lorawan_gateway_setu_x_one,
    },
    {
      id: 20,
      name: "UWB LoRaWAN Tracker",
      description: "MacTag Gen-2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/uwb-tag-three-macnman.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Trackers",
      learnMore: "/docs/product/uwb/trackers/fire-guard-single-channel-lora-gateway-for-firedatasheet",
    },
    {
      id: 4,
      name: "LoRaWAN Weather Station",
      description: "MacSync-LWSX6",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Industrial"],
      image: "/docs/img/devices/macnman-lorawan-weather-station-six-in-one.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Weather Stations",
      learnMore: "/docs/product/lorawan/sensors/weather-stations/macsync-l-five-in-one-weather-station-x-five",
    },
    {
      id: 5,
      name: "LoRaWAN ToF Sensor",
      description: "MacRay-ToFXx",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/lorawan-time-of-flight-sensor-macnman.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Time of Flight",
      learnMore: "/lorawan/sensors/lorawan-time-of-flight-sensor-macray-tof-gen-one",
    },
    {
      id: 6,
      name: "LoRaWAN Temperature & Humidity Sensor",
      description: "MacSync-L-T1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["Hot"],
      image: "/docs/img/devices/macnman-lorawan-temperature-humidity-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Temperature & Humidity",
      learnMore: "/docs/product/lorawan/sensors/temperature/macsync-lt-one-datasheet",
    },
    {
      id: 7,
      name: "LoRaWAN CO2 Sensor",
      description: "MacSync-LCO2X1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-lorawan-carbon-sensor-one.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "CO2 Sensors",
      learnMore: "/docs/product/lorawan/sensors/envirnomental-sensors/macsync-l-co-2-sensors",
    },
    {
      id: 8,
      name: "LoRaWAN/LoRa Module",
      description: "MAC32WLE5",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/lora-module-macnman-version-one.webp",
      category: "Modules",
      technology: "LoRaWAN",
      subCategory: "Communication Modules",
      learnMore: "/docs/modules/LoRa%20Modules/MAC32WLE5/introduction",
    },
    {
      id: 9,
      name: "LoRaWAN + Ble Module",
      description: "MAC32WBLE5",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/lorable-module-macnman-version-one.webp",
      category: "Modules",
      technology: "LoRaWAN",
      subCategory: "Combo Modules",
      learnMore: "/docs/modules/LoRa%20Modules/mac32wble5/introduction",
    },
    {
      id: 10,
      name: "WiFi + Ble Module",
      description: "MAC5347002",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/wifi-ble-esp-module-macnman-version-one.webp",
      category: "Modules",
      technology: "Wi-Fi",
      subCategory: "Combo Modules",
      learnMore: ROUTES.ble_module_mac52810,
    },
    {
      id: 11,
      name: "Ble Module",
      description: "MAC52810",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/module-two-logo.webp",
      category: "Modules",
      technology: "BLE",
      subCategory: "Communication Modules",
      learnMore: ROUTES.ble_module_mac52810,
    },
    {
      id: 12,
      name: "WiFi + Ble Module",
      description: "MAC5340-E",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/module-three-logo.webp",
      category: "Modules",
      technology: "Wi-Fi",
      subCategory: "Combo Modules",
      learnMore: ROUTES.ble_module_mac52810,
    },
    {
      id: 13,
      name: "LoRaWAN Noise Sensor",
      description: "MacSync-LNX1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-lorawan-noise-sensor-one.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Noise Sensors",
      learnMore: "/docs/product/lorawan/sensors/envirnomental-sensors/macsync-l-n-x-one-noise-sensor",
    },
    {
      id: 14,
      name: "LoRaWAN Soil Sensor",
      description: "MacSync-LSSX7",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-lorawan-soil-sensor-temp-humidity-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Soil Sensors",
      learnMore: "/docs/product/lorawan/sensors/soil-sensors/macsync-l-seven-in-one-soil-sensor",
    },
    {
      id: 15,
      name: "LoRaWAN Ultrasonic Sensor",
      description: "MacSync-L7",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-ultrasonic-sensor-logo-flat.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Ultrasonic Sensors",
      learnMore: "/docs/product/lorawan/sensors/level-sensors/macray-lorawan-ultrasonic-sensor-sub-four-meter-gen-one",
    },
    {
      id: 16,
      name: "LoRaWAN Parking Sensor",
      description: "ParkNode Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-parking-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Parking Sensors",
      learnMore: "/docs/product/lorawan/sensors/parking-sensors/parknode-gen-one-lorawan-parking-sensor",
    },
    {
      id: 17,
      name: "LoRaWAN RTD Sensor",
      description: "MacSync-LRTDXx",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-rtd-sensor-for-accurate-temperature-monitoring.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Temperature & Humidity",
      learnMore: "/docs/product/lorawan/sensors/temperature/macsync-l-rtd-x-five-datasheet",
    },
    {
      id: 21,
      name: "LoRaWAN Pressure Sensor",
      description: "MacSync-LPX1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macsync-pressure-sensor-logo-gen-one.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Pressure Sensors",
      learnMore: "/docs/product/lorawan/sensors/envirnomental-sensors/macsync-lorawan-pressure-sensor-x-series",
    },
    {
      id: 22,
      name: "LoRaWAN Weather Station",
      description: "MacSync-LWSX5",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-lorawan-weather-station-six-in-one.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Weather Stations",
      learnMore: "/docs/product/lorawan/sensors/weather-stations/macsync-l-six-in-one-weather-station-x-six",
    },
    {
      id: 23,
      name: "BLE Relay Controller",
      description: "Mini Doer Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/alarm-schedular-using-ble.webp",
      category: "Controllers",
      technology: "BLE",
      subCategory: "Relay Controllers",
      learnMore: ROUTES.HOME,
    },
    {
      id: 24,
      name: "RS485 to Cloud LTE Gateway",
      description: "MacConnect X1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/cellular-gateway.-gen-v-two.webp",
      category: "Gateways",
      technology: "Cellular",
      subCategory: "Cellular Gateways",
      learnMore: ROUTES.HOME,
    },
    {
      id: 25,
      name: "Single-Channel LoRaWAN Gateway",
      description: "IndiLoRa Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/wifi-gateway-with-lte.webp",
      category: "Gateways",
      technology: "LoRaWAN",
      subCategory: "Single-Channel Gateways",
      learnMore: "/docs/product/lorawan/gateways/indilora-single-channel-datasheet",
    },
    {
      id: 26,
      name: "Local Relay Controller",
      description: "AutoCore Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/autocore-automation-unit-one.webp",
      category: "Controllers",
      technology: "LoRaWAN",
      subCategory: "Relay Controllers",
      learnMore: ROUTES.HOME,
    },
    {
      id: 27,
      name: "LoRaWAN Vibration Sensor",
      description: "VibeIQ Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/vibeiq-lorawan-viberation-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Vibration Sensors",
      learnMore: "/docs/product/lorawan/sensors/vibration/macsync-lt-one-datasheet",
    },
    {
      id: 28,
      name: "Fire System Controller",
      description: "FireGuard Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/wifi-gateway-gen-two.webp",
      category: "Controllers",
      technology: "LoRaWAN",
      subCategory: "Fire System Controllers",
      learnMore: "/docs/product/lorawan/gateways/fire-guard-single-channel-lora-gateway-for-firedatasheet",
    },
    {
      id: 29,
      name: "UWB RTLS Tag",
      description: "MacTag-4",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/uwb-tag-three-macnman.webp",
      category: "Sensors",
      technology: "BLE",
      subCategory: "Trackers",
      learnMore: ROUTES.HOME,
    },
    {
      id: 30,
      name: "Industrial UWB RTLS Tag",
      description: "MacTag-3",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/uwb-tag-mactag-four.webp",
      category: "Sensors",
      technology: "BLE",
      subCategory: "Trackers",
      learnMore: ROUTES.HOME,
    },
    {
      id: 31,
      name: "RS232 to LoRaWAN Converter",
      description: "MacConnect-LX2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/rstwo-to-wifi-converter.webp",
      category: "Modules",
      technology: "LoRaWAN",
      subCategory: "Converters",
      learnMore: ROUTES.HOME,
    },
    {
      id: 32,
      name: "LoRaWAN Current Measurement Sensor.",
      description: "AmpSense LCTX3",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/current-transformer-unit-xone.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Current Sensors",
      learnMore: ROUTES.HOME,
    },
    {
      id: 33,
      name: "LoRaWAN Indoor Air Quality Sensor",
      description: "AirSense Gen-2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/indoor-lorawan-aqi-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Air Quality Sensors",
      learnMore: ROUTES.HOME,
    },
    {
      id: 34,
      name: "LoRaWAN Ultrasonic Sensor",
      description: "MegaTough LX7",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/long-range-lorawan-ultrasoni-sensor-megtough-x-two.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Ultrasonic Sensors",
      learnMore: ROUTES.HOME,
    },
    {
      id: 35,
      name: "Washroom Odor Sensor",
      description: "AirSense WX5 Gen-1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-aqi-sensor-washroom-htos.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Air Quality Sensors",
      learnMore: ROUTES.HOME,
    },
    {
      id: 46,
      name: "Retrofit Gas Sensor Module",
      description: "LoRaWAN Gas Module X2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-gas-sensor-retrofit-module.webp",
      category: "Modules",
      technology: "LoRaWAN",
      subCategory: "Communication Modules",
      learnMore: ROUTES.HOME,
    },
    {
      id: 36,
      name: "LoRaWAN Rainfall Sensor",
      description: "MacSync-LRX1",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-rain-meter-macnman.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Weather Stations",
      learnMore: "/docs/product/lorawan/sensors/weather-stations/macsync-l-optical-rainfall-sensor",
    },
    {
      id: 38,
      name: "Sigle Channel LoRa Gateway",
      description: "Setu SCX",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-single-channel-gateway-setu-sd.webp",
      category: "Gateways",
      technology: "LoRaWAN",
      subCategory: "Single-Channel Gateways",
      learnMore: "/docs/product/lorawan/gateways/setu-scx-single-channel-datasheet",
    },
    {
      id: 39,
      name: "LoRaWAN Soil Ph Sensor",
      description: "MacSync-LSX2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/lorawan-soil-ph-sensor-macnman.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Soil Sensors",
      learnMore: "/docs/product/lorawan/sensors/soil-sensors/macsync-l-soil-ph-sensor-datasheet",
    },
    {
      id: 40,
      name: "Ble Temperture & Humidity Sensor",
      description: "Ble Tag3",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-ble-temperature-humidity-sensor-tag.webp",
      category: "Sensors",
      technology: "BLE",
      subCategory: "Temperature & Humidity",
      learnMore: "/docs/product/ble/sensors/ble-tag-one",
    },
    {
      id: 41,
      name: "Ble Door Open/Close Sensor",
      description: "Ble DoorTag X2",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-door-open-close-sensor.webp",
      category: "Sensors",
      technology: "BLE",
      subCategory: "Security Sensors",
      learnMore: ROUTES.HOME,
    },
    {
      id: 43,
      name: "Soil Temperature & Moisture Sensor",
      description: "MacSync-LSX3",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: [],
      image: "/docs/img/devices/macnman-lorawan-soil-sensor-temp-humidity-sensor.webp",
      category: "Sensors",
      technology: "LoRaWAN",
      subCategory: "Soil Sensors",
      learnMore: "/docs/product/lorawan/sensors/soil-sensors/macsync-l-soil-moisture-sensor-datasheet",
    },
    {
      id: 45,
      name: "Industrial UWB Tag",
      description: "UWB MacTag3",
      summary: "Experience long-range, low-power connectivity with secure & reliable data transmission",
      tags: ["New"],
      image: "/docs/img/devices/uwb-tag-mactag-four.webp",
      category: "Sensors",
      technology: "BLE",
      subCategory: "Trackers",
      learnMore: ROUTES.HOME,
    },
  ],
};

const categories = ["Cellular", "LoRaWAN", "WiFi", "Ble", "Modules", "Other", "All"];
const techOptions = ["Sensors", "Controllers", "Gateways", "Converters", "Modules", "All"];

const getCategoryIcon = (category: string, isActive: boolean) => {
  const size = 20;
  const className = isActive ? "text-[#DA2744]" : "text-[#9E9E9E]";
  switch (category) {
    case "Cellular":
      return <FiSmartphone size={size} className={className} />;
    case "LoRaWAN":
      return <FiHome size={size} className={className} />;
    case "WiFi":
      return <FiWifi size={size} className={className} />;
    case "Ble":
      return <FiBluetooth size={size} className={className} />;
    case "Modules":
      return <FiPackage size={size} className={className} />;
    case "Other":
      return <FiSettings size={size} className={className} />;
    default:
      return <FiGrid size={size} className={className} />;
  }
};

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Cellular");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [activeSub, setActiveSub] = useState<string>("All");
  const [techSliderStyle, setTechSliderStyle] = useState({ left: 0, width: 0 });
  const [techTransitionEnabled, setTechTransitionEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const techFilterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const subScrollRef = useRef<HTMLDivElement>(null);

  const scrollSub = (direction: "left" | "right") => {
    if (subScrollRef.current) {
      subScrollRef.current.scrollBy({
        left: direction === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrevTab = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex > 0) {
      setActiveCategory(categories[currentIndex - 1]);
    }
  };

  const handleNextTab = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex < categories.length - 1) {
      setActiveCategory(categories[currentIndex + 1]);
    }
  };



  // Dynamic subcategories filter options based on active category, active tech
  const getSubOptions = () => {
    const matchedProducts = data.products.filter((p) => {
      const catMatch =
        activeCategory === "All" ||
        (activeCategory === "Cellular" && p.technology === "Cellular") ||
        (activeCategory === "LoRaWAN" && p.technology === "LoRaWAN") ||
        (activeCategory === "WiFi" && p.technology === "Wi-Fi") ||
        (activeCategory === "Ble" && p.technology === "BLE") ||
        (activeCategory === "Modules" && p.category === "Modules") ||
        (activeCategory === "Other" &&
          (p.technology !== "Cellular" &&
            p.technology !== "LoRaWAN" &&
            p.technology !== "Wi-Fi" &&
            p.technology !== "BLE" &&
            p.category !== "Modules"));

      const techMatch =
        activeTech === "All" ||
        (activeTech === "Sensors" && p.category === "Sensors") ||
        (activeTech === "Controllers" && p.category === "Controllers") ||
        (activeTech === "Gateways" && p.category === "Gateways") ||
        (activeTech === "Converters" && p.subCategory === "Converters") ||
        (activeTech === "Modules" && p.category === "Modules");

      return catMatch && techMatch;
    });

    const subs = new Set<string>();
    matchedProducts.forEach((p) => {
      if (p.subCategory) {
        subs.add(p.subCategory);
      }
    });

    return ["All", ...Array.from(subs)];
  };

  const subOptions = getSubOptions();

  // Reset dependent subcategory filter when category or tech changes
  useEffect(() => {
    const availableSubs = getSubOptions();
    if (!availableSubs.includes(activeSub)) {
      setActiveSub("All");
    }
  }, [activeCategory, activeTech]);

  // Compute tech slider position whenever activeTech, techOptions, or mounted changes
  useEffect(() => {
    const idx = techOptions.indexOf(activeTech);
    if (idx === -1) return;
    const btn = techFilterRefs.current[idx];
    if (!btn) return;
    const parent = btn.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setTechSliderStyle({
      left: btnRect.left - parentRect.left,
      width: btnRect.width,
    });
    setTechTransitionEnabled(true);
  }, [activeTech, techOptions, mounted]);

  const filteredProducts = data.products.filter((p) => {
    const catMatch =
      activeCategory === "All" ||
      (activeCategory === "Cellular" && p.technology === "Cellular") ||
      (activeCategory === "LoRaWAN" && p.technology === "LoRaWAN") ||
      (activeCategory === "WiFi" && p.technology === "Wi-Fi") ||
      (activeCategory === "Ble" && p.technology === "BLE") ||
      (activeCategory === "Modules" && p.category === "Modules") ||
      (activeCategory === "Other" &&
        (p.technology !== "Cellular" &&
          p.technology !== "LoRaWAN" &&
          p.technology !== "Wi-Fi" &&
          p.technology !== "BLE" &&
          p.category !== "Modules"));

    const techMatch =
      activeTech === "All" ||
      (activeTech === "Sensors" && p.category === "Sensors") ||
      (activeTech === "Controllers" && p.category === "Controllers") ||
      (activeTech === "Gateways" && p.category === "Gateways") ||
      (activeTech === "Converters" && p.subCategory === "Converters") ||
      (activeTech === "Modules" && p.category === "Modules");

    const subMatch = activeSub === "All" || p.subCategory === activeSub;
    return catMatch && techMatch && subMatch;
  });

  return (
    <section className="product-page-container bg-white min-h-screen">
      {/* Hero Header Area */}
      <div className="pt-[40px] flex flex-col items-center">
        {/* Main Title */}
        <h1
          className="text-center font-semibold text-[#1E1E1E] px-4"
          style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize: "36px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Find the Right Macnman Product for Your IoT Application
        </h1>

        {/* 3. Bottom Support & Ecosystem Pills */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4 mb-6 max-w-6xl mx-auto px-4">
          {/* Pill 1: Call Expert */}
          <a
            href="tel:+917972856163"
            aria-label="Call our IoT expert at +91 79728 56163 for assistance selecting products"
            className="group support-pill relative overflow-hidden bg-white flex items-center gap-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] px-5 rounded-full hover:border-[#DA2744] w-full md:w-auto"
          >
            {/* Curved fill background overlay */}
            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-8 h-8 bg-[#DA2744] rounded-full transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-[18] z-0 pointer-events-none" />
            <div className="relative z-10 w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/docs/img/HeroSection/circle-girl.svg"
                alt="IoT Expert"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative z-10 text-left leading-tight -gap-3 ">
              <p className="text-xs -mt-11 pt-14 text-gray-500 mb-1 font-medium group-hover:text-white/80 transition-colors duration-1000 ease-in-out">
                Need Help Selecting Product?
              </p>
              <p className="text-sm mb-3 text-[#DA2744] font-bold group-hover:text-white transition-colors duration-1000 ease-in-out">
                Call IoT Expert
              </p>
            </div>
          </a>

          {/* Pill 2: Explore Ecosystem */}
          <Link
            href="/"
            aria-label="Explore the complete lineup of Macnman IoT products"
            className="group support-pill relative overflow-hidden bg-white flex items-center gap-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] px-5 -py-1 rounded-full hover:border-[#DA2744] w-full md:w-auto"
          >
            {/* Curved fill background overlay */}
            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-8 h-8 bg-[#DA2744] rounded-full transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-[18] z-0 pointer-events-none" />
            <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
              <FiShoppingBag className="w-5 h-5" />
            </div>
            <div className="relative z-10 text-left leading-tight -gap-3 ">
              <p className="text-xs -mt-11 pt-14 text-gray-500 mb-1 font-medium group-hover:text-white/80 transition-colors duration-1000 ease-in-out">
                Discover Complete Lineup
              </p>
              <p className="text-sm mb-3 text-[#DA2744] font-bold group-hover:text-white transition-colors duration-1000 ease-in-out">
                Explore Ecosystem
              </p>
            </div>
          </Link>

          {/* Pill 3: Connect Support */}
          <a
            href="tel:+917972856163"
            aria-label="Contact Macnman support at +91 79728 56163"
            className="group support-pill relative overflow-hidden bg-white flex items-center gap-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] px-5 -py-1 rounded-full hover:border-[#DA2744] w-full md:w-auto"
          >
            {/* Curved fill background overlay */}
            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-8 h-8 bg-[#DA2744] rounded-full transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-[18] z-0 pointer-events-none" />
            <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
              <FiHeadphones className="w-5 h-5" />
            </div>
            <div className="relative z-10 text-left leading-tight -gap-3">
              <p className="text-xs -mt-11 pt-14 text-gray-500 mb-1 font-medium group-hover:text-white/80 transition-colors duration-1000 ease-in-out">
                Looking for Support ?
              </p>
              <p className="text-sm mb-3 text-[#DA2744] font-bold group-hover:text-white transition-colors duration-1000 ease-in-out">
                Connect with Macnman
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Categories Tabs Filter with Left and Right circular arrow navigation */}
      <div className="relative max-w-[854px] mx-auto w-full px-4 mb-8 mt-10">
        {/* Row for arrows and tab text vertically centered */}
        <div className="flex justify-between items-center max-w-[854px] mx-auto pb-4">
          {/* Left Arrow Button */}
          {/* <button
            onClick={handlePrevTab}
            type="button"
            className="hover:opacity-80 transition flex-shrink-0 w-[30px] h-[30px] rounded-full bg-gray-200/80 flex items-center justify-center mr-2"
            aria-label="Previous filter tab"
          >
            <FiChevronLeft className="w-[18px] h-[18px] text-white" />
          </button> */}

          {/* Tabs row */}
          <div className="flex gap-[30px] items-center justify-center relative flex-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                  }}
                  type="button"
                  className="flex flex-col items-center gap-2 transition-all duration-200"
                >
                  <div
                    className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                        ? "border border-[#DA2744] bg-white shadow-[0_2px_8px_rgba(218,39,68,0.1)]"
                        : "border border-transparent bg-transparent"
                      }`}
                  >
                    {getCategoryIcon(cat, isActive)}
                  </div>
                  <span
                    className="text-xs md:text-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-roboto), Roboto, sans-serif",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#DA2744" : "#9E9E9E",
                    }}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          {/* <button
            onClick={handleNextTab}
            type="button"
            className="hover:opacity-80 transition flex-shrink-0 w-[30px] h-[30px] rounded-full bg-gray-200/80 flex items-center justify-center ml-2"
            aria-label="Next filter tab"
          >
            <FiChevronRight className="w-[18px] h-[18px] text-white" />
          </button> */}
        </div>

        {/* Bottom horizontal border line stacked exactly under active red line */}
        {/* <div className="absolute bottom-[1px] left-[52px] right-[52px] h-[1px] bg-[#E3E3E3]" /> */}
      </div>

      {/* Technology sliding capsule filter */}
      {techOptions.length > 1 && (
        <div className="flex flex-wrap justify-center gap-6 mb-10 px-4">
          {techOptions.map((tech) => {
            const isActive = activeTech === tech;
            return (
              <button
                key={tech}
                onClick={() => {
                  setActiveTech(tech);
                }}
                type="button"
                className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase transition-colors ${isActive
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      )}

      {/* Subcategory Pills Filter (dynamic tertiary filter options) */}
      {subOptions.length > 1 && (
        <div className="flex items-center justify-between gap-4 mb-10 max-w-[1054px] mx-auto px-4">
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollSub("left")}
            type="button"
            className="p-2 mr-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center flex-shrink-0"
            aria-label="Previous subcategory"
          >
            <FiChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          {/* Subcategories list */}
          <div
            ref={subScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-1.5 scroll-smooth items-center flex-1 justify-start"
          >
            {subOptions.map((sub) => {
              const isActive = activeSub === sub;
              return (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSub(sub);
                  }}
                  type="button"
                  className={`text-xs font-bold pb-1 whitespace-nowrap flex-shrink-0 transition-all border-b-2 ${isActive
                      ? "text-[#DA2744] border-[#DA2744]"
                      : "text-gray-400 hover:text-gray-900 border-transparent"
                    }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollSub("right")}
            type="button"
            className="p-2 ml-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center flex-shrink-0"
            aria-label="Next subcategory"
          >
            <FiChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      )}


      {/* Product Cards Responsive Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
            {filteredProducts.map((p) => {
              const displayCategory = p.category ? p.category.slice(0, -1).toUpperCase() : "SENSOR";
              return (
                <div key={p.id} className="relative">
                  <Link
                    href={p.learnMore || "#"}
                    className="group bg-white border border-gray-200/80 pt-3 px-4 pb-4 flex flex-col cursor-pointer block relative"
                    style={{
                      width: "231.62939453125px",
                      minHeight: "299.95013427734375px",
                      borderRadius: "16px",
                      borderWidth: "0.3px",
                    }}
                    aria-label={`Explore product ${p.name}`}
                  >
                    {/* Tag Badge */}
                    {/* {p.tags && p.tags.length > 0 && (
                      <div className="absolute top-3 left-4 z-10">
                        <span className="text-[8px] bg-[#DA2744] text-white font-bold tracking-wide px-2 py-0.5 rounded-full uppercase">
                          {p.tags[0]}
                        </span>
                      </div>
                    )} */}

                    {/* Product Image Container */}
                    <div
                      className="relative rounded-2xl p-2 flex items-center justify-center mb-2.5 mx-auto pointer-events-none"
                      style={{
                        width: "145px",
                        height: "165px",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col flex-1 pointer-events-none">
                      <span className="text-[#DA2845] text-[10px] font-bold tracking-wider uppercase">
                        {displayCategory}
                      </span>
                      <h4
                        className="text-base font-bold mt-1 line-clamp-1"
                        style={{
                          color: "#303031",
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        }}
                      >
                        {p.name}
                      </h4>
                      <p
                        className="mt-1.5"
                        style={{
                          width: "191.7px",
                          height: "42px",
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "100%",
                          color: "#303031",
                        }}
                      >
                        {p.summary}
                      </p>

                      {/* Explore Capsule Button */}
                      <div className="flex justify-end mt-auto pt-4">
                        <span className="inline-flex items-center text-[10px] font-bold text-gray-700 bg-gray-100 group-hover:bg-gray-200 transition px-3.5 py-1 rounded-full">
                          Explore <span className="ml-1 text-[8px]">&gt;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-medium">
              No products match the selected criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
