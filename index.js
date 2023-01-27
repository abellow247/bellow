import * as THREE from 'three';







//scene-camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight )



//texture
const loader = new THREE.TextureLoader();
const texture = loader.load('moon.jpg')

//shape1middle
const geometry = new THREE.SphereGeometry( 1, 18, 30 )
const material = new THREE.MeshStandardMaterial( { 
  color: "gray",
  map: texture
  
 } )
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.z = 5;


const loaderTwo = new THREE.TextureLoader();
const textureTwo = loaderTwo.load('moon.jpg')

//shape2left
const geometryTwo = new THREE.SphereGeometry(0.45, 18, 30 )
const materialTwo = new THREE.MeshStandardMaterial( { 
  color: "gray",
  map: textureTwo
  
 } )
const circleTwo = new THREE.Mesh( geometryTwo, materialTwo );
scene.add( circleTwo );

circleTwo.position.x = -4;
circleTwo.position.y = -1.5;
circleTwo.position.z = -9;

//shape3right
const geometryThree = new THREE.SphereGeometry(0.80, 30)
const materialThree= new THREE.MeshStandardMaterial( { 
  color: "gray",
  map: textureTwo
  
 } )
const circleThree = new THREE.Mesh( geometryThree, materialThree );
scene.add( circleThree );

circleThree.position.x = 4;
circleThree.position.y = 7;
circleThree.position.z = -20;



//greenlight
const pointLight = new THREE.PointLight('#2ecc71', 0.4)
pointLight.position.x = 2
pointLight.position.y = 2
pointLight.position.z = 3
scene.add(pointLight)

//redLight
const pointLightTwo = new THREE.PointLight('#ff0000', 0.7)
pointLightTwo.position.x = 2
pointLightTwo.position.y = 10
pointLightTwo.position.z = 3
scene.add(pointLightTwo)


/*
const pointLightThree = new THREE.PointLight('#2b80ff', 0.8)
pointLightThree.position.x = 30
pointLightThree.position.y = 20
pointLightThree.position.z = 1
scene.add(pointLightThree)
*/


//resize-window
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix()

})


function animate() {
	requestAnimationFrame( animate );
  
  circle.rotation.y += 0.005;

  circleTwo.rotation.x +=0.010;
  circleTwo.position.x +=0.01;
  circleTwo.position.z +=0.009;
  circleTwo.position.y +=-0.002;

  circleThree.rotation.x +=0.013;
  circleThree.position.z +=0.040;
  circleThree.position.x +=-0.01;
  circleThree.position.y +=-0.01;
  
  
	renderer.render( scene, camera );
}
animate();


