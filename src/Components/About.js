import React, { useState } from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     // border: '1px solid white'
    // })


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
    }

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {

    //         setMyStyle({
    //             backgroundColor: 'grey',
    //             color: 'white',
    //             border: '1px solid white',
    //             borderRadius: '10px'
    //             // border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <div className="container" style={myStyle}>

            <h1 className="my-4" >About Us</h1>

            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button" style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and effuentyly. Be it word count, charcter count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed" style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong> Free To Use </strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Textutils is a <strong>free</strong> charcter counter tool that provide instant charcter count & word count statistics for a given text. Textutils reports the number of words and the charcters. Thus it is suitable for writing text with word/ charcter limit
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed" style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong> Browser Compatible </strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, opera. It suits to count charcters in facebook, blog, books, excel document, pdf dopcument, essays, etc.
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
