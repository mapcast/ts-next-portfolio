import Skill from "@/classes/skill";


function SummaryIcon({ icon }: {icon: Skill}) {
    return (
        <>
            <div className="skills-summary-wrap">
                <div className="skills-summary">
                    <img src={icon._file_src} width={icon._img_width} height={icon._img_height}/>
                </div>
            </div>
            <style jsx>{`
                .skills-summary-wrap {
                    width:10.6%;
                    height: 50%;
                    padding: 1% 3%;
                }
                .skills-summary {
                    width:100%;
                    height:100%;
                    display: flex;
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


export default function SkillSummary({ icons }: {icons: Skill[]}) {
    return (
        <>
            <div className="summary-flex">
                {icons.map((icon, idx) => <SummaryIcon key={idx} icon={icon}/>)}
            </div>
            <style jsx>{`
                .summary-flex {
                    margin-top: 100px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 41%;
                }
            `}</style>
        </>
    );
}
