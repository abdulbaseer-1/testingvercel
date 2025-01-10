import text_style from "./Disruption_Message.module.css";
function Disruption_Message() {
    return(
        <div className={text_style.hero_message}>
            <div className={text_style.title}> {/*title */}
            Order Over Chaos: Respect Public Peace
            </div>
            <div className={text_style.content}> {/*content */}
            <div className={text_style.heading}>Creating </div>
            disturbances in public spaces, such as unlawful assemblies, blocking roads, or inciting violence, is a crime under Sections 341 and 431 of the Pakistan Penal Code
            </div>
            <div className={text_style.consequences}> {/*consequences */}
            <div className={text_style.heading}>Consequences: </div>
            imprisonment of up to 3 months, fines, or both, depending on the severity of the act
            </div>
            <div className={text_style.warning}> {/*warning */}
            <div className={text_style.heading}>Warning: </div>
            Disrupting public peace can lead to arrest, legal action, and a criminal record
            </div>
        </div>
    );
};

export default Disruption_Message;