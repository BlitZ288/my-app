import { SetStateAction, useState } from "react";
import { useValidation } from "./useValidation";

 
 export const useInput=(initialValue:string ,validations: { [x: string]: any; isEmpty?: boolean; minLenght?: number; } )=>
 {
     const [value , setValue] = useState(initialValue);
     const [isDirty, setDirty] = useState(false);
     const valid = useValidation(value, validations)
     
     const onChange= (e: { currentTarget: { value: SetStateAction<string>; }; }) =>{
         setValue(e.currentTarget.value);
     }

     const onBlur= (e: any) =>{
        setDirty(true);
     }

     return{
         value,
         onChange,
         onBlur,
         ...valid,
          isDirty
     }
 }

