import React from 'react';

export default function DateInput({ value, onChange, label }) {
    return (
        <div>
            <label>{label}</label>
            <input type="date" value={value} onChange={onChange} />
        </div>
    );
}
