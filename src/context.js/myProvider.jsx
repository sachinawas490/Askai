import React, { createContext, useState } from 'react';
import run from '../config/gemin';

const myContext = createContext();

function MyProvider({ children }) {
    const [input, setinput] = useState('');
    const [recent, setrecent] = useState([]);
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState('');
    const [newchat, setnewchat] = useState(true);
    const [question, setquestion] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setdata((prev) => prev + nextWord);
        }, 75 * index);
    };

    async function callrun() {
        setnewchat(false);
        setquestion(input);
        setloading(true);
        let newinput = input + " give the result in text ";
        const temp = await run(newinput);
        let response = temp.split("**");
        let newarr = ''; // Initialize newarr as an empty string
        for (let i = 0; i < response.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newarr += response[i];
            } else {
                newarr += "<b>" + response[i] + "</b>";
            }
        }
        let t = newarr.split("*").join("</br></br>").replace("#", "");
        let newres = t.split(" ");
        setdata(''); // Reset data before starting word-by-word update
        for (let i = 0; i < newres.length; i++) {
            const newword = newres[i];
            delayPara(i, newword + " ");
        }
        setloading(false);
        await setrecent((prev) => [...prev, { input, data: t }]); // Ensure data includes the full response
        setinput('');
        console.log("previous input", recent);
    }

    return (
        <myContext.Provider value={{ input, setinput, callrun, recent, data, setdata, loading, newchat, question,setquestion }}>
            {children}
        </myContext.Provider>
    );
}

export { myContext };
export default MyProvider;
