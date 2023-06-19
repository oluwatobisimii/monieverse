import React from 'react'

const PrimaryButton = ({ disabled, onClick, label }) => {
    return (
        <button
            className="flex-1 h-14 bg-primary-400 hover:bg-primary-500 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default PrimaryButton