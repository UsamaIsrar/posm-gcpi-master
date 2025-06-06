import React from 'react';

const ExportButton = (props) => {
    return <button className='export-btn' onClick={props.onClick} disabled={props.disabled}>
        <div className='export-ctn'>Export file</div>
        </button>
}

export default ExportButton;