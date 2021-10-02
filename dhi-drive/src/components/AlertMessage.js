import React from 'react'

function AlertMessage() {
    return (
    <div class="bg-red-200 border-red-600 text-red-600 border-l-4 p-4" role="alert">
        <p class="font-bold">
            {/* Custom Alert Message Header */}
            Lights Turned On  
        </p>
        <p>
            {/* Custom Alert Message Body */}
            Turn Off Lights.
        </p>
</div>
    )
}

export default AlertMessage
