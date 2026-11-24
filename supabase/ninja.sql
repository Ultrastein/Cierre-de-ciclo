-- Resultados del desafio Ninja Digital. Ejecutar DESPUES de setup.sql (usa admin_chequear).
-- Los alumnos solo pueden insertar; leer/borrar requiere la clave del profe.

create table if not exists public.ninja_resultados (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  grado smallint check (grado between 5 and 7),  -- opcional: el desafio Ninja no pide grado
  nombre text not null check (char_length(nombre) between 1 and 60),
  apellido text not null check (char_length(apellido) between 1 and 60),
  cinturon text not null check (char_length(cinturon) <= 30),
  porcentaje smallint not null check (porcentaje between 0 and 100),
  respuestas jsonb not null check (pg_column_size(respuestas) <= 20000),
  cv_html text check (cv_html is null or char_length(cv_html) <= 900000),  -- CV del alumno (opcional)
  theme text check (theme is null or char_length(theme) <= 20)
);

alter table public.ninja_resultados enable row level security;
revoke all on public.ninja_resultados from anon, authenticated;
grant insert on public.ninja_resultados to anon;
create policy "alumnos pueden enviar ninja" on public.ninja_resultados
  for insert to anon with check (true);

create or replace function public.admin_listar_ninja(p_clave text)
returns setof public.ninja_resultados
language plpgsql security definer set search_path = '' as $$
begin
  perform public.admin_chequear(p_clave);
  return query select * from public.ninja_resultados order by created_at desc;
end $$;

create or replace function public.admin_borrar_ninja(p_clave text, p_id uuid) returns void
language plpgsql security definer set search_path = '' as $$
begin
  perform public.admin_chequear(p_clave);
  delete from public.ninja_resultados where id = p_id;
end $$;

revoke all on function public.admin_listar_ninja(text), public.admin_borrar_ninja(text, uuid) from public;
grant execute on function public.admin_listar_ninja(text), public.admin_borrar_ninja(text, uuid) to anon;
