import Modal from 'react-modal';
import { Do_Hyeon } from "next/font/google";

import springboot from "../public/icons/springboot.png";
import sql from "../public/icons/sql.png";
import java from "../public/icons/java.png";
import javascript from "../public/icons/javascript.png";
import rust from "../public/icons/rust.png";
import elasticsearch from "../public/icons/elasticsearch.png";
import mongo from "../public/icons/mongo.png";

import database from "../public/icons/database.png";
import typescript from "../public/icons/typescript.png";
import reactredux from "../public/icons/reactredux.png";
import jquery from "../public/icons/jquery.png";
import nextjs from "../public/icons/next.png";
import thymeleaf from "../public/icons/thymeleaf.png";
import htmlcss from "../public/icons/htmlcss.png";
import aws from "../public/icons/aws.png";
import azure from "../public/icons/azure.png";
import psql from "../public/icons/psql.png";
import mysql from "../public/icons/mysql.png";
import mssql from "../public/icons/mssql.png";
import tauri from "../public/icons/tauri_logo_light.svg";

import SkillFlex from "../components/skill_flex";
import Skill from "../classes/skill";

import { useState } from 'react';
import SkillSummary from '@/components/skill_summary';

const dohyeon = Do_Hyeon({
    subsets: ["latin"], 
    weight: ["400"],
});

