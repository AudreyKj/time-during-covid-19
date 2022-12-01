import { TimelineMax, RoughEase, Power0 } from "gsap/all";

export function goForwardStart(){

    console.log('GO FORWARDS START ANIM');

    let goForwardStart = new TimelineMax({ repeat: 0 });
    goForwardStart.from(
        this.camera.position,
        {
            duration: 0.5,
            z: 15,
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
    goForwardStart.to(
        this.camera.position,
        {
            duration: 0.4,
            z: -0.011,
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

