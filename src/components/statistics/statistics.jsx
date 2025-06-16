"use client";

import { useState, useRef, useEffect } from "react";
import SectionTitle from "@/components/shared/section-title";
import {
  Engine,
  World,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
} from "matter-js";
import { defaultStatsConfig } from "@/config/statistics";

export default function Statistics() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      html, body {
        overscroll-behavior: contain;
        height: 100%;
      }
      .stats-container * {
        scroll-behavior: smooth !important;
      }
      /* Ensure scrolling works on all container elements */
      .stats-container {
        touch-action: pan-y !important;
        overflow: auto !important;
        overscroll-behavior: contain;
      }
      /* Override any Matter.js canvas settings that might interfere */
      canvas {
        pointer-events: none !important;
        touch-action: pan-y !important;
        z-index: -1 !important;
        position: absolute !important;
      }
      /* Ensure labels are grabbable but don't block scrolling */
      .physics-label {
        cursor: grab !important;
        touch-action: manipulation !important;
        will-change: transform;
        user-select: none;
        -webkit-user-select: none;
      }
      /* Prevent scroll lock when interacting */
      * {
        overscroll-behavior: auto;
      }
    `;
    document.head.appendChild(style);
    const preventScrollFreeze = (e) => {
      e.stopPropagation();
      return true;
    };

    document.addEventListener("wheel", preventScrollFreeze, { passive: true });
    document.addEventListener("touchmove", preventScrollFreeze, {
      passive: true,
    });

    return () => {
      document.head.removeChild(style);
      document.removeEventListener("wheel", preventScrollFreeze);
      document.removeEventListener("touchmove", preventScrollFreeze);
    };
  }, []);
  const stats = defaultStatsConfig;

  const [isMounted, setIsMounted] = useState(false);
  const [labelPositions, setLabelPositions] = useState(
    stats.map(() => ({ x: 15, y: 15, angle: 0 }))
  );
  const cardsRef = useRef(stats.map(() => useRef(null)));
  const labelsRef = useRef(stats.map(() => useRef(null)));

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!cardsRef.current || !labelsRef.current) return;

    let engines = [];
    let runners = [];
    let labelBodies = [];
    let mouseConstraints = [];
    let animationId = null;

    const initPhysics = () => {
      const cardsReady = cardsRef.current.every((ref) => ref?.current);
      if (!cardsReady) {
        setTimeout(initPhysics, 100);
        return;
      }

      cleanup();

      stats.forEach((stat, index) => {
        const card = cardsRef.current[index]?.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const engine = Engine.create();
        engine.world.gravity.y = 0.8;
        engines.push(engine);
        const { width: labelW, height: labelH } = getResponsiveLabelSize();

        const labelBody = Bodies.rectangle(
          width * 0.3 + Math.random() * width * 0.4,
          30 + Math.random() * 50,
          labelW,
          labelH,
          {
            restitution: 0.4,
            friction: 0.1,
            frictionAir: 0.01,
            angle: (stat.rotation * Math.PI) / 180,
          }
        );
        labelBodies.push(labelBody);

        const wallThickness = 20;
        const getGroundOffset = () => {
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;

          // Special case for 640-767 width at 614px height
          if (
            screenWidth >= 640 &&
            screenWidth < 768 &&
            screenHeight >= 600 &&
            screenHeight <= 630
          ) {
            return 120;
          }

          if (screenWidth < 400) return 80;
          if (screenWidth < 500) return 85;
          if (screenWidth < 640) return 90;
          if (screenWidth < 768) return 110;
          return 110;
        };

        const ground = Bodies.rectangle(
          width / 2,
          height - getGroundOffset(),
          width - 10,
          wallThickness,
          { isStatic: true }
        );

        const leftWall = Bodies.rectangle(
          0,
          height / 2,
          wallThickness,
          height,
          { isStatic: true }
        );

        const rightWall = Bodies.rectangle(
          width,
          height / 2,
          wallThickness,
          height,
          { isStatic: true }
        );

        const ceiling = Bodies.rectangle(width / 2, 0, width, wallThickness, {
          isStatic: true,
        });

        World.add(engine.world, [
          labelBody,
          ground,
          leftWall,
          rightWall,
          ceiling,
        ]);
        const mouse = Mouse.create(card);

        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        const mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false },
          },
        });

        World.add(engine.world, mouseConstraint);
        mouseConstraints.push(mouseConstraint);

        mouse.mousewheel = function () {
          return false;
        };

        let isDragging = false;
        let dragStartTime = 0;
        let lastClickedBody = null;
        let mouseStartPos = { x: 0, y: 0 };
        let dragMoveThreshold = 50;
        const label = labelsRef.current[index]?.current;

        if (label && labelBodies[index]) {
          label.addEventListener(
            "mousedown",
            (event) => {
              if (event.pointerType === "touch") return;

              isDragging = true;
              dragStartTime = Date.now();
              lastClickedBody = labelBodies[index];
              mouseStartPos = { x: event.clientX, y: event.clientY };

              mouseConstraint.body = labelBodies[index];

              label.style.cursor = "grabbing";

              event.preventDefault();
            },
            { passive: false }
          );

          const handleMouseMove = (event) => {
            if (!isDragging || !lastClickedBody) return;

            const dx = Math.abs(event.clientX - mouseStartPos.x);
            const dy = Math.abs(event.clientY - mouseStartPos.y);

            if (dx > dragMoveThreshold || dy > dragMoveThreshold) {
              mouse.position.x = event.clientX;
              mouse.position.y = event.clientY;

              event.preventDefault();
            }
          };

          const handleMouseUp = () => {
            if (isDragging && lastClickedBody) {
              isDragging = false;
              lastClickedBody = null;
              mouseConstraint.body = null;

              if (label) {
                label.style.cursor = "grab";
              }
            }
          };

          document.addEventListener("mousemove", handleMouseMove, {
            passive: false,
          });
          document.addEventListener("mouseup", handleMouseUp, {
            passive: true,
          });

          const cleanupListeners = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          };
          runners.push({ cleanup: cleanupListeners });
        }

        mouseConstraint.collisionFilter.mask = 0x0001;

        card.addEventListener(
          "wheel",
          (e) => {
            return true;
          },
          { passive: true }
        );

        const touchStartHandler = (e) => {
          const label = labelsRef.current[index]?.current;
          if (label) {
            label.style.pointerEvents = "auto";
          }
        };

        const touchMoveHandler = (e) => {
          return true;
        };

        const touchEndHandler = (e) => {
          setTimeout(() => {
            const label = labelsRef.current[index]?.current;
            if (label) {
              label.style.pointerEvents = "auto";
            }
          }, 50);
        };

        card.addEventListener("touchstart", touchStartHandler, {
          passive: true,
        });
        card.addEventListener("touchmove", touchMoveHandler, { passive: true });
        card.addEventListener("touchend", touchEndHandler, { passive: true });

        runners.push({
          cleanup: () => {
            card.removeEventListener("touchstart", touchStartHandler);
            card.removeEventListener("touchmove", touchMoveHandler);
            card.removeEventListener("touchend", touchEndHandler);
          },
        });

        const runner = Runner.create();
        Runner.run(runner, engine);
        runners.push(runner);
      });

      const animate = () => {
        if (labelBodies.length > 0) {
          labelBodies.forEach((body, index) => {
            const labelEl = labelsRef.current[index]?.current;
            if (labelEl) {
              const { width, height } = getResponsiveLabelSize();
              const x = body.position.x - width / 2;
              const y = body.position.y - height / 2;

              labelEl.style.left = `${x}px`;
              labelEl.style.top = `${y}px`;
              labelEl.style.transform = `rotate(${body.angle}rad)`;
            }
          });
        }
        animationId = requestAnimationFrame(animate);
      };
      animate();
    };
    const cleanup = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }

      runners.forEach((runner) => {
        if (runner.cleanup && typeof runner.cleanup === "function") {
          runner.cleanup();
        } else {
          Runner.stop(runner);
        }
      });

      engines.forEach((engine) => {
        World.clear(engine.world);
        Engine.clear(engine);
      });

      engines = [];
      runners = [];
      labelBodies = [];
      mouseConstraints = [];
    };
    setTimeout(initPhysics, 100);

    const handleWheel = (e) => {
      e.stopPropagation();
      return true;
    };

    document.addEventListener("wheel", handleWheel, {
      passive: true,
      capture: true,
    });

    return () => {
      cleanup();
      document.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, [stats]);  const getResponsiveLabelSize = () => {
    if (!isMounted) {
      // Default size for SSR and initial render
      return { width: 145, height: 40 };
    }
    
    const width = window.innerWidth;
    if (width < 640) return { width: 145, height: 40 };
    if (width < 768) return { width: 145, height: 40 };
    return { width: 165, height: 45 };
  };  useEffect(() => {
    // Only run on client side after mounting
    if (!isMounted) return;
    
    const handleResize = () => {
      const { width, height } = getResponsiveLabelSize();
      const labelElements = labelsRef.current.map((ref) => ref.current);
      labelElements.forEach((label) => {
        if (label) {
          label.style.width = `${width}px`;
          label.style.height = `${height}px`;
        }
      });
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      if (
        (currentWidth < 640 && prevWidth >= 640) ||
        (currentWidth >= 640 && prevWidth < 640) ||
        (currentWidth < 768 && prevWidth >= 768) ||
        (currentWidth >= 768 && prevWidth < 768) ||
        (currentWidth >= 640 &&
          currentWidth < 768 &&
          Math.abs(currentHeight - prevHeight) > 20)
      ) {
        setTimeout(() => initPhysics && initPhysics(), 100);
      }

      prevWidth = currentWidth;
      prevHeight = currentHeight;
    };
    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;
    let initPhysics = null;

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);
  return (
    <>
      <SectionTitle title={"STATISTICS"} lineGradient="purple" />
      <div className="stats-container flex flex-col justify-center items-center w-full max-w-full overflow-hidden h-auto min-h-screen px-2 sm:px-4 md:px-6 mx-auto bg-[#BC82FE] relative py-12 sm:py-16 md:py-20 lg:-mt-25 ">
        <div className="w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row w-full max-w-[1541px] justify-center items-center gap-6 sm:gap-4 md:gap-5 lg:gap-20 mx-auto px-2 sm:px-4 flex-wrap">
            {stats.map((stat, index) => {
              return (
                <div
                  key={stat.id || index}
                  className={`w-full max-w-[280px] h-[260px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex-shrink-0 rounded-[20px] sm:rounded-[24px] border-2 border-black ${stat.bg} ${stat.hoverBg} transition-colors duration-300 ease-in-out relative mb-6 sm:mb-3 md:mb-0 group overflow-hidden`}                  style={{
                    height:
                      isMounted &&
                      window.innerWidth >= 640 && 
                      window.innerWidth < 768
                        ? "240px"
                        : undefined,
                    touchAction: "pan-y",
                  }}
                  ref={cardsRef.current[index]}
                >
                  {" "}
                  <div
                    ref={labelsRef.current[index]}
                    className="physics-label absolute cursor-grab active:cursor-grabbing inline-flex py-2 sm:py-3 px-4 sm:px-6 justify-center items-center gap-2 sm:gap-2.5 rounded-[40px] sm:rounded-[48px] border-2 border-black bg-white hover:bg-[#F3F3F3] hover:shadow-md select-none will-change-transform z-10"
                    style={{
                      position: "absolute",
                      left: `${labelPositions[index]?.x || 15}px`,
                      top: `${labelPositions[index]?.y || 15}px`,
                      transform: `rotate(${
                        labelPositions[index]?.angle || 0
                      }rad)`,
                      transformOrigin: "center center",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      userSelect: "none",
                      touchAction: "manipulation",
                      pointerEvents: "auto",
                      width: `${getResponsiveLabelSize().width}px`,
                      height: `${getResponsiveLabelSize().height}px`,

                      WebkitTouchCallout: "none",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {" "}
                    <p className="text-black font-[Bricolage_Grotesque] text-lg sm:text-xl md:text-2xl font-normal leading-normal tracking-[-0.48px] select-none">
                      {stat.label}
                    </p>
                  </div>{" "}
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-2 sm:pb-3 md:pb-4">
                    <p className="text-black font-sans text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold leading-none select-none">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
