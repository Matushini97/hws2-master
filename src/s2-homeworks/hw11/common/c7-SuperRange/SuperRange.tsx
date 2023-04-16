import React, {ChangeEvent} from 'react'
import {Slider, SliderProps} from '@mui/material'
import {Dispatch} from "redux";



const SuperRange: React.FC<SliderProps> = (props) => {



    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
