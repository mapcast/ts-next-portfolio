import Modal from 'react-modal';
import { Do_Hyeon } from "next/font/google";

import springboot from "../public/icons/springboot.png";
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
import redis from "../public/icons/redis.png";
import kafka from "../public/icons/kafka.png";
import selenium from "../public/icons/selenium.png";
import python from "../public/icons/python.png";

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
		background: "#D6E8DB",
		overflow: "auto",
		top: "33vh",
		left: "42.8vw",
		right: "22.2vw",
		bottom: "25vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
		zIndex: 10,
	},
};

const skills: Skill[] = [
    new Skill(
        <> 
            <h3 style={{textAlign: 'center'}}>Java</h3>
            <ul>
                <li style={{marginTop: '5px'}}>Java8에서 사용하는 기본적인 문법 대부분 숙지, 17버전도 학습 중</li>
                <li style={{marginTop: '5px'}}>Java.lang 하위 패키지 내용을 전반적으로 숙지하고 있고 필요에 따라 유연한 사용이 가능</li>
                <li style={{marginTop: '5px'}}>다양한 Collection을 필요에 따라 사용</li>
                <li style={{marginTop: '5px'}}>기본적인 Stream 처리 숙지</li>
            </ul>
        </>,
        java.src, "60%", "60%"),
    new Skill(
        <>
            <h3 style={{textAlign: 'center'}}>Spring Boot</h3>
            <ul>
                <li style={{marginTop: '5px'}}>Spring Security 등의 설정 구성</li>
                <li style={{marginTop: '5px'}}>Swagger UI로 Rest API 문서화</li>
                <li style={{marginTop: '5px'}}>JpaRepository, CrudRepository, MongoClient 등의 데이터베이스 연동</li>
                <li style={{marginTop: '5px'}}>ElasticSearch RestHighLevelClient</li>
                <li style={{marginTop: '5px'}}>AWS와 Azure 등의 클라우드 연동 작업</li>
                <li style={{marginTop: '5px'}}>Quartz 스케줄러</li>
                <li style={{marginTop: '5px'}}>Kafka 연동 및 Stream 처리 작성</li>
                <li style={{marginTop: '5px'}}>Selenium으로 웹 스크래퍼 작성</li>
            </ul>
        </>,
        springboot.src, "60%", "35%"),
    new Skill(
        <>
            <h3 style={{textAlign: 'center'}}>JavaScript</h3>
            <ul>
                <li style={{marginTop: '5px'}}>Jquery 실무 경험 많음</li>
                <li style={{marginTop: '5px'}}>React.js, Next.js 실무 경험</li>
                <li style={{marginTop: '5px'}}>TypeScript 사용 가능</li>
                <li style={{marginTop: '5px'}}>D3, ApexChart 등 시각화 라이브러리 사용 경험</li>
            </ul>
        </>,
        javascript.src, "55%", "60%"),
    new Skill(
        <>
            <h3 style={{textAlign: 'center'}}>DB</h3>
            <ul>
                <li style={{marginTop: '5px'}}>Postgre SQL(최다 사용 경험)</li>
                <li style={{marginTop: '5px'}}>MySQL, Oracle, Tibero, Sql Server 등 연동 및 사용경험 있음</li>
                <li style={{marginTop: '5px'}}>MongoDB, Cassandra 등 NoSQL로 분류되는 데이터베이스 사용 경험</li>
                <li style={{marginTop: '5px'}}>ElasticSearch 사용 경험 많음</li>
            </ul>
        </>,
        database.src, "60%", "55%"),
    new Skill(
	    <>
            <h3 style={{textAlign: 'center'}}>Rust</h3>
            <ul>
                <li style={{marginTop: '5px'}}>unsafe처리 등의 고급 기능 외의 문법은 대부분 사용 가능</li>
                <li style={{marginTop: '5px'}}>tokio, async std에 대한 이해</li>
                <li style={{marginTop: '5px'}}>Rocket, Actix-Web, Tower Web, Warp 등 다양한 Rest API 라이브러리 사용 경험</li>
                <li style={{marginTop: '5px'}}>각종 사이드 프로젝트에서 tauri 어플리케이션 작성</li>
                <li style={{marginTop: '5px'}}>ebpf 관련 라이브러리 사용 경험</li>
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
    new Skill(<></>, redis.src, "70%", "70%"),
    new Skill(<></>, kafka.src, "90%", "50%"),
    new Skill(<></>, selenium.src, "100%", "25%"),
    new Skill(<></>, python.src, "100%", "75%"),
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
