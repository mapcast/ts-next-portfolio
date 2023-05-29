
import { Dispatch, SetStateAction } from "react";
import Skill from "../classes/skill";

function SkillItem({ skill, setModalIsOpen, setModalContent }: {skill: Skill, setModalIsOpen: Dispatch<SetStateAction<boolean>>, setModalContent: Dispatch<SetStateAction<JSX.Element>>}) {
    return (
        <>
            <div className="skills-item-wrap">
                <div className="skills-item" onClick={() => {
                    setModalIsOpen(true);
                    setModalContent(skill.modal_content);
                }}>
                    <img src={skill.file_src} width={skill.img_width} height={skill.img_height}/>
                </div>
            </div>
            <style jsx>{`
                .skills-item-wrap {
                    width: 8vw;
                    height: 100%;
                    padding: 2vh 3.5vw;
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
            `}</style>
        </>
        
    );
}


export default function SkillFlex({ skills, setModalIsOpen, setModalContent }: {skills: Skill[], setModalIsOpen: Dispatch<SetStateAction<boolean>>, setModalContent: Dispatch<SetStateAction<JSX.Element>>}) {
    return (
        <>
            <div className="skills-flex">
                {skills.map((skill, idx) => <SkillItem key={idx} skill={skill} setModalIsOpen={setModalIsOpen} setModalContent={setModalContent}/>)}
            </div>
            <style jsx>{`
                .skills-flex {
                    margin-top: 40px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 18%;
                    
                }
            `}</style>
        </>
    );
}
