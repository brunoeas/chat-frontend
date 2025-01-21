import axios from 'axios';

async function getMessages() {
  return axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL_API}/v1/chat?pageSize=200`
  });
}

async function sendMessage(messageToSend: string, user: string) {
  const body = {
    text: messageToSend,
    username: user
  }
  return axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_URL_API}/v1/chat`,
    data: body
  });
}

export { getMessages, sendMessage };