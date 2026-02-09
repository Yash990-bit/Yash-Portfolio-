import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
    // Config: Gyroscope removed as per previous request.
    // Shapes: Cube, Cuboid, Pyramid, Octahedron.

    const renderShape = (type) => {
        switch (type) {
            case 'cube':
                return (
                    <div className="cube">
                        <div className="cube-face face-front"></div>
                        <div className="cube-face face-back"></div>
                        <div className="cube-face face-right"></div>
                        <div className="cube-face face-left"></div>
                        <div className="cube-face face-top"></div>
                        <div className="cube-face face-bottom"></div>
                    </div>
                );
            case 'cuboid':
                return (
                    <div className="cuboid">
                        <div className="cuboid-face cub-front"></div>
                        <div className="cuboid-face cub-back"></div>
                        <div className="cuboid-face cub-right"></div>
                        <div className="cuboid-face cub-left"></div>
                        <div className="cuboid-face cub-top"></div>
                        <div className="cuboid-face cub-bottom"></div>
                    </div>
                );
            case 'pyramid':
                return (
                    <div className="pyramid">
                        <div className="pyramid-face pyr-front"></div>
                        <div className="pyramid-face pyr-back"></div>
                        <div className="pyramid-face pyr-right"></div>
                        <div className="pyramid-face pyr-left"></div>
                        <div className="pyramid-face pyr-base"></div>
                    </div>
                );
            case 'octahedron':
                return (
                    <div className="octahedron-container">
                        <div className="octahedron">
                            <div className="oct-top">
                                <div className="oct-face oct-f1"></div>
                                <div className="oct-face oct-f2"></div>
                                <div className="oct-face oct-f3"></div>
                                <div className="oct-face oct-f4"></div>
                            </div>
                            <div className="oct-bottom">
                                <div className="oct-face oct-f5"></div>
                                <div className="oct-face oct-f6"></div>
                                <div className="oct-face oct-f7"></div>
                                <div className="oct-face oct-f8"></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">

            {/* Moving Auras (Blue and Red, subtle/slow) */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/40 blur-[150px] rounded-full animate-aura-1 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/40 blur-[180px] rounded-full animate-aura-2 mix-blend-screen pointer-events-none"></div>

            {/* Grid Pattern Restored - Increased Visibility */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* 4 Floating Shapes */}

            {/* 1. Cube - Top Left */}
            <div
                className="absolute animate-float-in-bounds"
                style={{
                    top: '20%', left: '15%',
                    '--p1-x': '0px', '--p1-y': '0px',
                    '--p2-x': '300px', '--p2-y': '200px',
                    '--p3-x': '100px', '--p3-y': '400px',
                    animationDuration: '45s'
                }}
            >
                <div className="opacity-70 cube-container">{renderShape('cube')}</div>
            </div>

            {/* 2. Cuboid - Bottom Center */}
            <div
                className="absolute animate-float-in-bounds"
                style={{
                    top: '60%', left: '50%',
                    '--p1-x': '0px', '--p1-y': '0px',
                    '--p2-x': '-200px', '--p2-y': '-200px',
                    '--p3-x': '200px', '--p3-y': '100px',
                    animationDuration: '55s',
                    animationDelay: '-5s'
                }}
            >
                <div className="opacity-80 cuboid-container">{renderShape('cuboid')}</div>
            </div>

            {/* 3. Pyramid - Bottom Right */}
            <div
                className="absolute animate-float-in-bounds"
                style={{
                    top: '75%', left: '80%',
                    '--p1-x': '0px', '--p1-y': '0px',
                    '--p2-x': '-400px', '--p2-y': '-300px',
                    '--p3-x': '-200px', '--p3-y': '-100px',
                    animationDuration: '50s',
                    animationDelay: '-10s'
                }}
            >
                <div className="opacity-80 pyramid-container">{renderShape('pyramid')}</div>
            </div>

            {/* 4. Octahedron - Bottom Left */}
            <div
                className="absolute animate-float-in-bounds"
                style={{
                    top: '80%', left: '10%',
                    '--p1-x': '0px', '--p1-y': '0px',
                    '--p2-x': '500px', '--p2-y': '-400px',
                    '--p3-x': '200px', '--p3-y': '-100px',
                    animationDuration: '60s',
                    animationDelay: '-25s'
                }}
            >
                <div className="opacity-70 octahedron-container">{renderShape('octahedron')}</div>
            </div>

            {/* Surface Vignette */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle at center, transparent, rgba(10, 11, 16, 0.9))' }}
            />
        </div>
    );
};

export default AnimatedBackground;
