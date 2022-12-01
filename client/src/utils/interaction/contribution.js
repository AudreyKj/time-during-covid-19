export function showContributeText(){
    this.setState({ contributeIncentive: true })

    this.contributeIncentiveID = setTimeout(() => {
        this.setState({ contributeIncentive: false })
    }, 2500)
}

export function incentiveClicked(){
    this.setState({ contributeIncentive: false })

    if (this.contributeIncentiveID) {
        clearTimeout(this.contributeIncentiveID);
    }
}