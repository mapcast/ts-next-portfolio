
import { Do_Hyeon } from "next/font/google";
import { Carousel, Table, Space, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Rust from "../public/icons/rust.png";
import ReactIcon from "../public/icons/reacticon.png";
import SpringBoot from "../public/icons/springboot.png";
import Postgres from "../public/icons/psql.png";
import Node from "../public/icons/node.png";
import JSP from "../public/icons/jsp.png";
import Mysql from "../public/icons/mysql.png";
import Scraper1 from "../public/icons/scraper1.png";
import Next from "../public/icons/next.png";
import Tauri from "../public/icons/tauri_logo_light.svg";
import Selenium from "../public/icons/selenium.png";
import Mongo from "../public/icons/mongolong.png";

import Cucumber1 from "../public/projects/cucumber1.png";
import Cucumber2 from "../public/projects/cucumber2.png";
import Cucumber3 from "../public/projects/cucumber3.png";

import Depassito1 from "../public/projects/depassito1.png";
import Depassito2 from "../public/projects/depassito2.png";

import Blog1 from "../public/projects/blog1.png";
import Blog2 from "../public/projects/blog2.png";
import Blog3 from "../public/projects/blog3.png";
import Blog4 from "../public/projects/blog4.png";

import Connect1 from "../public/projects/connect1.png";
import Connect2 from "../public/projects/connect2.png";
import Connect3 from "../public/projects/connect3.png";
import Connect4 from "../public/projects/connect4.png";
import Connect5 from "../public/projects/connect5.png";

import Chain1 from "../public/projects/chain1.png";
import Chain2 from "../public/projects/chain2.png";

import Fs1 from "../public/projects/fs1.png";
import Fs2 from "../public/projects/fs2.png";
import Fs3 from "../public/projects/fs3.png";
import Fs4 from "../public/projects/fs4.png";
import Fs5 from "../public/projects/fs5.png";
import Link from "next/link";

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
            <div className="project-wrap" id="fs">
                <h1 className={dohyeon.className}>
                    <span className="title-head">파</span>일 공유 시스템    
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left-2">
                            <Carousel autoplay>
                                <div>
                                    <img src={Fs1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Fs2.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Fs3.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Fs4.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Fs5.src} style={contentStyle}></img>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right-2">
                            <span className={dohyeon.className}>
                                TCP 파일 전송 프로그램입니다.
                                <br/><br/>
                                하나의 서버를 파일 전송 서버로 사용하며, 이 프로그램이 해당 서버를 이용하는 클라이언트 역할을 합니다.
                                <br/><br/>
                                디렉토리를 이동해서 파일을 올릴 시 해당 디렉토리에 파일이 저장되며, 
                                저장된 파일은 더블클릭해서 다운로드가 가능합니다.
                                <br/><br/>
                                TCP 파일 전송 로직은 <Link href="https://github.com/lborg019/rust-tcp-file-transfer">rust-tcp-file-transfer</Link>를 참조했습니다.
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={Rust.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Tauri.src} width="50px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="cucumber">
                <h1 className={dohyeon.className}>
                    <span className="title-head">C</span>ucumber
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Cucumber1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Cucumber2.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Cucumber3.src} style={contentStyle}></img>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                Cucumber는 경마 데이터베이스입니다.
                                <br/>
                                셀레니움을 통해 <Link href={"https://www.netkeiba.com"}>넷케이바</Link>에서 경주 데이터를 수집합니다.
                                <br/>
                                <br/>
                                경주 6일 전/1일 전/경주 종료 30분 후 데이터가 갱신 되며,
                                <br/>
                                경주 기록과 경주마의 혈통, 프로필 등 다양한 정보를 열람 가능합니다.
                                <br/>
                                축적된 데이터를 상세하게 검색하는 기능을 지원하고, 
                                <br/>
                                연간 일정과 랭킹 등 다양한 데이터를 가지고 있습니다.
                                <br/>
                                <br/>
                                사용자가 번역 데이터를 직접 제공 가능하며, 한번 저장된 데이터가 계속되서 사용됩니다.
                                <br/>
                                <br/>
                                <Link href={"https://ccb.kr"}>링크</Link>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={SpringBoot.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Selenium.src} width="50px"/>
                        </div>
                        <div className="image-wrap">
                            <img src={Mongo.src} width="50px"/>
                        </div>
                        <div className="image-wrap">
                            <img src={Next.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="depassito">
                <h1 className={dohyeon.className}>
                    <span className="title-head">D</span>epassito
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Depassito1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Depassito2.src} style={contentStyle}></img>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                depassito는, depository + password + despacito의 합성어입니다. 
                                <br/>
                                <br/>
                                이 프로그램은 안전한 패스워드를 만들고 관리해주는 프로그램으로,
                                <br/>
                                랜덤 생성한 패스워드 데이터를 AES256 + base64로 암호화 한 뒤 
                                <br/>
                                rocksdb를 사용해서 저장합니다.
                                <br/>
                                <br/>
                                tauri 프레임워크를 사용해서 작성되었기 때문에, 앱이 가볍습니다.
                                <br/>
                                <br/>
                                <Link href={"https://odri0220.tistory.com/10"}>다운로드 페이지</Link>
                                <br/>
                                <Link href={"https://github.com/mapcast/depassito"}>Github</Link>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="image-wrap">
                            <img src={Rust.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Next.src}/>
                        </div>
                        <div className="image-wrap">
                            <img src={Tauri.src}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrap" id="blog">
                <h1 className={dohyeon.className}>
                    <span className="title-head">개</span>인 블로그
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Blog1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Blog2.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Blog3.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Blog4.src} style={contentStyle}></img>
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
                                <br/>
                                <Link href={"https://github.com/mapcast/transplate-blog"}>github</Link>
                                <br/>
                                <Link href={"https://github.com/mapcast/blog-rest-api"}>github(rest)</Link>
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
            <div className="project-wrap" id="scraper">
                <h1 className={dohyeon.className}>
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
                                <br/>
                                <Link href={"https://github.com/mapcast/auction-crawler"}>github</Link>
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
                <h1 className={dohyeon.className}>
                    <span className="title-head">C</span>hain-Cho
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Chain1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Chain2.src} style={contentStyle}></img>
                                </div>
                            </Carousel>
                        </div>
                        <div className="upper-right">
                            <span className={dohyeon.className}>
                                스마트 포인터나 unsafe rust 등의 실습과 차후 개인적인 사용을 위해 만든 사이드 프로젝트입니다. nightly 버전을 사용합니다.
                                <br/>
                                https://blog.logrocket.com/how-to-build-a-blockchain-in-rust/
                                <br/>
                                등에서 참조한 블록체인 채굴 로직을 사용했으며, 블록 채굴 현황을 P2P 통신으로 공유하고, 하나의 노드가 채굴 완료 시 모든 노드가 동작 중단후 채굴된 블록 정보를 받아서 다시 채굴을 진행하도록 프로그래밍 되어 있습니다. 
                                <br/>
                                <br/>
                                rocksDB를 사용하여 채굴한 블록 정보 등을 저장하고, 프로그램 재기동 시에는 서버에 동작중이 노드가 없을 시 해당 DB의 정보를 사용하여 채굴을 진행합니다.
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
                                <br/>
                                <Link href={"https://github.com/mapcast/chain-cho-v1"}>github</Link>
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
            
            <div className="project-wrap" id="tutor">
                <h1 className={dohyeon.className}>
                    <span className="title-head">과</span>외커넥터
                </h1>
                <div className="project-inner-wrap">
                    <div className="upper">
                        <div className="upper-left">
                            <Carousel autoplay>
                                <div>
                                    <img src={Connect1.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Connect2.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Connect3.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Connect4.src} style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src={Connect5.src} style={contentStyle}></img>
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
                                Cafe24를 통한 웹 호스팅 서비스를 하고 있었으나, 현재 지원 종료 되었습니다.
                                <br/>
                                <br/>
                                <br/>
                                <Link href={"https://github.com/mapcast/tutorConnector"}>github</Link>
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
                }
                .title-head {
                    color: #47A992;
                }

                .upper {
                    display:flex;
                }
                .upper-left {
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

                .upper-left-2 {
                    height: 50vh;
                    width: 30.4vw;
                    border: 3px solid #A0D8B3;
                    display: block;
                }
                .upper-right-2 {
                    width: 40.8vw;
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