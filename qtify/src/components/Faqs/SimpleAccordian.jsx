import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import style from './Faqs.module.css';

export default function SimpleAccordion({ dataSource }) {
    return (
        <div>
            {dataSource().map((item) => (
                <Accordion
                    key={item.id}
                    disableGutters
                    elevation={0}
                    className={style['accordian-root']}
                >
                    <AccordionSummary
                        className={style['accordian-summary']}
                        expandIcon={
                            <ExpandMoreRoundedIcon
                                style={{
                                    fontSize: 40,
                                    color: 'var(--color-primary)',
                                }}
                            />
                        }
                        aria-controls={item.id}
                        id={item.id}
                    >
                        <Typography className={style['accordian-font-title']}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={style['accordian-details']}>
                        <Typography
                            className={style['accordian-font-description']}
                        >
                            {item.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
