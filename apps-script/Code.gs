/**
 * ECLAT / ATELIER & GEMOLOGIST – Google Apps Script API v2
 * Spreadsheet ID: 12DN8f1PoDxgAQ8za14Zis4TeJQXxBPiCp_mULw9tVoA
 *
 * ==================================================
 *  INSTRUCCIONES PARA ACTUALIZAR EN GOOGLE SHEETS
 * ==================================================
 * 1. Abre tu Google Sheet: "Atelier&Gemologist E-commerce DB"
 * 2. En el menú superior: Extensiones > Apps Script
 * 3. Reemplaza TODO el código por este archivo
 * 4. Guarda con Ctrl+S
 * 5. Haz clic en: Implementar > Administrar implementaciones
 * 6. Clic en el icono de lápiz (Editar) en la versión activa:
 *    - Versión: "Nueva versión"
 *    - Clic en "Implementar"
 * 7. La URL se mantendrá exactamente igual y ya estará activa con Login/Registro.
 */

const SPREADSHEET_ID = '12DN8f1PoDxgAQ8za14Zis4TeJQXxBPiCp_mULw9tVoA';

const SHEET_INVENTARIO = 'Inventario';
const SHEET_CLIENTES   = 'Clientes';
const SHEET_PEDIDOS    = 'Pedidos';
const SHEET_DETALLE    = 'Detalle de pedido';

function jsonOut(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function openSheet(name) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(name);
  if (!sh) throw new Error('Hoja no encontrada: "' + name + '"');
  return sh;
}

function sheetToObjects(sh) {
  const data = sh.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0].map(h => String(h).trim());
  const rows = data.slice(1);
  return rows.map((row, index) => {
    const obj = { _row: index + 2 };
    headers.forEach((h, i) => {
      if (h) obj[h] = row[i];
    });
    return obj;
  });
}

