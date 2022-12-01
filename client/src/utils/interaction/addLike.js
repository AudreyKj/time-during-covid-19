import axios from 'axios';

export function addLike() {
    const previousLike = sessionStorage.getItem('like');
    if (previousLike) return;

    this.setState({ burstLike: true })

    axios.post("/giveLike")
        .then(() => {

            this.setState((prevState) => ({ likes: prevState.likes + 1 }))

            sessionStorage.setItem('like', 'heart');
        })
        .catch(error => console.log("error", error))
}