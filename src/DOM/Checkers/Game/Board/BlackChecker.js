import Image from "../../../../image/black_checker.png"
function BlackChecker({x, y}) {
    return <div className={"checker black"} style={{gridColumn:x, gridRow:y}}>
        <img src={Image} alt={""}/>
    </div>
}
export default BlackChecker;