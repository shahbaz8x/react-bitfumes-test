import { useEffect, useState } from "react";



export default function Images() {

    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1611510960781-2fead06c0b9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1609701123856-2c51917f7f30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
        "https://images.unsplash.com/photo-1609589636609-6003886b08d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
        "https://images.unsplash.com/photo-1609342475528-dd7d93e8311e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
        "https://images.unsplash.com/photo-1603693786263-6b2ca0fbb8f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]);

    const [myInterval, setmyInterval] = useState(null);
    useEffect(()=>{
        console.log('Hello from effect');
        setmyInterval(
            setInterval(()=>{
                console.log("Hello");
            }, 1000)
        );

        return ()=> clearInterval(myInterval);
    }, []);

    function ShowImage() {
        return images.map((image, index)=>{
            return (
                <div className="w-1/3 my-4 flex justify-center" key={index}>
                    <img width="150px" src={image} alt="no image" onMouseEnter={handleMouseEnter} onClick={()=>handleRemove(index)} />
                </div>
            );
        })
    }

    function handleAdd() {
        setImages([...images, "https://images.unsplash.com/photo-1611606671583-9bef744165f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"]);
    }

    function handleRemove(index) {
        setImages([
            ...images.slice(0, index),
            ...images.slice(index+1, images.length)
        ]);
    }

    function handleMouseEnter(e) {
        console.log(e.target);
    }

    return(
        <section>
            <div className="flex justify-center">
                <ShowImage />
                <button onClick={handleAdd} className={`p-2 text-white ${images !== "" ? "" : ""}`}>Add</button>
            </div>
        </section>
    );
}