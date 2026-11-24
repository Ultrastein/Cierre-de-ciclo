# Mi Álbum de Logros 2026 · Escuela Bereshit

App para que los alumnos de 5°, 6° y 7° armen su álbum de logros tech y se lo envíen al profe sin cuentas ni mail.

- `index.html`: la app de los alumnos.
- `admin.html`: panel del profe (pide clave). Ver, imprimir, borrar y bajar entregas.
- `config.js`: URL y key publicable de Supabase (pública por diseño, solo permite insertar).
- `supabase/setup.sql`: tabla y permisos. Reemplazar `CAMBIAR_ESTA_CLAVE` por la clave del profe antes de ejecutarlo.

La clave del profe NO está en este repositorio.
- `ninja.html`: Desafio Ninja Digital (preguntas por bloque, cinturones). Las preguntas salen de la grilla anual y estan en `ninja-preguntas.js`.
- `supabase/ninja.sql`: tabla de resultados del desafio (ejecutar despues de `setup.sql`).
