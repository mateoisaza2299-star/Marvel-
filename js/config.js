export const CONFIG = {
  nombre: "Marvel Peluquería",
  whatsapp: "570000000000",
  instagram: "marvelpeluqueria",
  direccion: "Tu dirección aquí",
  horario: {
    texto: "Lunes a sábado · 9:00 a. m. – 7:00 p. m.",
    dias: [1, 2, 3, 4, 5, 6],
    abre: "09:00",
    cierra: "19:00"
  },
  servicios: [
    { id: "cortes", nombre: "Cortes", descripcion: "Corte a tu medida, con tijera o máquina y un acabado limpio.", duracion: 45, precio: 35000 },
    { id: "peinados", nombre: "Peinados", descripcion: "Volumen, ondas o recogido, pensado para la ocasión.", duracion: 60, precio: 45000 },
    { id: "tintes", nombre: "Tintes", descripcion: "Color uniforme o con matices, cuidado de la raíz a las puntas.", duracion: 120, precio: 90000 },
    { id: "barberia", nombre: "Barbería", descripcion: "Corte, barba y perfilado con líneas precisas.", duracion: 45, precio: 40000 },
    { id: "tratamientos", nombre: "Tratamientos capilares", descripcion: "Hidratación y reparación para brillo y suavidad.", duracion: 50, precio: 55000 }
  ],
  profesionales: []
};

