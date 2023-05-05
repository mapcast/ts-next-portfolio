import { Sunflower, Jua, Do_Hyeon } from "next/font/google";

const sunflower = Sunflower({
  subsets: ["latin"], 
  weight: ["500"],
});

const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});

export default function Info() {
  return (
    <div>
      <h1 className={sunflower.className}>조<font color="#bd5d38">현승</font></h1>
      <span className={sunflower.className}>010-6851-7574 · qlqldyd54321@gmail.com</span>
      <p className={dohyeon.className}>
      	2013-03 ~ 2019-02 동의대학교 재학 (주전공: 정보통신공학, 부전공: 일어일문)
      	<br/>
      	2020-02 ~ 2020-08 - 부산IT교육센터 Java 개발자 6개월 과정 수료
      	<br/>
        2020-08 ~ 현재 - Seekers Inc. 재직중
      </p>
      <style jsx>{`

        div {
          padding-top: 22%;
          padding-left: 3%;
        }

        h1 {
          font-size: 6rem;
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        span {
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
