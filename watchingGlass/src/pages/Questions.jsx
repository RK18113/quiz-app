import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';  
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import Options from '../components/Options';
import CustomColorPicker from '../components/CustomColorPicker.jsx';


function Questions() {
    const navigate = useNavigate();
    const questions = [
        {
            question: "When's your birthday?",
            options: ["calendar"]
        },
        {
            question: "What's your favorite color?",
            options: ["colorpicker"]
        },
        {
            question: "Do you prefer warm or cool weather?",
            options: ["Warm", "Cool"]
        },
        {
            question: "What's your zodiac sign, if you know it?",
            options: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
        }
    ];

    const optionVariables = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [optionSelected, setOptionSelected] = useState(null);
    const totalQuestions = questions.length;

    function handleOptionSelection(selOpt) {
        setOptionSelected((prevSelected) =>
            prevSelected === selOpt ? null : selOpt
        );
    }

    function handleColorDateSelection(selOpt) {
        setOptionSelected(selOpt);
    }

    function handleContinue() {
        if (!optionSelected) return;

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setOptionSelected(null);
        } else {
            navigate('/result'); 
        }
    }

    return (
        <>
            <NavBar title={true}/>
            
            <div className='sm:hidden flex w-full justify-center mt-5 mb-3'>
                <ProgressBar
                    total={totalQuestions}
                    completed={currentIndex + 1}
                />
            </div>

            <div className="flex flex-wrap items-center justify-center h-full font-roboto sm:mt-10 text-[#191D63] overflow-hidden">
                <h1 className="w-[80%] text-left sm:text-center text-2xl">
                    {questions[currentIndex].question}
                </h1>
                <div className={`w-full flex flex-col gap-5 sm:max-h-[400px] max-h-[375px] min-h-[400px] ${
                    questions[currentIndex].options.length <= 4 ? 'justify-center' : 'justify-start'
                } overflow-y-auto`}>
                    {questions[currentIndex].options.map((element, index) => {
                        const opt = optionVariables[index];

                        if (element === "calendar"){
                            return (
                                <div className='w-full flex justify-center'>
                                    <input type="date" name="" id="" className='sm:w-[300px] w-[80vw] rounded-md p-4 py-8 font-roboto font-bold' onChange={handleColorDateSelection}/>
                                </div>)
                        } else if (element === "colorpicker"){
                            return (
                                <div className='w-full h-[400px] flex justify-center'>
                                    <CustomColorPicker onChange={handleColorDateSelection} />
                                </div>
                            )
                        }

                        return (
                            <Options
                                key={index}
                                optionSelected={optionSelected}
                                currentOption={opt}
                                element={element}
                                index={index}
                                handleOptionSelection={handleOptionSelection}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center sm:gap-36 gap-10 w-full sm:bg-white sm:h-[80px] h-[100px] bg-[#EDE8E3] fixed bottom-0 font-roboto">
                <div className="hidden sm:block">
                    <ProgressBar
                        total={totalQuestions}
                        completed={currentIndex + 1}
                    />
                </div>
                <Button
                    color={optionSelected ? "green" : "grey"}
                    text={
                        currentIndex === totalQuestions - 1
                            ? "FINISH"
                            : "CONTINUE"
                    }
                    handleContinue={handleContinue} 
                />
            </div>
        </>
    );
}

export default Questions;
