import {useState, useEffect, useRef} from "react"

export default function useWordGame(startingTime){
    
    const [timeRemaining, setTimeRemainig] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState("???")
    const textBoxRef = useRef(null)

    useEffect(()=> {
        if (isTimeRunning && timeRemaining > 0 ){
            setTimeout(()=> {
                setTimeRemainig((time) => time -1)
            }, 1000)
        } else if (timeRemaining === 0) {
             endGame()
        }
    }, [timeRemaining, isTimeRunning])

    function startGame(){
        setIsTimeRunning(true)
        setTimeRemainig(startingTime)
        setText("")
        setWordCount("???")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame(){
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }

    function handleChange(e){
        const { value } = e.target
        setText(value)        
    }

    function calculateWordCount(text) {
        const wordArr = text.trim().split(" ")
        return wordArr.filter(word => word !== "").length 
    }

    return { timeRemaining, startGame, handleChange, text, wordCount, isTimeRunning, textBoxRef }
}

