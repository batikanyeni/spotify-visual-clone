import classes from './PremiumPage.module.css'
import { ResponsiveHeader } from '../header&banners/ResponsiveHeader'
import { PlanCard } from '../cards/PlanCard'

export const PremiumPage = () => {

    const plans = [{"plan_name" : "Individual",
                "payment_info":"$10.99/month after offer period",
                "account_count": 1,
                "general_info" : ["Ad-free music listening","Play anywhere - even offline","On-demand playback"],
                "extra_info" : "Individual plan only. $10.99/month after. <a href=\"/\">Terms and conditions apply.</a> Open only to users who haven't already tried Premium. Offer ends September 12, 2023.",
                "free_usage" : "3 months free"
                },
                {"plan_name" : "Duo",
                "payment_info":"$14.99/month after offer period",
                "account_count": 2,
                "general_info" : ["2 Premium accounts for a couple under one roof","Ad-free music listening, play offline, on-demand playback"],
                "extra_info" : "Free for 1 month, then $14.99 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address. <a href=\"/\">Terms apply.</a>",
                "free_usage" : "1 month free"
                },
                {"plan_name" : "Family",
                "payment_info":"$16.99/month after offer period",
                "account_count": 6,
                "general_info" : ["6 Premium accounts for family members living under one roof","Block explicit music","Ad-free music listening, play offline, on-demand playback","Spotify Kids: a separate app made just for kids"],
                "extra_info" : "Free for 1 month, then $16.99 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address. <a href=\"/\">Terms apply.</a>",
                "free_usage" : "1 month free"
                },
                {"plan_name" : "Student",
                "payment_info":"$5.99/month after offer period",
                "account_count": 1,
                "general_info" : ["Hulu (With Ads) plan","Ad-free music listening","Play anywhere - even offline","On-demand playback"],
                "extra_info" : "Free for 3 months, then $5.99 per month after. Offer currently includes access to Hulu (With Ads) plan, subject to eligibility. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before. <a href=\"/\">Terms apply.</a> Offer ends September 12, 2023.",
                "free_usage" : "3 months free"
                }
            ]


    return <div className={classes['premium-page']}>
        <ResponsiveHeader />
        <div className={classes['top-info']}>
            <div className={classes['premium-info']}>
                <h1>$0 for 3 months of Premium</h1>
                <h3>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h3>
                <div className={classes['btn-container']}>
                    <button className={classes.btn1}>Get 3 months for $0</button>
                    <button className={classes.btn2}>View plans</button>
                </div>
                <p>Individual plan only. $10.99/month after. <a href='/'>Terms and conditions apply.</a> Open only to users who haven't already tried Premium. Offer ends September 12, 2023.</p>
            </div>
            <img alt='premium' src='./playlist_images/premium.png'/>
        </div>
        <div className={classes['middle-info']}>
            <h1>Why go Premium?</h1>
            <div className={classes['advantages-container']}>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/downloadMusic.png'/>
                    <div>
                        <p className={classes['p1']}>Download Music.</p>
                        <p className={classes['p2']}>Listen anywhere.</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/ad-free.png'/>
                    <div>
                        <p className={classes['p1']}>Ad-free music listening.</p>
                        <p className={classes['p2']}>Enjoy nonstop music..</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/any-song.png'/>
                    <div>
                        <p className={classes['p1']}>Play any song.</p>
                        <p className={classes['p2']}>Even on mobile.</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/unlimited-skip.png'/>
                    <div>
                        <p className={classes['p1']}>Unlimited skips.</p>
                        <p className={classes['p2']}>Just hit next.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes['premium-container']}>
            <h1>Pick Your Premium</h1>
            <h4>Listen without limits on your phone, speaker, and other devices.</h4>
            <img alt='payment options' src='./icons/payment-options.png'/>
            <div className={classes['plan-container']}>
                {plans.map(plan => 
                    <PlanCard planInfo = {plan}/>)}
            </div>
        </div>
    </div>
}