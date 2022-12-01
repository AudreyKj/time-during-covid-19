export function tunnelAnimation(){
    //Update stats
    // statsFPS.update();
    // statsMemory.update();

    setTimeout(() => {
        this.requestID = requestAnimationFrame(this.tunnelAnimation.bind(this));
    }, 500 / 30);

    this.renderer.render(this.scene, this.camera);

    this.mouse.target.x += (this.mouseFromCenter.x - this.mouse.target.x) / 30
    this.mouse.target.y += (this.mouseFromCenter.y - this.mouse.target.y) / 30

    this.camera.rotation.z = this.mouse.target.x * 0.2
    this.camera.rotation.y = Math.PI - this.mouse.target.x * 0.06

    if (this.cameraShake && this.cameraShake.x) {
        this.camera.position.x = this.mouse.target.x * 0.012 + this.cameraShake.x;
    } else {
        this.camera.position.x = this.mouse.target.x * 0.012
    }

    this.camera.position.y = -this.mouse.target.y * 0.013
}