-- Base de datos para recibir los CV de los alumnos (sin login).
-- Los alumnos SOLO pueden insertar. Leer/borrar requiere la clave del profe.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.entregas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  grado smallint not null check (grado between 5 and 7),
  nombre text not null check (char_length(nombre) between 1 and 60),
  apellido text not null check (char_length(apellido) between 1 and 60),
  rol text check (char_length(rol) <= 100),
  theme text check (char_length(theme) <= 20),
  cv_html text not null check (char_length(cv_html) <= 900000),
  data jsonb check (pg_column_size(data) <= 200000)
);

alter table public.entregas enable row level security;
revoke all on public.entregas from anon, authenticated;
grant insert on public.entregas to anon;
create policy "alumnos pueden enviar" on public.entregas
  for insert to anon with check (true);
-- (sin policy de select/update/delete: nadie puede leer desde afuera)

create table if not exists public.admin_config (clave_hash text not null);
alter table public.admin_config enable row level security;
revoke all on public.admin_config from anon, authenticated;

-- Clave del profe (CAMBIAR antes de correr, usar una larga):
delete from public.admin_config;
insert into public.admin_config
  values (extensions.crypt('CAMBIAR_ESTA_CLAVE', extensions.gen_salt('bf')));

create or replace function public.admin_chequear(p_clave text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not exists (select 1 from public.admin_config
                 where clave_hash = extensions.crypt(p_clave, clave_hash)) then
    perform pg_sleep(1);
    raise exception 'clave incorrecta';
  end if;
end $$;

create or replace function public.admin_listar(p_clave text)
returns setof public.entregas
language plpgsql security definer set search_path = '' as $$
begin
  perform public.admin_chequear(p_clave);
  return query select * from public.entregas order by created_at desc;
end $$;

create or replace function public.admin_borrar(p_clave text, p_id uuid) returns void
language plpgsql security definer set search_path = '' as $$
begin
  perform public.admin_chequear(p_clave);
  delete from public.entregas where id = p_id;
end $$;

revoke all on function public.admin_chequear(text) from public, anon, authenticated;
revoke all on function public.admin_listar(text), public.admin_borrar(text, uuid) from public;
grant execute on function public.admin_listar(text), public.admin_borrar(text, uuid) to anon;
