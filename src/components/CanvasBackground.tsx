/**
 * Canvas Background Renderer
 * 混合方案：Canvas 2D 背景光效 + 浮尘粒子（波光粼粼效果）
 */

import { useEffect, useRef, useCallback } from 'react';

// ==================== 类型定义 ====================

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  phase: number;
  speed: number;
}

interface Beam {
  x: number;
  width: number;
  opacity: number;
  phase: number;
  wavePhase: number;
}

// ==================== 工具函数 ====================

const random = (min: number, max: number) => Math.random() * (max - min) + min;

// ==================== 浮尘粒子系统（波光粼粼效果）====================

class DustParticleSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: DustParticle[] = [];
  private animationId: number = 0;
  private isRunning = true;
  private time = 0;
  private isMobile = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context');
    this.ctx = ctx;
    this.initParticles();
  }

  private initParticles() {
    const { width, height } = this.canvas;
    this.isMobile = width < 768;
    const count = this.isMobile ? 40 : 80;

    this.particles = Array.from({ length: count }, () => this.createParticle());
  }

  private createParticle(): DustParticle {
    const { width, height } = this.canvas;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: random(-0.2, 0.2),
      vy: random(-0.15, 0.1), // 稍微向上漂浮
      size: random(1, 2.5),
      baseOpacity: random(0.3, 0.7),
      opacity: 0,
      phase: random(0, Math.PI * 2),
      speed: random(0.5, 1.5)
    };
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.initParticles();
  }

  private animate = () => {
    if (!this.isRunning) return;

    this.time += 0.016;
    this.update();
    this.render();

    this.animationId = requestAnimationFrame(this.animate);
  };

  private update() {
    const { width, height } = this.canvas;

    for (const p of this.particles) {
      // 波光粼粼效果 - 透明度随时间波动
      const twinkle = Math.sin(this.time * p.speed * 2 + p.phase);
      p.opacity = p.baseOpacity * (0.5 + 0.5 * twinkle);

      // 移动粒子（类似水面波光的缓慢漂浮）
      p.x += p.vx + Math.sin(this.time * 0.5 + p.phase) * 0.3;
      p.y += p.vy + Math.cos(this.time * 0.3 + p.phase) * 0.2;

      // 边界处理 - 循环
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    }
  }

  private render() {
    const { ctx, canvas } = this;
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    for (const p of this.particles) {
      if (p.opacity <= 0.05) continue;

      // 绘制发光粒子核心
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      // 波光粼粼的金色光点
      const r = Math.floor(255);
      const g = Math.floor(245 + p.opacity * 10);
      const b = Math.floor(200 - p.opacity * 50);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.8})`;
      ctx.fill();

      // 外层光晕（模拟水面反光）
      const glowSize = p.size * (2 + Math.sin(this.time * 2 + p.phase) * 0.5);
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
      gradient.addColorStop(0, `rgba(255, 250, 220, ${p.opacity * 0.4})`);
      gradient.addColorStop(0.5, `rgba(255, 240, 200, ${p.opacity * 0.15})`);
      gradient.addColorStop(1, 'rgba(255, 235, 180, 0)');

      ctx.beginPath();
      ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }

  destroy() {
    this.stop();
    this.particles = [];
  }
}

// ==================== Canvas 2D 背景渲染器（Tyndall 光束）====================

class BackgroundRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private beams: Beam[] = [];
  private animationId: number = 0;
  private isRunning = true;
  private time = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2D context');
    this.ctx = ctx;
    this.initBeams();
  }

  private initBeams() {
    // Tyndall 光束已禁用
    this.beams = [];
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  private animate = () => {
    if (!this.isRunning) return;

    this.time += 0.016;
    this.render();
    this.animationId = requestAnimationFrame(this.animate);
  };

  private render() {
    const { ctx, canvas } = this;
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    // 绘制 Tyndall 光束
    for (const beam of this.beams) {
      this.drawTyndallBeam(beam, width, height);
    }

    // 顶部折射光（已禁用）
    // this.drawRefractiveLight(width, height);
  }

  private drawTyndallBeam(beam: Beam, width: number, height: number) {
    const { ctx } = this;

    // 柔和的波动效果
    const wave1 = Math.sin(this.time * 0.2 + beam.wavePhase) * 0.02;
    const wave2 = Math.sin(this.time * 0.4 + beam.wavePhase * 2) * 0.015;
    const sway = wave1 + wave2;

    // 若隐若现的呼吸效果
    const breath = 0.6 + 0.4 * Math.sin(this.time * 0.15 + beam.phase * 0.1);
    const pulseOpacity = beam.opacity * breath;

    // 柔和波动宽度
    const waveWidth = beam.width * (1 + Math.sin(this.time * 0.3 + beam.wavePhase) * 0.08);

    const centerX = (beam.x + sway) * width;
    const beamWidth = waveWidth * width;
    const beamHeight = height * 2;

    ctx.save();

    // 使用柔和混合模式
    ctx.globalCompositeOperation = 'screen';

    ctx.translate(centerX, -height * 0.1);
    ctx.rotate(-0.6 + sway * 0.3);

    // 绘制多层柔和光晕（从外到内）
    // 外层大光晕
    const outerGradient = ctx.createRadialGradient(0, beamHeight * 0.3, 0, 0, beamHeight * 0.3, beamWidth * 0.8);
    outerGradient.addColorStop(0, `rgba(255, 250, 220, ${pulseOpacity * 0.3})`);
    outerGradient.addColorStop(0.5, `rgba(255, 245, 200, ${pulseOpacity * 0.15})`);
    outerGradient.addColorStop(1, 'rgba(255, 245, 200, 0)');

    ctx.beginPath();
    ctx.ellipse(0, beamHeight * 0.3, beamWidth * 0.8, beamHeight * 0.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = outerGradient;
    ctx.fill();

    // 中层光晕
    const midGradient = ctx.createRadialGradient(0, beamHeight * 0.25, 0, 0, beamHeight * 0.25, beamWidth * 0.5);
    midGradient.addColorStop(0, `rgba(255, 252, 230, ${pulseOpacity * 0.5})`);
    midGradient.addColorStop(0.6, `rgba(255, 250, 220, ${pulseOpacity * 0.25})`);
    midGradient.addColorStop(1, 'rgba(255, 248, 210, 0)');

    ctx.beginPath();
    ctx.ellipse(0, beamHeight * 0.25, beamWidth * 0.5, beamHeight * 0.35, 0, 0, Math.PI * 2);
    ctx.fillStyle = midGradient;
    ctx.fill();

    // 内层核心光线 - 非常柔和
    const innerGradient = ctx.createLinearGradient(0, 0, 0, beamHeight * 0.5);
    const coreOpacity = pulseOpacity * 0.4;
    innerGradient.addColorStop(0, `rgba(255, 255, 245, ${coreOpacity})`);
    innerGradient.addColorStop(0.3, `rgba(255, 253, 235, ${coreOpacity * 0.6})`);
    innerGradient.addColorStop(0.7, `rgba(255, 250, 220, ${coreOpacity * 0.2})`);
    innerGradient.addColorStop(1, 'rgba(255, 248, 210, 0)');

    ctx.beginPath();
    ctx.moveTo(-beamWidth * 0.08, 0);
    ctx.quadraticCurveTo(-beamWidth * 0.05, beamHeight * 0.25, 0, beamHeight * 0.5);
    ctx.quadraticCurveTo(beamWidth * 0.05, beamHeight * 0.25, beamWidth * 0.08, 0);
    ctx.closePath();
    ctx.fillStyle = innerGradient;
    ctx.fill();

    // 添加高斯模糊效果（通过绘制多层透明度递增的形状）
    ctx.filter = 'blur(30px)';
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.ellipse(0, beamHeight * 0.35, beamWidth * 0.6, beamHeight * 0.4, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 250, 220, ${pulseOpacity * 0.3})`;
    ctx.fill();
    ctx.filter = 'none';
    ctx.globalAlpha = 1;

    ctx.restore();
  }

  private drawRefractiveLight(width: number, height: number) {
    const { ctx } = this;

    // 使用柔和混合模式
    ctx.globalCompositeOperation = 'screen';

    const gradient = ctx.createRadialGradient(
      width / 2, 0, 0,
      width / 2, 0, height * 0.5
    );

    // 若隐若现的效果
    const opacity = 0.15 + 0.1 * Math.sin(this.time * 0.2);
    gradient.addColorStop(0, `rgba(255, 255, 245, ${opacity})`);
    gradient.addColorStop(0.3, `rgba(255, 250, 235, ${opacity * 0.6})`);
    gradient.addColorStop(0.7, `rgba(255, 245, 210, ${opacity * 0.2})`);
    gradient.addColorStop(1, 'rgba(255, 240, 200, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height * 0.35);

    // 顶部柔和高光
    const topGradient = ctx.createLinearGradient(0, 0, 0, height * 0.15);
    topGradient.addColorStop(0, `rgba(255, 255, 250, ${opacity * 0.8})`);
    topGradient.addColorStop(1, 'rgba(255, 255, 245, 0)');

    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, width, height * 0.15);

    ctx.globalCompositeOperation = 'source-over';
  }

  destroy() {
    this.stop();
  }
}

