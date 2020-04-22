import React, {Fragment} from 'react'
import classNames from 'classnames';
import  styles from './CSSmoduleDemo.module.css'

const cx = classNames.bind(styles);
function CSSmoduleDemo() {
    return (
        <Fragment>
            <h3>CSS module demo</h3>
            <div className={styles.main}>
                <div className={cx(styles.child, styles.active)}>
                        <div className={styles.subChild}>

                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CSSmoduleDemo
