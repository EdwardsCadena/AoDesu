import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>¿Puedo ver cualquier serie anime?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ¡Por supuesto! siempre en cuanto este en nuestro catalogo de animes, siempre podras verlo de manera gratuita.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>¿Necesito una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puedes iniciar sesión si es que lo quieres, no es obligatorio, pero en un futuro, cuando implementemos más funciones,
            necesitaras la cuenta para guardar tus vistos, tus favoritos, etc.   
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿Donar es obligatorio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No es obligatorio, por supuesto que no, pero de igual forma, si tienes la posibilidad, te lo agradeceriamos bastante, ya que el reproductor de video cuesta mantenerlo
            para poderles ofrecer contenido.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>¿Contiene anuncios?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desde el inicio hemos decidido no colocar anuncios de ninguna forma o por lo menos no de manera molesta, ya que los anuncios afectan en gran parte la experiencia del usuario
            y a nosotros no nos interesa eso.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