const modal_style: any = {
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

const skills: Skill[] = [
    new Skill(
        <> 
            <h3>Java</h3>
            <span>
                주력 언어로, 지금까지 대부분 진행한 실무를 Java와 함께 했습니다.
                <br/>
                JAVA 사용 시 사용한 IDE는 이클립스입니다.
            </span>
            <br/>
            <br/>
            <h5>사용 경험</h5>
            <ul>
                <li>RDB와 연동해서 Rest API를 구현하고, 클라이언트에서의 MVC 구성 작성.</li>
                <li>JPA를 중심으로 써왔고, Mapper등의 구조는 사용 경험은 있지만 능숙하지 않음.</li>
                <li>RestHighLevelClient(ElasticSearch)를 사용한 인덱스 매핑 구성/설정 및 검색, 집계 등 다양한 작업 수행.</li>
                <li>AWS와 Azure 등의 클라우드와 연동하는 작업</li>
                <li>Quartz 스케줄러로 데이터 연동 및 Email/Slack 등으로 알람을 보내는 작업</li>
                <li>BCI(Byte Code Instrumentation) 사용 경험</li>
                <li>JWT 인증에 대한 기본적인 지식 보유</li>
            </ul>
        </>,
        java.src, "60%", "60%"),
    new Skill(
        <>
            <h3>Spring Boot</h3>
            <span>
            Java와 마찬가지로, 지금까지 진행한 대부분의 실무를 Spring Boot와 함께 했습니다.
            <br/>
            기본적인 구조 세팅부터 시작해서 Spring Security, Filter, Interceptor 등의 프로젝트 구성에 필요한 대부분의 기능을 사용 할 수 있습니다.
            <br/>
            Thymeleaf를 사용한 화면 작성 경험이 많습니다.
            <br/>
            많이 사용해보진 않았으나, Legacy Spring이나 JSP에 대한 경험도 약간은 있습니다.
            </span>
            <br/>
            <br/>
            <h5>사용 경험</h5>
            <ul>
                <li>약 5개정도의 프로젝트에서 Swagger UI를 사용한 Rest API 구현(JWT 토큰인증 사용) 및 MVC구조 구현, dependency, plugin, Spring Security, Interceptor, Filter등의 설정 관리</li>
                <li>React로 작성했던 개인 블로그 사이드 프로젝트를 이식해서 구현(https://github.com/mapcast/transplate-blog, https://github.com/mapcast/blog-rest-api)</li>
            </ul>
        </>,
        springboot.src, "60%", "35%"),
    new Skill(
        <>
            <h3>JavaScript</h3>
            <span>
            Vanilla Javascript부터 시작해서 JQuery, Express, React 등의 프레임워크를 사용 해봤습니다.
            <br/>
            학원에서는 기본기 단련을 위해 Vanilla Javascript만을 사용하는것을 목표로 했으며,
            <br/>
            회사에서는 Spring BOOT + JQuery를 주로 사용했으나 개인 사이드 프로젝트 등에서는 React 사용을 선호하고 있습니다.
            <br/>
            React의 경우, CRA와 Next.js를 주로 사용하며, 전역 상태관리가 필요한 경우 Redux Toolkit 사용을 선호하는 편입니다.
            <br/>
            TypeScript도 사용 가능합니다.
            <br/>
            IDE는 VS Code와 Atom 등의 사용 경험이 있는데, VS Code 사용을 선호하고 있습니다.
            </span>
            <br/>
            <br/>
            <h5>사용 경험(Vanila, Jquery)</h5>
            <ul>
                <li>학원에서 작성한 모든 과제에서 Vanilla JS 사용.(학원 최종 과제 - https://github.com/mapcast/tutorConnector)</li>
                <li>Spring Boot를 사용한 대부분의 프로젝트에서 JQuery를 사용</li>
            </ul>
            <h5>사용 경험(React, Express)</h5>
            <ul>
                <li>React의 경우 실무에서 사용 경험 1회 있음.(Spring BOOT Rest API를 사용하고, Client를 CRA로 작성. Redux Toolkit 사용)</li>
                <li>사이드 프로젝트로 블로그 구현.(CRA + Express.js Rest API, react-redux 사용)</li>
                <li>해당 포트폴리오 작성(Next.js, TypeScript)</li>
            </ul>
        </>,
        javascript.src, "55%", "60%"),
    new Skill(
        <>
            <h3>DB</h3>
            <h5>Postgre SQL</h5>
            <ul>
                <li>회사와 개인 프로젝트 등에서 가장 빈번한 사용 경험</li>
            </ul>
            <h5>MySQL</h5>
            <ul>
                <li>대학과 학원 재학 중에 주로 사용, 실무에서도 사용 경험 있음</li>
            </ul>
            <h5>MSSQL/Oracle/Tibero</h5>
            <ul>
                <li>실무 중 일부 외주 프로젝트에서 사용 경험 있음</li>
            </ul>
            <h5>Elasticsearch</h5>
            <ul>
                <li>실무에서 많이 사용. 주로 RestHighLevelclient를 사용해서 관리했지만, RawQuery 작성도 가능.</li>
            </ul>
        </>,
        database.src, "60%", "55%"),
    new Skill(
	    <>
            <h3>Rust</h3>
            <span>
            스마트 포인터같은 고급 기능을 제외한 대부분의 일반 기능을 습득해서 사용 가능한 정도입니다.
            <br/>
            독학으로 배웠고, 직장에서도 사용한 경험이 있습니다.
            </span>
            <br/>
            <br/>
            <h5>사용 경험</h5>
            <ul>
                <li>Window/Linux 취약점 진단 프로그램 작성</li>
                <li>
                    chain-cho-v1(https://github.com/mapcast/chain-cho-v1)
                    <br/>
                    https://blog.logrocket.com/how-to-build-a-blockchain-in-rust/ 등의 페이지 등을 참조해서 블록 채굴 프로그램을 작성하고, libp2p를 사용해서 p2p통신으로 여러명이 동시에 채굴 작업을 하는 것을 구현.
                    <br/>
                    tower-web을 사용한 REST API 작성    
                </li>
                <li>
                    auction-crawler(https://github.com/mapcast/auction-crawler)
                    <br/>
                    법원경매 사이트(https://www.courtauction.go.kr/)의 데이터를 읽어서 전국의 경매 물건을 스크래핑 한뒤 PSQL DB에 삽입하는 프로그램 작성(차후 사이드 프로젝트에서 사용할 용도)
                </li>
            </ul>
        </>,
        rust.src, "60%", "30%"),
]

const icons: Skill[] = [
    new Skill(<></>, jquery.src, "100%", "20%"),
    new Skill(<></>, typescript.src, "70%", "70%"),
    new Skill(<></>, reactredux.src, "100%", "35%"),
    new Skill(<></>, nextjs.src, "90%", "45%"),
    new Skill(<></>, tauri.src, "90%", "30%"),
    new Skill(<></>, htmlcss.src, "100%", "60%"),
    new Skill(<></>, thymeleaf.src, "60%", "60%"),
    new Skill(<></>, psql.src, "100%", "35%"),
    new Skill(<></>, mysql.src, "80%", "80%"),
    new Skill(<></>, mssql.src, "70%", "65%"),
    new Skill(<></>, elasticsearch.src, "100%", "22%"),
    new Skill(<></>, mongo.src, "80%", "80%"),
    new Skill(<></>, aws.src, "80%", "50%"),
    new Skill(<></>, azure.src, "90%", "50%"),
];

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
                <SkillSummary icons={icons}/>
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

                .etc-head {
                    margin-top: 50px;
                    text-align: center;
                }

            `}</style>
        </>
    )
}
