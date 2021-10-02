import React from 'react'

function Notification() {
    return (
    <div class="bg-blue-200 border-blue-600 text-blue-600 border-l-4 p-4" role="alert">
        <p class="font-bold">
             {/* Custom Notification Message Header */}
            You have a Notification                  
        </p>
        <p>
              {/* Custom Notification Message Body */}
            Check it out.
        </p>
</div>

    )
}

export default Notification
