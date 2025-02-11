import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";
const MarsContainer = styled.div`
width: 100vw;
height: 100%;



canvas {
  display: block;
  width: 100%;
  height: 100%;
}
  }
`;
const Mars = () => {
  const image1 = require("../../images/textures/Material.001_baseColor.jpeg");
  const mountRef = useRef(null);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image1);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    camera.position.z = 2;

    const onMouseDown = (event) => {
      isDragging.current = true;
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const onMouseMove = (event) => {
      if (!isDragging.current) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.current.x,
        y: event.clientY - previousMousePosition.current.y,
      };

      earth.rotation.y += deltaMove.x * 0.005;
      earth.rotation.x += deltaMove.y * 0.005;

      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const animate = function () {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return <MarsContainer  ref={mountRef} />;

 
   
};

export default Mars;
