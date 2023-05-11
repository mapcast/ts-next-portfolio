
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sunflower } from "next/font/google";

const sunflower = Sunflower({
  subsets: ["latin"], 
  weight: ["500"],
});

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};



export default function SideProjects() {
    return (
        <>
            <div className="project-wrap" id="blockchain">
                <h1 className={sunflower.className}>
                    <span className="title-head">R</span>ust 블록체인 프로젝트
                </h1>
                <div className="slider-wrap">
                    <Slider {...settings}>
                        <div>
                        </div>
                        <div>
                        </div>
                    </Slider>
                </div>
            </div>
            <style jsx>{`
                hr {
                    background: #EEE;
                    height: 1px;
                    width: 83.5vw;
                }

                .project-wrap {
                    width: 95%;
                    height: 98%;
                    padding: 1% 5%;
                }
                .slider-wrap {
                    padding: 2%;
                }
                .title-head {
                    color: #bd5d38
                }
                h1 {
                    font-size: 4rem;
                    margin: 0;
                }
            `}</style>
        </>
        
    );
}