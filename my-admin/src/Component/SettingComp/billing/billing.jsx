import Link from 'next/link';
import styles from './billing.module.css'

const Billing = () => {
    const details = [
        {
            id:1,
            label:"Plan",
            headtext:<button className={styles.button}>Add Modidoc Pro</button>,
            cont:"Free",
            link:"/",
            path:"/",
        },
        {
            id:2,
            label:"Fax Subscription",
            headtext:<button className={styles.button}>Add Modidoc Fax</button>,
            cont: "None",
            link:"/",
            path:"/",
        },
        {
            id:3,
            label:"Payment",
            headtext:<button className={styles.button}>Add Payment Method</button>,
            cont: "No payment method",
            link:"/",
            path:"/",
        },
        {
            id:1,
            label:"Billing Address",
            headtext:<button className={styles.button}>Add Billing Address</button>,
            cont: "No Billing Address",
            link:"/",
            path:"/",
        }
    ]
    return(
        <div className={styles.maincont}>
           <p className={styles.bill}>Billing</p>
           <div className={styles.line}></div>

         <div className={styles.mainfirst}>
         <div className={styles.subcont}>
            {
                details.map((datum) => (
                    <div key={datum.id}  className={styles.map}>
                        <div className={styles.submap}>
                        <p>{datum.label}</p>
                        <Link href={datum.path} className={styles.link}>
                        <p className={styles.head}>{datum.headtext}</p>
                        </Link>
                        
                        </div>
                        <div className={styles.cont}>
                        <p>{datum.cont}</p>
                        </div>
                       
                   
                    </div>
                ))
            }
           

           </div>
         </div>

        <div className={styles.mainsec}>
        <div className={styles.second}>
                    <p className={styles.date}>Upcoming Invoices</p>
                    <div className={styles.line}></div>
                    <div className={styles.newconts}>
                     <p>No upcoming invoices</p>
                    </div>
                </div>
        </div>
         
          
        </div>
    )
}

export default Billing