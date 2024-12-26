import { Box, Dialog, DialogContent, Grid, useMediaQuery } from '@mui/material';
import style from './Modal.module.css'

interface IModal{
    isOpen: boolean;
    setOpen: (isOpen: boolean)=> void;
    title: string;
    description: string;
}



export function Modal({ isOpen, setOpen, title, description }: IModal){
    const isMobile = useMediaQuery('(max-width: 240px)');
    if(isOpen){
        return (
            <Dialog maxWidth='lg' open={isOpen} onClose={() => setOpen(!isOpen)} className={style.background} fullWidth={isMobile}>
                <Grid container spacing={2}>
                    <DialogContent className={style.modal}>
                        <Grid item xs={12} md={6}>
                            <Box className={style.left}>
                                <button onClick={() => setOpen(!isOpen)} className={style.close}>X</button>
                                <img src="logo-oibot.png" alt="oibot" className={style.image} />
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <button className={style.button}>Cadastrar</button>
                            </Box>
                        </Grid>
                    </DialogContent>
                </Grid>
            </Dialog>
        );
        
    }else{
        return <></>;
    }
}
