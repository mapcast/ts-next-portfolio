import ProjectSlider from "@/components/project_slider";


export default function SideProjects() {
    return (
        <>
            <ProjectSlider/>
            <hr/>
            <ProjectSlider/>
            <style jsx>{`
                hr {
                    background: #EEE;
                    height: 1px;
                    width: 83.5vw;
                }
            `}</style>
        </>
        
    );
}