function telefonoVisible(numero) {
  const local = numero.startsWith("57") && numero.length === 12 ? numero.slice(2) : numero;
  return local.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

const horario = CONFIG.horario && typeof CONFIG.horario === "object" ? CONFIG.horario : { texto: String(CONFIG.horario || ""), dias: [1, 2, 3, 4, 5, 6], abre: "09:00", cierra: "19:00" };

export const negocio = {
  nombre: CONFIG.nombre,
  nombreCorto: "Marvel",
  ciudad: "",
  eslogan: "Tu estilo, nuestra pasión",
  enPreparacion: false,
  indexable: false,
  whatsapp: CONFIG.whatsapp,
  telefono: telefonoVisible(String(CONFIG.whatsapp || "")),
  direccion: CONFIG.direccion,
  direccionCorta: CONFIG.direccion,
  instagram: CONFIG.instagram,
  horario,
  mapaConsulta: CONFIG.direccion,
  unaSede: true,
  mostrarWhatsappContacto: true,
  mensajeWhatsApp: "Hola, quiero información sobre Marvel Peluquería.",
  mensajeProductos: "Hola, quiero preguntar por el cuidado del cabello en Marvel Peluquería.",
  sitio: "",
  email: "",
  mapsUrl: "",
  mapaEmbed: "",
  zona: "",
  horasAntesDeCerrar: 0,
  bloqueMinutos: 60,
  redes: { resenas: "" },
  precios: {},
  minutos: {},
  profesionales: CONFIG.profesionales,
  politicaReserva: "Para cancelar o cambiar la cita, avisa con al menos 2 horas de anticipación por WhatsApp.",
  avisoDatos: "Tu nombre, celular, servicio y fecha se guardan en este navegador para armar la cita y se envían por WhatsApp al confirmar.",
  privacidad: [
    "Tratamos tu nombre, celular, servicio y fecha para agendar la cita y escribirte por WhatsApp sobre ella. En la política de tratamiento de datos están tus derechos y el canal para pedir una corrección o la supresión."
  ],
  mensajeReserva: "",
  nosotros: {
    etiqueta: "Nosotros · Marvel",
    titulo: "Tu estilo, nuestra pasión",
    intro: "En Marvel Peluquería cuidamos el cabello de mujeres y hombres con la misma atención: el corte, el color y el acabado se piensan para quien se sienta en la silla.",
    edadesTitulo: "Para todas las edades",
    edades: ["Mujeres", "Hombres", "Jóvenes", "Niños"],
    historias: [
      {
        titulo: "La sala",
        texto: "Un espacio claro, con luz propia, para esperar con calma.",
        alt: "Sala de espera de Marvel Peluquería con banca roja, flores y espejo con luz azul."
      },
      {
        titulo: "El salón",
        texto: "Sillas, espejos y luz de trabajo para un acabado cuidado.",
        alt: "Interior de Marvel Peluquería con sillas negras y espejos iluminados."
      },
      {
        titulo: "La marca",
        texto: "Cortes, peinados, tintes, peluquería y tratamientos capilares.",
        alt: "Pendón de Marvel Peluquería con los servicios del salón."
      }
    ],
    valoresTitulo: "Lo que nos mueve",
    valores: [
      { titulo: "Presentación impecable", texto: "Te recibimos como queremos que salgas." },
      { titulo: "Técnica y experiencia", texto: "Práctica y oficio en cada servicio." },
      { titulo: "Compromiso", texto: "Tu tiempo importa y lo cumplimos." },
      { titulo: "Actitud de servicio", texto: "Atención premium, de mujer y de hombre." }
    ],
    cita: "Tu estilo, nuestra pasión.",
    firma: "Marvel Peluquería",
    cierreTitulo: "Tu turno está listo",
    cierreReserva: "Reserva tu cita",
    cierreLlegar: "Cómo llegar",
    cifras: []
  },
  servicios: CONFIG.servicios.map((item, orden) => ({
    id: item.id,
    nombre: item.nombre,
    descripcion: item.descripcion,
    duracion_min: item.duracion,
    precio: item.precio,
    orden,
    activo: true
  })),
  preguntas: [
    { pregunta: "¿Cómo agendo mi cita?", respuesta: "Desde esta página, en un minuto. Al confirmar, la cita se abre en WhatsApp." },
    { pregunta: "¿Atienden mujeres y hombres?", respuesta: "Sí. Es una peluquería mixta: cortes, peinados, color, peluquería y tratamientos." },
    { pregunta: "¿Dónde están?", respuesta: "" },
    { pregunta: "¿Cuál es el horario?", respuesta: "" }
  ],
  textos: {
    heroEtiqueta: "Marvel Peluquería",
    heroAntes: "Tu estilo, ",
    heroPalabra: "nuestra pasión",
    heroDespues: "",
    heroLead: "Peluquería para mujer y hombre. Cortes, peinados, color y cuidado del cabello.",
    agenda: "Reserva tu cita",
    verServicios: "Ver servicios",
    datoAgenda: "Reserva en línea",
    datoEdades: "Mujer y hombre",
    serviciosTitulo: "Menú de servicios",
    consultar: "",
    serviciosNota: "",
    productos: "Cuidado para llevar a casa",
    preguntaProductos: "Pregunta por WhatsApp",
    pista: "Busca el letrero de Marvel Peluquería.",
    llegar: "Cómo llegar",
    llamar: "Llamar",
    reservasTitulo: "Reserva tu cita en línea",
    reservasNota: "",
    faqTitulo: "Preguntas frecuentes"
  }
};

export function urlSitio(pagina) {
  const base = String(negocio.sitio || "").replace(/\/+$/, "");
  if (!pagina || pagina === "index" || pagina === "index.html") return base + "/";
  return base + "/" + String(pagina).replace(/^\//, "");
}

export function consultaMapa() {
  return String(negocio.mapaConsulta || "").trim() || [negocio.nombre, direccionLinea()].filter(Boolean).join(", ");
}

export function enlaceMapa() {
  const guardado = String(negocio.mapsUrl || "").trim();
  if (guardado) return guardado;
  const consulta = consultaMapa();
  if (!consulta) return "";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(consulta);
}

export function enlaceDirecciones() {
  return enlaceMapa();
}

export function enlaceEmbed() {
  const guardado = String(negocio.mapaEmbed || "").trim();
  if (guardado) return guardado;
  const consulta = consultaMapa();
  if (!consulta) return "";
  return "https://www.google.com/maps?q=" + encodeURIComponent(consulta) + "&output=embed";
}

export function enlaceTelefono() {
  const wa = String(negocio.whatsapp || "").replace(/\D/g, "");
  if (wa) return "tel:+" + wa;
  let tel = String(negocio.telefono || "").replace(/\D/g, "");
  if (!tel) return "";
  if (tel.length === 10) tel = "57" + tel;
  return "tel:+" + tel;
}

export function formatPrecio(valor) {
  if (valor == null || valor === "") return "";
  const n = Number(valor);
  if (!Number.isFinite(n)) return "";
  if (n < 1000) return "$" + n + "k";
  return "$" + new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(n);
}

export function formatoPrecio(valor) {
  return formatPrecio(valor);
}

export function formatDuracion(minutos) {
  const n = Math.round(Number(minutos));
  if (!Number.isFinite(n) || n <= 0) return "";
  const horas = Math.floor(n / 60);
  const resto = n % 60;
  if (horas && resto) return horas + " h " + resto + " min";
  if (horas) return horas + " h";
  return resto + " min";
}

export function esServicioVip(servicio) {
  if (!servicio) return false;
  if (servicio.destacado === true || servicio.vip === true || servicio.es_vip === true) return true;
  return String(servicio.nombre || "").trim().toLowerCase() === "servicio vip";
}

export function esAdicional(servicio) {
  const nombre = String(servicio && servicio.nombre || "").trim().toLowerCase();
  const categoria = String(servicio && servicio.categoria || "").trim().toLowerCase();
  return nombre === "depilada de nariz" || categoria === "adicionales" || categoria === "adicional";
}

export function ordenarServicios(lista) {
  const rango = (item) => (esServicioVip(item) ? 0 : esAdicional(item) ? 2 : 1);
  return (lista || []).slice().sort((a, b) => rango(a) - rango(b) || (Number(a.orden) || 0) - (Number(b.orden) || 0) || String(a.nombre || "").localeCompare(String(b.nombre || ""), "es"));
}

export function rangoPrecio() {
  const valores = Object.values(negocio.precios).map(Number).filter((n) => n > 0);
  if (!valores.length) return "";
  const min = Math.min(...valores);
  const max = Math.max(...valores);
  if (min === max) return formatoPrecio(min);
  return formatoPrecio(min) + "–" + formatoPrecio(max);
}

export function direccionLinea() {
  const d = negocio.direccion;
  if (!d) return "";
  if (typeof d === "string") return d.trim();
  return [d.calle, d.barrio, d.ciudad, d.region].filter(Boolean).join(", ");
}

export function urlInstagram() {
  const raw = String(negocio.instagram || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return "https://www.instagram.com/" + raw.replace(/^@/, "").replace(/\/+$/, "") + "/";
}

export function handleInstagram() {
  const raw = String(negocio.instagram || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return "@" + raw.replace(/\/+$/, "").split("/").pop();
  return "@" + raw.replace(/^@/, "");
}

export function reservasEnLinea() {
  return false;
}

export function enlaceWhatsapp(texto) {
  const numero = String(negocio.whatsapp || "").replace(/\D/g, "");
  if (!numero) return "";
  const mensaje = texto || negocio.mensajeWhatsApp || "Hola, quiero información sobre Marvel Peluquería.";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export function diaSemana(iso) {
  const [year, month, day] = String(iso || "").split("-").map(Number);
  if (!year || !month || !day) return -1;
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function tituloPublico() {
  return negocio.nombre;
}

export function descripcionPublica() {
  return negocio.nombre + ". Peluquería para mujer y hombre. Tu estilo, nuestra pasión.";
}

export function textoHorarioPublico() {
  const horario = negocio.horario;
  if (horario && typeof horario === "object" && horario.texto) return String(horario.texto);
  if (typeof horario === "string") return horario.trim();
  return "";
}

export function callePublica() {
  const completa = String(negocio.direccion || "").trim();
  const ciudad = String(negocio.ciudad || "").trim();
  const colas = ciudad ? [", " + ciudad + ", Colombia", ", " + ciudad] : [];
  const cola = colas.find((item) => completa.endsWith(item));
  return cola ? completa.slice(0, -cola.length) : completa;
}

export function partesBogota(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date || new Date());
  const pick = (type) => parts.find((item) => item.type === type).value;
  const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  let hora = Number(pick("hour"));
  if (hora === 24) hora = 0;
  return {
    iso: pick("year") + "-" + pick("month") + "-" + pick("day"),
    dia: map[pick("weekday").slice(0, 3)] ?? 0,
    minutos: hora * 60 + Number(pick("minute"))
  };
}

function reglasHorario() {
  const horario = negocio.horario;
  if (Array.isArray(horario)) return horario;
  if (!horario || typeof horario !== "object" || !horario.abre || !horario.cierra) return [];
  const dias = (Array.isArray(horario.dias) ? horario.dias : []).map((dia) => {
    const numero = Number(dia);
    return numero === 7 ? 0 : numero;
  });
  return [{ dias, abre: horario.abre, cierra: horario.cierra }];
}

export function reglaDelDia(dia) {
  return reglasHorario().find((item) => Array.isArray(item.dias) && item.dias.includes(dia)) || null;
}

function reglaDe(dia) {
  return reglaDelDia(dia);
}

function minutosReloj(hhmm) {
  const [hora, minuto] = String(hhmm || "0:0").split(":").map(Number);
  return hora * 60 + minuto;
}

export function horaCorta(hhmm) {
  const [hora, minuto] = String(hhmm || "00:00").split(":");
  return String(Number(hora)) + ":" + minuto;
}

export function hora12(hhmm) {
  const hour = Number(String(hhmm || "00:00").slice(0, 2));
  const suffix = hour < 12 ? "am" : "pm";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return hour12 + ":00 " + suffix;
}

export function horasDelDia(iso) {
  const regla = reglaDe(diaSemana(iso));
  if (!regla || regla.cerrado || !regla.abre || !regla.cierra) return [];
  const abre = Number(String(regla.abre).slice(0, 2));
  const cierra = Number(String(regla.cierra).slice(0, 2));
  const last = cierra - Number(negocio.horasAntesDeCerrar || 0);
  const slots = [];
  for (let hour = abre; hour <= last; hour += 1) slots.push(String(hour).padStart(2, "0") + ":00");
  return slots;
}

export function horarioPublicado() {
  return reglasHorario().some((item) => !item.cerrado && item.abre && item.cierra);
}

export function textoHorario(regla) {
  if (regla && regla.cerrado) return "Cerrado";
  if (!regla || !regla.abre || !regla.cierra) return "";
  return hora12(regla.abre) + " – " + hora12(regla.cierra);
}

export function estadoApertura(date) {
  if (!horarioPublicado()) return { abierto: false, texto: "Por confirmar", pendiente: true };
  const ahora = partesBogota(date);
  const hoy = reglaDe(ahora.dia);
  if (hoy && !hoy.cerrado && hoy.abre && hoy.cierra) {
    const abre = minutosReloj(hoy.abre);
    const cierra = minutosReloj(hoy.cierra);
    if (ahora.minutos >= abre && ahora.minutos < cierra) return { abierto: true, texto: "Abierto ahora" };
  }
  const nombres = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  for (let salto = 0; salto < 8; salto += 1) {
    const dia = (ahora.dia + salto) % 7;
    const regla = reglaDe(dia);
    if (!regla || regla.cerrado || !regla.abre) continue;
    if (salto === 0 && ahora.minutos >= minutosReloj(regla.abre)) continue;
    const hora = horaCorta(regla.abre);
    if (salto === 0) return { abierto: false, texto: "Cerrado, abrimos hoy a las " + hora };
    if (salto === 1) return { abierto: false, texto: "Cerrado, abrimos mañana a las " + hora };
    return { abierto: false, texto: "Cerrado, abrimos el " + nombres[dia] + " a las " + hora };
  }
  return { abierto: false, texto: "Cerrado ahora" };
}

export function celularColombia(valor) {
  let digits = String(valor || "").replace(/\D/g, "");
  if ((digits.startsWith("57") && digits.length === 12) || (digits.startsWith("057") && digits.length === 13)) {
    digits = digits.slice(-10);
  }
  if (digits.length === 10 && digits.startsWith("3")) {
    return { ok: true, digitos: digits };
  }
  if (!digits) return { ok: false, mensaje: "Escribe tu celular." };
  return { ok: false, mensaje: "El celular debe tener 10 dígitos y empezar por 3. Ejemplo: 300 123 4567." };
}

export function avisoDuracion(nombre) {
  const minutos = Number(negocio.minutos[nombre]);
  if (!Number.isFinite(minutos) || minutos <= 0) return "";
  const base = "Duración estimada: " + minutos + " min.";
  if (minutos > Number(negocio.bloqueMinutos || 60)) {
    return base + " El bloque de una hora puede quedarse corto. Si necesitas más tiempo, escríbelo en la nota.";
  }
  return base;
}

export function minutosDe(nombre) {
  const minutos = Number(negocio.minutos[nombre]);
  return Number.isFinite(minutos) && minutos > 0 ? minutos : 60;
}
