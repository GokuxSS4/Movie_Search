export default function useDebounce(callback,delay=500){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>callback(...args),delay);
    }
};