import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ dataSource }) {
    return (
        <div style={{ marginTop: '20px' }}>
            {dataSource().map((item) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={item.id}
                        id={item.id}
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
