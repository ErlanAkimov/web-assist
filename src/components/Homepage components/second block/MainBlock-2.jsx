import styles from './mainblock2.module.scss'
import Image from "next/image";
import Link from "next/link";

const MainBlock_2= () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.colored}>
                <h1 className={styles.title}>Landing page</h1>
                <p className={styles.subtitle}>Продающий одностраничный сайт с высокой конверсией</p>
                <ul className={styles.checkpoints}>
                    <li className={styles.item}>Стильный современный дизайн</li>
                    <li className={styles.item}>Адаптивность под мобильные устройства</li>
                    <li className={styles.item}>Валидная верстка по стандартам W3C</li>
                    <li className={styles.item}>Семантически правильная структура сайта</li>
                    <li className={styles.item}>Подключение Яндекс.Метрики и Google Ananlytics</li>
                    <li className={styles.item}>Помощь с размещением сайта</li>
                    <li className={styles.item}>Эксплуатационное сопровождение</li>
                </ul>
                
                <div className={styles.last_line}>
                    <Link href="/landing" ><button className={styles.btn}>Подробнее</button></Link>
                    <span className={styles.cost}>от 2000 руб.</span>
                </div>
            </div>

            <div className={styles.landings}>
                <Image src='/landing img.png' alt="landings" width={520} height={519}/>
            </div>
        </div>
    )
}

export default MainBlock_2;