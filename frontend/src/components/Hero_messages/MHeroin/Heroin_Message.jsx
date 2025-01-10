import text_style from "./Heroin_Message.module.css";
function Heroin_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            Heroin Kills More Than Just Dreams
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Trafficking </div>
            or using heroin is illegal under Control of Narcotics Substances Act, 1997
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            Death penalty, life imprisonment, or 2-14 years imprisonment depending on the quantity
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            Heroin destroys lives and lands traffickers on death row
            </div>
        </div>
    );
};

export default Heroin_Message;


