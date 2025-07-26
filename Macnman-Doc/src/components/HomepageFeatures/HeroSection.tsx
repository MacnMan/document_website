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

            <div className={styles.rightContent}>
                {/* Item 1 */}
                <div className={styles.item}>
                    <img
                        src="/docs/img/HeroSection/circle-girl.svg"
                        alt="Specialist"
                        style={{ 
                            width: '42px', 
                            height: '49px', 
                            borderRadius: '10%',
                            marginTop: '-1px',
                            verticalAlign: 'middle',
                        }}
                        className={styles.avatar}
                    />
                    <div>
                        <p className={styles.description}>Designing Your Wireless Solution?</p>
                        <a href="#" className={styles.link}>
                            Call a Specialist
                        </a>
                    </div>
                </div>

                {/* Item 2 - Replacing SVG with Image */}
                <div className={styles.item}>
                    <img
                        src="/docs/img/HeroSection/shopping-bag 2.svg"
                        alt="Explore"
                        style={{ 
                            width: '34px', 
                            height: '40px',
                            borderRadius: '25%',
                            marginTop : '4px',
                            marginLeft : '2px',
                            marginRight: '6px',
                            verticalAlign: 'middle',
                        }}
                        className={styles.avatar}
                    />
                    <div style={{}}>
                        <p className={styles.description}>Discover complete lineup</p>
                        <a href="#" className={styles.link}>
                            Explore Our Store
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SupportSection;
