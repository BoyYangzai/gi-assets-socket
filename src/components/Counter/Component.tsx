import { useContext } from '@antv/gi-sdk';
import React, { useEffect } from 'react';
import io from 'socket.io/client-dist/socket.io'
const socket = io('http://localhost:8080')
/**
 * 无关代码
 */
let num = 0
setInterval(() => {
 // 不用管这个socket
  socket.emit('update',num++)
}, 1000)
  /**
 * 无关代码
 */

const Socket = props => {

  // Socket核心代码
  const { updateContext, transform } = useContext()
  useEffect(() => {
    socket.on('update', (res) => {
      updateContext(draft => {
        draft.data=transform(res)
      })
    })
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '100px',
        left: '50px',
        background: 'red',
      }}
    >
      正在实时更新 ...
    </div>
  );
};

export default Socket;
