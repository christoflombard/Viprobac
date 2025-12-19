"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

// --- Helpers ---
function useGradientTexture() {
    return useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            // ViProBac Theme: Dark, but with some light spots to catch reflections
            const grd = ctx.createLinearGradient(0, 0, 512, 512);
            grd.addColorStop(0, "#000000");
            grd.addColorStop(0.3, "#0f172a"); // Dark Slate
            grd.addColorStop(0.7, "#0f172a");
            grd.addColorStop(1, "#000000");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, 512, 512);

            // Add noise texture to surface
            // This helps the 'roughness' and 'metalness' pick up details
            ctx.fillStyle = "rgba(255,255,255,0.05)";
            for (let i = 0; i < 1000; i++) {
                ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
            }
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        return tex;
    }, []);
}

function LiquidPlane({ backgroundImage }: { backgroundImage?: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useRef(new THREE.Vector2(0, 0));
    const targetMouse = useRef(new THREE.Vector2(0, 0));

    // Load Texture
    const texture = backgroundImage ? useLoader(THREE.TextureLoader, backgroundImage) : useGradientTexture();

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            // Normalized -1 to 1
            targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const material = useMemo(() => {
        const mat = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.9, // Higher metalness for "Liquid Metal" look
            roughness: 0.2, // Smooth
            envMapIntensity: 2.0, // Strong reflections
            side: THREE.DoubleSide,
        });

        // Inject Vertex Displacement Logic
        mat.onBeforeCompile = (shader) => {
            shader.uniforms.uTime = { value: 0 };
            shader.uniforms.uMouse = { value: new THREE.Vector2(0, 0) };

            // Add noise function
            const noise = `
              // Simplex 3D Noise 
              // (Simplified for brevity, or we use a sine superposition)
              float noise(vec3 p) {
                  return sin(p.x*10.0) * sin(p.y*10.0) * sin(p.z*10.0);
              }
            `;

            shader.vertexShader = `
                uniform float uTime;
                uniform vec2 uMouse;
                ${shader.vertexShader}
            `;

            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                #include <begin_vertex>
                
                // Displacement Params
                float displacementScale = 5.0; // The "5" from the user snippet
                
                // 1. Mouse Interaction Ripples
                vec2 vUv2 = uv * 2.0 - 1.0;
                float dist = distance(vUv2, uMouse);
                float ripple = sin(dist * 10.0 - uTime * 3.0) * exp(-dist * 2.0);
                
                // 2. Continuous Liquid Motion (Perlin-ish)
                // We use multiple sin waves to simulate fluid surface
                float liquid = sin(uv.x * 3.0 + uTime * 0.5) * sin(uv.y * 3.0 + uTime * 0.4);
                liquid += sin(uv.x * 10.0 - uTime * 0.2) * cos(uv.y * 10.0 + uTime * 0.3) * 0.1;
                
                // Combine
                float totalDisp = (ripple + liquid) * 0.2; // Base intensity
                
                // Apply Displacement Scale
                // Note: In ThreeJS standard material, displacementMap uses normal direction.
                // We displace Z here.
                
                transformed.z += totalDisp * displacementScale;
                
                // Update Normal for correct lighting/reflection?
                // Recomputing normals in vertex shader is hard without dFdx in frag.
                // But MeshStandardMaterial might handle flat normals or we accept soft lighting.
                // ideally we displace along normal: transformed += normal * ...
                `
            );
            mat.userData.shader = shader;
        };
        return mat;
    }, [texture]);

    useFrame((state) => {
        if (meshRef.current && meshRef.current.material) {
            const mat = meshRef.current.material as THREE.MeshStandardMaterial;
            if (mat.userData.shader) {
                mat.userData.shader.uniforms.uTime.value = state.clock.elapsedTime;
                // Smooth mouse interpolation
                mouse.current.lerp(targetMouse.current, 0.05);
                mat.userData.shader.uniforms.uMouse.value.copy(mouse.current);
            }
        }
    });

    const { viewport } = useThree();

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]}>
            <planeGeometry args={[viewport.width * 1.5, viewport.height * 1.5, 256, 256]} />
            <primitive object={material} attach="material" />
        </mesh>
    );
}

export function WaterRipple({ backgroundImage, className, baseColor }: { backgroundImage?: string, className?: string, baseColor?: string }) {
    return (
        <div className={`absolute inset-0 ${className} z-0 pointer-events-none`}>
            {/* Use pointer-events-none so it's purely visual background. 
           Canvas itself captures global mouse via listener. */}
            <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                gl={{ alpha: false, antialias: true }} // Opaque canvas for performance and "Solid Liquid" look
                dpr={[1, 2]}
            >
                <color attach="background" args={["#000000"]} /> {/* Black fallback */}

                <ambientLight intensity={1.0} />
                {/* Strong Rim Lights for Liquid Metal Effect */}
                <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-5, 5, 2]} intensity={2} color="#4f46e5" /> {/* Blue tint from side */}

                <Environment preset="city" />

                <LiquidPlane backgroundImage={backgroundImage} />
            </Canvas>
        </div>
    );
}
