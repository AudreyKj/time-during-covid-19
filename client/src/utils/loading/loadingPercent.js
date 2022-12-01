export function determineLoadingPercent(loaded) {
    if (loaded === 10) this.setState({ loaded: "20%" })

    if (loaded === 20) this.setState({ loaded: "30%" })

    if (loaded === 30) this.setState({ loaded: "40%" })

    if (loaded === 40) this.setState({ loaded: "50%" })

    if (loaded === 50) this.setState({ loaded: "60%" })

    if (loaded === 60) this.setState({ loaded: "70%" })

    if (loaded === 50) this.setState({ loaded: "80%" })

    if (loaded === 60) this.setState({ loaded: "95%" })

    if (loaded === 64) this.setState({ loaded: "98%" })
}