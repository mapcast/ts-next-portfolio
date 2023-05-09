//https://stackoverflow.com/questions/69287823/react-slick-compatibility-with-nextjs 참조 필요

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Temporary from '../public/cloud.png';
import classNames from "classnames";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function ProjectSlider() {
    return (
        <div className="project-wrap" id="blockchain">
            <h1>
	        	<span className="title-head">R</span>ust 블록체인 프로젝트
	      	</h1>
            <div className="slider-wrap">
                <Slider {...settings}>
                    <div className="carousel-content">
                        <div className="cc-main">
                            <div className="cc-main-image">
                                <img className="cm-Image" src={Temporary.src} />
                            </div>
                            <div className="cc-main-desc">
                                <p>
                                    설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란설명란
                                </p>
                            </div>
                        </div>
                        <div className="cc-bottom">
                            <div className="cb-content">
                                <div className="cb-image-wrap">
                                    <img src={Temporary.src} className="cbc-image" />
                                </div>
                            </div>
                            <div className="cb-content">
                                <div className="cb-image-wrap">
                                    <img src={Temporary.src} className="cbc-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="cc-sub">
                            <div className="carousel-small-item">
                                <div className="li-imagediv">
                                    <img className={classNames('li-image', 'grayborder')} src={Temporary.src} />
                                </div>
                                <p>
                                    DB에 새로운 행을 추가
                                </p>
                            </div>
                            <div className="carousel-small-item">
                                <div className="li-imagediv">
                                    <img className={classNames('li-image', 'grayborder')} src={Temporary.src} />
                                </div>
                                <p>
                                    DB에서 행을 삭제
                                </p>
                            </div>
                        </div>
                        <div className="cc-sub">
                            <div className="carousel-small-item">
                                <div className="li-imagediv">
                                    <img className={classNames('li-image', 'grayborder')} src={Temporary.src} />
                                </div>
                                <p>
                                    검색창에서 d를 검색
                                </p>
                            </div>
                            <div className="carousel-small-item">
                                <div className="li-imagediv">
                                    <img className={classNames('li-image', 'grayborder')} src={Temporary.src} />
                                </div>
                                <p>
                                    DB에서 d가 들어간 행이 조회됨
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            
            <style jsx>{`
                .project-wrap {
                    width: 95%;
                    height: 98%;
                    padding: 1% 5%;
                }
                .slider-wrap {
                    padding: 2%;
                }
                .carousel-content {
                    padding: 0 8%;
                }
                .cc-main {
                    display: flex;
                }
                .cc-main-image {
                    width: 850px;
                    height: 500px;
                }
                .cm-image {
                    width: 100%;
                    height: 100%;
                }
                .cc-main-desc {
                    padding: 2%;
                    width: 350px;
                    height: 500px;
                }
                .cc-bottom {
                    min-width: 1250px;
                    margin-top: 20px;
                    display: flex;
                    text-align: center;
                }
                .cb-head {
                    font-size: 2rem;
                    padding-top: 60px;
                }
                .cb-content {
                    margin-left: 50px;
                }
                .cb-image-wrap {
                    height: 100px;
                    width: 100%;
                    overflow: hidden;
                }
                .cbc-image {
                    width: 150px;
                }
                .cbpadtop {
                    margin-top: 36px;
                }
                .contentPadding {
                    padding: 0 12%;
                }
                .cc-sub {
                    width: 100%;
                    height: 50%;
                    display: flex;
                }
                .carousel-small-item {
                    width: 100%;
                    height: 50%;
                    text-align: center;
                }
                .li-imagediv {
                    width: 100%;
                    height: 320px;
                    padding: 0 10%;
                }
                .li-image {
                    max-width: 100%;
                    height: 320px;
                }
                .bighead {
                    font-size: 5rem;
                }
                .title-head {
                    color: #bd5d38
                }
                h1 {
                    font-size: 4rem;
                    margin: 0;
                }
            `}</style>
        </div>
    );
}
