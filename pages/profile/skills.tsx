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

import SkillFlex from "../../components/skill_flex";
import Skill from "../../components/skill";

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
		display: "block",
		justifyContent: "center",
		background: "#ffffe7",
		overflow: "auto",
		top: "25vh",
		left: "36vw",
		right: "20.2vw",
		bottom: "17vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
		zIndex: 10,
	},
};

const skills = [
    new Skill(1,
        <> 
            <span>Seekeye</span>
            <ul>
                <li>BCI를 구현해서 Http Request 관련 정보 취득</li>
                <li>전반적인 MVC와 RDBMS를 사용한 데이터 CRUD 구현</li>
            </ul>
            <span>FRIIM</span>
            <ul>
                <li>전반적인 MVC와 RDBMS를 사용한 데이터 CRUD 구현</li>
                <li>RestHighLevelClient를 사용해서 인덱스 매핑 구성/설정 및 다양한 작업 수행.</li>
                <li>AWS/Azure/NCP 등 클라우드 연동 작업</li>
                <li>Quartz 스케줄러를 사용해서 데이터 연동 / 특정 조건에 따라 Email/Slack으로 알람을 보내는 작업 등을 수행</li>
            </ul>
            <span>기타 외주 작업</span>
            <ul>
                <li>전반적인 MVC와 RDBMS를 사용한 데이터 CRUD 구현</li>
            </ul>
        </>,
        java.src, "60%", "60%"),
    new Skill(2,
        <>
            <span>프로젝트 공통</span>
            <ul>
                <li>프로젝트 개발 환경에 맞춰서 yml이나 Spring Security, Filter, Maven Dependency 등을 관리</li>
            </ul>
            <span>React로 작성된 블로그를 Spring boot로 이식</span>
        </>,
        springboot.src, "60%", "35%"),
    new Skill(3,
        <>
            
        </>,
        reacticon.src, "55%", "60%"),
    new Skill(4,
        <>
            <span>Postgre SQL</span>
            <ul>
                <li>Seekers 재직 중 대부분의 프로젝트에서 메인으로 사용</li>
            </ul>
            <span>MySQL</span>
            <ul>
                <li>대학 및 부산IT학원 재학 중 heidi SQL 툴 사용해서 메인으로 사용</li>
            </ul>
            <span>MSSQL</span>
            <ul>
                <li>Seekers 재직 중 일부 외주 프로젝트에서 사용</li>
            </ul>
            <span>Oracle</span>
            <ul>
                <li>독학하면서 사용 경험 있음</li>
            </ul>
        </>,
        sql.src, "45%", "60%"),
    new Skill(5,
        <>
            <span>ChainForest</span>
            <ul>
                <li>암호 해독을 통해 블록이 채굴되는 과정 작성</li>
                <li>libp2p를 통해 블록의 채굴상황 공유</li>
                <li>Rest API를 통해 사용자가 현재 채굴된 블록과 접속 노드의 상황등을 알 수 있도록 함</li>
            </ul>
        </>,
        rust.src, "60%", "30%"),
    new Skill(6,
        <></>,
        kafka.src, "60%", "35%"),
    new Skill(7,
        <>
            <span>Seekeye</span>
            <ul>
                <li>java BCI로 취득한 데이터를 카프카 스트림을 통해서 전송 받은 뒤 Json형태로 만들어서 Elasticsearch 인덱스에 저장</li>
            </ul>
            <span>Friim</span>
            <ul>
                <li>ElasticSearch에 연동된 클라우드 데이터들을 관리</li>
                <li>데이터 검색을 위한 자동 매핑 설정 및 각종 기능을 위해 매일 자동 생성되는 인덱스에 설정 추가</li>
                <li>화면을 통해 ElasticSearch의 AND/OR 조건 검색 기능을 이용할 수 있도록 API 작성</li>
                <li>각종 데이터 데이트 히스토그램 집계 API 작성</li>
            </ul>
        </>,
        elasticsearch.src, "80%", "20%"),
    new Skill(8,
        <>
            <span>FRIIM</span>
            <ul>
                <li>보안 점검 수행을 위해 REST API를 통해 해당 계정의 각종 리소스 정보를 연동하는 작업(AWS, Azure, NCP)</li>
            </ul>
        </>,
        cloud.src, "60%", "50%"),
]

export default function Skills() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

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
                <SkillFlex skills={skills} setModalIsOpen={setModalIsOpen} setModalContent={setModalContent}/>
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
            `}</style>
        </>
    )
}
