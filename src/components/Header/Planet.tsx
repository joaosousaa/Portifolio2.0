import  { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Planet() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1); 


  const createWireframe = () => {
    const geometry = new THREE.SphereGeometry(1.05, 4, 5);
    const material = new THREE.LineBasicMaterial({ color: 0x6C6EF6, linewidth: 1 });
    const wireframe = new THREE.WireframeGeometry(geometry);
    return new THREE.LineSegments(wireframe, material);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newScale = width <= 1024 ? 1.2 : Math.max(1, width / 750);
      setScale(newScale);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.add(createWireframe());
    }
  }, []);


  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; 
    }
  });

  return (
    <mesh ref={sphereRef} rotation={[0, 0, 0]} scale={scale}>
      <sphereGeometry args={[0.9, 20, 2]} />
      <meshBasicMaterial wireframe={true} color="blue" />
    </mesh>
  );
}

export default Planet;
