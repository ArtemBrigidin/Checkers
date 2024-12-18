import Image from "../../../../image/white_checker.png"

function WhiteChecker({x, y}) {
    return <div className={"checker white"} style={{gridColumn:x, gridRow:y}}>
        <img src={Image} alt={""}/>
    </div>
}
export default WhiteChecker;