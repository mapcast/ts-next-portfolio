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
import Skill from "../../classes/skill";

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
            <h3>Java</h3>
	    <span>
		    주력 언어로, 지금까지 대부분 진행한 실무를 Java와 함께 했습니다.
		    <br/>
		    JAVA 사용 시 사용한 IDE는 이클립스입니다.
	    </span>
	    <span>사용 경험</span>
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
    new Skill(2,
        <>
            <h3>Java</h3>
	    <span>
		Java와 마찬가지로, 지금까지 진행한 대부분의 실무를 Spring Boot와 함께 했습니다.
		<br/>
		기본적인 구조 세팅부터 시작해서 Spring Security, Filter, Interceptor 등의 프로젝트 구성에 필요한 대부분의 기능을 사용 할 수 있습니다.
		<br/>
		Thymeleaf를 사용한 화면 작성 경험이 많습니다.
		<br/>
		많이 사용해보진 않았으나, Legacy Spring이나 JSP에 대한 경험도 약간은 있습니다.
	    </span>
	    <span>사용 경험</span>
            <ul>
                <li>약 5개정도의 프로젝트에서 Swagger UI를 사용한 Rest API 구현(JWT 토큰인증 사용) 및 MVC구조 구현, dependency, plugin, Spring Security, Interceptor, Filter등의 설정 관리</li>
                <li>React로 작성했던 개인 블로그 사이드 프로젝트를 이식해서 구현(https://github.com/mapcast/transplate-blog, https://github.com/mapcast/blog-rest-api)</li>
            </ul>
        </>,
        springboot.src, "60%", "35%"),
    new Skill(3,
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
	    <span>사용 경험(Vanila, Jquery)</span>
            <ul>
                <li>학원에서 작성한 모든 과제에서 Vanilla JS 사용.(학원 최종 과제 - https://github.com/mapcast/tutorConnector)</li>
                <li>Spring Boot를 사용한 대부분의 프로젝트에서 JQuery를 사용</li>
            </ul>
	    <span>사용 경험(React, Express)</span>
            <ul>
                <li>React의 경우 실무에서 사용 경험 1회 있음.(Spring BOOT Rest API를 사용하고, Client를 CRA로 작성. Redux Toolkit 사용)</li>
                <li>사이드 프로젝트로 블로그 구현.(CRA + Express.js Rest API, react-redux 사용)</li>
		<li>해당 포트폴리오 작성(Next.js, TypeScript)</li>
            </ul>
        </>,
        reacticon.src, "55%", "60%"),
    new Skill(4,
        <>
            <span>Postgre SQL</span>
            <ul>
                <li>회사와 개인 프로젝트 등에서 가장 빈번한 사용 경험</li>
            </ul>
            <span>MySQL</span>
            <ul>
                <li>대학과 학원 재학 중에 주로 사용, 실무에서도 사용 경험 있음</li>
            </ul>
            <span>MSSQL/Oracle/Tibero</span>
            <ul>
                <li>실무 중 일부 외주 프로젝트에서 사용 경험 있음</li>
            </ul>
        </>,
        sql.src, "45%", "60%"),
    new Skill(5,
	<>
            <h3>Rust</h3>
	    <span>
		스마트 포인터같은 고급 기능을 제외한 대부분의 일반 기능을 습득해서 사용 가능한 정도입니다.
		<br/>
		독학으로 배웠고, 직장에서도 사용한 경험이 있습니다.
	    </span>
	    <span>사용 경험</span>
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
    new Skill(6,
        <>
            <h3>Kafka</h3>
	    <span>
		실무에서 Kafka Stream을 사용해서 ElasticSearch에 데이터를 넘기는 용도로 사용했습니다.
		<br/>
		zookeeper + kafka 기동과 topic간의 데이터 이동 등, 간단한 정도의 조작을 다룰 수 있습니다.
	    </span>
        </>,
        kafka.src, "60%", "35%"),
    new Skill(7,
        <>
            <h3>Elasticsearch</h3>
	    <span>
		주로 RestHighLevelclient를 사용해서 관리했지만, RawQuery 작성도 가능합니다.
		<br/>
		실무 사용 경험이 많기 때문에 기본적인 설정들에 대해 알고 있고, RawQuery와 RestHighLevelClient 양쪽에서 복잡한 집계쿼리나 Nested 조건검색 API 등을 작성 할 수 있습니다.
	    </span>
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
