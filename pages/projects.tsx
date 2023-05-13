
import { Sunflower, Do_Hyeon } from "next/font/google";
import { Carousel, Table, Space, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Rust from "../public/rust.png";
import ReactIcon from "../public/reacticon.png";
import SpringBoot from "../public/springboot.png";
import Postgres from "../public/psql.png";
import Node from "../public/node.png";
import JSP from "../public/jsp.png";
import Mysql from "../public/mysql.png";
import Next from "../public/next.png";
import Elastic from "../public/elasticsearch.png";
import Scraper1 from "../public/scraper1.png";

const sunflower = Sunflower({
    subsets: ["latin"], 
    weight: ["500"],
});

const dohyeon = Do_Hyeon({
    subsets: ["latin"], 
    weight: ["400"],
});

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '50vh',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    background: '##fafafa',
};

interface DataType {
    key: string;
    kor_id: string;
    court: string;
    category: string;
    address: string;
    starting_price: string;
};
  
const columns: ColumnsType<DataType> = [
    {
        title: 'kor_id',
        dataIndex: 'kor_id',
        key: 'kor_id',
    },
    {
        title: 'court',
        dataIndex: 'court',
        key: 'court',
    },
    {
        title: 'category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'starting_price',
        dataIndex: 'starting_price',
        key: 'starting_price',
    },
];
const data: DataType[] = [
    {
        key: '1',
        kor_id: '2018타경6939',
        court: '서울중앙지방법원',
        category: '기타',
        address: '서울특별시 중구 퇴계로 217, 4층10호',
        starting_price: '252000000',
    },
    {
        key: '2',
        kor_id: '2022타경3579',
        court: '서울중앙지방법원',
        category: '아파트',
        address: '서울특별시 관악구 남부순환로166길 90, 3층304호 (신림동,에셀비전21아파트)',
        starting_price: '670552000',
    },
    {
        key: '3',
        kor_id: '2022타경103561',
        court: '서울중앙지방법원',
        category: '기타',
        address: '서울특별시 중구 남창동 31-27',
        starting_price: '0',
    },
    {
        key: '4',
        kor_id: '2018타경8351',
        court: '서울남부지방법원',
        category: '근린시설',
        address: '서울특별시 강서구 화곡로53길 62',
        starting_price: '0',
    },
    {
        key: '5',
        kor_id: '2021타경103960',
        court: '서울중앙지방법원',
        category: '다세대',
        address: '서울특별시 관악구 신림로11길 123-8, 2층202호',
        starting_price: '0',
    },
    {
        key: '6',
        kor_id: '2022타경3043',
        court: '서울중앙지방법원',
        category: '상가',
        address: '서울특별시 중구 소월로 3, 지하1층 270호',
        starting_price: '0',
    },
];

