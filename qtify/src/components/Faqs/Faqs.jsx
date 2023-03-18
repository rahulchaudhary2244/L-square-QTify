import React from 'react';
import style from './Faqs.module.css';
import SimpleAccordion from './SimpleAccordian';

function Faqs() {
    return (
        <div className={style['faqs-container']}>
            <h2 className={style['faqs-heading']}>
                faq<span style={{ textTransform: 'lowercase' }}>s</span>
            </h2>
            <SimpleAccordion dataSource={dataSource} />
        </div>
    );
}

function dataSource() {
    return [
        {
            id: '1',
            title: 'Is QTify free to use?',
            description: 'Yes! It is 100% free, and has 0% ads!',
        },
        {
            id: '2',
            title: 'Can I download and listen to songs offline?',
            description: `Sorry, unfortunately we don't provide the service to download any songs.`,
        },
    ];
}

export default Faqs;
