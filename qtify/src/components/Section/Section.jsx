import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';

function Section({ title, dataSource }) {
    const [cards, setCards] = useState([]);
    const [isShowAll, setIsShowAll] = useState(true);

    useEffect(() => {
        dataSource().then((data) => setCards(data));
    });

    return (
        <section className={styles['container']}>
            <div className={styles['top-bar']}>
                <h4>{title}</h4>
                <button
                    className={styles['button']}
                    style={{ color: 'var(--color-primary)' }}
                    onClick={() => setIsShowAll((prev) => !prev)}
                >
                    {!isShowAll && <span>Show All</span>}
                    {isShowAll && <span>Collapse</span>}
                </button>
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

            <div
                style={{
                    marginTop: '18px',
                    display: `${isShowAll ? 'none' : 'block'}`,
                }}
            >
                <Carousel
                    data={cards}
                    renderData={(item) => (
                        <Card
                            description={item.description}
                            follows={item.follows}
                            image={item.image}
                            type="album"
                        />
                    )}
                />
            </div>
        </section>
    );
}

export default Section;
