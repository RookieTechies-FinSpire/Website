'use client'

import styles from "../../../public/styles/home.module.css";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function HeroSection() {
    const { user } = UserAuth();
    return (
        <section className={styles.hero}>
            <Image src={"/images/hero/heroBackgroundBottom.svg"} alt="background" width="300" height="300" className={"absolute left-0 bottom-0 "} />
            <Image src={"/images/hero/heroBackgroundTop.svg"} alt="background" width="300" height="300" className="absolute right-0 top-0" />
            <div className={styles.content}>
                <div className={styles.hero_text_content}>
                    <h1 className={styles.hero_title}>Empowering Your Financial Future</h1>
                    <p className={styles.hero_secondary}>&apos;Welcome to our fintech platform! We specialize in harnessing AI and NLP technology to decode financial narratives, offering personalized investment insights. Join us in navigating the complexities of the market with confidence and clarity.&apos;</p>
                    <Link href={(user) ? "/chat" : "/signin"}><button className={"uppercase " + styles.try_now}><span>Try Now</span></button></Link>
                </div>
                <Image src={"/images/hero/heroSection.svg"} alt="hero" width="325" height="325" />
            </div>
        </section>
    )
}