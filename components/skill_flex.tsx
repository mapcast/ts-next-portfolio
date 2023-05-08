
import { Dispatch, SetStateAction } from "react";
import Skill from "./skill";

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
                    width:19%;
                    height: 40%;
                    padding: 1% 3%;
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
                {skills.map((skill) => <SkillItem key={skill.id} skill={skill} setModalIsOpen={setModalIsOpen} setModalContent={setModalContent}/>)}
            </div>
            <style jsx>{`
                .skills-flex {
                    margin-top: 30px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 80%;
                }
            `}</style>
        </>
    );
}
