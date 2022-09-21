# INTRODUÇÃO AO AXIOS HTTP

![Axios HTTP](https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg)

Axios é um plugin para simplificar requisições de APIs. Há diversas configurações extras que podem ser passadas, mas as básicas já fazem tudo sem nenhuma dificuldade.

## COMO UTILIZAR O AXIOS

Fazer requisições externas à sua aplicação pode ser algo bem comum, e para isso escolher o melhor método muda tudo. A forma nativa de se fazer no javascript é bem complicada:

```
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", yourUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
```

Para simplificar, temos o **fetchApi**, que deixa o código mais legível e as requisições mais simples:

```
const options = {
  ...
}
fetch('http://example.com/movies.json', options)
  .then((response) => response.json())
  .then((data) => console.log(data));
  .catch((error => { yourFunction })
```

Com o AXIOS HTTP, as requisições são ainda mais simplificadas:

```
  axios.get(yourUlr)
    .then((response) => { yourFunction })
    .catch((error => { yourFunction })
}
```

A principal simplifcação é que no **FETCH** você precisa especificar o método e os cabeçalhos a serem passados, caso tenha _token_ ou outras informações importantes.

No Axios, é possível simplificar passando `axios.METHOD`, onde METHOD poode ser GET, POST, PUT, PATCH ou DELETE.

### CURSO DE INTROUÇAÕ AO AXIOS

Aprenda a usar o AXIOS HTTP gratuitamente através [deste link](https://www.youtube.com/playlist?list=PLcoYAcR89n-pbc60vYzVD1Fva5KaPmlGQ)

![LaraVue](https://escola.laravue.com.br/_nuxt/img/laravue-logo.6cda244.svg)
