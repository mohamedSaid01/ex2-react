import './Boutton.css'

function Boutton({textColor, bgColor, colorBorder='grey', buttonText}){
    return(
            <form action="" >
                <input type="submit" style={{backgroundColor: bgColor , color:textColor, borderColor:colorBorder}} value={buttonText} />
            </form>
    )
}

export default Boutton