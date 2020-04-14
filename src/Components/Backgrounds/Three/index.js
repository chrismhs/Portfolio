import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import fileGlb from "./bread.glb";

const RenderedScene = styled.div`
	position: absolute;
	top: 0%;
	left: 33%;
	width: 66%;
	height: 100vh;

	@media (max-width: 768px) {
		left: 0%;
		width: 100%;
	}
`;

class Three extends Component {
	componentDidMount() {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;
		//ADD SCENE
		this.scene = new THREE.Scene();
		//ADD CAMERA
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		this.camera.position.z = 4;
		//ADD RENDERER
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.renderer.setClearColor(0x000000, 0);
		this.renderer.setSize(width, height);
		this.mount.appendChild(this.renderer.domElement);
		//ADD LIGHT
		const light1 = new THREE.DirectionalLight(0xe6308b, 2);
		light1.position.set(-20, 10, -20);
		const light2 = new THREE.DirectionalLight(0x30d4e6, 1);
		light2.position.set(30, 0, 20);
		// const light3 = new THREE.AmbientLight(0xffffff, 0.2);
		this.scene.add(light1, light2);

		//ADD CUBE
		// const geometry = new THREE.TorusKnotBufferGeometry(1, 0.4, 220, 60);
		// const material = new THREE.MeshNormalMaterial({ color: "#433F81" });
		// this.cube = new THREE.Mesh(geometry, material);
		// this.scene.add(this.cube);
		// this.start();
		//CUSTOM MODEL
		const loader = new GLTFLoader();
		loader.load(
			fileGlb,
			(gltf) => {
				this.gltf = gltf.scene;
				this.scene.add(gltf.scene);
				gltf.scene.scale.set(15, 15, 15);
				this.gltf.rotation.x += 0.45;
				this.renderer.render(this.scene, this.camera);
				this.start();
			},
			undefined,
			(error) => {
				console.log(error);
			}
		);
	}
	componentWillUnmount() {
		this.stop();
		this.mount.removeChild(this.renderer.domElement);
	}
	start = () => {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate);
		}
	};
	stop = () => {
		cancelAnimationFrame(this.frameId);
	};
	animate = () => {
		this.gltf.rotation.y += 0.01;
		this.renderScene();
		this.frameId = window.requestAnimationFrame(this.animate);
	};
	renderScene = () => {
		this.renderer.render(this.scene, this.camera);
	};
	render() {
		return (
			<RenderedScene
				ref={(mount) => {
					this.mount = mount;
				}}
			/>
		);
	}
}
export default withTheme(Three);
