
import React from 'react';
import styles from '../../css/HeroSection.module.css';

const SupportSection: React.FC = () => {
    return (
        <div className={styles.supportContainer}>
            {/* Left Content */}
            <div className={styles.leftContent}>
                <h2 className={styles.heading}>
                    Find Setup Guides, Technical Specs, &<br />
                    Troubleshooting Tips All in One Place
                </h2>
            </div>

            {/* Right Content */}
            <div className={styles.rightContent}>
                {/* Item 1 */}
                <div className={styles.item}>
                    <img
                        src="/docs/img/HeroSection/circle-girl.svg"
                        alt="Specialist"
                        className={styles.avatar}
                        style={{ width: '42px', height: '49px' }}
                    />
                    <div>
                        <p className={styles.description}>Designing Your Wireless Solution?</p>
                        {/* <a href="#" className={styles.link}>Call a Specialist</a> */}
                        <a href="tel:+91 7972856163" className={styles.link}>Call a Specialist</a>
                    </div>
                </div>

                {/* Item 2 */}
                <div className={styles.itemNew}>
                    <img
                        src="/docs/img/HeroSection/shopping-bag 2.svg"
                        alt="Explore"
                        className={styles.avatarNew}
                        style={{ width: '34px', height: '40px' }}
                    />
                    <div>
                        <p className={styles.description}>Discover complete lineup</p>
                        <a href="#" className={styles.link}>Explore Our Store</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;
