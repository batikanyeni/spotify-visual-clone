import classes from './PlanCard.module.css'

export const PlanCard = (props) => {
    const planInfo = props.planInfo;

    return(<div className={classes['plan-card']}>
            <div className={classes['free-time']}><span>{planInfo.free_usage}</span></div>
            <p className={classes['pname']}>{planInfo.plan_name}</p>
            <p className={classes['pinfo']}>{planInfo.payment_info}</p>
            <p className={classes['acount']}>{planInfo.account_count} account</p>
            <hr/>
            {planInfo.general_info.map(e => <p className={classes['ginfo']}><img src='./icons/tick.png' alt='tick'/>{e}</p>)}
            <button>Get Started</button>
            <p className={classes['einfo']} dangerouslySetInnerHTML={{__html: planInfo.extra_info}}/>
    </div>)
}