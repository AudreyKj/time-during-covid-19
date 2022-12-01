import { TimelineMax, RoughEase, Power0 } from "gsap/all";

export function backwardsForwards(){

    if (this.state.survey) {
        return;
    }


    let backwardsForwards = new TimelineMax({ repeat: 0 });

    const initialPosition = this.camera.position.z;
    const moveCamera = this.camera.position.z > 5 ? this.camera.position.z - 5 : this.camera.position.z > 1 ? -0.011 : 5;


    backwardsForwards.from(
        this.camera.position,
        {
            duration: 0.3,
            z: this.camera.position.z,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.5,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: false
            })
        }
    )
    backwardsForwards.to(
        this.camera.position,
        {
            duration: 0.3,
            z: moveCamera,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.5,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: false
            })
        }
    )
    backwardsForwards.to(
        this.camera.position,
        {
            duration: 0.3,
            z: initialPosition,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.5,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: false
            })
        }
    )
}