export default function SideProjects() {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <>
            <div className="project-wrap" id="scraper">
                <h1 className={sunflower.className}>
                    <span className="title-head">법</span>원경매 스크래퍼
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Scraper1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <div style={contentStyle}>
                                        <Table columns={columns} dataSource={data} />
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                auction-crawler 차후 제작할 웹 어플리케이션 사이드 프로젝트를 위해 제작한 웹 스크래핑 도구입니다. 
                                <br/>
                                <br/>
                                최소한의 부하를 주는 건전한 스크래핑을 위해 24시간에 한번, 법원경매(https://www.courtauction.go.kr/) 사이트에서 14일 후에 진행 되는 전국 경매물건 목록을 가져 온 뒤 psql db에 저장합니다.
                                <br/> 
                                <br/>
                                사용 라이브러리
                                <ul>
                                    <li>reqwest (https://crates.io/crates/reqwest)</li>
                                    <li>scraper (https://crates.io/crates/scraper)</li>
                                    <li>loa (https://crates.io/crates/loa, 코드 일부만 참조)</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={Rust.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="chain">
                <h1 className={sunflower.className}>
                    <span className="title-head">C</span>hain-Cho
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Rust.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                            스마트 포인터나 unsafe rust 등의 실습과 차후 개인적인 사용을 위해 만든 사이드 프로젝트입니다. nightly 버전을 사용합니다.
                            <br/>
                            <br/>
                            https://blog.logrocket.com/how-to-build-a-blockchain-in-rust/
                            <br/>
                            등에서 참조한 블록체인 채굴 로직을 사용했으며, 블록 채굴 현황을 P2P 통신으로 공유하도록 작성돼었습니다. 
                            <br/>
                            <br/>
                            tower-web을 통한 rest api 기능을 지원합니다.
                            <br/>
                            채굴한 블록과 접속해있는 피어 등을 확인 가능합니다.
                            <br/>
                            <br/>
                            사용 라이브러리
                            <ul>
                                <li>libp2p (https://crates.io/crates/libp2p)</li>
                                <li>tower-web (https://crates.io/crates/tower-web)</li>
                                <li>rocks (https://crates.io/crates/rocks)</li>
                            </ul>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={Rust.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="blog">
                <h1 className={sunflower.className}>
                    <span className="title-head">개</span>인 블로그
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Rust.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                리액트를 처음 배울때 실습용으로 만든 웹 어플리케이션입니다.
                                <br/>
                                <br/>
                                CRA와 react-redux를 사용했고 백엔드는 express.js로 작성했습니다.
                                <br/>
                                <br/>
                                해당 프로젝트는 차후 Spring Boot로 이식 돼었고,
                                <br/>
                                Spring Security를 통한 권한 별 접근 제어, JWT 토큰 인증 등의 기능이 추가돼었습니다.
                                <br/>
                                또한, Rest API를 독립시켜서 Swagger UI를 적용했습니다.
                                <br/>
                                <br/>
                                사용 라이브러리
                                <ul>
                                    <li>jjwt (https://github.com/jwtk/jjwt)</li>
                                    <li>ckeditor (https://ckeditor.com/)</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={ReactIcon.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Node.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={SpringBoot.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Postgres.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="tutor">
                <h1 className={sunflower.className}>
                    <span className="title-head">과</span>외커넥터
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Rust.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                부산IT학원 재학 중 작성한 팀 프로젝트로, 과외 선생님과 학생의 1:1 매칭을 도와주는 JSP 웹 어플리케이션입니다.
                                <br/>
                                <br/>
                                다중 조건/다중 항목 검색과 랜덤 추천, 개인 페이지 조회, 1:1 채팅 등의 기능이 있습니다.
                                <br/>
                                <br/>
                                Cafe24를 통한 웹 호스팅 서비스를 하고 있었으나, 현재 지원 종료돼었습니다.
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={JSP.src} width="150px"/>
                        </div>
                        <div className="image-wrap">
                            <img src={Mysql.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="es">
                <h1 className={sunflower.className}>
                    <span className="title-head">E</span>lasticsearch-API
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Rust.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                ElasticSearch의 복잡한 Nested Search 쿼리나 집계 쿼리를 간단하게 사용할 수 있게 해주는 Rest API입니다.
                                <br/>
                                <br/>
                                아직은 개발 진행 중입니다.
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={Elastic.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={SpringBoot.src}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                hr {
                    background: #EEE;
                    height: 1px;
                    width: 83.5vw;
                }

                .project-wrap {
                    width: 76.2vw;
                    height: 96.6vh;
                    padding: 1% 5%;
                    border-bottom: 4px solid #DDDDDD;
                }
                .project-inner-wrap {
                    padding: 2%;
                    border-radius : 6px;
                    margin-top: 2vh;
                    box-shadow: 5px 3px 3px #BBB;
                    background: #D6E8DB;
                    border: 3px #A6B8AB;
                }
                .title-head {
                    color: #bd5d38
                }

                .upper {
                    display:flex;
                }
                .upper-left{
                    height: 50vh;
                    width: 40vw;
                    border: 3px solid #A0D8B3;
                    display: block;
                }
                .upper-right {
                    width: 31.2vw;
                    margin-left: 1.5vw;
                    border: 1px solid #A0D8B3;
                    border-radius: 8px;
                    background: #E6F9EC;
                    padding: 2vh 2vw;
                    font-size: 15 px;
                    color: #444;
                }
                .lower {
                    margin-top: 2vh;
                    height: 25vh;
                    border-radius: 8px;
                    display: flex;
                }
                .image-wrap {
                    height: 220px;
                    width: 20%;
                    padding: 0 2%;
                    line-height: 220px;
                }
                .image-wrap img {
                    width:96%;
                    vertical-align:middle;
                }
                
                h1 {
                    font-size: 4rem;
                    margin: 0;
                    cursor: default;
                }
            `}</style>
        </>
        
    );
}