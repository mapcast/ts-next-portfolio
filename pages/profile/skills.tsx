import Modal from 'react-modal';
import { Do_Hyeon } from "next/font/google";

import springboot from "../../public/springboot.png";
import reacticon from "../../public/react.png";
import sql from "../../public/sql.png";
import java from "../../public/java.png";
import rust from "../../public/rust.png";
import kafka from "../../public/kafka.png";
import elasticsearch from "../../public/elasticsearch.png";
import cloud from "../../public/cloud.png";
import { useState } from 'react';

const dohyeon = Do_Hyeon({
    subsets: ["latin"], 
    weight: ["400"],
});

const modal_style = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.45)",
		zIndex: 10,
	},
	content: {
		display: "flex",
		justifyContent: "center",
		background: "#ffffe7",
		overflow: "auto",
		top: "42vh",
		left: "46vw",
		right: "30vw",
		bottom: "42vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
		zIndex: 10,
	},
};

export default function Skills() {

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [modalContent, setModalContent] = useState(<div>기본상태</div>);

    return (
        <>
            <div className="skills-wrap">
                <Modal 
                    isOpen={modalIsOpen}
                    style={modal_style}
                    ariaHideApp={false}
                    onRequestClose={() => setModalIsOpen(false)}
                >
                    {modalContent}
                </Modal>
                <div className="skills-head">
                    <h1 className={dohyeon.className}>기술 스택</h1>
                    <p className={dohyeon.className}>각 버튼을 클릭하면 상세 내용이 나옵니다.</p>
                </div>
                <div className="skills-flex-horizontal">
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                            setModalContent(
                                <div>
                                    자바
                                </div>
                            );
                        }}>
                            <img className="center-img" src={java.src} width="60%" height="60%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={springboot.src} width="60%" height="35%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={reacticon.src} width="55%" height="60%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={sql.src} width="45%" height="60%"/>
                        </div>
                    </div>
                </div>
                <div className="skills-flex-horizontal">
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={rust.src} width="60%" height="30%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={kafka.src} width="60%" height="35%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={elasticsearch.src} width="80%" height="20%"/>
                        </div>
                    </div>
                    <div className="skills-item-wrap">
                        <div className="skills-item" onClick={() => {
                            setModalIsOpen(true);
                        }}>
                            <img className="center-img" src={cloud.src} width="60%" height="50%"/>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .skills-head {
                    text-align: center;
                }                        

                .skills-wrap {
                    width: 95%;
                    height: 87%;
                    padding: 4% 5%;
                }

                .skills-flex-horizontal {
                    margin-top: 60px;
                    display: flex;
		    flex-wrap: wrap;
                    width: 100%;
                    height: 33.3%;
                }

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

                .center-img {
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </>
    )
}
