function SkillItem({ skill: any, setModalIsOpen: any, setModalContent: any }) {
    return (
        <div className="skills-item-wrap">
            <div className="skills-item" onClick={() => {
                setModalIsOpen(true);
                setModalContent(skill.modalContent);
            }}>
                <img className="center-img" src={skill.filesrc} width={skill.img_width} height={skill.img_height}/>
            </div>
        </div>
    );
}


export default function SkillFlex({ skills: any, setModalIsOpen: any, setModalContent: any }) {
    
    return (
        <>
            <div className="skills-flex-horizontal">
                {skills.map((skill) => SkillItem(skill, setModalIsOpen, setModalContent))};
            </div>
        </>
    );
}
