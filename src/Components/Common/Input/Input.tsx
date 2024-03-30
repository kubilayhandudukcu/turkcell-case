import React from 'react';
import './Input.scss';
import { InputModel } from './Input.model';

const Input: React.FC<InputModel> = ({ placeholder, onChange, name, type }) => {
    return (
        <div className="input-wrapper">
            <i className="fa fa-search input-icon"></i>
            <input
                className="input-field"
                type={type || 'text'}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default Input;
