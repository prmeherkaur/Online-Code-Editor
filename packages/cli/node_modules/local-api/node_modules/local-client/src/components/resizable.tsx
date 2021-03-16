import { useState } from 'react';
import { useEffect } from 'react';
import {ResizableBox,ResizableBoxProps} from 'react-resizable';
import '../styles/resizable.css'
interface ResizableProps{
    direction: 'horizontal'|'vertical';
}

const Resizable:React.FC<ResizableProps>=({direction,children})=>{
    const [innerHeight,setInnerHeight]=useState(window.innerHeight)
    const [innerWidth,setInnerWidth]=useState(window.innerWidth)
    const [width,setWidth]=useState(window.innerWidth*0.75)
    let timer:any;
    useEffect(()=>{
        const listener=()=>{
            if(timer){
                clearTimeout(timer);
            }
            timer=setTimeout(()=>{
                setInnerHeight(window.innerHeight);
                setInnerWidth(window.innerWidth);
                if(window.innerWidth*0.75<width){
                    setWidth(window.innerWidth*0.75);
                }
            },100)
            

        }
        window.addEventListener('resize',listener);
        return()=>{
            window.removeEventListener('resize',listener);
        }
    },[width])
    let resizeableProps:ResizableBoxProps;
    if(direction==='horizontal'){
        resizeableProps={
            className:'resize-horizontal',
            height:Infinity,
            width,
            resizeHandles:['e'],
            maxConstraints:[innerWidth*0.8,Infinity],
            minConstraints:[innerWidth*0.2,Infinity ],
            onResizeStop:(event,data)=>{
                setWidth(data.size.width);
            }
        }
    }else{
        resizeableProps={
            height:300,
            width:Infinity,
            resizeHandles:['s'],
            maxConstraints:[Infinity,innerHeight*0.9],
            minConstraints:[Infinity,30 ]
        }
    }
    
    return (
     <ResizableBox 
        {...resizeableProps}
     >
         {children}
    </ResizableBox>
     );
}
export default Resizable;