import React, { Component } from "react";
import Draggable from 'react-draggable';
import * as THREE from "three";
import axios from "axios";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";
import { SurveyOne } from './survey/SurveyOne.jsx'
import { SurveyTwo } from './survey/SurveyTwo.jsx'
import { SurveyThree } from './survey/SurveyThree.jsx'
import { Mobile } from './components/Mobile.jsx';
import { Share } from './components/Share.jsx';
import { Modal } from "./components/Modal.jsx";
import { AboutCircle } from './components/AboutCircle.jsx';
import {
    determineLoadingPercent, detectImageForClick, setImageUrlForTexture, updatePageTitle, progressiveLoading, loadTextures, backwardsForwards, rewind, goForwardStart, createProgressiveLoadedMeshes, offset, createTunnelMesh,
    showContributeText, incentiveClicked, tunnelAnimation
} from "./utils";
import { fragmentShader, march20_2_fragmentShader, vertexShader } from './shaders';
import './App.css';

const { detect } = require('detect-browser');
const browser = detect();

let ww = window.innerWidth;
let wh = window.innerHeight;
const raycaster = new THREE.Raycaster();

console.log('%c TIME DURING COVID-19 ', 'background: #000; color: #D8D0F6');

/////////////////uncomment to check FPS performance 
// //FPS stats
// var statsFPS = new Stats();
// statsFPS.domElement.style.cssText = "position:absolute;top:3px;left:400px;";
// statsFPS.showPanel(0); // 0: fps,

