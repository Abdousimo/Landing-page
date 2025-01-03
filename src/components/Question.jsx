import React ,{useState} from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const Question = ({question,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className='relative bg-white text-paragraph rounded-[10px] p-8 text-sm'>
        <p className='font-semibold'>{question}</p>
        {showAnswer&&<p>{answer}</p>}
        <button onClick={()=>setShowAnswer(!showAnswer)} className='absolute right-4 top-8 text-primary'>
            {!showAnswer ?
              <FaAngleDown size={20}/>
              :
              <FaMinus size={20}/>}
        </button>
    </div>
  )
}

export default Question