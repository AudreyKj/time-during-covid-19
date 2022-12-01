import { TimelineMax, RoughEase, Power0 } from "gsap/all";

export function rewind(){
    let rewind = new TimelineMax({ repeat: 0 });

    this.setState({ rewindClicked: true })

    rewind.from(
        this.camera.position,
        {
            z: this.camera.position.z,
            duration: 0.8,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: true
            })
        }
    )
    rewind.to(
        this.camera.position,
        {
            z: -0.011,
            duration: 0.8,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: true
            })
        }
    )
}