function doGet(e) {
  try {
    const params = (e && e.parameter) || {};
    const action = params.action || 'getProducts';
    
    // 1. Obtener Productos
    if (action === 'getProducts') {
      const sh = openSheet(SHEET_INVENTARIO);
      const items = sheetToObjects(sh);
      
      const products = items.map((item, idx) => {
        const idProd = String(item.ID_Producto || '').trim() || `PRD${String(idx + 1).padStart(4, '0')}`;
        
        let priceNum = 0;
        if (typeof item.PV === 'number') {
          priceNum = item.PV;
        } else if (typeof item.PV === 'string') {
          priceNum = parseFloat(item.PV.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        }

        const cat = String(item.Categoria || '').trim().toUpperCase();
        const categorySlug = (cat === 'AC' || cat.includes('COMPROMISO')) ? 'compromiso' : 'matrimonio';

        return {
          id: idx + 1,
          ID_Producto: idProd,
          SKU: item.SKU || '',
          Nombre_Producto: item.Nombre_Producto || '',
          Stock: Number(item.Stock) || 0,
          PV: priceNum,
          Categoria: cat,
          Detalle: item.Detalle || '',
          Metal: item.Metal || '',
          Quilates: item.Quilates || '',
          Descuentos: item.Descuentos || 0,
          
          name: item.Nombre_Producto || '',
          sku: item.SKU || '',
          price: priceNum,
          category: categorySlug,
          metal: item.Metal || '',
          carat: item.Quilates || '',
          description: item.Detalle || '',
          badge: (item.Descuentos && Number(item.Descuentos) > 0) ? `${Math.round(Number(item.Descuentos) <= 1 ? Number(item.Descuentos) * 100 : Number(item.Descuentos))}% OFF` : '',
          image: `img/${idProd}/1.jpg`,
          imageHover: `img/${idProd}/2.jpg`
        };
      });

      return jsonOut({ status: 'success', total: products.length, data: products });
    }

    // 2. Registro de Cliente (soporta GET para evitar CORS)
    if (action === 'registerCustomer') {
      return handleRegister(params);
    }

    // 3. Login de Cliente (soporta GET)
    if (action === 'loginCustomer') {
      return handleLogin(params);
    }

    // 4. Crear Pedido (soporta GET para evitar CORS)
    if (action === 'createOrder') {
      let orderPayload = params;
      if (params.data) {
        try {
          orderPayload = JSON.parse(params.data);
        } catch (e) {
          orderPayload = params;
        }
      }
      return handleCreateOrder(orderPayload);
    }

    return jsonOut({ status: 'error', message: 'Acción no válida' });
  } catch (err) {
    return jsonOut({ status: 'error', message: err.toString() });
  }
}

function doPost(e) {
  try {
    let postData = {};
    if (e && e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (ex) {
        postData = e.parameter || {};
      }
    } else {
      postData = (e && e.parameter) || {};
    }

    const action = postData.action || 'registerCustomer';

    if (action === 'registerCustomer') {
      return handleRegister(postData);
    }

    if (action === 'loginCustomer') {
      return handleLogin(postData);
    }

    if (action === 'createOrder') {
      return handleCreateOrder(postData);
    }

    return jsonOut({ status: 'error', message: 'Acción POST no reconocida' });
  } catch (err) {
    return jsonOut({ status: 'error', message: err.toString() });
  }
}

// ──────────────────────────────────────────
//  LÓGICA DE REGISTRO
// ──────────────────────────────────────────
function handleRegister(data) {
  const sh = openSheet(SHEET_CLIENTES);
  const rows = sh.getDataRange().getValues();
  
  const nombre = String(data.nombre || data.Nombre || '').trim();
  const apellido = String(data.apellido || data.Apellido || '').trim();
  const correo = String(data.correo || data.Correo || data.email || '').trim().toLowerCase();
  const password = String(data.password || data.contrasena || data.Contraseña || '').trim();
  const prefix = String(data.prefix || data.Prefix || '+51').trim();
  const celular = String(data.celular || data.Celular || data.phone || '').trim();
  const cumpleanos = String(data.cumpleanos || data.Cumpleaños || data.birthday || '').trim();

  if (!nombre || !apellido || !correo || !password) {
    return jsonOut({ status: 'error', message: 'Por favor completa todos los campos requeridos.' });
  }

  // Validar si el correo ya existe en la hoja (columna D = índice 3)
  for (let i = 1; i < rows.length; i++) {
    const existingEmail = String(rows[i][3] || '').trim().toLowerCase();
    if (existingEmail === correo) {
      return jsonOut({ status: 'error', message: 'El correo electrónico ya se encuentra registrado. Por favor inicia sesión.' });
    }
  }

  // Generar ID_Cliente correlativo: CL00001, CL00002...
  let maxId = 0;
  for (let i = 1; i < rows.length; i++) {
    const idVal = String(rows[i][0] || '').trim().toUpperCase();
    const match = idVal.match(/CL(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxId) maxId = num;
    }
  }
  const nextIdNum = maxId + 1;
  const newClientId = 'CL' + String(nextIdNum).padStart(5, '0');

  // Insertar fila en Clientes: [ID_Cliente, Nombre, Apellido, Correo, Contraseña, Prefix, Celular, Cumpleaños]
  sh.appendRow([
    newClientId,
    nombre,
    apellido,
    correo,
    password,
    prefix,
    celular,
    cumpleanos
  ]);

  return jsonOut({
    status: 'success',
    message: 'Cuenta creada con éxito',
    customer: {
      ID_Cliente: newClientId,
      Nombre: nombre,
      Apellido: apellido,
      Correo: correo,
      Prefix: prefix,
      Celular: celular,
      Cumpleaños: cumpleanos
    }
  });
}

// ──────────────────────────────────────────
//  LÓGICA DE LOGIN
// ──────────────────────────────────────────
function handleLogin(data) {
  const sh = openSheet(SHEET_CLIENTES);
  const rows = sh.getDataRange().getValues();
  
  const correo = String(data.correo || data.Correo || data.email || '').trim().toLowerCase();
  const password = String(data.password || data.contrasena || data.Contraseña || '').trim();

  if (!correo || !password) {
    return jsonOut({ status: 'error', message: 'Ingresa correo y contraseña.' });
  }

  // Buscar coincidencia
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const rowEmail = String(row[3] || '').trim().toLowerCase();
    const rowPass = String(row[4] || '').trim();

    if (rowEmail === correo && rowPass === password) {
      return jsonOut({
        status: 'success',
        message: 'Inicio de sesión exitoso',
        customer: {
          ID_Cliente: row[0],
          Nombre: row[1],
          Apellido: row[2],
          Correo: row[3],
          Prefix: row[5] || '+51',
          Celular: row[6] || '',
          Cumpleaños: row[7] || ''
        }
      });
    }
  }

  return jsonOut({ status: 'error', message: 'Correo o contraseña incorrectos.' });
}

