import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';

function Section({ title, dataSource }) {
    const [cards, setCards] = useState([]);
    const [isShowAll, setIsShowAll] = useState(true);

    useEffect(() => {
        dataSource().then((data) => setCards(data));
    });

    const handleToggle = (input) => {
        setIsShowAll(!input);
    };

    return (
        <section className={styles['container']}>
            <div className={styles['top-bar']}>
                <h4>{title}</h4>
                <h4
                    style={{ color: 'var(--color-primary)', cursor: 'pointer' }}
                    onClick={() => setIsShowAll((prev) => !prev)}
                >
                    {isShowAll && <span>Show All</span>}
                    {!isShowAll && <span>Collapse</span>}
                </h4>
            </div>

            <div
                className={styles['cards-grid']}
                style={{ display: `${isShowAll ? 'flex' : 'none'}` }}
            >
                {cards.map((item) => (
                    <Card
                        key={item.id}
                        description={item.description}
                        follows={item.follows}
                        image={item.image}
                        type="album"
                    />
                ))}
            </div>
        </section>
    );
}

export default Section;
