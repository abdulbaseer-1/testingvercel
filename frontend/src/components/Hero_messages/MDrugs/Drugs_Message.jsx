import text_style from "./Drugs_Message.module.css";
function Drugs_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            Say No to Opium: Save Lives, Save Futures
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Possession </div>
            or trade of opium is a serious offense under Pakistan's Control of Narcotics Substances Act, 1997
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            7 years imprisonment, a fine, or both
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            Even small quantities can land you in jail
            </div>
        </div>
    );
};

export default Drugs_Message;


