import React from 'react'
import Sidebar from './components/Sidebar'
import ChatInput from './components/ChatInput'
import ApiExample from './components/ApiExample'

const App = () => {
  return (
    <div className="flex h-screen  ">
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-auto">
          {/* Messages would go here */}
          <p className="text-gray-900 text-center mt-10">Chat content goes here</p>
        </div>
        {/* Chat Input at bottom */}
        <ChatInput  />
      </div>
      <ApiExample />
    </div>
  )
}

export default App