import React, {useState} from 'react'

export default function FormText(props){
    const handelOnClick = () => {
        let newValue = text.toUpperCase()
        setText(newValue);
    }

    const convertToLower = () => {
        let newValue = text.toLocaleLowerCase()
        setText(newValue);
    }

    const clearTheText = () => {
        setText("");
    }

    const convertSentence = () => {
        let newValue = text.charAt(0).toUpperCase() + text.substring(1).toLocaleLowerCase()
        setText(newValue);
    }

    const capitalCase = () =>{
        let i=0;
        let word = text.split(" ");
        for(i=0;i<word.length;i++){
            word[i] = word[i][0].toUpperCase() + word[i].substring(1).toLocaleLowerCase();
        }
        let  newValue = word.join(" ");
        setText(newValue);
    }

    const alternatingCase = () =>{
        let newValue = '';
        for(let i=0; i<text.length; i++){
            var ch = text.charAt(i);
           if(i%2 === 0){
            ch = ch.toUpperCase()
           }
           else{
            ch = ch.toLocaleLowerCase()
           }
           newValue = newValue.concat(ch);
        }
        setText(newValue);
    }

    const inverCase = () => {
        let newValue = '';
        for(let i=0; i<text.length; i++){
            var ch = text.charAt(i);
            if(ch === ch.toUpperCase()){
               ch = ch.toLocaleLowerCase();
            }
            else{
              ch = ch.toUpperCase();
            }
            newValue = newValue.concat(ch);
        }
        setText(newValue);
    }
    
    const handelOnChange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter the text');
return(
    <>
        <div>
            <h1>{props.heading}</h1>
        <div className="form-group mb-3">
             <textarea className="form-control" value={text} onChange={handelOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handelOnClick}  >Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={convertToLower}  >Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={convertSentence}  >Sentence Case</button>
        <button className="btn btn-primary mx-3" onClick={capitalCase}  >Capital Case</button>
        <button className="btn btn-primary mx-3" onClick={alternatingCase}  >AlTeRnAtInG CaSe</button>
        <button className="btn btn-primary mx-3" onClick={inverCase}  >Inverse Case</button>
        <button className="btn btn-primary mx-3" onClick={clearTheText}  >Clear</button>

        </div>
       <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>
                Your text have {text.split(" ").length} words and {text.length} characters.
            </p>
            <p>
                 {0.08 * text.split(" ").length} minutes to read.
            </p>

            <h2>Preview</h2>
            <p>
                {text}
            </p>
        </div>
        </>
);
}

