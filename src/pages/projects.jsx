import Link from 'next/link';
import Layout from '../components/layout/layout';
import styles from '../styles/projects.module.scss';
import Image from 'next/image';

const ProjectsPage = () => {
    return (
        <Layout title='Проекты' description='asdfsf'>
            <div className="wrapper">

                <div className={styles.line1}>
                    <div className={styles.stomaland}>
                        <div className={styles.imgBlock}>
                            
                            <div className={styles.overlay}></div>
                            <Image src='/stomaland-project-photo-1.jpg' width={400} height={270} />
                        </div>
                        <div className={styles.text}>
                            <h2 className={styles.title}><a target='_blank' href="https://stomaland.ru">stoma<span>land</span></a></h2>

                            <p className={styles.description}>
                                Мы обновили веб-сайт для стоматологической клиники stomaland.ru и пересадили его с Wordpress на React.
                            </p>

                            <div className={styles.lastLine}>
                                <span className={styles.date}> 06.11.2023</span>
                                <Link href="https://stomaland.ru" target='_blank'>
                                    Перейти на сайт

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.advert}>
                            <div className={styles.imgBlock}>
                                <img src="https://advert-digital.com/images/collage.png" alt="" />
                            </div>
                            <h1 className={styles.title}>advert <br /><span>digital</span></h1>
                            <p className={styles.text}>
                                Мы сверстали и запустили сайт для кастингового агенства. Макет предоставили прекрасные дизайнеры Алена и Анастасия. <br /> Разработку и вывод заявок на <i>Google таблицы</i> мы взяли на себя.
                            </p>
                            <div className={styles.lastLine}>
                                    <p className={styles.date}>25.09.2023</p>

                                <Link href="https://advert-digital.com">
                                    Перейти на сайт
                                </Link>
                            </div>
                    </div>
                </div>

                <div className={styles.yourSite}>
                    <h3 className={styles.title}>
                        Здесь опубликуем следующий проект
                    </h3>
                    <p className={styles.text}>
                        
                    </p>
                </div>

                
            </div>
        </Layout>


    )
}

export default ProjectsPage;