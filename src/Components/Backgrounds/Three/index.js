import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import * as THREE from "three";
import TweenMax from "gsap";

const RenderedScene = styled.div`
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100vh;

	@media (max-width: 768px) {
		left: 0%;
		width: 100%;
	}
`;

const mouse = new THREE.Vector2();
const windowHalf = new THREE.Vector2(
	window.innerWidth / 2,
	window.innerHeight / 2
);
var mouseX = 0;
var mouseY = 0;
var currentRotationX = 0;
var currentRotationY = 0;

class Three extends Component {
	state = {
		left: 0,
		top: 0,
	};
	componentDidMount() {
		this.sceneSetup();
		this.addCustomSceneObjects();
		this.startAnimationLoop();
		window.addEventListener("resize", this.handleWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowResize);
		window.cancelAnimationFrame(this.requestID);
	}

	sceneSetup = () => {
		// get container dimensions and use them for scene sizing

		this.scene = new THREE.Scene();
		//ADD CAMERA
		this.camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			500
		);
		this.camera.position.z = 7;

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.renderer.setClearColor(0x000000, 0);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.mount.appendChild(this.renderer.domElement); // mount using React ref
		document.addEventListener("mousemove", (e) => {
			mouseX = 1 - (e.pageY / window.innerWidth) * 2;
			mouseY = 1 - (e.pageX / window.innerHeight) * 2;
		});
	};

	addCustomSceneObjects = () => {
		const geometryCone = new THREE.ConeBufferGeometry(1, 2, 4);
		const geometryBox = new THREE.BoxGeometry(0.5, 0.5, 0.5);

		const material1 = new THREE.MeshBasicMaterial({
			wireframe: true,
			transparent: true,
			opacity: 0,
		});
		const material2 = new THREE.MeshBasicMaterial({
			wireframe: true,
			transparent: true,
			opacity: 0,
		});

		const rgb = this.props.theme.alt1
			.split(", ")
			.map((v) => parseInt(v) / 255.0);

		material1.color.setRGB(...rgb);
		material2.color.setRGB(...rgb);

		this.cone = new THREE.Mesh(geometryCone, material1);
		this.cone.position.x = 1 / (window.innerWidth / (window.innerWidth * 0.85));
		this.cone.position.y =
			1 / 1 - window.innerHeight / (window.innerHeight * 0.4);

		this.box = new THREE.Mesh(geometryBox, material2);
		this.box.position.x = 1 / (window.innerWidth / (window.innerWidth * 0.4));
		this.box.position.y = 1 / (window.innerHeight / (window.innerHeight * 1.5));

		this.scene.add(this.cone);
		this.scene.add(this.box);

		TweenMax.to(material1, 4, { opacity: 1, delay: 1 });
		TweenMax.to(material2, 4, { opacity: 1, delay: 2 });

		//ADD LIGHT
		const light1 = new THREE.DirectionalLight(0xe6308b, 2);
		light1.position.set(-20, 10, -20);
		const light2 = new THREE.DirectionalLight(0x30d4e6, 1);
		light2.position.set(30, 0, 20);
		// const light3 = new THREE.AmbientLight(0xffffff, 0.2);
		this.scene.add(light1, light2);
	};

	startAnimationLoop = () => {
		if (currentRotationX < mouseX) {
			currentRotationX += (mouseX - currentRotationX) / 20;
		} else {
			currentRotationX -= (currentRotationX - mouseX) / 20;
		}

		if (currentRotationY < mouseY) {
			currentRotationY += (mouseY - currentRotationY) / 20;
		} else {
			currentRotationY -= (currentRotationY - mouseY) / 20;
		}

		this.cone.rotation.x = 0.5 - currentRotationX / 6;
		this.cone.rotation.y = 1 - currentRotationY / 3;
		this.cone.rotation.z = 0.6 - currentRotationX / 5 + currentRotationY / 5;
		this.box.rotation.x += 0.001;
		this.box.rotation.z += 0.002;

		// this.box.position.x -= 0.0005;

		this.renderer.render(this.scene, this.camera);

		// The window.requestAnimationFrame() method tells the browser that you wish to perform
		// an animation and requests that the browser call a specified function
		// to update an animation before the next repaint
		this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
	};
	handleWindowResize = () => {
		const width = this.mount.innerWidth;
		const height = this.mount.innerHeight;

		windowHalf.set(width / 2, height / 2);

		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(width, height);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		// Note that after making changes to most of camera properties you have to call
		// .updateProjectionMatrix for the changes to take effect.
	};
	onMouseMove(event) {
		mouse.x = event.clientX - windowHalf.x;
		mouse.y = event.clientY - windowHalf.x;
		console.log(mouse.x);
	}
	renderScene = () => {
		this.renderer.render(this.scene, this.camera);
	};
	render() {
		return (
			<div>
				<RenderedScene
					style={{ left: this.state.left, top: this.state.top }}
					className="cursor"
					ref={(mount) => {
						this.mount = mount;
					}}
				/>
			</div>
		);
	}
}
export default withTheme(Three);
