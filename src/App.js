import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed  from './components/ChatFeed';
import './App.css';


const App = () =>{

            if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="523a8a13-15ca-4611-968a-45ca36e1daf9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />

    );
}

export default App;