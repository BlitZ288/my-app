import { useEffect, useState } from "react"

export const useValidation=(value:string, validations: { [x: string]: any; } )=>{
    const errorMessages:Array<string>=[];
    const [isEmpty, setEmpty] = useState(true);
    const [maxLenghtError, setMaxLenghtError] = useState(false);

    useEffect(()=>{
        
        for (const validation in validations) 
        {
            switch(validation){           
                case 'maxLenght':
                   if( value.length > validations[validation])
                   {
                    setMaxLenghtError(true)
                   } else{
                       setMaxLenghtError(false);
                       errorMessages.push(`Поле должно быть меньше ${validations[validation]}`)
                   }
 
                    break;
                case 'isEmpty':
                    if(value){
                        setEmpty(false)
                    }else{
                        setEmpty(true);
                        errorMessages.push(`Поле не может быть пустыи `);

                    }
                
                    
                    break;
            }
        }
    },[value])
    
    return {isEmpty, maxLenghtError,errorMessages }
}