import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Quiz() {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [score, setScore] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [cond, setCond] = useState(false);
    const [st1, setSt1] = useState("");
    const [st2, setSt2] = useState("");
    const [st3, setSt3] = useState("");
    const [pro, setPro] = useState(0);
    const [proColor, setProColor] = useState("bg-danger");

    function quiz_logic() {
        let newScore = 0;
        let newRight = 0;
        let newWrong = 0;

        setSt1(q1 === "ISLAMABAD" ? "text-success" : "text-danger");
        setSt2(q2 === "MUMBAI" ? "text-success" : "text-danger");
        setSt3(q3 === "DHAKA" ? "text-success" : "text-danger");
        
        if (q1 === "ISLAMABAD") newScore += 10, newRight += 1; else newWrong += 1;
        if (q2 === "MUMBAI") newScore += 10, newRight += 1; else newWrong += 1;
        if (q3 === "DHAKA") newScore += 10, newRight += 1; else newWrong += 1;

        setScore(newScore);
        setRightAnswer(newRight);
        setWrongAnswer(newWrong);
        setCond(true);
        
        const progress = (newScore * 100) / 30;
        setPro(progress.toFixed(2));

        setProColor(progress === 100 ? "bg-success" : progress >= 66.67 ? "bg-warning" : "bg-danger");
    }

    return (
        <div className="container py-5 text-center">
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px', backgroundColor: '#B0C4DE' }}>
                <h1 className="text-center mb-4">Quiz Time!</h1>
                
                <div className="mb-3 text-start">
                    <p className={`fw-bold ${st1}`}>What is the capital of Pakistan?</p>
                    <div className="d-flex align-items-center gap-3">
                        <input className='form-check-input' type="radio" name="q1" value="ISLAMABAD" onChange={(e) => setQ1(e.target.value)} /> Islamabad
                        <input className='form-check-input' type="radio" name="q1" value="KARACHI" onChange={(e) => setQ1(e.target.value)} /> Karachi
                        <input className='form-check-input' type="radio" name="q1" value="LAHORE" onChange={(e) => setQ1(e.target.value)} /> Lahore
                    </div>
                </div>

                <div className="mb-3 text-start">
                    <p className={`fw-bold ${st2}`}>What is the capital of India?</p>
                    <div className="d-flex align-items-center gap-3">
                        <input className='form-check-input' type="radio" name="q2" value="KARACHI" onChange={(e) => setQ2(e.target.value)} /> Karachi
                        <input className='form-check-input' type="radio" name="q2" value="LAHORE" onChange={(e) => setQ2(e.target.value)} /> Lahore
                        <input className='form-check-input' type="radio" name="q2" value="MUMBAI" onChange={(e) => setQ2(e.target.value)} /> Mumbai
                    </div>
                </div>

                <div className="mb-3 text-start">
                    <p className={`fw-bold ${st3}`}>What is the capital of Bangladesh?</p>
                    <div className="d-flex align-items-center gap-3">
                        <input className='form-check-input' type="radio" name="q3" value="ISLAMABAD" onChange={(e) => setQ3(e.target.value)} /> Islamabad
                        <input className='form-check-input' type="radio" name="q3" value="DHAKA" onChange={(e) => setQ3(e.target.value)} /> Dhaka
                        <input className='form-check-input' type="radio" name="q3" value="LAHORE" onChange={(e) => setQ3(e.target.value)} /> Lahore
                    </div>
                </div>
                
                <button onClick={quiz_logic} className="btn btn-primary w-100 fw-bold">Submit</button>
                
                {cond && (
                    <div className="mt-4 text-center">
                        <p className="fw-bold">Score: {score}</p>
                        <p className="text-success">Right Answers: {rightAnswer}</p>
                        <p className="text-danger">Wrong Answers: {wrongAnswer}</p>
                        <div className="progress mt-3">
                            <div className={`progress-bar ${proColor}`} role="progressbar" style={{ width: `${pro}%` }} aria-valuenow={pro} aria-valuemin="0" aria-valuemax="100">{pro}%</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
