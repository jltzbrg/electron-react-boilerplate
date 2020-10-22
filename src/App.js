import React from 'react'


function App() {
    return (
        <>
            <h1>Hola, from React in App.js</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('Maxie is so fucking hot.')
            }}>Notify</button>
        </>
    )
}

export default App
