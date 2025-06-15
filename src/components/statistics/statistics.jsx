"use client";

import { useState, useRef, useEffect } from "react";
import SectionTitle from "@/components/shared/section-title";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  Body,
  Common,
} from "matter-js";
import { defaultStatsConfig } from "@/config/statistics";

export default function Statistics({ statsData }) {
  
  // Use provided stats data or fall back to defaults
  const stats = statsData || defaultStatsConfig;

  // Loading state for future API integration
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [labelPositions, setLabelPositions] = useState(
    stats.map(() => ({ x: 15, y: 15, angle: 0 }))
  );  const cardsRef = useRef(stats.map(() => useRef(null)));
  const labelsRef = useRef(stats.map(() => useRef(null)));

  const fetchRealTimeStats = async () => {
    try {
      setIsLoading(true);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to load statistics");
      setIsLoading(false);
    }  };

  useEffect(() => {
  }, []);

  // Setup Matter.js physics for labels
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

        // Get card dimensions
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;        // Create engine
        const engine = Engine.create();
        engine.world.gravity.y = 0.8;
        engines.push(engine);

        // Label dimensions (including padding and border)
        const labelW = 165; // 145 + padding + border
        const labelH = 45;  // 29 + padding + border

        // Create label body - start at random position in upper area
        const labelBody = Bodies.rectangle(
          width * 0.3 + Math.random() * width * 0.4, // Random X in middle area
          30 + Math.random() * 50, // Random Y in upper area
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

        // Create boundaries - simple walls
        const wallThickness = 20;
        const ground = Bodies.rectangle(
          width / 2,
          height - 110, // Floor above stat number area
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

        // Add all to world
        World.add(engine.world, [
          labelBody,
          ground,
          leftWall,
          rightWall,
          ceiling,
        ]);

        // Mouse constraint for dragging
        const mouse = Mouse.create(card);
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false },
          },
        });
        World.add(engine.world, mouseConstraint);
        mouseConstraints.push(mouseConstraint);

        // Run engine
        const runner = Runner.create();
        Runner.run(runner, engine);
        runners.push(runner);
      });

      // Animation loop
      const animate = () => {
        if (labelBodies.length > 0) {
          labelBodies.forEach((body, index) => {            const labelEl = labelsRef.current[index]?.current;
            if (labelEl) {
              // Simple positioning - center the element on the body
              const x = body.position.x - 82.5; // Half of label width (165/2)
              const y = body.position.y - 22.5; // Half of label height (45/2)

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
      runners.forEach((runner) => Runner.stop(runner));
      engines.forEach((engine) => {
        World.clear(engine.world);
        Engine.clear(engine);
      });
      engines = [];
      runners = [];
      labelBodies = [];
      mouseConstraints = [];
    };

    // Initialize physics
    setTimeout(initPhysics, 100);

    // Cleanup on unmount
    return cleanup;
  }, [stats]);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full overflow-hidden h-auto min-h-screen py-24 px-0 md:px-4 mx-auto bg-[#BC82FE] relative">
      {/* STATISTICS heading label - positioned on the line */}
      <SectionTitle title={"STATISTICS"} />

      <div className="w-full overflow-hidden mt-16 pt-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchRealTimeStats}
              className="mt-4 px-4 py-2 bg-white border border-black rounded-md hover:bg-gray-100"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row w-full max-w-[1541px] justify-center items-center gap-8 sm:gap-4 md:gap-5 lg:gap-20 mx-auto px-4">
            {stats.map((stat, index) => {
              return (
                <div
                  key={stat.id || index}
                  className={`w-[280px] h-[280px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex-shrink-0 rounded-[24px] border-2 border-black ${stat.bg} ${stat.hoverBg} transition-colors duration-300 ease-in-out relative mb-8 sm:mb-0 group overflow-hidden`}
                  ref={cardsRef.current[index]}
                >
                  {" "}
                  {/* Physics-based label with original rotation - now draggable with Matter.js */}
                  <div
                    ref={labelsRef.current[index]}
                    className="absolute cursor-grab active:cursor-grabbing inline-flex py-3 px-6 justify-center items-center gap-2.5 rounded-[48px] border-2 border-black bg-white hover:bg-[#F3F3F3] hover:shadow-md select-none will-change-transform z-10"
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
                      msUserSelect: "none",                      userSelect: "none",
                      width: "165px",
                      height: "45px",
                    }}
                  >
                    <p className="text-black font-[Bricolage_Grotesque] text-2xl font-normal leading-normal tracking-[-0.48px] select-none">
                      {stat.label}
                    </p>
                  </div>{" "}
                  {/* Stat number with no top margin to allow labels to touch */}
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                    <p className="text-black font-sans text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[120px] font-extrabold leading-none select-none">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}