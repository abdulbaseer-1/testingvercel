import text_style from "./Rape_Message.module.css";
function Rape_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            No Excuse for Abuse: Fight Against Rape
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Rape </div>
            is a heinous crime punishable under the Pakistan Penal Code (Section 376).
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            Death penalty, life imprisonment, or 25 years imprisonment.
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            This crime brings shame, disgrace, and severe punishment.
            </div>
        </div>
    );
};

export default Rape_Message;