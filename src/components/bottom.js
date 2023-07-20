import styles from "./bottom.module.css";
const Bottom=(props)=>{
    return (
            <div className={styles.res}>
                <div className={styles.resImg} id="imgs">
                    <img id='i1' src={props.imgs[0]} alt="Sorry No pic Available"/>
                    <img id='i2' src={props.imgs[1]} alt="Sorry No pic Available"/>  
                    <img id='i3' src={props.imgs[2]} alt="Sorry No pic Available"/>  
                </div>
                <div className={styles.resDes} id="des">
                    <h1>About {props.data.breed}</h1>
                    <h5>Charecteristics :</h5>
                    <h6 className={styles.char}> {props.data.char}</h6>
                    <h5> Weight:</h5>
                    <h6> {props.data.weight}</h6>
                    <h5> Average Life Span :</h5>
                    <h6> {props.data.life} </h6>            
                </div>
            </div>
    );
}
export default Bottom;