// ==================== React 组件 ====================

interface CanvasBackgroundProps {
  className?: string;
}

export function CanvasBackground({ className = '' }: CanvasBackgroundProps) {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const dustCanvasRef = useRef<HTMLCanvasElement>(null);
  const bgRendererRef = useRef<BackgroundRenderer | null>(null);
  const dustParticleRef = useRef<DustParticleSystem | null>(null);

  const initCanvases = useCallback(() => {
    const bgCanvas = bgCanvasRef.current;
    const dustCanvas = dustCanvasRef.current;

    if (!bgCanvas || !dustCanvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // 设置背景 Canvas
    bgCanvas.width = width * dpr;
    bgCanvas.height = height * dpr;
    bgCanvas.style.width = `${width}px`;
    bgCanvas.style.height = `${height}px`;

    // 设置浮尘 Canvas
    dustCanvas.width = width * dpr;
    dustCanvas.height = height * dpr;
    dustCanvas.style.width = `${width}px`;
    dustCanvas.style.height = `${height}px`;

    // 初始化背景渲染器
    if (!bgRendererRef.current) {
      const ctx = bgCanvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        bgRendererRef.current = new BackgroundRenderer(bgCanvas);
      }
    }
    bgRendererRef.current?.resize(width * dpr, height * dpr);

    // 初始化浮尘粒子系统
    if (!dustParticleRef.current) {
      const ctx = dustCanvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        dustParticleRef.current = new DustParticleSystem(dustCanvas);
      }
    }
    dustParticleRef.current.resize(width * dpr, height * dpr);
  }, []);

  useEffect(() => {
    initCanvases();

    // 启动渲染
    bgRendererRef.current?.start();
    dustParticleRef.current?.start();

    // 处理 resize
    const handleResize = () => {
      initCanvases();
    };

    // 处理 visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        bgRendererRef.current?.stop();
        dustParticleRef.current?.stop();
      } else {
        bgRendererRef.current?.start();
        dustParticleRef.current?.start();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      bgRendererRef.current?.destroy();
      dustParticleRef.current?.destroy();
    };
  }, [initCanvases]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {/* 背景光效 Canvas - Tyndall 光束 */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      />
      {/* 浮尘粒子 Canvas - 波光粼粼效果 */}
      <canvas
        ref={dustCanvasRef}
        className="absolute inset-0"
        style={{ zIndex: 3 }}
      />
    </div>
  );
}

export default CanvasBackground;