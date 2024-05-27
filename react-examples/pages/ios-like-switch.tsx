import React from 'react';

const iOSSwitchPage = () => {
   return (
        <>
            <input type="checkbox" id="switch" /><label htmlFor="switch"></label>
            <style jsx>
                {`
                input[type=checkbox]{
                    height: 0;
                    width: 0;
                    visibility: hidden;
                  }
                  
                  label {
                    cursor: pointer;
                    text-indent: -9999px;
                    width: 100px;
                    height: 55px;
                    background: #E9E9EA;
                    display: block;
                    border-radius: 55px;
                    position: relative;
                    transition: all 0.1s;
                  }
                  
                  label:after {
                    content: '';
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    width: 45px;
                    height: 45px;
                    background: #fff;
                    border-radius: 45px;
                    box-shadow:
                      0px 3px 8px rgba(0, 0, 0, 0.15),
                      0px 3px 1px rgba(0, 0, 0, 0.06);
                  }
                  
                  input:checked + label {
                    background: #32D74B;
                  }
                  
                  input:checked + label:after {
                    left: calc(100% - 5px);
                    transform: translateX(-100%);
                    transition: all 0.1s;
                  }
                  
                  label:active:after {
                    width: 90px;
                  }
                `}
            </style>
        </>
   ) 

}

export default iOSSwitchPage;