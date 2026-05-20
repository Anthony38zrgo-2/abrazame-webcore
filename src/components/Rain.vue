<script setup lang="ts">
import { computed } from "vue";

interface Props {
  count?: number;
  symbols?: string[];
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 120,
  symbols: () => ["✝", "☩", "✞", "†", "☨"],
  minSize: 12,
  maxSize: 34,
  minDuration: 18,
  maxDuration: 45,
  minOpacity: 0.25,
  maxOpacity: 0.95,
});

const drops = computed(() => {
  return Array.from({ length: props.count }).map(() => {
    const symbol =
      props.symbols[Math.floor(Math.random() * props.symbols.length)];
    const left = Math.random() * 100;
    const duration =
      props.minDuration +
      Math.random() * (props.maxDuration - props.minDuration);

    // Negative delay between -20s and 0s to make the rain fully active on load
    const delay = -20 + Math.random() * 20;

    const size =
      props.minSize + Math.random() * (props.maxSize - props.minSize);
    const opacity =
      props.minOpacity + Math.random() * (props.maxOpacity - props.minOpacity);

    // Erratic Initial Rotation (0deg to 360deg)
    const initRot = `${Math.floor(Math.random() * 360)}deg`;

    // Psychological pendulum sway physics
    const swayAmount = `${Math.floor(15 + Math.random() * 31)}px`; // 15px to 45px
    const swayDuration = `${(3 + Math.random() * 5).toFixed(1)}s`; // Desynchronized from fall

    // Nightmare depth of field (20-25% of crosses blurry, blur 1.5px to 4.5px)
    const isBlurry = Math.random() < 0.22;
    const blurAmount = isBlurry
      ? `${(1.5 + Math.random() * 3).toFixed(1)}px`
      : "0px";

    const style: Record<string, string | number> = {
      left: `${left}%`,
      fontSize: `${size}px`,
      opacity: opacity,
      animationDelay: `${delay}s`,
      "--init-rot": initRot,
      "--sway-amount": swayAmount,
      "--sway-duration": swayDuration,
      "--fall-duration": `${duration}s`,
      "--blur-amount": blurAmount,
    };

    return {
      symbol,
      style,
    };
  });
});
</script>

<template>
  <div class="cross-rain">
    <span v-for="(drop, index) in drops" :key="index" :style="drop.style">
      {{ drop.symbol }}
    </span>
  </div>
</template>

<style scoped>
.cross-rain span {
  position: absolute;
  top: -10%;
  user-select: none;
  color: rgba(255, 110, 110, 0.82);

  /* Depth of field blur */
  filter: blur(var(--blur-amount, 0px));

  /* Glow expands dramatically if blurred */
  text-shadow:
    0 0 calc(8px + var(--blur-amount, 0px) * 2) rgba(255, 0, 0, 0.85),
    0 0 calc(16px + var(--blur-amount, 0px) * 3) rgba(255, 0, 0, 0.55),
    0 0 calc(24px + var(--blur-amount, 0px) * 4) rgba(255, 40, 40, 0.35);

  /* Concurrent animations: fall & rotate + horizontal sway */
  animation:
    crossRain var(--fall-duration) linear infinite,
    crossSway var(--sway-duration) ease-in-out infinite alternate;
}

@keyframes crossRain {
  0% {
    transform: translateY(-120px) rotate(var(--init-rot));
    opacity: 0;
  }
  10% {
    opacity: 0.82;
  }
  90% {
    opacity: 0.82;
  }
  100% {
    transform: translateY(120vh) rotate(calc(var(--init-rot) + 360deg));
    opacity: 0;
  }
}

@keyframes crossSway {
  0% {
    margin-left: calc(-1 * var(--sway-amount));
  }
  100% {
    margin-left: var(--sway-amount);
  }
}
</style>
