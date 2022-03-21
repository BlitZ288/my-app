import { useEffect, useState } from "react"

export const useValidation=(value:string, validations: { [x: string]: any; } )=>{
    const [isEmpty, setEmpty] = useState(true);
    const [maxLenghtError, setMaxLenghtError] = useState(false);
    const [errorMap, setTesMap] = useState<Map<string,string>>(new Map<string,string>());
    useEffect(()=>{
        
        for (const validation in validations) 
        {
            switch(validation){           
                case 'maxLenght':
                    
                   if( value.length > validations[validation])
                   {
                    setMaxLenghtError(true) 
                    if(!errorMap?.has(validation))
                    {
                      const temp  = new Map(errorMap);                     
                      temp.set(validation,`Поле должно быть меньше ${validations[validation]}`);                      
                      setTesMap(temp);                     

                    }
                    
                   } else{
                       setMaxLenghtError(false);
                       const temp  = new Map(errorMap);                     
                       if(errorMap?.has(validation)){
                        temp.delete(validation)
                        setTesMap(temp);

                       }
                                     
                   } 
                    break;
                case 'isEmpty':
                    
                    if(value){                     
                      setEmpty(false);
                      const temp  = new Map(errorMap);
                      temp.delete(validation);
                      setTesMap(temp);
                    }else{                      
                        setEmpty(true);
                        if(!errorMap?.has(validation))
                        {
                        const temp  = new Map(errorMap);                        
                        temp.set(validation, `Поле не может быть пустым`);                                               
                        setTesMap(temp);                       
                        }  
                                               
                    }
                    break;               
            }
        }
    },[value])
  
    
    return {isEmpty, maxLenghtError,errorMap }
}