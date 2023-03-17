import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Filters from '../Filters/Filters';
import styles from './Section.module.css';

function Section({ title, dataSource, style, filterSource, type }) {
    const [cards, setCards] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);
    const [filters, setFilters] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleChange = (event, newValue) => {
        setActiveFilter(newValue);
    };

    useEffect(() => {
        dataSource().then((data) => setCards(data));
        if (!!filterSource)
            filterSource().then((data) =>
                setFilters([
                    {
                        key: 'all',
                        label: 'All',
                    },
                    ...data.data,
                ])
            );
    }, []);

    return (
        <section className={styles['container']} style={style || {}}>
            <div className={styles['top-bar']}>
                <h4>{title}</h4>
                {!!!filterSource && (
                    <button
                        className="button-transparent"
                        style={{ color: 'var(--color-primary)' }}
                        onClick={() => setIsShowAll((prev) => !prev)}
                    >
                        {!isShowAll && <span>Show All</span>}
                        {isShowAll && <span>Collapse</span>}
                    </button>
                )}
            </div>

            {!!filterSource && (
                <Filters
                    handleChange={handleChange}
                    activeFilter={activeFilter}
                    filters={filters}
                />
            )}

            <div
                className={styles['cards-grid']}
                style={{ display: `${isShowAll ? 'flex' : 'none'}` }}
            >
                {cards
                    .filter((item) => filterConditionForCards(item))
                    .map((item) => cardElement(item))}
            </div>

            <div
                style={{
                    marginTop: '18px',
                    display: `${isShowAll ? 'none' : 'block'}`,
                }}
            >
                <Carousel
                    data={cards.filter((item) => filterConditionForCards(item))}
                    renderData={(item) => cardElement(item)}
                />
            </div>
        </section>
    );

    function filterConditionForCards(item) {
        if (!!!filterSource || activeFilter === 'all') return true;
        return item.genre.key === activeFilter;
    }

    function cardElement(item) {
        return (
            <Card
                description={item.description}
                reviews={
                    type === 'album'
                        ? `${item.follows} Follows`
                        : `${item.likes} Likes`
                }
                image={item.image}
                type={type}
                tooltip={item?.songs?.length || 0}
            />
        );
    }
}

export default Section;
