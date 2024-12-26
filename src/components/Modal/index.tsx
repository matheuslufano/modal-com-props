import style from './Modal.module.css'

interface IModal{
    isOpen: boolean;
    setOpen: (isOpen: boolean)=> void;
    title: string;
    description: string;
}

export function Modal({ isOpen, setOpen, title, description }: IModal){
    if(isOpen){
        return(
            <div className={style.background}>
                <div className={style.modal}>
                   <div className={style.left}>
                        <button onClick={()=>setOpen(!isOpen)} className = {style.close}>X</button>
                        <img src="image.png" alt="oibot" className={style.image}/>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button className={style.button}>Cadastrar</button>
                   </div>
                   {/* <div className={style.right}>
                        <h2>teste</h2>
                   </div> */}
                </div>
            </div>  
        );
    }else{
        return <></>;
    }
}
