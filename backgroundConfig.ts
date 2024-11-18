import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
  colors: [
    {
      color: "#232323",
      enabled: true,
    },
    {
      color: "#9E9E9E",
      enabled: true,
    },
    {
      color: "#3B3B3B",
      enabled: true,
    },
    {
      color: "#272727",
      enabled: true,
    },
    {
      color: "#C4DDC5",
      enabled: false,
    },
  ],
  speed: 2,
  horizontalPressure: 5,
  verticalPressure: 5,
  waveFrequencyX: 3,
  waveFrequencyY: 3,
  waveAmplitude: 4,
  shadows: 4,
  highlights: 6,
  colorBrightness: 1,
  colorSaturation: 5,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: "#3B7D1E",
  backgroundAlpha: 1,
  grainScale: 2,
  grainIntensity: 0.2,
  grainSpeed: 0.8,
  resolution: 1.2,
};

// define an element with id="gradient" in your html
const neat = new NeatGradient({
  ref: document.getElementById("gradient"),
  ...config,
});

// you can change the config at any time
neat.speed = 6;

// you can also destroy the gradient for cleanup
// e.g. returning from a useEffect hook in React
neat.destroy();