// //Memory stats
// var statsMemory = new Stats();
// statsMemory.showPanel(2); //2: mb, 1: ms, 3+: custom
// statsMemory.domElement.style.cssText = "position:absolute;top:3px;left:600px;";
/////////////////

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contributeIncentive: false,
            browserBlocker: false,
            rewindModalClicked: false,
            shareDropdown: false,
            shareModal: false,
            rewindClicked: false,
            survey: false,
            rewindTriggered: false,
            surveyOne: false,
            surveyTwo: false,
            surveyThree: false,
            burstLike: false,
            likes: 0,
            loadingStart: true,
            paragraph: false,
            about: false,
            loaded: "5%",
            ready: false,
            image: "",
            rewindEnd: false
        };
    }

    detectImageForClick = detectImageForClick.bind(this);
    setImageUrlForTexture = setImageUrlForTexture.bind(this);
    updatePageTitle = updatePageTitle.bind(this);
    progressiveLoading = progressiveLoading.bind(this);
    loadTextures = loadTextures.bind(this);
    backwardsForwards = backwardsForwards.bind(this);
    rewind = rewind.bind(this);
    goForwardStart = goForwardStart.bind(this);
    createProgressiveLoadedMeshes = createProgressiveLoadedMeshes.bind(this);
    fragmentShader = fragmentShader.bind(this);
    march20_2_fragmentShader = march20_2_fragmentShader.bind(this);
    vertexShader = vertexShader.bind(this);
    determineLoadingPercent = determineLoadingPercent.bind(this);
    offset = offset.bind(this);
    createTunnelMesh = createTunnelMesh.bind(this);
    showContributeText = showContributeText.bind(this);
    incentiveClicked = incentiveClicked.bind(this);
    tunnelAnimation = tunnelAnimation.bind(this);

    componentDidMount() {
        switch (browser && browser.name) {
            case 'safari':
            case 'firefox':
            case 'edge':
                this.setState({ browserBlocker: true })
                return;

            default:
                console.log('<3', browser.name);
        }

        this.setUp();
        this.handleWindowResize()

        // document.body.appendChild(statsFPS.dom);
        // document.body.appendChild(statsMemory.dom);

        window.addEventListener('wheel', this.offset);

        window.addEventListener("resize", this.handleWindowResize);

        window.addEventListener("mousemove", this.moveCenter.bind(this), false)

        window.addEventListener("mousemove", this.onMouseMove.bind(this), false)

        window.addEventListener("click", this.onMouseClick.bind(this), false)

        window.requestAnimationFrame(this.tunnelAnimation.bind(this));

        //LIKES 
        axios.get('/getLikes').then(res => {
            const count = parseInt(res.data[0].count)
            this.setState({ likes: count })
        }).catch(error => error)


        if (!this.requestID) {
            this.requestID = window.requestAnimationFrame(this.tunnelAnimation.bind(this));
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
        window.removeEventListener("wheel", this.offset);
        window.removeEventListener("click", this.onMouseClick);
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mousemove", this.moveCenter);
        window.cancelAnimationFrame(this.requestID);

        this.mount.removeChild(this.renderer.domElement)
    }

    setUp = () => {
        this.mouseFromCenter = { x: 0, y: 0 }

        this.cameraShake = {
            x: 0,
            y: 0,
            z: 0
        };

        this.mouse = {
            position: new THREE.Vector2(ww * 0.5, wh * 0.7),
            ratio: new THREE.Vector2(0, 0),
            target: new THREE.Vector2(ww * 0.5, wh * 0.7),
        };

        //WebGLRenderer
        let pixelRatio = window.devicePixelRatio
        let AA = true
        if (pixelRatio > 1) {
            AA = false
        }

        this.renderer = new THREE.WebGLRenderer({
            antialias: AA,
            powerPreference: "high-performance",
            alpha: true,
        })

        this.renderer.setSize(wh, wh);

        this.container = document.querySelector('#boardCanvas').appendChild(this.renderer.domElement)
        const dpi = window.devicePixelRatio;
        this.container.width = window.innerWidth * dpi
        this.container.height = window.innerHeight * dpi

        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.context = this.container.getContext('webGL 2.0') || this.container.getContext('experimental-webgl') || this.container.getContext('webgl', { antialias: false, depth: false })

        this.anisotropy = this.renderer.capabilities.getMaxAnisotropy()

        this.mount.appendChild(this.renderer.domElement);

        //scene
        this.scene = new THREE.Scene();

        //camera
        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.01, 1000)
        this.camera.position.z = -0.011

        this.scene.add(this.camera);

        this.renderer.compile(this.scene, this.camera)

        //loading
        this.loadingManager = new THREE.LoadingManager();

        //create Tunnel Mesh 
        this.createTunnelMesh()

        this.loadingManager.onStart = () => {
            this.setState({ loaded: "10%" })
        }

        this.loadingManager.onProgress = (loaded) => this.determineLoadingPercent(loaded);

        this.loadingManager.onLoad = () => {
            this.setState({ loaded: "100%" })

            setTimeout(() => {
                this.start()
            }, 2200)
        };

    };

    moveCenter = (e) => {
        var halfHeight = window.innerHeight / 2
        var halfWidth = window.innerWidth / 2

        this.mouse.x = e.clientX
        this.mouse.y = e.clientY

        this.mouseFromCenter.x = (e.clientX - halfWidth) / halfWidth
        this.mouseFromCenter.y = (halfHeight - e.clientY) / halfHeight
    }

    start = () => {
        this.setState({
            loadingStart: false
        }, () => this.goForwardStart());
    }

    onMouseMove = function (e) {
        e.preventDefault();
        if (this.state.survey) document.body.style.cursor = "auto";

        const shareMenuItems = document.querySelector('.shareDropdown')

        if (!this.state.about && !this.state.survey && !this.state.rewindEnd && !shareMenuItems) {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(this.mouse, this.camera);
            var intersects = raycaster.intersectObjects(this.scene.children, true);


            if (intersects && intersects.length && intersects[0] && intersects[0].object.material.uniforms.map) {
                const uv = intersects[0].uv;
                const transformed = intersects[0].object.material.uniforms.map.value.transformUv(uv)

                const transformedX = Math.round(transformed.x * 1000)
                const transformedY = Math.round(transformed.y * 1000)

                const image = intersects[0].object.material.uniforms.map.value.image.currentSrc

                this.detectImageForClick(transformedX, transformedY, image)
            }

        }

    }

    onMouseClick = function (e) {
        e.preventDefault();

        const aboutBackground = document.querySelector('div.aboutBackground')
        const aboutContainer = document.getElementById('paragraphFadeIn') || document.getElementById('paragraphFadeOut')
        const modalContainer = document.querySelector('img.tweetImage') || document.querySelector('img.tweetImage_tall') || document.querySelector('p.textArticleModal')
        const incentiveContainer = document.querySelector('div.contributeIncentive');


        if (aboutBackground && aboutBackground === e.target && e.target.tagName !== 'A') {
            this.setState({ about: false })
            return;
        }

        if (!aboutContainer && aboutContainer !== e.target) {
            if (this.state.survey && aboutBackground && aboutBackground === e.target && e.target.tagName !== 'A') {
                this.setState({ about: false })
                return;
            }

            if (!this.state.survey && !this.state.rewindEnd) {
                if (this.state.image && e.target !== modalContainer) {
                    this.setState({ image: '' })
                    return;
                }


                if (modalContainer && modalContainer === e.target) return;


                if ((e.target.tagName === null || e.target.tagName === "CANVAS") && this.state.about) {
                    this.setState({ about: false })
                    return;
                }

                if ((e.target.tagName === "SPAN" || e.target.tagName === "DIV") && !this.state.rewindTriggered) {
                    return;
                }


                if (e.target.tagName !== 'BUTTON' && e.target !== incentiveContainer && e.target.tagName !== 'P') {
                    const rect = this.renderer.domElement.getBoundingClientRect();
                    const left = e.clientX - rect.left;
                    const top = e.clientY - rect.top;

                    const x = (left / rect.width) * 2 - 1;
                    const y = - (top / rect.height) * 2 + 1;

                    raycaster.ray.origin.setFromMatrixPosition(this.camera.matrixWorld);
                    raycaster.ray.direction.set(x, y, 0.5).unproject(this.camera).sub(raycaster.ray.origin).normalize();

                    const intersects = raycaster.intersectObjects(this.scene.children, true);

                    if (intersects[0] && intersects[0].uv && intersects[0].object.material.uniforms.map) {
                        this.setImageUrlForTexture()
                    }
                }
            }

        }
    }

    handleWindowResize = () => {
        if (this.mount !== null) {
            ww = window.innerWidth;
            wh = window.innerHeight;

            this.camera.aspect = ww / wh;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(ww, wh);
        }
    };

    updateDimensions = () => {
        if (this.mount !== null) {
            this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
            this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.render(this.scene, this.camera);
        }
    };

    closeModal = () => {
        this.setState({ image: "" })
    }

    render() {
        return (
            <>
                <Mobile />

                {this.state.about && (
                    <AboutCircle />
                )}

                {
                    this.state.browserBlocker && (
                        <>
                            <div className="browserBlocker">
                                <span> TIME DURING COVID-19 </span>

                                PLEASE SWITCH TO CHROME FOR BEST USER EXPERIENCE
                            </div>
                        </>
                    )
                }

                {
                    this.state.survey && this.state.rewindEnd && !this.state.rewindClicked && (
                        <Draggable>
                            <div className="rewindBackground" >
                                <h1 className="rewindEnd" onClick={() => this.setState({ 'rewindModalClicked': true })}> REWIND </h1>
                                {this.state.rewindModalClicked && (
                                    <>
                                        <div className="rewindWarning">
                                            <span> ARE YOU SURE? EVERYTHING MIGHT START ALL OVER AGAIN. <br /></span>
                                            <span className="rewindWarningAnswers" onClick={this.rewind}>YES&nbsp;&nbsp;</span> <span className="rewindWarningAnswers" onClick={() => this.setState({ 'rewindModalClicked': false })}>&nbsp;&nbsp;NO</span>
                                        </div>
                                    </>
                                )}

                            </div>
                        </Draggable>
                    )
                }


                {
                    this.state.survey && this.state.shareModal && !this.state.rewindClicked && (
                        <Draggable>
                            <div className="shareModal" >
                                <h1 className="share"> SHARE </h1>


                                <div className="socialButtonsModal">
                                    <EmailShareButton url={'https://www.timeduringcovid19.com'} separator={'\n 🔗'} subject={'TIME DURING COVID-19'} body={'A creative website exploring time during COVID-19'} onClick={() => { }}
                                        openShareDialogOnClick>EMAIL</EmailShareButton>
                                    <FacebookShareButton url={"https://www.timeduringcovid19.com"} quote={'TIME DURING COVID-19'} hashtag={'#covid19'}>&nbsp;FACEBOOK&nbsp;</FacebookShareButton>
                                    <TwitterShareButton url={"https://www.timeduringcovid19.com"} title={'TIME DURING COVID-19 \n A creative website exploring time during COVID-19'} hashtags={['covid19', "coolwebsite", 'creativecoding', 'OFFFfestival', 'adobe', 'creativeMentorship']} >&nbsp;TWITTER&nbsp;</TwitterShareButton>
                                </div>


                            </div>
                        </Draggable>
                    )
                }

                {this.state.survey && this.state.surveyOne && !this.state.rewindClicked && (
                    <SurveyOne />
                )}

                {this.state.survey && this.state.surveyTwo && !this.state.rewindClicked && (
                    <SurveyTwo />
                )}

                {this.state.survey && this.state.surveyThree && !this.state.rewindClicked && (
                    <SurveyThree />
                )}

                <span className="title" onClick={this.backwardsForwards}> TIME DURING COVID-19 </span>

                <div className="about">
                    <span onClick={() => this.setState({ about: !this.state.about, paragraph: !this.state.paragraph })}> {!this.state.about ? 'ABOUT' : 'CLOSE'} </span>{!this.state.survey && (<span onClick={this.showContributeText}>&nbsp;|&nbsp;CONTRIBUTE</span>)}&nbsp;|&nbsp;<Share />
                </div>

                {this.state.contributeIncentive && !this.state.survey && (
                    <div className="contributeIncentive backgroundBlur" onClick={this.incentiveClicked}>
                        <p className="scrollToContribute">scroll to the end <br />of the tunnel to contribute </p>
                    </div>
                )}

                <div className="heart">
                    <div className={this.state.burstLike ? `emoji burst` : 'emoji'} onClick={this.addLike}> <span role="img" aria-label="like"> 🖤 </span><span className="likesNum">{this.state.likes}</span></div>
                </div>

                {
                    this.state.loadingStart && !this.state.browserBlocker && (
                        <section className="loadingTitle">
                            TIME DURING COVID-19
                            <span className="loadedNum">{this.state.loaded} LOADED</span>
                        </section>
                    )
                }

                {
                    this.state.image !== '' && (
                        <Modal image={this.state.image} closeModal={this.closeModal} />
                    )
                }

                {!this.state.browserBlocker && (
                    <div
                        id="boardCanvas"
                        ref={(mount) => {
                            this.mount = mount;
                        }}
                        style={{ backgroundColor: "white", width: "100%", height: "100%" }}
                    >

                    </div>

                )}
            </>
        );
    }
}