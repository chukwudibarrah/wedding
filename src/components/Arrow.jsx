import Lottie from "lottie-react";
import arrow from "../assets/arrow.json";

export default function Arrow() {
    return (
        <Lottie
        className="h-20 w-20"
        animationData={arrow} loop={true} />
    )
}

