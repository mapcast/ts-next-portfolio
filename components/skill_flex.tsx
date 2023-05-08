import { Skill } from "./skill.tsx";

function SkillItem({ skill: Skill, setModalIsOpen: any, setModalContent: any }) {
    return (
        <>
            <div className="skills-item-wrap">
                <div className="skills-item" onClick={() => {
                    setModalIsOpen(true);
                    setModalContent(skill.modalContent);
                }}>
                    <img src={skill.filesrc} width={skill.img_width} height={skill.img_height}/>
                </div>
            </div>
            <style jsx>
                .skills-item-wrap {
                    width:25%;
                    padding: 2% 5%;
                }
                .skills-item {
                    border: 1px solid #AAA;
                    border-radius: 100%;
                    width:100%;
                    height:100%;
                    cursor: pointer;
                    background: linear-gradient(#EEE, #CCC);
                    display: flex;
                }
                .skills-item:hover {
                    background: #CCC;
                }
                img {
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            </style>
        </>
    );
}


export default function SkillFlex({ skills: any, setModalIsOpen: any, setModalContent: any }) {
    
    return (
        <>
            <div>
                {skills.map((skill) => SkillItem(skill, setModalIsOpen, setModalContent))};
            </div>
            <style jsx>
                div {
                    margin-top: 60px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 33.3%;
                }
            </style>
        </>
    );
}
