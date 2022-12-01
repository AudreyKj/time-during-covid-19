export function offset(event){
    this.updatePageTitle();

    let survey = false;

    if (this.camera.position.z < 85.5 && this.state.rewindClicked) {

        if (this.state.rewindClicked) {
            this.setState({ rewindClicked: false })
        }

        if (this.state.rewindModalClicked) {
            this.setState({ rewindModalClicked: false })
        }

        document.querySelector('span.title').style.cursor = 'pointer'
    }

    if (this.camera.position.z >= 85.5 && this.camera.position.z < 86 && !survey && !this.state.rewindClicked) {

        document.querySelector('span.title').style.cursor = 'auto'

        if (!this.state.survey) {
            this.setState({ survey: true })
        }


        if (this.surveyOneID) {
            clearTimeout(this.surveyOneID);
        }

        if (this.surveyTwoID) {
            clearTimeout(this.surveyTwoID);
        }

        if (this.surveyThreeID) {
            clearTimeout(this.surveyThreeID);
        }

        if (this.shareID) {
            clearTimeout(this.shareID);
        }

        if (this.rewindID) {
            clearTimeout(this.rewindID);
        }

        this.surveyOneID = setTimeout(() => {
            this.setState({ surveyOne: true })
        }, 25)

        this.surveyTwoID = setTimeout(() => {
            this.setState({ surveyTwo: true })
        }, 2000)

        this.surveyThreeID = setTimeout(() => {
            this.setState({ surveyThree: true })
        }, 4000)


        this.rewindID = setTimeout(() => {
            this.setState({ rewindEnd: true })

        }, 5000)

        this.shareID = setTimeout(() => {
            this.setState({ shareModal: true })

        }, 6000)

        survey = true
    } else if (this.camera.position.z < 85.5) {

        if (this.state.survey) {
            this.setState({ survey: false })
        }

        if (this.state.surveyOne) {
            this.setState({ surveyOne: false })
        }

        if (this.state.surveyTwo) {
            this.setState({ surveyTwo: false })
        }

        if (this.state.surveyThree) {
            this.setState({ surveyThree: false })
        }

        if (this.state.rewindEnd) {
            this.setState({ rewindEnd: false })
        }


        if (this.state.shareModal) {
            this.setState({ shareModal: false })
        }


        if (this.surveyOneID) {
            clearTimeout(this.surveyOneID);
        }

        if (this.surveyTwoID) {
            clearTimeout(this.surveyTwoID);
        }


        if (this.surveyThreeID) {
            clearTimeout(this.surveyThreeID);
        }

        if (this.rewindID) {
            clearTimeout(this.rewindID);
        }

        if (this.shareID) {
            clearTimeout(this.shareID);
        }


        survey = false
        document.querySelector('span.title').style.cursor = 'pointer'
    }

    if (this.state.about) return;

    let dist = event.deltaY * 0.0024;

    this.camera.position.z += dist;

    this.camera.position.clampScalar(-0.011, 86);

    this.progressiveLoading()

}