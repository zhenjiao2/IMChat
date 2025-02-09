import React from 'react';
import { TUILogin } from '@tencentcloud/tui-core';
import { Chat, ConversationList, ChatSetting } from '@tencentcloud/chat-uikit-react';
import { UIKitProvider } from '@tencentcloud/uikit-base-component-react';
import '@tencentcloud/chat-uikit-react/dist/esm/index.css';

const config = {
  SDKAppID: Number(process.env.REACT_APP_SDK_APP_ID), 
  userID: String(process.env.REACT_APP_USER_ID), 
  userSig: String(process.env.REACT_APP_USER_SIG), 
}


// TUILogin.login({
//   ...config,
//   useUploadPlugin: true
// }).then(() => {
//   openChat();
// }).catch(() => { });
TUILogin.login({
  ...config,
  useUploadPlugin: true
})
.then(() => {})
.catch(() => {});

// function openChat() {
//   // 1v1 chat: conversationID = 
//   // group chat: conversationID = `GROUP${groupID}`
//   const userID = 'test2'; // userID: 消息接收方的 userID
//   const conversationID = `C2C${userID}`;
//   TUIConversationService.switchConversation(conversationID);
// }

export default function App() {
  // language support en-US(default) / zh-CN / ja-JP / ko-KR / zh-TW
  // theme support light(default) / dark
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <UIKitProvider language='en-US' theme='light'>
        <div style={{ display: 'flex', maxWidth: '30%'}}>
          <ConversationList />
        </div>
        <Chat />
        <ChatSetting />
      </UIKitProvider>
    </div>     
    );
}