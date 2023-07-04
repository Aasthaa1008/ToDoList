import react, { useState } from "react"
import ToDoList from "./ToDoList";
/*const App=()=>{
    const yellow='yellow';
    const [bg,setbg]=useState(yellow);
    const [name,setName]=useState("Hello");
    const [text, setText]=useState("Hi");

    const bgChange=()=>{
        console.log("clicked");
        let newbg="#d2b2d2";
        setbg(newbg)
        let new_name="Aastha" ;
        setName(new_name);
    };
    const textChange=()=>{
        let new_text="Adwani";
        setText(new_text);
    }
    
    return (
        <>
            <div style={{backgroundColor:bg}}>
                <button onClick={bgChange}>{name}</button>
                <button onDoubleClick={textChange}>{text}</button>
            </div>
        </>
    );
}*/

//TO DO LIST PROJECT

const App=()=>{
    const [inputList,setInputList]=useState();
    const [items,setItem]=useState([]);
    
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }
    const ListOfItems=()=>{
        setItem((oldItems)=>{
            return[...oldItems,inputList]
        });
        setInputList("");
    }
    const deleteItems=(id)=>{
        console.log("deleted")
        setItem((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id ;
            });
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" 
                    placeholder="Add items" 
                    onChange={itemEvent}
                    value={inputList}
                    />
                    <button onClick={ListOfItems}>+</button>
                    <ol>
                        {items.map((itemval,index)=>{
                            return <ToDoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default App