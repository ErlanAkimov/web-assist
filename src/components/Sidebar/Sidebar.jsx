import styles from './sidebar.module.scss'

const projects = [
    {name: 'stomaland.ru', component: ''},
    {name: 'advert-digital.com', component: ''},

]

function Sidebar () {
    return (
        <ul className={styles.wrapper}>
            {
                projects.map((item, index) => {
                    return <li key={index} className={`${styles.projectName}`}>{item.name}</li>
                })
            }

        </ul>
    )
}

export default Sidebar;