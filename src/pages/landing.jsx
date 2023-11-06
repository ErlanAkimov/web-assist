import Layout from '../components/layout/layout';
import styles from '../styles/landing.module.scss';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

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
const LandingPage = () => {

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

                            <div className={styles.sale}>
                                <p className={styles.sale_text}>
                                    Получите скидку на разработку и дальнейшее сопровождение сайта. Подробности уточняйте в телеграме
                                </p>
                                <div className={styles.title}>-50%</div>
                            </div>

                            <form action="" className={styles.form}>
                                {/* <input className={styles.callback_input} type="text" placeholder='Введите ваше имя' />
                                <input className={styles.callback_input} type="text" placeholder='Номер телефона' />
                                <input className={styles.callback_input} type="text" placeholder='email or telegram' />

                                <button className={styles.callback_btn}>
                                    Заказать сайт
                                </button> */}
                                    <button className={styles.callback_btn}>
                                        <Link href="https://t.me/nonePhD" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                                            Заказать сайт
                                        </Link>
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