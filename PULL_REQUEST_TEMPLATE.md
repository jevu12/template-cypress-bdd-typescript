# PULL REQUEST TEMPLATE

Utiliza la siguiente plantilla para documentar tu pull request y entregarle a los revisores un mayor contexto de la solución aplicada. Debes completar las siguientes secciones:

-- ELIMINA ESTA SECCIÓN UNA VEZ HAYAS COMPLETADO TODA LA DOCUMENTACIÓN DE TU PULL REQUEST --

## TICKET LINK

En este lugar debes incluir los links de los tickets trabajados.

Ejemplo:

- https://app.clickup.com/t/3027830/APP-ZZZ
- https://app.clickup.com/t/3027830/APP-XXX

## BITÁCORA DE ANÁLISIS

En este lugar debes incluir los resultados el análisis preliminar antes del desarrollo, conversaciones o investigaciones realizadas que den visibilidad clara y concisa de lo que implica el cambio. Normalmente debes responder a preguntas como: ¿Qué estaba mal en el código anterior ? [SI APLICA], ¿Cómo se espera que el nuevo código mejore lo que hay implementado actualmente? [SI APLICA], ¿Qué funcionalidades se desean implementar? [SI APLICA]

Ejemplo:

- Identificamos la necesidad de mejorar el componente balance, dado que los cálculos generan muchos renders innecesarios.
- El código en este PR apunta a mejorar el performance del componente slider y la legibilidad del código implementado en las animaciones a través de una abstracción que residirá en el siguiente archivo XXX.ts
- Identificamos la necesidad de implementar un nuevo modulo que permita a los usuarios visualizar todas las fechas festivas disponibles en los últimos 2 años.
- Identificamos la necesidad de implementar un token de autenticación de las peticiones.

-- ELIMINA ESTA SECCIÓN SI PARA TU PULL REQUEST NO APLICA --

## BITÁCORA DE DESARROLLO

En este lugar debes explicar a nivel de código el impacto de la solución y cómo se logra el resultado deseado. Por lo general debes incluir todo lo que sea necesario para que cualquier persona (con poco o nada de contexto) pueda entender profundamente el PR y revisar con mucho más criterio los cambios aplicados.

Ejemplo:

- Se refactoriza el componente balance para que no estén los cálculos dentro del useEffect que renderiza la lista y evitar que cada vez que cambie el estado de un componente se realicen todos los cálculos nuevamente. Inicialmente se habló de implementar la solución de W forma pero se decidió hacer de G forma por los X ó Z motivos.
- Se refactoriza la forma en que los componentes X y Z están conectados al observable X, ya que al momento de actualizar la información se veían afectados a nivel de performance y a su vez impactando la pantalla W, dado que se rerenderizaban en promedio unas 5 veces cada uno.
- Se crea el módulo de días festivos y los componentes W, X y Z para poder presentar a través de un servicio REST los días correspondientes a los próximos 2 años.
- Se crea un middleware que sea capaz de recibir el token generado y evaluar si cumple con los lineamientos definidos para entregar respuestas fallidas cuando sea el caso o sino autorizar a la peticion generada para que obtenga la informacion solicitada.

-- ELIMINA ESTA SECCIÓN SI PARA TU PULL REQUEST NO APLICA --

## EVIDENCIAS DEL COMPORTAMIENTO ANTES DE LA SOLUCIÓN

En este lugar debes agregar screenshots, gifs o videos que permitan a los revisores observar cómo era el comportamiento antes de la solución aplicada.

-- ELIMINA ESTA SECCIÓN SI PARA TU PULL REQUEST NO APLICA --

## EVIDENCIAS DEL COMPORTAMIENTO DESPUÉS DE LA SOLUCIÓN

En este lugar debes agregar screenshots, gifs o videos que permitan a los revisores observar cómo es el comportamiento después de la solución aplicada.

-- ELIMINA ESTA SECCIÓN SI PARA TU PULL REQUEST NO APLICA --

## NOTAS IMPORTANTES

En este lugar debes explicar que configuraciones son necesarias para lograr el resultado deseado. Por lo general debes incluir todo lo que sea necesario para que la solucion pueda convivir correctamente en el ecosistema.

Ejemplo:

- Se deben agregar al .env del S3 del ambiente W, las variables X y Z para poder utilizarlas en el proceso de generacion del token.
- Se deben correr las migraciones en el ambiente X para disponer de los nuevos atributos de la tabla W.
- Se deben añadir al .env del S3 del ambiente Z, las variables X y Z para poder utilizarlas en el proceso de validacion del token de autenticacion de peticiones.

-- ELIMINA ESTA SECCIÓN SI PARA TU PULL REQUEST NO APLICA --
