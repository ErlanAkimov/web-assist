import { NextPage } from 'next';
import Layout from '@/components/layout/layout';
import styles from '../styles/landing.module.scss';
import Image from 'next/image';
import React from 'react';

const garanties = [
    'Семантически правильную структуру сайта',
    'Адаптацию под планшеты, смартфоны и широкие экраны',
    'Подключение к Яндекс.Метрика и Google Analytics',
    'Кроссбраузерность сайта',
    'Грамотный UI/UX',
    'Поддержку при регистрации доменного имени',
    'Помощь с публикацией сайта в сети',
    'Установка бесплатного SSL сертификата',
]
const LandingPage: NextPage = () => {

    return (
        <Layout title='Landing' description='web-assist знает, как правильно спроектировать landing page, чтобы получить максимальную конверсию. Переходите на сайте и убедитесь в этом сами'>
            <div>
                <main className="wrapper">
                    <div className={styles.wrapper_inner}>
                        <div className={styles.l_side}>
                            <div className={styles.main_img_block}>
                                <Image priority={true} className={styles.main_image} src="/landing.webp" alt="landing-page" width={420} height={840} />
                            </div >
                        </div>


                        <div className={styles.textSide}>
                            <h1 className={styles.title}>Создание лендинга от 2000 руб.</h1>

                            <div className={styles.benefits}>
                                <div className={styles.benefit}>
                                    Быстро
                                </div>
                                <div className={styles.benefit}>
                                    Качественно
                                </div>
                                <div className={styles.benefit}>
                                    Недорого
                                </div>
                            </div>

                            <p className={styles.subtitle}>
                                Landing page - это одностраничный сайт, который конвертирует посетителя в потенциального покупателя.
                                Лэндинги прекрасно подходят для продаж определенных товаров и услуг.
                            </p>

                            <p className={styles.subtitle}>
                                Мы предлагаем быструю и качетсвенную разработку лендинга с маркетинговым планом. В результате мы гарантируем:
                            </p>

                            <ul className={styles.ul}>
                                {
                                    garanties.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z" fill={'green'}></path></svg>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <form action="" className={styles.form}>
                                <input className={styles.callback_input} type="text" placeholder='Введите ваше имя' />
                                <input className={styles.callback_input} type="text" placeholder='Номер телефона' />
                                <input className={styles.callback_input} type="text" placeholder='email or telegram' />

                                <button className={styles.callback_btn}>
                                    Заказать сайт
                                </button>
                            </form>

                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default LandingPage;