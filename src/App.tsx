import { useState } from "react";
import "./App.css";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
    const [step, setstep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (flag: number) => {
        if (step !== 3 && flag > 0) setstep(step + flag);
        if (step !== 1 && flag < 0) setstep(step + flag);
    };

    return (
        <div>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>
                &times;
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`step-1 ${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`step-1 ${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`step-1 ${step >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <p className="message">
                        Step - {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            onClick={() => {
                                handleClick(-1);
                            }}
                            className="previous"
                            style={{ backgroundColor: "#7958f2", color: "#fff" }}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => {
                                handleClick(1);
                            }}
                            className="previous"
                            style={{ backgroundColor: "#7958f2", color: "#fff" }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
