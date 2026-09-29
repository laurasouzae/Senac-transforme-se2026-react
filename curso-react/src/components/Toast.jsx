import { useState, useEffect } from "react";

export function useToast() {
    const [msg, setMsg] = useState('');

    return {
        msg,
        setMsg
    };
}



export function ToastSucess({ msg, setMsg }) {
    useEffect(() => {
        if (msg == '') return;

        const timer = setTimeout(() => { }, 5000);

        return () => {
            clearTimeout (timer);
        };

    }, [msg, setMsg]);


    if (msg == '') return;

    return (
        <div className="fixed top-5 w-sm bg-green-500 z-50">
            {msg}
        </div>
    );
}


export function ToastDanger({ msg }) {

}


export function Toastwarning({ msg }) {

}   