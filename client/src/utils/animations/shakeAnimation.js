import { TimelineMax, RoughEase, Power0 } from "gsap/all";

export function shake(){
    let shake = new TimelineMax({ repeat: 0 });

    shake.to(
        this.cameraShake,
        {
            duration: 0.6,
            x: -0.004,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.9,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: false
            })
        }
    )
    shake.to(
        this.cameraShake,
        {
            duration: 0.6,
            x: 0,
            ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.9,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: false
            })
        }
    )
}