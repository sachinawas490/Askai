import React, { createContext, useState } from 'react';
import run from '../config/gemin';

const myContext = createContext();

function MyProvider({ children }) {
    const [input, setinput] = useState('');
    const [recent, setrecent] = useState([]);
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState('');
    const [newchat, setnewchat] = useState(true);
    const [question,setquestion]=useState('');
    async function callrun() {
        setnewchat(false);
        console.log("called");
        setquestion(input)
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
        let t = newarr.split("*").join("</br></br>").replace("#","");
        setloading(false);
        setdata(t);
        console.log(">>> ", temp);
        await setrecent(prev => [...prev, { input, data: t }]);
        setinput('');
        console.log("previous input", recent);
    }
    console.log(data);

    return (
        <myContext.Provider value={{ input, setinput, callrun, recent, data, setdata, loading, newchat,question }}>
            {children}
        </myContext.Provider>
    );
}

export { myContext };
export default MyProvider;
