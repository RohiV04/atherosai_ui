import React from 'react';
import Container from '@components/Container';


const CustomRadio = () => {
    return <>
      <Container>
        <div className='radio-container'>
            <div>
                <input type="radio" id="javascript" name="language" value="javascript" /><label htmlFor="javascript">JavaScript</label>
            </div>
            <div>
                <input type="radio" id="python" name="language" value="python"/><label htmlFor="python">Python</label>
            </div>
            <div>
                <input type="radio" id="scala" name="language" value="scala"/><label htmlFor="scala">Scala</label>
            </div>
        </div>
      </Container>
      <style jsx>
        {`
            .radio-container {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            input[type="radio"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                vertical-align: text-bottom;
                width: 20px;
                height: 20px;  
                padding: 1.5px;
                background-clip: content-box;
                border: 2px solid white;
                color: white;
                border-radius: 50%;
                margin-right: 12px;
                transition: 0.2s ease-in;
                cursor: pointer;                   
            }

            input[type="radio"]:checked {
                border: 3px solid #FF9950;
                background-color: #FF9950;
            }

            label {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                color: white;
                font-size: 18px;
                line-height: 18px;
                cursor: pointer;
                vertical-align: text-bottom;
            }
        `}
      </style>
    </>
}

export default CustomRadio;