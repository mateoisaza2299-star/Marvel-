# Marvel Peluquería

Beta pública de Marvel Peluquería. El nombre, el contacto, los servicios y los profesionales editables viven en `CONFIG`, al inicio de `js/config.js`.

La reserva no usa una base de datos. El modal guarda la cita en `localStorage` y, al confirmar, abre WhatsApp con el resumen. Las horas ocupadas son las que ya están guardadas para ese día. El envío está aislado en `confirmarReserva`, dentro de `js/reservas.js`, para cambiarlo después.

WhatsApp, Instagram y la dirección del ejemplo se reemplazan en `CONFIG`.
