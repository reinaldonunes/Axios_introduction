const statusEl = document.getElementById('status');
const dataEl = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl = document.getElementById('config');


const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint_multiply = 'https://jsonplaceholder.typicode.com';

const get = () => {
  const config = {
    params: {
      _limit: 2,
    }
  };
  axios.get(endpoint, config)
    .then((response) => renderOutput(response))
}

const post = () => {
  const data = {
    title: 'LaraVue',
    body: 'bar',
    userId: 1,
  }
  axios.post(endpoint, data)
    .then((response) => renderOutput(response))
}

const put = () => {
  const data = {
    id: 1,
    title: 'LaraVue online',
    body: 'bar',
    userId: 1,
  }

  axios.put(endpoint+'/1',data)
    .then((response) => renderOutput(response))
}

const patch = () => {
  const data = {
    body: 'LaraVue'
  }

  axios.patch(endpoint+'/1',data)
    .then((response) => renderOutput(response))
}

const del = () => {
  axios.delete(endpoint+'/2')
  .then((response) => renderOutput(response))
}

const multiple = () => {
  Promise.all([
    axios.get(endpoint_multiply+"/posts?limit=2"),
    axios.get(endpoint_multiply+"/users?limit=2")
  ]).then((response) => {
    console.table(response[0].data)
    console.table(response[1].data)
  })
}

const transform = () => {
    console.log('transform');
}

const errorHandling = () => {
    console.log('errorHandling');
}

const cancel = () => {
    console.log('cancel');
}

const clear = () => {
    statusEl.innerHTML = '';
    statusEl.className = '';
    dataEl.innerHTML = '';
    headersEl.innerHTML = '';
    configEl.innerHTML = '';
}

const renderOutput = (response) => {
    // Status
    const status = response.status;
    statusEl.removeAttribute('class');
    let statusElClass = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium';
    if (status >= 500) {
        statusElClass += ' bg-red-100 text-red-800';
    } else if (status >= 400) {
        statusElClass += ' bg-yellow-100 text-yellow-800';
    } else if (status >= 200) {
        statusElClass += ' bg-green-100 text-green-800';
    }

    statusEl.innerHTML = status;
    statusEl.className = statusElClass;

    // Data
    dataEl.innerHTML = JSON.stringify(response.data, null, 2);
    Prism.highlightElement(dataEl);

    // Headers
    headersEl.innerHTML = JSON.stringify(response.headers, null, 2);
    Prism.highlightElement(headersEl);

    // Config
    configEl.innerHTML = JSON.stringify(response.config, null, 2);
    Prism.highlightElement(configEl);
}

document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put').addEventListener('click', put);
document.getElementById('patch').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('multiple').addEventListener('click', multiple);
document.getElementById('transform').addEventListener('click', transform);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('clear').addEventListener('click', clear);