// ──────────────────────────────────────────
//  LÓGICA DE REGISTRO DE PEDIDOS
// ──────────────────────────────────────────
function handleCreateOrder(data) {
  const shPedidos = openSheet(SHEET_PEDIDOS);
  const shDetalle = openSheet(SHEET_DETALLE);

  // 1. Generar ID_Pedido correlativo: PED-YYYYMMDD-001, PED-YYYYMMDD-002...
  const todayStr = Utilities.formatDate(new Date(), 'GMT-5', 'yyyyMMdd');
  const todayPrefix = 'PED-' + todayStr + '-';
  
  let maxCorrelative = 0;
  const lastRow = shPedidos.getLastRow();
  if (lastRow > 1) {
    const ids = shPedidos.getRange(2, 1, lastRow - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      const idVal = String(ids[i][0] || '').trim();
      if (idVal.startsWith(todayPrefix)) {
        const numPart = idVal.replace(todayPrefix, '');
        const parsed = parseInt(numPart, 10);
        if (!isNaN(parsed) && parsed > maxCorrelative) {
          maxCorrelative = parsed;
        }
      }
    }
  }
  const nextCorrelative = maxCorrelative + 1;
  const orderId = todayPrefix + String(nextCorrelative).padStart(3, '0');

  // 2. Mapeo de Método de Envío
  let rawEnv = String(data.Met_Env || data.shippingMethod || data.metodoEnvio || '').toLowerCase();
  let metEnv = 'entrega gratuita';
  if (rawEnv.includes('express') || rawEnv.includes('inmediat')) {
    metEnv = 'Express';
  } else if (rawEnv.includes('recojo') || rawEnv.includes('tienda') || rawEnv.includes('pickup')) {
    metEnv = 'recojo en tienda';
  } else {
    metEnv = 'entrega gratuita';
  }

  // 3. Cantidad de Artículos y Total
  let items = [];
  if (Array.isArray(data.items)) {
    items = data.items;
  } else if (typeof data.items === 'string') {
    try {
      items = JSON.parse(data.items);
    } catch (e) {
      items = [];
    }
  }

  let cantArt = 0;
  let computedSubtotal = 0;
  items.forEach(it => {
    const q = Number(it.quantity || it.Cantidad || it.cant || 1) || 1;
    const p = Number(it.PV || it.price || it.Precio || 0) || 0;
    cantArt += q;
    computedSubtotal += (q * p);
  });

  if (cantArt === 0 && data.Cant_art) {
    cantArt = Number(data.Cant_art) || 1;
  }

  const shippingCost = (metEnv === 'Express') ? 25 : 0;
  const finalTotal = Number(data.Total || data.total) || (computedSubtotal + shippingCost);

  // 4. Datos del Cliente
  const idCliente = String(data.ID_Cliente || data.idCliente || data.customerId || '').trim();
  const nombre = String(data.Nombre || data.customerFirstName || data.nombre || '').trim();
  const apellido = String(data.Apellido || data.customerLastName || data.apellido || '').trim();
  const dni = String(data.DNI || data.customerDni || data.dni || '').trim();
  
  // Formatear número de celular con apóstrofe (') antes de +51 para Google Sheets
  let rawPhone = String(data.Número_celular || data['Número celular'] || data.Numero_celular || data.customerPhone || data.celular || '').trim();
  let numCelular = '';
  if (rawPhone) {
    let clean = rawPhone.replace(/^'/, '').trim();
    if (!clean.startsWith('+51')) {
      clean = '+51 ' + clean.replace(/^\+?51\s*/, '');
    }
    numCelular = "'" + clean;
  }

  const departamento = String(data.Departamento || data.customerDepartment || data.departamento || '').trim();
  const distrito = String(data.Distrito || data.customerDistrict || data.distrito || '').trim();
  const direccion = String(data.Direccion || data.Dirección || data.customerAddress || data.direccion || '').trim();
  const referencia = String(data.Refrenecia || data.Referencia || data.customerReference || data.referencia || '').trim();
  const correo = String(data.Correo || data.customerEmail || data.correo || data.email || '').trim();
  const nombreNovia = String(data.Nombre_Novia || data.nombreNovia || data.brideName || '').trim();
  const fechaNovia = String(data.Fecha_Novia || data.fechaNovia || data.brideBirthday || '').trim();

  // 5. Mapeo Dinámico según cabeceras de la hoja Pedidos
  const numCols = Math.max(shPedidos.getLastColumn(), 16);
  const headerRow = shPedidos.getRange(1, 1, 1, numCols).getValues()[0];
  
  // Construir fila alineada a las cabeceras exactas
  let newRow = [];
  if (headerRow && headerRow.length > 0 && String(headerRow[0]).trim() !== '') {
    for (let c = 0; c < headerRow.length; c++) {
      const h = String(headerRow[c] || '').trim().toLowerCase();
      if (h.includes('id_pedido') || h === 'pedido') {
        newRow.push(orderId);
      } else if (h.includes('id_cliente') || h === 'cliente') {
        newRow.push(idCliente);
      } else if (h.includes('correo') || h.includes('email')) {
        newRow.push(correo);
      } else if (h === 'nombre' || h === 'nombres') {
        newRow.push(nombre);
      } else if (h === 'apellido' || h === 'apellidos') {
        newRow.push(apellido);
      } else if (h === 'dni' || h === 'documento') {
        newRow.push(dni);
      } else if (h.includes('celular') || h.includes('tel')) {
        newRow.push(numCelular);
      } else if (h.includes('departamento') || h === 'depto') {
        newRow.push(departamento);
      } else if (h.includes('distrito') || h === 'ciudad') {
        newRow.push(distrito);
      } else if (h.includes('direccio') || h === 'direccion') {
        newRow.push(direccion);
      } else if (h.includes('refren') || h.includes('referen')) {
        newRow.push(referencia);
      } else if (h.includes('met_env') || h.includes('envio') || h.includes('envío')) {
        newRow.push(metEnv);
      } else if (h.includes('nombre_novia') || (h.includes('novia') && !h.includes('fecha'))) {
        newRow.push(nombreNovia);
      } else if (h.includes('fecha_novia') || h.includes('cumple_novia') || (h.includes('novia') && h.includes('fecha'))) {
        newRow.push(fechaNovia);
      } else if (h.includes('cant_art') || h.includes('cantidad') || h.includes('articulos')) {
        newRow.push(cantArt);
      } else if (h === 'total' || h.includes('monto')) {
        newRow.push(finalTotal);
      } else {
        newRow.push('');
      }
    }
  } else {
    // Si no hay cabecera explícita, usar el orden estándar
    newRow = [
      orderId,
      idCliente,
      correo,
      nombre,
      apellido,
      dni,
      numCelular,
      departamento,
      distrito,
      direccion,
      referencia,
      metEnv,
      nombreNovia,
      fechaNovia,
      cantArt,
      finalTotal
    ];
  }

  shPedidos.appendRow(newRow);

  // 6. Insertar en Detalle de Pedido
  if (items.length > 0) {
    items.forEach(it => {
      const q = Number(it.quantity || it.Cantidad || 1) || 1;
      const p = Number(it.PV || it.price || 0) || 0;
      shDetalle.appendRow([
        orderId,
        it.ID_Producto || it.id || '',
        it.Nombre_Producto || it.name || '',
        q,
        p,
        q * p
      ]);
    });
  }

  return jsonOut({
    status: 'success',
    orderId: orderId,
    message: 'Pedido registrado con éxito en la base de datos',
    order: {
      ID_Pedido: orderId,
      ID_Cliente: idCliente,
      Nombre: nombre,
      Apellido: apellido,
      DNI: dni,
      Numero_celular: numCelular,
      Departamento: departamento,
      Distrito: distrito,
      Direccion: direccion,
      Refrenecia: referencia,
      Met_Env: metEnv,
      Cant_art: cantArt,
      Total: finalTotal
    }
  });
}
