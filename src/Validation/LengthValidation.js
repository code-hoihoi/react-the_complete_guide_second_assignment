import React from 'react';

const LengthValidation  = (props) => {
    const MIN_LENGTH = 5;
    const MAX_LENGTH = 16;
    const typed_str_length = props.length;
    //const typed_str_length = 10;
    let rendering;
    if (typed_str_length < MIN_LENGTH) {
        rendering = (
            <div>
                <h5>Validation Status: TOO SHORT!!</h5>
            </div>  
        );
    }
    else if (typed_str_length > MAX_LENGTH){
        rendering = (
            <div>
                <h5>Validation Status: TOO LONG!!</h5>
            </div>
          );
    }
    else {
        rendering = (
          <div>
              <h5>Validation Status: OK</h5>
          </div>  
        );
    }
    return rendering;
}

export default LengthValidation;