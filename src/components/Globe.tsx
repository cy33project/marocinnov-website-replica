
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh } from 'three';

const Globe = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#9b87f5"
          metalness={0.5}
          roughness={0.7}
          wireframe={true}
        />
      </Sphere>
    </mesh>
  );
};

export default Globe;
