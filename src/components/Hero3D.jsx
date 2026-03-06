import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, MeshDistortMaterial, OrbitControls, Stars, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';

function JourneyPath({ start, end, color = "#ffc107" }) {
    const curve = useMemo(() => {
        const startVec = new THREE.Vector3(...start);
        const endVec = new THREE.Vector3(...end);
        const midVec = startVec.clone().lerp(endVec, 0.5);
        midVec.y += 1.5; // Arched path
        return new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
    }, [start, end]);

    const lineGeometry = useMemo(() => {
        const points = curve.getPoints(50);
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [curve]);

    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial color={color} linewidth={2} />
        </line>
    );
}

function Vehicle({ path, speed = 1, color = "#ffc107" }) {
    const meshRef = useRef();

    useFrame((state) => {
        const t = (state.clock.getElapsedTime() * 0.1 * speed) % 1;
        const pos = path.getPointAt(t);
        const tangent = path.getTangentAt(t).normalize();
        meshRef.current.position.copy(pos);
        meshRef.current.lookAt(pos.clone().add(tangent));
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[0.15, 0.1, 0.2]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
    );
}

function DestinationMarker({ position, name }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#ffc107" emissive="#ffc107" emissiveIntensity={2} />
            </mesh>
            <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
                <mesh position={[0, 0.2, 0]}>
                    <coneGeometry args={[0.05, 0.2, 8]} />
                    <meshStandardMaterial color="#ffc107" />
                </mesh>
            </Float>
        </group>
    );
}

function Globe() {
    const globeRef = useRef();

    // Curves for vehicles
    const path1 = useMemo(() => {
        return new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(0.5, 1.8, 0.5),
            new THREE.Vector3(1.2, 2.0, 1.2),
            new THREE.Vector3(0.8, 1.5, 1.0)
        );
    }, []);

    const path2 = useMemo(() => {
        return new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(0.8, 1.5, 1.0),
            new THREE.Vector3(0.5, 1.0, 1.8),
            new THREE.Vector3(0.2, 1.2, 1.5)
        );
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        globeRef.current.rotation.y = t * 0.05;
    });

    // Landmark markers
    const markers = [
        { pos: [0.5, 1.8, 0.5], name: "Sigiriya" },
        { pos: [0.8, 1.5, 1.0], name: "Kandy" },
        { pos: [0.2, 1.2, 1.5], name: "Galle Fort" }
    ];

    return (
        <group ref={globeRef}>
            {/* Sri Lanka Label */}
            <Billboard position={[0, 2.5, 0]}>
                <Text
                    fontSize={0.3}
                    color="#ffc107"
                    font="https://fonts.gstatic.com/s/robotoslab/v7/B90v79q0GZ8p0mX6z2yO3H0.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    SRI LANKA
                </Text>
            </Billboard>

            {/* Inner Core */}
            <Sphere args={[1.9, 64, 64]}>
                <meshStandardMaterial
                    color="#1a1a1a"
                    emissive="#ffc107"
                    emissiveIntensity={0.05}
                    roughness={0.5}
                />
            </Sphere>

            {/* Holographic Shell */}
            <Sphere args={[2.0, 64, 64]}>
                <MeshDistortMaterial
                    color="#ffc107"
                    roughness={0.1}
                    metalness={1}
                    distort={0.15}
                    speed={2}
                    transparent
                    opacity={0.3}
                />
            </Sphere>

            {/* Wireframe Map Layer */}
            <Sphere args={[2.05, 32, 32]}>
                <meshStandardMaterial
                    color="#ffc107"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>

            {markers.map((m, i) => (
                <DestinationMarker key={i} position={m.pos} name={m.name} />
            ))}

            {/* Animated Journey Paths */}
            <JourneyPath start={[0.5, 1.8, 0.5]} end={[0.8, 1.5, 1.0]} color="#ffc107" />
            <JourneyPath start={[0.8, 1.5, 1.0]} end={[0.2, 1.2, 1.5]} color="#ff9800" />

            <Vehicle path={path1} speed={0.5} color="#ffc107" />
            <Vehicle path={path2} speed={0.7} color="#ffeb3b" />
        </group>
    );
}

function FloatingIcons() {
    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[-4, 2, -2]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color="#ffc107" />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[4, -2, -3]}>
                    <octahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#ffc107" />
                </mesh>
            </Float>
        </>
    );
}

const Hero3D = () => {
    return (
        <div className="hero-3d-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Globe />
                <FloatingIcons />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
