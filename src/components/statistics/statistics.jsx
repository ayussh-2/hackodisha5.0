"use client";

import { useState, useRef, useEffect } from 'react';

export default function Statistics({ statsData }) {
    // Default fallback data if no stats are provided
    const defaultStats = [
        { 
            id: "registrations",
            bg: "bg-[#D3AEFF]", 
            label: "Registrations", 
            value: "50+", 
            rotation: -14.444,
            hoverBg: "hover:bg-[#A266FF]"
        },
        { 
            id: "projects",
            bg: "bg-[#FFEA89]", 
            label: "Projects", 
            value: "50+", 
            rotation: 12.088,
            hoverBg: "hover:bg-[#FFD74C]"
        },
        { 
            id: "participants",
            bg: "bg-[#EFE7F7]", 
            label: "Participants", 
            value: "50+", 
            rotation: -2.726,
            hoverBg: "hover:bg-[#D8C6E9]"
        },
        { 
            id: "prizes",
            bg: "bg-[#E6CEFF]", 
            label: "Prizes", 
            value: "50+", 
            rotation: 29.177,
            hoverBg: "hover:bg-[#C59EFF]"
        }
    ];

    // Use provided stats data or fall back to defaults
    const stats = statsData || defaultStats;

    // Loading state for future API integration
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Mock function to demonstrate how real-time updates would work
    const fetchRealTimeStats = async () => {
        // This would be replaced with actual API call in the future
        try {
            setIsLoading(true);
            // Simulated API call
            // const response = await fetch('/api/stats');
            // const data = await response.json();
            // updateStats(data);
            setIsLoading(false);
        } catch (err) {
            setError("Failed to load statistics");
            setIsLoading(false);
        }
    };

    // Example of how you might set up real-time updates
    useEffect(() => {
        // Initial fetch 
        // fetchRealTimeStats();

        // Set up real-time listeners
        // const socket = new WebSocket('wss://your-api.com/stats');
        // socket.onmessage = (event) => {
        //   const data = JSON.parse(event.data);
        //   updateStats(data);
        // };

        // return () => {
        //   socket.close();
        // };
    }, []);

    // Pre-create all the draggable states for all cards
    const labelDrags = stats.map(() => useDraggableHook({ x: 15, y: 15 }));
    const numberDrags = stats.map(() => useDraggableHook({ x: 50, y: 120 }));

    // Combined hook for mouse and touch events
    function useDraggableHook(initialPosition = { x: 0, y: 0 }) {
        const [position, setPosition] = useState(initialPosition);
        const [isDragging, setIsDragging] = useState(false);
        const ref = useRef(null);
        const dragOffset = useRef({ x: 0, y: 0 });

        const handleMouseDown = (e) => {
            e.preventDefault();
            
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                dragOffset.current = { 
                    x: e.clientX - rect.left, 
                    y: e.clientY - rect.top 
                };
                setIsDragging(true);
            }
        };

        const handleTouchStart = (e) => {
            if (ref.current && e.touches && e.touches[0]) {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = ref.current.getBoundingClientRect();
                dragOffset.current = { 
                    x: touch.clientX - rect.left, 
                    y: touch.clientY - rect.top 
                };
                setIsDragging(true);
            }
        };

        const handleMouseMove = (e) => {
            if (isDragging && ref.current) {
                e.preventDefault();
                moveElement(e.clientX, e.clientY);
            }
        };

        const handleTouchMove = (e) => {
            if (isDragging && ref.current && e.touches && e.touches[0]) {
                e.preventDefault();
                const touch = e.touches[0];
                moveElement(touch.clientX, touch.clientY);
            }
        };

        const moveElement = (clientX, clientY) => {
            if (!ref.current) return;
            
            const parentRect = ref.current.parentElement.getBoundingClientRect();
            const elementRect = ref.current.getBoundingClientRect();
            
            // Calculate new position accounting for element's rotation
            let newX = clientX - parentRect.left - dragOffset.current.x;
            let newY = clientY - parentRect.top - dragOffset.current.y;
            
            // Calculate effective width/height accounting for possible rotation
            // This is a simplification - for precise calculation with rotation,
            // we would need to use matrix transformations
            const padding = 5; // Add a small padding to ensure elements stay fully inside
            const maxX = parentRect.width - elementRect.width - padding;
            const maxY = parentRect.height - elementRect.height - padding;
            
            // Apply constraints with a safety margin to keep elements fully inside
            newX = Math.max(padding, Math.min(newX, maxX));
            newY = Math.max(padding, Math.min(newY, maxY));
            
            setPosition({
                x: newX,
                y: newY
            });
        };

        const handleDragEnd = () => {
            setIsDragging(false);
        };

        useEffect(() => {
            if (isDragging) {
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleDragEnd);
                document.addEventListener('touchmove', handleTouchMove, { passive: false });
                document.addEventListener('touchend', handleDragEnd);
                document.addEventListener('touchcancel', handleDragEnd);
            } else {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleDragEnd);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleDragEnd);
                document.removeEventListener('touchcancel', handleDragEnd);
            }
            
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleDragEnd);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleDragEnd);
                document.removeEventListener('touchcancel', handleDragEnd);
            };
        }, [isDragging]);

        return { 
            position, 
            ref, 
            handleMouseDown, 
            handleTouchStart
        };
    }

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-full overflow-hidden h-auto min-h-screen py-24 px-0 md:px-4 mx-auto bg-[#BC82FE] relative">
            {/* Horizontal line */}
            <div className="absolute w-full h-[2px] bg-black top-24"></div>
            
            {/* STATISTICS heading label - positioned on the line */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex w-[280px] sm:w-[400px] md:w-[493px] h-[70px] sm:h-[100px] md:h-[131px] p-[6px_4px] sm:p-[10px_8px] md:p-[15px_12px] flex-col justify-center items-center gap-[4px] sm:gap-[8px] md:gap-[10px] flex-shrink-0 rounded-[10px] sm:rounded-[18px] md:rounded-[24px] bg-white shadow-[-2px_-2px_0px_0px_#000,_2px_2px_0px_0px_#000] sm:shadow-[-3px_-3px_0px_0px_#000,_3px_3px_0px_0px_#000] md:shadow-[-3px_-4px_0px_0px_#000,_4px_4px_0px_0px_#000]">
                    <div className="w-[260px] sm:w-[380px] md:w-[463px] h-[50px] sm:h-[80px] md:h-[101px] flex-shrink-0 rounded-[6px] sm:rounded-[12px] md:rounded-[16px] border-[2px] sm:border-[2px] md:border-[3px] border-dashed border-black flex justify-center items-center">
                        <h2 className="text-black font-sans text-[24px] sm:text-[40px] md:text-[64px] font-semibold leading-normal tracking-[1.5px] sm:tracking-[2px] md:tracking-[3.2px]">
                            STATISTICS
                        </h2>
                    </div>
                </div>
            </div>
            
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
                            const labelDrag = labelDrags[index];
                            const numberDrag = numberDrags[index];
                            
                            return (
                                <div 
                                    key={stat.id || index}
                                    className={`w-[280px] h-[280px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex-shrink-0 rounded-[24px] border-2 border-black ${stat.bg} ${stat.hoverBg} transition-colors duration-300 ease-in-out relative mb-8 sm:mb-0 group overflow-hidden`}
                                >
                                    {/* Draggable label with custom rotation */}
                                    <div 
                                        ref={labelDrag.ref}
                                        onMouseDown={labelDrag.handleMouseDown}
                                        onTouchStart={labelDrag.handleTouchStart}
                                        className="absolute cursor-move inline-flex py-2 px-4 justify-center items-center gap-2.5 rounded-[48px] border-2 border-black bg-white hover:bg-[#F3F3F3] hover:shadow-md touch-none select-none transition-all duration-300 ease-in-out z-10"
                                        style={{
                                            left: `${labelDrag.position.x}px`,
                                            top: `${labelDrag.position.y}px`,
                                            transform: `rotate(${stat.rotation}deg)`,
                                            transformOrigin: 'center center',
                                            WebkitUserSelect: 'none',
                                            MozUserSelect: 'none',
                                            msUserSelect: 'none',
                                            userSelect: 'none'
                                        }}
                                    >
                                        <p className="text-black font-sans text-lg sm:text-xl font-normal tracking-[-0.48px] select-none">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Draggable number */}
                                    <div 
                                        ref={numberDrag.ref}
                                        onMouseDown={numberDrag.handleMouseDown}
                                        onTouchStart={numberDrag.handleTouchStart}
                                        className="absolute cursor-move touch-none select-none transition-transform duration-300 ease-in-out group-hover:scale-105 z-10"
                                        style={{
                                            left: `${numberDrag.position.x}px`,
                                            top: `${numberDrag.position.y}px`,
                                            WebkitUserSelect: 'none',
                                            MozUserSelect: 'none',
                                            msUserSelect: 'none',
                                            userSelect: 'none'
                                        }}
                                    >
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
