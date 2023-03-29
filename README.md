# Lottus Dream

Lottus Dream es un proyecto creado para la sumativa n°1 de la asignatura Programacion Web de la carrera Analista Programador Computacional en DuocUc.

## Descripción de la idea

Lottus Dream es una empresa que arrienda instalaciones para la realización de eventos de tipo social y empresarial.
Cuenta con 2 tipos de roles: Cliente y Administración, los cuales se diferencian por el tipo de login que tienen.

+ Si quien inicia sesion es un cliente tendra la siguiente vista:
    + Datos de prueba: usuario/usuario
![Cliente](assets/readme/cliente-login.jpg)
![Cliente](assets/readme/cliente-logeado.jpg)

(Para deslogear al usuario cliente solo debe presionar en su nombre -> ir a su perfil y desde ahi se cierra sesión)

+ Si quien inicia sesión es un administrador tendra la siguiente vista:
    + Datos de prueba: admin/admin
![Admin](assets/readme/admin-login.jpg)
![Admin](assets/readme/admin-logeado.jpg)

(Para deslogear al usuario administrador solo debe presionar en cerrar sesión)

## Lo requerido
+ Inicio de sesión
![requerimiento](assets/readme/inicio-sesion.jpg)
+ Registro de usuarios
![requerimiento](assets/readme/registrar-usuario.jpg)
+ Contraseña con 4 validaciones (dentro del app.js estan las validaciones mencionadas en ese tooltip)
![requerimiento](assets/readme/validar-pass.jpg)
+ Recuperar contraseña
![requerimiento](assets/readme/recuperar-pass.jpg)
+ Modificacion de perfil
![requerimiento](assets/readme/modificar-perfil1.jpg)
![requerimiento](assets/readme/modificar-perfil2.jpg)
+ Para la tematica de arriendos:
    + Visualización o monitoreo de compras asociadas al usuario que inició sesión
    ![requerimiento](assets/readme/monitoreo-prod-cliente.jpg)
    + Se deben crear mantenedores para la información relativa al cliente, usuarios, productos y manejo de inventario
    ![requerimiento](assets/readme/admin-listado-productos.jpg)