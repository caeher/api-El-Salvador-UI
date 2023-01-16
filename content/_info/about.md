---
title: Cómo resolver todas las promesas en JavaScript
description: Description
draft: false
navigation: true
image:
  src: "/images/departamentos/san-salvador.jpg"
  alt: "El salvador image"
  width: 400
  height: 300
head:
  meta:
    - name: "keywords"
      content: "El Salvador"
---

# Acerca de

Api El Salvador es una iniciativa por parte de estudiantes de Ingeniería en Sistemas Informáticos modalidad en linea de la Universidad del El Salvador que pretende convertirse en una recopilacion de datos de El Salvador.

## Front End

Es la parte de la interfaz de usuario lo que permite la navegación y visualización de todos los datos aquí recopilados.

  Para realizarlo se eligió [NuxtJs](https://nuxt.com/), un potente framework basado en Vuejs que permite la creacion de aplicaciones web multi-render por lo que si en un futuro se quire escala a algo más grande se podrá hacer creando nuevos nuxtModule

## Back End
    
Es la parte que se encarga de la comunicación con la base de datos que contiene la información sobre los departamentos y municipios del país
    
Para realizarlo se eligió a [FastAPI](https://fastapi.tiangolo.com/), un framework de Python para realizar API's con arquitectura REST el cual es igual de rápido que opciones en Node.js como Express.js

    
La obtención de la información de códigos postales se logró mediante un scraper sencillo desarrollado con [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/), una biblioteca para obtener información de archivos HTML y XML.
    
    
## Colaboración

Si deseas colaborar en este proyecto eres bienvenido, por favor leer esta seccion 
::NuxtLink{to="/colaborate"}
colaborate
::