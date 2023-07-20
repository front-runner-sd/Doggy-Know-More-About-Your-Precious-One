import styles from "./mid.module.css"
import axios from "axios";
import errorImage from './err.png' ;
const mid=(props)=>{
    var breedinput='';
    const handleChange = (event)=>{
        breedinput=event.target.value;
    } 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search();
        }
      }
    async function search(){
        var breed_mixCase = breedinput;
        const breedMiddleSpace =breed_mixCase.toLowerCase().trim() ;
        const breed=breedMiddleSpace.replace(/ /g,"/");
        try{
            const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`);
            const res2 = await axios.get(`./data.json`);
            props.sendArrToParent(res.data.message);
            for(var ele in res2.data){   
               if(res2.data[ele].breed === breed){ 
                props.sendArrToParent2(res2.data[ele]);
                break;
               }
            }
        }
        catch(err){
            const errImg = [errorImage,errorImage,errorImage];
            const errData = {
                "breed": `${breed}`,
                "char": "No Data Available, May be there was a spelling mistake! 🤔",
                "weight": "No Data Available 😕",
                "life": "No Data Available 😕"
              };
            props.sendArrToParent(errImg);
            props.sendArrToParent2(errData);
            console.log(err);
        }
    }
    return (
        <div>
            <div className={styles.card}>
                <h3>Search a Dog Breed</h3>
                <input type="text" id="input" className={styles.input} placeholder="hound" onChange={handleChange} onKeyDown={handleKeyDown}/>
                <button id="Search" className={styles.check_pushable} onClick={search}>
                    <span className={styles.check_shadow}></span>
                    <span className={styles.check_edge}></span>
                    <span className={`${styles.check_front} ${styles.text}`}>Search</span>
                </button>
            </div>
        </div>
    );
}
export default mid;