import text_style from "./Murder_Message.module.css";
function Murder_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            Taking a Life Ends Two: The Victim’s and Your Own
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Murder </div>
            is punished under Section 302 of the Pakistan Penal Code
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            Death penalty, life imprisonment, or blood money (diyat)
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            Killing someone means losing your freedom or your life
            </div>
        </div>
    );
};

export default Murder_Message;