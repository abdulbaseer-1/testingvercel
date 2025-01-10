import text_style from "./Cybercrime_Message.module.css";
function Cybercrime_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            Stay Smart, Stay Safe: Stop Cybercrime
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Under </div>
            the Prevention of Electronic Crimes Act, 2016, cybercrimes have strict penalties
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            Up to 7 years imprisonment, fines up to Rs. 10 million, or both
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            Cybercrime can ruin reputations, careers, and finances
            </div>
        </div>
    );
};

export default Cybercrime_Message;


