import classNames from "classnames";
import { Sunflower, Do_Hyeon } from "next/font/google";

const sunflower = Sunflower({
  subsets: ["latin"], 
  weight: ["700"],
});

const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});

export default function Home() {
  return (
    <div>
      <h1 className={sunflower.className}>조<span className="h1-emp">현승</span></h1>
      <span className={classNames(sunflower.className, 'phone-email')}>010-6851-7574 · qlqldyd54321@gmail.com</span>
      <p className={dohyeon.className}>
      	2013-03 ~ 2019-02 동의대학교 졸업 (주전공: 정보통신공학, 부전공: 일어일문)
      	<br/>
      	2020-02 ~ 2020-08 - 부산IT교육센터 Java 개발자 6개월 과정 수료
      	<br/>
        2020-08 ~ 현재 - Seekers Inc. 재직중
      </p>
      <br/>
      <span className={classNames(sunflower.className)}>※해당 페이지는 1920x1080 해상도에서 정상 작동합니다.</span>
      <br/>
      <span className={classNames(sunflower.className)}>※브라우저 버전에 따라 사이드 프로젝트 페이지가 정상작동 하지 않을 수 있습니다.</span>
      <style jsx>{`

        div {
          padding-top: 19%;
          padding-left: 5%;
        }

        h1 {
          font-size: 6rem;
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .h1-emp {
          color: #47A992;
        }

        .phone-email {
          color: rgb(102, 102, 102);
          font-size: 1.5rem;
        }

        p {
          color: rgb(170, 170, 170);
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  )
}
