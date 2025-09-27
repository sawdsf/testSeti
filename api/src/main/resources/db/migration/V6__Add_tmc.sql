create table tmc (
    id bigserial primary key not null,
    name varchar(255) not null
);

insert into tmc (name) values
('Ноутбук Lenovo ThinkPad'),
('Монитор Samsung 24"'),
('Клавиатура Logitech'),
('Мышь A4Tech'),
('Принтер HP LaserJet'),
('Сканер Canon');