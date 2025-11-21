import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Geometry component that reacts to mouse
const InteractiveShape = ({ position, color, speed, scale, isDark, shapeType }: { position: [number, number, number], color: string, speed: number, scale: number, isDark: boolean, shapeType: 'box' | 'sphere' | 'torus' | 'icosahedron' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, pointer } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.x += delta * 0.2 * speed;
      meshRef.current.rotation.y += delta * 0.3 * speed;
      
      // Subtle mouse interaction (parallax)
      const x = (pointer.x * viewport.width) / 50;
      const y = (pointer.y * viewport.height) / 50;
      meshRef.current.position.x += (position[0] + x - meshRef.current.position.x) * 0.1;
      meshRef.current.position.y += (position[1] + y - meshRef.current.position.y) * 0.1;
    }
  });

  const Material = isDark ? (
    <meshStandardMaterial color={color} wireframe transparent opacity={0.15} />
  ) : (
    <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} transparent opacity={0.6} />
  );

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {shapeType === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {shapeType === 'torus' && <torusGeometry args={[0.7, 0.2, 16, 32]} />}
        {shapeType === 'sphere' && <sphereGeometry args={[0.8, 32, 32]} />}
        {shapeType === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {Material}
      </mesh>
    </Float>
  );
};

// Background Particle System for Light Mode (Bubbles) or Dark Mode (Stars/Dust)
const Particles = ({ isDark }: { isDark: boolean }) => {
  const count = isDark ? 200 : 50;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const lightColor = new THREE.Color('#38bdf8');
  const darkColor = new THREE.Color('#ffffff');
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshPhongMaterial color={isDark ? darkColor : lightColor} transparent opacity={isDark ? 0.8 : 0.4} />
    </instancedMesh>
  );
};

interface Background3DProps {
  isDark: boolean;
}

const Background3D: React.FC<Background3DProps> = ({ isDark }) => {
  const bgClass = isDark 
    ? "fixed inset-0 -z-10 bg-slate-950 transition-colors duration-700" 
    : "fixed inset-0 -z-10 bg-slate-50 transition-colors duration-700";

  const fogColor = isDark ? '#020617' : '#f8fafc';

  return (
    <div className={bgClass}>
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),rgba(2,6,23,0))]' : 'opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),rgba(255,255,255,0))]'}`} />
      
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color={isDark ? "#0ea5e9" : "#38bdf8"} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={isDark ? "#8b5cf6" : "#a78bfa"} />
        
        {isDark && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
        <Particles isDark={isDark} />

        {/* Floating Tech Shapes */}
        <group>
            <InteractiveShape position={[-10, 5, -5]} color={isDark ? "#0ea5e9" : "#60a5fa"} speed={1} scale={3} isDark={isDark} shapeType="icosahedron" />
            <InteractiveShape position={[12, -4, -10]} color={isDark ? "#8b5cf6" : "#c084fc"} speed={1.5} scale={4} isDark={isDark} shapeType={isDark ? "icosahedron" : "torus"} />
            <InteractiveShape position={[-5, -10, -15]} color={isDark ? "#2dd4bf" : "#2dd4bf"} speed={0.8} scale={2} isDark={isDark} shapeType="sphere" />
            <InteractiveShape position={[8, 8, -8]} color={isDark ? "#0ea5e9" : "#7dd3fc"} speed={1.2} scale={2.5} isDark={isDark} shapeType={isDark ? "icosahedron" : "box"} />
            <InteractiveShape position={[0, 0, -5]} color={isDark ? "#6366f1" : "#818cf8"} speed={0.5} scale={isDark ? 5 : 4} isDark={isDark} shapeType={isDark ? "icosahedron" : "torus"} />
        </group>

        {/* Environment for nice reflections in light mode */}
        {!isDark && <Environment preset="city" />}

        <fog attach="fog" args={[fogColor, 10, 40]} />
      </Canvas>
    </div>
  );
};

export default Background3D;