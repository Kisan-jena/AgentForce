'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface DottedGlowBackgroundProps {
  className?: string;
  opacity?: number;
  gap?: number;
  radius?: number;
  colorLightVar?: string;
  glowColorLightVar?: string;
  colorDarkVar?: string;
  glowColorDarkVar?: string;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
}

export const DottedGlowBackground = ({
  className,
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorLightVar = '--color-neutral-500',
  glowColorLightVar = '--color-neutral-600',
  colorDarkVar = '--color-neutral-500',
  glowColorDarkVar = '--color-sky-800',
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}: DottedGlowBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(parent);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || dimensions.width === 0 || dimensions.height === 0)
      return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const isDark = theme === 'dark';

    // Resolve CSS variables to actual colors
    const getVar = (v: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(v) ||
      (isDark ? '#4b5563' : '#a1a1aa');

    const dotColor = getVar(isDark ? colorDarkVar : colorLightVar).trim();
    const glowColor = getVar(
      isDark ? glowColorDarkVar : glowColorLightVar
    ).trim();

    let animationFrameId: number;
    let time = 0;

    const columns = Math.ceil(dimensions.width / gap) + 1;
    const rows = Math.ceil(dimensions.height / gap) + 1;
    const dots = Array.from({ length: columns * rows }).map((_, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      return {
        x: col * gap,
        y: row * gap,
        baseX: col * gap,
        baseY: row * gap,
        speed: (Math.random() * (speedMax - speedMin) + speedMin) * speedScale,
        offset: Math.random() * Math.PI * 2,
        glowScale: Math.random(),
      };
    });

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundOpacity > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${backgroundOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalAlpha = opacity;

      dots.forEach((dot) => {
        // Movement
        const waveX = Math.sin(time * dot.speed + dot.offset) * (gap * 0.2);
        const waveY = Math.cos(time * dot.speed + dot.offset) * (gap * 0.2);

        const currentX = dot.baseX + waveX;
        const currentY = dot.baseY + waveY;

        // Glow pulse
        const glowWave = (Math.sin(time * dot.speed * 2 + dot.offset) + 1) / 2;

        // Draw glowing background for the dot
        ctx.beginPath();
        ctx.arc(
          currentX,
          currentY,
          radius * (1 + glowWave * 1.5),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = glowColor;
        ctx.globalAlpha = opacity * 0.5 * glowWave;
        ctx.fill();

        // Draw solid dot
        ctx.beginPath();
        ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = opacity * (0.5 + glowWave * 0.5);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    dimensions,
    opacity,
    gap,
    radius,
    colorLightVar,
    glowColorLightVar,
    colorDarkVar,
    glowColorDarkVar,
    backgroundOpacity,
    speedMin,
    speedMax,
    speedScale,
    theme,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none', className)}
      style={{ opacity, width: '100%', height: '100%' }}
    />
  );
};
