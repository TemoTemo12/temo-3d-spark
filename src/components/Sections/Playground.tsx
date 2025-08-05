import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, Sphere, Box, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mesh } from 'three';
import { RotateCcw, Zap, Palette, Sparkles } from 'lucide-react';

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} wireframe />
    </Sphere>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
    </Box>
  );
};

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 100]}>
      <meshStandardMaterial color="#10b981" wireframe />
    </Torus>
  );
};

const Scene = ({ sceneType }: { sceneType: string }) => {
  switch (sceneType) {
    case 'spheres':
      return (
        <>
          <AnimatedSphere position={[-2, 0, 0]} color="#3b82f6" />
          <AnimatedSphere position={[2, 0, 0]} color="#ef4444" />
          <AnimatedSphere position={[0, 2, 0]} color="#10b981" />
          <AnimatedSphere position={[0, -2, 0]} color="#f59e0b" />
        </>
      );
    case 'geometry':
      return (
        <>
          <AnimatedBox position={[-2, 0, 0]} />
          <AnimatedTorus position={[2, 0, 0]} />
          <AnimatedSphere position={[0, 0, 2]} color="#8b5cf6" />
        </>
      );
    default:
      return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Text
            position={[0, 0, 0]}
            fontSize={1}
            color="#3b82f6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/orbitron-bold.woff"
          >
            TEMO
          </Text>
        </Float>
      );
  }
};

const Playground = () => {
  const [currentScene, setCurrentScene] = useState('text');

  const scenes = [
    { id: 'text', name: 'Text', icon: Sparkles, description: 'Floating 3D text' },
    { id: 'spheres', name: 'Spheres', icon: Zap, description: 'Animated spheres' },
    { id: 'geometry', name: 'Geometry', icon: Palette, description: 'Mixed 3D shapes' },
  ];

  return (
    <section id="playground" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            3D <span className="text-gradient">Playground</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive 3D experiences built with Three.js and React. 
            Explore different scenes and animations in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card h-[500px]">
              <div className="h-full w-full rounded-lg overflow-hidden bg-background/50">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.3} />
                    <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
                    
                    <Scene sceneType={currentScene} />
                    
                    <OrbitControls
                      enableZoom={true}
                      enablePan={true}
                      autoRotate={currentScene === 'text'}
                      autoRotateSpeed={0.5}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </Card>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-gradient">Scene Controls</h3>
              <div className="space-y-3">
                {scenes.map((scene) => (
                  <Button
                    key={scene.id}
                    variant={currentScene === scene.id ? "default" : "outline"}
                    className={`w-full justify-start ${
                      currentScene === scene.id 
                        ? 'bg-gradient-primary shadow-glow' 
                        : 'border-primary/30 hover:bg-primary hover:text-primary-foreground'
                    }`}
                    onClick={() => setCurrentScene(scene.id)}
                  >
                    <scene.icon className="w-4 h-4 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{scene.name}</div>
                      <div className="text-xs opacity-70">{scene.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-gradient">Features</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Interactive 3D navigation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Real-time animations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Responsive design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                  <span>WebGL acceleration</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-gradient">Controls</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-primary">Mouse:</strong> Orbit camera</p>
                <p><strong className="text-primary">Scroll:</strong> Zoom in/out</p>
                <p><strong className="text-primary">Drag:</strong> Pan view</p>
                <p><strong className="text-primary">Touch:</strong> Mobile support</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Built with Modern Tech</h3>
            <p className="text-muted-foreground mb-6">
              This 3D playground showcases the power of Three.js, React Three Fiber, and WebGL. 
              All scenes are rendered in real-time and optimized for performance across devices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Three.js', 'React Three Fiber', 'WebGL', 'Blender', 'TypeScript'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Playground;