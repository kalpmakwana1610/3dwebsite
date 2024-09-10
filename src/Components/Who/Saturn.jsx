import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

const SaturnContainer = styled.div`
  width: 100vw;
  height: 100%;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Saturn = () => {
  const image1 = require("../../images/8k_saturn.jpg");
  const image2 = require("../../images/ring1.jpg");
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
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();

    // Load the main Saturn texture
    const texture1 = textureLoader.load(image1);
    const material1 = new THREE.MeshStandardMaterial({ map: texture1 });
    const saturn = new THREE.Mesh(geometry, material1);
    saturn.rotation.x = Math.PI / 6; // Adjust initial rotation for better viewing angle
    scene.add(saturn);

    // Load the ring texture
    const texture2 = textureLoader.load(image2);
    const material2 = new THREE.MeshStandardMaterial({
      map: texture2,
      transparent: true, // Ensure the rings are transparent
      side: THREE.DoubleSide, // Render the ring on both sides
      depthWrite: false, // Disable depth writing for the ring
      depthTest: true,  // Enable depth testing
    });

    const ringsGeometry = new THREE.RingGeometry(1.1, 1.5, 64); // Adjust the inner and outer radius
    const rings = new THREE.Mesh(ringsGeometry, material2);
    rings.rotation.x = Math.PI / 2; // Rotate the rings to be flat
    rings.position.z = 0.05; // Slightly increase the distance to avoid z-fighting
    scene.add(rings);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    camera.position.z = 2.5;

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

      saturn.rotation.y += deltaMove.x * 0.005;
      saturn.rotation.x += deltaMove.y * 0.005;
      rings.rotation.y += deltaMove.x * 0.005;
      rings.rotation.x += deltaMove.y * 0.005;

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

      saturn.rotation.y += 0.01;
      rings.rotation.z += 0.01; // Rotate the rings around the z-axis

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

  return <SaturnContainer ref={mountRef} />;
};

export default Saturn;
