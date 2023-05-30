import classNames from 'classnames'
import profile from '../public/hs5.jpg';
import Link from 'next/link'
import { Gugi, Black_Han_Sans } from "next/font/google";

const gugi = Gugi({
  subsets: ["latin"], 
  weight: ["400"],
});

const bhs = Black_Han_Sans({
  subsets: ["latin"], 
  weight: ["400"],
});

export default function SideNav() {
  return (
    <>
      <nav>
        <span className="profile-image-wrap">
        <img src={profile.src} alt=""/>
        </span>
        <div className="side-menu-wrap">
        <ul>
            <li>
                <div className={classNames("side-menu-category",  gugi.className)}>프로필</div>
            </li>
            <li>
                <Link href="/" legacyBehavior>
                    <a className={bhs.className}>경력</a>
                </Link>
            </li>
            <li>
                <Link href="/skills" legacyBehavior>
                    <a className={bhs.className}>기술</a>
                </Link>
            </li>
            <li>
                <div className={classNames("side-menu-category",  gugi.className)}>사이드 프로젝트</div>
            </li>
            <li>
                <Link href="/projects/#blog" legacyBehavior>
                    <a className={bhs.className}>개인 블로그</a>
                </Link>
            </li>
            <li>
                <Link href="/projects/#scraper" legacyBehavior>
                    <a className={bhs.className}>법원경매 스크래퍼</a>
                </Link>
            </li>
            <li>
                <Link href="/projects/#chain" legacyBehavior>
                    <a className={bhs.className}>Chain-Cho</a>
                </Link>
            </li>
            <li>
                <Link href="/projects/#tutor" legacyBehavior>
                    <a className={bhs.className}>과외커넥터</a>
                </Link>
            </li>
            <li>
                <Link href="/projects/#es" legacyBehavior>
                    <a className={bhs.className}>ES-API</a>
                </Link>
            </li>
        </ul>
        </div>
    </nav>
    <style jsx>{`
        nav {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 2rem 3.3rem;
            padding-top:8rem;
            padding-bottom:11rem;
            border-right:4px solid #DDDDDD;
            z-index: 9;
            background-color: rgb(248, 132, 92);
            position: fixed;
            top: 0px;
            right: 0px;
            left: 0px;
            z-index: 1030;
            justify-content: flex-start;
            flex-flow: row nowrap;
            text-align: center;
            position: fixed;
            flex-direction: column;
            width: 12rem;
            height: 100vh;
        }

        img {
            max-width: 100%;
            max-height: 10rem;
            border: 0.5rem solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            height: auto;
        }

        .profile-img-wrap {
            display: block !important;
        }

        .side-menu-wrap {
            align-items: flex-start;
            flex-grow: 0;
            width: 100%;
            margin-bottom: auto;
            display: flex;
            flex-basis: auto;
        }

        ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }

        li {
            display: block;
            text-align: -webkit-match-parent;
        }

        .side-menu-category {
            color: rgb(17, 17, 17);
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 1.2rem;
            display: block;
            cursor: default;
        }

        a {
            display: block;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.5);
            text-decoration: none;
            padding: 0.5rem 1rem;
        }

        a:hover, a:focus {
            color: rgba(0, 0, 0, 0.7);
        }
    `}</style>
    </>
  )
}